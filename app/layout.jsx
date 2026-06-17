import { Playfair_Display, JetBrains_Mono, Inter } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '700', '900'],
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  weight: ['300', '400', '500'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata = {
  title: 'Faathir Azukhruf — Full Stack Developer & AI Engineer',
  description:
    'Full Stack Developer and AI Automation Engineer building AI-first products, ERP systems, and intelligent automation. Based in Indonesia.',
  keywords: ['Full Stack Developer', 'AI Engineer', 'Next.js', 'KIRO', 'Dipa AI', 'Portfolio'],
  openGraph: {
    title: 'Faathir Azukhruf — Full Stack Developer & AI Engineer',
    description: 'Building AI-first products, ERP systems, and intelligent automation.',
    url: 'https://portfolio-faathir.vercel.app',
    siteName: 'Faathir Portfolio',
  },
  icons: {
    icon: '/Faathiranime.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${jetbrains.variable} ${inter.variable}`}>
      <body className="font-sans antialiased bg-background text-text">
        {/* Global grain/noise texture overlay */}
        <div
          className="pointer-events-none fixed inset-0 z-[9999] opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            backgroundSize: '200px 200px',
          }}
        />
        {children}
      </body>
    </html>
  );
}
