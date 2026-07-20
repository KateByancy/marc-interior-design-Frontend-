"use client";

import React, { useState } from 'react';
import { MapPin, X, ChevronRight, Compass, Info, RefreshCw } from 'lucide-react';

interface ProjectMarker {
  id: string;
  projectRef: string;
  clientName: string;
  locationName: string;
  region: string;
  progress: number;
  coordinates: { top: string; left: string }; // Custom percentage positioning for regional accuracy
  status: 'Pending' | 'Ongoing' | 'Completed';
}

export default function FleetMapManagement() {
  // --- STATE SYSTEM ---
  const [selectedProject, setSelectedProject] = useState<ProjectMarker | null>(null);
  const [isScanning, setIsScanning] = useState(false);

  // High fidelity dataset emphasizing Region 7 / Central Visayas targeting
  const [projects] = useState<ProjectMarker[]>([
    {
      id: 'p1',
      projectRef: '#1302',
      clientName: 'Marc Automotive Restorations',
      locationName: 'Mandaue City',
      region: 'Region 7 (Visayas)',
      progress: 0,
      coordinates: { top: '56%', left: '52%' }, // Positioned right near Cebu/Mandaue sector
      status: 'Pending'
    },
    {
      id: 'p2',
      projectRef: '#1405',
      clientName: 'Cordova Interior Concept Lounge',
      locationName: 'Cordova, Mactan',
      region: 'Region 7 (Visayas)',
      progress: 45,
      coordinates: { top: '62%', left: '58%' },
      status: 'Ongoing'
    }
  ]);

  const triggerScanRefresh = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
    }, 1200);
  };

  return (
    <div className="space-y-6 pb-10">
      
      {/* HEADER ACTION CONTEXT */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold font-serif text-slate-900 tracking-tight">Project Tracker Map</h2>
          <p className="text-xs text-slate-500 font-medium mt-0.5">Real-time geo-location monitoring of ongoing upholstery and design assets.</p>
        </div>
        
        {/* Sync Trigger button */}
        <button 
          onClick={triggerScanRefresh}
          className="self-start flex items-center space-x-2 px-4 py-2 bg-[#f0f6fc] border border-slate-200 text-slate-700 rounded-xl text-xs font-bold transition hover:bg-slate-100 cursor-pointer"
        >
          <RefreshCw className={`w-3.5 h-3.5 text-[#0070c0] ${isScanning ? 'animate-spin' : ''}`} />
          <span>{isScanning ? 'Syncing Coordinates...' : 'Refresh Telemetry'}</span>
        </button>
      </div>

      {/* TOP TRACKER METRIC OVERLAY CARD */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-4 shadow-sm max-w-sm">
        <span className="text-[10px] font-black tracking-widest text-slate-400 uppercase block mb-2">Active Target Node</span>
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-sm font-black font-mono text-slate-800">PROJECT #1302</h4>
            <p className="text-xs text-slate-500 font-medium mt-0.5">Mandaue City, Region 7</p>
          </div>
          <div className="text-right">
            <span className="text-xs font-black font-mono text-slate-400">0%</span>
            <div className="w-24 bg-slate-100 h-1 rounded-full overflow-hidden mt-1">
              <div className="bg-amber-500 h-full w-[0%]" />
            </div>
          </div>
        </div>
      </div>

      {/* MAIN HARDWARE VISUALIZATION PORT */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        
        {/* PERSISTENT MAP WINDOW CONTAINER */}
        <div className="lg:col-span-3 bg-slate-900 rounded-3xl border border-slate-800 shadow-xl overflow-hidden relative min-h-[500px] flex flex-col justify-between">
          
          {/* SIMULATED DEVICE HEADER BAR */}
          <div className="bg-slate-950 text-white px-6 py-3 flex justify-between items-center text-xs font-bold border-b border-slate-800/60 z-10">
            <span className="font-mono">9:41</span>
            <div className="flex items-center space-x-2 text-slate-400">
              <Compass className="w-3.5 h-3.5 animate-pulse text-sky-400" />
              <span className="text-[10px] tracking-wider uppercase font-sans">Project Map</span>
            </div>
          </div>

          {/* DYNAMIC PHILIPPINES GEOGRAPHIC OVERLAY ENGINE */}
          <div className="flex-1 relative overflow-hidden bg-[#0d1326] flex items-center justify-center">
            
            {/* Real Map Styling Vector Backdrop Mask */}
            <div 
              className="absolute inset-0 opacity-40 bg-cover bg-center pointer-events-none filter saturate-[0.4] hue-rotate-[180deg]"
              style={{ 
                backgroundImage: `url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80')`,
                backgroundBlendMode: 'multiply'
              }} 
            />

            {/* Stylized Grid HUD overlay lines */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-20" />

            {/* ACTIVE INTERACTIVE GEOGRAPHIC PINPOINT MARKERS */}
            {projects.map((project) => {
              const isActive = selectedProject?.id === project.id;
              return (
                <div
                  key={project.id}
                  className="absolute transition-all duration-300 transform -translate-x-1/2 -translate-y-1/2 z-20"
                  style={{ top: project.coordinates.top, left: project.coordinates.left }}
                >
                  {/* Radar Pulse Rings */}
                  <span className="absolute inline-flex h-10 w-10 rounded-full bg-blue-500/30 animate-ping -top-3 -left-3" />
                  
                  {/* Tactile Clickable Core Node Pin */}
                  <button
                    onClick={() => setSelectedProject(project)}
                    className={`relative w-4 h-4 rounded-full flex items-center justify-center border-2 shadow-lg transition-all ${
                      isActive 
                        ? 'bg-amber-400 border-white scale-125 ring-4 ring-blue-500/40' 
                        : 'bg-[#0070c0] border-sky-300 hover:scale-110'
                    } cursor-pointer`}
                  >
                    <span className="w-1.5 h-1.5 bg-white rounded-full" />
                  </button>
                </div>
              );
            })}

            {/* FLOATING ACTION TELEMETRY DROP OVERLAY DROPDOWN WINDOW FORM */}
            {selectedProject && (
              <div className="absolute bottom-6 left-6 right-6 mx-auto max-w-sm bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-slate-200/80 shadow-2xl animate-fade-in z-30 text-slate-800 space-y-3">
                <div className="flex items-start justify-between">
                  <div className="space-y-0.5">
                    <span className="text-[9px] font-black uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md">
                      {selectedProject.status} Build
                    </span>
                    <h5 className="text-sm font-black font-mono text-slate-900 mt-1">
                      {selectedProject.projectRef} : {selectedProject.locationName}
                    </h5>
                  </div>
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="text-slate-400 hover:text-slate-600 p-1 bg-slate-100 hover:bg-slate-200 rounded-lg transition cursor-pointer border-none"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="border-t border-slate-100 pt-2.5 text-xs space-y-1.5 font-medium text-slate-600">
                  <p><span className="text-slate-400 font-bold uppercase text-[9px] block">Client Handle</span> {selectedProject.clientName}</p>
                  <p><span className="text-slate-400 font-bold uppercase text-[9px] block">Jurisdiction Vector</span> {selectedProject.region}</p>
                </div>

                <div className="pt-1 flex items-center justify-between">
                  <div className="flex items-center space-x-2 flex-1 pr-4">
                    <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                      <div 
                        className="bg-[#0070c0] h-full transition-all duration-500" 
                        style={{ width: `${selectedProject.progress}%` }}
                      />
                    </div>
                    <span className="text-[10px] font-bold font-mono text-slate-500">{selectedProject.progress}%</span>
                  </div>
                  
                  <button className="flex items-center space-x-0.5 text-[10px] font-black text-[#0070c0] uppercase tracking-wider hover:underline bg-transparent border-none cursor-pointer">
                    <span>Manage</span>
                    <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* SIMULATED STATUS BAR BASEFOOT */}
          <div className="bg-slate-950 text-[10px] tracking-widest font-mono text-slate-400 px-6 py-2.5 flex items-center justify-between border-t border-slate-800/60 z-10">
            <span className="uppercase text-slate-300">Scanning Region 7 (Visayas)...</span>
            <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-sm shadow-emerald-400/50 animate-pulse" />
          </div>

        </div>

        {/* SIDE BAR EXPEDITED QUEUE MANIFEST LIST */}
        <div className="bg-white rounded-3xl border border-slate-200/80 p-5 shadow-sm space-y-4 h-full flex flex-col justify-between">
          <div className="space-y-1">
            <h3 className="text-xs font-black tracking-widest uppercase text-slate-800 font-serif">Job Sites Manifest</h3>
            <p className="text-[10px] font-medium text-slate-400">Select an item below to pull up coordinates map nodes.</p>
          </div>

          <div className="space-y-2.5 max-h-[360px] overflow-y-auto pr-1">
            {projects.map((project) => (
              <button
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className={`w-full p-3 text-left rounded-xl border transition flex flex-col space-y-1 text-xs cursor-pointer ${
                  selectedProject?.id === project.id 
                    ? 'bg-blue-50/60 border-blue-200 ring-2 ring-blue-500/5' 
                    : 'bg-slate-50 border-transparent hover:bg-slate-100/70 hover:border-slate-200'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span className="font-mono font-black text-slate-800">{project.projectRef}</span>
                  <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-md ${
                    project.status === 'Ongoing' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'
                  }`}>{project.status}</span>
                </div>
                <p className="font-bold text-slate-700 truncate">{project.clientName}</p>
                <div className="flex items-center space-x-1 text-[10px] text-slate-400 font-medium pt-0.5">
                  <MapPin className="w-3 h-3 text-[#0070c0]" />
                  <span>{project.locationName}</span>
                </div>
              </button>
            ))}
          </div>

          <div className="bg-slate-50 border border-slate-100 rounded-xl p-3 flex items-start space-x-2 text-[11px] text-slate-500 font-medium mt-2">
            <Info className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
            <p>Click nodes directly on the interactive layout radar grid to track build completion workflows instantly.</p>
          </div>
        </div>

      </div>

    </div>
  );
}