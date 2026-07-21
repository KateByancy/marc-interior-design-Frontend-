"use client";
import React from 'react';
import { Calendar, ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function SchedulesPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col animate-fadeIn">
      
      {/* Top Navigation Bar */}
      <header className="bg-[#0070c0] text-white px-6 py-4 shadow-md flex items-center justify-between sticky top-0 z-20">
        <div className="flex items-center space-x-3">
          <button 
            onClick={() => router.push('home')}
            className="p-2 hover:bg-white/10 rounded-xl transition cursor-pointer border-none bg-transparent text-white flex items-center justify-center"
            title="Go to Home"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-lg md:text-xl font-serif font-bold tracking-tight">Schedules</h1>
        </div>
        
        <div className="text-xs font-medium text-blue-100 hidden sm:block">
          Client Dashboard &bull; Appointments
        </div>
      </header>

      {/* Main Container / Content Area */}
      <main className="flex-1 max-w-5xl w-full mx-auto p-4 sm:p-6 md:p-8 space-y-6">
        
        {/* Section Title Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div>
            <h2 className="text-xl font-serif font-black text-slate-800 tracking-tight">Your Scheduled Projects</h2>
            <p className="text-xs text-slate-500 font-medium">View and track all upcoming service and design appointments.</p>
          </div>
        </div>

        {/* Schedules Grid / List Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Schedule Card Item */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md transition space-y-4 relative flex flex-col justify-between">
            
            <div className="space-y-3">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-base font-serif font-bold text-slate-900 tracking-tight">Living Room</h3>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">April 24th, 2026</p>
                </div>
                <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 bg-emerald-50 text-emerald-600 rounded-full border border-emerald-100 font-sans">
                  CONFIRMED
                </span>
              </div>

              <p className="text-xs text-slate-600 font-serif italic bg-slate-50 p-3 rounded-xl border border-slate-100">
                &ldquo;It is small&rdquo;
              </p>
            </div>

            {/* Date Selector / Badge Box */}
            <div className="flex items-center space-x-2.5 px-4 py-3 bg-blue-50/50 border border-blue-100 rounded-xl text-xs font-serif font-medium text-blue-900 mt-2">
              <Calendar className="w-4 h-4 text-[#0070c0] flex-shrink-0" />
              <span>SCHEDULED: Apr 24, 2026</span>
            </div>

          </div>

        </div>

      </main>

    </div>
  );
}