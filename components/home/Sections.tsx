
import React from 'react';
import { ArrowRight, Trophy, Dumbbell, Users, Beer, MapPin, Handshake, Shield, ChevronRight, CalendarPlus, Clock, ShoppingBag } from 'lucide-react';
import { SectionProps, Match } from '../../lib/types';
import { UPCOMING_MATCH, SPONSORS } from '../../lib/data';
import { CTACard, SectionHeading } from '../shared/Components';

// 1. RECRUITMENT FOCUSED "CULTURE" SECTION
export function AboutSection({ navigateTo }: SectionProps) {
  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-[#0a0f1c] overflow-hidden">
      
      {/* --- BACKGROUND ARCHITECTURE --- */}
      
      {/* Desktop Background: Image Left (55% width), Fading to Right */}
      <div className="hidden lg:block absolute inset-y-0 left-0 w-[55%] z-0 select-none">
        <div className="relative w-full h-full">
          <img 
            src="https://ik.imagekit.io/fukntosc3/Mikel%20Facey.png" 
            alt="Mikel Facey - Detroit Tradesmen" 
            className="w-full h-full object-cover object-top opacity-100 relative z-0"
          />
          
          {/* Gradient Masks (Overlaid on image for smooth blending) */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0a0f1c] z-10"></div>
          {/* Bottom gradient specifically for legs blending */}
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#0a0f1c] via-[#0a0f1c]/60 to-transparent z-10"></div>

          {/* Player Spotlight Label - Desktop */}
          <div className="absolute bottom-12 left-12 z-20 animate-in slide-in-from-left-4 duration-1000 delay-300">
            <div className="border-l-4 border-[#d4a574] pl-4 py-1 bg-black/10 backdrop-blur-[2px] pr-6 rounded-r-sm">
              <h3 className="font-display font-bold text-3xl text-white uppercase italic leading-none mb-1 drop-shadow-md">Mikel Facey</h3>
              <p className="text-gray-200 text-sm font-bold uppercase tracking-wider drop-shadow-sm">Jamaica 7s Captain</p>
              <p className="text-[#d4a574] text-xs font-bold uppercase tracking-widest drop-shadow-sm">RugbyTown MVP</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Background: Image Top (60vh), Fading to Bottom */}
      <div className="lg:hidden absolute top-0 left-0 w-full h-[60vh] z-0 select-none">
        <div className="relative w-full h-full">
          <img 
            src="https://ik.imagekit.io/fukntosc3/Mikel%20Facey.png" 
            alt="Mikel Facey - Detroit Tradesmen" 
            className="w-full h-full object-cover object-[center_20%] opacity-100 relative z-0"
          />
          {/* Strong fade at the bottom (Overlaid on image) */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0f1c]/10 to-[#0a0f1c] z-10"></div>
        </div>
      </div>

      {/* Blue Glow Accent (Behind Text area for depth) */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none z-0"></div>

      {/* --- CONTENT CONTAINER --- */}
      {/* Increased padding top on mobile to account for taller image */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 w-full pt-[50vh] lg:pt-0 pb-20 lg:pb-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          
          {/* Spacer Column (Keeps text off the image on Desktop) */}
          <div className="hidden lg:block"></div>

          {/* Content Column */}
          <div className="flex flex-col justify-center">
            
            {/* Header Area */}
            <div className="mb-10 relative">
              <h2 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl uppercase italic text-white mb-6 leading-[0.9] drop-shadow-xl relative z-20">
                More Than <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-white">Just A Game</span>
              </h2>
              
              <div className="h-1 w-24 bg-blue-600 mb-8 shadow-[0_0_15px_rgba(37,99,235,0.6)]"></div>

              <p className="text-gray-300 leading-relaxed text-lg mb-6 font-light max-w-2xl relative z-20">
                Since 1978, the Detroit Tradesmen have upheld a winning standard. We have made numerous appearances on the national stage, including winning <strong>five Midwest championships</strong> and earning second place in the <strong>2016 USA Rugby DII National Championship</strong>.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-8 relative z-20">
                <button 
                  onClick={() => navigateTo('join')}
                  className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-sm font-display font-bold uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] flex items-center justify-center gap-2 group w-full sm:w-auto"
                >
                  Start Training <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={() => navigateTo('old-boys')}
                  className="px-8 py-4 border border-white/20 hover:bg-white/10 text-white font-display font-bold uppercase tracking-widest transition-all rounded-sm w-full sm:w-auto backdrop-blur-md"
                >
                  Our History
                </button>
              </div>
            </div>

            {/* Stats Grid - "Bucket Boards" */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-white/10 pt-8 relative z-20">
              <div className="bg-[#131b2e]/80 border border-white/5 p-5 rounded-lg hover:border-blue-500/30 transition-colors flex items-start gap-4 group">
                <div className="bg-blue-600/10 p-2 rounded group-hover:bg-blue-600/20 transition-colors">
                  <Trophy className="w-6 h-6 text-blue-500 shrink-0" />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase tracking-wider text-sm">Dominance</h4>
                  <p className="text-gray-400 text-xs mt-1">5x Midwest Champs. National Runners-up.</p>
                </div>
              </div>
              
              <div className="bg-[#131b2e]/80 border border-white/5 p-5 rounded-lg hover:border-blue-500/30 transition-colors flex items-start gap-4 group">
                <div className="bg-blue-600/10 p-2 rounded group-hover:bg-blue-600/20 transition-colors">
                  <Dumbbell className="w-6 h-6 text-blue-500 shrink-0" />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase tracking-wider text-sm">Elite Training</h4>
                  <p className="text-gray-400 text-xs mt-1">Tue & Thu 6:30PM. Professional Coaching.</p>
                </div>
              </div>

              <div className="bg-[#131b2e]/80 border border-white/5 p-5 rounded-lg hover:border-blue-500/30 transition-colors flex items-start gap-4 group">
                <div className="bg-blue-600/10 p-2 rounded group-hover:bg-blue-600/20 transition-colors">
                  <Users className="w-6 h-6 text-blue-500 shrink-0" />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase tracking-wider text-sm">Brotherhood</h4>
                  <p className="text-gray-400 text-xs mt-1">A lifelong network of support. D1 & D3 Sides.</p>
                </div>
              </div>

              <div className="bg-[#131b2e]/80 border border-white/5 p-5 rounded-lg hover:border-blue-500/30 transition-colors flex items-start gap-4 group">
                <div className="bg-blue-600/10 p-2 rounded group-hover:bg-blue-600/20 transition-colors">
                  <Beer className="w-6 h-6 text-blue-500 shrink-0" />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase tracking-wider text-sm">Social</h4>
                  <p className="text-gray-400 text-xs mt-1">Strong community presence since 1978.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

// 2. NEXT MATCH SECTION
export function NextMatchSection({ navigateTo }: SectionProps) {
  const match = UPCOMING_MATCH;

  return (
    <section className="py-20 bg-[#0d1117] border-y border-white/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-900/5 -skew-x-12 transform origin-top-right"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        {/* Customized Header Layout: Title Left, Link Right */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 gap-4">
          <h2 className="font-display font-bold text-4xl md:text-5xl uppercase italic text-white leading-none text-center md:text-left">
            Next Match
          </h2>
          <button 
            onClick={() => navigateTo('schedule')}
            className="text-blue-500 hover:text-white font-bold uppercase tracking-widest text-sm transition-colors mb-1"
          >
            See Full Schedule
          </button>
        </div>

        {match ? (
          <div className="bg-[#1a2a4a] rounded-xl border border-white/10 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-32 bg-blue-600/10 rounded-full blur-3xl group-hover:bg-blue-600/20 transition-all"></div>
            
            {/* Left: Date & Time */}
            <div className="text-center md:text-left flex-shrink-0">
              <div className="flex items-center gap-2 justify-center md:justify-start text-blue-400 font-bold uppercase tracking-widest mb-2">
                <CalendarPlus size={18} />
                <span>Upcoming Match</span>
              </div>
              <div className="text-5xl md:text-6xl font-display font-bold text-white mb-2">{match.date}</div>
              <div className="text-xl text-gray-400 flex items-center justify-center md:justify-start gap-2">
                <Clock size={18} /> {match.time}
              </div>
            </div>

            {/* Middle: VS */}
            <div className="flex flex-col items-center">
              <div className="text-7xl font-display font-black text-white/10 italic">VS</div>
            </div>

            {/* Right: Opponent & Location */}
            <div className="text-center md:text-right flex-shrink-0">
              <div className="text-blue-500 font-bold uppercase tracking-widest mb-2">Opponent</div>
              <div className="text-3xl md:text-4xl font-display font-bold text-white mb-4">{match.opponent}</div>
              <div className="inline-flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full text-gray-300 border border-white/5">
                <MapPin size={16} /> {match.location}
              </div>
            </div>
            
            {/* Action */}
            <div className="md:border-l md:border-white/10 md:pl-8 flex flex-col gap-3 w-full md:w-auto">
               <button 
                  onClick={() => navigateTo('schedule')}
                  className="bg-white text-[#0f172a] hover:bg-gray-200 font-bold uppercase px-6 py-3 rounded shadow-lg transition-colors w-full whitespace-nowrap"
               >
                 View Schedule
               </button>
               <button 
                  className="border border-white/20 text-white hover:bg-white/10 font-bold uppercase px-6 py-3 rounded transition-colors w-full whitespace-nowrap"
               >
                 Directions
               </button>
            </div>
          </div>
        ) : (
          <div className="bg-[#1a2a4a] rounded-xl border border-white/10 p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-full bg-blue-500/5 blur-3xl"></div>
            <div className="relative z-10">
              <div className="text-[#d4a574] mb-6 flex justify-center">
                <Trophy size={56} strokeWidth={1.5} />
              </div>
              <h3 className="text-4xl font-display font-bold text-white mb-4 italic uppercase">2026 Season Awaits</h3>
              <p className="text-gray-400 mb-8 max-w-xl mx-auto text-lg leading-relaxed">
                The 2025 season has concluded. We are currently preparing for our 2026 campaign. 
                Check back soon for the new fixture list or join us for off-season training.
              </p>
              <button 
                onClick={() => navigateTo('join')}
                className="bg-blue-600 hover:bg-blue-500 text-white font-bold uppercase px-10 py-4 rounded transition-colors shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] flex items-center justify-center gap-2 mx-auto"
              >
                Join The Team <ArrowRight size={18} />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

// 3. SPONSOR SCROLL SECTION
export function SponsorScrollSection({ navigateTo }: SectionProps) {
  // Creating a marquee loop by duplicating sponsors to fill width and allow seamless scrolling
  const marqueeSponsors = [...SPONSORS, ...SPONSORS, ...SPONSORS, ...SPONSORS];

  return (
    <section className="py-10 bg-white border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-6 flex flex-col md:flex-row justify-between items-center md:items-end gap-4">
        <div className="text-center md:text-left">
          <h3 className="text-slate-900 font-display font-bold text-3xl uppercase italic tracking-wide">Our Partners</h3>
        </div>
        <button 
          onClick={() => navigateTo('sponsors')}
          className="text-blue-600 font-bold uppercase text-xs tracking-wider hover:text-blue-800 transition-colors"
        >
          Become a Sponsor &rarr;
        </button>
      </div>
      
      <div className="relative w-full">
        {/* Gradient Masks for smooth entry/exit */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        {/* Scrolling Container */}
        <div className="flex w-max animate-scroll hover:[animation-play-state:paused] py-4 items-center">
          {marqueeSponsors.map((sponsor, i) => (
             <a 
               key={i} 
               href={sponsor.url}
               target="_blank"
               rel="noopener noreferrer"
               className="flex-shrink-0 mx-6 md:mx-8 h-20 md:h-24 flex items-center justify-center opacity-100 hover:scale-105 transition-all duration-300 cursor-pointer"
             >
               {sponsor.image ? (
                 <img src={sponsor.image} alt={sponsor.name} className="max-h-full w-auto object-contain" />
               ) : (
                 <span className="font-display font-bold text-2xl text-slate-400 uppercase">{sponsor.logo}</span>
               )}
             </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// 4. CTA SECTION
export function CTASection({ navigateTo }: SectionProps) {
  return (
    <section className="py-24 bg-[#0d1117]">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Added Title Block */}
        <div className="mb-12">
          <SectionHeading title="Get Involved" subtitle="Join The Movement" centered />
        </div>

        <div className="grid md:grid-cols-3 gap-6 h-full">
          
          <CTACard 
            icon={<Users size={24} className="text-white" />}
            title="Join The Team"
            desc="No experience required. Competitive & Social sides available."
            btnText="Recruitment Info"
            onClick={() => navigateTo('join')}
            accent="blue"
          />

          <CTACard 
            icon={<Handshake size={24} className="text-white" />}
            title="Sponsorship"
            desc="Partner with Michigan's premier rugby brand."
            btnText="View Opportunities"
            onClick={() => navigateTo('sponsors')}
            accent="slate"
          />

          <CTACard 
            icon={<Shield size={24} className="text-white" />}
            title="Support"
            desc="We are a 501(c)(3) nonprofit. Help us grow the game."
            btnText="Donate"
            onClick={() => navigateTo('store')} // Directing to Store/Events where donations live
            accent="slate"
          />

        </div>
      </div>
    </section>
  );
}
