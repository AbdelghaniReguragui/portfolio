"use client";
import { usePathname, useRouter } from 'next/navigation';

const locales = [
  { code: 'en', label: 'EN' },
  { code: 'fr', label: 'FR' }
];

export function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const currentLocale = pathname.split('/')[1];

  const handleSwitch = (locale: string) => {
    if (locale === currentLocale) return;
    // Replace the first segment with the new locale
    const segments = pathname.split('/');
    segments[1] = locale;
    const newPath = segments.join('/') || '/';
    router.push(newPath);
  };

  return (
    <div className="flex gap-2 items-center">
      {locales.map(({ code, label }) => (
        <button
          key={code}
          onClick={() => handleSwitch(code)}
          className={`px-3 py-1 rounded font-semibold border transition-colors text-xs
            ${currentLocale === code
              ? 'bg-emerald-600 text-white border-emerald-700'
              : 'bg-white/80 text-emerald-700 border-emerald-400 hover:bg-emerald-50 dark:bg-gray-900 dark:text-emerald-300 dark:border-emerald-700 dark:hover:bg-emerald-900/30'}
          `}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
