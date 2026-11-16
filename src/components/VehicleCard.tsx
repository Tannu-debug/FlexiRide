'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Vehicle, RentalDurationType } from '@/types';
import { Users, Gauge, Fuel, Briefcase, Cog, CheckCircle2, ArrowRight, Info } from 'lucide-react';

interface VehicleCardProps {
  vehicle: Vehicle;
  preferredDuration?: RentalDurationType;
}

export default function VehicleCard({ vehicle, preferredDuration = 'Hourly' }: VehicleCardProps) {
  const [durationMode, setDurationMode] = useState<RentalDurationType>(preferredDuration);
  const [showDetailsModal, setShowDetailsModal] = useState(false);

  return (
    <>
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:border-brand-orange/40 transition-all duration-300 flex flex-col group">
        {/* Card Header & Image */}
        <div className="relative h-52 sm:h-60 w-full overflow-hidden bg-slate-950">
          <img
            src={vehicle.image}
            alt={`${vehicle.name} - ${vehicle.category} vehicle rental in Delhi NCR`}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/30" />

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-wrap gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-navy-950/80 backdrop-blur-md text-brand-orange border border-brand-orange/40">
              {vehicle.category}
            </span>
            {vehicle.badge && (
              <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/90 text-white shadow-sm">
                {vehicle.badge}
              </span>
            )}
          </div>

          <div className="absolute top-3 right-3">
            <span className="text-[10px] font-medium bg-black/60 text-slate-300 backdrop-blur-md px-2 py-1 rounded-md border border-white/10">
              Delhi NCR Fleet
            </span>
          </div>

          {/* Bottom title in image */}
          <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
            <div>
              <h3 className="text-xl font-bold text-white tracking-tight drop-shadow-md">
                {vehicle.name}
              </h3>
              <p className="text-xs text-slate-300 font-medium line-clamp-1">
                {vehicle.tagline}
              </p>
            </div>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
          {/* Key Specifications Grid */}
          <div className="grid grid-cols-3 gap-2 py-2 border-y border-slate-800/80 text-xs text-slate-300">
            <div className="flex items-center gap-1.5" title="Seating Capacity">
              <Users className="w-3.5 h-3.5 text-brand-orange shrink-0" />
              <span>{vehicle.seats} Seats</span>
            </div>
            <div className="flex items-center gap-1.5" title="Transmission">
              <Cog className="w-3.5 h-3.5 text-brand-orange shrink-0" />
              <span className="truncate">{vehicle.transmission}</span>
            </div>
            <div className="flex items-center gap-1.5" title="Fuel Type">
              <Fuel className="w-3.5 h-3.5 text-brand-orange shrink-0" />
              <span>{vehicle.fuelType}</span>
            </div>
            <div className="flex items-center gap-1.5" title="Mileage">
              <Gauge className="w-3.5 h-3.5 text-brand-orange shrink-0" />
              <span>{vehicle.mileage}</span>
            </div>
            <div className="flex items-center gap-1.5 col-span-2" title="Luggage">
              <Briefcase className="w-3.5 h-3.5 text-brand-orange shrink-0" />
              <span className="truncate">{vehicle.luggageCapacity}</span>
            </div>
          </div>

          {/* Features Highlights */}
          <div className="flex flex-wrap gap-1.5">
            {vehicle.features.slice(0, 3).map((feat, idx) => (
              <span
                key={idx}
                className="text-[11px] font-medium bg-slate-800/80 text-slate-300 px-2 py-0.5 rounded-md border border-slate-700/50 flex items-center gap-1"
              >
                <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                {feat}
              </span>
            ))}
            {vehicle.features.length > 3 && (
              <button
                type="button"
                onClick={() => setShowDetailsModal(true)}
                className="text-[11px] text-brand-orange hover:underline px-1 py-0.5"
              >
                +{vehicle.features.length - 3} more
              </button>
            )}
          </div>

          {/* Pricing & Rate Mode Toggle */}
          <div className="bg-slate-950/70 p-3.5 rounded-xl border border-slate-800 space-y-2.5">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-400 font-medium">Rental Tariff</span>
              <div className="inline-flex rounded-lg bg-slate-900 p-0.5 border border-slate-800">
                <button
                  type="button"
                  onClick={() => setDurationMode('Hourly')}
                  className={`px-2.5 py-1 text-[11px] font-semibold rounded-md transition ${
                    durationMode === 'Hourly'
                      ? 'bg-brand-orange text-white'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Hourly
                </button>
                <button
                  type="button"
                  onClick={() => setDurationMode('Daily')}
                  className={`px-2.5 py-1 text-[11px] font-semibold rounded-md transition ${
                    durationMode === 'Daily'
                      ? 'bg-brand-orange text-white'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Daily
                </button>
              </div>
            </div>

            <div className="flex items-baseline justify-between">
              <div>
                <span className="text-xs text-slate-400">Starting from</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-black text-white">
                    ₹{durationMode === 'Hourly' ? vehicle.hourlyRate : vehicle.dailyRate.toLocaleString('en-IN')}
                  </span>
                  <span className="text-xs text-brand-orange font-semibold">
                    /{durationMode === 'Hourly' ? 'hour' : 'day'}
                  </span>
                </div>
              </div>

              <span className="text-[10px] text-slate-400 bg-slate-900 px-2 py-1 rounded border border-slate-800">
                {durationMode === 'Hourly' ? 'Min 2 hrs • 10 km/hr' : '24 hrs • 250 km/day'}
              </span>
            </div>
          </div>

          {/* Illustrative Notice Disclaimer */}
          <p className="text-[10px] text-slate-400 italic text-center">
            *Sample vehicle model, pricing & availability for illustrative Delhi NCR preview.
          </p>

          {/* Actions */}
          <div className="grid grid-cols-2 gap-2 pt-1">
            <button
              type="button"
              onClick={() => setShowDetailsModal(true)}
              className="py-2.5 px-3 rounded-xl text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 hover:text-white border border-slate-700 transition flex items-center justify-center gap-1.5"
            >
              <Info className="w-3.5 h-3.5" />
              <span>Full Details</span>
            </button>

            <Link
              href={`/contact?category=${encodeURIComponent(vehicle.category)}&model=${encodeURIComponent(vehicle.name)}&duration=${durationMode}`}
              className="py-2.5 px-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-brand-orange to-brand-orange-600 hover:from-brand-orange-600 hover:to-brand-orange-700 shadow-glow transition flex items-center justify-center gap-1.5"
            >
              <span>Enquire Now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Details Modal */}
      {showDetailsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-brand-navy-900 border border-slate-700 rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 text-white space-y-4 shadow-2xl">
            <div className="flex items-start justify-between pb-3 border-b border-slate-800">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">
                  {vehicle.category}
                </span>
                <h3 className="text-2xl font-black text-white">{vehicle.name}</h3>
                <p className="text-xs text-slate-300">{vehicle.tagline}</p>
              </div>
              <button
                type="button"
                onClick={() => setShowDetailsModal(false)}
                className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800"
              >
                ✕
              </button>
            </div>

            <div className="rounded-xl overflow-hidden h-48 bg-slate-950">
              <img
                src={vehicle.image}
                alt={vehicle.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase text-slate-400">Overview</h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                {vehicle.description}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs bg-slate-950/60 p-3.5 rounded-xl border border-slate-800">
              <div>
                <span className="text-slate-400 block">Hourly Tariff</span>
                <span className="text-base font-bold text-brand-orange">₹{vehicle.hourlyRate}/hour</span>
                <span className="text-[10px] text-slate-500 block">Includes 10 km/hr</span>
              </div>
              <div>
                <span className="text-slate-400 block">Daily Tariff</span>
                <span className="text-base font-bold text-brand-orange">₹{vehicle.dailyRate.toLocaleString('en-IN')}/day</span>
                <span className="text-[10px] text-slate-500 block">Includes 250 km/day</span>
              </div>
              <div>
                <span className="text-slate-400 block">Transmission</span>
                <span className="font-semibold text-white">{vehicle.transmission}</span>
              </div>
              <div>
                <span className="text-slate-400 block">Fuel Type</span>
                <span className="font-semibold text-white">{vehicle.fuelType}</span>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase text-slate-400">Included Features</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {vehicle.features.map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-1.5 text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-3 rounded-xl bg-brand-navy-950 border border-slate-800 text-[11px] text-slate-400 space-y-1">
              <p className="font-semibold text-slate-300 flex items-center gap-1">
                <Info className="w-3.5 h-3.5 text-brand-orange" /> Illustrative Notice:
              </p>
              <p>
                All rates, vehicle trims, and features shown are sample demonstrations for FlexiRide Delhi NCR. Final vehicle specifications and contract terms are confirmed upon booking enquiry submission.
              </p>
            </div>

            <div className="pt-2 flex gap-3">
              <button
                type="button"
                onClick={() => setShowDetailsModal(false)}
                className="flex-1 py-2.5 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-300"
              >
                Close
              </button>
              <Link
                href={`/contact?category=${encodeURIComponent(vehicle.category)}&model=${encodeURIComponent(vehicle.name)}`}
                onClick={() => setShowDetailsModal(false)}
                className="flex-1 py-2.5 rounded-xl text-xs font-bold bg-brand-orange hover:bg-brand-orange-600 text-white text-center shadow-glow"
              >
                Book Enquiry For This Car
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
