import React, { useState } from 'react';
import { X, Camera, Image as ImageIcon, ZoomIn, ChevronLeft, ChevronRight, Compass, Sparkles } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/mockData';
import { GalleryItem } from '../types';
import { BitmLogo } from './BitmLogo';

interface CampusGalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenVirtualTour?: () => void;
}

export const CampusGalleryModal: React.FC<CampusGalleryModalProps> = ({ 
  isOpen, 
  onClose,
  onOpenVirtualTour
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxImage, setLightboxImage] = useState<GalleryItem | null>(null);

  if (!isOpen) return null;

  const categories = ['All', 'Campus', 'Labs', 'Sports', 'Events', 'Culture'];

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (selectedCategory === 'All') return true;
    return item.category === selectedCategory;
  });

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4">
      <div className="relative bg-white w-full max-w-5xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200 flex flex-col max-h-[90vh]">
        
        {/* Modal Header */}
        <div className="bg-[#003366] text-white p-5 flex flex-wrap items-center justify-between gap-3 flex-shrink-0">
          <div className="flex items-center space-x-3">
            <BitmLogo size="md" />
            <div>
              <h2 className="text-lg font-bold">BITM Campus Tour & Photo Gallery</h2>
              <p className="text-xs text-blue-200">Jnana Gangotri Campus, Laboratories, Sports and Fest Moments</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            {onOpenVirtualTour && (
              <button
                onClick={() => {
                  onClose();
                  onOpenVirtualTour();
                }}
                className="px-3 py-1.5 bg-amber-400 hover:bg-amber-300 text-blue-950 font-bold text-xs rounded-xl shadow-md flex items-center space-x-1.5 transition-all cursor-pointer"
                title="Pop 360° Interactive Campus Tour"
              >
                <Compass className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '10s' }} />
                <span>360° Live Tour</span>
              </button>
            )}
            
            <button
              onClick={onClose}
              className="p-2 text-slate-300 hover:text-white rounded-lg transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Category Filter Bar */}
        <div className="p-4 bg-slate-100 border-b border-slate-200 flex items-center space-x-2 overflow-x-auto flex-shrink-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-colors cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#003366] text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Photos Grid */}
        <div className="p-6 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setLightboxImage(item)}
              className="group relative rounded-xl overflow-hidden shadow-sm border border-slate-200 cursor-pointer bg-slate-900 aspect-video sm:aspect-4/3"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-4 text-white">
                <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider">{item.category}</span>
                <h4 className="text-sm font-bold leading-tight">{item.title}</h4>
                <p className="text-[11px] text-slate-300 line-clamp-1 mt-0.5">{item.caption}</p>
              </div>
              <div className="absolute top-3 right-3 p-1.5 bg-black/50 backdrop-blur-sm rounded-lg text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Zoom Overlay */}
        {lightboxImage && (
          <div className="fixed inset-0 z-60 bg-black/90 flex flex-col items-center justify-center p-4">
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-4 p-2.5 text-white hover:text-amber-400 bg-white/10 rounded-full cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="max-w-4xl w-full text-center">
              <img
                src={lightboxImage.image}
                alt={lightboxImage.title}
                className="max-h-[75vh] mx-auto rounded-xl shadow-2xl object-contain border border-white/20"
              />
              <div className="mt-4 text-white">
                <span className="bg-amber-400 text-blue-950 font-bold px-2 py-0.5 rounded text-xs uppercase">{lightboxImage.category}</span>
                <h3 className="text-xl font-bold mt-2">{lightboxImage.title}</h3>
                <p className="text-sm text-slate-300 max-w-xl mx-auto mt-1">{lightboxImage.caption}</p>
              </div>
            </div>
          </div>
        )}

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500 flex-shrink-0">
          <span>Ballari Institute of Technology & Management (11+ Acre Campus)</span>
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
