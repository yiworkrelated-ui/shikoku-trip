import React, { useEffect, useState } from 'react';
import { Plane, Cloud, Star } from 'lucide-react';

interface SplashScreenProps {
  onFinish: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onFinish }) => {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Show for 3 seconds total
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
      <div className="relative mb-10 w-64 h-32 flex items-center justify-center">
        
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
      <div className="text-center space-y-5 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
        <h1 className="text-4xl font-bold text-japan-indigo tracking-widest drop-shadow-sm">
          高松德島之旅
        </h1>
        
        <div className="flex items-center justify-center gap-3">
          <div className="h-px w-10 bg-japan-red/30"></div>
          <p className="text-base font-mono text-stone-500 tracking-widest font-bold">
            12/20 - 12/26
          </p>
          <div className="h-px w-10 bg-japan-red/30"></div>
        </div>

        <div className="pt-10">
           <p className="text-[12px] text-stone-400 tracking-wider animate-pulse">
             正在準備您的行程...
           </p>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;