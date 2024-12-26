import type { Metadata } from 'next';
import { ThemeProvider } from '../providers/theme-provider';
import Navbar from '../components/layout/navbar/Navbar';
import Footer from '@/components/layout/footer/Footer';
import FloatingCallButton from '@/components/ui/FloatingCallButton';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: {
    default: 'DevHire - Top JavaScript & TypeScript Developers',
    template: '%s | DevHire'
  },
  description: 'Hire top JavaScript and TypeScript developers for your projects. Expert React, Node.js, and full-stack developers with risk-free trial period.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased min-h-screen flex flex-col" suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <FloatingCallButton />
        </ThemeProvider>
      </body>
    </html>
  );
}