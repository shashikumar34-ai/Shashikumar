import React, { useState } from 'react';
import { 
  Building, 
  Award, 
  Target, 
  Eye, 
  HeartHandshake, 
  ShieldCheck, 
  CheckCircle2, 
  BookOpen, 
  Sparkles,
  Layers,
  GraduationCap
} from 'lucide-react';
import { COLLEGE_INFO } from '../data/mockData';
import { BitmLogo } from './BitmLogo';

export const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'founder' | 'vision' | 'milestones'>('overview');

  const milestones = [
    { year: "1997", title: "Foundation & Inception", desc: "Established by Late Smt. Basavarajeswari under Tungabhadra Education Health & Rural Development Trust with core branches (CSE, ECE, EEE, MECH)." },
    { year: "2007", title: "Postgraduate Expansion", desc: "Introduced MBA and MCA programs to meet burgeoning regional corporate management and software requirements." },
    { year: "2010", title: "VTU Research Centers", desc: "Recognized as official Doctoral (Ph.D.) Research Centers by Visvesvaraya Technological University." },
    { year: "2018", title: "K-Tech NAIN Incubation Hub", desc: "Designated as premier New Age Innovation Network incubator by Govt. of Karnataka for student startups." },
    { year: "2022", title: "NAAC 'A+' Accreditation", desc: "Awarded prestigious 'A+' Grade by National Assessment and Accreditation Council for supreme academic quality." },
    { year: "Present", title: "Autonomous & AI Expansion", desc: "Pioneering state-of-the-art AI & ML and Data Science engineering departments with over 3,500 students." }
  ];

  return (
    <section id="about" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-[#003366] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-amber-500" />
            <span>Legacy of 27+ Years</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            About <span className="text-[#003366]">BITM Ballari</span>
          </h2>
          <div className="w-20 h-1.5 bg-amber-400 mx-auto mt-3 mb-4 rounded-full" />
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Ballari Institute of Technology & Management (BITM) is a premier engineering and management institution nestled in the historic Kalyana-Karnataka region, committed to technical rigor, character building, and innovation.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'overview'
                ? 'bg-[#003366] text-white shadow-lg shadow-blue-900/20'
                : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
            }`}
          >
            Institution Overview
          </button>
          <button
            onClick={() => setActiveTab('founder')}
            className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'founder'
                ? 'bg-[#003366] text-white shadow-lg shadow-blue-900/20'
                : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
            }`}
          >
            Founder & Heritage
          </button>
          <button
            onClick={() => setActiveTab('vision')}
            className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'vision'
                ? 'bg-[#003366] text-white shadow-lg shadow-blue-900/20'
                : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
            }`}
          >
            Vision, Mission & Values
          </button>
          <button
            onClick={() => setActiveTab('milestones')}
            className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'milestones'
                ? 'bg-[#003366] text-white shadow-lg shadow-blue-900/20'
                : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
            }`}
          >
            Milestones & Growth
          </button>
        </div>

        {/* Dynamic Tab Contents */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-5 text-slate-700">
              <h3 className="text-2xl font-bold text-slate-900 leading-tight">
                Nurturing Global Technocrats with Student-Centric Pedagogy
              </h3>
              <p className="leading-relaxed">
                Established in 1997 under the aegis of Tungabhadra Education Health & Rural Development Trust (TEHRD), BITM Ballari has evolved into a premier destination for higher technical education in Karnataka.
              </p>
              <p className="leading-relaxed">
                Spread across an eco-friendly 11-acre Wi-Fi campus along the Ballari-Hosapete Highway, the institute offers 7 undergraduate engineering disciplines, 2 postgraduate courses (MBA & MCA), and multiple VTU-recognized doctoral research centers.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
                  <ShieldCheck className="w-6 h-6 text-emerald-600 mb-2" />
                  <div className="font-bold text-slate-900 text-sm">NAAC 'A+' Grade</div>
                  <div className="text-xs text-slate-500">Highest benchmark of institutional excellence</div>
                </div>

                <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
                  <Award className="w-6 h-6 text-amber-500 mb-2" />
                  <div className="font-bold text-slate-900 text-sm">NBA Accredited</div>
                  <div className="text-xs text-slate-500">Tier-1 Outcome-Based Education delivery</div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <span className="inline-flex items-center text-xs font-semibold bg-blue-50 text-[#003366] px-3 py-1 rounded-md border border-blue-200">
                  <CheckCircle2 className="w-3.5 h-3.5 mr-1 text-emerald-600" />
                  Permanent VTU Affiliation
                </span>
                <span className="inline-flex items-center text-xs font-semibold bg-blue-50 text-[#003366] px-3 py-1 rounded-md border border-blue-200">
                  <CheckCircle2 className="w-3.5 h-3.5 mr-1 text-emerald-600" />
                  AICTE New Delhi Approved
                </span>
                <span className="inline-flex items-center text-xs font-semibold bg-blue-50 text-[#003366] px-3 py-1 rounded-md border border-blue-200">
                  <CheckCircle2 className="w-3.5 h-3.5 mr-1 text-emerald-600" />
                  Govt. of Karnataka K-Tech NAIN Hub
                </span>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white group flex flex-col justify-center items-center min-h-[320px] sm:min-h-[384px] p-6 sm:p-8">
                {/* Official BITM Institutional Logo Presentation */}
                <div className="w-full flex-1 flex flex-col items-center justify-center p-4">
                  <img 
                    src="/bitm-logo.svg" 
                    alt="Ballari Institute of Technology & Management (BITM) Official Logo" 
                    className="w-full max-w-md max-h-56 object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="w-full mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-left">
                  <div>
                    <span className="bg-[#003366] text-amber-300 font-bold px-2.5 py-0.5 rounded text-[11px] uppercase tracking-wide">Autonomous VTU Institution</span>
                    <h4 className="text-base sm:text-lg font-extrabold text-slate-900 mt-1">Ballari Institute of Technology & Management</h4>
                    <p className="text-xs text-slate-500">Jnana Gangotri Campus, Ballari-Hosapete Highway, Allipura, Ballari</p>
                  </div>
                  <div className="hidden sm:flex flex-col items-end">
                    <span className="text-[10px] text-slate-400 font-semibold uppercase">NAAC Grade</span>
                    <span className="text-sm font-extrabold text-emerald-600">A+ Accredited</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'founder' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200">
            <div className="lg:col-span-5 text-center">
              {/* Official Photo Card of Late Smt. Basavarajeshwari */}
              <div className="relative mx-auto max-w-xs sm:max-w-sm rounded-2xl overflow-hidden shadow-2xl border-4 border-amber-400 bg-slate-900 group">
                <img 
                  src="/founder-basavarajeshwari.jpg" 
                  alt="Late Smt. Basavarajeshwari (1922–2008) - Founder Patron of BITM" 
                  className="w-full h-80 sm:h-96 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 right-3 bg-amber-400 text-blue-950 font-black text-[10px] uppercase px-2.5 py-0.5 rounded shadow">
                  1922 – 2008
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent flex items-end p-4">
                  <div className="text-white text-left w-full">
                    <span className="text-[10px] font-bold text-amber-300 uppercase tracking-widest block">Founder Patron</span>
                    <p className="text-sm font-extrabold text-white">Late Smt. Basavarajeshwari</p>
                  </div>
                </div>
              </div>

              <h4 className="text-xl font-extrabold text-slate-900 mt-4">Late Smt. Basavarajeshwari</h4>
              <p className="text-xs font-bold text-amber-600 uppercase tracking-wider">Former Union Minister of State, Govt. of India</p>
              <p className="text-xs text-slate-500 mt-1">Founder, T.E.H.R.D. Trust &amp; BITM Ballari</p>
            </div>

            <div className="lg:col-span-7 space-y-4 text-slate-700 text-sm leading-relaxed">
              <div className="inline-flex items-center space-x-2 bg-amber-50 text-amber-800 border border-amber-200 px-3 py-1 rounded-full text-xs font-bold">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>Visionary Statesman • Founder &amp; Patron</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 leading-snug">
                A Visionary Legacy of Empowerment through Technical Education
              </h3>
              <p>
                Late Smt. Basavarajeshwari (1922–2008) was a distinguished statesman, three-term Lok Sabha Member of Parliament from Bellary, and Union Minister of State for Women and Child Development (1991–1996) who dedicated her life to the socio-economic and educational transformation of Karnataka.
              </p>
              <p>
                In 1997, driven by her pioneering belief that quality technical education should be accessible to all students regardless of background, she established the Tungabhadra Education Health &amp; Rural Development (T.E.H.R.D.) Trust and founded Ballari Institute of Technology &amp; Management (BITM).
              </p>
              <div className="p-5 bg-gradient-to-br from-amber-50 to-amber-100/60 rounded-xl border border-amber-200/80 text-amber-950 text-xs italic shadow-sm relative">
                <p className="leading-relaxed">
                  "Education is the most potent weapon to eliminate backwardness and bring prosperity to our people. Let technical knowledge ignite the spark of self-reliance, ethical character, and global leadership."
                </p>
                <span className="block font-bold text-right mt-2 not-italic text-amber-900 font-serif text-xs">
                  — Late Smt. Basavarajeshwari, Founder Patron
                </span>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'vision' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-[#003366] flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Our Vision</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  "To be a premier institute of technical education and management fostering innovation, research, ethical values, and leadership to meet global engineering challenges and serve society."
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs text-blue-900 font-semibold">
                <Sparkles className="w-4 h-4 text-amber-500 mr-1.5" />
                Empowering next-gen innovators since 1997
              </div>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center mb-4">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Our Mission</h3>
                <ul className="text-slate-600 text-sm space-y-2.5">
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span>Provide student-centric outcome-based education through industry-aligned curriculum and modern pedagogies.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span>Foster multidisciplinary research, entrepreneurship, and intellectual property creation.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span>Inculcate environmental consciousness, professional ethics, and social responsibility.</span>
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs text-blue-900 font-semibold">
                <HeartHandshake className="w-4 h-4 text-emerald-600 mr-1.5" />
                Outcome-Based Academic Delivery
              </div>
            </div>
          </div>
        )}

        {activeTab === 'milestones' && (
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">Journey of Academic Distinction</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {milestones.map((item, idx) => (
                <div key={idx} className="p-5 bg-slate-50 rounded-xl border border-slate-200 relative group hover:border-[#003366] transition-colors">
                  <span className="text-2xl font-black text-amber-500 block mb-1">{item.year}</span>
                  <h4 className="font-bold text-slate-900 text-base mb-1.5">{item.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
