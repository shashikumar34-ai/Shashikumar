import React, { useState, useRef } from 'react';
import { 
  X, 
  Compass, 
  ExternalLink, 
  Maximize2, 
  Minimize2, 
  RefreshCw, 
  Sparkles, 
  Phone, 
  FileText, 
  Building2, 
  MapPin, 
  CheckCircle2, 
  Layers, 
  Volume2, 
  ShieldCheck,
  Eye
} from 'lucide-react';
import { COLLEGE_INFO } from '../data/mockData';
import { BitmLogo } from './BitmLogo';

interface VirtualTourModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenAdmissions?: () => void;
  onOpenBrochure?: () => void;
}

const TOUR_LOCATIONS = [
  { name: 'Campus Main Entrance', tag: 'Jnana Gangotri Highway Gate' },
  { name: 'Administrative & Academic Block', tag: 'Dean & Director Offices' },
  { name: 'Central Library & Digital Archives', tag: '80,000+ Volumes & IEEE' },
  { name: 'K-Tech NAIN Startup Fab Lab', tag: 'Govt. of Karnataka Incubation' },
  { name: 'NVIDIA GPU & AI Labs', tag: 'High-Performance Workstations' },
  { name: '800-Seat Auditorium', tag: 'Air-Conditioned Cultural Hall' },
  { name: 'Athletics & Sports Stadium', tag: 'Cricket, Basketball, Gym' },
  { name: 'Residential Hostels & Mess', tag: 'Boys & Girls Secure Hostels' },
];

