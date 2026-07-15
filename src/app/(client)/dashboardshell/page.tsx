// src/components/DashboardShell.tsx
"use client";
import React from 'react';
import { Home, Grid, Calendar, Compass, MessageSquare } from 'lucide-react';

interface ShellProps {
  children: React.ReactNode;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function DashboardShell({ children, activeTab, setActiveTab }: ShellProps) {
  const tabs = [
    { id: 'home', label: 'HOME', icon: Home, desktopLabel: 'Dashboard Home' },
    { id: 'work', label: 'WORK', icon: Grid, desktopLabel: 'Inspirations Portfolio' },
    { id: 'book', label: 'BOOK', icon: Calendar, desktopLabel: 'Book Consultations' },
    { id: 'track', label: 'TRACK', icon: Compass, desktopLabel: 'Live Build Tracking' },
    { id: 'chat', label: 'CHAT', icon: MessageSquare, desktopLabel: 'Design Concierge' },
  ];

  return (
    <div className="w-full min-h-screen bg-slate-100 flex flex-col md:flex-row font-sans text-slate-800">
      
      {/* 1. DESKTOP ONLY: LEFT SIDEBAR NAVIGATION (Hidden on mobile, flex on desktop) */}
      <aside className="hidden md:flex w-64 bg-[#0070c0] text-white flex-col justify-between p-4 shadow-xl shrink-0 z-40">
        <div className="space-y-8">
          <div className="flex items-center space-x-3 px-2 py-4 border-b border-blue-600/30">
            <div className="w-9 h-9 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center font-serif font-black border border-white/20">
              M
            </div>
            <div>
              <h1 className="text-sm font-serif font-black tracking-widest">MARC CUSTOM</h1>
              <p className="text-[9px] uppercase tracking-wider text-blue-200">Interior Systems</p>
            </div>
          </div>

          <nav className="space-y-1">
            {tabs.map((tab) => {
              const IconComponent = tab.icon;
              const isSelected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-xs font-bold tracking-wide transition-all ${
                    isSelected 
                      ? 'bg-white text-[#0070c0] shadow-md font-black scale-[1.02]' 
                      : 'text-blue-100/80 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <IconComponent className={`w-4 h-4 ${isSelected ? 'stroke-[2.5]' : 'stroke-[1.8]'}`} />
                  <span>{tab.desktopLabel}</span>
                </button>
              );
            })}
          </nav>
        </div>
        <div className="px-2 py-2 border-t border-blue-600/30 text-center">
          <p className="text-[9px] text-blue-200/60 tracking-wider">© 2026 MARC CUSTOM DESIGNS</p>
        </div>
      </aside>

      {/* 2. MAIN CONTENT AREA (Scrollable, takes full space) */}
      <main className="flex-1 overflow-y-auto bg-slate-50 relative p-4 md:p-8 pb-24 md:pb-8 w-full max-w-7xl mx-auto">
        {children}
      </main>

      {/* 3. MOBILE ONLY: BOTTOM NAVIGATION BAR (Visible on mobile, hidden completely on desktop) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-[#0070c0] border-t border-blue-600/30 px-2 py-2 flex justify-around items-center z-50 shadow-lg">
        {tabs.map((tab) => {
          const IconComponent = tab.icon;
          const isSelected = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col items-center justify-center transition-all px-2 py-1 rounded-xl ${
                isSelected ? 'text-white scale-105 font-black' : 'text-blue-100/70'
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