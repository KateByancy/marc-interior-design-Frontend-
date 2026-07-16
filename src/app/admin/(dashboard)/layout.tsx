"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Calendar, 
  BookOpen, 
  Hammer, 
  Users, 
  Map, 
  CreditCard, 
  Settings, 
  LogOut
} from 'lucide-react';

export default function AdminDashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const navItems = [
    { label: 'Overview', path: '/admin/dashboard', icon: LayoutDashboard },
    { label: 'Schedule', path: '/admin/schedule', icon: Calendar },
    { label: 'Bookings', path: '/admin/book', icon: BookOpen },
    { label: 'Builds', path: '/admin/build', icon: Hammer },
    { label: 'Clients', path: '/admin/clients', icon: Users },
    { label: 'Map Track', path: '/admin/map', icon: Map },
    { label: 'Payments', path: '/admin/payments', icon: CreditCard },
    { label: 'Settings', path: '/admin/settings', icon: Settings },
  ];

  const checkActive = (path: string) => {
    if (path === '/admin/dashboard') return pathname === '/admin/dashboard';
    return pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 flex flex-col md:flex-row relative">
      {/* DESKTOP SIDEBAR */}
      <aside className="hidden md:flex md:w-64 bg-[#102243] text-white flex-col justify-between shrink-0 h-screen sticky top-0 border-r border-white/5">
        <div className="flex flex-col flex-1 overflow-y-auto">
          <div className="p-6 border-b border-white/15 flex items-center space-x-3">
            <div className="w-9 h-9 bg-[#0070c0] rounded-xl flex items-center justify-center font-bold text-base shadow-md">M</div>
            <div>
              <h1 className="text-sm font-bold tracking-wider uppercase font-serif">Marc Interior</h1>
              <p className="text-[10px] text-slate-400 font-semibold tracking-widest uppercase">Admin Workspace</p>
            </div>
          </div>

          <nav className="p-4 space-y-1">
            {navItems.map((item) => {
              const active = checkActive(item.path);
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-xs font-bold tracking-wider uppercase transition-all ${
                    active ? 'bg-[#0070c0] text-white shadow-md' : 'text-slate-300 hover:bg-white/5'
                  }`}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="p-4 border-t border-white/10">
          <Link href="/admin" className="flex items-center space-x-3 px-4 py-3 rounded-xl text-xs font-bold tracking-wider uppercase text-rose-400 hover:bg-rose-500/10 transition-all">
            <LogOut className="w-4 h-4" />
            <span>Exit Session</span>
          </Link>
        </div>
      </aside>

      {/* INTERACTIVE WORK AREA */}
      <main className="flex-1 overflow-y-auto p-4 md:p-8 pb-20 md:pb-8">
        {children}
      </main>

      {/* MOBILE BOTTOM NAV BAR BAR */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-[#0070c0] border-t border-white/15 flex justify-around items-center px-1 z-40 shadow-lg">
        {navItems.slice(0, 5).map((item) => {
          const active = checkActive(item.path);
          const Icon = item.icon;
          return (
            <Link
              key={item.path}
              href={item.path}
              className={`flex flex-col items-center justify-center flex-1 h-12 rounded-xl transition-all max-w-[64px] ${
                active ? 'bg-white text-[#0070c0] scale-105 font-bold shadow-sm' : 'text-white/80'
              }`}
            >
              <Icon className="w-4 h-4 mb-0.5" />
              <span className="text-[7.5px] tracking-wider uppercase font-bold">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}