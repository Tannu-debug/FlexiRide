'use client';

import React, { useState } from 'react';
import { MessageSquare, X, ArrowUpRight } from 'lucide-react';

interface WhatsAppButtonProps {
  phoneNumber?: string; // Configurable placeholder number
  defaultMessage?: string;
}

export default function WhatsAppButton({
  phoneNumber = '919800000000', // Configurable placeholder number
  defaultMessage = 'Hi FlexiRide! I would like to enquire about vehicle rental in Delhi NCR.',
}: WhatsAppButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  const cleanNumber = phoneNumber.replace(/[^0-9]/g, '');
  const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Mini popup card */}
      {isOpen && (
        <div className="mb-3 w-72 sm:w-80 bg-brand-navy-900 border border-slate-700/80 rounded-2xl shadow-2xl p-4 text-white animate-fadeIn">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <MessageSquare className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">FlexiRide WhatsApp</h4>
                <p className="text-[10px] text-emerald-400 font-medium">Delhi NCR Enquiry Desk</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white p-1 rounded-md"
              aria-label="Close WhatsApp chat popup"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="py-3 text-xs text-slate-300 space-y-2">
            <p className="bg-slate-800/80 p-2.5 rounded-xl text-slate-200">
              👋 Need quick rates or have a custom rental duration in mind? Connect directly with us on WhatsApp!
            </p>
            <div className="text-[10px] text-slate-400 italic">
              Configurable placeholder: +{cleanNumber} (Subject to final business number assignment)
            </div>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold transition shadow-md"
          >
            <span>Start WhatsApp Chat</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      )}

      {/* Main floating button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-semibold text-xs shadow-lg hover:shadow-emerald-500/30 transition transform hover:scale-105"
        aria-label="Open WhatsApp enquiry chat"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <MessageSquare className="w-5 h-5" />
        <span className="hidden sm:inline font-bold">Enquire on WhatsApp</span>
      </button>
    </div>
  );
}
