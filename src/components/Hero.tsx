import React from 'react';
import { 
  ShieldCheck, 
  Award, 
  Sparkles, 
  Download, 
  ArrowRight, 
  CheckCircle2, 
  TrendingUp, 
  Building2, 
  Trees, 
  Users, 
  Compass,
  PlayCircle,
  Bot
} from 'lucide-react';
import { COLLEGE_INFO, QUICK_STATS } from '../data/mockData';
import { BitmLogo } from './BitmLogo';

interface HeroProps {
  onOpenAdmissions: () => void;
  onOpenGallery: () => void;
  onOpenNotices: () => void;
  onDownloadBrochure?: () => void;
  onOpenAi?: () => void;
  onOpenVirtualTour?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  onOpenAdmissions, 
  onOpenGallery,
  onOpenNotices,
  onDownloadBrochure,
  onOpenAi,
  onOpenVirtualTour
}) => {
  return (
    <div id="home" className="relative pt-24 md:pt-28 bg-[#001f3f] overflow-hidden">
      
      {/* Background Graphic & High-Res Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-30 transform scale-105 transition-transform duration-1000"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1920&q=80')`
        }}
      />
      
      {/* Dynamic Gradient Shading */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#001f3f] via-[#002b5c]/90 to-[#001f3f]/80 z-0" />
      
      {/* Subtle grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-10 z-0 pointer-events-none" 
        style={{
          backgroundImage: `radial-gradient(#ffcc00 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20 lg:py-24 text-white">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Headline & Action Triggers */}
          <div className="lg:col-span-7">
            {/* Accreditation Pill Badges */}
            <div className="flex flex-wrap items-center gap-2.5 mb-5">
              <span className="inline-flex items-center space-x-1.5 bg-amber-400 text-blue-950 px-3 py-1 rounded-full text-xs font-black shadow-sm tracking-wide uppercase">
                <Award className="w-3.5 h-3.5" />
                <span>NAAC 'A+' Accredited</span>
              </span>
              <span className="inline-flex items-center space-x-1.5 bg-blue-900/90 text-blue-200 border border-blue-700/80 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>NBA Accredited Programs</span>
              </span>
              <span className="inline-flex items-center space-x-1.5 bg-blue-900/90 text-blue-200 border border-blue-700/80 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm hidden sm:inline-flex">
                <span>Affiliated to VTU, Belagavi</span>
              </span>
              <span className="inline-flex items-center space-x-1.5 bg-blue-900/90 text-amber-300 border border-blue-700/80 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping mr-1" />
                <span>Admissions Open 2026-27</span>
              </span>
            </div>

            {/* Main Hero Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] mb-4">
              Ballari Institute of <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-200">
                Technology & Management
              </span>
            </h1>

            <p className="text-base sm:text-lg text-blue-100/90 font-normal max-w-2xl leading-relaxed mb-6">
              Pioneering excellence in Engineering, Artificial Intelligence, Management, and Doctoral Research since 1997. Transforming ambitious minds on an 11-acre lush green Jnana Gangotri campus.
            </p>

            {/* Quick Highlights Bullet Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-8 max-w-2xl text-xs sm:text-sm text-blue-200">
              <div className="flex items-center space-x-2 bg-blue-950/40 p-2 rounded-lg border border-blue-800/40">
                <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Highest: <strong className="text-white">27.7 LPA</strong></span>
              </div>
              <div className="flex items-center space-x-2 bg-blue-950/40 p-2 rounded-lg border border-blue-800/40">
                <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>KCET Code: <strong className="text-white">E037</strong></span>
              </div>
              <div className="flex items-center space-x-2 bg-blue-950/40 p-2 rounded-lg border border-blue-800/40">
                <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>K-Tech <strong className="text-white">NAIN Hub</strong></span>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-3.5">
              <button
                id="hero-apply-btn"
                onClick={onOpenAdmissions}
                className="px-5 py-3 text-sm sm:text-base font-bold text-blue-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-xl transition-all duration-200 shadow-xl shadow-amber-400/20 flex items-center space-x-2 transform hover:-translate-y-0.5 cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>Apply for Admissions 2026</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {onOpenAi && (
                <button
                  id="hero-ai-btn"
                  onClick={onOpenAi}
                  className="px-4 py-3 text-sm font-bold text-amber-300 bg-blue-950/90 hover:bg-blue-900 border border-amber-400/60 hover:border-amber-400 rounded-xl transition-all duration-200 shadow-lg backdrop-blur-sm flex items-center space-x-2 transform hover:-translate-y-0.5 cursor-pointer group"
                  title="Ask ASSRKS AI Academic & Admissions Counselor"
                >
                  <Bot className="w-4 h-4 text-amber-400 group-hover:rotate-12 transition-transform" />
                  <span>Ask ASSRKS AI</span>
                  <span className="bg-amber-400 text-blue-950 text-[9px] font-black px-1 py-0.2 rounded uppercase">AI</span>
                </button>
              )}

              {onDownloadBrochure && (
                <button
                  id="hero-brochure-btn"
                  onClick={onDownloadBrochure}
                  className="px-4 py-3 text-sm font-bold text-white bg-blue-900/90 hover:bg-blue-800 border border-slate-700 hover:border-amber-400/50 rounded-xl transition-all duration-200 backdrop-blur-sm flex items-center space-x-2 transform hover:-translate-y-0.5 cursor-pointer group"
                  title="Download complete PDF course brochure"
                >
                  <Download className="w-4 h-4 text-amber-400 group-hover:translate-y-0.5 transition-transform" />
                  <span>Brochure (PDF)</span>
                </button>
              )}

              <button
                id="hero-virtual-tour-btn"
                onClick={onOpenVirtualTour || onOpenGallery}
                className="px-4 py-3 text-sm font-semibold text-amber-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-amber-400/30 hover:border-amber-400 rounded-xl transition-all duration-200 backdrop-blur-sm flex items-center space-x-2 cursor-pointer shadow-md group"
                title="Launch BITM 360° Interactive Campus Virtual Tour"
              >
                <Compass className="w-4 h-4 text-amber-400 group-hover:rotate-45 transition-transform" />
                <span>360° Virtual Tour</span>
                <span className="bg-amber-400 text-blue-950 text-[9px] font-black px-1 py-0.2 rounded uppercase">VR</span>
              </button>
            </div>
          </div>

          {/* Right Column: Campus Collage Showcase */}
          <div className="lg:col-span-5">
            <div className="bg-blue-950/80 border-2 border-amber-400/30 rounded-3xl p-4 sm:p-5 shadow-2xl backdrop-blur-md relative overflow-hidden group">
              
              {/* Header inside card */}
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-blue-800/60">
                <div className="flex items-center space-x-2.5">
                  <BitmLogo size="xs" />
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-300">Jnana Gangotri Campus</span>
                </div>
                <button
                  onClick={onOpenGallery}
                  className="text-[11px] font-bold text-blue-200 hover:text-amber-300 flex items-center space-x-1 cursor-pointer"
                >
                  <span>12+ Photos</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>

              {/* 4-Image Collage Grid */}
              <div className="grid grid-cols-2 gap-2.5">
                
                {/* Photo 1: Main Block */}
                <div 
                  onClick={onOpenGallery}
                  className="relative h-28 sm:h-32 rounded-xl overflow-hidden border border-white/10 group/img cursor-pointer"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=600&q=80" 
                    alt="BITM Main Administrative Block" 
                    className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent flex items-end p-2">
                    <span className="text-[10px] font-bold text-white leading-tight">Main Admin Quadrangle</span>
                  </div>
                </div>

                {/* Photo 2: AI & Computing Lab */}
                <div 
                  onClick={onOpenGallery}
                  className="relative h-28 sm:h-32 rounded-xl overflow-hidden border border-white/10 group/img cursor-pointer"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80" 
                    alt="AI Computing Labs" 
                    className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent flex items-end p-2">
                    <span className="text-[10px] font-bold text-white leading-tight">NVIDIA AI & Cloud Labs</span>
                  </div>
                </div>

                {/* Photo 3: Central Library */}
                <div 
                  onClick={onOpenGallery}
                  className="relative h-28 sm:h-32 rounded-xl overflow-hidden border border-white/10 group/img cursor-pointer"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=600&q=80" 
                    alt="Central Digital Library" 
                    className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent flex items-end p-2">
                    <span className="text-[10px] font-bold text-white leading-tight">Central Digital Library</span>
                  </div>
                </div>

                {/* Photo 4: Sports Arena */}
                <div 
                  onClick={onOpenGallery}
                  className="relative h-28 sm:h-32 rounded-xl overflow-hidden border border-white/10 group/img cursor-pointer"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=600&q=80" 
                    alt="Sports Grounds" 
                    className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent flex items-end p-2">
                    <span className="text-[10px] font-bold text-white leading-tight">Sports Complex & Arena</span>
                  </div>
                </div>

              </div>

              {/* Bottom strip in collage card */}
              <div className="mt-3 pt-2.5 border-t border-blue-800/60 flex items-center justify-between text-xs text-blue-200">
                <span className="flex items-center space-x-1">
                  <Trees className="w-3.5 h-3.5 text-emerald-400" />
                  <span>11-Acre Eco-Campus</span>
                </span>
                <button
                  onClick={onOpenVirtualTour || onOpenGallery}
                  className="text-amber-400 font-bold hover:underline flex items-center space-x-1 cursor-pointer"
                >
                  <PlayCircle className="w-3.5 h-3.5" />
                  <span>Launch 360° Walkthrough</span>
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Floating Stats Bar */}
      <div className="relative z-20 bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-400 text-blue-950 py-5 shadow-2xl border-t-2 border-amber-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-blue-950/15">
            
            <div className="pt-2 md:pt-0">
              <div className="text-2xl lg:text-3xl font-black text-blue-950 tracking-tight">27+</div>
              <div className="text-xs font-bold uppercase tracking-wider text-blue-900">Years Legacy</div>
              <div className="text-[11px] text-blue-950/70 font-medium">Since 1997</div>
            </div>

            <div className="pt-2 md:pt-0">
              <div className="text-2xl lg:text-3xl font-black text-blue-950 tracking-tight">27.7 LPA</div>
              <div className="text-xs font-bold uppercase tracking-wider text-blue-900">Highest Package</div>
              <div className="text-[11px] text-blue-950/70 font-medium">Top MNC Tier</div>
            </div>

            <div className="pt-2 md:pt-0">
              <div className="text-2xl lg:text-3xl font-black text-blue-950 tracking-tight">300+</div>
              <div className="text-xs font-bold uppercase tracking-wider text-blue-900">Annual Recruiters</div>
              <div className="text-[11px] text-blue-950/70 font-medium">Infosys, Wipro, IBM</div>
            </div>

            <div className="pt-2 md:pt-0">
              <div className="text-2xl lg:text-3xl font-black text-blue-950 tracking-tight">6.5 LPA</div>
              <div className="text-xs font-bold uppercase tracking-wider text-blue-900">Average Package</div>
              <div className="text-[11px] text-blue-950/70 font-medium">Across all streams</div>
            </div>

            <div className="pt-2 md:pt-0">
              <div className="text-2xl lg:text-3xl font-black text-blue-950 tracking-tight">11+ Acres</div>
              <div className="text-xs font-bold uppercase tracking-wider text-blue-900">Green Campus</div>
              <div className="text-[11px] text-blue-950/70 font-medium">Wi-Fi & Sports Arena</div>
            </div>

            <div className="pt-2 md:pt-0">
              <div className="text-2xl lg:text-3xl font-black text-blue-950 tracking-tight">16,000+</div>
              <div className="text-xs font-bold uppercase tracking-wider text-blue-900">Global Alumni</div>
              <div className="text-[11px] text-blue-950/70 font-medium">Worldwide Network</div>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};
