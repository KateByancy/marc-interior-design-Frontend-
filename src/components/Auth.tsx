// src/components/Auth.tsx
"use client";
import React, { useState } from 'react';
import { Home, ArrowLeft } from 'lucide-react';

interface AuthProps {
  onAuthSuccess: () => void;
  onBackToLanding: () => void;
}

export default function Auth({ onAuthSuccess, onBackToLanding }: AuthProps) {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <div className="w-full max-w-md mx-auto min-h-[844px] bg-gradient-to-b from-[#005c9e] to-[#0a192f] text-white px-6 pt-10 pb-6 flex flex-col justify-between overflow-y-auto animate-fadeIn relative">
      
      {/* Return Context Arrow Button */}
      <button onClick={onBackToLanding} className="absolute top-8 left-4 p-2 bg-white/10 rounded-xl hover:bg-white/20 transition">
        <ArrowLeft className="w-4 h-4" />
      </button>

      <div className="space-y-6 pt-4">
        {/* Core Branded Header Shield Block */}
        <div className="text-center space-y-2">
          <div className="w-14 h-14 bg-[#111c3a] rounded-xl mx-auto flex items-center justify-center shadow-xl border border-blue-500/20">
            <Home className="w-6 h-6 text-blue-400" />
          </div>
          <h2 className="text-xl font-serif font-bold tracking-wide">
            {isRegister ? 'Register Now' : 'MARC'}
          </h2>
          <p className="text-[10px] tracking-widest uppercase text-blue-200">
            {isRegister ? 'Complete Your Profile' : 'Custom Interior Design'}
          </p>
        </div>

        {/* Dynamic Form Setup View */}
        <form onSubmit={(e) => { e.preventDefault(); onAuthSuccess(); }} className="space-y-3.5">
          {isRegister && (
            <>
              <div>
                <label className="text-[9px] tracking-widest font-black text-blue-200 block mb-1 uppercase">Full Name</label>
                <input required type="text" placeholder="John Doe Brown" className="w-full bg-white text-slate-800 rounded-xl px-4 py-2.5 text-xs shadow-inner focus:outline-none" />
              </div>
              <div>
                <label className="text-[9px] tracking-widest font-black text-blue-200 block mb-1 uppercase">Phone Number</label>
                <input required type="tel" placeholder="0917 000 0000" className="w-full bg-white text-slate-800 rounded-xl px-4 py-2.5 text-xs shadow-inner focus:outline-none" />
              </div>
              <div>
                <label className="text-[9px] tracking-widest font-black text-blue-200 block mb-1 uppercase">Project Address</label>
                <input required type="text" placeholder="Barangay, City" className="w-full bg-white text-slate-800 rounded-xl px-4 py-2.5 text-xs shadow-inner focus:outline-none" />
              </div>
            </>
          )}

          <div>
            <label className="text-[9px] tracking-widest font-black text-blue-200 block mb-1 uppercase">Email Address</label>
            <input required type="email" placeholder="johndoe@example.com" className="w-full bg-white text-slate-800 rounded-xl px-4 py-2.5 text-xs shadow-inner focus:outline-none" />
          </div>

          <div>
            <label className="text-[9px] tracking-widest font-black text-blue-200 block mb-1 uppercase">Password</label>
            <input required type="password" placeholder="••••••••" className="w-full bg-white text-slate-800 rounded-xl px-4 py-2.5 text-xs shadow-inner focus:outline-none" />
          </div>

          <button type="submit" className="w-full bg-[#111c3a] text-white text-xs font-bold tracking-widest py-3 rounded-xl transition hover:bg-[#16254e] mt-4 shadow-md">
            {isRegister ? 'REGISTER NOW' : 'SIGN IN'}
          </button>
        </form>

        {/* Third Party Auth Splitting Divider line */}
        <div className="relative flex py-2 items-center">
          <div className="flex-grow border-t border-white/10"></div>
          <span className="flex-shrink mx-3 text-[9px] font-bold text-slate-400 tracking-wider uppercase">Or Continue With</span>
          <div className="flex-grow border-t border-white/10"></div>
        </div>

        {/* Google Mock Auth Target Trigger */}
        <button onClick={onAuthSuccess} className="w-full bg-white text-slate-700 text-xs font-bold py-2.5 rounded-xl flex items-center justify-center space-x-2 border border-slate-200 shadow-sm hover:bg-slate-50 transition">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://docs.idverify.net/assets/google-icon.svg" alt="Google" className="w-3.5 h-3.5" onError={(e)=>{e.currentTarget.src="https://www.google.com/favicon.ico"}} />
          <span>Continue with Google</span>
        </button>
      </div>

      {/* Context Action Switcher Link */}
      <div className="text-center pt-6">
        <button onClick={() => setIsRegister(!isRegister)} className="text-[10px] font-bold tracking-wider text-blue-300 hover:underline uppercase">
          {isRegister ? 'Already a member? Log In' : 'New Client? Create an Account'}
        </button>
      </div>

    </div>
  );
}