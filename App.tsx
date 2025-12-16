import React, { useState, useEffect, useRef } from 'react';
import Navigation from './components/Navigation';
import WeatherWidget from './components/WeatherWidget';
import ItineraryCard from './components/ItineraryCard';
import InfoSection from './components/InfoSection';
import HomeSection from './components/HomeSection';
import SplashScreen from './components/SplashScreen';
import DetailModal from './components/DetailModal';
import { INITIAL_ITINERARY } from './constants';
import { DailyItinerary, ItineraryItem } from './types';
import { enrichItineraryWithAI } from './services/geminiService';
import { MapPin } from 'lucide-react';

const App: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [activeTab, setActiveTab] = useState<'home' | 'itinerary' | 'info'>('home');
  const [itinerary, setItinerary] = useState<DailyItinerary[]>(INITIAL_ITINERARY);
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [selectedDayIndex, setSelectedDayIndex] = useState(0);
  const [selectedItem, setSelectedItem] = useState<ItineraryItem | null>(null);
  
  // Use a ref to prevent double-fetching in React 18 Strict Mode
  const hasFetched = useRef(false);

  useEffect(() => {
    const fetchAI = async () => {
      if (hasFetched.current) return;
      hasFetched.current = true;

      setIsAiLoading(true);
      const enriched = await enrichItineraryWithAI(INITIAL_ITINERARY);
      setItinerary(enriched);
      setIsAiLoading(false);
    };

    fetchAI();
  }, []);

  // Smooth scroll for day selection
  const dayRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const scrollToDay = (index: number) => {
    setSelectedDayIndex(index);
    dayRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  };

  return (
    <div className="min-h-screen bg-rice-paper text-stone-800 pb-24 selection:bg-japan-indigo selection:text-white">
      
      {/* Splash Screen Overlay */}
      {showSplash && <SplashScreen onFinish={() => setShowSplash(false)} />}
      
      {/* Detail Modal */}
      {selectedItem && (
        <DetailModal 
          item={selectedItem} 
          onClose={() => setSelectedItem(null)} 
        />
      )}

      {/* Header */}
      <header className="sticky top-0 z-40 bg-rice-paper/95 backdrop-blur-sm border-b border-stone-200 transition-all">
        <div className="px-6 py-4 flex justify-between items-end">
          <div>
            <h1 className="text-xl font-bold text-japan-indigo tracking-tight">四國之旅</h1>
            <p className="text-xs text-stone-500 font-medium tracking-wider">高松 & 德島</p>
          </div>
          <div className="text-right">
             <div className="text-[12px] font-bold bg-stone-800 text-white px-2.5 py-0.5 rounded-full inline-block mb-1">
               7 天
             </div>
             <p className="text-xs text-stone-400">12月 20 - 26</p>
          </div>
        </div>

        {/* Day Selector (Only show when on Itinerary tab) */}
        {activeTab === 'itinerary' && (
          <div className="flex overflow-x-auto no-scrollbar px-6 pb-3 gap-3 snap-x animate-fade-in">
            {itinerary.map((day, idx) => (
              <button
                key={day.date}
                ref={(el) => { dayRefs.current[idx] = el; }}
                onClick={() => scrollToDay(idx)}
                className={`snap-center shrink-0 flex flex-col items-center justify-center w-16 h-18 rounded-xl border transition-all duration-300 ${
                  selectedDayIndex === idx 
                    ? 'bg-japan-indigo text-white border-japan-indigo shadow-md scale-105' 
                    : 'bg-white text-stone-400 border-stone-200'
                }`}
              >
                <span className="text-[11px] font-medium leading-tight opacity-80">{day.displayDate.split(' ')[0]}</span>
                <span className="text-base font-bold">{day.displayDate.split(' ')[1].replace(/[()]/g, '')}</span>
              </button>
            ))}
          </div>
        )}
      </header>

      <main className="px-5 py-6 max-w-lg mx-auto">
        {activeTab === 'home' && (
          <HomeSection />
        )}

        {activeTab === 'itinerary' && (
          <div className="animate-fade-in-up">
            {/* Day Header Info */}
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-2 text-stone-600">
                <MapPin size={18} className="text-japan-red" />
                <span className="font-bold tracking-wide text-lg">{itinerary[selectedDayIndex].region}</span>
              </div>
              <WeatherWidget 
                weather={itinerary[selectedDayIndex].weather} 
                temp={itinerary[selectedDayIndex].temperature} 
              />
            </div>

            {/* Timeline */}
            <div className="space-y-0">
              {itinerary[selectedDayIndex].items.map((item) => (
                <ItineraryCard 
                  key={item.id} 
                  item={item} 
                  onClick={(item) => setSelectedItem(item)}
                />
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-[12px] text-stone-400">
                {isAiLoading ? 'AI 導遊正在幫您搜尋當地資訊...' : 'AI 導遊已更新最新情報'}
              </p>
            </div>
          </div>
        )}

        {activeTab === 'info' && (
          <InfoSection />
        )}
      </main>

      <Navigation 
        currentTab={activeTab} 
        onTabChange={setActiveTab} 
        isAiLoading={isAiLoading}
      />
    </div>
  );
};

export default App;