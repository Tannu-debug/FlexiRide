import React from 'react';
import Link from 'next/link';
import {
  Compass,
  Clock,
  Calendar,
  FileCheck2,
  CheckCircle2,
  ArrowRight,
  ShieldAlert,
  Car,
  HelpCircle,
  MessageSquare,
  Sparkles,
  ChevronRight,
  Shield,
  Layers,
} from 'lucide-react';
import { FAQS_DATA } from '@/data/faqs';

export const metadata = {
  title: 'How It Works – FlexiRide | 4-Step Vehicle Rental Process in Delhi NCR',
  description:
    'Learn how to rent a vehicle with FlexiRide across Delhi NCR in 4 easy steps. Read about our hourly and daily rental models, document requirements, security deposits, and FAQs.',
};

export default function HowItWorksPage() {
  const steps = [
    {
      step: '01',
      title: 'Explore Available Vehicle Categories',
      description:
        'Browse our diverse fleet of Hatchbacks, Sedans, SUVs, and Premium Cars. Review transparent specifications including passenger capacity, fuel efficiency, boot space, transmission type, and included features.',
      detail: 'Choose the vehicle tier tailored to your budget and travel purpose.',
      icon: Car,
    },
    {
      step: '02',
      title: 'Select Your Preferred Rental Duration',
      description:
        'Choose between Flexible Hourly Rentals (from 2 hours with 10 km/hr included) or Economical Daily Rentals (24-hour cycles with 250 km/day included). Custom multi-day packages are also available.',
      detail: 'Zero surge charges and predictable kilometre packages.',
      icon: Clock,
    },
    {
      step: '03',
      title: 'Submit Your Booking Enquiry',
      description:
        'Fill in our straightforward enquiry form with your preferred pickup hub across Delhi NCR (or select doorstep delivery), pickup date, time, and basic contact information. You will receive an instant enquiry reference ID.',
      detail: 'No upfront advance payment is needed to submit an enquiry.',
      icon: FileCheck2,
    },
    {
      step: '04',
      title: 'Confirm Rental Details With FlexiRide',
      description:
        'Our Delhi NCR team reviews vehicle availability, confirms your booking itinerary via WhatsApp or call, verifies your driving credentials, and arranges vehicle handover at your selected hub or doorstep.',
      detail: 'Inspect the vehicle, take the keys, and drive on your terms!',
      icon: CheckCircle2,
    },
  ];

  const rentalModelComparison = [
    {
      feature: 'Ideal For',
      hourly: 'Quick city errands, college commutes, 3-4 hr client meetings, shopping',
      daily: 'Full-day road trips, weekend getaways, outstation travel to Agra/Jaipur',
    },
    {
      feature: 'Minimum Duration',
      hourly: '2 Hours',
      daily: '24 Hours (1 Day)',
    },
    {
      feature: 'Maximum Duration',
      hourly: 'Up to 24 Hours',
      daily: 'Up to 30 Days (Renewable)',
    },
    {
      feature: 'Kilometre Allowance',
      hourly: '10 to 15 km per booked hour',
      daily: '250 km per day (Aggregated for multi-day)',
    },
    {
      feature: 'Fuel Policy',
      hourly: 'Same-to-same return or fuel-included options',
      daily: 'Same-to-same return',
    },
    {
      feature: 'Refundable Deposit',
      hourly: 'Nominal deposit based on category',
      daily: 'Standard deposit based on category',
    },
    {
      feature: 'Starting Tariff',
      hourly: 'From ₹149 / hour',
      daily: 'From ₹1,499 / day',
    },
  ];

  return (
    <div className="bg-brand-navy-950 min-h-screen text-slate-100 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-orange/15 text-brand-orange border border-brand-orange/30">
            <Sparkles className="w-3.5 h-3.5" /> Simple 4-Step Process
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            How FlexiRide Works
          </h1>
          <p className="text-base text-slate-300 leading-relaxed">
            Renting a car in Delhi NCR should be simple, transparent, and completely free of hidden surprises. Here is how you can get moving in four easy steps.
          </p>
        </div>

        {/* 4 Steps Visual Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-brand-navy-900 border border-slate-800 rounded-3xl p-6 sm:p-7 flex flex-col justify-between space-y-4 hover:border-brand-orange/40 transition group shadow-xl"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-4xl font-black text-brand-orange/30 group-hover:text-brand-orange transition">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 text-brand-orange flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800 text-[11px] font-medium text-emerald-400 flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                  <span>{item.detail}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Hourly vs Daily Rentals Comparison */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-orange flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" /> Rental Model Breakdown
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Hourly Rentals vs. Daily Rentals
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Pick the pricing model that best aligns with your driving plans across Delhi NCR.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400 font-bold uppercase">
                  <th className="py-3 px-4">Rental Feature</th>
                  <th className="py-3 px-4 text-brand-orange">Hourly Rental Model</th>
                  <th className="py-3 px-4 text-white">Daily Rental Model</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80 text-slate-300">
                {rentalModelComparison.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-slate-950/40' : ''}>
                    <td className="py-3.5 px-4 font-bold text-white">{row.feature}</td>
                    <td className="py-3.5 px-4 text-slate-200">{row.hourly}</td>
                    <td className="py-3.5 px-4 text-slate-200">{row.daily}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Eligibility & Documentation Checklist */}
        <div className="bg-brand-navy-900 border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-orange flex items-center gap-1.5">
              <ShieldAlert className="w-3.5 h-3.5" /> Driver Requirements
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Rental Eligibility & Verification in Delhi NCR
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Please ensure you meet the following baseline criteria when collecting your FlexiRide vehicle:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-brand-orange/20 text-brand-orange flex items-center justify-center font-bold text-sm">
                1
              </div>
              <h4 className="text-sm font-bold text-white">Age Requirement</h4>
              <p className="text-xs text-slate-400">
                Primary driver must be at least <strong>21 years of age</strong> (23+ for Premium luxury vehicles).
              </p>
            </div>

            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-brand-orange/20 text-brand-orange flex items-center justify-center font-bold text-sm">
                2
              </div>
              <h4 className="text-sm font-bold text-white">Original Driving License</h4>
              <p className="text-xs text-slate-400">
                Valid original Indian Driving License (LMV) or International Driving Permit (IDP) with at least 1 year validity.
              </p>
            </div>

            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-brand-orange/20 text-brand-orange flex items-center justify-center font-bold text-sm">
                3
              </div>
              <h4 className="text-sm font-bold text-white">Government Photo ID</h4>
              <p className="text-xs text-slate-400">
                Aadhaar Card, Passport, or Voter ID matching the name on your driving license.
              </p>
            </div>

            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-brand-orange/20 text-brand-orange flex items-center justify-center font-bold text-sm">
                4
              </div>
              <h4 className="text-sm font-bold text-white">Refundable Deposit</h4>
              <p className="text-xs text-slate-400">
                Authorized via UPI or card upon handover; released back to your account within 24–48 hours of vehicle return.
              </p>
            </div>
          </div>
        </div>

        {/* FAQs Section */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-orange flex items-center justify-center gap-1.5">
              <HelpCircle className="w-3.5 h-3.5" /> Frequently Asked Questions
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Got Questions? We&apos;ve Got Answers.
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Clear answers on rates, fuel policies, insurance, and Delhi NCR operational terms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FAQS_DATA.map((faq) => (
              <div
                key={faq.id}
                className="bg-brand-navy-900 border border-slate-800 rounded-2xl p-6 space-y-2.5 hover:border-slate-700 transition"
              >
                <div className="inline-block text-[10px] font-bold uppercase tracking-wider text-brand-orange bg-brand-orange/10 px-2 py-0.5 rounded">
                  {faq.category}
                </div>
                <h3 className="text-base font-bold text-white leading-snug">
                  {faq.question}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-brand-orange to-brand-orange-600 rounded-3xl p-8 sm:p-12 text-center text-white space-y-4 shadow-glow">
          <h2 className="text-3xl sm:text-4xl font-black">
            Ready to Reserve Your Next Delhi NCR Ride?
          </h2>
          <p className="text-sm max-w-xl mx-auto text-orange-100">
            Submit your enquiry in less than 2 minutes. Our team will verify fleet availability and coordinate your pickup hub.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-xs font-bold text-brand-navy-950 bg-white hover:bg-slate-100 transition shadow-lg"
            >
              Submit Booking Enquiry
            </Link>

            <Link
              href="/vehicles"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-xs font-bold text-white bg-black/20 hover:bg-black/30 border border-white/30 transition"
            >
              Explore Vehicles Fleet
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
