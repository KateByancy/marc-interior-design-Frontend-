// src/app/page.tsx
"use client";
import React, { useState } from 'react';
import DashboardShell from './client/(dashboard)/dashboardshell/page';
import HomeView from './client/(dashboard)/home/page';
import WorkView from './client/(dashboard)/work/page';
import BookView from './client/(dashboard)/book/page';
import TrackView from './client/(dashboard)/track/page';
import ChatView from './client/(dashboard)/chat/page';
import LandingView from './client/(dashboard)/landing/page';
import PaymentsView from './client/(dashboard)/payments/page';
import SettingsView from './client/(dashboard)/settings/page';
import LoginView from './client/(dashboard)/login/page';
import RegisterView from './client/(dashboard)/register/page';
export default function RootDashboardPage() {
  // 1. Added 'register' to your App Context state manager
  const [appContext, setAppContext] = useState<'landing' | 'login' | 'register' | 'dashboard' | 'payments' | 'settings'>('landing');
  const [activeTab, setActiveTab] = useState<string>('home');

  // Handle views before the dashboard layout mounts
  if (appContext === 'landing') {
    return (
      <LandingView 
        onNavigate={(route: string) => {
          if (route === 'login') {
            setAppContext('login');
          } else if (route === 'register') {
            setAppContext('register');
          } else {
            // Force authentication before accessing dashboard pages if needed,
            // or leave this if you want unauthenticated users to see sections.
            setAppContext('login'); 
          }
        }} 
      />
    );
  }

  if (appContext === 'login') {
    return (
      <LoginView 
        onLoginSuccess={() => setAppContext('dashboard')} 
        onBackToLanding={() => setAppContext('landing')} 
      />
    );
  }

  // 2. Render the Register Screen conditionally
  if (appContext === 'register') {
    return (
      <RegisterView 
        // Redirect them straight into the dashboard or to login after registering
        onRegisterSuccess={() => setAppContext('login')}
        onBackToLogin={() => setAppContext('login')}
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