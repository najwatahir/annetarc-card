import './globals.css';
import Navbar from '@/components/Navbar';
import { Pixelify_Sans, JetBrains_Mono } from 'next/font/google';

const pixelify = Pixelify_Sans({
  subsets: ['latin'],
  variable: '--font-pixelify',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  fallback: ['monospace'],  // Add a fallback font
});

export const metadata = {
  title: 'Najwa ᯓ★',
  description: 'Najwa Personal Website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${pixelify.variable} ${jetbrains.variable}`}>
        <Navbar />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
