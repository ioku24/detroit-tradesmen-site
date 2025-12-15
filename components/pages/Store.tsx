
import React from 'react';
import { SectionHeading } from '../shared/Components';
import { Calendar, MapPin, ExternalLink, Heart, ShoppingBag, Beer, Check, Trophy, Shield } from 'lucide-react';
import { AKUMA_URL, ZEFFY_URL } from '../../lib/data';

export default function Store() {
  const handleZeffyClick = () => {
    window.open(ZEFFY_URL, '_blank');
  };

  return (
    <div className="pt-32 pb-20 bg-[#0d1117] min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-16">
          <SectionHeading title="Events & Support" subtitle="Get Involved" centered />
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Register for upcoming tournaments, support the club with a monthly donation, or visit our partner store for team apparel.
          </p>
        </div>

        {/* Featured Event: Eastside Hyenas */}
        <div className="mb-24">
          <h3 className="font-display font-bold text-3xl text-white mb-8 border-l-4 border-blue-600 pl-4 uppercase italic">Upcoming Events</h3>
          
          <div className="bg-[#1a2a4a] border border-white/10 rounded-xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
            {/* Image Side */}
            <div className="md:w-2/5 relative min-h-[300px]">
              <img 
                src="https://ik.imagekit.io/fukntosc3/East%20Side%20Hyena.png" 
                alt="Eastside Hyenas Rugby" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply"></div>
            </div>
            
            {/* Content Side */}
            <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
              <h2 className="font-display font-black text-4xl text-white mb-2 uppercase">Eastside Hyenas 2026</h2>
              <div className="flex flex-col gap-2 text-blue-400 font-bold uppercase text-sm mb-6">
                <span className="flex items-center gap-2"><Calendar size={16}/> July 2026</span>
                <span className="flex items-center gap-2"><MapPin size={16}/> Lake Placid, NY (Can-Am Tournament)</span>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Join the Eastside Hyenas in Lake Placid for the legendary Can-Am Rugby Tournament. 
                Includes player entry fee, the infamous Chuba shirt, Hyenas bucket hat, and afterparty tab at Casa Del Sol.
              </p>
              
              <div className="bg-[#0f172a] rounded-lg p-6 border border-white/5 mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-bold text-lg">Player Registration</span>
                  <span className="text-2xl font-display font-bold text-white">$125</span>
                </div>
                <p className="text-xs text-gray-500 mb-4">Registration deadlines apply.</p>
                <button 
                  onClick={handleZeffyClick}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold uppercase py-3 rounded transition-colors"
                >
                  Select
                </button>
              </div>
              
              <div className="text-xs text-gray-500 italic">
                * As always, any additional donations at checkout go to Zeffy, not the Tradesmen.
              </div>
            </div>
          </div>
        </div>

        {/* Donations Section - Redesigned */}
        <div>
          <h3 className="font-display font-bold text-3xl text-white mb-8 border-l-4 border-[#d4a574] pl-4 uppercase italic">Club Supporter</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Tier 1 */}
            <div className="bg-[#1a2a4a] rounded-xl border border-white/5 p-8 flex flex-col relative group hover:border-white/20 transition-all">
              <div className="mb-4 text-blue-400">
                <Beer size={32} />
              </div>
              <h4 className="text-white font-bold text-xl uppercase tracking-wider mb-2">Social Member</h4>
              <div className="text-3xl font-display font-bold text-white mb-6">$10 <span className="text-sm text-gray-500 font-normal">/ month</span></div>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start gap-3 text-sm text-gray-400">
                  <Check size={16} className="text-blue-500 mt-0.5" /> Supports field paint & maintenance
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-400">
                  <Check size={16} className="text-blue-500 mt-0.5" /> Post-match social supplies
                </li>
              </ul>
              <button 
                onClick={handleZeffyClick}
                className="w-full border border-blue-500/30 text-blue-400 font-bold uppercase py-3 rounded hover:bg-blue-500 hover:text-white transition-colors"
              >
                Donate
              </button>
            </div>

            {/* Tier 2 - Featured */}
            <div className="bg-[#1a2a4a] rounded-xl border border-blue-500 p-8 flex flex-col relative transform md:-translate-y-4 shadow-xl shadow-blue-900/20">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Most Popular</div>
              <div className="mb-4 text-blue-500">
                <Shield size={32} />
              </div>
              <h4 className="text-white font-bold text-xl uppercase tracking-wider mb-2">Club Member</h4>
              <div className="text-3xl font-display font-bold text-white mb-6">$20 <span className="text-sm text-gray-500 font-normal">/ month</span></div>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start gap-3 text-sm text-gray-300">
                  <Check size={16} className="text-blue-500 mt-0.5" /> Covers referee fees for one match
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-300">
                  <Check size={16} className="text-blue-500 mt-0.5" /> Medical supplies & tape
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-300">
                  <Check size={16} className="text-blue-500 mt-0.5" /> Match video recording
                </li>
              </ul>
              <button 
                onClick={handleZeffyClick}
                className="w-full bg-blue-600 text-white font-bold uppercase py-3 rounded hover:bg-blue-700 transition-colors shadow-lg"
              >
                Donate
              </button>
            </div>

            {/* Tier 3 */}
            <div className="bg-[#1a2a4a] rounded-xl border border-[#d4a574]/30 p-8 flex flex-col relative group hover:border-[#d4a574]/60 transition-all">
              <div className="mb-4 text-[#d4a574]">
                <Trophy size={32} />
              </div>
              <h4 className="text-white font-bold text-xl uppercase tracking-wider mb-2">Tradesman Patron</h4>
              <div className="text-3xl font-display font-bold text-white mb-6">$50 <span className="text-sm text-gray-500 font-normal">/ month</span></div>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start gap-3 text-sm text-gray-400">
                  <Check size={16} className="text-[#d4a574] mt-0.5" /> Subsidizes rookie dues
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-400">
                  <Check size={16} className="text-[#d4a574] mt-0.5" /> Travel fund for playoffs
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-400">
                  <Check size={16} className="text-[#d4a574] mt-0.5" /> Youth rugby development
                </li>
              </ul>
              <button 
                onClick={handleZeffyClick}
                className="w-full border border-[#d4a574]/50 text-[#d4a574] font-bold uppercase py-3 rounded hover:bg-[#d4a574] hover:text-[#0f172a] transition-colors"
              >
                Donate
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
