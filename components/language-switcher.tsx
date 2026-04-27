"use client";
import { usePathname, useRouter } from 'next/navigation';
import { locales, defaultLocale } from '@/lib/i18n';

const localeLabels = {
  en: 'EN',
  fr: 'FR',
  ar: 'ع',
} as const;

export function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const segments = pathname.split('/').filter(Boolean);
  const firstSegment = segments[0];
  const currentLocale = locales.includes(firstSegment as (typeof locales)[number])
    ? firstSegment
    : defaultLocale;

  const handleSwitch = (locale: string) => {
    if (locale === currentLocale) return;
    const nextSegments = [...segments];

    if (locales.includes((nextSegments[0] || '') as (typeof locales)[number])) {
      nextSegments[0] = locale;
    } else {
      nextSegments.unshift(locale);
    }

    const newPath = `/${nextSegments.join('/')}`;
    router.push(newPath);
  };

  return (
    <div className="flex gap-2 items-center">
      {locales.map((code) => (
        <button
          key={code}
          onClick={() => handleSwitch(code)}
          className={`px-3 py-1 rounded font-semibold border transition-colors text-xs
            ${currentLocale === code
              ? 'bg-emerald-600 text-white border-emerald-700'
              : 'bg-white/80 text-emerald-700 border-emerald-400 hover:bg-emerald-50 dark:bg-gray-900 dark:text-emerald-300 dark:border-emerald-700 dark:hover:bg-emerald-900/30'}
          `}
        >
          {localeLabels[code]}
        </button>
      ))}
    </div>
  );
}
