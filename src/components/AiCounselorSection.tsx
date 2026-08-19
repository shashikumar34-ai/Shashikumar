import React, { useState } from 'react';
import { 
  Bot, 
  Sparkles, 
  Send, 
  GraduationCap, 
  ArrowRight, 
  CheckCircle2, 
  Cpu, 
  Compass, 
  Zap,
  MessageSquare,
  HelpCircle,
  ShieldCheck,
  Building2,
  FileText
} from 'lucide-react';
import { COLLEGE_INFO } from '../data/mockData';

interface AiCounselorSectionProps {
  onOpenAiModal: () => void;
  onOpenAdmissions?: () => void;
  onDownloadBrochure?: () => void;
}

const FEATURED_PROMPTS = [
  {
    title: 'CSE (AI) & AIML Cutoff',
    desc: 'Get exact cutoff ranks for CSE (AI), Core CSE, & ECE under KCET Code E037.',
    query: 'What are the previous year KCET cutoffs, intake, and COMEDK codes for CSE (AI) and CSE at BITM?'
  },
  {
    title: '27.7 LPA Placements',
    desc: 'Explore top recruiters, average packages, and pre-placement training.',
    query: 'Which companies offer the highest salary package at BITM and how does the placement cell prepare students?'
  },
  {
    title: 'NVIDIA AI & K-Tech Labs',
    desc: 'Learn about NVIDIA GPU Deep Learning Labs and K-Tech NAIN project grants.',
    query: 'What research facilities, NVIDIA GPU AI labs, and incubation grants are provided for CSE (AI) and tech students at BITM?'
  },
  {
    title: 'Hostels & Campus Life',
    desc: 'Inquire about hostel rooms, mess food, gym, and security.',
    query: 'What are the hostel facilities, Wi-Fi connectivity, mess menu, and security measures for outstation students?'
  }
];

export const AiCounselorSection: React.FC<AiCounselorSectionProps> = ({
  onOpenAiModal,
  onOpenAdmissions,
  onDownloadBrochure
}) => {
  const [quickInput, setQuickInput] = useState('');

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenAiModal();
  };

  return (
    <section id="ai-counselor" className="py-16 md:py-24 bg-gradient-to-b from-[#001f3f] via-[#002244] to-[#001529] text-white relative overflow-hidden">
      {/* Background Decorative Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center space-x-2 bg-amber-400/15 border border-amber-400/40 text-amber-300 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
            <span>Next-Gen Smart Campus Experience</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            ASSRKS AI Academic & Admissions Counselor
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-4 leading-relaxed">
            Get immediate answers about programs, syllabus, KCET (<strong className="text-amber-300">{COLLEGE_INFO.kcetCode}</strong>) / COMEDK (<strong className="text-amber-300">{COLLEGE_INFO.comedkCode}</strong>) counseling, placement statistics, scholarships, and campus facilities powered by Google Gemini AI.
          </p>
        </div>

        {/* Interactive Feature Card */}
        <div className="bg-slate-900/90 border-2 border-slate-700/80 hover:border-amber-400/60 transition-all rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Quick Interactive Search */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-500 text-blue-950 flex items-center justify-center font-black shadow-lg">
                  <Bot className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-white">
                    Instant AI Guidance 24/7 with ASSRKS
                  </h3>
                  <p className="text-xs text-blue-200">
                    Accredited NAAC A+ & NBA • Autonomous Institution
                  </p>
                </div>
              </div>

              {/* Quick Input Bar that launches modal */}
              <form onSubmit={handleQuickSubmit} className="relative">
                <input
                  type="text"
                  value={quickInput}
                  onChange={(e) => setQuickInput(e.target.value)}
                  placeholder="Ask anything (e.g. 'What is the cutoff for Artificial Intelligence & ML?')..."
                  className="w-full bg-slate-950/90 border border-slate-700 focus:border-amber-400 rounded-2xl px-5 py-4 text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400/20 pr-28 transition-all"
                />
                <button
                  type="submit"
                  onClick={onOpenAiModal}
                  className="absolute right-2 top-2 bottom-2 px-4 bg-amber-400 hover:bg-amber-300 text-blue-950 font-bold rounded-xl text-xs flex items-center space-x-1.5 transition-all shadow-md cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Ask ASSRKS</span>
                </button>
              </form>

              {/* 4 Featured Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {FEATURED_PROMPTS.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={onOpenAiModal}
                    className="p-3.5 bg-slate-800/80 hover:bg-blue-950/80 border border-slate-700/80 hover:border-amber-400/40 rounded-2xl text-left transition-all group cursor-pointer"
                  >
                    <div className="flex items-center justify-between text-amber-300 text-xs font-bold mb-1">
                      <span>{item.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                    </div>
                    <p className="text-[11px] text-slate-300 leading-snug">
                      {item.desc}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Right Column: AI Highlights & Direct Admission Actions */}
            <div className="lg:col-span-5 bg-gradient-to-br from-blue-950/90 to-slate-950 p-6 rounded-2xl border border-blue-900/80 space-y-4">
              <div className="flex items-center space-x-2 text-xs font-extrabold uppercase tracking-wider text-amber-400">
                <Compass className="w-4 h-4" />
                <span>AI Admissions Advisor Highlights</span>
              </div>

              <ul className="space-y-2.5 text-xs text-slate-200">
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>Real-time analysis of B.E., MBA, MCA eligibility & seat intake.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>Personalized Branch Matcher based on PCM score & career goals.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>Placement statistics verification across 300+ hiring partners.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>Instant access to digital syllabus and PDF Prospectus.</span>
                </li>
              </ul>

              <div className="pt-3 border-t border-slate-800 space-y-2">
                <button
                  onClick={onOpenAiModal}
                  className="w-full py-3 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-blue-950 font-black rounded-xl text-xs flex items-center justify-center space-x-2 shadow-lg transition-all cursor-pointer"
                >
                  <Bot className="w-4 h-4" />
                  <span>Launch AI Assistant & Branch Matcher</span>
                </button>

                <div className="grid grid-cols-2 gap-2">
                  {onOpenAdmissions && (
                    <button
                      onClick={onOpenAdmissions}
                      className="py-2.5 bg-blue-900/80 hover:bg-blue-800 text-white font-bold rounded-xl text-xs flex items-center justify-center space-x-1 cursor-pointer transition-colors"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                      <span>Apply 2026</span>
                    </button>
                  )}
                  {onDownloadBrochure && (
                    <button
                      onClick={onDownloadBrochure}
                      className="py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold rounded-xl text-xs flex items-center justify-center space-x-1 cursor-pointer transition-colors"
                    >
                      <FileText className="w-3.5 h-3.5 text-amber-400" />
                      <span>Brochure PDF</span>
                    </button>
                  )}
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
