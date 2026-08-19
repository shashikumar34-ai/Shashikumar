import React, { useState } from 'react';
import { 
  Building2, 
  BookOpen, 
  FlaskConical, 
  Home, 
  Lightbulb, 
  Trophy, 
  CheckCircle2, 
  Trees, 
  Sparkles,
  Camera
} from 'lucide-react';
import { CAMPUS_FACILITIES } from '../data/mockData';
import { Facility } from '../types';

interface CampusFacilitiesProps {
  onOpenGallery: () => void;
  onOpenVirtualTour?: () => void;
}

export const CampusFacilities: React.FC<CampusFacilitiesProps> = ({ onOpenGallery, onOpenVirtualTour }) => {
  const [selectedFacility, setSelectedFacility] = useState<Facility>(CAMPUS_FACILITIES[0]);

  return (
    <section id="campus" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-[#003366] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Trees className="w-3.5 h-3.5 text-emerald-600" />
            <span>World-Class Infrastructure</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Campus Life & <span className="text-[#003366]">Facilities</span>
          </h2>
          <div className="w-20 h-1.5 bg-amber-400 mx-auto mt-3 mb-4 rounded-full" />
          <p className="text-slate-600 text-base sm:text-lg">
            Nestled on 11+ acres of lush greenery, BITM combines scenic academic tranquility with high-tech laboratories, modern residential halls, and sports arenas.
          </p>
        </div>

        {/* Facilities Interactive Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Facility List Selector (Left) */}
          <div className="lg:col-span-5 space-y-3">
            {CAMPUS_FACILITIES.map((fac) => {
              const isSelected = selectedFacility.id === fac.id;
              return (
                <button
                  key={fac.id}
                  onClick={() => setSelectedFacility(fac)}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between cursor-pointer ${
                    isSelected 
                      ? 'bg-[#003366] text-white border-[#003366] shadow-lg shadow-blue-950/15 transform translate-x-1' 
                      : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-800'
                  }`}
                >
                  <div>
                    <div className={`text-xs font-bold uppercase tracking-wider ${isSelected ? 'text-amber-400' : 'text-blue-900'}`}>
                      {fac.category}
                    </div>
                    <div className="font-bold text-sm sm:text-base mt-0.5">{fac.title}</div>
                    <div className={`text-xs mt-1 line-clamp-1 ${isSelected ? 'text-blue-200' : 'text-slate-500'}`}>
                      {fac.stats}
                    </div>
                  </div>
                  <Sparkles className={`w-4 h-4 flex-shrink-0 ${isSelected ? 'text-amber-400' : 'text-slate-400'}`} />
                </button>
              );
            })}

            <button
              onClick={onOpenGallery}
              className="w-full mt-4 py-3 bg-amber-400 hover:bg-amber-300 text-blue-950 font-bold rounded-xl text-xs sm:text-sm shadow-md transition-all flex items-center justify-center space-x-2 cursor-pointer"
            >
              <Camera className="w-4 h-4" />
              <span>Explore High-Resolution Campus Photo Gallery</span>
            </button>
          </div>

          {/* Active Facility Spotlight (Right) */}
          <div className="lg:col-span-7 bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden shadow-md">
            <div className="relative h-64 sm:h-80 overflow-hidden">
              <img 
                src={selectedFacility.image} 
                alt={selectedFacility.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                <div className="text-white">
                  <span className="bg-amber-400 text-blue-950 text-[10px] font-black uppercase px-2 py-0.5 rounded">
                    {selectedFacility.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold mt-1">{selectedFacility.title}</h3>
                  <p className="text-xs text-amber-200 mt-0.5 font-medium">{selectedFacility.stats}</p>
                </div>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <p className="text-slate-700 text-sm leading-relaxed">
                {selectedFacility.fullDesc}
              </p>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">Key Infrastructure Highlights</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedFacility.features.map((feat, i) => (
                    <div key={i} className="flex items-start space-x-2 text-xs text-slate-600 bg-white p-2.5 rounded-lg border border-slate-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 360 Tour Quick Promo Banner */}
        <div className="bg-gradient-to-r from-[#002244] via-[#003366] to-[#002244] text-white p-6 sm:p-8 rounded-3xl border border-blue-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="w-14 h-14 bg-amber-400 text-blue-950 rounded-2xl flex items-center justify-center font-black text-xl shadow-lg flex-shrink-0">
              360°
            </div>
            <div>
              <span className="text-amber-400 text-xs font-bold uppercase tracking-wider block">
                Virtual Reality Experience
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Take an Interactive 360° Virtual Walkthrough
              </h3>
              <p className="text-xs sm:text-sm text-blue-200 mt-1 max-w-xl">
                Explore our Central Library, AI & GPU Research Lab, 800-seat Auditorium, NAIN Startup Fab Lab, and 11-acre sports ground right from your device.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 flex-shrink-0 w-full md:w-auto">
            {onOpenVirtualTour && (
              <button
                onClick={onOpenVirtualTour}
                className="w-full md:w-auto px-6 py-3.5 bg-amber-400 hover:bg-amber-300 text-blue-950 font-black text-xs sm:text-sm rounded-xl shadow-lg transition-all text-center cursor-pointer flex items-center justify-center space-x-2"
              >
                <span>Pop Full 360° Live Tour</span>
                <Sparkles className="w-4 h-4" />
              </button>
            )}
            <a
              href="#virtual-tour"
              className="w-full md:w-auto px-5 py-3.5 bg-blue-900/80 hover:bg-blue-800 text-white font-bold text-xs sm:text-sm rounded-xl border border-blue-700/80 transition-all text-center cursor-pointer flex items-center justify-center space-x-2"
            >
              <span>View Interactive Stage</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
