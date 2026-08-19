import React from 'react';
import { 
  GraduationCap, 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Award, 
  ExternalLink, 
  Heart, 
  ArrowUp,
  FileText,
  Lock,
  Download,
  Sparkles
} from 'lucide-react';
import { COLLEGE_INFO } from '../data/mockData';
import { BitmLogo } from './BitmLogo';

interface FooterProps {
  onOpenAdmissions: () => void;
  onOpenNotices: () => void;
  onOpenGallery: () => void;
  onDownloadBrochure?: () => void;
  onOpenVirtualTour?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ 
  onOpenAdmissions, 
  onOpenNotices,
  onOpenGallery,
  onDownloadBrochure,
  onOpenVirtualTour
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#111827] text-slate-300 pt-14 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Course Brochure Download Pre-Footer Strip */}
        <div className="mb-12 bg-gradient-to-r from-blue-950 via-[#002b5c] to-blue-950 p-6 sm:p-7 rounded-3xl border border-blue-800/80 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-amber-400 text-blue-950 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg font-black">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-[10px] font-black uppercase tracking-wider bg-amber-400/20 text-amber-300 border border-amber-400/30 px-2 py-0.5 rounded">
                  Official Academic Prospectus 2026-27
                </span>
                <span className="text-xs text-blue-200 hidden sm:inline">• 4-Page Print Ready PDF</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mt-1">
                Download Comprehensive BITM Course Brochure
              </h3>
              <p className="text-xs text-slate-300 mt-0.5 max-w-xl">
                Contains complete curriculum outlines, KCET/COMEDK cutoffs, fee structures, B.E./MBA/MCA intake details, and placement statistics.
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3 flex-shrink-0 w-full md:w-auto">
            {onDownloadBrochure && (
              <button
                id="footer-brochure-btn"
                onClick={onDownloadBrochure}
                className="w-full md:w-auto px-6 py-3.5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-blue-950 font-black text-xs sm:text-sm rounded-xl shadow-lg transition-all flex items-center justify-center space-x-2 cursor-pointer group"
              >
                <Download className="w-4 h-4 text-blue-950 group-hover:translate-y-0.5 transition-transform" />
                <span>Download Brochure (PDF)</span>
              </button>
            )}
          </div>
        </div>

