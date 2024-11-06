import type { Metadata } from 'next';
import Image from 'next/image';
import './globals.css';

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
        <div
          role="navigation"
          className="w-full flex items-center justify-between py-4 px-8 sm:px-12 bg-background dark:bg-foreground"
        >
          <div className="flex text-stone-600 gap-2">
            <Image
              aria-hidden
              src="/file.svg"
              alt="File icon"
              width={16}
              height={16}
            />
            <h1>A To-Do List app with Next.js</h1>
          </div>
          <ul className="flex text-stone-600 gap-4">
            <li>Home</li>
            <li>To-Dos</li>
            <li>My Account</li>
          </ul>
        </div>
        {children}
      </body>
    </html>
  );
}
