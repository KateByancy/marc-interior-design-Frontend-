// src/components/Landing.tsx
"use client";
import React from 'react';
import { ShieldCheck, Grid, Calendar, MessageSquare } from 'lucide-react';

interface LandingProps {
  onNavigate: (route: string) => void;
}

export default function Landing({ onNavigate }: LandingProps) {
  return (
    <div className="w-full max-w-md mx-auto min-h-[844px] bg-gradient-to-b from-[#005c9e] to-[#0a192f] text-white flex flex-col justify-between overflow-y-auto pb-8 animate-fadeIn">
      
      {/* Top Hero Showcase Banner Image Section */}
      <div className="relative h-60 w-full bg-slate-800 flex flex-col justify-center items-center text-center p-6 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80')` }}>
        <div className="absolute inset-0 bg-[#004b84]/70 backdrop-blur-[1px]" />
        <div className="relative z-10 space-y-2">
          <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl mx-auto flex items-center justify-center border border-white/20 shadow-xl">
            <span className="text-2xl font-serif font-black tracking-wider text-white">M</span>
          </div>
          <h1 className="text-xl font-serif tracking-widest font-bold">CARRIER</h1>
          <p className="text-[10px] uppercase tracking-widest text-blue-200">The Fine Authority Service</p>
        </div>
      </div>

      {/* Corporate Copy Block */}
      <div className="px-6 py-4 text-center space-y-2">
        <h2 className="text-sm font-serif tracking-wide font-semibold text-blue-100">The Marc Signature</h2>
        <p className="text-xs text-slate-300 font-light leading-relaxed">
          Where binary precision meets artistic intuition. We believe every corner should tell a story of intentionality, balance, and quiet luxury.
        </p>
      </div>

      {/* Grid Action Panel Layout Blocks */}
      <div className="px-6 grid grid-cols-2 gap-3">
        <button onClick={() => onNavigate('home')} className="bg-white/95 text-slate-800 p-4 rounded-xl flex flex-col items-center text-center shadow-md hover:bg-white transition">
          <ShieldCheck className="w-6 h-6 text-[#0070c0] mb-2" />
          <span className="text-[10px] font-black tracking-wider uppercase">Residential</span>
        </button>

        <button onClick={() => onNavigate('work')} className="bg-white/95 text-slate-800 p-4 rounded-xl flex flex-col items-center text-center shadow-md hover:bg-white transition">
          <Grid className="w-6 h-6 text-[#0070c0] mb-2" />
          <span className="text-[10px] font-black tracking-wider uppercase">Commercial</span>
        </button>

        <button onClick={() => onNavigate('book')} className="bg-white/95 text-slate-800 p-4 rounded-xl flex flex-col items-center text-center shadow-md hover:bg-white transition">
          <Calendar className="w-6 h-6 text-[#0070c0] mb-2" />
          <span className="text-[10px] font-black tracking-wider uppercase">Book Now</span>
        </button>

        <button onClick={() => onNavigate('chat')} className="bg-white/95 text-slate-800 p-4 rounded-xl flex flex-col items-center text-center shadow-md hover:bg-white transition">
          <MessageSquare className="w-6 h-6 text-[#0070c0] mb-2" />
          <span className="text-[10px] font-black tracking-wider uppercase">Support</span>
        </button>
      </div>

      {/* Core Trigger CTA */}
      <div className="px-6 pt-4">
        <button onClick={() => onNavigate('login')} className="w-full bg-[#111c3a] border border-blue-900/50 text-white font-bold text-xs tracking-widest py-3.5 rounded-xl shadow-lg transition hover:bg-[#16254e]">
          READY TO BEGIN?
        </button>
      </div>

      {/* Footer Branded Links */}
      <div className="text-center pt-4 border-t border-white/5 mx-6">
        <p className="text-[9px] text-slate-400 tracking-wider">© 2026 MARC CUSTOM DESIGNS - EST 2013</p>
      </div>

    </div>
  );
}