        {/* Main 4-Column Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: About Institution */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <BitmLogo size="md" />
              <div>
                <span className="text-white font-extrabold text-lg tracking-tight block">BITM BALLARI</span>
                <span className="text-[11px] text-amber-400 font-semibold">Estd. 1997 • NAAC A+</span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Ballari Institute of Technology & Management (BITM), affiliated to VTU Belagavi, is a premier hub for engineering, management, and doctoral research in Kalyana-Karnataka.
            </p>

            <div className="pt-2 text-xs space-y-1 text-slate-400">
              <div><strong>KCET Code:</strong> <span className="text-amber-400">{COLLEGE_INFO.kcetCode}</span></div>
              <div><strong>COMED-K Code:</strong> <span className="text-amber-400">{COLLEGE_INFO.comedkCode}</span></div>
              <div><strong>PGCET Code:</strong> <span className="text-amber-400">{COLLEGE_INFO.pgcetCode}</span></div>
            </div>
          </div>

          {/* Col 2: Academic Programs */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-l-2 border-amber-400 pl-2">
              Academic Programs
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li><a href="#programs" className="hover:text-amber-400 transition-colors">• B.E. Computer Science & Engg</a></li>
              <li><a href="#programs" className="hover:text-amber-400 transition-colors">• B.E. Artificial Intelligence & ML</a></li>
              <li><a href="#programs" className="hover:text-amber-400 transition-colors">• B.E. CSE (Data Science)</a></li>
              <li><a href="#programs" className="hover:text-amber-400 transition-colors">• B.E. Electronics & Communication</a></li>
              <li><a href="#programs" className="hover:text-amber-400 transition-colors">• B.E. Electrical & Electronics</a></li>
              <li><a href="#programs" className="hover:text-amber-400 transition-colors">• B.E. Mechanical & Civil Engg</a></li>
              <li><a href="#programs" className="hover:text-amber-400 transition-colors">• MBA (Master of Business Admin)</a></li>
              <li><a href="#programs" className="hover:text-amber-400 transition-colors">• MCA (Master of Computer Apps)</a></li>
            </ul>
          </div>

          {/* Col 3: Quick Navigation */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-l-2 border-amber-400 pl-2">
              Quick Portals & Links
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li><button onClick={onOpenAdmissions} className="hover:text-amber-400 text-left transition-colors cursor-pointer">• Admissions 2026-27 (Apply)</button></li>
              {onDownloadBrochure && (
                <li><button onClick={onDownloadBrochure} className="hover:text-amber-400 text-left transition-colors font-semibold text-amber-300 cursor-pointer flex items-center space-x-1"><span>• Download Course Brochure (PDF)</span></button></li>
              )}
              {onOpenVirtualTour ? (
                <li><button onClick={onOpenVirtualTour} className="hover:text-amber-400 text-left transition-colors font-semibold text-amber-300 cursor-pointer flex items-center space-x-1"><span>• 360° Live Virtual Campus Tour (VR)</span></button></li>
              ) : (
                <li><a href="#virtual-tour" className="hover:text-amber-400 text-left transition-colors font-semibold text-amber-300">• 360° Virtual Campus Tour (New)</a></li>
              )}
              <li><button onClick={onOpenNotices} className="hover:text-amber-400 text-left transition-colors cursor-pointer">• VTU Circulars & Exam Notices</button></li>
              <li><button onClick={onOpenGallery} className="hover:text-amber-400 text-left transition-colors cursor-pointer">• Campus Life & Photo Gallery</button></li>
              <li><a href="#calculator" className="hover:text-amber-400 transition-colors">• Eligibility & Fee Estimator</a></li>
              <li><a href="#placements" className="hover:text-amber-400 transition-colors">• Training & Placement Cell</a></li>
              <li><a href="#about" className="hover:text-amber-400 transition-colors">• NAAC A+ & NBA Accreditations</a></li>
              <li><a href="#campus" className="hover:text-amber-400 transition-colors">• K-Tech NAIN Innovation Hub</a></li>
              <li><a href="#contact" className="hover:text-amber-400 transition-colors">• Campus Bus Routes & Timing</a></li>
            </ul>
          </div>

          {/* Col 4: Campus Address & Helplines */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-l-2 border-amber-400 pl-2">
              Campus & Contacts
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              {COLLEGE_INFO.address}
            </p>

            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                <span>{COLLEGE_INFO.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                <span className="text-amber-300 font-semibold">{COLLEGE_INFO.admissionHelpline}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                <span>{COLLEGE_INFO.email}</span>
              </div>
            </div>

            <div className="pt-2">
              <span className="text-[11px] font-bold text-slate-400 block mb-1">Affiliated & Approved By:</span>
              <div className="flex flex-wrap gap-1.5 text-[10px]">
                <span className="px-2 py-0.5 bg-slate-800 rounded text-slate-300">VTU Belagavi</span>
                <span className="px-2 py-0.5 bg-slate-800 rounded text-slate-300">AICTE New Delhi</span>
                <span className="px-2 py-0.5 bg-slate-800 rounded text-amber-400 font-bold">NAAC A+</span>
                <span className="px-2 py-0.5 bg-slate-800 rounded text-slate-300">Govt. of Karnataka</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar with Disclosures & Copyright */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} BITM Ballari (Ballari Institute of Technology & Management). All Rights Reserved.
          </div>

          <div className="flex items-center space-x-4">
            <span className="hover:text-white cursor-pointer">AICTE Mandatory Disclosure</span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer">Anti-Ragging Helpline</span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer">Internal Grievance Cell</span>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2 bg-slate-800 hover:bg-amber-400 hover:text-blue-950 text-slate-300 rounded-lg transition-colors cursor-pointer flex items-center space-x-1 text-xs"
            title="Back to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>Top</span>
          </button>
        </div>

      </div>
    </footer>
  );
};
