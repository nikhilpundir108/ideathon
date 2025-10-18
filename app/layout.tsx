import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ideathon 2K25 | Ignite Innovation, Inspire the Future',
  description: 'A National-Level Idea Pitching Challenge organized by Meerut Institute of Engineering and Technology. Join us to transform your innovative ideas into reality.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
