"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Shield, Loader2, ArrowRight, Home } from 'lucide-react';
import Link from 'next/link';

export default function AdminLoginPage() {
  const router = useRouter();

  // Input States
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // UI States
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleAdminLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      // Simulated API Delay
      await new Promise((resolve) => setTimeout(resolve, 1500)); 

      // Checks for your exact admin credentials
      if (email === 'Marc@gmail.com' && password === '12345678') {
        // Redirect directly to the admin dashboard
        router.push('/admin/dashboard');
      } else {
        setError('Invalid administrator credentials. Please check your email or password.');
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#030d1a] flex justify-center items-center p-4 text-slate-100 font-sans">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-900/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Admin Login Card */}
      <div className="w-full max-w-md bg-gradient-to-b from-[#06182c] to-[#041121] rounded-[24px] overflow-hidden shadow-2xl p-8 md:p-10 border border-white/5 relative z-10">
        
        {/* Shield Icon Header */}
        <div className="flex flex-col items-center text-center mb-8 space-y-4">
          <div className="w-14 h-14 bg-[#0a203a] rounded-2xl flex items-center justify-center border border-sky-500/30 shadow-lg shadow-sky-500/5">
            <Shield className="w-7 h-7 text-sky-400" />
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-white">Admin Console</h1>
            <p className="text-[10px] uppercase tracking-widest text-sky-400/80 font-bold mt-1">
              Marc Interior Design Portal
            </p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleAdminLogin} className="space-y-5">
          {error && (
            <div className="bg-red-500/10 border border-red-500/30 text-red-400 text-xs p-3.5 rounded-xl text-center font-medium">
              {error}
            </div>
          )}

          {/* Email Address */}
          <div className="space-y-1.5">
            <label className="text-[9px] font-black text-slate-400 uppercase tracking-wider block px-1">
              Admin Email
            </label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="admin@example.com" 
              className="w-full bg-[#081b30] border border-white/5 text-white placeholder-slate-600 rounded-xl px-4 py-3.5 text-xs outline-none focus:border-sky-500/50 focus:bg-[#0b2542] transition font-medium" 
            />
          </div>

          {/* Password */}
          <div className="space-y-1.5">
            <label className="text-[9px] font-black text-slate-400 uppercase tracking-wider block px-1">
              Security Password
            </label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="••••••••" 
              className="w-full bg-[#081b30] border border-white/5 text-white placeholder-slate-600 rounded-xl px-4 py-3.5 text-xs outline-none focus:border-sky-500/50 focus:bg-[#0b2542] transition tracking-widest" 
            />
          </div>

          {/* Login Button */}
          <button 
            type="submit" 
            disabled={isLoading}
            className="w-full bg-sky-600 hover:bg-sky-500 active:bg-sky-700 disabled:opacity-75 text-white font-bold text-xs py-4 rounded-xl transition uppercase tracking-widest shadow-lg mt-4 flex items-center justify-center space-x-2 border border-sky-400/20"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-white" />
                <span>Authorizing Access...</span>
              </>
            ) : (
              <>
                <span>Secure Sign In</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        {/* Footer Navigation Utilities */}
        <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center text-[10px] text-slate-400">
          <Link href="/login" className="hover:text-white transition flex items-center space-x-1">
            <Home className="w-3 h-3" />
            <span>Client Login</span>
          </Link>
          <span className="text-[8px] opacity-40 font-mono">SECURE SSL-256</span>
        </div>

      </div>
    </div>
  );
}