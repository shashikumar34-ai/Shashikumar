import React, { useState } from 'react';
import { Bot, Sparkles, X } from 'lucide-react';

interface FloatingAiButtonProps {
  onOpen: () => void;
}

export const FloatingAiButton: React.FC<FloatingAiButtonProps> = ({ onOpen }) => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-2 select-none">
      {showTooltip && (
        <div className="relative bg-slate-900/95 border border-amber-400/50 text-white text-xs px-3.5 py-2 rounded-2xl shadow-2xl backdrop-blur-md animate-bounce flex items-center space-x-2 max-w-[240px]">
          <Sparkles className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
          <span className="leading-tight">
            Have questions? <strong className="text-amber-300">Ask ASSRKS</strong>
          </span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-slate-400 hover:text-white p-0.5"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3 h-3" />
          </button>
          <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-slate-900 border-r border-b border-amber-400/50 rotate-45" />
        </div>
      )}

      <button
        id="btn-floating-ai-assistant"
        onClick={onOpen}
        className="group relative flex items-center space-x-2.5 bg-gradient-to-r from-[#002244] via-[#003366] to-[#001f3f] hover:from-[#002b5c] hover:to-[#002244] text-white px-4 py-3.5 rounded-full shadow-2xl border-2 border-amber-400 hover:border-amber-300 transition-all duration-300 transform hover:scale-105 cursor-pointer"
        aria-label="Open ASSRKS AI Academic Counselor"
      >
        <div className="relative w-7 h-7 rounded-full bg-gradient-to-br from-amber-400 to-amber-500 text-blue-950 flex items-center justify-center font-black shadow-md group-hover:rotate-12 transition-transform">
          <Bot className="w-4 h-4" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full ring-2 ring-slate-900 animate-ping" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-500 rounded-full ring-2 ring-slate-900" />
        </div>

        <div className="flex flex-col text-left">
          <div className="flex items-center space-x-1">
            <span className="text-xs font-black tracking-tight text-white group-hover:text-amber-300 transition-colors">
              ASSRKS
            </span>
            <span className="bg-amber-400 text-blue-950 text-[9px] font-extrabold px-1 rounded-sm">
              AI
            </span>
          </div>
          <span className="text-[10px] text-slate-300 leading-none">
            Admissions & Courses
          </span>
        </div>
      </button>
    </div>
  );
};
