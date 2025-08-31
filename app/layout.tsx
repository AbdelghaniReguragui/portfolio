import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Abdelghani Reguragui - Software Engineer',
  description: 'Portfolio of Abdelghani Reguragui, Software Engineer specializing in .NET technologies, microservices architecture, and modern web development.',
  keywords: ['Software Engineer', '.NET', 'React', 'Angular', 'Microservices', 'Clean Architecture'],
  authors: [{ name: 'Abdelghani Reguragui' }],
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
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}