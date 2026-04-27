export const locales = ['en', 'fr', 'ar'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export function isValidLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export async function getMessages(locale: Locale) {
  switch (locale) {
    case 'fr':
      return (await import('@/messages/fr.json')).default;
    case 'ar':
      return (await import('@/messages/ar.json')).default;
    case 'en':
    default:
      return (await import('@/messages/en.json')).default;
  }
}