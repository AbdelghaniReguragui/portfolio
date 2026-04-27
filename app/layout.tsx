import './globals.css';
import type { Metadata } from 'next';
import { Inter, Cairo } from 'next/font/google';
import { headers } from 'next/headers';
import { ThemeProvider } from '@/components/theme-provider';
import { defaultLocale, locales } from '@/lib/i18n';

const inter = Inter({ subsets: ['latin'] });
const cairo = Cairo({ subsets: ['arabic', 'latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.abdelghanireguragui.com'),
  title: 'Abdelghani Reguragui - Software Engineer',
  description: 'Portfolio of Abdelghani Reguragui, Software Engineer specializing in .NET technologies, microservices architecture, and modern web development.',
  keywords: ['Software Engineer', '.NET', 'React', 'Angular', 'Microservices', 'Clean Architecture'],
  authors: [{ name: 'Abdelghani Reguragui' }],
  verification: {
    google: 'db1d42fa972e301a',
  },
  openGraph: {
    title: 'Abdelghani Reguragui - Software Engineer',
    description: 'Portfolio of Abdelghani Reguragui, Software Engineer specializing in .NET technologies',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const localeHeader = headers().get('x-locale') || defaultLocale;
  const htmlLang = locales.includes(localeHeader as (typeof locales)[number])
    ? localeHeader
    : defaultLocale;
  const isRtl = htmlLang === 'ar';

  return (
    <html lang={htmlLang} dir={isRtl ? 'rtl' : 'ltr'} suppressHydrationWarning>
      <body className={isRtl ? cairo.className : inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}