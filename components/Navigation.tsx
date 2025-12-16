import React from 'react';
import { Home, Calendar, Info, Sparkles } from 'lucide-react';

interface NavigationProps {
  currentTab: 'home' | 'itinerary' | 'info';
  onTabChange: (tab: 'home' | 'itinerary' | 'info') => void;
  isAiLoading: boolean;
}

const Navigation: React.FC<NavigationProps> = ({ currentTab, onTabChange, isAiLoading }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-stone-200 pb-safe pt-2 px-6 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-50 h-[90px]">
      <div className="flex justify-around items-center h-full pb-6">
        
        <button
          onClick={() => onTabChange('home')}
          className={`flex flex-col items-center transition-all duration-300 w-20 ${
            currentTab === 'home' ? 'text-japan-indigo scale-110' : 'text-stone-400'
          }`}
        >
          <Home size={26} strokeWidth={currentTab === 'home' ? 2.5 : 2} />
          <span className="text-[12px] mt-1.5 font-medium tracking-widest">首頁</span>
        </button>

        <div className="relative">
           <div className={`absolute -top-14 left-1/2 transform -translate-x-1/2 bg-japan-indigo text-white px-4 py-1.5 rounded-full text-xs shadow-lg transition-opacity duration-500 whitespace-nowrap z-50 pointer-events-none ${isAiLoading ? 'opacity-100' : 'opacity-0'}`}>
             <div className="flex items-center gap-1.5">
               <Sparkles size={12} className="animate-spin" />
               <span>AI 更新中...</span>
             </div>
           </div>
           
           <button
             onClick={() => onTabChange('itinerary')}
             className={`flex flex-col items-center transition-all duration-300 w-20 ${
               currentTab === 'itinerary' ? 'text-japan-indigo scale-110' : 'text-stone-400'
             }`}
           >
             <Calendar size={26} strokeWidth={currentTab === 'itinerary' ? 2.5 : 2} />
             <span className="text-[12px] mt-1.5 font-medium tracking-widest">行程</span>
           </button>
        </div>

        <button
          onClick={() => onTabChange('info')}
          className={`flex flex-col items-center transition-all duration-300 w-20 ${
            currentTab === 'info' ? 'text-japan-indigo scale-110' : 'text-stone-400'
          }`}
        >
          <Info size={26} strokeWidth={currentTab === 'info' ? 2.5 : 2} />
          <span className="text-[12px] mt-1.5 font-medium tracking-widest">資訊</span>
        </button>
      </div>
    </div>
  );
};

export default Navigation;