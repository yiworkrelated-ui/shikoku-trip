import React, { useState } from 'react';
import { Plane, QrCode, ExternalLink, User, X, ScanLine } from 'lucide-react';
import { FLIGHTS } from '../constants';

const HomeSection: React.FC = () => {
  const [activeMemberId, setActiveMemberId] = useState<number | null>(null);

  // Generate 14 placeholder members
  const members = Array.from({ length: 14 }, (_, i) => ({
    id: i + 1,
    label: `團員 ${String(i + 1).padStart(2, '0')}`
  }));

  const activeMember = activeMemberId ? members.find(m => m.id === activeMemberId) : null;

  return (
    <div className="space-y-6 pb-24 animate-fade-in pt-6">
      
      {/* Welcome Message */}
      <div className="px-4 text-center py-6 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-1 bg-stone-200 rounded-full opacity-50"></div>
        <h2 className="text-japan-indigo font-bold tracking-[0.2em] text-lg">四國・深呼吸</h2>
        <p className="text-sm text-stone-500 mt-2 font-serif leading-relaxed">
          感受瀨戶內海的波光粼粼<br/>
          探訪深山秘境的靜謐時光
        </p>
      </div>

      {/* Flights */}
      <section className="px-1">
        <h2 className="text-xs font-bold text-stone-400 mb-4 flex items-center gap-2 tracking-widest uppercase px-1">
          <Plane size={16} /> 航班資訊
        </h2>
        <div className="space-y-4">
          {FLIGHTS.map((flight, idx) => (
            <div key={idx} className="bg-white p-5 rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.03)] border border-stone-100 relative overflow-hidden group transition-transform active:scale-[0.99]">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-japan-indigo/80"></div>
              
              <div className="flex justify-between items-center mb-5 pb-3 border-b border-dashed border-stone-100">
                <span className="bg-stone-100 text-stone-600 text-[12px] font-bold px-2.5 py-1 rounded tracking-wider">{flight.code}</span>
                <span className="text-[12px] text-stone-400 font-mono tracking-wide flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-green-400"></span>
                  {flight.date}
                </span>
              </div>
              
              <div className="flex justify-between items-center px-1">
                <div className="text-center w-20">
                   <div className="text-3xl font-bold text-stone-800 font-mono leading-none mb-1.5">{flight.depTime}</div>
                   <div className="text-[12px] text-stone-500 font-bold tracking-wide">{flight.from}</div>
                   <div className="text-[11px] text-stone-300 mt-0.5">{flight.terminal}</div>
                </div>
                
                <div className="flex-1 flex flex-col items-center px-2">
                  <div className="text-[11px] text-japan-indigo/60 mb-1 tracking-widest uppercase">Direct</div>
                  <div className="w-full flex items-center text-stone-200">
                    <div className="h-[1px] w-full bg-stone-200"></div>
                    <Plane size={18} className="mx-2 text-stone-300 fill-stone-100 rotate-90 shrink-0" />
                    <div className="h-[1px] w-full bg-stone-200"></div>
                  </div>
                  <div className="text-[11px] text-stone-300 mt-1">2h 25m</div>
                </div>
                
                <div className="text-center w-20">
                   <div className="text-3xl font-bold text-stone-800 font-mono leading-none mb-1.5">{flight.arrTime}</div>
                   <div className="text-[12px] text-stone-500 font-bold tracking-wide">{flight.to}</div>
                   <div className="text-[11px] text-stone-300 mt-0.5">Shikoku</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* QR Codes Section */}
      <section className="px-1 mt-8">
         <div className="flex justify-between items-end mb-4 px-1">
            <h2 className="text-xs font-bold text-stone-400 flex items-center gap-2 tracking-widest uppercase">
              <QrCode size={16} /> 入境 QR Code (14人)
            </h2>
            <a 
              href="https://vjw-lp.digital.go.jp/zh-hant/" 
              target="_blank" 
              rel="noreferrer" 
              className="text-[10px] text-japan-indigo flex items-center gap-1 bg-japan-indigo/5 px-2.5 py-1 rounded-full border border-japan-indigo/10 active:bg-japan-indigo/10"
            >
              Visit Japan Web <ExternalLink size={10} />
            </a>
         </div>

         <div className="grid grid-cols-2 gap-3">
           {members.map((m) => (
             <button 
               key={m.id} 
               onClick={() => setActiveMemberId(m.id)}
               className="bg-white p-3 rounded-xl border border-stone-100 shadow-sm flex items-center gap-3 active:scale-[0.96] transition-all group hover:border-japan-indigo/30"
             >
               <div className="w-10 h-10 rounded-full bg-stone-50 text-stone-300 flex items-center justify-center group-hover:bg-japan-indigo/10 group-hover:text-japan-indigo transition-colors border border-stone-100">
                 <QrCode size={18} />
               </div>
               <div className="text-left">
                 <div className="text-[10px] text-stone-400 font-bold tracking-wider flex items-center gap-1">
                   <User size={8} /> MEMBER
                 </div>
                 <div className="text-sm font-bold text-stone-700">{m.label}</div>
               </div>
             </button>
           ))}
         </div>
         <p className="text-[10px] text-stone-400 mt-3 text-center px-4 leading-relaxed">
           *請確保所有團員皆已完成 Visit Japan Web 登錄並截圖保存 QR Code
         </p>
      </section>

      {/* QR Code Zoom Modal */}
      {activeMember && (
        <div 
          className="fixed inset-0 z-[60] flex items-center justify-center p-6 bg-stone-900/90 backdrop-blur-sm animate-fade-in"
          onClick={() => setActiveMemberId(null)}
        >
          <div 
            className="w-full max-w-sm bg-white rounded-3xl p-6 relative shadow-2xl animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setActiveMemberId(null)}
              className="absolute top-4 right-4 p-2 bg-stone-100 rounded-full text-stone-500 hover:bg-stone-200 transition-colors"
            >
              <X size={20} />
            </button>

            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 bg-japan-indigo/10 text-japan-indigo px-3 py-1 rounded-full text-xs font-bold tracking-wider mb-2">
                <User size={12} /> {activeMember.label}
              </div>
              <h3 className="text-xl font-bold text-stone-800">Visit Japan Web</h3>
              <p className="text-xs text-stone-400 mt-1">請向海關人員出示此畫面</p>
            </div>

            <div className="aspect-square bg-stone-900 rounded-2xl flex flex-col items-center justify-center relative overflow-hidden border-4 border-stone-900 group">
               {/* Visual placeholder for the QR Code */}
               <div className="bg-white p-4 rounded-xl">
                 <QrCode size={200} className="text-stone-900" />
               </div>
               
               {/* Scan line animation effect */}
               <div className="absolute inset-0 bg-gradient-to-b from-transparent via-japan-indigo/20 to-transparent h-1/4 w-full animate-float pointer-events-none"></div>
               
               <div className="absolute bottom-4 text-white/70 text-[10px] flex items-center gap-1.5 bg-black/50 px-3 py-1 rounded-full backdrop-blur-md">
                 <ScanLine size={12} /> 請保持螢幕最大亮度
               </div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-xs text-stone-400 leading-relaxed">
                若 QR Code 無法讀取，請嘗試調整螢幕亮度或直接開啟 Visit Japan Web 網站。
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default HomeSection;