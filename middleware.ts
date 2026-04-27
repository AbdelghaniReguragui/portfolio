import { NextRequest, NextResponse } from 'next/server';
import { defaultLocale, locales } from '@/lib/i18n';

const LOCALE_COOKIE = 'NEXT_LOCALE';

function isSupportedLocale(value: string): value is (typeof locales)[number] {
  return locales.includes(value as (typeof locales)[number]);
}

function getLocaleFromPathname(pathname: string): (typeof locales)[number] | null {
  const segment = pathname.split('/')[1];
  return isSupportedLocale(segment) ? segment : null;
}

function getPreferredLocale(request: NextRequest): (typeof locales)[number] {
  const cookieLocale = request.cookies.get(LOCALE_COOKIE)?.value;
  if (cookieLocale && isSupportedLocale(cookieLocale)) {
    return cookieLocale;
  }

  const acceptLanguage = request.headers.get('accept-language') || '';
  const candidates = acceptLanguage
    .split(',')
    .map((entry) => entry.split(';')[0]?.trim().toLowerCase())
    .filter(Boolean);

  for (const candidate of candidates) {
    const base = candidate.split('-')[0];
    if (isSupportedLocale(base)) {
      return base;
    }
  }

  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const localeFromPath = getLocaleFromPathname(pathname);

  if (pathname === '/') {
    const locale = getPreferredLocale(request);
    const url = request.nextUrl.clone();
    url.pathname = `/${locale}`;

    const response = NextResponse.redirect(url);
    response.cookies.set(LOCALE_COOKIE, locale, { path: '/' });
    return response;
  }

  if (!localeFromPath) {
    const locale = getPreferredLocale(request);
    const url = request.nextUrl.clone();
    url.pathname = `/${locale}${pathname}`;
    url.search = search;

    const response = NextResponse.redirect(url);
    response.cookies.set(LOCALE_COOKIE, locale, { path: '/' });
    return response;
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-locale', localeFromPath);

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  response.cookies.set(LOCALE_COOKIE, localeFromPath, { path: '/' });
  return response;
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)'],
};