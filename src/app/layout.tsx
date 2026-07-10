import type { Metadata } from 'next';
import '../index.css';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://codesstellar.com'),
  title: {
    default: 'Codesstellar | Quantum-ready blockchain systems',
    template: '%s | Codesstellar',
  },
  description: 'Crypto-agile blockchain engineering, post-quantum readiness, and AI-assisted security workflows for long-lived digital infrastructure.',
  keywords: ['post-quantum cryptography', 'PQC blockchain', 'crypto-agility', 'blockchain security', 'AI security', 'Web3 engineering'],
  openGraph: {
    type: 'website',
    siteName: 'Codesstellar',
    title: 'Codesstellar | Quantum-ready blockchain systems',
    description: 'Crypto-agile blockchain engineering, post-quantum readiness, and AI-assisted security workflows.',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
