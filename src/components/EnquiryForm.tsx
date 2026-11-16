'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { VehicleCategory, RentalDurationType, EnquiryFormData } from '@/types';
import { saveEnquiry } from '@/lib/storage';
import { DELHI_NCR_LOCATIONS } from '@/data/locations';
import {
  Send,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Calendar,
  MapPin,
  Car,
  MessageSquare,
  Sparkles,
  Info,
  Copy,
  Check,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react';

interface FormErrors {
  fullName?: string;
  phone?: string;
  email?: string;
  category?: string;
  pickupLocation?: string;
  pickupDate?: string;
  pickupTime?: string;
  durationValue?: string;
}

export default function EnquiryForm() {
  const searchParams = useSearchParams();

  // Initial state with query parameter pre-fill support
  const [formData, setFormData] = useState<EnquiryFormData>({
    fullName: '',
    phone: '',
    email: '',
    category: '',
    vehicleModel: '',
    durationType: 'Daily',
    durationValue: 2,
    pickupLocation: '',
    pickupDate: '',
    pickupTime: '10:00',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<{
    referenceId: string;
    submittedAt: string;
    data: EnquiryFormData;
  } | null>(null);
  const [copiedRef, setCopiedRef] = useState(false);

  // Sync query params when mounted
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    const modelParam = searchParams.get('model');
    const durationParam = searchParams.get('duration');
    const valueParam = searchParams.get('value');
    const locationParam = searchParams.get('location');

    setFormData((prev) => ({
      ...prev,
      category: (categoryParam as VehicleCategory) || prev.category || 'Sedan',
      vehicleModel: modelParam || prev.vehicleModel || '',
      durationType: (durationParam as RentalDurationType) || prev.durationType,
      durationValue: valueParam ? Number(valueParam) : prev.durationValue,
      pickupLocation: locationParam || prev.pickupLocation || DELHI_NCR_LOCATIONS[0].name,
    }));
  }, [searchParams]);

  // Validation function
  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required.';
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName = 'Please enter at least 3 characters.';
    }

    // Phone validation (Indian phone numbers: 10 digits or with +91)
    const phoneClean = formData.phone.replace(/[\s-]/g, '');
    const phoneRegex = /^(\+91)?[6-9]\d{9}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required for booking confirmation.';
    } else if (!phoneRegex.test(phoneClean)) {
      newErrors.phone = 'Enter a valid 10-digit Indian mobile number (e.g., 9876543210).';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Enter a valid email address.';
    }

    // Vehicle Category validation
    if (!formData.category) {
      newErrors.category = 'Please select a vehicle category.';
    }

    // Location validation
    if (!formData.pickupLocation) {
      newErrors.pickupLocation = 'Please select a pickup hub in Delhi NCR.';
    }

    // Pickup Date validation
    if (!formData.pickupDate) {
      newErrors.pickupDate = 'Select your desired pickup date.';
    }

    // Duration value validation
    if (!formData.durationValue || formData.durationValue <= 0) {
      newErrors.durationValue = 'Duration must be greater than 0.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

 
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  if (!validate()) {
    return;
  }

  setIsSubmitting(true);

  try {
    const generatedRef = `FLX-NCR-${Math.floor(
      100000 + Math.random() * 900000
    )}`;

    const enquiry = {
      referenceId: generatedRef,
      submittedAt: new Date().toLocaleString('en-IN', {
        timeZone: 'Asia/Kolkata',
      }),
      data: { ...formData },
    };

    saveEnquiry(enquiry);
    setSubmittedData(enquiry);
  } catch (error) {
    console.error('Unable to save enquiry:', error);
    alert('Unable to save your enquiry. Please try again.');
  } finally {
    setIsSubmitting(false);
  }
};


  const copyReference = () => {
    if (submittedData?.referenceId) {
      navigator.clipboard.writeText(submittedData.referenceId);
      setCopiedRef(true);
      setTimeout(() => setCopiedRef(false), 2500);
    }
  };

  // WhatsApp message builder
  const buildWhatsAppMessage = () => {
    if (!submittedData) return '';
    const { referenceId, data } = submittedData;
    const msg = `*FlexiRide Delhi NCR Booking Enquiry*\n` +
      `Ref ID: ${referenceId}\n` +
      `Name: ${data.fullName}\n` +
      `Category: ${data.category}${data.vehicleModel ? ` (${data.vehicleModel})` : ''}\n` +
      `Duration: ${data.durationValue} ${data.durationType === 'Hourly' ? 'Hours' : 'Days'}\n` +
      `Pickup Date: ${data.pickupDate} at ${data.pickupTime}\n` +
      `Pickup Hub: ${data.pickupLocation}\n` +
      (data.message ? `Special Requests: ${data.message}\n` : '') +
      `\nPlease let me know vehicle availability and tariff confirmation.`;
    return encodeURIComponent(msg);
  };

  return (
    <div className="bg-brand-navy-900 border border-slate-700/80 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
      {/* Background decor */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-brand-orange/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 pb-6 border-b border-slate-800 space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-orange/15 text-brand-orange border border-brand-orange/30">
          <Car className="w-3.5 h-3.5" />
          Delhi NCR Booking Enquiry Desk
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
          Reserve Your FlexiRide Vehicle
        </h2>
        <p className="text-sm text-slate-300">
          Submit your requirements for flexible hourly or daily vehicle rentals. Our team will verify fleet availability and dispatch booking confirmation.
        </p>

        {/* Demo-only announcement notice */}
        <div className="mt-3 p-3 rounded-xl bg-brand-navy-950 border border-brand-orange/30 flex items-start gap-2.5 text-xs text-slate-300">
          <Info className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
          <div>
            <strong className="text-white">Demo Submission Notice:</strong> All submissions on this form are recorded locally in demonstration mode. No payment is collected and no commercial contract is executed until official launch.
          </div>
        </div>
      </div>

      {/* Main Form */}
      <form onSubmit={handleSubmit} noValidate className="relative z-10 mt-8 space-y-6">
        {/* Customer Basic Details */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {/* Full Name */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center justify-between">
              <span>Full Name *</span>
            </label>
            <input
              type="text"
              placeholder="e.g. Rahul Sharma"
              value={formData.fullName}
              onChange={(e) => {
                setFormData({ ...formData, fullName: e.target.value });
                if (errors.fullName) setErrors({ ...errors, fullName: undefined });
              }}
              className={`w-full bg-slate-950 border rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none transition ${
                errors.fullName ? 'border-rose-500 ring-1 ring-rose-500' : 'border-slate-800 focus:border-brand-orange'
              }`}
            />
            {errors.fullName && (
              <p className="text-xs text-rose-400 flex items-center gap-1">
                <AlertTriangle className="w-3 h-3" /> {errors.fullName}
              </p>
            )}
          </div>

          {/* Phone Number */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Phone Number *
            </label>
            <div className="relative">
              <span className="absolute left-3.5 top-3.5 text-xs font-semibold text-slate-500">
                +91
              </span>
              <input
                type="tel"
                placeholder="9876543210"
                value={formData.phone}
                onChange={(e) => {
                  setFormData({ ...formData, phone: e.target.value });
                  if (errors.phone) setErrors({ ...errors, phone: undefined });
                }}
                className={`w-full bg-slate-950 border rounded-xl pl-12 pr-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none transition ${
                  errors.phone ? 'border-rose-500 ring-1 ring-rose-500' : 'border-slate-800 focus:border-brand-orange'
                }`}
              />
            </div>
            {errors.phone && (
              <p className="text-xs text-rose-400 flex items-center gap-1">
                <AlertTriangle className="w-3 h-3" /> {errors.phone}
              </p>
            )}
          </div>

          {/* Email Address */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Email Address *
            </label>
            <input
              type="email"
              placeholder="rahul@example.com"
              value={formData.email}
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
                if (errors.email) setErrors({ ...errors, email: undefined });
              }}
              className={`w-full bg-slate-950 border rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none transition ${
                errors.email ? 'border-rose-500 ring-1 ring-rose-500' : 'border-slate-800 focus:border-brand-orange'
              }`}
            />
            {errors.email && (
              <p className="text-xs text-rose-400 flex items-center gap-1">
                <AlertTriangle className="w-3 h-3" /> {errors.email}
              </p>
            )}
          </div>
        </div>

        {/* Vehicle Selection & Rental Duration */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          {/* Vehicle Category */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Vehicle Category *
            </label>
            <div className="grid grid-cols-2 gap-2.5">
              {(['Hatchback', 'Sedan', 'SUV', 'Premium Cars'] as VehicleCategory[]).map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => {
                    setFormData({ ...formData, category: cat });
                    if (errors.category) setErrors({ ...errors, category: undefined });
                  }}
                  className={`p-3 rounded-xl border text-left text-xs font-medium transition ${
                    formData.category === cat
                      ? 'bg-brand-orange/20 border-brand-orange text-white ring-1 ring-brand-orange'
                      : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  <div className="font-bold text-white">{cat}</div>
                  <div className="text-[10px] text-brand-orange mt-0.5">
                    {cat === 'Hatchback' && 'Swift, i20, Altroz'}
                    {cat === 'Sedan' && 'City, Verna, Ciaz'}
                    {cat === 'SUV' && 'Creta, XUV700, Harrier'}
                    {cat === 'Premium Cars' && 'BMW 3, Mercedes C, Audi A4'}
                  </div>
                </button>
              ))}
            </div>
            {errors.category && (
              <p className="text-xs text-rose-400 flex items-center gap-1">
                <AlertTriangle className="w-3 h-3" /> {errors.category}
              </p>
            )}

            {formData.vehicleModel && (
              <div className="mt-2 text-xs text-slate-400 bg-slate-950 p-2.5 rounded-lg border border-slate-800 flex items-center justify-between">
                <span>Selected Model Preference: <strong className="text-white">{formData.vehicleModel}</strong></span>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, vehicleModel: '' })}
                  className="text-brand-orange hover:underline text-[10px]"
                >
                  Change
                </button>
              </div>
            )}
          </div>

          {/* Rental Duration Mode & Counter */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Rental Duration Model *
            </label>

            {/* Toggle Buttons */}
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setFormData({ ...formData, durationType: 'Hourly', durationValue: 4 })}
                className={`py-2.5 px-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-1.5 transition ${
                  formData.durationType === 'Hourly'
                    ? 'bg-brand-orange text-white border-brand-orange shadow-glow'
                    : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                <Clock className="w-3.5 h-3.5" />
                Hourly Rental (2-24 hrs)
              </button>

              <button
                type="button"
                onClick={() => setFormData({ ...formData, durationType: 'Daily', durationValue: 2 })}
                className={`py-2.5 px-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-1.5 transition ${
                  formData.durationType === 'Daily'
                    ? 'bg-brand-orange text-white border-brand-orange shadow-glow'
                    : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                <Calendar className="w-3.5 h-3.5" />
                Daily Rental (1-30 days)
              </button>
            </div>

            {/* Duration Input / Stepper */}
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-3 flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-400 block font-medium">Selected Duration</span>
                <span className="text-sm font-bold text-white">
                  {formData.durationValue} {formData.durationType === 'Hourly' ? (formData.durationValue === 1 ? 'Hour' : 'Hours') : (formData.durationValue === 1 ? 'Day' : 'Days')}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setFormData({
                    ...formData,
                    durationValue: Math.max(formData.durationType === 'Hourly' ? 2 : 1, formData.durationValue - 1)
                  })}
                  className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-700 text-slate-200 hover:bg-slate-800 flex items-center justify-center font-bold"
                >
                  -
                </button>
                <input
                  type="number"
                  min={formData.durationType === 'Hourly' ? 2 : 1}
                  max={formData.durationType === 'Hourly' ? 24 : 30}
                  value={formData.durationValue}
                  onChange={(e) => setFormData({ ...formData, durationValue: Math.max(1, Number(e.target.value)) })}
                  className="w-14 bg-slate-900 border border-slate-700 rounded-lg py-1 px-2 text-center text-sm font-bold text-white focus:outline-none"
                />
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, durationValue: formData.durationValue + 1 })}
                  className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-700 text-slate-200 hover:bg-slate-800 flex items-center justify-center font-bold"
                >
                  +
                </button>
              </div>
            </div>
            {errors.durationValue && (
              <p className="text-xs text-rose-400">{errors.durationValue}</p>
            )}
          </div>
        </div>

        {/* Pickup Location & Date/Time */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-2">
          {/* Pickup Hub */}
          <div className="space-y-1.5 sm:col-span-1">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-brand-orange" />
              Pickup Hub in NCR *
            </label>
            <select
              value={formData.pickupLocation}
              onChange={(e) => {
                setFormData({ ...formData, pickupLocation: e.target.value });
                if (errors.pickupLocation) setErrors({ ...errors, pickupLocation: undefined });
              }}
              className={`w-full bg-slate-950 border rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition ${
                errors.pickupLocation ? 'border-rose-500' : 'border-slate-800 focus:border-brand-orange'
              }`}
            >
              <option value="">Select a pickup location</option>
              {DELHI_NCR_LOCATIONS.map((loc) => (
                <option key={loc.id} value={loc.name}>
                  {loc.name} ({loc.region})
                </option>
              ))}
            </select>
            {errors.pickupLocation && (
              <p className="text-xs text-rose-400">{errors.pickupLocation}</p>
            )}
          </div>

          {/* Pickup Date */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Pickup Date *
            </label>
            <input
              type="date"
              value={formData.pickupDate}
              onChange={(e) => {
                setFormData({ ...formData, pickupDate: e.target.value });
                if (errors.pickupDate) setErrors({ ...errors, pickupDate: undefined });
              }}
              className={`w-full bg-slate-950 border rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition ${
                errors.pickupDate ? 'border-rose-500' : 'border-slate-800 focus:border-brand-orange'
              }`}
            />
            {errors.pickupDate && (
              <p className="text-xs text-rose-400">{errors.pickupDate}</p>
            )}
          </div>

          {/* Pickup Time */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Pickup Time *
            </label>
            <input
              type="time"
              value={formData.pickupTime}
              onChange={(e) => setFormData({ ...formData, pickupTime: e.target.value })}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-orange"
            />
          </div>
        </div>

        {/* Special Message */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
            Special Requests or Message (Optional)
          </label>
          <textarea
            rows={3}
            placeholder="Tell us if you require doorstep delivery, specific child seats, airport drop-off, or have outstation travel plans..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-orange"
          />
        </div>

        {/* Submit Button & WhatsApp Alternative */}
        <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:flex-1 py-4 px-6 rounded-xl text-base font-bold text-white bg-gradient-to-r from-brand-orange to-brand-orange-600 hover:from-brand-orange-600 hover:to-brand-orange-700 shadow-glow transition transform hover:-translate-y-0.5 flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {isSubmitting ? (
              <span>Verifying Enquiry...</span>
            ) : (
              <>
                <span>Submit Rental Enquiry</span>
                <Send className="w-4 h-4" />
              </>
            )}
          </button>

          <a
            href="https://wa.me/919800000000?text=Hi%20FlexiRide,%20I%20have%20a%20booking%20enquiry%20for%20vehicle%20rentals%20in%20Delhi%20NCR."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto py-4 px-6 rounded-xl text-sm font-semibold text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 transition flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat via WhatsApp</span>
          </a>
        </div>
      </form>

      {/* Submission Success Modal / Receipt */}
      {submittedData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-brand-navy-900 border border-slate-700 rounded-2xl max-w-lg w-full p-6 sm:p-8 text-white space-y-5 shadow-2xl">
            {/* Header */}
            <div className="text-center space-y-2">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-white">Enquiry Received!</h3>
              <p className="text-xs text-slate-300">
                Thank you, <strong className="text-white">{submittedData.data.fullName}</strong>. Your rental enquiry has been logged successfully.
              </p>
            </div>

            {/* Reference Badge */}
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-3 flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">
                  Enquiry Reference ID
                </span>
                <span className="text-lg font-mono font-black text-brand-orange">
                  {submittedData.referenceId}
                </span>
              </div>
              <button
                type="button"
                onClick={copyReference}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-xs font-semibold text-slate-300 border border-slate-700 transition"
              >
                {copiedRef ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Summary Details */}
            <div className="bg-slate-950/70 border border-slate-800/80 rounded-xl p-4 text-xs space-y-2 text-slate-300">
              <div className="flex justify-between border-b border-slate-800 pb-1.5">
                <span className="text-slate-400">Category / Car:</span>
                <span className="font-semibold text-white">
                  {submittedData.data.category} {submittedData.data.vehicleModel ? `(${submittedData.data.vehicleModel})` : ''}
                </span>
              </div>
              <div className="flex justify-between border-b border-slate-800 pb-1.5">
                <span className="text-slate-400">Duration:</span>
                <span className="font-semibold text-white">
                  {submittedData.data.durationValue} {submittedData.data.durationType === 'Hourly' ? 'Hours' : 'Days'} ({submittedData.data.durationType})
                </span>
              </div>
              <div className="flex justify-between border-b border-slate-800 pb-1.5">
                <span className="text-slate-400">Pickup Location:</span>
                <span className="font-semibold text-white">{submittedData.data.pickupLocation}</span>
              </div>
              <div className="flex justify-between border-b border-slate-800 pb-1.5">
                <span className="text-slate-400">Schedule:</span>
                <span className="font-semibold text-white">
                  {submittedData.data.pickupDate} at {submittedData.data.pickupTime}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Contact:</span>
                <span className="font-semibold text-white">+91 {submittedData.data.phone}</span>
              </div>
            </div>

            {/* Demo Notice */}
            <div className="p-3 bg-brand-navy-950 border border-brand-orange/40 rounded-xl text-[11px] text-slate-300 space-y-1">
              <div className="font-bold text-brand-orange flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Demo Enquiry Notice
              </div>
              <p>
                This form operates in front-end demo mode. No charges have been billed. To simulate real-time dispatch, you can send this formatted booking enquiry directly to our WhatsApp desk.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2 pt-2">
              <a
                href={`https://wa.me/919800000000?text=${buildWhatsAppMessage()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition flex items-center justify-center gap-2 shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Send Enquiry to WhatsApp (+91 98000 00000)</span>
              </a>

              <button
                type="button"
                onClick={() => setSubmittedData(null)}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 transition"
              >
                Close Receipt
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
