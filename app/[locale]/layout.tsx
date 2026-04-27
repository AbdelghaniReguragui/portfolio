import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { I18nProvider } from '@/components/i18n-provider';
import { getMessages, isValidLocale, locales, defaultLocale } from '@/lib/i18n';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.abdelghanireguragui.com';

const metaByLocale = {
  en: {
    title: 'Abdelghani Reguragui - Software Engineer',
    description:
      'Portfolio of Abdelghani Reguragui, Software Engineer specializing in .NET, microservices architecture, React and Angular. Based in Casablanca, Morocco.',
    ogLocale: 'en_US',
  },
  fr: {
    title: 'Abdelghani Reguragui - Ingénieur Logiciel',
    description:
      "Portfolio d'Abdelghani Reguragui, Ingénieur Logiciel spécialisé en .NET, microservices, React et Angular. Basé à Casablanca, Maroc.",
    ogLocale: 'fr_FR',
  },
  ar: {
    title: 'عبد الغني رعراعي - مهندس برمجيات',
    description:
      'موقع عبد الغني رعراعي، مهندس برمجيات متخصص في .NET والخدمات المصغرة وReact وAngular. مقيم في الدار البيضاء، المغرب.',
    ogLocale: 'ar_MA',
  },
} as const;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale = isValidLocale(params.locale) ? params.locale : defaultLocale;
  const { title, description, ogLocale } = metaByLocale[locale];
  const canonical = `${SITE_URL}/${locale}`;

  return {
    title,
    description,
    keywords: [
      'Abdelghani Reguragui',
      'عبد الغني رعراعي',
      'Software Engineer',
      'Ingénieur Logiciel',
      '.NET',
      'React',
      'Angular',
      'Microservices',
      'Clean Architecture',
      'Casablanca',
      'Morocco',
    ],
    authors: [{ name: 'Abdelghani Reguragui' }],
    creator: 'Abdelghani Reguragui',
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical,
      languages: {
        en: `${SITE_URL}/en`,
        fr: `${SITE_URL}/fr`,
        ar: `${SITE_URL}/ar`,
        'x-default': `${SITE_URL}/en`,
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: 'Abdelghani Reguragui',
      images: [
        {
          url: `${SITE_URL}/images/abdelghani-reguragui.jpg`,
          width: 1200,
          height: 630,
          alt: 'Abdelghani Reguragui - Software Engineer',
        },
      ],
      locale: ogLocale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${SITE_URL}/images/abdelghani-reguragui.jpg`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, 'max-snippet': -1 },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!isValidLocale(params.locale)) {
    notFound();
  }

  const messages = await getMessages(params.locale);

  return (
    <I18nProvider locale={params.locale} messages={messages}>
      {children}
    </I18nProvider>
  );
}
