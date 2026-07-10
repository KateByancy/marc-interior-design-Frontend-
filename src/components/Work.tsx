// src/components/Work.tsx
"use client";
import React, { useState } from 'react';
import { Layers, Eye } from 'lucide-react';

export default function Work() {
  const categories = ['All', 'Modern', 'Luxury', 'Minimalist'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const portfolioItems = [
    { id: 1, title: 'Nordic Living Room', category: 'Minimalist', image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=600&q=80' },
    { id: 2, title: 'Metropolitan Penthouse', category: 'Luxury', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80' },
    { id: 3, title: 'Japandi Bedroom Accent', category: 'Modern', image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=600&q=80' },
  ];

  const filteredItems = selectedCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <div className="p-4 space-y-4 animate-fadeIn">
      <div className="flex items-center space-x-2 text-xs font-bold tracking-wider text-slate-400">
        <Layers className="w-4 h-4 text-blue-500" />
        <span>OUR INSPIRATIONS</span>
      </div>
      
      {/* Category Horizontal Filter Tags */}
      <div className="flex space-x-2 overflow-x-auto pb-1 scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
              selectedCategory === cat 
                ? 'bg-[#0070c0] text-white' 
                : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid Portfolio Feed */}
      <div className="space-y-4">
        {filteredItems.map((item) => (
          <div key={item.id} className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm group">
            <div className="relative h-48 bg-slate-100 overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              <span className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-sm text-white font-bold text-[9px] tracking-widest px-2 py-0.5 rounded">
                {item.category.toUpperCase()}
              </span>
            </div>
            <div className="p-4 flex justify-between items-center">
              <h4 className="text-xs font-bold text-slate-800">{item.title}</h4>
              <button className="text-blue-500 hover:text-blue-600 transition">
                <Eye className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}