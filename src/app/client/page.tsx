"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

// Shell & Auth Screens
import DashboardShell from './(dashboard)/dashboardshell/page'; 
import ClientLoginPage from './(dashboard)/login/page';                 
import ClientRegisterPage from './(dashboard)/register/page';        

// Subpage Views
import HomeView from './(dashboard)/home/page';
import PaymentsView from './(dashboard)/payments/page';
import BookView from './(dashboard)/book/page';
import TrackView from './(dashboard)/track/page';
import ChatView from './(dashboard)/chat/page';
import WorkView from './(dashboard)/work/page';

export default function RootDashboardPage() {
  const router = useRouter();
  const [currentScreen, setCurrentScreen] = useState<'login' | 'register' | 'dashboard'>('login');
  const [activeSessionUser, setActiveSessionUser] = useState('Client Guest');
  const [activeTab, setActiveTab] = useState('home');

  const handleRegisterAuth = (registeredName: string) => {
    setActiveSessionUser(registeredName);
    setCurrentScreen('dashboard');
  };

  const handleLoginAuth = (loggedInName: string = 'Client User') => {
    setActiveSessionUser(loggedInName);
    setCurrentScreen('dashboard');
  };

  if (currentScreen === 'login') {
    return (
      <ClientLoginPage 
        onLoginSuccess={handleLoginAuth} 
        onBackToLanding={() => setCurrentScreen('register')} 
      />
    );
  }

  if (currentScreen === 'register') {
    return (
      <ClientRegisterPage 
        onRegisterSuccess={handleRegisterAuth} 
        onBackToLogin={() => setCurrentScreen('login')}
      />
    );
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case 'home':
        return <HomeView setActiveTab={setActiveTab} />;
      case 'payments':
        return <PaymentsView onBack={() => setActiveTab('home')} />;
      case 'book':
        return <BookView />;
      case 'track':
        return <TrackView />;
      case 'chat':
        return <ChatView />;
      case 'work':
        return <WorkView />;
      default:
        return <HomeView setActiveTab={setActiveTab} />;
    }
  };

  return (
    <DashboardShell 
      activeTab={activeTab} 
      setActiveTab={setActiveTab} 
      userName={activeSessionUser}
    >
      {renderTabContent()}
    </DashboardShell>
  );
}