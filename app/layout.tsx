import { ReactNode } from 'react';

export default function LocaleLayout({ children, params: { locale } }: { children: ReactNode; params: { locale: string } }) {
  const messages = useMessages();
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
