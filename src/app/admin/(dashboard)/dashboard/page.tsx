import React from 'react';
import { Layers, FileText, CheckCircle2, TrendingUp } from 'lucide-react';

export default function DashboardOverview() {
  const metrics = [
    { title: 'Total Inquiries', count: '148', change: '+12% this month', icon: FileText, color: 'bg-[#0070c0]' },
    { title: 'Active Design Builds', count: '32', change: '8 finishing this week', icon: Layers, color: 'bg-emerald-600' },
    { title: 'Completed Projects', count: '89', change: '100% satisfaction rating', icon: CheckCircle2, color: 'bg-indigo-600' },
    { title: 'Gross Pipeline Revenue', count: '$45,210', change: 'Pending client approvals', icon: TrendingUp, color: 'bg-[#102243]' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold font-serif text-slate-900 tracking-tight">Overview Dashboard</h2>
        <p className="text-xs text-slate-500 font-medium mt-0.5">Real-time breakdown of current system operational states.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric, i) => {
          const Icon = metric.icon;
          return (
            <div key={i} className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm flex items-center justify-between">
              <div className="space-y-1.5">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">{metric.title}</span>
                <span className="text-2xl font-black text-slate-900 tracking-tight block">{metric.count}</span>
                <span className="text-[10px] text-slate-500 font-medium block">{metric.change}</span>
              </div>
              <div className={`w-11 h-11 ${metric.color} rounded-xl flex items-center justify-center text-white shadow-sm`}>
                <Icon className="w-5 h-5" />
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-3xl p-6 border border-slate-100 shadow-sm space-y-4">
          <h3 className="text-sm font-bold tracking-wider uppercase text-slate-900">Live Design Pipeline Activity</h3>
          <div className="h-64 bg-slate-50 rounded-2xl border border-dashed border-slate-200 flex items-center justify-center text-xs font-semibold text-slate-400">
            [Pipeline Analytical Trend Visual Graph Area]
          </div>
        </div>
        <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm space-y-4">
          <h3 className="text-sm font-bold tracking-wider uppercase text-slate-900">Recent Status Alterations</h3>
          <div className="space-y-3">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex items-start space-x-3 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs">
                <div className="w-2 h-2 rounded-full bg-[#0070c0] mt-1.5 shrink-0" />
                <div>
                  <p className="font-bold text-slate-800">Client #10408 approved initial rendering concepts</p>
                  <span className="text-[10px] text-slate-400 font-medium block mt-0.5">28 minutes ago</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}