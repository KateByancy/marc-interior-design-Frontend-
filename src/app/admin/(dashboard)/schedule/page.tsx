import React from 'react';
import { Calendar as CalendarIcon, Clock, Plus } from 'lucide-react';

export default function ScheduleManagement() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold font-serif text-slate-900 tracking-tight">Calendar & Planning</h2>
          <p className="text-xs text-slate-500 font-medium mt-0.5">Control timeline windows for user consultations and interior site checkups.</p>
        </div>
        <button className="flex items-center space-x-2 px-4 py-2 bg-[#0070c0] text-white rounded-xl text-xs font-bold tracking-wider uppercase shadow-md hover:bg-[#102243] transition-all">
          <Plus className="w-4 h-4" />
          <span>New Timeblock</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-3xl border border-slate-100 p-6 shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
            <h3 className="text-sm font-bold uppercase text-slate-800 font-serif">July 2026</h3>
            <span className="text-xs font-bold text-[#0070c0]">[Month Selection Control Toggle]</span>
          </div>
          <div className="h-64 bg-slate-50 rounded-2xl border border-dashed border-slate-200 flex items-center justify-center text-xs font-semibold text-slate-400">
            [Tactile High-Fidelity Monthly Calendar Grid Component Layout]
          </div>
        </div>

        <div className="bg-white rounded-3xl border border-slate-100 p-6 shadow-sm space-y-4">
          <h3 className="text-sm font-bold tracking-wider uppercase text-slate-900">Today's Timeline Blocks</h3>
          <div className="space-y-3">
            <div className="p-3 bg-blue-50/50 border border-blue-100 rounded-2xl text-xs space-y-1">
              <div className="flex items-center space-x-1.5 font-bold text-[#0070c0]">
                <Clock className="w-3.5 h-3.5" /> <span>09:00 AM - 11:00 AM</span>
              </div>
              <p className="font-bold text-slate-800">Initial Blueprint Layout Assessment</p>
              <span className="text-[10px] text-slate-400 block">Location: Studio Office Suite B</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}