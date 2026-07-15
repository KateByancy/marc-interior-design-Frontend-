"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Home, ChevronLeft, Loader2, ShieldCheck, Layers } from 'lucide-react';

interface RegisterViewProps {
  onRegisterSuccess?: () => void;
  onBackToLogin?: () => void;
}

export default function ClientRegisterPage({ onRegisterSuccess, onBackToLogin }: RegisterViewProps) {
  const router = useRouter();

  // Input States
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [projectAddress, setProjectAddress] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // UI States
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Simulated API Call
    setTimeout(() => {
      if (password.length < 6) {
        setError('Password must be at least 6 characters long.');
        setIsLoading(false);
        return;
      }

      setIsLoading(false);
      if (onRegisterSuccess) {
        onRegisterSuccess();
      } else {
        router.push('/login');
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen w-full bg-[#031525] flex justify-center items-center p-0 md:p-6 text-slate-100 font-sans">
      
      {/* Main Split Layout Container */}
      <div className="w-full h-screen md:h-auto md:max-w-5xl md:min-h-[750px] bg-[#051a30] md:rounded-[24px] overflow-hidden shadow-2xl flex flex-col md:flex-row border border-white/5 relative">
        
        {/* ================= LEFT SIDE: BRAND PANEL (Hidden on mobile) ================= */}
        <div className="hidden md:flex md:w-[45%] bg-gradient-to-b from-[#004b8d] to-[#012a52] p-10 flex-col justify-between relative border-r border-white/5">
          
          {/* Back button */}
          <div>
            <Link 
              href="/" 
              className="inline-flex items-center space-x-2 text-[10px] font-black tracking-widest text-white/80 hover:text-white uppercase transition"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Return to Main</span>
            </Link>
          </div>

          {/* Core Branding Info */}
          <div className="my-auto space-y-6">
            <div className="w-16 h-16 bg-[#031930] rounded-2xl flex items-center justify-center border border-white/10 shadow-inner">
              <Home className="w-8 h-8 text-slate-100" />
            </div>
            
            <div className="space-y-3">
              <h1 className="text-4xl font-bold font-serif tracking-wide text-white">MARC</h1>
              <p className="text-[10px] uppercase tracking-widest text-slate-200 font-bold">
                Custom Interior Design Portal
              </p>
            </div>

            <p className="text-xs text-slate-200/80 leading-relaxed max-w-xs font-light">
              Create your account to manage your custom structural requests, track real-time design timelines, and collaborate directly with our team.
            </p>
          </div>

          {/* Features Checklist */}
          <div className="space-y-3 border-t border-white/10 pt-6">
            <div className="flex items-center space-x-3 text-xs text-slate-200/90">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Secure Client Workspace</span>
            </div>
            <div className="flex items-center space-x-3 text-xs text-slate-200/90">
              <Layers className="w-4 h-4 text-sky-400" />
              <span>Interactive Concept Mapping</span>
            </div>
          </div>
        </div>

        {/* ================= RIGHT SIDE: FORM PANEL ================= */}
        <div className="flex-1 bg-[#051a30] p-6 md:p-12 flex flex-col justify-between overflow-y-auto">
          
          {/* Mobile-Only Header Utilities */}
          <div className="flex justify-between items-center w-full md:hidden pt-2 pb-6">
            <button 
              type="button"
              onClick={() => {
                if (onBackToLogin) {
                  onBackToLogin();
                } else {
                  router.push('/login');
                }
              }} 
              className="p-2 bg-white/10 hover:bg-white/15 rounded-xl transition text-white"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-[10px] opacity-40 font-mono tracking-widest">MARC DESIGN</span>
          </div>

          {/* Form Content Header */}
          <div className="space-y-1.5 mb-6 md:mb-4">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">Create Account</h2>
            <p className="text-xs text-slate-400 font-light">Please fill out your details to sign up with us.</p>
          </div>

          {/* Scrollable Form Inputs */}
          <form onSubmit={handleRegister} className="space-y-4 flex-1 flex flex-col justify-center">
            {error && (
              <div className="bg-red-500/10 border border-red-500/30 text-red-400 text-xs p-3 rounded-xl text-center font-medium">
                {error}
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Full Name */}
              <div className="space-y-1.5">
                <label className="text-[9px] font-black text-slate-400 uppercase tracking-wider block px-1">Full Name</label>
                <input 
                  type="text" 
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                  placeholder="John Doe Brown" 
                  className="w-full bg-[#09223c] border border-white/5 text-white placeholder-slate-500 rounded-xl px-4 py-3 text-xs outline-none focus:border-sky-500/50 focus:bg-[#0b2848] transition font-medium" 
                />
              </div>

              {/* Phone Number */}
              <div className="space-y-1.5">
                <label className="text-[9px] font-black text-slate-400 uppercase tracking-wider block px-1">Phone Number</label>
                <input 
                  type="tel" 
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                  placeholder="(09) 000 0000" 
                  className="w-full bg-[#09223c] border border-white/5 text-white placeholder-slate-500 rounded-xl px-4 py-3 text-xs outline-none focus:border-sky-500/50 focus:bg-[#0b2848] transition font-medium" 
                />
              </div>
            </div>

            {/* Project Address */}
            <div className="space-y-1.5">
              <label className="text-[9px] font-black text-slate-400 uppercase tracking-wider block px-1">Project Address</label>
              <input 
                type="text" 
                value={projectAddress}
                onChange={(e) => setProjectAddress(e.target.value)}
                required
                placeholder="Barangay, City, Province" 
                className="w-full bg-[#09223c] border border-white/5 text-white placeholder-slate-500 rounded-xl px-4 py-3 text-xs outline-none focus:border-sky-500/50 focus:bg-[#0b2848] transition font-medium" 
              />
            </div>

            {/* Email Address */}
            <div className="space-y-1.5">
              <label className="text-[9px] font-black text-slate-400 uppercase tracking-wider block px-1">Email Address</label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="john.doe@example.com" 
                className="w-full bg-[#09223c] border border-white/5 text-white placeholder-slate-500 rounded-xl px-4 py-3 text-xs outline-none focus:border-sky-500/50 focus:bg-[#0b2848] transition font-medium" 
              />
            </div>

            {/* Password */}
            <div className="space-y-1.5">
              <label className="text-[9px] font-black text-slate-400 uppercase tracking-wider block px-1">Password</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="••••••••" 
                className="w-full bg-[#09223c] border border-white/5 text-white placeholder-slate-500 rounded-xl px-4 py-3 text-xs outline-none focus:border-sky-500/50 focus:bg-[#0b2848] transition tracking-widest" 
              />
            </div>

            {/* Register Button */}
            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full bg-[#102542] hover:bg-[#16335a] active:bg-[#0d1d33] disabled:opacity-75 text-white font-bold text-xs py-3.5 rounded-xl transition uppercase tracking-widest shadow-lg mt-2 flex items-center justify-center space-x-2 border border-white/10"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-white" />
                  <span>Creating Account...</span>
                </>
              ) : (
                <span>Register Now</span>
              )}
            </button>
          </form>

          {/* Bottom Third-Party Credentials & Navigation */}
          <div className="w-full space-y-4 mt-6">
            <div className="flex items-center justify-center space-x-2 text-[8px] text-slate-400 uppercase tracking-wider">
              <div className="h-px bg-white/5 flex-1"></div>
              <span>Or continue with</span>
              <div className="h-px bg-white/5 flex-1"></div>
            </div>

            {/* Google Authentication Button */}
            <button 
              type="button" 
              className="w-full bg-white text-slate-800 hover:bg-slate-100 font-bold text-xs py-3 rounded-xl transition flex items-center justify-center space-x-2.5 shadow-sm"
            >
              <img src="https://www.google.com/favicon.ico" alt="Google" className="w-4 h-4" />
              <span>Continue with Google</span>
            </button>

            {/* Redirection Link */}
            <div className="text-center pt-2">
              <Link 
                href="/login" 
                className="text-[9px] font-black tracking-widest text-slate-300 hover:text-white hover:underline uppercase transition"
              >
                Already a member? Log In
              </Link>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}