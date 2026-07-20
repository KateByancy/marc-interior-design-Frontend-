"use client";
import React, { useState, useEffect } from 'react';
import { Home, Grid, Calendar, Compass, MessageSquare } from 'lucide-react';

interface ShellProps {
  children: React.ReactNode;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  userName?: string; // Added to pass down the authenticated user context dynamically
}

export default function DashboardShell({ children, activeTab, setActiveTab, userName = 'Doe, John' }: ShellProps) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const tabs = [
    { id: 'home', label: 'HOME', icon: Home, desktopLabel: 'Dashboard Home' },
    { id: 'work', label: 'WORK', icon: Grid, desktopLabel: 'Inspirations Portfolio' },
    { id: 'book', label: 'BOOK', icon: Calendar, desktopLabel: 'Book Consultations' },
    { id: 'track', label: 'TRACK', icon: Compass, desktopLabel: 'Live Build Tracking' },
    { id: 'chat', label: 'CHAT', icon: MessageSquare, desktopLabel: 'Design Concierge' },
  ];

  useEffect(() => {
    setIsCollapsed(true);
  }, []);

  return (
    <div className="w-full min-h-screen bg-slate-100 flex flex-col md:flex-row font-sans text-slate-800">
      
      {/* 1. DESKTOP SIDEBAR NAVIGATION */}
      <aside 
        onMouseEnter={() => setIsCollapsed(false)}
        onMouseLeave={() => setIsCollapsed(true)}
        className={`hidden md:flex bg-[#0070c0] text-white flex-col justify-between p-4 shadow-xl shrink-0 z-40 transition-all duration-300 ease-in-out ${
          isCollapsed ? 'w-20' : 'w-64'
        }`}
      >
        <div className="space-y-8">
          {/* Brand Identity Cluster */}
          <div className={`flex items-center space-x-3 py-4 border-b border-blue-600/30 transition-all duration-200 ${isCollapsed ? 'justify-center px-0' : 'px-2'}`}>
            <div className="w-9 h-9 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center font-serif font-black border border-white/20 shrink-0">
              M
            </div>
            {!isCollapsed && (
              <div className="animate-in fade-in zoom-in-95 duration-200 object-contain overflow-hidden whitespace-nowrap">
                <h1 className="text-sm font-serif font-black tracking-widest">MARC CUSTOM</h1>
                <p className="text-[9px] uppercase tracking-wider text-blue-200">Interior Systems</p>
              </div>
            )}
          </div>

          {/* Navigation Action Hub */}
          <nav className="space-y-1">
            {tabs.map((tab) => {
              const IconComponent = tab.icon;
              const isSelected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  title={isCollapsed ? tab.desktopLabel : undefined}
                  className={`w-full flex items-center rounded-xl text-xs font-bold tracking-wide transition-all duration-200 ${
                    isCollapsed ? 'justify-center p-3.5' : 'space-x-3 px-4 py-3'
                  } ${
                    isSelected 
                      ? 'bg-white text-[#0070c0] shadow-md font-black scale-[1.02]' 
                      : 'text-blue-100/80 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <IconComponent className={`w-4 h-4 shrink-0 ${isSelected ? 'stroke-[2.5]' : 'stroke-[1.8]'}`} />
                  {!isCollapsed && (
                    <span className="animate-in fade-in duration-200 whitespace-nowrap">{tab.desktopLabel}</span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Brand Profile & System Footer Node */}
        <div className={`py-3 border-t border-blue-600/30 transition-all duration-200 flex flex-col items-center ${isCollapsed ? 'px-0' : 'px-2 items-start'}`}>
          {!isCollapsed && (
            <div className="mb-2 animate-in fade-in duration-200 text-left w-full px-1">
              <p className="text-[9px] uppercase text-blue-200 tracking-wider font-bold">Logged In As</p>
              <p className="text-xs font-bold text-white truncate max-w-[180px]">{userName}</p>
            </div>
          )}
          <p className="text-[9px] text-blue-200/60 tracking-wider font-mono w-full text-center mt-1">
            {isCollapsed ? '©26' : '© 2026 MARC CUSTOM DESIGNS'}
          </p>
        </div>
      </aside>

      {/* 2. MAIN CONTENT AREA */}
      <main className="flex-1 overflow-y-auto bg-slate-50 relative p-4 md:p-8 pb-24 md:pb-8 w-full max-w-7xl mx-auto">
        {/* Pass down user props context to components mounted in children view */}
        {React.Children.map(children, child => {
          if (React.isValidElement(child)) {
            // This ensures children components (like Book) receive the real profile name automatically
            return React.cloneElement(child, { userName } as any);
          }
          return child;
        })}
      </main>

      {/* 3. MOBILE ONLY: BOTTOM NAVIGATION BAR */}
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