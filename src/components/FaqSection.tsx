import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Sparkles, PhoneCall } from 'lucide-react';
import { FAQ_LIST, COLLEGE_INFO } from '../data/mockData';

interface FaqSectionProps {
  onOpenAdmissions: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenAdmissions }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [selectedCat, setSelectedCat] = useState<string>('All');

  const categories = ['All', 'Admissions', 'Placements', 'Hostel & Campus', 'Academics'];

  const filteredFaqs = FAQ_LIST.filter((faq) => {
    if (selectedCat === 'All') return true;
    return faq.category === selectedCat;
  });

  return (
    <section id="faq" className="py-20 bg-slate-50 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-[#003366] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-amber-500" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked <span className="text-[#003366]">Questions</span>
          </h2>
          <div className="w-20 h-1.5 bg-amber-400 mx-auto mt-3 mb-4 rounded-full" />
          <p className="text-slate-600 text-base sm:text-lg">
            Find immediate answers regarding admission procedures, CET codes, scholarships, campus accommodation, and placement protocols.
          </p>
        </div>

        {/* Categories Bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedCat === cat
                  ? 'bg-[#003366] text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQs Accordion */}
        <div className="space-y-3.5">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-[10px] font-extrabold px-2 py-0.5 bg-blue-50 text-[#003366] rounded uppercase">
                      {faq.category}
                    </span>
                    <span className="text-sm sm:text-base font-bold text-slate-900">
                      {faq.question}
                    </span>
                  </div>
                  <div className="p-1 rounded-full bg-slate-100 text-slate-500 flex-shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Help Card */}
        <div className="mt-12 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-bold text-slate-900 text-base">Have more questions about admissions?</h4>
            <p className="text-xs text-slate-500 mt-0.5">Our academic counselors are available Monday to Saturday (9:00 AM - 5:30 PM).</p>
          </div>
          <div className="flex items-center space-x-3 flex-shrink-0">
            <a
              href={`tel:${COLLEGE_INFO.admissionHelpline.split('/')[0].trim()}`}
              className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-xl flex items-center space-x-2 border border-slate-300"
            >
              <PhoneCall className="w-3.5 h-3.5 text-amber-500" />
              <span>Call Helpline</span>
            </a>
            <button
              onClick={onOpenAdmissions}
              className="px-4 py-2.5 bg-amber-400 hover:bg-amber-300 text-blue-950 text-xs font-bold rounded-xl shadow-sm"
            >
              Enquire Online
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
