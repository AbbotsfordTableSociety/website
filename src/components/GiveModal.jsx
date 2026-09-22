import React from 'react';
import { X, Heart, ExternalLink, ShieldCheck, CheckCircle2, Lock, Gift } from 'lucide-react';

export default function GiveModal({ onClose }) {
  const givewiseUrl = "https://fund.givewise.ca/gift/charity/NQD00331";

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-amber-600 to-amber-700 text-white p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white font-bold">
              <Heart className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold">Partner & Give Online</h3>
              <p className="text-xs text-amber-100">Abbotsford Table Society Charitable Support</p>
            </div>
          </div>
          <button onClick={onClose} className="p-1 rounded-lg text-amber-200 hover:text-white hover:bg-amber-800">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-6 text-slate-800 overflow-y-auto">
          
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 space-y-3">
            <div className="flex items-center gap-2 text-amber-900 font-bold text-base">
              <Gift className="w-5 h-5 text-amber-600" />
              Empower Families in Abbotsford
            </div>
            <p className="text-xs text-slate-700 leading-relaxed">
              Your financial partnership directly funds emergency beds, utility relief, baby items, and local CarePortal technology operations that serve vulnerable children across Abbotsford.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-bold text-navy-900 uppercase tracking-wider">
              Choose Giving Option:
            </h4>

            {/* Option 1: GiveWise Direct Link */}
            <a 
              href={givewiseUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block bg-navy-900 text-white rounded-2xl p-5 hover:bg-navy-800 transition shadow-md group text-decoration-none"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-base text-amber-400 flex items-center gap-2">
                  <Lock className="w-4 h-4" />
                  Give Online via GiveWise
                </span>
                <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-white transition" />
              </div>
              <p className="text-xs text-slate-300">
                Official Canadian tax receipts issued automatically. Process credit card, debit, or recurring monthly gifts.
              </p>
            </a>

            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="bg-slate-50 border border-slate-200 p-3.5 rounded-xl">
                <span className="font-bold text-navy-900 block mb-1">BC Society Incorporation</span>
                <span className="text-slate-500">Registered Non-Profit #S0082710 (Incorporated June 2025)</span>
              </div>
              
              <div className="bg-slate-50 border border-slate-200 p-3.5 rounded-xl">
                <span className="font-bold text-navy-900 block mb-1">100% Local Impact</span>
                <span className="text-slate-500">Every dollar stays directly in the Abbotsford community</span>
              </div>
            </div>
          </div>

          <div className="pt-2 flex items-center justify-between border-t border-slate-100 text-xs">
            <span className="text-slate-500 font-medium">Inquiries? Contact info@abbotsfordtablesociety.ca</span>
            <button onClick={onClose} className="btn btn-outline text-xs px-4 py-2">
              Close
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
