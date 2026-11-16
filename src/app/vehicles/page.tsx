'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { VEHICLES_DATA } from '@/data/vehicles';
import { VehicleCategory, RentalDurationType } from '@/types';
import VehicleCard from '@/components/VehicleCard';
import { Car, Clock, Calendar, AlertCircle, Sparkles, Filter, CheckCircle2 } from 'lucide-react';

function VehiclesContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category');

  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [preferredDuration, setPreferredDuration] = useState<RentalDurationType>('Hourly');
  const [transmissionFilter, setTransmissionFilter] = useState<string>('All');

  // Handle URL query param
  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [categoryParam]);

  // Categories list
  const categories = ['All', 'Hatchback', 'Sedan', 'SUV', 'Premium Cars'];

  // Filtered vehicles
  const filteredVehicles = VEHICLES_DATA.filter((v) => {
    const matchCategory = selectedCategory === 'All' || v.category === selectedCategory;
    const matchTransmission =
      transmissionFilter === 'All' ||
      v.transmission.toLowerCase().includes(transmissionFilter.toLowerCase());
    return matchCategory && matchTransmission;
  });

  return (
    <div className="bg-brand-navy-950 min-h-screen text-slate-100 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-orange/15 text-brand-orange border border-brand-orange/30">
            <Sparkles className="w-3.5 h-3.5" /> Delhi NCR Fleet
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Our Vehicle Fleet
          </h1>
          <p className="text-base text-slate-300 leading-relaxed">
            Choose from modern Hatchbacks, comfortable Sedans, versatile SUVs, and luxury Premium Cars. Every vehicle is sanitized, maintained to high safety standards, and available for flexible hourly and daily bookings.
          </p>

          {/* Mandatory Illustrative Disclaimer Notice */}
          <div className="inline-flex items-center gap-2 p-3 rounded-2xl bg-brand-navy-900 border border-brand-orange/40 text-xs text-slate-300 max-w-2xl text-left">
            <AlertCircle className="w-4 h-4 text-brand-orange shrink-0" />
            <span>
              <strong className="text-white">Illustrative Notice:</strong> All vehicle models, specifications, pricing, and availability shown below are illustrative sample details for Delhi NCR demonstration until actual commercial deployment is announced.
            </span>
          </div>
        </div>

        {/* Filter & Controls Bar */}
        <div className="bg-brand-navy-900 border border-slate-800 rounded-2xl p-4 sm:p-6 shadow-xl space-y-5">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            {/* Category Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mr-1 flex items-center gap-1">
                <Filter className="w-3.5 h-3.5" /> Category:
              </span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition ${
                    selectedCategory === cat
                      ? 'bg-brand-orange text-white shadow-glow'
                      : 'bg-slate-950 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Duration Mode & Transmission */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Duration View Toggle */}
              <div className="inline-flex rounded-xl bg-slate-950 p-1 border border-slate-800">
                <button
                  type="button"
                  onClick={() => setPreferredDuration('Hourly')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition flex items-center gap-1.5 ${
                    preferredDuration === 'Hourly'
                      ? 'bg-brand-orange text-white'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Clock className="w-3 h-3" />
                  View Hourly Rates
                </button>
                <button
                  type="button"
                  onClick={() => setPreferredDuration('Daily')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition flex items-center gap-1.5 ${
                    preferredDuration === 'Daily'
                      ? 'bg-brand-orange text-white'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Calendar className="w-3 h-3" />
                  View Daily Rates
                </button>
              </div>

              {/* Transmission filter */}
              <select
                value={transmissionFilter}
                onChange={(e) => setTransmissionFilter(e.target.value)}
                className="bg-slate-950 border border-slate-800 text-xs text-slate-200 rounded-xl px-3 py-2 focus:outline-none focus:border-brand-orange"
              >
                <option value="All">All Transmissions</option>
                <option value="Automatic">Automatic Only</option>
                <option value="Manual">Manual Only</option>
              </select>
            </div>
          </div>

          {/* Quick Category Summary Bar */}
          <div className="pt-3 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400">
            <span>
              Showing <strong className="text-white">{filteredVehicles.length}</strong> vehicle models across{' '}
              <strong className="text-brand-orange">{selectedCategory}</strong>
            </span>
            <div className="flex items-center gap-4 text-[11px]">
              <span className="flex items-center gap-1 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Free Kilometres Included
              </span>
              <span className="flex items-center gap-1 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Sanitized & Inspected
              </span>
            </div>
          </div>
        </div>

        {/* Vehicle Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVehicles.map((vehicle) => (
            <VehicleCard
              key={vehicle.id}
              vehicle={vehicle}
              preferredDuration={preferredDuration}
            />
          ))}
        </div>

        {/* Empty state fallback */}
        {filteredVehicles.length === 0 && (
          <div className="text-center py-16 bg-slate-900/50 rounded-2xl border border-slate-800 space-y-3">
            <Car className="w-10 h-10 text-slate-600 mx-auto" />
            <h3 className="text-lg font-bold text-white">No vehicles matched your filter</h3>
            <p className="text-xs text-slate-400">
              Try resetting the category or transmission filter to browse all available models.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('All');
                setTransmissionFilter('All');
              }}
              className="px-4 py-2 bg-brand-orange text-white rounded-xl text-xs font-bold"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Category Features Comparison Table */}
        <div className="bg-brand-navy-900 border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">
              Category Comparison
            </span>
            <h3 className="text-2xl font-black text-white">
              Fleet Category Comparison Guide
            </h3>
            <p className="text-xs text-slate-400">
              Find the vehicle type that best matches your trip in Delhi NCR.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400 font-bold uppercase">
                  <th className="py-3 px-4">Category</th>
                  <th className="py-3 px-4">Sample Models</th>
                  <th className="py-3 px-4">Best For</th>
                  <th className="py-3 px-4">Starting Tariff</th>
                  <th className="py-3 px-4">Refundable Deposit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80 text-slate-300">
                <tr>
                  <td className="py-3 px-4 font-bold text-white">Hatchback</td>
                  <td className="py-3 px-4">Swift, i20, Altroz</td>
                  <td className="py-3 px-4">City commutes, tight parking, college runs</td>
                  <td className="py-3 px-4 text-brand-orange font-bold">₹149/hr • ₹1,499/day</td>
                  <td className="py-3 px-4">₹2,000</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-white">Sedan</td>
                  <td className="py-3 px-4">City, Verna, Ciaz</td>
                  <td className="py-3 px-4">Executive comfort, airport pickups, family trips</td>
                  <td className="py-3 px-4 text-brand-orange font-bold">₹199/hr • ₹2,199/day</td>
                  <td className="py-3 px-4">₹3,000</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-white">SUV</td>
                  <td className="py-3 px-4">Creta, XUV700, Harrier</td>
                  <td className="py-3 px-4">Highway road trips, high clearance, 5-7 passengers</td>
                  <td className="py-3 px-4 text-brand-orange font-bold">₹279/hr • ₹2,899/day</td>
                  <td className="py-3 px-4">₹5,000</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-white">Premium Cars</td>
                  <td className="py-3 px-4">BMW 3, Mercedes C, Audi A4</td>
                  <td className="py-3 px-4">VIP transfers, weddings, corporate summits</td>
                  <td className="py-3 px-4 text-brand-orange font-bold">₹629/hr • ₹6,699/day</td>
                  <td className="py-3 px-4">₹10,000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-[10px] text-slate-500 italic">
            *All comparison figures are illustrative estimates for Delhi NCR operations.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function VehiclesPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-brand-navy-950 text-white flex items-center justify-center">Loading vehicles...</div>}>
      <VehiclesContent />
    </Suspense>
  );
}