export const VirtualTourModal: React.FC<VirtualTourModalProps> = ({
  isOpen,
  onClose,
  onOpenAdmissions,
  onOpenBrochure,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [iframeKey, setIframeKey] = useState(0);
  const modalContainerRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  const tourUrl = COLLEGE_INFO.virtualTourUrl || 'https://www.immersivetourz.com/bitm/index.html';

  const toggleFullscreen = () => {
    if (!modalContainerRef.current) return;
    if (!document.fullscreenElement) {
      modalContainerRef.current.requestFullscreen().then(() => {
        setIsFullscreen(true);
      }).catch(() => {
        setIsFullscreen(true);
      });
    } else {
      document.exitFullscreen().then(() => {
        setIsFullscreen(false);
      }).catch(() => {
        setIsFullscreen(false);
      });
    }
  };

  const handleRefresh = () => {
    setIsLoading(true);
    setIframeKey((prev) => prev + 1);
  };

  return (
    <div 
      id="virtual-tour-modal-backdrop"
      className="fixed inset-0 z-50 overflow-hidden bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 animate-in fade-in duration-200"
    >
      <div 
        ref={modalContainerRef}
        className={`relative bg-slate-900 w-full ${
          isFullscreen 
            ? 'h-screen max-w-none rounded-none' 
            : 'max-w-7xl h-[92vh] max-h-[950px] rounded-3xl'
        } shadow-2xl border border-slate-700/80 overflow-hidden flex flex-col transition-all duration-300`}
      >
        
        {/* Top Header Bar */}
        <div className="bg-gradient-to-r from-[#001f3f] via-[#002b5c] to-[#001529] text-white px-4 sm:px-6 py-3.5 border-b border-blue-800/60 flex items-center justify-between flex-shrink-0 z-20">
          
          <div className="flex items-center space-x-3 min-w-0">
            <BitmLogo size="sm" />
            
            <div className="truncate">
              <div className="flex items-center space-x-2">
                <span className="text-xs sm:text-sm font-black text-white tracking-tight truncate">
                  BITM 360° Interactive Virtual Campus Tour
                </span>
                <span className="bg-amber-400 text-blue-950 font-black text-[9px] sm:text-[10px] px-1.5 py-0.5 rounded uppercase tracking-wider hidden sm:inline-block">
                  Live 360° VR
                </span>
                <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-[9px] sm:text-[10px] px-1.5 py-0.5 rounded font-semibold hidden md:inline-block">
                  11+ Acres Campus
                </span>
              </div>
              <p className="text-[11px] text-blue-200 truncate hidden sm:block">
                Official high-definition 360-degree panoramic walkthrough powered by ImmersiveTourz
              </p>
            </div>
          </div>

          {/* Header Controls */}
          <div className="flex items-center space-x-1.5 sm:space-x-2 flex-shrink-0">
            <button
              onClick={handleRefresh}
              className="p-2 text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700 rounded-xl transition-colors cursor-pointer"
              title="Reload 360 Tour"
            >
              <RefreshCw className="w-4 h-4" />
            </button>

            <a
              href={tourUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center space-x-1.5 px-3 py-1.5 bg-blue-900/80 hover:bg-blue-800 text-white rounded-xl text-xs font-bold border border-blue-700/60 transition-colors shadow-sm"
              title="Open Tour in Full Tab"
            >
              <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
              <span>Open in New Tab</span>
            </a>

            <button
              onClick={toggleFullscreen}
              className="p-2 text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700 rounded-xl transition-colors cursor-pointer hidden md:block"
              title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
            >
              {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>

            <button
              id="btn-close-virtual-tour-modal"
              onClick={onClose}
              className="p-2 text-slate-300 hover:text-white hover:bg-rose-600/80 rounded-xl transition-colors cursor-pointer ml-1"
              aria-label="Close 360 Tour Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

        </div>

        {/* Location Jump Pills Bar */}
        <div className="bg-slate-950/90 border-b border-slate-800 px-4 py-2 flex items-center space-x-2 overflow-x-auto scrollbar-thin scrollbar-thumb-slate-700 flex-shrink-0">
          <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-400 whitespace-nowrap flex items-center space-x-1 pr-2 border-r border-slate-800">
            <Eye className="w-3 h-3" />
            <span>Featured Spots:</span>
          </span>
          
          {TOUR_LOCATIONS.map((loc, i) => (
            <div
              key={i}
              className="px-2.5 py-1 bg-slate-900/90 text-slate-300 hover:text-white hover:bg-blue-950 border border-slate-800 hover:border-amber-400/40 rounded-lg text-[11px] font-medium whitespace-nowrap transition-colors flex items-center space-x-1.5 select-none"
              title={loc.tag}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span>{loc.name}</span>
            </div>
          ))}
        </div>

        {/* 360 Iframe Virtual Tour Main Viewport */}
        <div className="relative flex-grow bg-slate-950 overflow-hidden w-full">
          
          {/* Loading Overlay */}
          {isLoading && (
            <div className="absolute inset-0 z-10 bg-slate-950 flex flex-col items-center justify-center p-6 text-center">
              <div className="relative w-16 h-16 mb-4">
                <div className="w-16 h-16 rounded-full border-4 border-slate-800 border-t-amber-400 animate-spin" />
                <Compass className="w-7 h-7 text-amber-400 absolute inset-0 m-auto animate-pulse" />
              </div>
              <h4 className="text-white font-bold text-base sm:text-lg">
                Loading BITM 360° Virtual Campus Experience...
              </h4>
              <p className="text-xs text-slate-400 mt-1.5 max-w-md">
                Connecting to immersive panoramic servers. You can drag to rotate 360°, zoom into labs, and click hotspots to navigate buildings.
              </p>
              <div className="mt-4 flex items-center space-x-2 text-[11px] text-amber-400 font-semibold bg-amber-400/10 px-3 py-1.5 rounded-full border border-amber-400/30">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Tip: Click and drag anywhere inside the tour to look in any direction</span>
              </div>
            </div>
          )}

          {/* Embedded 360 Tour Iframe */}
          <iframe
            key={iframeKey}
            src={tourUrl}
            title="BITM Ballari Official 360 Virtual Tour"
            className="w-full h-full border-0 relative z-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; xr-spatial-tracking; fullscreen"
            allowFullScreen
            onLoad={() => setIsLoading(false)}
          />

          {/* Floating Instructions Helper on Bottom Left */}
          <div className="absolute bottom-3 left-3 z-10 bg-slate-950/85 backdrop-blur-md border border-slate-700/70 text-slate-300 text-[11px] px-3 py-1.5 rounded-xl shadow-lg pointer-events-none hidden sm:flex items-center space-x-2">
            <Compass className="w-3.5 h-3.5 text-amber-400" />
            <span>Click & Drag to Look 360° • Scroll / Pinch to Zoom</span>
          </div>

        </div>

        {/* Modal Bottom Action Strip */}
        <div className="bg-[#001f3f] text-slate-200 px-4 sm:px-6 py-3 border-t border-blue-900/60 flex flex-col sm:flex-row items-center justify-between gap-3 flex-shrink-0 z-20">
          
          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-300">
            <div className="flex items-center space-x-1 text-amber-300 font-bold">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>KCET: {COLLEGE_INFO.kcetCode}</span>
              <span className="text-slate-500">•</span>
              <span>COMED-K: {COLLEGE_INFO.comedkCode}</span>
            </div>
            
            <a 
              href={`tel:${COLLEGE_INFO.admissionHelpline.split('/')[0].trim()}`}
              className="flex items-center space-x-1 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>Helpline: {COLLEGE_INFO.admissionHelpline.split('/')[0].trim()}</span>
            </a>
          </div>

          <div className="flex items-center space-x-2 w-full sm:w-auto justify-end">
            {onOpenBrochure && (
              <button
                onClick={() => {
                  onClose();
                  onOpenBrochure();
                }}
                className="px-3.5 py-2 bg-blue-900 hover:bg-blue-800 text-white font-semibold rounded-xl text-xs flex items-center space-x-1.5 transition-colors cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5 text-amber-400" />
                <span className="hidden sm:inline">Brochure PDF</span>
                <span className="sm:hidden">Brochure</span>
              </button>
            )}

            {onOpenAdmissions && (
              <button
                onClick={() => {
                  onClose();
                  onOpenAdmissions();
                }}
                className="px-4 py-2 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-blue-950 font-black rounded-xl text-xs flex items-center space-x-1.5 shadow-lg transition-all cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Apply Admissions 2026</span>
              </button>
            )}

            <button
              onClick={onClose}
              className="px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-xl text-xs font-semibold transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
