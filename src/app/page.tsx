// src/app/page.tsx
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
  // Master app routing context state management
  const [appContext, setAppContext] = useState<'landing' | 'login' | 'dashboard' | 'payments' | 'settings'>('landing');
  const [activeTab, setActiveTab] = useState<string>('home');

  if (appContext === 'landing') {
    return (
      <LandingView 
        onNavigate={(route: string) => {
          if (route === 'login') {
            setAppContext('login');
          } else {
            setActiveTab(route);
            setAppContext('dashboard');
          }
        }} 
      />
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

  // Master Dashboard view selector layout matching desktop layout variables
  const renderContent = () => {
    if (appContext === 'payments') {
      return <PaymentsView onBack={() => setAppContext('dashboard')} />;
    }
    if (appContext === 'settings') {
      return <SettingsView onLogout={() => setAppContext('landing')} />;
    }

    switch (activeTab) {
      case 'home':
        return (
          <HomeView 
            onOpenSettings={() => setAppContext('settings')} 
            onOpenPayments={() => setAppContext('payments')} 
          />
        );
      case 'work':
        return <WorkView />;
      case 'book':
        return <BookView />;
      case 'track':
        return <TrackView />;
      case 'chat':
        return <ChatView />;
      default:
        return <HomeView />;
    }
  };

  return (
    <DashboardShell 
      activeTab={appContext === 'settings' ? 'settings' : appContext === 'payments' ? 'home' : activeTab} 
      setActiveTab={(tab: string) => {
        setAppContext('dashboard'); // clear special screens if clicking desktop sidebar or mobile tabs
        setActiveTab(tab);
      }}
    >
      {renderContent()}
    </DashboardShell>
  );
}