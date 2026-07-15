import React from 'react';
import { DollarSign, ShieldCheck, Clock } from 'lucide-react';

export default function PaymentsVerification() {
  const transactions = [
    { reference: "TXN-9021", client: "Sterling Real Estate", amount: "$12,500.00", method: "ACH Transfer", status: "Settled" },
    { reference: "TXN-9020", client: "Eleanor Vance", amount: "$2,400.00", method: "Stripe Online", status: "Verifying" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold font-serif text-slate-900 tracking-tight">Billing & Verifications</h2>
        <p className="text-xs text-slate-500 font-medium mt-0.5">Reconcile transaction captures against custom project milestones.</p>
      </div>

      <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100 text-[10px] font-bold tracking-wider uppercase text-slate-400">
                <th className="py-4 px-6">Reference ID</th>
                <th className="py-4 px-6">Source Payer</th>
                <th className="py-4 px-6">Gross Amount</th>
                <th className="py-4 px-6">Channel Gateway</th>
                <th className="py-4 px-6">Verification State</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs text-slate-700 font-medium">
              {transactions.map((txn, idx) => (
                <tr key={idx} className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 font-bold text-slate-900">{txn.reference}</td>
                  <td className="py-4 px-6">{txn.client}</td>
                  <td className="py-4 px-6 font-semibold text-slate-900">{txn.amount}</td>
                  <td className="py-4 px-6 text-slate-500">{txn.method}</td>
                  <td className="py-4 px-6">
                    <span className={`inline-flex items-center space-x-1 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                      txn.status === 'Settled' ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'
                    }`}>
                      {txn.status === 'Settled' ? <ShieldCheck className="w-3 h-3 mr-0.5" /> : <Clock className="w-3 h-3 mr-0.5" />}
                      <span>{txn.status}</span>
                    </span>
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