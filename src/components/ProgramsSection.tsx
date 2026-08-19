import React, { useState } from 'react';
import { 
  GraduationCap, 
  Cpu, 
  Brain, 
  Database, 
  Radio, 
  Zap, 
  Building, 
  Cog, 
  Briefcase, 
  Code, 
  FlaskConical, 
  Clock, 
  Users, 
  Award, 
  ChevronRight, 
  BookOpen, 
  CheckCircle2, 
  X,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { COURSES_DATA } from '../data/mockData';
import { Course } from '../types';

interface ProgramsSectionProps {
  onOpenAdmissions: () => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({ onOpenAdmissions }) => {
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Undergraduate' | 'Postgraduate' | 'Research'>('All');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const iconMap: Record<string, React.ReactNode> = {
    Cpu: <Cpu className="w-6 h-6" />,
    Brain: <Brain className="w-6 h-6" />,
    Database: <Database className="w-6 h-6" />,
    Radio: <Radio className="w-6 h-6" />,
    Zap: <Zap className="w-6 h-6" />,
    Building: <Building className="w-6 h-6" />,
    Cog: <Cog className="w-6 h-6" />,
    Briefcase: <Briefcase className="w-6 h-6" />,
    Code: <Code className="w-6 h-6" />,
    FlaskConical: <FlaskConical className="w-6 h-6" />,
  };

  const filteredCourses = COURSES_DATA.filter((c) => {
    if (selectedCategory === 'All') return true;
    return c.category === selectedCategory;
  });

  return (
    <section id="programs" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 bg-amber-100 text-amber-900 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <BookOpen className="w-3.5 h-3.5 text-amber-600" />
            <span>Academic Excellence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our Academic <span className="text-[#003366]">Programs</span>
          </h2>
          <div className="w-20 h-1.5 bg-amber-400 mx-auto mt-3 mb-4 rounded-full" />
          <p className="text-slate-600 text-base sm:text-lg">
            VTU affiliated and NBA/AICTE accredited undergraduate, postgraduate, and research degrees crafted for cutting-edge technological readiness.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {(['All', 'Undergraduate', 'Postgraduate', 'Research'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#003366] text-white shadow-md shadow-blue-900/20'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat === 'All' ? 'All Degrees' : cat === 'Undergraduate' ? 'Undergraduate (B.E.)' : cat === 'Postgraduate' ? 'Postgraduate (MBA / MCA)' : 'Doctoral & Research (Ph.D)'}
            </button>
          ))}
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1.5"
            >
              <div>
                {/* Course Visual Header Image */}
                {course.image && (
                  <div className="relative h-44 w-full overflow-hidden bg-slate-900">
                    <img 
                      src={course.image} 
                      alt={course.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
                    
                    {/* Floating Badges over Image */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      <div className="p-2 bg-blue-900/90 backdrop-blur-md text-amber-400 rounded-lg shadow-sm border border-white/10">
                        {iconMap[course.icon] || <GraduationCap className="w-5 h-5" />}
                      </div>
                      <div className="flex flex-col items-end space-y-1">
                        <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-amber-400 text-blue-950 shadow-sm">
                          {course.degree}
                        </span>
                        <span className="text-[10px] font-semibold text-emerald-300 bg-emerald-950/80 backdrop-blur-sm border border-emerald-500/30 px-2 py-0.5 rounded">
                          {course.accreditationStatus}
                        </span>
                      </div>
                    </div>

                    <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[11px] text-slate-200 font-medium">
                      <span>Code: <strong className="text-white font-bold">{course.code}</strong></span>
                      <span>Intake: <strong className="text-amber-300 font-bold">{course.intake} Seats</strong></span>
                    </div>
                  </div>
                )}

                <div className="p-6">
                  {/* If no image fallback */}
                  {!course.image && (
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 bg-blue-50 group-hover:bg-[#003366] text-[#003366] group-hover:text-amber-400 rounded-xl transition-colors duration-300">
                        {iconMap[course.icon] || <GraduationCap className="w-6 h-6" />}
                      </div>
                      <div className="flex flex-col items-end space-y-1">
                        <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-blue-100 text-[#003366]">
                          {course.degree}
                        </span>
                        <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                          {course.accreditationStatus}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Course Name & Description */}
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#003366] transition-colors line-clamp-1 mb-2">
                    {course.name}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-2 mb-4">
                    {course.description}
                  </p>

                  {/* Stats Bar */}
                  <div className="grid grid-cols-2 gap-2 py-2.5 px-3 bg-slate-50 rounded-xl text-xs text-slate-600 mb-4 border border-slate-100">
                    <div className="flex items-center space-x-1.5">
                      <Clock className="w-3.5 h-3.5 text-amber-500" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1.5">
                      <Users className="w-3.5 h-3.5 text-[#003366]" />
                      <span>Intake: <strong>{course.intake} Seats</strong></span>
                    </div>
                  </div>

                  {/* Key Highlights Snippet */}
                  <div className="space-y-1.5 mb-2">
                    {course.highlights.slice(0, 2).map((hl, i) => (
                      <div key={i} className="flex items-start space-x-2 text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Footer Actions */}
              <div className="p-4 bg-slate-50/90 border-t border-slate-100 flex items-center justify-between gap-2">
                <button
                  onClick={() => setSelectedCourse(course)}
                  className="px-3 py-2 text-xs font-bold text-[#003366] hover:text-blue-900 hover:bg-blue-100/60 rounded-lg transition-colors flex items-center space-x-1 cursor-pointer"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Curriculum & Labs</span>
                </button>

                <button
                  onClick={onOpenAdmissions}
                  className="px-3.5 py-2 text-xs font-bold text-blue-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors flex items-center space-x-1 cursor-pointer"
                >
                  <span>Apply Now</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Course Detail Modal */}
        {selectedCourse && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="relative bg-white w-full max-w-3xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
              
              {/* Modal Header with Course Image Banner */}
              <div className="relative bg-[#003366] text-white p-6 overflow-hidden">
                {selectedCourse.image && (
                  <div className="absolute inset-0 z-0">
                    <img 
                      src={selectedCourse.image} 
                      alt={selectedCourse.name} 
                      className="w-full h-full object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#001f3f] via-[#003366]/90 to-[#003366]/80" />
                  </div>
                )}

                <div className="relative z-10 flex items-start justify-between">
                  <div>
                    <div className="flex items-center space-x-2 mb-1.5">
                      <span className="px-2.5 py-0.5 bg-amber-400 text-blue-950 text-xs font-bold rounded">
                        {selectedCourse.degree} • {selectedCourse.code}
                      </span>
                      <span className="text-xs text-blue-200">Established {selectedCourse.established}</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold">{selectedCourse.name}</h3>
                    <p className="text-xs text-blue-200 mt-1">HOD: {selectedCourse.hodName} ({selectedCourse.hodQualification})</p>
                  </div>
                  <button
                    onClick={() => setSelectedCourse(null)}
                    className="p-1.5 text-slate-300 hover:text-white rounded-lg transition-colors cursor-pointer bg-white/10 hover:bg-white/20"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 max-h-[65vh] overflow-y-auto space-y-6">
                
                {/* Overview */}
                <div>
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">Program Overview</h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {selectedCourse.description}
                  </p>
                </div>

                {/* Highlights */}
                <div>
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">Key Department Strengths</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedCourse.highlights.map((h, i) => (
                      <div key={i} className="flex items-start space-x-2 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Semester Wise Core Subjects */}
                <div>
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">Curriculum Highlights (VTU Scheme)</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedCourse.curriculumSemesters.map((sem) => (
                      <div key={sem.semester} className="p-3 bg-blue-50/60 rounded-xl border border-blue-100">
                        <div className="font-bold text-xs text-[#003366] mb-1.5">Semester {sem.semester} Core Modules</div>
                        <ul className="text-[11px] text-slate-700 space-y-1">
                          {sem.subjects.map((sub, sidx) => (
                            <li key={sidx} className="flex items-center space-x-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                              <span>{sub}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Laboratories & Career */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                    <h5 className="font-bold text-xs text-slate-900 mb-2">Specialized Lab Facilities</h5>
                    <ul className="text-xs text-slate-600 space-y-1">
                      {selectedCourse.labFacilities.map((lab, i) => (
                        <li key={i}>• {lab}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                    <h5 className="font-bold text-xs text-slate-900 mb-2">Career Pathways</h5>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedCourse.careerProspects.map((cp, i) => (
                        <span key={i} className="px-2 py-1 bg-white border border-slate-200 rounded text-[11px] font-medium text-slate-700">
                          {cp}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>

              {/* Modal Footer */}
              <div className="p-4 bg-slate-100 border-t border-slate-200 flex items-center justify-between">
                <span className="text-xs text-slate-500">KCET Code: E037 | COMED-K: E025</span>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => setSelectedCourse(null)}
                    className="px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-200 rounded-lg cursor-pointer"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => {
                      setSelectedCourse(null);
                      onOpenAdmissions();
                    }}
                    className="px-4 py-2 text-xs font-bold text-blue-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-sm flex items-center space-x-1.5 cursor-pointer"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Apply for this Branch</span>
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
