
import React, { useState } from 'react';
import { MapPin, Clock, Trophy, XCircle, ExternalLink, CalendarPlus, CheckCircle, AlertTriangle } from 'lucide-react';
import { SCHEDULE } from '../../lib/data';
import { SectionHeading } from '../shared/Components';
import { Match } from '../../lib/types';

export default function Schedule() {
  const [view, setView] = useState<'all'>('all');
  
  // In this context, everything in SCHEDULE is from 2025 (past)
  const matches = SCHEDULE;

  const getMapLink = (location: string) => {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`;
  };

  return (
    <div className="pt-24 lg:pt-32 pb-20 bg-[#0d1117] min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Update Notice Banner */}
        <div className="bg-blue-900/30 border border-blue-500/50 rounded-lg p-6 mb-12 text-center relative overflow-hidden">
           <div className="absolute top-0 right-0 -mt-2 -mr-2 bg-blue-600 w-16 h-16 blur-xl opacity-50 rounded-full"></div>
           <div className="relative z-10 flex flex-col items-center gap-3">
             <div className="inline-flex items-center gap-2 bg-blue-600 text-white text-xs font-bold uppercase px-3 py-1 rounded-full">
               <AlertTriangle size={14} /> Update Pending
             </div>
             <h2 className="text-2xl font-display font-bold text-white uppercase italic">2026 Schedule Coming Soon</h2>
             <p className="text-gray-300 max-w-lg mx-auto">
               We are currently finalizing the 2026 competitive season schedule. 
               Matches listed below are from the completed <span className="text-white font-bold">2025 Season</span> for reference.
             </p>
           </div>
        </div>

        <SectionHeading title="2025 Season Archive" subtitle="Completed Season Results" centered />
        
        <div className="space-y-4 animate-in slide-in-from-bottom-4 duration-700">
          {matches.map((match, idx) => (
            <div 
              key={match.id} 
              className="bg-[#1a2a4a]/60 border border-white/5 rounded-lg p-6 flex flex-col md:flex-row items-center justify-between opacity-70 hover:opacity-100 transition-all hover:bg-[#1a2a4a]"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="flex items-center gap-6 w-full md:w-auto">
                {/* Result Indicator */}
                <div className={`p-3 rounded-full ${match.result?.won ? 'bg-green-500/20 text-green-500' : 'bg-gray-500/20 text-gray-400'}`}>
                  {match.result?.won ? <Trophy size={24} /> : <CheckCircle size={24} />}
                </div>
                
                {/* Info */}
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className={`font-display font-bold text-2xl ${match.result ? (match.result.won ? 'text-green-400' : 'text-red-400') : 'text-gray-300'}`}>
                      {match.result ? (match.result.won ? 'WIN' : 'LOSS') : 'FINAL'}
                    </span>
                    {match.result && (
                        <span className="text-white font-bold text-xl">
                            {match.result.home} - {match.result.away}
                        </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">vs {match.opponent}</h3>
                  <div className="text-gray-500 text-sm mt-1 uppercase flex items-center gap-2">
                    <span>{match.date} 2025</span> 
                    <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                    <span>{match.location}</span>
                  </div>
                </div>
              </div>

              {/* Status Tag */}
              <div className="mt-4 md:mt-0 flex items-center gap-2">
                 <div className="px-3 py-1 rounded bg-white/5 text-gray-500 text-xs font-bold uppercase tracking-wider border border-white/5">
                    Season Completed
                 </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 p-6 bg-[#1a2a4a]/50 rounded-lg border border-white/5 text-center">
          <p className="text-gray-400 text-sm">
            Check back soon for the 2026 fixture list. Follow us on social media for real-time announcements.
          </p>
        </div>
      </div>
    </div>
  );
}
