import React, { useEffect, useState } from 'react';
import { Plane, Cloud, Star } from 'lucide-react';

interface SplashScreenProps {
  onFinish: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onFinish }) => {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Show for 2.5 seconds total
    const timer = setTimeout(() => {
      setIsExiting(true);
      // Wait for exit animation to finish before unmounting
      setTimeout(onFinish, 800); 
    }, 2500);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className={`fixed inset-0 z-[100] bg-rice-paper flex flex-col items-center justify-center transition-all duration-700 ease-in-out ${isExiting ? 'opacity-0 translate-y-[-20px] pointer-events-none' : 'opacity-100'}`}>
      
      {/* Animation Container */}
      <div className="relative mb-12 w-64 h-32 flex items-center justify-center">
        
        {/* Decorative Clouds */}
        <div className="absolute top-0 left-10 text-stone-300 opacity-60 animate-float" style={{ animationDelay: '0.5s' }}>
          <Cloud size={28} fill="#E5E5E5" strokeWidth={0} />
        </div>
        <div className="absolute bottom-2 right-12 text-stone-300 opacity-60 animate-float" style={{ animationDelay: '1.5s' }}>
          <Cloud size={36} fill="#E5E5E5" strokeWidth={0} />
        </div>
        
        {/* Little decorative stars */}
        <div className="absolute top-4 right-20 text-sakura animate-pulse">
           <Star size={16} fill="currentColor" strokeWidth={0} />
        </div>

        {/* Main Icon Group */}
        <div className="relative z-10 flex flex-col items-center animate-float">
          <div className="w-24 h-24 rounded-full bg-japan-indigo/10 flex items-center justify-center mb-2 ring-4 ring-white shadow-sm">
             <Plane size={48} className="text-japan-indigo transform -rotate-12 translate-x-1" strokeWidth={1.5} />
          </div>
        </div>
      </div>

      {/* Text Content */}
      <div className="text-center space-y-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
        <div>
            <h1 className="text-3xl font-bold text-japan-indigo tracking-widest drop-shadow-sm mb-2">
            四國・深呼吸
            </h1>
            <p className="text-xs text-stone-400 font-serif tracking-widest">
            高松 & 德島 7 日行
            </p>
        </div>
        
        <div className="pt-8">
           <p className="text-[10px] text-stone-300 tracking-wider animate-pulse flex items-center justify-center gap-2">
             <span className="w-1.5 h-1.5 bg-stone-300 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></span>
             <span className="w-1.5 h-1.5 bg-stone-300 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
             <span className="w-1.5 h-1.5 bg-stone-300 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
           </p>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;