import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';

export default async function HomePage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);
  const t = await getTranslations('Home');

  // Example content, replace with your real homepage content
  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">{t('title')}</h1>
      <p className="text-lg text-muted-foreground">{t('welcome')}</p>
    </main>
  );
}

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'fr' }];
}

export const dynamicParams = false;
