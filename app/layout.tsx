import './globals.css';
import type { Metadata } from 'next';
import { Inter, Open_Sans } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
});

export const metadata: Metadata = {
  title: 'Narrador IA',
  description: 'Convierte texto publicitario a voz con inteligencia artificial',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='es' suppressHydrationWarning>
      <body
        className={`${inter.variable} ${openSans.variable} font-sans bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
