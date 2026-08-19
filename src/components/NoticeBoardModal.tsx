import React, { useState } from 'react';
import { X, Bell, Search, Filter, Calendar, Tag, ExternalLink, Download, FileText, CheckCircle2 } from 'lucide-react';
import { NOTICES } from '../data/mockData';
import { Notice } from '../types';
import { BitmLogo } from './BitmLogo';

interface NoticeBoardModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NoticeBoardModal: React.FC<NoticeBoardModalProps> = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeNotice, setActiveNotice] = useState<Notice | null>(null);

  if (!isOpen) return null;

  const categories = ['All', 'Admissions', 'Placements', 'Exams', 'Academic', 'Events'];

  const filteredNotices = NOTICES.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          (item.details && item.details.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div 
        className="relative bg-white w-full max-w-3xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="bg-[#003366] text-white p-5 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <BitmLogo size="md" />
            <div>
              <h2 className="text-lg font-bold">BITM Notice Board & Circulars</h2>
              <p className="text-xs text-blue-200">Official circulars, examination timetables & placement updates</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search & Filter Bar */}
        <div className="p-4 bg-slate-50 border-b border-slate-200 flex flex-col sm:flex-row gap-3 items-center justify-between">
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search circulars, exams..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-white border border-slate-300 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-blue-800 focus:border-transparent text-slate-800"
            />
          </div>

          {/* Category Chips */}
          <div className="flex items-center space-x-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 text-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-2.5 py-1.5 rounded-lg font-medium whitespace-nowrap transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#003366] text-white shadow-sm'
                    : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Notices Content List */}
        <div className="p-5 max-h-[60vh] overflow-y-auto divide-y divide-slate-100">
          {filteredNotices.length === 0 ? (
            <div className="text-center py-12 text-slate-500">
              <FileText className="w-10 h-10 mx-auto text-slate-300 mb-2" />
              <p className="font-semibold text-sm">No circulars match your search.</p>
              <p className="text-xs text-slate-400 mt-1">Try searching for other terms or resetting category filters.</p>
            </div>
          ) : (
            filteredNotices.map((notice) => {
              const isExpanded = activeNotice?.id === notice.id;
              return (
                <div key={notice.id} className="py-4 hover:bg-slate-50/80 rounded-xl px-2 transition-colors">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1.5">
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider ${
                          notice.category === 'Admissions' ? 'bg-emerald-100 text-emerald-800' :
                          notice.category === 'Placements' ? 'bg-amber-100 text-amber-800' :
                          notice.category === 'Exams' ? 'bg-rose-100 text-rose-800' :
                          'bg-blue-100 text-blue-800'
                        }`}>
                          {notice.category}
                        </span>

                        <span className="text-[11px] text-slate-400 flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {notice.date}
                        </span>

                        {notice.isNew && (
                          <span className="bg-rose-600 text-white text-[9px] font-extrabold px-1.5 py-0.2 rounded-full animate-pulse">
                            NEW
                          </span>
                        )}
                      </div>

                      <h4 className="text-sm font-bold text-slate-900 leading-snug">
                        {notice.title}
                      </h4>

                      {isExpanded && notice.details && (
                        <div className="mt-3 p-3 bg-blue-50/60 rounded-lg text-xs text-slate-700 leading-relaxed border border-blue-100">
                          <p>{notice.details}</p>
                          <div className="mt-2.5 flex items-center space-x-3">
                            <span className="inline-flex items-center text-xs font-semibold text-blue-900">
                              <CheckCircle2 className="w-3.5 h-3.5 mr-1 text-emerald-600" />
                              Official VTU / BITM Circular
                            </span>
                          </div>
                        </div>
                      )}
                    </div>

                    <button
                      onClick={() => setActiveNotice(isExpanded ? null : notice)}
                      className="px-3 py-1.5 text-xs font-semibold text-blue-900 hover:text-white hover:bg-[#003366] border border-blue-200 rounded-lg transition-all flex items-center space-x-1 flex-shrink-0 cursor-pointer"
                    >
                      <span>{isExpanded ? 'Collapse' : 'Details'}</span>
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-100 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <span>For urgent academic queries, contact Student Affairs Cell</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-900 text-white rounded-lg font-medium cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
