import type { Metadata } from 'next';
import { Rubik, Rubik_Glitch, Outfit } from 'next/font/google';
import './globals.css';

const rubik = Rubik({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-rubik',
});
const rubik_glitch = Rubik_Glitch({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-rubik-glitch',
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
    <html
      lang="en"
      className={[rubik.variable, rubik_glitch.variable, outfit.variable].join(
        ' ',
      )}
    >
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
