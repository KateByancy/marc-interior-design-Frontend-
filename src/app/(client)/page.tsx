"use client";
import React, { useState } from 'react';

// Clean default imports that match your subpage export structures
import DashboardShell from './dashboardshell/DashboardShell'; 
import ClientLoginPage from './login/page';                 
import ClientRegisterPage from './register/page';           

export default function RootDashboardPage() {
  const [currentScreen, setCurrentScreen] = useState<'login' | 'register' | 'dashboard'>('login');
  const [activeSessionUser, setActiveSessionUser] = useState('Client Guest');
  const [activeTab, setActiveTab] = useState('home');

  const handleRegisterAuth = (registeredName: string) => {
    setActiveSessionUser(registeredName);
    setCurrentScreen('dashboard');
  };

  const handleLoginAuth = (loggedInName: string) => {
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

  return (
    <DashboardShell 
      activeTab={activeTab} 
      setActiveTab={setActiveTab} 
      userName={activeSessionUser}
    >
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">Workspace Overview</h3>
        <p className="text-sm text-slate-400">Welcome back, {activeSessionUser}!</p>
      </div>
    </DashboardShell>
  );
}