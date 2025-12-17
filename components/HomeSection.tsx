import React, { useState } from 'react';
import { Plane, QrCode, ExternalLink, User, X, ScanLine, Image as ImageIcon } from 'lucide-react';
import { FLIGHTS } from '../constants';

// Define the members based on the provided QR codes
const MEMBERS = [
  { id: '1', name: '游騰宏', fileName: 'YU_TENG_HUNG' },
  { id: '2', name: '林玉慧', fileName: 'LIN_YUHUI' },
  { id: '3', name: '游翎崴', fileName: 'YU_LINGWEI' },
  { id: '4', name: '游程瑞', fileName: 'YU_CHENG_JUI' },
  { id: '5', name: '黃羿柔', fileName: 'HUANG_YIROU' },
  { id: '6', name: '康錦昌', fileName: 'KANG_CHINCHANG' },
  { id: '7', name: '李佩陵', fileName: 'LI_PAILING' },
  { id: '8', name: '陳明郎', fileName: 'CHEN_MINGLANG' },
  { id: '9', name: '黃素英', fileName: 'HUANG_SUYING' },
  { id: '10', name: '鄭宇智', fileName: 'CHENG_YU_CHIH' },
  { id: '11', name: '羅長銳', fileName: 'LO_CHANGJUI' },
  { id: '12', name: '游蕙珍', fileName: 'YU_HUICHEN' },
  { id: '13', name: '林建佑', fileName: 'LIN_CHIENYU' },
  { id: '14', name: '林佩瑩', fileName: 'LIN_PEIYING' },
];

const HomeSection: React.FC = () => {
  const [activeMemberId, setActiveMemberId] = useState<string | null>(null);
  const [imageError, setImageError] = useState(false);

  const activeMember = activeMemberId ? MEMBERS.find(m => m.id === activeMemberId) : null;

  const handleMemberClick = (id: string) => {
    setActiveMemberId(id);
    setImageError(false); // Reset error state on open
  };

  return (
    <div className="space-y-6 pb-24 animate-fade-in pt-6">
      
      {/* Welcome Message */}
      <div className="px-4 text-center py-6 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-1 bg-stone-200 rounded-full opacity-50"></div>
        <h2 className="text-japan-indigo font-bold tracking-[0.2em] text-lg">高松・德島</h2>
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
              <QrCode size={16} /> 入境 QR Code ({MEMBERS.length}人)
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
           {MEMBERS.map((m) => (
             <button 
               key={m.id} 
               onClick={() => handleMemberClick(m.id)}
               className="bg-white p-3 rounded-xl border border-stone-100 shadow-sm flex items-center gap-3 active:scale-[0.96] transition-all group hover:border-japan-indigo/30"
             >
               <div className="w-10 h-10 rounded-full bg-stone-50 text-stone-300 flex items-center justify-center group-hover:bg-japan-indigo/10 group-hover:text-japan-indigo transition-colors border border-stone-100 overflow-hidden">
                 <QrCode size={18} />
               </div>
               <div className="text-left overflow-hidden">
                 <div className="text-[10px] text-stone-400 font-bold tracking-wider flex items-center gap-1">
                   <User size={8} /> MEMBER
                 </div>
                 <div className="text-sm font-bold text-stone-700 truncate w-full pr-1">{m.name}</div>
               </div>
             </button>
           ))}
         </div>
         <p className="text-[10px] text-stone-400 mt-3 text-center px-4 leading-relaxed">
           *請點擊姓名查看專屬 QR Code
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
                <User size={12} /> {activeMember.name}
              </div>
              <h3 className="text-xl font-bold text-stone-800">Visit Japan Web</h3>
              <p className="text-xs text-stone-400 mt-1">請向海關人員出示此畫面</p>
            </div>

            <div className="aspect-square bg-stone-100 rounded-2xl flex flex-col items-center justify-center relative overflow-hidden border-4 border-stone-100 group">
               {/* Image Display */}
               {!imageError ? (
                 <img 
                   src={`/qr/${activeMember.fileName}.png`} 
                   alt={activeMember.name}
                   className="w-full h-full object-contain p-2"
                   onError={() => setImageError(true)}
                 />
               ) : (
                 <div className="flex flex-col items-center justify-center text-stone-400 p-4 text-center">
                   <ImageIcon size={48} className="mb-3 opacity-30" />
                   <p className="text-sm font-bold">找不到 QR Code 圖片</p>
                   <p className="text-xs mt-1 opacity-70">請確認 public/qr/{activeMember.fileName}.png 是否存在</p>
                 </div>
               )}
               
               {/* Scan line animation effect (only if no error) */}
               {!imageError && (
                 <div className="absolute inset-0 bg-gradient-to-b from-transparent via-japan-indigo/20 to-transparent h-1/4 w-full animate-float pointer-events-none"></div>
               )}
               
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