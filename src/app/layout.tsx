import type { Metadata, Viewport } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export const metadata: Metadata = {
  title: 'FlexiRide – Vehicle Rental in Delhi NCR | Hourly & Daily Car Rentals',
  description:
    'Experience flexible hourly and daily vehicle rentals across Delhi NCR with FlexiRide. Book hatchbacks, sedans, SUVs, and premium luxury cars with transparent pricing, zero hidden charges, and doorstep delivery.',
  keywords: [
    'vehicle rental Delhi NCR',
    'hourly car rental Delhi',
    'daily car rental Gurugram',
    'self drive car rental Noida',
    'FlexiRide',
    'Delhi NCR car hire',
    'suv rental Delhi',
    'luxury car rental Delhi NCR',
  ],
  authors: [{ name: 'FlexiRide Delhi NCR' }],
  openGraph: {
    title: 'FlexiRide – Your Journey, Your Way | Delhi NCR Vehicle Rentals',
    description:
      'Rent Hatchbacks, Sedans, SUVs and Premium cars on flexible hourly and daily tariffs across Delhi, Gurugram, Noida, and NCR.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'FlexiRide',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0B132B',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-brand-navy-950 text-slate-100 antialiased selection:bg-brand-orange selection:text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
