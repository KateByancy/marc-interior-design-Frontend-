// src/components/Home.tsx
"use client";
import React, { useState, useEffect } from 'react';
import { Calculator, CreditCard, CalendarDays } from 'lucide-react';

export default function Home() {
  const [area, setArea] = useState<number>(0);
  const [style, setStyle] = useState<string>('Modern');
  const [complexity, setComplexity] = useState<string>('Standard');
  const [estimate, setEstimate] = useState<number>(0);

  useEffect(() => {
    if (area <= 0) {
      setEstimate(0);
      return;
    }
    let basePricePerSqm = 2500;
    if (style === 'Luxury') basePricePerSqm += 1500;
    if (complexity === 'Premium') basePricePerSqm += 1000;
    
    setEstimate(area * basePricePerSqm);
  }, [area, style, complexity]);

  return (
    <div className="p-4 space-y-4 animate-fadeIn">
      {/* Estimate Calculator Box */}
      <div className="bg-[#1a2138] text-white rounded-2xl p-4 shadow-xl">
        <div className="flex items-center space-x-2 text-xs text-teal-400 font-bold tracking-wider mb-3">
          <Calculator className="w-4 h-4" />
          <span>ESTIMATE TOOL</span>
        </div>
        <h3 className="text-sm font-medium mb-4">Quick Quote Calculator</h3>
        
        <div className="space-y-3">
          <div>
            <label className="text-[10px] tracking-wide text-slate-400 block mb-1">TOTAL FLOOR AREA (SQM)</label>
            <input 
              type="number" 
              value={area || ''} 
              onChange={(e) => setArea(Number(e.target.value))}
              placeholder="0"
              className="w-full bg-[#2a3454] border border-slate-600 rounded-lg px-3 py-2 text-sm text-white focus:outline-none"
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-[10px] tracking-wide text-slate-400 block mb-1">DESIGN STYLE</label>
              <select value={style} onChange={(e) => setStyle(e.target.value)} className="w-full bg-[#2a3454] border border-slate-600 rounded-lg px-2 py-2 text-sm text-white focus:outline-none">
                <option value="Modern">Modern</option>
                <option value="Luxury">Luxury</option>
              </select>
            </div>
            <div>
              <label className="text-[10px] tracking-wide text-slate-400 block mb-1">COMPLEXITY</label>
              <select value={complexity} onChange={(e) => setComplexity(e.target.value)} className="w-full bg-[#2a3454] border border-slate-600 rounded-lg px-2 py-2 text-sm text-white focus:outline-none">
                <option value="Standard">Standard</option>
                <option value="Premium">Premium</option>
              </select>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-700/60 mt-4 pt-3">
          <span className="text-[10px] tracking-wide text-slate-400 block">ESTIMATED RANGE</span>
          <span className="text-xl font-bold text-blue-400">₱ {estimate.toLocaleString()}</span>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl p-6 text-center shadow-sm">
        <p className="text-sm font-medium text-slate-700 mb-3">No active projects yet. Let's start something beautiful.</p>
        <button className="bg-slate-900 text-white font-bold text-xs tracking-widest px-6 py-2.5 rounded-lg">BOOK NOW!</button>
      </div>
    </div>
  );
}