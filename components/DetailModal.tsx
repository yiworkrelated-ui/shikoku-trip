import React from 'react';
import { X, MapPin, Sparkles } from 'lucide-react';
import { ItineraryItem } from '../types';

interface DetailModalProps {
  item: ItineraryItem;
  onClose: () => void;
}

const DetailModal: React.FC<DetailModalProps> = ({ item, onClose }) => {
  if (!item.detailedInfo) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6 animate-fade-in">
      <div className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="relative w-full max-w-lg bg-white sm:rounded-2xl rounded-t-2xl shadow-2xl max-h-[90vh] overflow-y-auto animate-fade-in-up">
        {/* Header Image Placeholder or decorative header */}
        <div className="h-24 bg-japan-indigo relative overflow-hidden flex items-center justify-center">
           <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent scale-150"></div>
           <Sparkles size={48} className="text-white/20 animate-spin-slow" />
           <button 
             onClick={onClose}
             className="absolute top-4 right-4 p-2 bg-black/20 text-white rounded-full hover:bg-black/40 transition-colors"
           >
             <X size={20} />
           </button>
        </div>

        <div className="px-6 py-6 pb-10">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-stone-800 mb-1">{item.title}</h2>
            <div className="flex items-center gap-1 text-stone-500 text-sm">
              <MapPin size={14} />
              <span>{item.location}</span>
            </div>
          </div>

          <div className="space-y-8">
            {item.detailedInfo.map((info, idx) => (
              <div key={idx} className="relative pl-4 border-l-2 border-japan-indigo/20">
                <h3 className="text-lg font-bold text-japan-indigo mb-2">{info.title}</h3>
                <p className="text-stone-600 leading-relaxed whitespace-pre-line text-sm text-justify">
                  {info.content}
                </p>
              </div>
            ))}
          </div>

          <button 
            onClick={onClose}
            className="w-full mt-8 py-3.5 bg-stone-100 text-stone-600 font-bold rounded-xl active:scale-[0.98] transition-transform"
          >
            關閉
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailModal;