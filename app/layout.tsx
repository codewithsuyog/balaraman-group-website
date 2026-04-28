import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Balaraman Research Group | Catalysis & Sustainable Chemistry',
  description: 'The Balaraman Research Group at IISER Tirupati specializes in catalysis, organometallic chemistry, and sustainable synthesis.',
  keywords: 'catalysis, organometallic chemistry, sustainable chemistry, research, IISER Tirupati',
  authors: [{ name: 'Balaraman Research Group' }],
  openGraph: {
    title: 'Balaraman Research Group',
    description: 'Catalysis, Sustainable Chemistry & Molecular Design',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  );
}
