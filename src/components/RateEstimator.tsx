'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { VehicleCategory, RentalDurationType } from '@/types';
import { DELHI_NCR_LOCATIONS } from '@/data/locations';
import { Calculator, Clock, Calendar, MapPin, Shield, Fuel, ArrowRight, Sparkles } from 'lucide-react';

const CATEGORY_BASE_RATES: Record<VehicleCategory, { hourly: number; daily: number; deposit: number; kmPerHour: number; kmPerDay: number }> = {
  Hatchback: { hourly: 149, daily: 1499, deposit: 2000, kmPerHour: 10, kmPerDay: 250 },
  Sedan: { hourly: 199, daily: 2199, deposit: 3000, kmPerHour: 10, kmPerDay: 250 },
  SUV: { hourly: 279, daily: 2899, deposit: 5000, kmPerHour: 12, kmPerDay: 250 },
  'Premium Cars': { hourly: 629, daily: 6699, deposit: 10000, kmPerHour: 15, kmPerDay: 250 },
};

export default function RateEstimator() {
  const [category, setCategory] = useState<VehicleCategory>('Hatchback');
  const [durationType, setDurationType] = useState<RentalDurationType>('Hourly');
  const [durationValue, setDurationValue] = useState<number>(4);
  const [selectedLocation, setSelectedLocation] = useState<string>(DELHI_NCR_LOCATIONS[0].name);

  const rates = CATEGORY_BASE_RATES[category];

  // Calculate pricing
  const isHourly = durationType === 'Hourly';
  const estimatedCost = isHourly
    ? rates.hourly * durationValue
    : rates.daily * durationValue;

  const totalKmIncluded = isHourly
    ? rates.kmPerHour * durationValue
    : rates.kmPerDay * durationValue;

  return (
    <div className="bg-brand-navy-900 border border-slate-700/80 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 space-y-6">
        {/* Title */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-slate-800">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-orange bg-brand-orange/10 px-3 py-1 rounded-full mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              Live Fare Estimator
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              Calculate Your Rental Tariff
            </h3>
            <p className="text-xs text-slate-400">
              Customize hourly or daily rental packages across Delhi NCR.
            </p>
          </div>

          {/* Hourly vs Daily Toggle */}
          <div className="inline-flex bg-slate-950 p-1 rounded-xl border border-slate-800 self-start sm:self-auto">
            <button
              type="button"
              onClick={() => {
                setDurationType('Hourly');
                setDurationValue(4);
              }}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold transition ${
                isHourly
                  ? 'bg-brand-orange text-white shadow-glow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Clock className="w-3.5 h-3.5" />
              Hourly Rental
            </button>
            <button
              type="button"
              onClick={() => {
                setDurationType('Daily');
                setDurationValue(2);
              }}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold transition ${
                !isHourly
                  ? 'bg-brand-orange text-white shadow-glow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Calendar className="w-3.5 h-3.5" />
              Daily Rental
            </button>
          </div>
        </div>

        {/* Inputs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Category Selector */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Vehicle Category
            </label>
            <div className="grid grid-cols-2 gap-2">
              {(['Hatchback', 'Sedan', 'SUV', 'Premium Cars'] as VehicleCategory[]).map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setCategory(cat)}
                  className={`p-2.5 rounded-xl text-xs font-semibold border text-left transition ${
                    category === cat
                      ? 'bg-brand-orange/15 border-brand-orange text-white font-bold'
                      : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                  }`}
                >
                  <div className="text-white text-xs">{cat}</div>
                  <div className="text-[10px] text-brand-orange/90 font-medium">
                    {isHourly ? `₹${CATEGORY_BASE_RATES[cat].hourly}/hr` : `₹${CATEGORY_BASE_RATES[cat].daily}/day`}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Duration Slider / Counter */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                {isHourly ? 'Rental Duration (Hours)' : 'Rental Duration (Days)'}
              </label>
              <span className="text-sm font-black text-brand-orange bg-slate-950 px-2.5 py-0.5 rounded border border-slate-800">
                {durationValue} {isHourly ? (durationValue === 1 ? 'Hour' : 'Hours') : (durationValue === 1 ? 'Day' : 'Days')}
              </span>
            </div>

            <input
              type="range"
              min={isHourly ? 2 : 1}
              max={isHourly ? 24 : 14}
              step={1}
              value={durationValue}
              onChange={(e) => setDurationValue(Number(e.target.value))}
              className="w-full h-2 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-brand-orange"
            />

            <div className="flex justify-between text-[10px] text-slate-500 font-medium">
              <span>{isHourly ? 'Min 2 hrs' : 'Min 1 day'}</span>
              <span>{isHourly ? '8 hrs (Full Workday)' : '3 days (Weekend Trip)'}</span>
              <span>{isHourly ? '24 hrs' : '14 days'}</span>
            </div>
          </div>

          {/* Pickup Hub */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-brand-orange" />
              Pickup Hub in Delhi NCR
            </label>
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-brand-orange"
            >
              {DELHI_NCR_LOCATIONS.map((loc) => (
                <option key={loc.id} value={loc.name}>
                  {loc.name} ({loc.region})
                </option>
              ))}
            </select>
            <span className="text-[10px] text-slate-400 block">
              Free pickup at partner hubs or doorstep drop-off across NCR.
            </span>
          </div>
        </div>

        {/* Calculated Breakdown Card */}
        <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs text-slate-400 font-medium">Estimated Rental Tariff</span>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                ₹{estimatedCost.toLocaleString('en-IN')}
              </span>
              <span className="text-xs text-slate-400">
                (for {durationValue} {isHourly ? 'hours' : 'days'})
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-1 text-[11px] text-slate-400">
              <span className="inline-flex items-center gap-1 text-emerald-400">
                <Shield className="w-3 h-3" /> {totalKmIncluded} km included
              </span>
              <span>&bull;</span>
              <span>Refundable Deposit: ~₹{rates.deposit.toLocaleString('en-IN')}</span>
              <span>&bull;</span>
              <span className="inline-flex items-center gap-1">
                <Fuel className="w-3 h-3 text-brand-orange" /> Same-to-same fuel
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            <Link
              href={`/contact?category=${encodeURIComponent(category)}&duration=${durationType}&value=${durationValue}&location=${encodeURIComponent(selectedLocation)}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-brand-orange to-brand-orange-600 hover:from-brand-orange-600 hover:to-brand-orange-700 shadow-glow transition transform hover:scale-[1.02]"
            >
              <span>Submit Booking Enquiry</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <p className="text-[10px] text-slate-500 text-center italic">
          *Tariff calculations are illustrative estimates for planning. Final quotation is validated during enquiry confirmation with FlexiRide team.
        </p>
      </div>
    </div>
  );
}
