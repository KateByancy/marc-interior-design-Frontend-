"use client";
import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Home, Grid, Calendar, Compass, MessageSquare } from 'lucide-react';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  const tabs = [
    { id: 'home', label: 'HOME', icon: Home, route: '/client/home' },
    { id: 'work', label: 'WORK', icon: Grid, route: '/client/portfolio' },
    { id: 'book', label: 'BOOK', icon: Calendar, route: '/client/book' },
    { id: 'track', label: 'TRACK', icon: Compass, route: '/client/track' },
    { id: 'chat', label: 'CHAT', icon: MessageSquare, route: '/client/chat' },
    { id: 'schedules', label: 'SCHEDULES', icon: Calendar, route: '/client/schedules' },
    { id: 'payments', label: 'PAYMENTS', icon: Home, route: '/client/payments' },
  ];

  return (
    <div className="flex min-h-screen bg-slate-100">
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-slate-900 text-white hidden md:flex flex-col p-6 space-y-6">
        <h2 className="text-sm font-black tracking-widest text-blue-400">CLIENT PORTAL</h2>
        <nav className="space-y-2 flex-1">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = pathname === tab.route;
            return (
              <button
                key={tab.id}
                onClick={() => router.push(tab.route)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-xs font-bold tracking-wider transition cursor-pointer border-none ${
                  isActive ? 'bg-[#0070c0] text-white' : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </nav>
      </aside>

      {/* Main Page Content Area */}
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}