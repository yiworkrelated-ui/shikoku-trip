import React from 'react';
import { Building, Phone } from 'lucide-react';
import { HOTELS, EMERGENCY_CONTACTS } from '../constants';

const InfoSection: React.FC = () => {
  return (
    <div className="space-y-6 pb-24 animate-fade-in">
      
      {/* Hotels */}
      <section>
        <h2 className="text-lg font-bold text-japan-indigo mb-3 px-1 flex items-center gap-2">
          <Building size={22} /> 住宿資訊
        </h2>
        <div className="space-y-4">
          {HOTELS.map((hotel, idx) => (
            <div key={idx} className="bg-white p-5 rounded-xl shadow-sm border border-stone-100">
              <h3 className="font-bold text-stone-800 text-lg">{hotel.name}</h3>
              <p className="text-sm text-stone-500 mt-1 mb-3">{hotel.dates}</p>
              <div className="flex gap-3 mt-3">
                <button 
                  onClick={() => window.open(`tel:${hotel.phone}`)}
                  className="flex-1 bg-japan-indigo/10 text-japan-indigo text-xs py-2.5 rounded-lg font-medium active:bg-japan-indigo/20 text-center"
                >
                  撥打電話
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Emergency */}
      <section>
        <h2 className="text-lg font-bold text-japan-red mb-3 px-1 flex items-center gap-2">
          <Phone size={22} /> 緊急聯絡
        </h2>
        <div className="grid grid-cols-2 gap-3">
          {EMERGENCY_CONTACTS.map((contact, idx) => (
            <button key={idx} onClick={() => window.open(`tel:${contact.number}`)} className="bg-white p-4 rounded-xl shadow-sm border border-red-50 text-left active:bg-red-50">
              <div className="text-[12px] text-stone-400 mb-1">{contact.name}</div>
              <div className="text-xl font-bold text-japan-red font-mono">{contact.number}</div>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};

export default InfoSection;