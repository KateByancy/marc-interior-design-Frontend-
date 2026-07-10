// src/components/Settings.tsx
"use client";
import React, { useState } from 'react';
import { LogOut, ShieldAlert, Trash2, Camera } from 'lucide-react';

interface SettingsProps {
  onLogout: () => void;
}

export default function Settings({ onLogout }: SettingsProps) {
  const [name, setName] = useState('John Doe');
  const [address, setAddress] = useState('123 Modern Ave, Metro City');
  const [phone, setPhone] = useState('0917 000 0000');

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Changes saved successfully!');
  };

  return (
    <div className="p-4 space-y-6 animate-fadeIn pb-24">
      {/* Header Context Bar */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-sm font-serif font-black text-slate-800 tracking-wide">Profile Settings</h2>
          <p className="text-[10px] text-slate-400 uppercase tracking-wider font-bold">Personal Identity</p>
        </div>
        <button 
          onClick={onLogout}
          className="p-2 border border-slate-200 rounded-xl hover:bg-slate-50 transition text-slate-500 shadow-sm"
          title="Sign Out"
        >
          <LogOut className="w-4 h-4" />
        </button>
      </div>

      {/* Avatar Badge Layout */}
      <div className="flex flex-col items-center text-center space-y-2">
        <div className="relative">
          <div className="w-20 h-20 bg-white border border-slate-200 rounded-full shadow-md flex items-center justify-center text-2xl font-serif font-bold text-slate-700">
            {name.charAt(0)}
          </div>
          <button className="absolute bottom-0 right-0 p-1.5 bg-slate-900 text-white rounded-full border border-white shadow hover:scale-105 transition">
            <Camera className="w-3 h-3" />
          </button>
        </div>
        <div>
          <h3 className="text-sm font-serif font-black text-slate-800">{name}</h3>
          <p className="text-[9px] uppercase tracking-widest text-slate-400 font-extrabold">Client</p>
        </div>
      </div>

      {/* Input Group Card Form */}
      <form onSubmit={handleSave} className="space-y-5">
        <div className="bg-white border border-slate-150 rounded-2xl p-5 shadow-sm space-y-4">
          <div>
            <label className="text-[9px] tracking-widest font-black text-slate-400 block mb-1 uppercase">Full Name</label>
            <input 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-blue-500" 
            />
          </div>

          <div>
            <label className="text-[9px] tracking-widest font-black text-slate-400 block mb-1 uppercase">Project Address</label>
            <input 
              type="text" 
              value={address} 
              onChange={(e) => setAddress(e.target.value)}
              className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-blue-500" 
            />
          </div>

          <div>
            <label className="text-[9px] tracking-widest font-black text-slate-400 block mb-1 uppercase">Primary Contact</label>
            <input 
              type="text" 
              value={phone} 
              onChange={(e) => setPhone(e.target.value)}
              className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-blue-500" 
            />
          </div>
        </div>

        <button type="submit" className="w-full bg-[#111c3a] text-white text-xs font-bold tracking-widest py-3.5 rounded-xl shadow-md transition hover:bg-[#16254e]">
          SAVE CHANGES
        </button>
      </form>

      {/* Account Vulnerability Actions */}
      <div className="space-y-2 pt-2">
        <button className="w-full bg-white border border-slate-200 rounded-xl py-2.5 px-4 flex items-center justify-center space-x-2 text-[11px] font-bold text-slate-600 shadow-sm hover:bg-slate-50 transition">
          <ShieldAlert className="w-4 h-4 text-emerald-500" />
          <span>Two-Factor Authentication</span>
        </button>

        <button className="w-full bg-white border border-rose-100 rounded-xl py-2.5 px-4 flex items-center justify-center space-x-2 text-[11px] font-bold text-rose-600 shadow-sm hover:bg-rose-50/50 transition">
          <Trash2 className="w-4 h-4 text-rose-500" />
          <span>Delete Account</span>
        </button>
      </div>
    </div>
  );
}