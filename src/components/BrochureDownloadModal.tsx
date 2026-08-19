import React, { useState } from 'react';
import { 
  X, 
  Download, 
  FileText, 
  CheckCircle2, 
  Sparkles, 
  GraduationCap, 
  Award, 
  Building2, 
  Phone, 
  Mail, 
  ExternalLink,
  ShieldCheck,
  BookOpen,
  ArrowRight,
  Loader2
} from 'lucide-react';
import { COLLEGE_INFO, COURSES_DATA } from '../data/mockData';
import { generateBitmBrochurePdf } from '../utils/generateBrochurePdf';
import { BitmLogo } from './BitmLogo';

interface BrochureDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenAdmissions?: () => void;
}

export const BrochureDownloadModal: React.FC<BrochureDownloadModalProps> = ({
  isOpen,
  onClose,
  onOpenAdmissions
}) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [studentName, setStudentName] = useState('');
  const [studentPhone, setStudentPhone] = useState('');
  const [selectedStream, setSelectedStream] = useState<'all' | 'ug' | 'pg'>('all');

  if (!isOpen) return null;

  const handleDownload = async () => {
    try {
      setIsGenerating(true);
      await generateBitmBrochurePdf({
        programFilter: selectedStream,
        studentName: studentName.trim() || undefined,
      });
      setDownloadSuccess(true);
    } catch (err) {
      console.error('Error generating brochure PDF:', err);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative bg-slate-900 border border-slate-700/80 rounded-3xl max-w-2xl w-full text-white shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Top Header Banner */}
        <div className="bg-gradient-to-r from-[#001f3f] via-[#003366] to-[#001f3f] p-6 sm:p-7 border-b border-slate-700/80 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-400 hover:text-white p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center space-x-3 mb-2">
            <BitmLogo size="md" />
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-amber-400 bg-blue-950/80 px-2 py-0.5 rounded border border-blue-800">
                Official Prospectus 2026-27
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white leading-tight mt-0.5">
                Download Course Brochure (PDF)
              </h3>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-blue-200 mt-1 max-w-xl">
            Get the complete academic prospectus of BITM Ballari featuring B.E. engineering streams, MBA, MCA, placement track record, fee structures, and KCET admission guidelines.
          </p>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 sm:p-7 space-y-6">
          
          {/* Document Preview Card with Official BITM Logo */}
          <div className="bg-slate-800/80 rounded-2xl p-4 border border-blue-800/50 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-3.5">
              <BitmLogo size="lg" />
              <div>
                <span className="text-white font-extrabold text-sm block">Ballari Institute of Technology & Management</span>
                <span className="text-xs text-amber-300 font-medium">Autonomous VTU Institute • Accredited NAAC 'A+' & NBA</span>
                <p className="text-[11px] text-blue-200 mt-0.5">Official 2026-27 Academic & Admissions Prospectus</p>
              </div>
            </div>
            <div className="flex-shrink-0 bg-blue-950/80 px-3 py-1.5 rounded-xl border border-blue-700/60 text-center">
              <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-semibold">Format</span>
              <span className="text-xs font-bold text-emerald-400">PDF • 4 Pages</span>
            </div>
          </div>

          {/* Brochure Highlights Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            <div className="bg-slate-800/90 p-2.5 rounded-xl border border-slate-700 text-center">
              <span className="text-[10px] text-slate-400 font-semibold block">Total Pages</span>
              <span className="text-sm font-black text-white">4 Pages (A4)</span>
            </div>
            <div className="bg-slate-800/90 p-2.5 rounded-xl border border-slate-700 text-center">
              <span className="text-[10px] text-slate-400 font-semibold block">Accreditation</span>
              <span className="text-sm font-black text-amber-400">NAAC A+ & NBA</span>
            </div>
            <div className="bg-slate-800/90 p-2.5 rounded-xl border border-slate-700 text-center">
              <span className="text-[10px] text-slate-400 font-semibold block">KCET Code</span>
              <span className="text-sm font-black text-white">{COLLEGE_INFO.kcetCode}</span>
            </div>
            <div className="bg-slate-800/90 p-2.5 rounded-xl border border-slate-700 text-center">
              <span className="text-[10px] text-slate-400 font-semibold block">File Format</span>
              <span className="text-sm font-black text-emerald-400">Print Ready PDF</span>
            </div>
          </div>

          {/* Quick summary of what's inside */}
          <div className="bg-slate-800/60 p-4 rounded-2xl border border-slate-700/60">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2 flex items-center space-x-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>What is included inside this brochure:</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                <span>All 7 B.E. Specializations & Intake</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                <span>MBA & MCA Dual Degree Specializations</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                <span>27.7 LPA Placement Stats & Recruiter List</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                <span>K-Tech NAIN & Campus Lab Details</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                <span>KCET & COMED-K Cutoffs & Eligibility</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                <span>Official Helplines & Campus Bus Routes</span>
              </div>
            </div>
          </div>

          {/* Download Action & Options */}
          {downloadSuccess ? (
            <div className="p-4 bg-emerald-950/80 border border-emerald-500/50 rounded-2xl text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center mx-auto font-black shadow-lg">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white">Brochure Downloaded Successfully!</h4>
                <p className="text-xs text-emerald-200 mt-0.5">
                  Check your browser downloads folder for <strong>BITM_Ballari_Official_Course_Brochure_2026-27.pdf</strong>.
                </p>
              </div>

              <div className="flex items-center justify-center space-x-3 pt-2">
                <button
                  onClick={handleDownload}
                  disabled={isGenerating}
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-bold transition-colors cursor-pointer"
                >
                  Download Again
                </button>
                {onOpenAdmissions && (
                  <button
                    onClick={() => {
                      onClose();
                      onOpenAdmissions();
                    }}
                    className="px-5 py-2 bg-amber-400 hover:bg-amber-300 text-blue-950 rounded-xl text-xs font-black transition-colors cursor-pointer"
                  >
                    Apply for Admissions →
                  </button>
                )}
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <button
                onClick={handleDownload}
                disabled={isGenerating}
                className="w-full py-4 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-blue-950 font-black rounded-2xl shadow-xl shadow-amber-400/20 text-sm sm:text-base flex items-center justify-center space-x-2.5 transition-all transform hover:-translate-y-0.5 cursor-pointer disabled:opacity-50"
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Compiling PDF Brochure...</span>
                  </>
                ) : (
                  <>
                    <Download className="w-5 h-5" />
                    <span>Download Official PDF Course Brochure</span>
                  </>
                )}
              </button>

              <div className="flex items-center justify-between text-[11px] text-slate-400 px-1">
                <span>Free instant download • No registration required</span>
                <span className="text-amber-400 font-semibold">Admissions 2026-27 Open</span>
              </div>
            </div>
          )}

        </div>

        {/* Footer Contact Info */}
        <div className="bg-slate-950 p-4 px-6 border-t border-slate-800 text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center space-x-2">
            <Phone className="w-3.5 h-3.5 text-amber-400" />
            <span>Admission Helpdesk: <strong>{COLLEGE_INFO.admissionHelpline}</strong></span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail className="w-3.5 h-3.5 text-amber-400" />
            <span>{COLLEGE_INFO.admissionsEmail}</span>
          </div>
        </div>

      </div>
    </div>
  );
};
