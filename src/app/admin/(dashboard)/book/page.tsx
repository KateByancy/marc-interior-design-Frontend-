import React from 'react';
import { Filter, Search, Check, X, Eye } from 'lucide-react';

export default function BookingsManagement() {
  const customBookings = [
    { id: "B-8831", name: "Eleanor Vance", scope: "Living Room Modernization", date: "July 18, 2026", time: "10:30 AM", status: "Pending Approval" },
    { id: "B-8830", name: "Marcus Brody", scope: "Corporate Executive Suite", date: "July 20, 2026", time: "02:00 PM", status: "Confirmed" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold font-serif text-slate-900 tracking-tight">Booking Requests</h2>
          <p className="text-xs text-slate-500 font-medium mt-0.5">Manage user consultations and design review configurations.</p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input type="text" placeholder="Search entries..." className="pl-9 pr-4 py-2 text-xs rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-1 focus:ring-[#0070c0] w-48 sm:w-64" />
          </div>
          <button className="p-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:bg-slate-50"><Filter className="w-4 h-4" /></button>
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100 text-[10px] font-bold tracking-wider uppercase text-slate-400">
                <th className="py-4 px-6">ID Reference</th>
                <th className="py-4 px-6">Client Identity</th>
                <th className="py-4 px-6">Design Scope Focus</th>
                <th className="py-4 px-6">Scheduled Window</th>
                <th className="py-4 px-6">Status State</th>
                <th className="py-4 px-6 text-right">Operational Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs text-slate-700 font-medium">
              {customBookings.map((booking) => (
                <tr key={booking.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="py-4 px-6 font-bold text-slate-900">{booking.id}</td>
                  <td className="py-4 px-6">{booking.name}</td>
                  <td className="py-4 px-6"><span className="px-2 py-0.5 bg-slate-100 rounded text-slate-600 text-[11px] font-semibold">{booking.scope}</span></td>
                  <td className="py-4 px-6">{booking.date} at {booking.time}</td>
                  <td className="py-4 px-6">
                    <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      booking.status === 'Confirmed' ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'
                    }`}>{booking.status}</span>
                  </td>
                  <td className="py-4 px-6 text-right space-x-1.5">
                    <button className="p-1.5 bg-slate-100 hover:bg-slate-200 rounded-lg text-slate-600 transition"><Eye className="w-3.5 h-3.5" /></button>
                    <button className="p-1.5 bg-emerald-50 hover:bg-emerald-100 rounded-lg text-emerald-600 transition"><Check className="w-3.5 h-3.5" /></button>
                    <button className="p-1.5 bg-rose-50 hover:bg-rose-100 rounded-lg text-rose-600 transition"><X className="w-3.5 h-3.5" /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}