// src/components/Auth.tsx
"use client";
import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';

interface AuthProps {
  onAuthSuccess: () => void;
  onBackToLanding: () => void;
}

export default function Auth({ onAuthSuccess, onBackToLanding }: AuthProps) {
  const [isRegisterMode, setIsRegisterMode] = useState(false);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-[#0a1128] to-[#0070c0] flex items-center justify-center p-0 md:p-6">
      
      {/* DESKTOP MATRIX CONTAINER CARD */}
      <div className="w-full max-w-5xl min-h-[600px] bg-white md:rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        
        {/* LEFT COLUMN PANEL: Brand presentation showcase (Hidden on small mobile viewports) */}
        <div className="hidden md:flex bg-gradient-to-b from-[#0070c0] to-[#111c3a] p-12 flex-col justify-between text-white relative">
          <button 
            onClick={onBackToLanding}
            className="absolute top-6 left-6 flex items-center space-x-2 text-xs font-bold tracking-widest text-blue-200 hover:text-white transition"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>RETURN TO SITE</span>
          </button>

          <div className="mt-16 space-y-4">
            <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center font-serif text-xl font-black border border-white/20">
              M
            </div>
            <h2 className="text-3xl font-serif font-black tracking-wide leading-tight">
              Marc Custom <br/>Interior Design System
            </h2>
            <p className="text-xs text-blue-100/70 max-w-sm leading-relaxed">
              Access your real-time estimation pipelines, project timeline tracks, and premium structural material selectors.
            </p>
          </div>

          <p className="text-[10px] text-blue-300 tracking-wider">© 2026 MARC CUSTOM SYSTEM ARCHITECTURE</p>
        </div>

        {/* RIGHT COLUMN PANEL: Dynamic Form Interface Engine */}
        <div className="p-8 md:p-12 flex flex-col justify-center bg-white relative">
          {/* Mobile Back Trigger Button */}
          <button onClick={onBackToLanding} className="md:hidden absolute top-6 left-6 text-slate-400 hover:text-slate-900 transition">
            <ArrowLeft className="w-5 h-5" />
          </button>

          {!isRegisterMode ? (
            /* --- LOGIN FORM SUB-VIEW --- */
            <div className="space-y-6 animate-fadeIn">
              <div className="text-center md:text-left">
                <h3 className="text-xl font-serif font-black text-slate-800 tracking-wide">Welcome Back</h3>
                <p className="text-xs text-slate-400 mt-1">Please enter your credentials to log in.</p>
              </div>

              <form onSubmit={(e) => { e.preventDefault(); onAuthSuccess(); }} className="space-y-4">
                <div>
                  <label className="text-[9px] tracking-widest font-black text-slate-400 block mb-1 uppercase">Email Address</label>
                  <input type="email" placeholder="john@example.com" required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-blue-500 text-slate-800" />
                </div>
                <div>
                  <label className="text-[9px] tracking-widest font-black text-slate-400 block mb-1 uppercase">Password</label>
                  <input type="password" placeholder="••••••••" required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-blue-500 text-slate-800" />
                </div>

                <button type="submit" className="w-full bg-[#111c3a] text-white text-xs font-bold tracking-widest py-3.5 rounded-xl shadow-md transition hover:bg-[#1c2d5e]">
                  SIGN IN
                </button>
              </form>

              <div className="text-center pt-4 border-t border-slate-100">
                <button onClick={() => setIsRegisterMode(true)} className="text-[11px] text-blue-600 font-bold hover:underline tracking-wide">
                  NEW CLIENT? CREATE AN ACCOUNT
                </button>
              </div>
            </div>
          ) : (
            /* --- REGISTER FORM SUB-VIEW --- */
            <div className="space-y-5 animate-fadeIn">
              <div className="text-center md:text-left">
                <h3 className="text-xl font-serif font-black text-slate-800 tracking-wide">Register Now</h3>
                <p className="text-xs text-slate-400 mt-1">Complete your profile pipeline system setup.</p>
              </div>

              <form onSubmit={(e) => { e.preventDefault(); onAuthSuccess(); }} className="space-y-3">
                <div>
                  <label className="text-[9px] tracking-widest font-black text-slate-400 block mb-1 uppercase">Full Name</label>
                  <input type="text" placeholder="John Doe Brown" required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-blue-500 text-slate-800" />
                </div>
                <div>
                  <label className="text-[9px] tracking-widest font-black text-slate-400 block mb-1 uppercase">Phone Number</label>
                  <input type="text" placeholder="0917 000 0000" required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-blue-500 text-slate-800" />
                </div>
                <div>
                  <label className="text-[9px] tracking-widest font-black text-slate-400 block mb-1 uppercase">Project Address</label>
                  <input type="text" placeholder="Barangay, City" required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-blue-500 text-slate-800" />
                </div>
                <div>
                  <label className="text-[9px] tracking-widest font-black text-slate-400 block mb-1 uppercase">Email Address</label>
                  <input type="email" placeholder="johndoe@example.com" required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-blue-500 text-slate-800" />
                </div>
                <div>
                  <label className="text-[9px] tracking-widest font-black text-slate-400 block mb-1 uppercase">Password</label>
                  <input type="password" placeholder="••••••••" required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-blue-500 text-slate-800" />
                </div>

                <button type="submit" className="w-full bg-[#0070c0] text-white text-xs font-bold tracking-widest py-3.5 rounded-xl shadow-md transition hover:bg-blue-700 pt-2">
                  REGISTER NOW
                </button>
              </form>

              <div className="text-center pt-2 border-t border-slate-100">
                <button onClick={() => setIsRegisterMode(false)} className="text-[11px] text-slate-600 font-bold hover:underline tracking-wide">
                  ALREADY A MEMBER? LOG IN
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}