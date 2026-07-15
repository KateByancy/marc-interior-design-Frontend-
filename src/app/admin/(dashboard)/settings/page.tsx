import React from 'react';
import { Save, Shield, Sliders, Bell } from 'lucide-react';

export default function SettingsPanel() {
  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h2 className="text-2xl font-bold font-serif text-slate-900 tracking-tight">System Settings</h2>
        <p className="text-xs text-slate-500 font-medium mt-0.5">Configure fundamental rulesets, permissions, and system variables.</p>
      </div>

      <div className="bg-white rounded-3xl border border-slate-100 shadow-sm divide-y divide-slate-100">
        <div className="p-6 space-y-4">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center"><Sliders className="w-4 h-4 mr-2 text-[#0070c0]" /> Platform Engine Configuration</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-[11px] font-bold text-slate-600 uppercase">Application Branding Scope</label>
              <input type="text" defaultValue="Marc Interior Design System" className="w-full text-xs px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-1 focus:ring-[#0070c0] font-medium text-slate-800" />
            </div>
            <div className="space-y-1">
              <label className="text-[11px] font-bold text-slate-600 uppercase">System Operational Mode</label>
              <select className="w-full text-xs px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-1 focus:ring-[#0070c0] font-medium bg-white text-slate-800">
                <option>Active Staging Mode</option>
                <option>Production Closed Restrictive</option>
              </select>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-4">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center"><Shield className="w-4 h-4 mr-2 text-emerald-600" /> Administrative Identity Protection</h3>
          <div className="flex items-center justify-between p-3.5 bg-slate-50 border border-slate-100 rounded-2xl text-xs">
            <div>
              <p className="font-bold text-slate-800">Two-Factor Security Authentication</p>
              <span className="text-[10px] text-slate-400 font-medium">Require physical device keys on admin sign-in routes.</span>
            </div>
            <div className="w-9 h-5 bg-[#0070c0] rounded-full p-0.5 cursor-pointer flex justify-end transition"><div className="w-4 h-4 bg-white rounded-full shadow-sm" /></div>
          </div>
        </div>

        <div className="p-4 bg-slate-50 flex justify-end">
          <button className="flex items-center space-x-2 px-5 py-2.5 bg-[#102243] text-white rounded-xl text-xs font-bold tracking-wider uppercase shadow hover:bg-[#0070c0] transition-all">
            <Save className="w-4 h-4" />
            <span>Save System Variables</span>
          </button>
        </div>
      </div>
    </div>
  );
}