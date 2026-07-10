// src/app/page.tsx
"use html"
"use client";
import React, { useState } from 'react';
import DashboardShell from '@/components/DashboardShell';
import HomeView from '@/components/Home';
import WorkView from '@/components/Work';
import BookView from '@/components/Book';
import TrackView from '@/components/Track';
import ChatView from '@/components/Chat';
import LandingView from '@/components/Landing';
import AuthView from '@/components/Auth';
import PaymentsView from '@/components/Payments';
import SettingsView from '@/components/Settings';

export default function RootDashboardPage() {
  // Navigation State Layout Engine
  const [appContext, setAppContext] = useState<'landing' | 'login' | 'dashboard' | 'payments'>('landing');
  const [activeTab, setActiveTab] = useState<string>('home');

  // Direct Redirect Route Blocks
  if (appContext === 'landing') {
    return (
      <LandingView onNavigate={(route) => {
        if (route === 'login') setAppContext('login');
        else {
          setActiveTab(route);
          setAppContext('dashboard');
        }
      }} />
    );
  }

  if (appContext === 'login') {
    return (
      <AuthView 
        onAuthSuccess={() => setAppContext('dashboard')} 
        onBackToLanding={() => setAppContext('landing')} 
      />
    );
  }

  if (appContext === 'payments') {
    return (
      <DashboardShell activeTab="home" setActiveTab={setActiveTab}>
        <PaymentsView onBack={() => setAppContext('dashboard')} />
      </DashboardShell>
    );
  }

  // Dashboard Sub-Tab View Router
  const renderView = () => {
    switch (activeTab) {
      case 'home':
        return (
          <div className="space-y-0">
            <HomeView />
            <div className="px-4 pb-4">
              <div 
                onClick={() => setAppContext('payments')} 
                className="bg-white border border-slate-200 rounded-2xl p-4 flex flex-col items-center justify-center text-center shadow-sm hover:bg-slate-100 transition cursor-pointer"
              >
                <span className="text-xs font-black tracking-wider text-slate-800">DIRECT PAYMENT PORTAL</span>
                <span className="text-[10px] text-blue-500 mt-0.5 font-bold uppercase">Launch GCash Flow</span>
              </div>
            </div>
          </div>
        );
      case 'work':
        return <WorkView />;
      case 'book':
        return <BookView />;
      case 'track':
        return <TrackView />;
      case 'chat':
        return <ChatView />;
      case 'settings':
        return <SettingsView onLogout={() => setAppContext('landing')} />;
      default:
        return <HomeView />;
    }
  };

  return (
    <DashboardShell activeTab={activeTab} setActiveTab={setActiveTab}>
      {renderView()}
    </DashboardShell>
  );
}