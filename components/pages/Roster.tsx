
import React, { useState } from 'react';
import { ROSTER, STAFF } from '../../lib/data';
import { SectionHeading } from '../shared/Components';
import { User, Shield, Search } from 'lucide-react';

export default function Roster() {
  const [searchQuery, setSearchQuery] = useState('');
  
  // UNIFIED ROSTER LOGIC:
  // Instead of splitting D1/D3 tabs, we show everyone.
  // We filter based on the search query.
  const filteredPlayers = ROSTER.filter(p => {
    const query = searchQuery.toLowerCase();
    return (
      p.name.toLowerCase().includes(query) ||
      p.nickname?.toLowerCase().includes(query) ||
      p.position.toLowerCase().includes(query)
    );
  });
  
  const forwards = filteredPlayers.filter(p => p.group === 'forwards');
  const backs = filteredPlayers.filter(p => p.group === 'backs');

  const renderPlayerCard = (player: typeof ROSTER[0]) => (
    <div key={player.id} className="bg-[#1a2a4a] rounded-lg overflow-hidden group border border-white/5 hover:border-blue-500/50 transition-all shadow-lg relative">
      {player.isCaptain && (
        <div className="absolute top-0 right-0 z-20 bg-[#d4a574] text-[#0f172a] text-[10px] sm:text-xs font-bold px-2 sm:px-3 py-1 rounded-bl-lg shadow-md flex items-center gap-1">
          <Shield size={10} className="fill-[#0f172a]" /> Captain
        </div>
      )}
      
      <div className="aspect-[4/5] bg-[#0f172a] relative overflow-hidden">
        {/* Placeholder for player image */}
        {player.image ? (
           <img src={player.image} alt={player.name} className="w-full h-full object-cover object-top" />
        ) : (
           <div className="absolute inset-0 flex items-center justify-center text-white/5 group-hover:text-blue-500/10 transition-colors">
             <User className="w-20 h-20 sm:w-28 sm:h-28" />
           </div>
        )}
        
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a2a4a] via-[#1a2a4a]/40 to-transparent opacity-90"></div>
        
        <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
          <div className="text-blue-500 font-bold text-[10px] sm:text-xs uppercase tracking-widest mb-0.5 sm:mb-1">{player.position}</div>
          <div className="text-white font-display font-bold text-lg sm:text-2xl uppercase italic leading-none mb-0.5 sm:mb-1 truncate">
            {player.name}
          </div>
          {player.nickname && (
            <div className="text-[#d4a574] font-display font-bold text-xs sm:text-sm tracking-wide italic">
              "{player.nickname}"
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="pt-24 lg:pt-32 pb-20 bg-[#0d1117] min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <SectionHeading title="Meet The Team" subtitle="2026 Squad" centered />
          
          {/* Search Bar for Large Roster */}
          <div className="max-w-md mx-auto relative mb-12">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-3 border border-white/10 rounded-lg leading-5 bg-[#1a2a4a] text-gray-300 placeholder-gray-500 focus:outline-none focus:bg-[#0f172a] focus:border-blue-500 transition duration-150 ease-in-out sm:text-sm"
              placeholder="Search player name, nickname, or position..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Forwards Section */}
        {forwards.length > 0 && (
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
               <div className="h-8 w-2 bg-blue-600"></div>
               <h3 className="text-2xl sm:text-3xl font-display font-bold text-white uppercase italic">Forwards</h3>
               <div className="h-[1px] bg-white/10 flex-grow"></div>
               <span className="text-gray-500 text-sm font-bold">{forwards.length} Players</span>
            </div>
            {/* Tightened gap for mobile (gap-3 vs gap-6) */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6 animate-in fade-in duration-500">
              {forwards.map(renderPlayerCard)}
            </div>
          </div>
        )}

        {/* Backs Section */}
        {backs.length > 0 && (
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-8">
               <div className="h-8 w-2 bg-[#d4a574]"></div>
               <h3 className="text-2xl sm:text-3xl font-display font-bold text-white uppercase italic">Backs</h3>
               <div className="h-[1px] bg-white/10 flex-grow"></div>
               <span className="text-gray-500 text-sm font-bold">{backs.length} Players</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6 animate-in fade-in duration-500">
              {backs.map(renderPlayerCard)}
            </div>
          </div>
        )}
        
        {filteredPlayers.length === 0 && (
          <div className="text-center py-20 bg-[#1a2a4a]/30 rounded-xl border border-white/5">
            <p className="text-gray-400 text-lg">No players found matching "{searchQuery}"</p>
            <button 
              onClick={() => setSearchQuery('')}
              className="mt-4 text-blue-500 hover:text-blue-400 font-bold uppercase text-sm"
            >
              Clear Search
            </button>
          </div>
        )}

        {/* Coaching Staff */}
        <div className="bg-[#1a2a4a]/50 border border-white/5 rounded-xl p-6 sm:p-10">
          <h3 className="text-center font-display font-bold text-2xl text-white uppercase mb-8">Coaching Staff</h3>
          {/* Mobile: 2 Columns, Desktop: 4 Columns */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {STAFF.map((staff) => (
              <div key={staff.id} className="text-center group">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4 border border-white/10 group-hover:border-blue-500/50 transition-colors">
                  <User size={32} className="text-gray-400 group-hover:text-blue-500 transition-colors sm:w-[40px] sm:h-[40px]" />
                </div>
                <h4 className="text-white font-bold text-base sm:text-lg uppercase">{staff.name}</h4>
                <p className="text-blue-500 text-xs sm:text-sm font-bold uppercase tracking-wider">{staff.role}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-blue-900/20 border border-blue-500/20 rounded-lg p-8 text-center max-w-3xl mx-auto">
          <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-2">Want to see your name here?</h3>
          <p className="text-gray-400 mb-6 text-sm sm:text-base">We are always recruiting new talent. Training is open to all skill levels.</p>
          <a href="#" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold uppercase tracking-wider px-8 py-3 rounded-sm transition-colors w-full sm:w-auto">
            Join Training
          </a>
        </div>
      </div>
    </div>
  );
}
