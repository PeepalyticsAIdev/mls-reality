import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { domAnimation, LazyMotion } from 'motion/react';

import './globals.css';
import NavBar from '@/components/navbar/NavBar';
import Footer from '@/components/footer/Footer';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'MLS Realty - Nevis & St. Kitts',
  description:
    'A comprehensive real estate platform for Nevis & St. Kitts, consolidating property listings, enhancing market transparency, and attracting local and international buyers.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <LazyMotion features={domAnimation}>
          <NavBar />
          {children}
          <Footer />
        </LazyMotion>
      </body>
    </html>
  );
}
