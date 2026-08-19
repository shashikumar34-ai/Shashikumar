import React, { useState } from 'react';
import { 
  Calculator, 
  CheckCircle2, 
  AlertCircle, 
  HelpCircle, 
  Sparkles, 
  BookOpen, 
  Award, 
  ArrowRight,
  FileCheck
} from 'lucide-react';
import { COLLEGE_INFO } from '../data/mockData';

interface EligibilityCalculatorProps {
  onOpenAdmissions: () => void;
}

export const EligibilityCalculator: React.FC<EligibilityCalculatorProps> = ({ onOpenAdmissions }) => {
  const [level, setLevel] = useState<'BE' | 'MBA' | 'MCA' | 'Lateral'>('BE');
  const [percentage, setPercentage] = useState<number>(75);
  const [exam, setExam] = useState<string>('KCET');
  const [category, setCategory] = useState<string>('GM');
  const [hkRegion, setHkRegion] = useState<boolean>(true);
  const [preferredBranch, setPreferredBranch] = useState<string>('CSE');

  // Calculation Logic
  const minRequiredPercentage = category === 'GM' ? 45 : 40;
  const isEligible = percentage >= minRequiredPercentage;
  const isScholarshipEligible = percentage >= 85;

  return (
    <section id="calculator" className="py-20 bg-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-[#003366] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5 text-amber-500" />
            <span>Admission Guidance</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Eligibility & <span className="text-[#003366]">Seat Estimator</span>
          </h2>
          <div className="w-20 h-1.5 bg-amber-400 mx-auto mt-3 mb-4 rounded-full" />
          <p className="text-slate-600 text-base sm:text-lg">
            Check your eligibility for B.E., MBA, and MCA programs under KCET (Code: {COLLEGE_INFO.kcetCode}), COMED-K (Code: {COLLEGE_INFO.comedkCode}), and Article 371(J) Kalyana-Karnataka reservation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Input Controls Panel */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200 space-y-6">
            
            {/* Step 1: Program Level */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                1. Select Desired Academic Degree
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: 'BE', label: 'B.E. (1st Year)' },
                  { id: 'Lateral', label: 'B.E. (Lateral Dip.)' },
                  { id: 'MBA', label: 'MBA (2-Yr)' },
                  { id: 'MCA', label: 'MCA (2-Yr)' }
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setLevel(item.id as any)}
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      level === item.id
                        ? 'bg-[#003366] text-white shadow-sm'
                        : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Percentage Slider & Number Input */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  2. Qualifying Exam Marks (10+2 PCM / Degree %)
                </label>
                <span className="text-sm font-extrabold text-[#003366] bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                  {percentage}%
                </span>
              </div>
              <input
                type="range"
                min="35"
                max="100"
                value={percentage}
                onChange={(e) => setPercentage(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#003366]"
              />
              <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                <span>35% (Min Passing)</span>
                <span>45% (AICTE Cutoff GM)</span>
                <span>75% (Distinction)</span>
                <span>100%</span>
              </div>
            </div>

            {/* Step 3: Entrance Exam & Category */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  3. Entrance Examination Mode
                </label>
                <select
                  value={exam}
                  onChange={(e) => setExam(e.target.value)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs font-medium text-slate-800 focus:ring-2 focus:ring-[#003366] focus:outline-none"
                >
                  <option value="KCET">Karnataka CET (KCET - Code E037)</option>
                  <option value="COMEDK">COMED-K (Code E025)</option>
                  <option value="PGCET">PGCET (MBA/MCA - Code B125)</option>
                  <option value="KMAT">KMAT / MAT / CMAT</option>
                  <option value="Direct">Direct / Management Quota</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  4. Reservation Category
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs font-medium text-slate-800 focus:ring-2 focus:ring-[#003366] focus:outline-none"
                >
                  <option value="GM">General Merit (GM) - Min 45%</option>
                  <option value="OBC">OBC (2A / 2B / 3A / 3B) - Min 40%</option>
                  <option value="SC/ST">SC / ST Category - Min 40%</option>
                  <option value="NRI">NRI / International</option>
                </select>
              </div>
            </div>

            {/* Step 4: Branch & HK 371(J) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  5. Preferred Engineering Branch
                </label>
                <select
                  value={preferredBranch}
                  onChange={(e) => setPreferredBranch(e.target.value)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs font-medium text-slate-800 focus:ring-2 focus:ring-[#003366] focus:outline-none"
                >
                  <option value="CSE">Computer Science & Engg (CSE)</option>
                  <option value="CSE (AI)">CSE (Artificial Intelligence) - CSE (AI)</option>
                  <option value="AIML">Artificial Intelligence & ML (AI & ML)</option>
                  <option value="DS">CSE - Data Science</option>
                  <option value="ECE">Electronics & Communication (ECE)</option>
                  <option value="EEE">Electrical & Electronics (EEE)</option>
                  <option value="MECH">Mechanical Engineering</option>
                  <option value="CIVIL">Civil Engineering</option>
                  <option value="MBA">MBA (Management)</option>
                  <option value="MCA">MCA (Computer Apps)</option>
                </select>
              </div>

              <div className="pt-4">
                <label className="flex items-center space-x-2.5 cursor-pointer select-none bg-slate-50 p-2.5 rounded-xl border border-slate-200 hover:bg-slate-100">
                  <input
                    type="checkbox"
                    checked={hkRegion}
                    onChange={(e) => setHkRegion(e.target.checked)}
                    className="w-4 h-4 text-[#003366] rounded border-slate-300 focus:ring-[#003366]"
                  />
                  <div className="text-xs">
                    <span className="font-bold text-slate-800">Kalyana-Karnataka (HK 371J)</span>
                    <span className="block text-[10px] text-slate-500">Eligible for 70% regional quota</span>
                  </div>
                </label>
              </div>
            </div>

          </div>

          {/* Results Outcome Card */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200 space-y-6">
            <h3 className="text-base font-bold uppercase tracking-wider text-slate-900 pb-3 border-b border-slate-100 flex items-center justify-between">
              <span>Eligibility Assessment</span>
              <span className={`text-xs px-2.5 py-1 rounded-full font-bold ${
                isEligible ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
              }`}>
                {isEligible ? 'VERIFIED ELIGIBLE' : 'NOT ELIGIBLE'}
              </span>
            </h3>

            {/* Status Breakdown */}
            <div className={`p-4 rounded-xl border ${
              isEligible ? 'bg-emerald-50/70 border-emerald-200' : 'bg-rose-50 border-rose-200'
            }`}>
              <div className="flex items-start space-x-3">
                {isEligible ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                ) : (
                  <AlertCircle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
                )}
                <div>
                  <h4 className={`text-sm font-bold ${isEligible ? 'text-emerald-900' : 'text-rose-900'}`}>
                    {isEligible 
                      ? `Eligible for ${preferredBranch} Admission!` 
                      : `Aggregate marks below AICTE criteria`}
                  </h4>
                  <p className="text-xs text-slate-600 mt-1">
                    {isEligible
                      ? `Your ${percentage}% satisfies the minimum ${minRequiredPercentage}% requirement for ${category} category under VTU regulations.`
                      : `You need at least ${minRequiredPercentage}% aggregate marks in PCM / qualifying exam for admission consideration.`}
                  </p>
                </div>
              </div>
            </div>

            {/* Quota & Advantages List */}
            <div className="space-y-2.5 text-xs text-slate-700">
              <div className="flex items-center justify-between p-2.5 bg-slate-50 rounded-lg border border-slate-100">
                <span className="font-semibold text-slate-600">Counseling College Code:</span>
                <span className="font-bold text-[#003366]">{exam === 'COMEDK' ? 'COMEDK: E025' : exam === 'PGCET' ? 'PGCET: B125' : 'KCET: E037'}</span>
              </div>

              {hkRegion && (
                <div className="flex items-center justify-between p-2.5 bg-amber-50 rounded-lg border border-amber-200 text-amber-900">
                  <span className="font-semibold">Article 371(J) Region Advantage:</span>
                  <span className="font-bold">70% Reserved Seats</span>
                </div>
              )}

              {isScholarshipEligible && (
                <div className="flex items-center justify-between p-2.5 bg-blue-50 rounded-lg border border-blue-200 text-blue-900">
                  <span className="font-semibold flex items-center">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500 mr-1" />
                    Merit Scholarship Waiver:
                  </span>
                  <span className="font-bold text-emerald-700">Eligible (85%+)</span>
                </div>
              )}
            </div>

            {/* Mandatory Documents Checklist */}
            <div className="pt-2">
              <h5 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2 flex items-center">
                <FileCheck className="w-3.5 h-3.5 mr-1 text-[#003366]" />
                Documents Required for Counseling
              </h5>
              <div className="text-[11px] text-slate-500 space-y-1">
                <div>• 10th & 12th / 2nd PUC Original Marks Cards</div>
                <div>• KCET / COMED-K / PGCET Rank Card & Verification Slip</div>
                <div>• Study Certificate / Transfer Certificate (TC)</div>
                {hkRegion && <div>• Article 371(J) Eligibility Certificate (Assistant Commissioner issued)</div>}
              </div>
            </div>

            {/* Action CTA */}
            <button
              onClick={onOpenAdmissions}
              className="w-full py-3 text-xs sm:text-sm font-bold text-blue-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-xl shadow-md transition-all flex items-center justify-center space-x-2 cursor-pointer"
            >
              <span>Submit Direct Admission Enquiry</span>
              <ArrowRight className="w-4 h-4" />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};
