// src/components/DashboardShell.tsx
"use client";
import React from 'react';
import { Home, Grid, Calendar, Compass, MessageSquare, User } from 'lucide-react';

interface ShellProps {
  children: React.ReactNode;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function DashboardShell({ children, activeTab, setActiveTab }: ShellProps) {
  const tabs = [
    { id: 'home', label: 'HOME', icon: Home },
    { id: 'work', label: 'WORK', icon: Grid },
    { id: 'book', label: 'BOOK', icon: Calendar },
    { id: 'track', label: 'TRACK', icon: Compass },
    { id: 'chat', label: 'CHAT', icon: MessageSquare },
    { id: 'settings', label: 'PROFILE', icon: User },
  ];

  return (
    <div className="w-full max-w-md mx-auto min-h-[844px] bg-slate-50 shadow-2xl relative flex flex-col justify-between overflow-hidden border border-slate-200">
      
      {/* Upper Context Feed Area */}
      <div className="flex-1 overflow-y-auto bg-slate-50">
        {children}
      </div>

      {/* Persistent Bottom High-Fidelity Blueprint Nav Matrix */}
      <div className="bg-[#0070c0] border-t border-blue-600/30 px-2 py-2 flex justify-around items-center z-40">
        {tabs.map((tab) => {
          const IconComponent = tab.icon;
          const isSelected = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col items-center justify-center transition-all px-2 py-1 rounded-xl ${
                isSelected ? 'text-white scale-105 font-black' : 'text-blue-100/70 hover:text-white'
              }`}
            >
              <IconComponent className={`w-4 h-4 ${isSelected ? 'stroke-[2.5]' : 'stroke-[1.8]'}`} />
              <span className="text-[8px] tracking-wider mt-1 uppercase font-bold">{tab.label}</span>
            </button>
          );
        })}
      </div>

    </div>
  );
}