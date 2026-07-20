"use client";

import React, { useState } from 'react';
import { Calendar as CalendarIcon, Clock, Plus, ChevronLeft, ChevronRight, MapPin, X, Trash2 } from 'lucide-react';

interface Timeblock {
  id: string;
  date: string; // Format: YYYY-MM-DD
  timeStart: string;
  timeEnd: string;
  title: string;
  location: string;
}

export default function ScheduleManagement() {
  // --- STATE SYSTEM ---
  const [currentDate, setCurrentDate] = useState(new Date(2026, 6, 20)); // Initialized to July 2026
  const [selectedDateStr, setSelectedDateStr] = useState("2026-07-20");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Form input states
  const [newTitle, setNewTitle] = useState('');
  const [newTimeStart, setNewTimeStart] = useState('09:00');
  const [newTimeEnd, setNewTimeEnd] = useState('11:00');
  const [newLocation, setNewLocation] = useState('');

  // Pre-populated data layer matching your initial design specifications
  const [timeblocks, setTimeblocks] = useState<Timeblock[]>([
    {
      id: '1',
      date: '2026-07-20',
      timeStart: '09:00 AM',
      timeEnd: '11:00 AM',
      title: 'Initial Blueprint Layout Assessment',
      location: 'Studio Office Suite B'
    },
    {
      id: '2',
      date: '2026-07-21',
      timeStart: '02:00 PM',
      timeEnd: '04:00 PM',
      title: 'Client Material Procurement Review',
      location: 'Showroom Hall A'
    }
  ]);

  // --- CALENDAR GRID CALCULATION ALGORITHMS ---
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  // Helper arrays for calendar generation
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayIndex = new Date(year, month, 1).getDay();

  const handlePrevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  // Helper to format 24h input format to AM/PM strings for clean UI display
  const formatTimeToAMPM = (timeStr: string) => {
    if (!timeStr) return '';
    const [hoursStr, minutes] = timeStr.split(':');
    let hours = parseInt(hoursStr, 10);
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // conversion of 0 to 12
    return `${hours.toString().padStart(2, '0')}:${minutes} ${ampm}`;
  };

  // --- ACTIONS ---
  const handleCreateTimeblock = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    const createdBlock: Timeblock = {
      id: Date.now().toString(),
      date: selectedDateStr,
      timeStart: formatTimeToAMPM(newTimeStart),
      timeEnd: formatTimeToAMPM(newTimeEnd),
      title: newTitle,
      location: newLocation.trim() || 'Virtual Workspace Room'
    };

    setTimeblocks([...timeblocks, createdBlock]);
    
    // Clear Input Fields
    setNewTitle('');
    setNewLocation('');
    setIsModalOpen(false);
  };

  const handleDeleteBlock = (id: string) => {
    setTimeblocks(timeblocks.filter(block => block.id !== id));
  };

  // Filter out items matching selected date grid node
  const activeTimelineBlocks = timeblocks.filter(block => block.date === selectedDateStr);

  return (
    <div className="space-y-6">
      
      {/* HEADER CONTROLS */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold font-serif text-slate-900 tracking-tight">Calendar & Planning</h2>
          <p className="text-xs text-slate-500 font-medium mt-0.5">Control timeline windows for user consultations and interior site checkups.</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="flex items-center space-x-2 px-4 py-2 bg-[#0070c0] text-white rounded-xl text-xs font-bold tracking-wider uppercase shadow-md hover:bg-[#102243] transition-all cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>New Timeblock</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* MONTHLY CALENDAR WRAPPER */}
        <div className="lg:col-span-2 bg-white rounded-3xl border border-slate-100 p-6 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
            <h3 className="text-sm font-bold uppercase text-slate-800 font-serif tracking-wider">
              {monthNames[month]} {year}
            </h3>
            
            {/* MONTH SWITCH TOGGLES */}
            <div className="flex items-center space-x-1 bg-slate-50 p-1 rounded-xl border border-slate-100">
              <button 
                onClick={handlePrevMonth}
                className="p-1.5 hover:bg-white rounded-lg text-slate-600 transition border-none bg-transparent cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button 
                onClick={handleNextMonth}
                className="p-1.5 hover:bg-white rounded-lg text-slate-600 transition border-none bg-transparent cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* DAY NAMES ROW */}
          <div className="grid grid-cols-7 gap-2 text-center mb-2">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
              <span key={day} className="text-[10px] font-black uppercase text-slate-400 tracking-wider">
                {day}
              </span>
            ))}
          </div>

          {/* HIGH-FIDELITY ACTIVE CALENDAR CELLS */}
          <div className="grid grid-cols-7 gap-2 flex-1 min-h-[300px]">
            {/* Pad out layout space before start day index */}
            {Array.from({ length: firstDayIndex }).map((_, idx) => (
              <div key={`empty-${idx}`} className="bg-slate-50/40 rounded-xl opacity-30" />
            ))}

            {/* Render absolute calendar numerical values */}
            {Array.from({ length: daysInMonth }).map((_, idx) => {
              const dayNum = idx + 1;
              const loopDateStr = `${year}-${(month + 1).toString().padStart(2, '0')}-${dayNum.toString().padStart(2, '0')}`;
              const isSelected = loopDateStr === selectedDateStr;
              
              // Verify if node holds timeline blocks
              const hasEvents = timeblocks.some(block => block.date === loopDateStr);

              return (
                <button
                  key={`day-${dayNum}`}
                  onClick={() => setSelectedDateStr(loopDateStr)}
                  className={`p-2 min-h-[50px] rounded-xl flex flex-col justify-between items-center transition relative border border-transparent cursor-pointer group ${
                    isSelected 
                      ? 'bg-[#0070c0] text-white font-bold shadow-md shadow-blue-500/10' 
                      : 'bg-slate-50 text-slate-700 hover:bg-slate-100/80 hover:border-slate-200'
                  }`}
                >
                  <span className="text-xs font-bold font-mono self-start">{dayNum}</span>
                  
                  {/* Event indicator dot */}
                  {hasEvents && (
                    <span className={`w-1.5 h-1.5 rounded-full absolute bottom-2 left-1/2 -translate-x-1/2 ${
                      isSelected ? 'bg-white' : 'bg-sky-500'
                    }`} />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* TIMELINE VIEW SIDE PANEL */}
        <div className="bg-white rounded-3xl border border-slate-100 p-6 shadow-sm flex flex-col h-full space-y-4">
          <div>
            <h3 className="text-sm font-bold tracking-wider uppercase text-slate-900">Timeline Blocks</h3>
            <p className="text-[10px] font-mono text-slate-400 uppercase tracking-widest mt-0.5">Selected: {selectedDateStr}</p>
          </div>

          <div className="space-y-3 flex-1 overflow-y-auto max-h-[350px] pr-1">
            {activeTimelineBlocks.length > 0 ? (
              activeTimelineBlocks.map((block) => (
                <div key={block.id} className="p-4 bg-blue-50/40 border border-blue-100 rounded-2xl text-xs space-y-2 relative group transition hover:bg-blue-50/70">
                  <button 
                    onClick={() => handleDeleteBlock(block.id)}
                    className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 text-slate-400 hover:text-rose-500 transition border-none bg-transparent cursor-pointer"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center space-x-1.5 font-bold text-[#0070c0]">
                    <Clock className="w-3.5 h-3.5" /> 
                    <span>{block.timeStart} - {block.timeEnd}</span>
                  </div>
                  <p className="font-bold text-slate-800 pr-5 leading-normal">{block.title}</p>
                  
                  <div className="flex items-center space-x-1 text-[10px] text-slate-400 font-medium">
                    <MapPin className="w-3 h-3 text-slate-400" />
                    <span>{block.location}</span>
                  </div>
                </div>
              ))
            ) : (
              <div className="h-48 border border-dashed border-slate-200 rounded-2xl flex flex-col items-center justify-center text-center p-4">
                <CalendarIcon className="w-8 h-8 text-slate-300 mb-2" />
                <p className="text-xs text-slate-400 font-semibold">No timeblocks allocated</p>
                <p className="text-[10px] text-slate-400/70 mt-0.5">Click "New Timeblock" to secure layout spacing.</p>
              </div>
            )}
          </div>
        </div>

      </div>

      {/* TIMELINE BLOCK CREATION DIALOG OVERLAY (MODAL) */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl max-w-md w-full shadow-2xl border border-slate-100 overflow-hidden relative p-6 space-y-4">
            
            <div className="flex justify-between items-center border-b border-slate-100 pb-3">
              <div>
                <h3 className="text-sm font-black uppercase text-slate-800 font-serif tracking-wider">Configure Booking</h3>
                <p className="text-[10px] font-mono text-slate-400 mt-0.5">Date Target: {selectedDateStr}</p>
              </div>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="p-1.5 hover:bg-slate-100 rounded-xl text-slate-400 hover:text-slate-600 transition border-none bg-transparent cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleCreateTimeblock} className="space-y-4">
              <div className="space-y-1">
                <label className="text-[9px] font-black uppercase tracking-wider text-slate-400 block px-1">Task Title / Assessment Purpose</label>
                <input 
                  type="text"
                  required
                  placeholder="e.g., Initial Blueprint Layout Assessment"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 rounded-xl px-4 py-3 text-xs outline-none focus:border-[#0070c0] focus:bg-white transition font-medium"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[9px] font-black uppercase tracking-wider text-slate-400 block px-1">Start Hour</label>
                  <input 
                    type="time"
                    required
                    value={newTimeStart}
                    onChange={(e) => setNewTimeStart(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 text-slate-800 rounded-xl px-4 py-3 text-xs outline-none focus:border-[#0070c0] focus:bg-white transition font-medium"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[9px] font-black uppercase tracking-wider text-slate-400 block px-1">End Hour</label>
                  <input 
                    type="time"
                    required
                    value={newTimeEnd}
                    onChange={(e) => setNewTimeEnd(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 text-slate-800 rounded-xl px-4 py-3 text-xs outline-none focus:border-[#0070c0] focus:bg-white transition font-medium"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[9px] font-black uppercase tracking-wider text-slate-400 block px-1">Location Venue</label>
                <input 
                  type="text"
                  placeholder="e.g., Studio Office Suite B"
                  value={newLocation}
                  onChange={(e) => setNewLocation(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 rounded-xl px-4 py-3 text-xs outline-none focus:border-[#0070c0] focus:bg-white transition font-medium"
                />
              </div>

              <button 
                type="submit"
                className="w-full bg-[#0070c0] text-white text-xs font-bold py-3.5 rounded-xl uppercase tracking-widest shadow-md hover:bg-[#102243] transition-all mt-2 cursor-pointer"
              >
                Publish Block
              </button>
            </form>

          </div>
        </div>
      )}

    </div>
  );
}