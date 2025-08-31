import { notFound } from 'next/navigation';

export default async function HomePage({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations('Home'); // Keeping this line for translation retrieval, if needed

  // Example content, replace with your real homepage content
  return (
  <main className="min-h-screen flex flex-col items-center justify-center"> // No change here
      <h1 className="text-4xl font-bold mb-4">{t('title')}</h1>
      <p className="text-lg text-muted-foreground">{t('welcome')}</p>
    </main>
  );
}

export function generateStaticParams() {
  return []; // Return an empty array for a monolingual site
}

export const dynamicParams = false;
