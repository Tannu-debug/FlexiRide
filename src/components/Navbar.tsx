'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Car, Menu, X, Phone, MessageSquare, Clock, MapPin, ChevronRight, ShieldCheck } from 'lucide-react';

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Our Vehicles', href: '/vehicles' },
  { name: 'How It Works', href: '/how-it-works' },
  { name: 'Contact Us', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Top Notification Bar */}
      <div className="bg-brand-navy-950 text-slate-300 text-xs py-2 px-4 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 font-medium text-brand-orange-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-orange-500"></span>
              </span>
              Now Serving Delhi NCR
            </span>
            <span className="hidden md:inline text-slate-500">|</span>
            <span className="hidden md:inline-flex items-center gap-1 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-brand-orange-400" /> Hourly & Daily Flexible Rentals
            </span>
            <span className="hidden lg:inline text-slate-500">|</span>
            <span className="hidden lg:inline-flex items-center gap-1 text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Sanitized Fleet & Zero Hidden Fees
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <span className="flex items-center gap-1 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-brand-orange-400" /> Delhi &bull; Gurugram &bull; Noida
            </span>
            <a
              href="https://wa.me/919800000000?text=Hi%20FlexiRide,%20I%20would%20like%20to%20enquire%20about%20vehicle%20rentals%20in%20Delhi%20NCR."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-medium transition"
            >
              <MessageSquare className="w-3.5 h-3.5" /> WhatsApp Support
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-brand-navy-900/95 backdrop-blur-md shadow-xl border-b border-slate-800'
            : 'bg-brand-navy-900/90 backdrop-blur-sm border-b border-slate-800/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Brand Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-brand-orange to-brand-orange-600 flex items-center justify-center text-white shadow-glow transition transform group-hover:scale-105">
                <Car className="w-6 h-6 stroke-[2.2]" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-2xl font-black tracking-tight text-white">
                    Flexi<span className="text-brand-orange">Ride</span>
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-brand-orange/20 text-brand-orange px-1.5 py-0.5 rounded border border-brand-orange/30">
                    NCR
                  </span>
                </div>
                <span className="text-[10px] font-medium tracking-wide text-slate-400 group-hover:text-slate-300 transition">
                  Your Ride. Your Time. Your Way.
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition duration-200 ${
                      isActive
                        ? 'text-brand-orange bg-brand-orange/10 font-semibold'
                        : 'text-slate-200 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Action Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="https://wa.me/919800000000?text=Hi%20FlexiRide,%20I%20have%20a%20booking%20enquiry%20for%20Delhi%20NCR."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 transition"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat</span>
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-brand-orange to-brand-orange-600 hover:from-brand-orange-600 hover:to-brand-orange-700 shadow-glow transition transform hover:-translate-y-0.5"
              >
                <span>Book Your Ride</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center gap-2">
              <Link
                href="/contact"
                className="px-3 py-1.5 rounded-md text-xs font-semibold text-white bg-brand-orange hover:bg-brand-orange-600 transition"
              >
                Book
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-brand-navy-950 border-b border-slate-800 px-4 pt-3 pb-6 animate-fadeIn">
            <div className="space-y-1">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`block px-4 py-2.5 rounded-lg text-base font-medium transition ${
                      isActive
                        ? 'bg-brand-orange/15 text-brand-orange font-semibold'
                        : 'text-slate-200 hover:bg-slate-800/80 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            <div className="mt-5 pt-4 border-t border-slate-800 space-y-3">
              <Link
                href="/contact"
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-bold text-white bg-brand-orange hover:bg-brand-orange-600 shadow-glow transition"
              >
                <span>Book Your Ride</span>
                <ChevronRight className="w-4 h-4" />
              </Link>

              <a
                href="https://wa.me/917011184862?text=Hi%20FlexiRide,%20I%20have%20a%20booking%20enquiry%20for%20Delhi%20NCR."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 hover:bg-emerald-500/20 transition"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Enquiry (+91 7011184862)</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
