import React, { Suspense } from 'react';
import EnquiryForm from '@/components/EnquiryForm';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageSquare,
  ShieldAlert,
  Sparkles,
  Info,
  Car,
  Navigation,
} from 'lucide-react';
import { DELHI_NCR_LOCATIONS } from '@/data/locations';

export const metadata = {
  title: 'Contact Us & Booking Enquiries – FlexiRide Delhi NCR',
  description:
    'Submit your vehicle rental enquiry for flexible hourly and daily rentals across Delhi, Gurugram, Noida, and NCR with FlexiRide.',
};

export default function ContactPage() {
  return (
    <div className="bg-brand-navy-950 min-h-screen text-slate-100 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-orange/15 text-brand-orange border border-brand-orange/30">
            <Sparkles className="w-3.5 h-3.5" /> Direct Enquiries & Reservations
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Contact FlexiRide <span className="text-brand-orange">Delhi NCR</span>
          </h1>
          <p className="text-base text-slate-300 leading-relaxed">
            Ready to book your next ride or have questions regarding our flexible hourly and daily rates? Fill out the enquiry form below or reach out via our WhatsApp helpline.
          </p>
        </div>

        {/* Form and Contact Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Enquiry Form (8 cols on desktop) */}
          <div className="lg:col-span-8">
            <Suspense fallback={<div className="p-8 text-center text-slate-400 bg-brand-navy-900 rounded-3xl">Loading reservation form...</div>}>
              <EnquiryForm />
            </Suspense>
          </div>

          {/* Contact Details & Service Information Sidebar (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Quick WhatsApp Contact Card */}
            <div className="bg-gradient-to-br from-emerald-950/40 via-brand-navy-900 to-brand-navy-900 border border-emerald-500/40 rounded-3xl p-6 sm:p-7 space-y-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Instant WhatsApp Chat</h3>
                  <p className="text-xs text-emerald-400">Delhi NCR Quick Desk</p>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Connect with our team for quick vehicle availability checks, custom multi-day quotations, or doorstep delivery requests.
              </p>

              <a
                href="https://wa.me/917011184862?text=Hi%20FlexiRide,%20I%20have%20an%20enquiry%20regarding%20vehicle%20rentals%20in%20Delhi%20NCR."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition flex items-center justify-center gap-2 shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp (+91 7011184862)</span>
              </a>

              <p className="text-[10px] text-slate-400 text-center italic">
                *Configurable placeholder helpline for business demonstration.
              </p>
            </div>

            {/* Service Area & Hub Information */}
            <div className="bg-brand-navy-900 border border-slate-800 rounded-3xl p-6 sm:p-7 space-y-5">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brand-orange" />
                <span>Proposed Service Territory</span>
              </h3>

              <div className="space-y-3 text-xs text-slate-300">
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                  <div className="font-bold text-white flex items-center gap-1.5">
                    <Navigation className="w-3.5 h-3.5 text-brand-orange" />
                    Central & South Delhi
                  </div>
                  <p className="text-slate-400 text-[11px]">
                    Connaught Place, Saket District Centre, Nehru Place, IGI Airport Terminal 3, Aerocity.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                  <div className="font-bold text-white flex items-center gap-1.5">
                    <Navigation className="w-3.5 h-3.5 text-brand-orange" />
                    Gurugram & Cyber City
                  </div>
                  <p className="text-slate-400 text-[11px]">
                    DLF Cyber Hub, Rapid Metro, Golf Course Road, Sector 29 Leisure Valley.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                  <div className="font-bold text-white flex items-center gap-1.5">
                    <Navigation className="w-3.5 h-3.5 text-brand-orange" />
                    Noida & Greater Noida
                  </div>
                  <p className="text-slate-400 text-[11px]">
                    Sector 18 Atta Market, Sector 62 Electronic City, Pari Chowk Knowledge Park.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                  <div className="font-bold text-white flex items-center gap-1.5">
                    <Navigation className="w-3.5 h-3.5 text-brand-orange" />
                    Faridabad & Ghaziabad
                  </div>
                  <p className="text-slate-400 text-[11px]">
                    Bata Chowk Metro Hub, Indirapuram, Vaishali.
                  </p>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-800 space-y-2 text-xs">
                <div className="flex items-center gap-2 text-slate-300">
                  <Clock className="w-4 h-4 text-brand-orange shrink-0" />
                  <span>Support Hours: 24/7 Roadside & Helpline</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <Mail className="w-4 h-4 text-brand-orange shrink-0" />
                  <span>enquiry@flexiride-delhincr.example.com</span>
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </div>
  );
}
