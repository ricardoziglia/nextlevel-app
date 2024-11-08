import type { Metadata } from 'next';
import './globals.css';
import MainHeader from '@/app/_components/header/main-header';

export const metadata: Metadata = {
  title: 'To-Do Next App',
  description: 'A practicing To-Do app built with Next.js',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
