"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { MapPin, Calendar, Users, CreditCard, ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface Inquiry {
  id: string;
  clientName: string;
  service: string;
  date: string;
}

interface Payment {
  ref: string;
  amount: string;
  status: string;
}

export default function DashboardOverview() {
  const router = useRouter();

  // --- INTERACTIVE STATE ENGINE ---
  const [pipeline, setPipeline] = useState({ pending: 1, ongoing: 0, completed: 0 });
  
  const [inquiries, setInquiries] = useState<Inquiry[]>([
    { id: 'IQ-101', clientName: 'Juan Dela Cruz', service: 'Full Seat Restoration', date: 'Just now' },
    { id: 'IQ-102', clientName: 'Maria Santos', service: 'Custom Leather Trim', date: '2 hours ago' }
  ]);

  const [recentPayment, setRecentPayment] = useState<Payment>({
    ref: '90223411',
    amount: '₱15,000',
    status: 'Pending'
  });

  // --- ACTIONS ---
  const handleVerifyPayment = () => {
    if (recentPayment.status === 'Pending') {
      setRecentPayment(prev => ({ ...prev, status: 'Verified' }));
      setPipeline(prev => ({ ...prev, pending: 0, ongoing: 1 }));
      alert(`Payment Reference #${recentPayment.ref} successfully verified! Move to ongoing pipeline allocation.`);
    } else {
      alert('This payment block has already been authorized.');
    }
  };

  const handleProcessQueue = () => {
    alert(`Routing to functional queue pipeline for Reference ID: #${recentPayment.ref}`);
  };

  const handleViewAllInquiries = () => {
    alert('Navigating to full structural Client Inquiries dataset manager panel.');
  };

  return (
    <div className="space-y-8 pb-10">
      
      {/* 1. BUILD PIPELINE SECTION */}
      <div className="space-y-3">
        <h3 className="text-xs font-black tracking-widest uppercase text-slate-800 font-serif">
          Build Pipeline
        </h3>
        
        {/* Responsive Grid Row: 3 columns */}
        <div className="grid grid-cols-3 gap-3">
          {/* Pending Card */}
          <div className="bg-amber-500 text-white rounded-2xl p-4 text-center shadow-md shadow-amber-500/10 flex flex-col justify-center items-center min-h-[90px]">
            <span className="text-2xl font-black font-mono">{pipeline.pending}</span>
            <span className="text-[9px] uppercase tracking-wider font-bold opacity-90 mt-1">Pending</span>
          </div>

          {/* Ongoing Card */}
          <div className="bg-[#4ca0d4] text-white rounded-2xl p-4 text-center shadow-md shadow-blue-400/10 flex flex-col justify-center items-center min-h-[90px]">
            <span className="text-2xl font-black font-mono">{pipeline.ongoing}</span>
            <span className="text-[9px] uppercase tracking-wider font-bold opacity-90 mt-1">Ongoing</span>
          </div>

          {/* Completed Card */}
          <div className="bg-emerald-500 text-white rounded-2xl p-4 text-center shadow-md shadow-emerald-500/10 flex flex-col justify-center items-center min-h-[90px]">
            <span className="text-2xl font-black font-mono">{pipeline.completed}</span>
            <span className="text-[9px] uppercase tracking-wider font-bold opacity-90 mt-1">Completed</span>
          </div>
        </div>
      </div>

      {/* 2. CORE NAVIGATION GRID BLOCK */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        
        {/* Fleet Map Button Link */}
        <button 
          onClick={() => router.push('/admin/fleet')}
          className="bg-[#161b3d] hover:bg-[#202754] text-white rounded-2xl p-5 text-left shadow-sm flex flex-col justify-between items-start min-h-[120px] transition cursor-pointer border-none group relative"
        >
          <h4 className="text-xl font-bold font-serif tracking-tight pr-8">Fleet Map</h4>
          <MapPin className="w-5 h-5 absolute bottom-5 right-5 text-slate-400 group-hover:text-white transition" />
        </button>

        {/* Schedule Button Link */}
        <button 
          onClick={() => router.push('/admin/schedule')}
          className="bg-[#f0f6fc] hover:bg-[#e2eef9] text-slate-800 rounded-2xl p-5 text-left border border-slate-200/60 shadow-sm flex flex-col justify-between items-start min-h-[120px] transition cursor-pointer group relative"
        >
          <h4 className="text-xl font-bold font-serif tracking-tight text-[#161b3d]">Schedule</h4>
          <Calendar className="w-5 h-5 absolute bottom-5 right-5 text-slate-400 group-hover:text-[#0070c0] transition" />
        </button>

        {/* Clients Button Link */}
        <button 
          onClick={() => router.push('/admin/clients')}
          className="bg-[#f0f6fc] hover:bg-[#e2eef9] text-slate-800 rounded-2xl p-5 text-left border border-slate-200/60 shadow-sm flex flex-col justify-between items-start min-h-[120px] transition cursor-pointer group relative"
        >
          <h4 className="text-xl font-bold font-serif tracking-tight text-[#161b3d]">Clients</h4>
          <Users className="w-5 h-5 absolute bottom-5 right-5 text-slate-400 group-hover:text-[#0070c0] transition" />
        </button>

        {/* Payment Transactions Button Link */}
        <button 
          onClick={() => router.push('/admin/payments')}
          className="bg-[#161b3d] hover:bg-[#202754] text-white rounded-2xl p-5 text-left shadow-sm flex flex-col justify-between items-start min-h-[120px] transition cursor-pointer border-none group relative"
        >
          <h4 className="text-xl font-bold font-serif tracking-tight pr-12 leading-tight">Payment Transactions</h4>
          <CreditCard className="w-5 h-5 absolute bottom-5 right-5 text-slate-400 group-hover:text-white transition" />
        </button>

      </div>

      {/* 3. CLIENT INQUIRIES CONTEXT PANELS */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-black tracking-widest uppercase text-slate-800 font-serif">
            Client Inquiries
          </h3>
          <button 
            onClick={handleViewAllInquiries}
            className="text-xs font-bold text-[#0070c0] hover:underline bg-transparent border-none cursor-pointer"
          >
            View All
          </button>
        </div>

        {/* Outer Framework Frame */}
        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm min-h-[140px] flex flex-col justify-center">
          {inquiries.length > 0 ? (
            <div className="space-y-3 w-full">
              {inquiries.map((inq) => (
                <div key={inq.id} className="flex items-center justify-between border-b border-slate-50 pb-2 last:border-none last:pb-0">
                  <div>
                    <p className="text-xs font-bold text-slate-800">{inq.clientName}</p>
                    <p className="text-[10px] text-slate-400 font-medium">{inq.service}</p>
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono">{inq.date}</span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-xs font-serif text-slate-500 italic">All Inquiries</p>
          )}
        </div>
      </div>

      {/* 4. RECENT PAYMENTS BLOCK MODULE */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-black tracking-widest uppercase text-slate-800 font-serif">
            Recent Payments
          </h3>
          <button 
            onClick={handleVerifyPayment}
            disabled={recentPayment.status === 'Verified'}
            className={`text-xs font-bold uppercase tracking-wider bg-transparent border-none transition ${
              recentPayment.status === 'Verified' 
                ? 'text-slate-300 cursor-not-allowed' 
                : 'text-[#0070c0] hover:text-[#102243] cursor-pointer underline'
            }`}
          >
            {recentPayment.status === 'Verified' ? 'Verified ✓' : 'Verify'}
          </button>
        </div>

        <div className="bg-[#f0f6fc] border border-slate-200/80 rounded-2xl p-4 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="space-y-0.5">
            <p className="text-xs font-black text-slate-800 font-mono">
              Ref: {recentPayment.ref}
            </p>
            <p className="text-[11px] text-slate-500 font-medium">
              {recentPayment.amount} • <span className={recentPayment.status === 'Verified' ? 'text-emerald-600 font-bold' : 'text-amber-600 font-bold'}>{recentPayment.status}</span>
            </p>
          </div>
          
          <button 
            onClick={handleProcessQueue}
            className="flex items-center justify-center space-x-1 px-4 py-2 bg-transparent hover:bg-blue-100/50 text-[#0070c0] rounded-xl text-[11px] font-black tracking-wider uppercase border border-[#0070c0]/30 transition whitespace-nowrap cursor-pointer"
          >
            <span>Go to Queue</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

    </div>
  );
}