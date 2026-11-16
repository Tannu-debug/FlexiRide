import React from 'react';
import Link from 'next/link';
import { Shield, AlertTriangle, FileText, ArrowLeft, Mail, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy (Draft) – FlexiRide Delhi NCR',
  description:
    'Draft privacy policy explaining the collection, processing, and handling of booking enquiry details for FlexiRide in Delhi NCR.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-brand-navy-950 min-h-screen text-slate-100 py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-brand-orange transition"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>

        {/* Status Callout Banner */}
        <div className="p-4 sm:p-5 rounded-2xl bg-amber-500/10 border border-amber-500/40 text-amber-200 flex items-start gap-3.5">
          <AlertTriangle className="w-6 h-6 text-amber-400 shrink-0 mt-0.5" />
          <div className="space-y-1 text-xs sm:text-sm">
            <h4 className="font-bold text-amber-300 uppercase tracking-wide">
              Draft Document — For Business and Legal Review Only
            </h4>
            <p className="text-amber-200/90 leading-relaxed">
              This document is a draft operational privacy policy prepared for FlexiRide&apos;s pre-launch phase in Delhi NCR. It describes how prospective customer enquiry information is gathered and processed. It requires formal legal ratification prior to full commercial vehicle rental deployment.
            </p>
          </div>
        </div>

        {/* Title & Introduction */}
        <div className="space-y-3 pb-6 border-b border-slate-800">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-orange/15 text-brand-orange border border-brand-orange/30">
            <Shield className="w-3.5 h-3.5" /> Privacy & Data Transparency
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            FlexiRide Privacy Policy (Draft)
          </h1>
          <p className="text-xs text-slate-400">
            Last Updated: November 2026 &bull; Scope: Delhi NCR Vehicle Rental Enquiries
          </p>
        </div>

        {/* Policy Content Sections */}
        <div className="space-y-8 text-sm text-slate-300 leading-relaxed">
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="text-brand-orange">1.</span> Introduction
            </h2>
            <p>
              FlexiRide (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) operates an emerging vehicle rental service initiative within the Delhi National Capital Region (Delhi NCR), India. We are committed to protecting the privacy, confidentiality, and security of prospective customers and visitors who submit rental enquiries through our digital platforms.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="text-brand-orange">2.</span> Information We Collect
            </h2>
            <p>
              When you submit a vehicle rental enquiry or interact with our fare calculator and WhatsApp desk, we may collect the following personal and trip-related details:
            </p>
            <ul className="space-y-2 list-none pl-2 text-xs text-slate-300">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Contact Details:</strong> Your full name, mobile telephone number, and email address.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Trip Requirements:</strong> Selected vehicle category (Hatchback, Sedan, SUV, Premium Cars), specific model preference, rental model (Hourly or Daily), and requested rental duration.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Schedule & Location:</strong> Intended pickup hub across Delhi NCR (or doorstep delivery address request), date, and pickup time.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Special Requests:</strong> Any optional notes or driving requirements you communicate within the enquiry message field.</span>
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="text-brand-orange">3.</span> How We Use Your Enquiry Information
            </h2>
            <p>
              Information submitted via our enquiry channels is used solely for legitimate business purposes associated with vehicle rental fulfillment:
            </p>
            <ul className="space-y-1.5 list-disc pl-5 text-xs text-slate-300">
              <li>To evaluate fleet availability and calculate accurate rental tariff estimates.</li>
              <li>To contact you via phone, WhatsApp, or email to verify your booking request and answer questions.</li>
              <li>To coordinate vehicle pickup or delivery at our designated Delhi NCR hubs.</li>
              <li>To prevent fraudulent submissions and ensure driver eligibility under Indian motor vehicle regulations.</li>
              <li>To gauge customer interest across specific vehicle categories and locations during our pre-launch phase.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="text-brand-orange">4.</span> Demonstration Mode Handling
            </h2>
            <p>
              Please note that until our full transactional booking backend is released:
            </p>
            <ul className="space-y-1.5 list-disc pl-5 text-xs text-slate-300">
              <li>Submissions on the website generate a simulated receipt and reference code for user demonstration.</li>
              <li>No payment card details, bank credentials, or government ID scans are collected or stored through the website form at this stage.</li>
              <li>Direct WhatsApp messaging is initiated voluntarily by the user through third-party WhatsApp interfaces.</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="text-brand-orange">5.</span> Data Sharing & Third Parties
            </h2>
            <p>
              We adhere strictly to the principle of not selling, trading, or leasing your personal information to third-party advertisers or data brokers. Your enquiry information is accessed solely by authorized FlexiRide operational personnel involved in fleet management and customer support.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="text-brand-orange">6.</span> Data Retention & Your Rights
            </h2>
            <p>
              We retain prospective enquiry records only as long as necessary to address your booking request or fulfill feasibility study purposes. You retain the right to request deletion, correction, or review of any enquiry information provided to us by contacting our team.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="text-brand-orange">7.</span> Contact For Privacy Inquiries
            </h2>
            <p>
              If you have any questions or feedback regarding this draft policy or the handling of customer enquiry data, please reach out via:
            </p>
            <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-1 text-xs">
              <p className="font-semibold text-white">FlexiRide Operations Desk (Delhi NCR)</p>
              <p className="text-slate-400">Email: enquiry@flexiride-delhincr.example.com</p>
              <p className="text-slate-400">Helpline: +91 98000 00000 (Illustrative placeholder)</p>
            </div>
          </section>
        </div>

        {/* Footer Navigation */}
        <div className="pt-6 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <Link href="/contact" className="text-brand-orange hover:underline font-semibold">
            Have questions? Contact our enquiry desk &rarr;
          </Link>
          <Link href="/" className="hover:text-slate-200">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
