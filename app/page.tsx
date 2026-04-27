import { redirect } from 'next/navigation';
import { defaultLocale } from '@/lib/i18n';

export const runtime = 'edge';

export default function Home() {
  redirect(`/${defaultLocale}`);
}