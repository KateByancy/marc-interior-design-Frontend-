import React from 'react';
import { UserPlus, Mail, Phone, ExternalLink } from 'lucide-react';

export default function ClientsManagement() {
  const clientsList = [
    { name: "John Sterling", enterprise: "Sterling Real Estate", email: "j.sterling@estate.com", phone: "+1 (555) 902-1244", projects: 3 },
    { name: "Alyssa Vance", enterprise: "Private Residential", email: "alyssa@vancedesign.io", phone: "+1 (555) 309-8812", projects: 1 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold font-serif text-slate-900 tracking-tight">Client Directives</h2>
          <p className="text-xs text-slate-500 font-medium mt-0.5">Maintain explicit contact logs and profile historical assignments.</p>
        </div>
        <button className="flex items-center space-x-2 px-4 py-2 bg-[#0070c0] text-white rounded-xl text-xs font-bold tracking-wider uppercase shadow-md hover:bg-[#102243] transition-all">
          <UserPlus className="w-4 h-4" />
          <span>Add Profile</span>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {clientsList.map((client, idx) => (
          <div key={idx} className="bg-white rounded-3xl border border-slate-100 p-5 shadow-sm space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-sm font-bold text-slate-900">{client.name}</h3>
                <span className="text-[11px] text-slate-400 font-semibold tracking-wide block uppercase">{client.enterprise}</span>
              </div>
              <span className="text-[10px] font-bold bg-slate-100 px-2 py-0.5 rounded text-slate-600 uppercase tracking-wider">{client.projects} Active Logs</span>
            </div>

            <div className="space-y-1.5 text-xs text-slate-600 font-medium pt-2 border-t border-slate-50">
              <div className="flex items-center space-x-2"><Mail className="w-3.5 h-3.5 text-slate-400" /> <span>{client.email}</span></div>
              <div className="flex items-center space-x-2"><Phone className="w-3.5 h-3.5 text-slate-400" /> <span>{client.phone}</span></div>
            </div>

            <button className="w-full py-2 bg-slate-50 hover:bg-slate-100 border border-slate-100 rounded-xl text-xs font-bold text-slate-700 flex items-center justify-center transition">
              <span>Inspect Account Ledger</span>
              <ExternalLink className="w-3.5 h-3.5 ml-1.5 text-slate-400" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}