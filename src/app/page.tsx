import React from 'react';
import Link from 'next/link';
import {
  Car,
  Clock,
  Shield,
  MapPin,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  Zap,
  Users,
  Compass,
  ArrowRight,
  Award,
  PhoneCall,
  Calendar,
  AlertCircle,
} from 'lucide-react';
import { VEHICLE_CATEGORIES_OVERVIEW, VEHICLES_DATA } from '@/data/vehicles';
import RateEstimator from '@/components/RateEstimator';
import VehicleCard from '@/components/VehicleCard';

export default function HomePage() {
  const featuredVehicles = VEHICLES_DATA.filter((v) => v.isPopular).slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen">
      {/* HERO SECTION */}
      <section className="relative min-h-[88vh] flex items-center justify-center bg-brand-navy-950 overflow-hidden py-16 lg:py-24">
        {/* Background glow elements */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-navy-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-brand-orange/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Region Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-navy-900 border border-brand-orange/30 text-brand-orange shadow-sm">
                <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
                Delhi NCR Premier Vehicle Rentals
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
                Your Journey, <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-orange-400 to-amber-300">
                  Your Way.
                </span>
              </h1>

              {/* Subheading */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Flexible hourly and daily vehicle rentals crafted for Delhi NCR. Drive on your own terms with transparent pricing, zero hidden charges, and hassle-free pickups across Delhi, Gurugram, and Noida.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  href="/vehicles"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 border border-slate-700/80 transition flex items-center justify-center gap-2 shadow-lg hover:border-slate-600"
                >
                  <Car className="w-4 h-4 text-brand-orange" />
                  <span>Explore Vehicles</span>
                </Link>

                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-brand-orange to-brand-orange-600 hover:from-brand-orange-600 hover:to-brand-orange-700 shadow-glow transition transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
                >
                  <span>Book Your Ride</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Key Highlights */}
              <div className="pt-6 grid grid-cols-3 gap-3 border-t border-slate-800/80 max-w-lg mx-auto lg:mx-0 text-left">
                <div>
                  <div className="text-xl sm:text-2xl font-black text-white">₹149<span className="text-xs font-normal text-slate-400">/hr</span></div>
                  <div className="text-[11px] text-slate-400">Starting Hourly</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-white">₹1,499<span className="text-xs font-normal text-slate-400">/day</span></div>
                  <div className="text-[11px] text-slate-400">Starting Daily</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-emerald-400">100%</div>
                  <div className="text-[11px] text-slate-400">Clean & Verified</div>
                </div>
              </div>
            </div>

            {/* Right Hero Vehicle Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none rounded-3xl overflow-hidden border border-slate-700/80 shadow-2xl bg-slate-900 group">
                <img
                  src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=80"
                  alt="FlexiRide modern vehicle rental fleet in Delhi NCR"
                  className="w-full h-80 sm:h-[420px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-950 via-slate-950/20 to-transparent" />

                {/* Floating pill 1 */}
                <div className="absolute top-4 left-4 bg-brand-navy-950/85 backdrop-blur-md px-3.5 py-2 rounded-xl border border-slate-700/80 flex items-center gap-2.5 shadow-xl">
                  <div className="w-7 h-7 rounded-lg bg-brand-orange/20 text-brand-orange flex items-center justify-center">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-white">Hourly Freedom</div>
                    <div className="text-[9px] text-slate-400">Book from 2 hours</div>
                  </div>
                </div>

                {/* Floating pill 2 */}
                <div className="absolute bottom-4 right-4 bg-brand-navy-950/90 backdrop-blur-md px-3.5 py-2 rounded-xl border border-emerald-500/30 flex items-center gap-2.5 shadow-xl">
                  <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <Shield className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-white">Delhi NCR Coverage</div>
                    <div className="text-[9px] text-slate-400">Hub pickups & Doorstep</div>
                  </div>
                </div>
              </div>

              <p className="text-[10px] text-slate-500 text-center mt-2 italic">
                *Illustrative vehicle representation for FlexiRide Delhi NCR.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE RATE ESTIMATOR SECTION */}
      <section className="py-14 bg-brand-navy-900/60 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RateEstimator />
        </div>
      </section>

      {/* BENEFITS OF FLEXIBLE RENTALS */}
      <section className="py-20 bg-brand-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-orange/15 text-brand-orange border border-brand-orange/30">
              <Zap className="w-3.5 h-3.5" /> Why FlexiRide
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Benefits of Flexible Rentals
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              Designed from the ground up to solve Delhi NCR&apos;s urban mobility challenges with complete freedom, convenience, and transparent pricing.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Benefit 1 */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-3 hover:border-brand-orange/40 transition group">
              <div className="w-12 h-12 rounded-xl bg-brand-orange/10 text-brand-orange flex items-center justify-center group-hover:scale-110 transition">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Hourly & Daily Freedom</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Why pay for an entire day when you only need a car for 3 hours of client meetings in Cyber City? Choose hourly or daily rental packages with zero wasted expense.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-3 hover:border-brand-orange/40 transition group">
              <div className="w-12 h-12 rounded-xl bg-brand-orange/10 text-brand-orange flex items-center justify-center group-hover:scale-110 transition">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Tailored for Students & Pros</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Special pocket-friendly packages for college commutes, job interviews, corporate consultants, and visiting tourists wanting reliable self-drive wheels.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-3 hover:border-brand-orange/40 transition group">
              <div className="w-12 h-12 rounded-xl bg-brand-orange/10 text-brand-orange flex items-center justify-center group-hover:scale-110 transition">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Transparent & Zero Hidden Fees</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                No surge pricing, no opaque deductions. What you see is what you pay, with fast refund processing for security deposits within 24–48 hours of return.
              </p>
            </div>

            {/* Benefit 4 */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-3 hover:border-brand-orange/40 transition group">
              <div className="w-12 h-12 rounded-xl bg-brand-orange/10 text-brand-orange flex items-center justify-center group-hover:scale-110 transition">
                <Car className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Sanitized & Maintained Fleet</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Every vehicle undergoes multi-point safety inspections, deep interior sanitization, and tire-pressure checks before handover for your peace of mind.
              </p>
            </div>

            {/* Benefit 5 */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-3 hover:border-brand-orange/40 transition group">
              <div className="w-12 h-12 rounded-xl bg-brand-orange/10 text-brand-orange flex items-center justify-center group-hover:scale-110 transition">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Widespread Delhi NCR Hubs</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Convenient pickup points near key metro lines across Central Delhi, South Delhi, IGI Airport, Gurugram, and Noida, with doorstep delivery available.
              </p>
            </div>

            {/* Benefit 6 */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-3 hover:border-brand-orange/40 transition group">
              <div className="w-12 h-12 rounded-xl bg-brand-orange/10 text-brand-orange flex items-center justify-center group-hover:scale-110 transition">
                <PhoneCall className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">24/7 Roadside Assistance</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Travel with total confidence. Round-the-clock emergency support, puncture assistance, and breakdown coverage across all NCR expressways and highways.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VEHICLE CATEGORIES OVERVIEW */}
      <section className="py-20 bg-brand-navy-900/70 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-10">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-orange/15 text-brand-orange border border-brand-orange/30">
                <Car className="w-3.5 h-3.5" /> Fleet Categories
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                Choose the Perfect Vehicle Category
              </h2>
              <p className="text-sm text-slate-300 max-w-xl">
                Four distinct vehicle tiers engineered to meet every driving requirement across Delhi NCR.
              </p>
            </div>

            <Link
              href="/vehicles"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-orange hover:text-brand-orange-400 transition"
            >
              <span>View All 12 Fleet Models</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VEHICLE_CATEGORIES_OVERVIEW.map((cat) => (
              <div
                key={cat.name}
                className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-brand-orange/40 transition group shadow-lg"
              >
                <div className="relative h-44 overflow-hidden bg-slate-950">
                  <img
                    src={cat.image}
                    alt={`${cat.name} vehicle rental in Delhi NCR`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  <div className="absolute top-3 left-3 bg-brand-navy-950/80 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-bold uppercase text-brand-orange border border-brand-orange/30">
                    {cat.tagline}
                  </div>
                </div>

                <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-white">{cat.name}</h3>
                    <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                      {cat.description}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-800/80 space-y-1">
                    <div className="text-[11px] text-slate-400">
                      Sample: <span className="text-slate-200 font-medium">{cat.examples}</span>
                    </div>
                    <div className="flex items-baseline justify-between pt-1">
                      <div>
                        <span className="text-[10px] text-slate-500 block">From</span>
                        <span className="text-lg font-black text-brand-orange">₹{cat.startingHourly}/hr</span>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] text-slate-500 block">or Daily</span>
                        <span className="text-sm font-bold text-white">₹{cat.startingDaily.toLocaleString('en-IN')}/day</span>
                      </div>
                    </div>
                  </div>

                  <Link
                    href={`/vehicles?category=${encodeURIComponent(cat.name)}`}
                    className="w-full py-2.5 px-3 rounded-xl text-xs font-bold text-center bg-slate-800 hover:bg-brand-orange hover:text-white text-slate-200 transition"
                  >
                    Explore {cat.name}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <span className="inline-flex items-center gap-1.5 text-xs text-slate-400 bg-slate-950/80 px-4 py-2 rounded-full border border-slate-800">
              <AlertCircle className="w-3.5 h-3.5 text-brand-orange shrink-0" />
              All vehicle models, pricing, and availability are illustrative estimates for Delhi NCR.
            </span>
          </div>
        </div>
      </section>

      {/* POPULAR VEHICLE PREVIEW CARDS */}
      <section className="py-20 bg-brand-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-orange/15 text-brand-orange border border-brand-orange/30">
              <Award className="w-3.5 h-3.5" /> Customer Favorites
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Featured Fleet in Delhi NCR
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Check out sample configurations across our most in-demand hatchbacks, sedans, SUVs, and luxury rides.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredVehicles.map((vehicle) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/vehicles"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 transition"
            >
              <span>View Full Fleet (All 12 Vehicles)</span>
              <ChevronRight className="w-4 h-4 text-brand-orange" />
            </Link>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS (SIMPLE 4-STEP PROCESS) */}
      <section className="py-20 bg-brand-navy-900/60 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-orange/15 text-brand-orange border border-brand-orange/30">
              <Compass className="w-3.5 h-3.5" /> Simple & Transparent
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              How FlexiRide Works
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Get behind the wheel in four straightforward steps with zero complicated paperwork.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Step 1 */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-3 relative">
              <div className="text-4xl font-black text-brand-orange/30">01</div>
              <h3 className="text-lg font-bold text-white">Explore Categories</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Browse our four distinct vehicle tiers: Hatchback, Sedan, SUV, or Premium Cars based on your travel needs.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-3 relative">
              <div className="text-4xl font-black text-brand-orange/30">02</div>
              <h3 className="text-lg font-bold text-white">Select Rental Duration</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Choose flexible hourly packages (from 2 hours) or economical daily rentals (up to 30 days) with generous km allowances.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-3 relative">
              <div className="text-4xl font-black text-brand-orange/30">03</div>
              <h3 className="text-lg font-bold text-white">Submit Booking Enquiry</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Fill in your pickup hub, date, time, and basic contact details. Instantly receive an enquiry reference ID.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-3 relative">
              <div className="text-4xl font-black text-brand-orange/30">04</div>
              <h3 className="text-lg font-bold text-white">Confirm & Drive</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Confirm vehicle details with our Delhi NCR team, inspect the vehicle at handover, and embark on your journey!
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-orange hover:text-brand-orange-400 transition"
            >
              <span>Read Full Guide, Document Checklist & FAQs</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="py-16 bg-gradient-to-b from-brand-navy-950 to-slate-950 border-t border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-orange/5 pointer-events-none" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Ready to Experience Flexible Rentals in Delhi NCR?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            Whether it&apos;s a 3-hour errand in South Delhi, a corporate commute to DLF Cyber City, or a weekend road trip to Agra, FlexiRide gives you the freedom to drive your way.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-brand-orange to-brand-orange-600 hover:from-brand-orange-600 hover:to-brand-orange-700 shadow-glow transition transform hover:scale-105"
            >
              Submit Your Booking Enquiry
            </Link>

            <a
              href="https://wa.me/917011184862?text=Hi%20FlexiRide,%20I%20have%20an%20enquiry%20regarding%20vehicle%20rentals%20in%20Delhi%20NCR."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-bold text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 transition flex items-center justify-center gap-2"
            >
              <span>WhatsApp Us: +91 7011184862</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
