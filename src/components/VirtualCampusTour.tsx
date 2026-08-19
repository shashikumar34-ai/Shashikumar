import React, { useState } from 'react';
import { 
  Compass, 
  Maximize2, 
  Map, 
  Sparkles, 
  Camera, 
  ExternalLink,
  MapPin,
  Building2,
  BookOpen,
  FlaskConical,
  Trophy,
  Cpu,
  Layers
} from 'lucide-react';
import { VIRTUAL_TOUR_SPOTS, COLLEGE_INFO } from '../data/mockData';
import { VirtualTourSpot } from '../types';

interface VirtualCampusTourProps {
  onOpenAdmissions?: () => void;
  onOpenVirtualTourModal?: () => void;
}

export const VirtualCampusTour: React.FC<VirtualCampusTourProps> = ({ 
  onOpenAdmissions,
  onOpenVirtualTourModal
}) => {
  const [viewMode, setViewMode] = useState<'liveTour' | 'map'>('liveTour');
  const [activeSpot, setActiveSpot] = useState<VirtualTourSpot>(VIRTUAL_TOUR_SPOTS[0]);

  const handleSelectSpot = (spot: VirtualTourSpot) => {
    setActiveSpot(spot);
    if (onOpenVirtualTourModal) {
      onOpenVirtualTourModal();
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Library': return <BookOpen className="w-3.5 h-3.5" />;
      case 'Labs & Research': return <FlaskConical className="w-3.5 h-3.5" />;
      case 'Sports & Fitness': return <Trophy className="w-3.5 h-3.5" />;
      case 'Innovation & Incubation': return <Cpu className="w-3.5 h-3.5" />;
      case 'Auditorium': return <Building2 className="w-3.5 h-3.5" />;
      default: return <Layers className="w-3.5 h-3.5" />;
    }
  };

  return (
    <section id="virtual-tour" className="py-20 bg-slate-900 text-slate-100 relative overflow-hidden">
      
      {/* Background Ambience Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-slate-800 gap-6">
          <div>
            <div className="inline-flex items-center space-x-2 bg-blue-950/80 border border-blue-500/30 text-amber-400 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
              <Compass className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '10s' }} />
              <span>Official 360° Virtual Experience</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
              Virtual Campus <span className="text-amber-400">Tour 360°</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
              Explore BITM’s 11-acre Jnana Gangotri campus in interactive 360-degree virtual view. Experience our high-tech laboratories, Central Library, NAIN startup hub, and championship sports arena.
            </p>
          </div>

          {/* View Mode Switcher (Live Tour / Map / Pop VR Modal) */}
          <div className="flex flex-wrap items-center gap-2 flex-shrink-0 self-start md:self-auto">
            {onOpenVirtualTourModal && (
              <button
                id="btn-pop-virtual-tour-hero"
                onClick={onOpenVirtualTourModal}
                className="flex items-center space-x-2 px-4 py-2.5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-blue-950 rounded-2xl text-xs font-black shadow-xl shadow-amber-400/20 transform hover:scale-105 transition-all cursor-pointer border border-amber-300"
                title="Pop Open Full-Screen Interactive 360 Virtual Tour"
              >
                <Compass className="w-4 h-4 animate-spin" style={{ animationDuration: '8s' }} />
                <span>Pop Full 360° VR Tour</span>
                <Sparkles className="w-3.5 h-3.5 text-blue-950" />
              </button>
            )}

            <div className="flex items-center bg-slate-800/90 p-1.5 rounded-2xl border border-slate-700/60 shadow-lg">
              <button
                onClick={() => setViewMode('liveTour')}
                className={`flex items-center space-x-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  viewMode === 'liveTour'
                    ? 'bg-amber-400 text-blue-950 shadow-md'
                    : 'text-slate-300 hover:text-white hover:bg-slate-700/60'
                }`}
              >
                <Compass className="w-3.5 h-3.5 text-amber-400" />
                <span>Live 360° VR</span>
              </button>
              
              <button
                onClick={() => setViewMode('map')}
                className={`flex items-center space-x-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  viewMode === 'map'
                    ? 'bg-amber-400 text-blue-950 shadow-md'
                    : 'text-slate-300 hover:text-white hover:bg-slate-700/60'
                }`}
              >
                <Map className="w-3.5 h-3.5" />
                <span>Campus Map</span>
              </button>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* VIEW MODE 1: LIVE 360° IMMERSIVE TOUR EMBEDDED VR VIEWER                  */}
        {/* ========================================================================= */}
        {viewMode === 'liveTour' && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="bg-slate-950 rounded-3xl border border-slate-800 overflow-hidden shadow-2xl flex flex-col">
              
              {/* Live Tour Controls Header */}
              <div className="bg-slate-900/90 border-b border-slate-800 p-4 px-6 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-amber-400 text-blue-950 rounded-xl font-bold">
                    <Compass className="w-5 h-5 animate-spin" style={{ animationDuration: '10s' }} />
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="text-[10px] font-black uppercase tracking-wider bg-amber-400/20 text-amber-300 border border-amber-400/30 px-2 py-0.5 rounded">
                        Live 360° VR Viewport
                      </span>
                      <span className="text-xs text-blue-200 hidden sm:inline">
                        11-Acre Jnana Gangotri Campus
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-black text-white leading-tight mt-0.5">
                      Interactive Official Campus Walkthrough
                    </h3>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  {onOpenVirtualTourModal && (
                    <button
                      onClick={onOpenVirtualTourModal}
                      className="px-4 py-2 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-blue-950 rounded-xl text-xs font-black shadow-md flex items-center space-x-1.5 cursor-pointer"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>Open Fullscreen Popup</span>
                    </button>
                  )}
                  
                  <a
                    href={COLLEGE_INFO.virtualTourUrl || 'https://www.immersivetourz.com/bitm/index.html'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-bold border border-slate-700 flex items-center space-x-1.5 cursor-pointer"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
                    <span>Open in New Tab</span>
                  </a>
                </div>
              </div>

              {/* Embedded Iframe */}
              <div className="relative w-full h-[600px] bg-slate-950">
                <iframe
                  src={COLLEGE_INFO.virtualTourUrl || 'https://www.immersivetourz.com/bitm/index.html'}
                  title="BITM Ballari Official 360 Virtual Tour"
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; xr-spatial-tracking; fullscreen"
                  allowFullScreen
                />
              </div>

              {/* Helper strip */}
              <div className="bg-slate-900/80 p-3 px-6 border-t border-slate-800 text-xs text-slate-300 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center space-x-2">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>Use mouse or touchscreen to look 360° around all engineering labs and sports fields.</span>
                </div>
                <div className="text-[11px] text-slate-400">
                  Direct Portal: <strong className="text-amber-300">immersivetourz.com/bitm</strong>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW MODE 2: 11-ACRE JNANA GANGOTRI CAMPUS MAP WITH PINS                  */}
        {/* ========================================================================= */}
        {viewMode === 'map' && (
          <div className="bg-slate-800/90 rounded-3xl border border-slate-700/60 p-6 sm:p-8 shadow-2xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 pb-4 border-b border-slate-700/60 gap-4">
              <div>
                <h3 className="text-xl font-bold text-white flex items-center space-x-2">
                  <Map className="w-5 h-5 text-amber-400" />
                  <span>Jnana Gangotri Campus Master Layout & Tour Radar</span>
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Click any hotspot location pin on the 11-acre campus master plan to launch interactive 360-degree VR tour.
                </p>
              </div>

              <div className="flex items-center space-x-2 text-xs text-slate-300 bg-slate-900/80 px-3 py-1.5 rounded-xl border border-slate-700">
                <span className="w-3 h-3 bg-amber-400 rounded-full animate-pulse" />
                <span>8 Key Interactive Campus Zones</span>
              </div>
            </div>

            {/* Campus Layout Canvas Graphic */}
            <div className="relative w-full h-96 sm:h-[480px] bg-slate-950 rounded-2xl border border-slate-700/80 overflow-hidden">
              
              {/* Campus Grid Background Graphic */}
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px]" />
              
              {/* Stylized Campus Road Arteries */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
                <path d="M 50% 0 L 50% 100%" stroke="#f59e0b" strokeWidth="4" strokeDasharray="8 6" />
                <path d="M 0 50% L 100% 50%" stroke="#38bdf8" strokeWidth="3" />
                <circle cx="50%" cy="50%" r="90" fill="none" stroke="#60a5fa" strokeWidth="2" strokeDasharray="4 4" />
                <circle cx="50%" cy="50%" r="160" fill="none" stroke="#64748b" strokeWidth="1.5" />
              </svg>

              {/* Campus Zones Annotations */}
              <div className="absolute top-4 left-6 text-[11px] font-bold text-amber-400/80 uppercase tracking-wider pointer-events-none">
                ↑ Ballari - Hosapete National Highway Entrance
              </div>
              <div className="absolute bottom-4 right-6 text-[11px] font-bold text-emerald-400/80 uppercase tracking-wider pointer-events-none">
                ↓ 11-Acre Athletics & Sports Stadium Zone
              </div>

              {/* Interactive Location Pins */}
              {VIRTUAL_TOUR_SPOTS.map((spot, idx) => {
                const isSelected = activeSpot.id === spot.id;
                return (
                  <div
                    key={spot.id}
                    className="absolute z-20 transform -translate-x-1/2 -translate-y-1/2 group"
                    style={{
                      left: `${spot.mapCoords.x}%`,
                      top: `${spot.mapCoords.y}%`
                    }}
                  >
                    <button
                      onClick={() => handleSelectSpot(spot)}
                      className={`relative p-2 rounded-2xl shadow-2xl transition-all duration-200 cursor-pointer flex items-center space-x-1.5 ${
                        isSelected 
                          ? 'bg-amber-400 text-blue-950 scale-125 ring-4 ring-amber-400/50 z-30' 
                          : 'bg-slate-900/90 text-white border border-slate-700 hover:bg-blue-600 hover:border-blue-400 hover:scale-110'
                      }`}
                    >
                      <span className="w-5 h-5 rounded-lg bg-blue-950 text-amber-400 flex items-center justify-center text-[10px] font-black">
                        {idx + 1}
                      </span>
                      <span className="text-xs font-bold hidden sm:inline max-w-[120px] truncate">
                        {spot.name.split('&')[0]}
                      </span>
                    </button>

                    {/* Hover Mini Preview Card */}
                    <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-3 w-56 bg-slate-900 p-2.5 rounded-xl border border-amber-400/40 shadow-2xl opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-40">
                      <span className="text-[10px] font-bold text-amber-400 uppercase">{spot.category}</span>
                      <h5 className="text-xs font-bold text-white line-clamp-1">{spot.name}</h5>
                      <span className="text-[10px] text-blue-300 font-semibold block mt-1">Click to launch 360° VR Tour →</span>
                    </div>
                  </div>
                );
              })}

            </div>

            {/* Map Legend */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-slate-300">
              {VIRTUAL_TOUR_SPOTS.map((s, i) => (
                <div 
                  key={s.id}
                  onClick={() => handleSelectSpot(s)}
                  className="p-2.5 bg-slate-900/60 hover:bg-slate-900 rounded-xl border border-slate-800 flex items-center space-x-2 cursor-pointer transition-colors"
                >
                  <span className="w-5 h-5 rounded bg-amber-400 text-blue-950 flex items-center justify-center font-black text-[10px] flex-shrink-0">
                    {i + 1}
                  </span>
                  <div className="truncate">
                    <span className="font-bold text-white block truncate">{s.name}</span>
                    <span className="text-[10px] text-slate-400">{s.category}</span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        )}

        {/* Quick Help & Campus Admissions Strip */}
        <div className="mt-12 p-6 bg-gradient-to-r from-blue-950 via-slate-900 to-blue-950 rounded-3xl border border-blue-800/40 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-amber-400 text-blue-950 rounded-2xl flex-shrink-0">
              <Camera className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">Experience BITM in Person at Ballari</h4>
              <p className="text-xs text-slate-300 mt-0.5">
                Visit the Jnana Gangotri campus for guided laboratory tours, hostel inspections, and counseling sessions.
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3 flex-shrink-0">
            <a
              href={`tel:${COLLEGE_INFO.admissionHelpline.split('/')[0].trim()}`}
              className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-bold border border-slate-700 transition-colors"
            >
              Schedule Campus Visit
            </a>
            {onOpenAdmissions && (
              <button
                onClick={onOpenAdmissions}
                className="px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-blue-950 rounded-xl text-xs font-black shadow-lg transition-all cursor-pointer"
              >
                Apply for 2026-27
              </button>
            )}
          </div>
        </div>

      </div>

    </section>
  );
};
