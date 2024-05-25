import type { Metadata } from 'next';
import { Orbitron, Outfit } from 'next/font/google';
import './globals.css';

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
});
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });

export const metadata: Metadata = {
  title: 'Maximo Besteiro | Home',
  description: "Maximo Besteiro's portfolio page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={[orbitron.variable, outfit.variable].join(' ')}>
      <body
        className={
          process.env.NODE_ENV === 'development' ? 'debug-screens' : ''
        }
      >
        {children}
      </body>
    </html>
  );
}
