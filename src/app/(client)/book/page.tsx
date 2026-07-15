// src/components/Book.tsx
"use client";
import React, { useState } from 'react';
import { Calendar, Plus, CheckCircle, X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Book() {
  const [modalMode, setModalMode] = useState<'none' | 'book_form' | 'book_done' | 'schedule_form' | 'schedule_done'>('none');
  const [serviceType, setServiceType] = useState('Living Room Makeover');
  const [description, setDescription] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

  // Native procedural functional generation for April 2026 Calendar view 
  const daysInApril2026 = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <div className="p-4 space-y-4 animate-fadeIn relative">
      
      {/* Top Standard Action Header Panel */}
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2 text-xs font-bold tracking-wider text-slate-400">
          <Calendar className="w-4 h-4 text-blue-500" />
          <span>PROJECT SCHEDULING</span>
        </div>
        <button onClick={() => setModalMode('book_form')} className="bg-[#0070c0] hover:bg-blue-600 text-white font-bold text-[10px] tracking-wider px-3 py-1.5 rounded-lg flex items-center space-x-1 transition shadow-md">
          <Plus className="w-3 h-3" />
          <span>BOOK NOW</span>
        </button>
      </div>

      {/* Baseline Mock List Overview Card block */}
      <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm flex justify-between items-center">
        <div>
          <h3 className="text-xs font-bold text-slate-800">Living Room Design</h3>
          <p className="text-[11px] text-slate-500 italic mt-1">
            {selectedDate ? `Scheduled for: ${selectedDate}` : '"I want modern design"'}
          </p>
        </div>
        <button onClick={() => setModalMode('schedule_form')} className="bg-[#1a2138] text-white text-[9px] font-bold tracking-widest px-3 py-2 rounded-lg hover:bg-slate-800 transition">
          + SCHEDULE DATE
        </button>
      </div>

      {/* LAYER OVERLAYS: MODAL PORTAL CONFIGURATIONS */}
      {modalMode !== 'none' && (
        <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 min-h-[600px]">
          <div className="w-full bg-white rounded-3xl p-5 shadow-2xl space-y-4 border border-slate-100 max-h-[640px] overflow-y-auto animate-scaleIn relative">
            
            {/* Standard Close Trigger Vector */}
            <button onClick={() => setModalMode('none')} className="absolute top-4 right-4 p-1 rounded-full text-slate-400 hover:bg-slate-100">
              <X className="w-4 h-4" />
            </button>

            {/* FORM PIPELINE VIEW 1: BOOK NOW FORM */}
            {modalMode === 'book_form' && (
              <div className="space-y-4">
                <h3 className="text-xs font-black tracking-widest uppercase text-slate-800">Book Now Form</h3>
                <div>
                  <label className="text-[9px] tracking-widest font-bold text-slate-400 block mb-1 uppercase">Service Type</label>
                  <input type="text" value={serviceType} onChange={(e) => setServiceType(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none" />
                </div>
                <div>
                  <label className="text-[9px] tracking-widest font-bold text-slate-400 block mb-1 uppercase">Project Description</label>
                  <textarea rows={4} value={description} onChange={(e) => setDescription(e.target.value)} placeholder="I want modern design" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none resize-none" />
                </div>
                <button onClick={() => setModalMode('book_done')} className="w-full bg-[#111c3a] text-white text-[10px] font-bold tracking-widest py-3 rounded-xl shadow-md">
                  SUBMIT BOOKING
                </button>
              </div>
            )}

            {/* FORM PIPELINE VIEW 2: SUBMIT BOOKING DONE */}
            {modalMode === 'book_done' && (
              <div className="text-center py-6 space-y-3">
                <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mx-auto text-white">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h3 className="text-base font-serif font-bold text-slate-800">Done Book!</h3>
                <button onClick={() => setModalMode('none')} className="bg-slate-900 text-white font-bold text-[10px] px-6 py-2 rounded-lg">Close</button>
              </div>
            )}

            {/* FORM PIPELINE VIEW 3: SCHEDULE FORM + INTERACTIVE CALENDAR ENGINE */}
            {modalMode === 'schedule_form' && (
              <div className="space-y-4 text-center">
                <div className="space-y-0.5">
                  <h3 className="text-xs font-black tracking-widest uppercase text-slate-800">Schedule Project</h3>
                  <p className="text-[10px] text-slate-400 font-medium">SELECT YOUR TARGET START DATE</p>
                </div>

                {/* Inline Architectural Custom Grid Engine Calendar */}
                <div className="border border-slate-100 rounded-2xl p-3 bg-slate-50/50 space-y-2">
                  <div className="flex justify-between items-center px-1">
                    <span className="text-xs font-bold text-slate-700">April 2026</span>
                    <div className="flex space-x-1">
                      <ChevronLeft className="w-3.5 h-3.5 text-slate-400" />
                      <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                    </div>
                  </div>
                  <div className="grid grid-cols-7 gap-1 text-[9px] font-bold text-slate-400 uppercase text-center">
                    <span>Su</span><span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span>
                  </div>
                  <div className="grid grid-cols-7 gap-1 text-xs">
                    {/* Visual Padding placeholders mapping block setup */}
                    <span className="text-transparent">0</span><span className="text-transparent">0</span><span className="text-transparent">0</span>
                    {daysInApril2026.map((d) => (
                      <button
                        key={d}
                        onClick={() => setSelectedDate(`Apr ${d}, 2026`)}
                        className={`py-1 rounded text-center transition font-medium text-[11px] ${
                          selectedDate === `Apr ${d}, 2026`
                            ? 'bg-[#0070c0] text-white font-bold'
                            : 'text-slate-700 hover:bg-slate-200'
                        }`}
                      >
                        {d}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-[9px] tracking-widest font-bold text-slate-400 block mb-1 uppercase text-left">Work Date</label>
                  <input type="text" readOnly value={selectedDate} placeholder="Select date from calendar" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-center text-slate-800 focus:outline-none font-bold" />
                </div>

                <button disabled={!selectedDate} onClick={() => setModalMode('schedule_done')} className="w-full bg-[#0070c0] text-white text-[10px] font-bold tracking-widest py-3 rounded-xl disabled:opacity-40 shadow-md">
                  CONFIRM SCHEDULE
                </button>
              </div>
            )}

            {/* FORM PIPELINE VIEW 4: SCHEDULING DONE */}
            {modalMode === 'schedule_done' && (
              <div className="text-center py-6 space-y-3">
                <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mx-auto text-white">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h3 className="text-base font-serif font-bold text-slate-800">Done Scheduling!</h3>
                <p className="text-[10px] text-slate-500 font-medium">Locked Date: {selectedDate}</p>
                <button onClick={() => setModalMode('none')} className="bg-slate-900 text-white font-bold text-[10px] px-6 py-2 rounded-lg">Close</button>
              </div>
            )}

          </div>
        </div>
      )}
    </div>
  );
}