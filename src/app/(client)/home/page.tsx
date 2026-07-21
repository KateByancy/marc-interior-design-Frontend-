"use client";
import React, { useState, useEffect } from 'react';
import { User, Calculator, ArrowRight, Wallet, CalendarRange, X, Check } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface HomeProps {
  onOpenSettings?: () => void;
  onOpenPayments?: () => void;
}

export default function Home({ 
  onOpenSettings = () => console.log('Settings opened'), 
  onOpenPayments = () => console.log('Payments opened') 
}: HomeProps) {
  const router = useRouter();
  const [area, setArea] = useState<number>(0);
  const [style, setStyle] = useState<string>('Modern');
  const [complexity, setComplexity] = useState<string>('Standard');
  const [estimate, setEstimate] = useState<{ min: number; max: number }>({ min: 0, max: 0 });

  // --- BOOKING MODAL STATE ENGINE ---
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [bookingStep, setBookingStep] = useState<'form' | 'success'>('form');
  const [serviceType, setServiceType] = useState<string>('Living Room Makeover');
  const [projectDescription, setProjectDescription] = useState<string>('I want modern design');

  // Calculation Logic Engine
  useEffect(() => {
    let baseRate = 2500; 

    if (style === 'Luxury') baseRate = 4500;
    if (style === 'Minimalist') baseRate = 3000;

    const complexityMultiplier = complexity === 'Premium' ? 1.4 : 1.0;

    const calculatedBase = area * baseRate * complexityMultiplier;
    const minEstimate = Math.round(calculatedBase * 0.9);
    const maxEstimate = Math.round(calculatedBase * 1.1);

    if (isNaN(area) || area <= 0) {
      setEstimate({ min: 0, max: 0 });
    } else {
      setEstimate({ min: minEstimate, max: maxEstimate });
    }
  }, [area, style, complexity]);

  const handleOpenBooking = () => {
    setBookingStep('form');
    setIsBookingOpen(true);
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingStep('success');
  };

  return (
    <div className="space-y-6 animate-fadeIn relative">
      
      {/* DESKTOP HEADER BAR */}
      <div className="bg-[#0070c0] text-white rounded-2xl p-6 shadow-md flex justify-between items-center">
        <div>
          <h2 className="text-xl font-serif font-black tracking-wide">Doe, John</h2>
          <p className="text-xs text-blue-100 font-light mt-0.5">Your dream home is in progress.</p>
        </div>
        
        <button 
          onClick={onOpenSettings}
          className="flex items-center space-x-2 bg-white/10 hover:bg-white/25 backdrop-blur-sm border border-white/20 px-4 py-2.5 rounded-xl text-xs font-bold tracking-wider transition shadow-sm group cursor-pointer border-none"
        >
          <User className="w-4 h-4 text-white group-hover:scale-110 transition" />
          <span>ACCOUNT PROFILE</span>
        </button>
      </div>

      {/* DASHBOARD GRID CONTENT */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* LEFT COLUMN: FIXED ESTIMATE TOOL */}
        <div className="lg:col-span-2 bg-[#141b2d] text-white rounded-2xl p-6 shadow-xl border border-slate-800 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-xs font-bold tracking-widest text-blue-400">
              <Calculator className="w-4 h-4" />
              <span>ESTIMATE TOOL</span>
            </div>
            <div>
              <h3 className="text-sm font-serif tracking-wide text-slate-200">Quick Quote Calculator</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div>
                <label className="text-[9px] tracking-widest font-black text-slate-400 block mb-1.5 uppercase">Total Floor Area (Sqm)</label>
                <input 
                  type="number" 
                  value={area || ''} 
                  onChange={(e) => setArea(parseFloat(e.target.value))}
                  placeholder="0"
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-blue-500 text-white font-bold" 
                />
              </div>
              <div>
                <label className="text-[9px] tracking-widest font-black text-slate-400 block mb-1.5 uppercase">Design Style</label>
                <select value={style} onChange={(e) => setStyle(e.target.value)} className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-blue-500 text-white font-bold">
                  <option value="Modern">Modern</option>
                  <option value="Luxury">Luxury</option>
                  <option value="Minimalist">Minimalist</option>
                </select>
              </div>
              <div>
                <label className="text-[9px] tracking-widest font-black text-slate-400 block mb-1.5 uppercase">Complexity</label>
                <select value={complexity} onChange={(e) => setComplexity(e.target.value)} className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-blue-500 text-white font-bold">
                  <option value="Standard">Standard</option>
                  <option value="Premium">Premium</option>
                </select>
              </div>
            </div>
          </div>

          {/* Pricing Results Output Bar */}
          <div className="border-t border-slate-800 pt-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
            <div>
              <p className="text-[9px] tracking-widest font-black text-slate-400 uppercase">Estimated Range</p>
              <p className="text-2xl font-serif font-black text-blue-400 tracking-wide mt-0.5">
                ₱{estimate.min.toLocaleString()} - ₱{estimate.max.toLocaleString()}
              </p>
            </div>
            <p className="text-[10px] text-slate-500 italic leading-relaxed max-w-xs">
              This is a preliminary appraisal and subject to technical site assessment parameters.
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN MODULES */}
        <div className="space-y-4 flex flex-col justify-between">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 text-center shadow-sm flex flex-col justify-center items-center space-y-3 flex-1">
            <p className="text-xs font-serif font-medium text-slate-700 leading-relaxed">
              No active projects yet. Let's start something beautiful.
            </p>
            <button 
              onClick={handleOpenBooking}
              className="bg-slate-900 hover:bg-slate-800 text-white font-black text-[10px] tracking-widest px-6 py-2.5 rounded-xl transition shadow flex items-center space-x-2 cursor-pointer border-none"
            >
              <span>BOOK NOW!</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div 
              onClick={onOpenPayments} 
              className="bg-white border border-slate-200 rounded-2xl p-4 text-center shadow-sm hover:bg-slate-50 transition cursor-pointer flex flex-col items-center justify-center space-y-2 group"
            >
              <div className="p-2.5 bg-slate-50 rounded-xl group-hover:bg-blue-50 transition">
                <Wallet className="w-5 h-5 text-slate-700 group-hover:text-blue-600 transition" />
              </div>
              <div>
                <h4 className="text-xs font-black tracking-wider text-slate-800 uppercase">Payments</h4>
                <p className="text-[9px] text-slate-400 font-bold mt-0.5">Submit Ref. Num</p>
              </div>
            </div>

            <div 
              onClick={() => router.push('/schedules')}
              className="bg-white border border-slate-200 rounded-2xl p-4 text-center shadow-sm hover:bg-slate-50 transition cursor-pointer flex flex-col items-center justify-center space-y-2 group"
            >
              <div className="p-2.5 bg-slate-50 rounded-xl group-hover:bg-blue-50 transition">
                <CalendarRange className="w-5 h-5 text-slate-700 group-hover:text-blue-600 transition" />
              </div>
              <div>
                <h4 className="text-xs font-black tracking-wider text-slate-800 uppercase">Schedules</h4>
                <p className="text-[9px] text-slate-400 font-bold mt-0.5">View Calendar</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* --- BOOK NOW POPUP MODAL --- */}
      {isBookingOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#1a1f2c] text-white rounded-3xl p-6 sm:p-8 max-w-2xl w-full shadow-2xl border border-slate-800 relative animate-fadeIn">
            
            <button 
              onClick={() => setIsBookingOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition cursor-pointer border-none"
            >
              <X className="w-5 h-5" />
            </button>

            {bookingStep === 'form' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                
                <div className="space-y-6">
                  <h3 className="text-xs font-black tracking-widest text-slate-400 uppercase font-sans">
                    Book Now Form
                  </h3>

                  <form onSubmit={handleBookingSubmit} className="space-y-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black uppercase tracking-wider text-slate-300 block">
                        Service Type
                      </label>
                      <input 
                        type="text" 
                        value={serviceType}
                        onChange={(e) => setServiceType(e.target.value)}
                        required
                        className="w-full bg-[#121620] border border-slate-700 rounded-xl px-4 py-3 text-xs text-slate-200 font-medium focus:outline-none focus:border-blue-500 shadow-inner"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black uppercase tracking-wider text-slate-300 block">
                        Project Description
                      </label>
                      <textarea 
                        rows={4}
                        value={projectDescription}
                        onChange={(e) => setProjectDescription(e.target.value)}
                        required
                        className="w-full bg-[#121620] border border-slate-700 rounded-xl p-4 text-xs text-slate-200 font-medium focus:outline-none focus:border-blue-500 shadow-inner resize-none"
                      />
                    </div>

                    <button 
                      type="submit"
                      className="w-full py-3.5 bg-[#141b2f] hover:bg-[#1d2642] text-white font-black text-xs uppercase tracking-wider rounded-xl transition shadow-md border border-slate-700 cursor-pointer"
                    >
                      Submit Booking
                    </button>
                  </form>
                </div>

                <div className="hidden md:flex flex-col items-center justify-center p-8 bg-[#121620] rounded-2xl border border-slate-800 text-center space-y-3">
                  <span className="text-xs font-serif text-slate-400 italic">
                    Ready to transform your space? Fill out the brief details and our design team will review your request immediately.
                  </span>
                </div>

              </div>
            ) : (
              <div className="py-12 px-6 text-center space-y-6">
                <h3 className="text-xs font-black tracking-widest text-slate-400 uppercase font-sans">
                  Submit Booking Done!
                </h3>

                <div className="bg-[#f0f6fc] text-slate-900 rounded-3xl p-10 max-w-sm mx-auto shadow-xl flex flex-col items-center justify-center space-y-6">
                  <div className="w-24 h-24 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/30 text-white">
                    <Check className="w-12 h-12 stroke-[3]" />
                  </div>
                  <h4 className="text-2xl font-serif font-black tracking-tight text-slate-800">
                    Done Book!
                  </h4>
                </div>

                <button 
                  onClick={() => setIsBookingOpen(false)}
                  className="px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold rounded-xl transition cursor-pointer border-none"
                >
                  Close Window
                </button>
              </div>
            )}

          </div>
        </div>
      )}

    </div>
  );
}