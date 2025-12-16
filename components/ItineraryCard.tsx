import React from 'react';
import { ItineraryItem, ActivityType } from '../types';
import { MapPin, Utensils, Bus, Camera, ShoppingBag, Moon, Star, Info, ChevronRight, BookOpen, Navigation } from 'lucide-react';

interface ItineraryCardProps {
  item: ItineraryItem;
  onClick?: (item: ItineraryItem) => void;
}

const ItineraryCard: React.FC<ItineraryCardProps> = ({ item, onClick }) => {
  const hasDetails = !!item.detailedInfo && item.detailedInfo.length > 0;

  const getIcon = () => {
    switch (item.type) {
      case ActivityType.Dining: return <Utensils size={20} />;
      case ActivityType.Transport: return <Bus size={20} />;
      case ActivityType.Shopping: return <ShoppingBag size={20} />;
      case ActivityType.Hotel: return <Moon size={20} />;
      case ActivityType.Sightseeing: default: return <Camera size={20} />;
    }
  };

  const getTypeColor = () => {
    switch (item.type) {
      case ActivityType.Dining: return 'bg-orange-50 text-orange-600 border-orange-100';
      case ActivityType.Transport: return 'bg-blue-50 text-blue-600 border-blue-100';
      case ActivityType.Shopping: return 'bg-rose-50 text-rose-600 border-rose-100';
      case ActivityType.Hotel: return 'bg-indigo-50 text-indigo-600 border-indigo-100';
      default: return 'bg-bamboo/10 text-bamboo border-bamboo/20';
    }
  };

  const handleCardClick = () => {
    if (hasDetails && onClick) {
      onClick(item);
    }
  };

  const openGoogleMaps = (e: React.MouseEvent) => {
    e.stopPropagation();
    // Encode the query. If it looks like an address, Google Maps handles it well.
    // Combining Title + Location often gives the best result if Location is just a place name,
    // but since we updated Location to be addresses, using Location directly is better or Title + Location.
    // Let's use the full query for accuracy.
    const query = encodeURIComponent(`${item.location} ${item.title}`);
    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank');
  };

  return (
    <div className="relative pl-6 pb-8 last:pb-0 group">
      {/* Timeline Line */}
      <div className="absolute left-0 top-2 bottom-0 w-px bg-stone-200 group-last:bg-transparent"></div>
      
      {/* Timeline Dot */}
      <div className="absolute left-[-4px] top-2 w-2.5 h-2.5 rounded-full bg-stone-300 border-2 border-white ring-1 ring-stone-100"></div>

      {/* Content Card */}
      <div 
        onClick={handleCardClick}
        className={`bg-white rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-stone-100 overflow-hidden transition-all active:scale-[0.99] ${hasDetails ? 'cursor-pointer hover:shadow-md ring-1 ring-transparent hover:ring-japan-indigo/20' : ''}`}
      >
        
        {/* Header */}
        <div className="p-4 flex justify-between items-start">
          <div className="flex gap-3 w-full">
             <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${getTypeColor()}`}>
               {getIcon()}
             </div>
             <div className="flex-1 min-w-0">
               <div className="flex items-center gap-2 mb-1">
                 <span className="text-sm font-bold font-mono text-stone-400">{item.time}</span>
                 <span className={`text-[12px] px-2 py-0.5 rounded border ${getTypeColor()}`}>
                   {item.type === ActivityType.Sightseeing ? '觀光' : item.type === ActivityType.Dining ? '美食' : item.type === ActivityType.Transport ? '交通' : item.type === ActivityType.Shopping ? '購物' : '住宿'}
                 </span>
               </div>
               <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5 overflow-hidden">
                    <h3 className="text-base font-bold text-stone-800 leading-tight mb-1 truncate">{item.title}</h3>
                    {hasDetails && <ChevronRight size={16} className="text-japan-indigo animate-pulse-slow shrink-0" />}
                  </div>
               </div>

               {/* Location / Navigation Button */}
               <div className="mt-1 flex items-start gap-1">
                 <button 
                    onClick={openGoogleMaps}
                    className="flex items-center gap-1 text-[11px] text-stone-500 bg-stone-50 hover:bg-blue-50 hover:text-blue-600 px-2 py-1 rounded-md border border-stone-100 transition-colors w-full sm:w-auto text-left group/btn"
                 >
                    <MapPin size={12} className="shrink-0 text-japan-red group-hover/btn:text-blue-500" />
                    <span className="truncate leading-tight">{item.location}</span>
                    <Navigation size={10} className="ml-auto opacity-0 group-hover/btn:opacity-100 text-blue-500" />
                 </button>
               </div>
               
               {/* Notes Section - Clean List View */}
               {item.notes && (
                 <div className="mt-3 space-y-1">
                    {item.notes.split('\n').map((line, i) => (
                      <div key={i} className="text-sm text-stone-600 leading-snug">
                        {line}
                      </div>
                    ))}
                 </div>
               )}
               
               {/* Click Hint */}
               {hasDetails && (
                 <div className="mt-3 inline-flex items-center gap-1 text-[11px] font-bold text-japan-indigo bg-japan-indigo/5 px-2 py-1 rounded">
                   <BookOpen size={12} />
                   點擊查看詳情
                 </div>
               )}
             </div>
          </div>
        </div>

        {/* AI Insights Section */}
        {(item.aiDescription || (item.mustEat && item.mustEat.length > 0) || (item.mustBuy && item.mustBuy.length > 0)) && (
          <div className="px-4 pb-4 pt-0 bg-stone-50/50 border-t border-dashed border-stone-100">
            <div className="mt-3 space-y-2">
              {item.aiDescription && (
                <div className="flex gap-2 items-start">
                  <Info size={16} className="mt-0.5 text-japan-indigo shrink-0" />
                  <p className="text-xs text-stone-600 leading-relaxed italic">"{item.aiDescription}"</p>
                </div>
              )}
              
              {item.mustEat && item.mustEat.length > 0 && (
                <div className="flex flex-wrap gap-1.5">
                  <span className="text-[12px] font-bold text-orange-600 bg-orange-100 px-2 py-0.5 rounded flex items-center gap-1">
                    <Utensils size={12} /> 必吃
                  </span>
                  {item.mustEat.map((food, i) => (
                    <span key={i} className="text-[12px] text-stone-600 bg-white border border-stone-200 px-2 py-0.5 rounded">{food}</span>
                  ))}
                </div>
              )}

              {item.mustBuy && item.mustBuy.length > 0 && (
                <div className="flex flex-wrap gap-1.5">
                  <span className="text-[12px] font-bold text-rose-600 bg-rose-100 px-2 py-0.5 rounded flex items-center gap-1">
                    <Star size={12} /> 必買
                  </span>
                  {item.mustBuy.map((gift, i) => (
                    <span key={i} className="text-[12px] text-stone-600 bg-white border border-stone-200 px-2 py-0.5 rounded">{gift}</span>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ItineraryCard;