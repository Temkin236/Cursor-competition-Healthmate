import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { AuthProvider } from '@/contexts/AuthContext';
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: 'HealthMate - Your Personal Health Assistant',
  description: 'Track your health, get AI-powered insights, and improve your wellness journey with HealthMate.',
  keywords: 'health tracking, wellness, AI health assistant, fitness, nutrition, sleep tracking',
  authors: [{ name: 'HealthMate Team' }],
  robots: 'index, follow',
  openGraph: {
    title: 'HealthMate - Your Personal Health Assistant',
    description: 'Track your health, get AI-powered insights, and improve your wellness journey.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HealthMate - Your Personal Health Assistant',
    description: 'Track your health, get AI-powered insights, and improve your wellness journey.',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#10b981',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          {children}
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: '#363636',
                color: '#fff',
              },
              success: {
                duration: 3000,
                iconTheme: {
                  primary: '#10b981',
                  secondary: '#fff',
                },
              },
              error: {
                duration: 5000,
                iconTheme: {
                  primary: '#ef4444',
                  secondary: '#fff',
                },
              },
            }}
          />
        </AuthProvider>
      </body>
    </html>
  );
} 