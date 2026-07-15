import React from 'react';
import { MapPin, Navigation } from 'lucide-react';

export default function MapTracking() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold font-serif text-slate-900 tracking-tight">Site Logistics & Mapping</h2>
        <p className="text-xs text-slate-500 font-medium mt-0.5">Geospatial positioning of active on-site construction deployments.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-3xl border border-slate-100 p-4 shadow-sm h-[420px] relative overflow-hidden">
          <div className="w-full h-full bg-slate-100 rounded-2xl border border-slate-200 flex items-center justify-center relative bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px]">
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <div className="w-8 h-8 bg-rose-500 rounded-full flex items-center justify-center text-white shadow-lg animate-bounce"><MapPin className="w-4 h-4" /></div>
              <span className="bg-[#102243] text-white text-[9px] font-bold tracking-wider uppercase px-2 py-0.5 rounded shadow mt-1 whitespace-nowrap">Site Alpha Remodel</span>
            </div>
            <span className="text-xs font-semibold text-slate-400">[Interactive Mapping Surface Engine Module]</span>
          </div>
        </div>

        <div className="bg-white rounded-3xl border border-slate-100 p-6 shadow-sm space-y-4">
          <h3 className="text-sm font-bold tracking-wider uppercase text-slate-900">Deployment Dispatch</h3>
          <div className="space-y-3">
            {[1, 2].map((i) => (
              <div key={i} className="p-3.5 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-between">
                <div className="space-y-0.5">
                  <span className="text-xs font-bold text-slate-800">Transit Vehicle Cluster #{i}</span>
                  <p className="text-[10px] text-slate-400 font-medium">En-route to client installation site</p>
                </div>
                <div className="w-8 h-8 bg-[#0070c0]/10 rounded-xl flex items-center justify-center text-[#0070c0]"><Navigation className="w-4 h-4 rotate-45" /></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}