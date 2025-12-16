import React from 'react';
import { Cloud, Sun, CloudRain, Snowflake } from 'lucide-react';

interface WeatherProps {
  weather?: string;
  temp?: string;
}

const WeatherWidget: React.FC<WeatherProps> = ({ weather, temp }) => {
  const getWeatherIcon = () => {
    if (!weather) return <Sun size={20} className="text-orange-400" />;
    const w = weather.toLowerCase();
    
    // Support both English and Chinese keywords
    if (w.includes('rain') || w.includes('雨')) return <CloudRain size={20} className="text-blue-400" />;
    if (w.includes('snow') || w.includes('雪')) return <Snowflake size={20} className="text-cyan-400" />;
    if (w.includes('cloud') || w.includes('雲') || w.includes('陰')) return <Cloud size={20} className="text-stone-400" />;
    
    return <Sun size={20} className="text-orange-400" />;
  };

  return (
    <div className="flex items-center gap-2.5 bg-white/60 px-4 py-2 rounded-full border border-stone-100 shadow-sm">
      {getWeatherIcon()}
      <div className="flex flex-col leading-none">
        <span className="text-sm font-bold text-stone-700">{temp || '7°C'}</span>
        <span className="text-[12px] text-stone-500 mt-0.5">{weather || '晴時多雲'}</span>
      </div>
    </div>
  );
};

export default WeatherWidget;