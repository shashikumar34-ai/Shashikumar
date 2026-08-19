import React, { useState, useEffect } from 'react';
import { 
  GraduationCap, 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  ChevronDown, 
  Sparkles, 
  FileText, 
  Bell, 
  BookOpen, 
  Calculator,
  ShieldCheck,
  Building2,
  Users,
  Award,
  Bot
} from 'lucide-react';
import { COLLEGE_INFO } from '../data/mockData';
import { BitmLogo } from './BitmLogo';

interface HeaderProps {
  onOpenAdmissions: () => void;
  onOpenNotices: () => void;
  onOpenGallery: () => void;
  onOpenAi?: () => void;
  onOpenVirtualTour?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  onOpenAdmissions, 
  onOpenNotices,
  onOpenGallery,
  onOpenAi,
  onOpenVirtualTour
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [programsDropdown, setProgramsDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Programs', href: '#programs' },
    { label: 'Placements', href: '#placements' },
    { label: '360° Tour', href: '#virtual-tour', isHighlighted: true },
    { label: 'Campus Life', href: '#campus' },
    { label: 'Eligibility', href: '#calculator' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Notification / Quick Contact Bar */}
      <div className="bg-[#002244] text-slate-200 text-xs py-1.5 border-b border-blue-900/60 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-1.5 text-amber-300 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>KCET Code: {COLLEGE_INFO.kcetCode}</span>
              <span className="text-slate-500">|</span>
              <span>COMED-K: {COLLEGE_INFO.comedkCode}</span>
              <span className="text-slate-500">|</span>
              <span className="bg-amber-400 text-blue-950 px-1.5 py-0.5 rounded font-bold text-[10px]">NAAC A+</span>
            </div>
            <div className="flex items-center space-x-1 text-slate-300">
              <MapPin className="w-3 h-3 text-amber-400" />
              <span>Jnana Gangotri Campus, Ballari</span>
            </div>
          </div>

          <div className="flex items-center space-x-5">
            <button 
              onClick={onOpenNotices}
              className="flex items-center space-x-1 text-amber-300 hover:text-white transition-colors cursor-pointer"
            >
              <Bell className="w-3 h-3 animate-pulse text-amber-400" />
              <span>Circulars & Exam Updates</span>
            </button>
            <span className="text-slate-600">|</span>
            <a 
              href="tel:+918392237100" 
              className="flex items-center space-x-1 hover:text-amber-300 transition-colors"
            >
              <Phone className="w-3 h-3 text-amber-400" />
              <span>{COLLEGE_INFO.phone}</span>
            </a>
            <span className="text-slate-600">|</span>
            <a 
              href={`mailto:${COLLEGE_INFO.email}`} 
              className="flex items-center space-x-1 hover:text-amber-300 transition-colors"
            >
              <Mail className="w-3 h-3 text-amber-400" />
              <span>{COLLEGE_INFO.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav 
        id="main-navbar"
        className={`transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#003366]/95 backdrop-blur-md shadow-xl py-2.5 border-b border-blue-800' 
            : 'bg-[#003366] shadow-lg py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo Brand */}
            <a 
              id="brand-logo-link"
              href="#home" 
              className="flex items-center space-x-3 group flex-shrink-0"
            >
              <BitmLogo size="md" className="flex-shrink-0" />
              <div className="flex flex-col flex-shrink-0">
                <div className="flex items-center space-x-2">
                  <span className="text-white font-extrabold text-xl tracking-tight leading-none group-hover:text-amber-300 transition-colors">
                    BITM BALLARI
                  </span>
                  <span className="bg-amber-400/20 text-amber-300 border border-amber-400/30 text-[10px] px-1.5 py-0.5 rounded font-semibold hidden sm:inline-block">
                    ESTD. 1997
                  </span>
                </div>
                <span className="text-blue-200 text-xs font-normal tracking-wide hidden sm:block">
                  Ballari Institute of Technology & Management (VTU Affiliated)
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-200 ${
                    link.isHighlighted
                      ? 'text-amber-300 bg-amber-400/15 border border-amber-400/30 hover:bg-amber-400/25'
                      : 'text-slate-100 hover:text-amber-300 hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Desktop Action Buttons */}
            <div className="hidden sm:flex items-center space-x-2.5">
              {onOpenAi && (
                <button
                  id="btn-nav-ai"
                  onClick={onOpenAi}
                  className="px-3 py-1.5 text-xs font-bold text-amber-300 hover:text-white bg-blue-950/90 hover:bg-blue-900 border border-amber-400/50 hover:border-amber-400 rounded-lg transition-all shadow-md flex items-center space-x-1.5 cursor-pointer group"
                  title="Ask ASSRKS AI Academic & Admission Counselor"
                >
                  <Bot className="w-3.5 h-3.5 text-amber-400 group-hover:scale-110 transition-transform" />
                  <span>Ask ASSRKS</span>
                  <span className="bg-amber-400 text-blue-950 text-[9px] font-black px-1 rounded-sm uppercase tracking-tighter">AI</span>
                </button>
              )}

              <button
                id="btn-nav-notices"
                onClick={onOpenNotices}
                className="relative p-2 text-slate-200 hover:text-amber-300 hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
                title="View Announcements & Circulars"
              >
                <Bell className="w-5 h-5" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-amber-400 rounded-full ring-2 ring-[#003366]" />
              </button>

              {onOpenVirtualTour ? (
                <button
                  id="btn-nav-360-tour"
                  onClick={onOpenVirtualTour}
                  className="px-3 py-2 text-xs font-bold text-amber-300 bg-gradient-to-r from-blue-950 to-blue-900 hover:from-blue-900 hover:to-blue-850 border border-amber-400/40 hover:border-amber-400 rounded-lg transition-all shadow-sm flex items-center space-x-1.5 cursor-pointer group"
                  title="Launch Interactive 360° Virtual Campus Tour"
                >
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping group-hover:bg-amber-300" />
                  <span>360° VR Tour</span>
                </button>
              ) : (
                <button
                  id="btn-nav-gallery"
                  onClick={onOpenGallery}
                  className="px-3.5 py-2 text-xs font-semibold text-white bg-blue-900/80 hover:bg-blue-800 border border-blue-700/60 rounded-lg transition-all shadow-sm cursor-pointer"
                >
                  Campus Tour
                </button>
              )}

              <button
                id="btn-nav-apply"
                onClick={onOpenAdmissions}
                className="px-4 py-2 text-xs font-bold text-blue-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-lg transition-all transform hover:-translate-y-0.5 shadow-md flex items-center space-x-1.5 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Admissions 2026</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center space-x-2 lg:hidden">
              <button
                onClick={onOpenAdmissions}
                className="px-3 py-1.5 text-xs font-bold text-blue-950 bg-amber-400 rounded-md shadow-sm sm:hidden"
              >
                Apply
              </button>
              <button
                id="btn-mobile-toggle"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-200 hover:text-white hover:bg-white/10 focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#002244] border-t border-blue-900 px-4 pt-3 pb-6 space-y-2 text-white shadow-2xl">
            <div className="py-2 border-b border-blue-800/80 text-xs text-amber-300 flex justify-between items-center">
              <span>KCET: {COLLEGE_INFO.kcetCode} | COMEDK: {COLLEGE_INFO.comedkCode}</span>
              <span className="bg-amber-400 text-blue-950 font-bold px-1.5 py-0.5 rounded text-[10px]">NAAC A+</span>
            </div>

            <div className="grid grid-cols-2 gap-2 py-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-medium text-slate-200 hover:text-amber-300 hover:bg-blue-900/60 rounded-md"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-blue-900 grid grid-cols-2 gap-3">
              {onOpenAi && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAi();
                  }}
                  className="col-span-2 w-full py-2.5 text-xs font-bold text-amber-300 bg-blue-950 hover:bg-blue-900 border border-amber-400/40 rounded-lg flex items-center justify-center space-x-1.5 shadow-md"
                >
                  <Bot className="w-4 h-4 text-amber-400" />
                  <span>Ask ASSRKS AI Academic Counselor</span>
                </button>
              )}

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenNotices();
                }}
                className="w-full py-2.5 text-xs font-semibold bg-blue-900 hover:bg-blue-800 rounded-lg flex items-center justify-center space-x-1.5"
              >
                <Bell className="w-3.5 h-3.5 text-amber-400" />
                <span>Notice Board</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenGallery();
                }}
                className="w-full py-2.5 text-xs font-semibold bg-blue-900 hover:bg-blue-800 rounded-lg flex items-center justify-center space-x-1.5"
              >
                <Building2 className="w-3.5 h-3.5 text-amber-400" />
                <span>Campus Tour</span>
              </button>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAdmissions();
              }}
              className="w-full mt-3 py-3 text-sm font-bold text-blue-950 bg-amber-400 hover:bg-amber-300 rounded-lg flex items-center justify-center space-x-2 shadow-lg"
            >
              <Sparkles className="w-4 h-4" />
              <span>Apply for Admissions 2026-27</span>
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};
