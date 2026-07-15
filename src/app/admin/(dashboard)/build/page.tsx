import React from 'react';
import { Hammer, ChevronRight } from 'lucide-react';

export default function BuildManagement() {
  const activeBuilds = [
    { title: "Mid-Century Modern Lounge Remodel", client: "David Miller", progression: 75, status: "Fabrication Stage" },
    { title: "Minimalist Loft Concept Installation", client: "Sarah Jenkins", progression: 40, status: "Material Logistics" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold font-serif text-slate-900 tracking-tight">Design & Build Pipelines</h2>
        <p className="text-xs text-slate-500 font-medium mt-0.5">Track tactile active constructions and manufacturing timelines.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {activeBuilds.map((build, i) => (
          <div key={i} className="bg-white rounded-3xl border border-slate-100 p-6 shadow-sm space-y-5">
            <div className="flex justify-between items-start">
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-[#0070c0] tracking-wider uppercase bg-blue-50 px-2 py-0.5 rounded">Active Build</span>
                <h3 className="text-base font-bold text-slate-900 tracking-tight font-serif mt-1">{build.title}</h3>
                <p className="text-xs text-slate-400 font-medium">Assigned Lead Client: {build.client}</p>
              </div>
              <div className="w-9 h-9 bg-slate-50 rounded-xl flex items-center justify-center border border-slate-100 text-slate-600"><Hammer className="w-4 h-4" /></div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold text-slate-600">
                <span>Phase Progress ({build.status})</span>
                <span>{build.progression}%</span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div className="bg-[#0070c0] h-full transition-all duration-500 rounded-full" style={{ width: `${build.progression}%` }} />
              </div>
            </div>

            <div className="pt-2 border-t border-slate-50 flex justify-between items-center text-xs font-bold">
              <span className="text-slate-400">Target Delivery: August 2026</span>
              <button className="flex items-center text-[#0070c0] hover:text-[#102243] transition">Update State <ChevronRight className="w-4 h-4 ml-0.5" /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}