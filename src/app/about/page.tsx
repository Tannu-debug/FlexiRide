import React from 'react';
import Link from 'next/link';
import {
  Car,
  Target,
  Eye,
  CheckCircle2,
  Users,
  Briefcase,
  GraduationCap,
  Plane,
  HeartHandshake,
  MapPin,
  Shield,
  ArrowRight,
  Info,
  Clock,
  Sparkles,
} from 'lucide-react';

export const metadata = {
  title: 'About Us – FlexiRide | Vehicle Rental Services in Delhi NCR',
  description:
    'Discover FlexiRide – Delhi NCR’s emerging flexible hourly and daily vehicle rental service. Learn about our customer-focused mission, vision, and core values.',
};

export default function AboutPage() {
  const targetSegments = [
    {
      title: 'Students & Youth',
      icon: GraduationCap,
      description:
        'Pocket-friendly hourly rentals starting from ₹149/hr. Perfect for college commutes across North & South Campus, weekend getaways with friends, and festival shopping trips without worrying about maintenance or insurance costs.',
      perk: 'No long commitments & student-friendly tariffs',
    },
    {
      title: 'Working Professionals',
      icon: Briefcase,
      description:
        'Daily and weekly rentals designed for daily office commutes across DLF Cyber City, Noida Sector 62, and Connaught Place. Enjoy reliable, air-conditioned comfort during monsoons, heatwaves, or when your personal car is in service.',
      perk: 'Punctual transit & corporate invoice receipts',
    },
    {
      title: 'Families & Groups',
      icon: HeartHandshake,
      description:
        'Spacious 5 and 7-seater SUVs and sedans equipped with generous boot space and ISOFIX child-seat anchors. Travel comfortably to family weddings, weekend stays in Neemrana, or pilgrimages to Haridwar and Vrindavan.',
      perk: 'Deep-cleaned, sanitized cabins & spacious boots',
    },
    {
      title: 'Tourists & Explorers',
      icon: CompassIcon,
      description:
        'Explore the rich heritage of Delhi NCR, the Taj Mahal in Agra, or the Royal Palaces of Jaipur with complete self-drive freedom, all-India tourist carriage permits, and unhurried flexible schedules.',
      perk: 'All-India tourist carriage permits & FASTag equipped',
    },
    {
      title: 'Business Travellers',
      icon: Plane,
      description:
        'Executive sedans and premium German luxury cars ready for seamless airport pickups at IGI Terminal 3 / Aerocity and onward transfers to summits, conferences, and high-stakes client dinners.',
      perk: 'Prestige fleet & executive chauffeur options upon request',
    },
  ];

  function CompassIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
      </svg>
    );
  }

  return (
    <div className="bg-brand-navy-950 min-h-screen text-slate-100 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-orange/15 text-brand-orange border border-brand-orange/30">
            <Sparkles className="w-3.5 h-3.5" /> About FlexiRide
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Redefining Urban Mobility in <span className="text-brand-orange">Delhi NCR</span>
          </h1>
          <p className="text-base text-slate-300 leading-relaxed">
            FlexiRide is built on a simple philosophy: You should have complete freedom over when you drive, what you drive, and how long you drive — without the heavy financial burdens of vehicle ownership.
          </p>
        </div>

        {/* Business Concept & Origin */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-slate-900/80 border border-slate-800 rounded-3xl p-8 sm:p-12">
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">
              Our Concept & Customer Approach
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Why Flexible Hourly & Daily Rentals?
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              In bustling metropolitan centres like Delhi, Gurugram, and Noida, traditional car ownership comes with staggering upfront EMIs, road taxes, high insurance premiums, and constant parking hassles. On the other hand, relying exclusively on app-based ride-hailing services often means peak-hour surge charges, cancellation frustrations, and zero personal privacy.
            </p>
            <p className="text-sm text-slate-300 leading-relaxed">
              FlexiRide Bridges this gap by providing sanitized, top-condition vehicles on demand. Whether you need a nimble hatchback for a 3-hour visit to Delhi University or a 7-seater SUV for a weekend road trip to the hills, FlexiRide delivers an effortless self-drive experience with clear hourly and daily tariffs.
            </p>

            <div className="pt-2 flex flex-wrap gap-3 text-xs">
              <span className="inline-flex items-center gap-1.5 bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800 text-slate-300 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Transparent Tariffs
              </span>
              <span className="inline-flex items-center gap-1.5 bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800 text-slate-300 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Sanitized Cabins
              </span>
              <span className="inline-flex items-center gap-1.5 bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800 text-slate-300 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Doorstep Delivery
              </span>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl relative">
              <img
                src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80"
                alt="FlexiRide customer driving through Delhi NCR expressways"
                className="w-full h-80 sm:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 bg-brand-navy-950/90 backdrop-blur-md p-4 rounded-xl border border-slate-700">
                <p className="text-xs font-bold text-white">FlexiRide Brand Promise</p>
                <p className="text-[11px] text-slate-300 italic">
                  &ldquo;Your Ride. Your Time. Your Way. Transparent pricing with zero surprise charges.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="bg-brand-navy-900 border border-slate-800 rounded-3xl p-8 space-y-4 relative overflow-hidden">
            <div className="w-14 h-14 rounded-2xl bg-brand-orange/15 text-brand-orange flex items-center justify-center">
              <Target className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-black text-white">Our Mission</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              To empower every driver across Delhi NCR with flexible, reliable, and accessible personal mobility without the burdens of vehicle ownership, high upfront costs, and unexpected surge fees.
            </p>
            <ul className="space-y-2 text-xs text-slate-300 pt-2">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0" />
                Make flexible hourly and daily rentals seamless and digital.
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0" />
                Ensure every car is mechanically sound, sanitized, and road-ready.
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0" />
                Build trust through 100% upfront pricing and fast deposit refunds.
              </li>
            </ul>
          </div>

          {/* Vision */}
          <div className="bg-brand-navy-900 border border-slate-800 rounded-3xl p-8 space-y-4 relative overflow-hidden">
            <div className="w-14 h-14 rounded-2xl bg-blue-500/15 text-blue-400 flex items-center justify-center">
              <Eye className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-black text-white">Our Vision</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              To establish FlexiRide as North India&apos;s most customer-centric, dependable, and forward-thinking vehicle rental platform, known for technological convenience and uncompromising service ethics.
            </p>
            <ul className="space-y-2 text-xs text-slate-300 pt-2">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                Expand strategic partner pickup hubs across all key Delhi NCR corridors.
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                Introduce green electric vehicle (EV) fleets for sustainable urban transit.
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                Pioneer flexible subscription tiers for remote and hybrid corporate workforces.
              </li>
            </ul>
          </div>
        </div>

        {/* Who We Serve (Target Customers) */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">
              Our Customer Focus
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Crafted for Every Driver in Delhi NCR
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Explore how FlexiRide delivers tailored convenience across different customer lifestyles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {targetSegments.map((seg, idx) => {
              const Icon = seg.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-3 flex flex-col justify-between hover:border-slate-700 transition"
                >
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-xl bg-brand-orange/10 text-brand-orange flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-white">{seg.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {seg.description}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-800 text-[11px] font-semibold text-brand-orange flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{seg.perk}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Delhi NCR Coverage Showcase */}
        <div className="bg-brand-navy-900 border border-slate-800 rounded-3xl p-8 sm:p-10 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-orange mb-1">
                <MapPin className="w-3.5 h-3.5" /> Service Geography
              </div>
              <h3 className="text-2xl font-black text-white">
                Proposed Service Hubs Across Delhi NCR
              </h3>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-brand-orange hover:bg-brand-orange-600 text-white transition self-start md:self-auto shadow-glow"
            >
              <span>Enquire for Your Hub</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            FlexiRide is launching with strategic pickup points positioned near major Delhi Metro interchanges, corporate tech hubs, and residential centres. Doorstep delivery is also provided across all covered NCR zones.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-xs">
            <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 text-center">
              <strong className="text-white block">Central Delhi</strong>
              <span className="text-[11px] text-slate-400">Connaught Place</span>
            </div>
            <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 text-center">
              <strong className="text-white block">South Delhi</strong>
              <span className="text-[11px] text-slate-400">Saket & Nehru Place</span>
            </div>
            <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 text-center">
              <strong className="text-white block">IGI Airport</strong>
              <span className="text-[11px] text-slate-400">T3 & Aerocity</span>
            </div>
            <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 text-center">
              <strong className="text-white block">Gurugram</strong>
              <span className="text-[11px] text-slate-400">Cyber City & Golf Course</span>
            </div>
            <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 text-center">
              <strong className="text-white block">Noida</strong>
              <span className="text-[11px] text-slate-400">Sector 18 & 62</span>
            </div>
            <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 text-center">
              <strong className="text-white block">Faridabad / Gzb</strong>
              <span className="text-[11px] text-slate-400">Metro Hubs</span>
            </div>
          </div>
        </div>

        {/* Operational Pre-launch Disclaimer Banner */}
        <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-xs text-slate-400 flex items-start gap-3">
          <Info className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
          <div>
            <strong className="text-slate-200">Demonstration & Enquiry Stage:</strong> FlexiRide is currently in the pre-launch customer enquiry and feasibility phase in Delhi NCR. All vehicle representations, sample locations, and services are illustrative until official commencement of commercial operations.
          </div>
        </div>
      </div>
    </div>
  );
}
