import React, { useState } from 'react';
import { 
  TrendingUp, 
  Building2, 
  Award, 
  Users, 
  CheckCircle2, 
  Briefcase, 
  Quote, 
  ArrowUpRight,
  Sparkles,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { PLACEMENT_STATS, RECRUITERS, TESTIMONIALS } from '../data/mockData';

interface PlacementsSectionProps {
  onOpenAdmissions: () => void;
}

export const PlacementsSection: React.FC<PlacementsSectionProps> = ({ onOpenAdmissions }) => {
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);
  const [selectedTier, setSelectedTier] = useState<string>('All');

  const filteredRecruiters = RECRUITERS.filter((rec) => {
    if (selectedTier === 'All') return true;
    return rec.tier === selectedTier;
  });

  const nextTestimonial = () => {
    setActiveTestimonialIdx((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonialIdx((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const currentTestimonial = TESTIMONIALS[activeTestimonialIdx];

  return (
    <section id="placements" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-800 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
            <span>Corporate Relations & Placements</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Placement <span className="text-[#003366]">Excellence</span>
          </h2>
          <div className="w-20 h-1.5 bg-amber-400 mx-auto mt-3 mb-4 rounded-full" />
          <p className="text-slate-600 text-base sm:text-lg">
            Our students are recruited by top global MNCs and core conglomerates through rigorous pre-placement technical training and industry partnerships.
          </p>
        </div>

        {/* Highlight Banner matching user's alert style */}
        <div className="bg-gradient-to-r from-[#003366] via-blue-900 to-[#002244] text-white p-6 sm:p-8 rounded-2xl shadow-xl mb-12 border border-blue-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-center md:text-left">
            
            <div className="space-y-1">
              <span className="text-xs font-extrabold uppercase tracking-widest text-amber-400">Highest Salary Package</span>
              <div className="text-3xl sm:text-4xl font-black text-white">27.7 LPA</div>
              <p className="text-xs text-blue-200">International Cloud & Tech Offer</p>
            </div>

            <div className="space-y-1 md:border-x md:border-blue-700/60 md:px-6">
              <span className="text-xs font-extrabold uppercase tracking-widest text-amber-400">Average Placement Package</span>
              <div className="text-3xl sm:text-4xl font-black text-white">6.50 LPA</div>
              <p className="text-xs text-blue-200">Across B.E., MBA & MCA batches</p>
            </div>

            <div className="space-y-1">
              <span className="text-xs font-extrabold uppercase tracking-widest text-amber-400">Strategic MoUs & Partners</span>
              <div className="text-xl sm:text-2xl font-bold text-white">Infosys, Wipro & Harita TechServ</div>
              <p className="text-xs text-blue-200">Campus Connect & Center of Excellence</p>
            </div>

          </div>
        </div>

        {/* Placement Records by Year */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-bold text-slate-900">Year-on-Year Placement Momentum</h3>
              <p className="text-xs text-slate-500">Track record of job offers and package escalation at BITM</p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {PLACEMENT_STATS.map((stat, idx) => (
              <div key={idx} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:border-[#003366] transition-all">
                <div className="text-xs font-bold text-[#003366] mb-1">{stat.year} Batch</div>
                <div className="text-2xl font-black text-slate-900">{stat.offers}+</div>
                <div className="text-[11px] text-slate-500 font-medium mb-3">Total Job Offers</div>
                
                <div className="pt-2 border-t border-slate-100 space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Highest:</span>
                    <span className="font-bold text-emerald-700">{stat.highestPackage} LPA</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Avg CTC:</span>
                    <span className="font-semibold text-slate-800">{stat.avgPackage} LPA</span>
                  </div>
                  <div className="flex justify-between text-[11px]">
                    <span className="text-slate-400">Companies:</span>
                    <span className="text-slate-600">{stat.companiesVisited}+</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Recruiting Companies Wall */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm mb-14">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-xl font-bold text-slate-900">300+ Annual Corporate Recruiters</h3>
              <p className="text-xs text-slate-500">Prominent global technology enterprises visiting BITM campus</p>
            </div>

            {/* Recruiter Tier Filter */}
            <div className="flex flex-wrap gap-1.5 text-xs">
              {(['All', 'Super Dream', 'Dream', 'Core'] as const).map((tier) => (
                <button
                  key={tier}
                  onClick={() => setSelectedTier(tier)}
                  className={`px-3 py-1.5 rounded-lg font-semibold transition-colors cursor-pointer ${
                    selectedTier === tier
                      ? 'bg-[#003366] text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {tier}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
            {filteredRecruiters.map((rec, i) => (
              <div 
                key={i} 
                className="p-4 bg-slate-50 hover:bg-blue-50/50 rounded-xl border border-slate-200 hover:border-blue-300 transition-all flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-extrabold text-sm text-slate-900 tracking-tight">{rec.name}</span>
                  <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${
                    rec.tier === 'Super Dream' ? 'bg-amber-100 text-amber-900' :
                    rec.tier === 'Core' ? 'bg-indigo-100 text-indigo-900' :
                    'bg-emerald-100 text-emerald-900'
                  }`}>
                    {rec.tier}
                  </span>
                </div>
                <div className="text-[11px] text-slate-500">{rec.industry}</div>
                {rec.highestHired && (
                  <div className="mt-2 text-[10px] text-blue-900 font-semibold">
                    {rec.highestHired}+ Hired per Drive
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Placed Student Testimonials Slider */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-bold text-slate-900">Alumni & Placement Success Stories</h3>
              <p className="text-xs text-slate-500">Hear from our graduates thriving in top tech giants</p>
            </div>
            
            <div className="flex items-center space-x-2">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-lg border border-slate-200 hover:bg-slate-100 text-slate-700 transition-colors cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-lg border border-slate-200 hover:bg-slate-100 text-slate-700 transition-colors cursor-pointer"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-4 text-center md:text-left">
              <div className="relative w-32 h-32 mx-auto md:mx-0 rounded-2xl overflow-hidden shadow-md border-2 border-amber-400 mb-3">
                <img 
                  src={currentTestimonial.image} 
                  alt={currentTestimonial.name}
                  className="w-full h-full object-cover" 
                />
              </div>
              <h4 className="font-bold text-slate-900 text-base">{currentTestimonial.name}</h4>
              <p className="text-xs text-blue-900 font-semibold">{currentTestimonial.role} @ {currentTestimonial.company}</p>
              <p className="text-[11px] text-slate-500">{currentTestimonial.branch} • {currentTestimonial.batch}</p>
              
              <div className="mt-2 inline-flex items-center bg-amber-100 text-amber-900 px-2.5 py-0.5 rounded-full text-xs font-black">
                CTC: {currentTestimonial.package}
              </div>
            </div>

            <div className="md:col-span-8 bg-slate-50 p-6 rounded-xl border border-slate-100 relative">
              <Quote className="w-8 h-8 text-blue-200 absolute top-4 right-4" />
              <p className="text-slate-700 text-sm sm:text-base italic leading-relaxed relative z-10 mb-4">
                "{currentTestimonial.quote}"
              </p>
              <div className="flex items-center space-x-2 text-xs font-semibold text-[#003366]">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Verified BITM Graduate & Placement Testimonial</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
