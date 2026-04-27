import Link from 'next/link';

export const runtime = 'edge';

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-4xl font-bold mb-3">404</h1>
      <p className="text-muted-foreground mb-6">Page not found</p>
      <Link
        href="/en"
        className="inline-flex items-center rounded-md bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-700 transition-colors"
      >
        Back to home
      </Link>
    </main>
  );
}
