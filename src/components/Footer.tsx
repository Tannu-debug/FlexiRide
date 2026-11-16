import React from 'react';
import Link from 'next/link';
import { Car, MapPin, Phone, Mail, Clock, Shield, ChevronRight, MessageSquare, AlertCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-navy-950 text-slate-300 border-t border-slate-800">
      {/* Illustrative Notice Banner */}
      <div className="bg-brand-navy-900 border-b border-slate-800/80 py-3 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-xs text-slate-400 text-center">
          <AlertCircle className="w-4 h-4 text-brand-orange shrink-0" />
          <span>
            <strong className="text-slate-200">Illustrative Demo Notice:</strong> FlexiRide operates in Delhi NCR. All vehicle listings, tariffs, and availability are illustrative representations for enquiry generation.
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Col (2 cols wide on desktop) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-orange to-brand-orange-600 flex items-center justify-center text-white shadow-glow">
                <Car className="w-5 h-5 stroke-[2.2]" />
              </div>
              <span className="text-2xl font-black tracking-tight text-white">
                Flexi<span className="text-brand-orange">Ride</span>
              </span>
            </Link>

            <p className="text-sm font-semibold text-brand-orange">
              Your Ride. Your Time. Your Way.
            </p>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Modern, customer-focused vehicle rentals across Delhi NCR. Enjoy the freedom of flexible hourly and daily rentals tailored for students, professionals, tourists, and families.
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-xs">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300">
                <Clock className="w-3.5 h-3.5 text-brand-orange" /> Hourly & Daily
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300">
                <Shield className="w-3.5 h-3.5 text-emerald-400" /> 100% Verified Fleet
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-brand-orange" /> Delhi NCR
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="text-slate-400 hover:text-brand-orange transition inline-flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-slate-600" /> Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-400 hover:text-brand-orange transition inline-flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-slate-600" /> About Us
                </Link>
              </li>
              <li>
                <Link href="/vehicles" className="text-slate-400 hover:text-brand-orange transition inline-flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-slate-600" /> Our Vehicles
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-slate-400 hover:text-brand-orange transition inline-flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-slate-600" /> How It Works
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-brand-orange transition inline-flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-slate-600" /> Contact & Enquiries
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-slate-400 hover:text-brand-orange transition inline-flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-slate-600" /> Privacy Policy (Draft)
                </Link>
              </li>
            </ul>
          </div>

          {/* Vehicle Categories */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Categories
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/vehicles?category=Hatchback" className="text-slate-400 hover:text-brand-orange transition">
                  Hatchback (From ₹149/hr)
                </Link>
              </li>
              <li>
                <Link href="/vehicles?category=Sedan" className="text-slate-400 hover:text-brand-orange transition">
                  Sedan (From ₹199/hr)
                </Link>
              </li>
              <li>
                <Link href="/vehicles?category=SUV" className="text-slate-400 hover:text-brand-orange transition">
                  SUV (From ₹279/hr)
                </Link>
              </li>
              <li>
                <Link href="/vehicles?category=Premium Cars" className="text-slate-400 hover:text-brand-orange transition">
                  Premium Cars (From ₹629/hr)
                </Link>
              </li>
              <li className="pt-2">
                <span className="text-xs text-slate-500 block">
                  Flexible options: Self-Drive, Doorstep Delivery, 24/7 Roadside Assistance.
                </span>
              </li>
            </ul>
          </div>

          {/* Service Area & Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Service Locations
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Proposed service hubs and doorstep drop-offs across:
            </p>
            <ul className="text-xs text-slate-400 space-y-1">
              <li className="text-slate-300 font-medium">&bull; Central & South Delhi (CP, Saket, Aerocity)</li>
              <li className="text-slate-300 font-medium">&bull; Gurugram (Cyber City, Golf Course Rd)</li>
              <li className="text-slate-300 font-medium">&bull; Noida & Greater Noida (Sec 18, Pari Chowk)</li>
              <li className="text-slate-300 font-medium">&bull; Faridabad & Ghaziabad</li>
            </ul>

            <div className="pt-2">
              <a
                href="https://wa.me/917011184862?text=Hi%20FlexiRide,%20I%20have%20an%20enquiry%20for%20Delhi%20NCR."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 transition"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp: +91 7011184862</span>
              </a>
              
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} FlexiRide (Delhi NCR). All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-slate-400 transition">
              Privacy Policy (Draft)
            </Link>
            <Link href="/how-it-works" className="hover:text-slate-400 transition">
              Rental Terms & FAQs
            </Link>
            <Link href="/contact" className="hover:text-slate-400 transition">
              Enquiry Desk
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
