
import React from 'react';
import { ArrowRight, Trophy, Dumbbell, Users, Beer, MapPin, Handshake, Shield, ChevronRight, CalendarPlus, Clock } from 'lucide-react';
import { SectionProps, Match } from '../../lib/types';
import { UPCOMING_MATCH, SPONSORS } from '../../lib/data';
import { CTACard, SectionHeading } from '../shared/Components';

// 1. RECRUITMENT FOCUSED "CULTURE" SECTION
export function AboutSection({ navigateTo }: SectionProps) {
  return (
    <section className="py-24 bg-[#0a0f1c] relative">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-lg hover:bg-white/10 transition-colors">
                <Trophy className="w-8 h-8 text-blue-500 mb-4" />
                <h4 className="text-white font-bold uppercase mb-2">Dominance</h4>
                <p className="text-gray-400 text-sm">5x Midwest Champions. 2016 National Championship Runner-up.</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-lg hover:bg-white/10 transition-colors mt-8">
                <Dumbbell className="w-8 h-8 text-blue-500 mb-4" />
                <h4 className="text-white font-bold uppercase mb-2">Training</h4>
                <p className="text-gray-400 text-sm">
                  <span className="block text-white">Tues & Thurs 6:30-8:30PM</span>
                  <span className="block mt-1">Handy Park, Redford</span>
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-lg hover:bg-white/10 transition-colors">
                <Users className="w-8 h-8 text-blue-500 mb-4" />
                <h4 className="text-white font-bold uppercase mb-2">Brotherhood</h4>
                <p className="text-gray-400 text-sm">A lifelong network of support on and off the pitch. D1 & D3 sides.</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-lg hover:bg-white/10 transition-colors mt-8">
                <Beer className="w-8 h-8 text-blue-500 mb-4" />
                <h4 className="text-white font-bold uppercase mb-2">Social</h4>
                <p className="text-gray-400 text-sm">Regular events and a strong community presence since 1978.</p>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <h2 className="font-display font-black text-4xl md:text-6xl uppercase italic text-white mb-6 leading-tight">
              More Than <br/>
              <span className="text-blue-500">Just A Game</span>
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg mb-6 font-light">
              Since 1978, the Detroit Tradesmen have upheld a winning standard. The Tradesmen have made numerous appearances on the national stage including winning <strong>five Midwest championships</strong> and earning second place in the <strong>2016 USA Rugby DII National Championship</strong>.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg mb-8 font-light">
              We proudly offer Men’s Division 1 & 3 teams. Whether you are aiming for the national stage or looking for a new competitive outlet, the Tradesmen offer a professional environment to push your limits.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 items-center">
              <button 
                onClick={() => navigateTo('join')}
                className="bg-white text-[#0a0f1c] px-8 py-3 rounded-sm font-display font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors w-full sm:w-auto"
              >
                Join Training
              </button>
              <button 
                onClick={() => navigateTo('old-boys')}
                className="text-blue-500 font-bold uppercase tracking-wide flex items-center gap-2 hover:text-blue-400 group"
              >
                Our History <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 2. MATCH SECTION WITH "POLISHED" LOOK
export function NextMatchSection({ navigateTo }: SectionProps) {
  
  const addToGoogleCalendar = (match: Match) => {
    const year = 2026;
    const monthMap: {[key:string]: number} = { JAN:0, FEB:1, MAR:2, APR:3, MAY:4, JUN:5, JUL:6, AUG:7, SEP:8, OCT:9, NOV:10, DEC:11 };
    
    // Parse Date "SAT AUG 30"
    const parts = match.date.split(' ');
    if (parts.length < 3) return;
    const monthStr = parts[1];
    const dayStr = parts[2];
    const month = monthMap[monthStr];
    const day = parseInt(dayStr);
    
    let hours = 13; // Default
    let minutes = 0;
    
    if (match.time !== 'TBD') {
        const [timeStr, period] = match.time.split(' ');
        const [h, m] = timeStr.split(':').map(Number);
        hours = h;
        minutes = m;
        if (period === 'PM' && hours !== 12) hours += 12;
        if (period === 'AM' && hours === 12) hours = 0;
    }

    const startDate = new Date(year, month, day, hours, minutes);
    const endDate = new Date(startDate.getTime() + 2 * 60 * 60 * 1000); // 2 hours duration

    const format = (date: Date) => date.toISOString().replace(/-|:|\.\d\d\d/g, "");
    
    const title = `Tradesmen Rugby vs ${match.opponent}`;
    const location = match.location;
    const details = "Support the Detroit Tradesmen RFC! Check social media for last minute field updates.";
    
    const url = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${format(startDate)}/${format(endDate)}&details=${encodeURIComponent(details)}&location=${encodeURIComponent(location)}&sf=true&output=xml`;
    
    window.open(url, '_blank');
  };

  const getMapLink = (location: string) => {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`;
  };

  return (
    <section className="py-24 bg-[#0d1117] relative overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-[#0d1117] to-[#0d1117]"></div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="flex items-center justify-between mb-12">
          <h2 className="font-display font-bold text-3xl uppercase text-white">Next Match</h2>
          <button onClick={() => navigateTo('schedule')} className="text-sm font-bold uppercase tracking-widest text-blue-500 hover:text-white transition-colors">See Full Schedule</button>
        </div>

        {/* Dynamic Card */}
        {UPCOMING_MATCH ? (
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-4 py-2 uppercase rounded-bl-xl shadow-lg">
              {UPCOMING_MATCH.isHome ? 'Home Match' : 'Away Match'}
            </div>
            
            <div className="flex flex-col md:flex-row justify-between items-center gap-12 md:gap-0">
              {/* Home Team */}
              <div className="text-center md:text-left flex-1 flex flex-col items-center md:items-start">
                <div className="h-28 flex items-center justify-center mb-2">
                  <img 
                    src="https://ik.imagekit.io/fukntosc3/Tradesmen%20logo%20%20(1).svg" 
                    alt="Detroit Tradesmen Logo" 
                    className="h-full w-auto object-contain drop-shadow-lg" 
                  />
                </div>
                <span className="block text-2xl font-display font-bold uppercase text-white tracking-wide">Tradesmen</span>
              </div>

              {/* VS */}
              <div className="flex flex-col items-center justify-center min-w-[250px] relative">
                <span className="text-8xl font-display font-black text-white/5 italic absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-150">VS</span>
                <div className="bg-[#0a0f1c]/80 backdrop-blur-md border border-white/10 px-8 py-6 rounded-xl text-center relative z-10 shadow-xl">
                  <div className="flex items-center justify-center gap-2 text-white font-bold text-xl mb-2">
                    {UPCOMING_MATCH.date}
                  </div>
                  <div className="text-blue-400 font-bold uppercase tracking-wider text-sm mb-4">{UPCOMING_MATCH.time}</div>
                  <div className="flex justify-center gap-4 border-t border-white/10 pt-4">
                      <a 
                        href={getMapLink(UPCOMING_MATCH.location)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                        title="Get Directions"
                      >
                        <MapPin size={18} />
                      </a>
                      <button 
                        onClick={() => addToGoogleCalendar(UPCOMING_MATCH)}
                        className="text-gray-400 hover:text-white transition-colors"
                        title="Add to Calendar"
                      >
                        <CalendarPlus size={18} />
                      </button>
                  </div>
                </div>
              </div>

              {/* Away Team */}
              <div className="text-center md:text-right flex-1 flex flex-col items-center md:items-end">
                <div className="h-28 flex items-center justify-center mb-2">
                   <div className="text-6xl font-display font-black text-gray-700">OPP</div>
                </div>
                <span className="block text-2xl font-display font-bold uppercase text-gray-300">{UPCOMING_MATCH.opponent}</span>
              </div>
            </div>
          </div>
        ) : (
          /* Placeholder Card when Season is Over */
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-12 text-center shadow-2xl relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-transparent opacity-50"></div>
             <div className="relative z-10">
               <Trophy className="w-16 h-16 text-[#d4a574] mx-auto mb-6 opacity-80" />
               <h3 className="font-display font-bold text-3xl md:text-4xl text-white uppercase italic mb-4">2026 Season Awaits</h3>
               <p className="text-gray-400 max-w-xl mx-auto mb-8">
                 The 2025 season has concluded. We are currently preparing for our 2026 campaign. 
                 Check back soon for the new fixture list or join us for off-season training.
               </p>
               <button 
                 onClick={() => navigateTo('join')}
                 className="bg-blue-600 hover:bg-blue-700 text-white font-bold uppercase tracking-widest px-8 py-3 rounded transition-colors inline-flex items-center gap-2"
               >
                 Join The Team <ArrowRight size={16} />
               </button>
             </div>
          </div>
        )}
      </div>
    </section>
  );
}

// 3. SPONSOR SCROLL (Enhanced with Mobile Swipe)
export function SponsorScrollSection({ navigateTo }: SectionProps) {
  return (
    <section className="py-12 bg-white border-y border-gray-100 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 mb-8 flex justify-between items-end">
        <h3 className="text-slate-900 font-display font-bold uppercase text-2xl">Our Partners</h3>
        <button 
           onClick={() => navigateTo('sponsors')}
           className="text-blue-600 font-bold uppercase text-xs hover:underline flex items-center gap-1"
         >
           Become a Sponsor <ChevronRight className="w-3 h-3" />
         </button>
      </div>
      
      {/* 
        Interaction Upgrade:
        Mobile: Native horizontal scrolling (overflow-x-auto) for direct swipe control.
        Desktop: Infinite animated marquee for visual impact.
      */}
      
      {/* Mobile Swipe View */}
      <div className="lg:hidden relative">
        <div className="flex overflow-x-auto gap-4 px-4 pb-4 snap-x snap-mandatory no-scrollbar items-center">
          {SPONSORS.map((sponsor, idx) => (
            <div 
              key={`mobile-${idx}`} 
              className="snap-center shrink-0 w-48 h-28 bg-white border border-gray-100 rounded-lg flex items-center justify-center p-4 shadow-sm"
              style={sponsor.backgroundColor ? { backgroundColor: sponsor.backgroundColor } : {}}
            >
              {sponsor.image ? (
                <img 
                  src={sponsor.image.startsWith('http') ? sponsor.image : `/${sponsor.image}`} 
                  alt={sponsor.name} 
                  className="max-h-full max-w-full object-contain" 
                />
              ) : (
                <div className="text-xl font-display font-bold text-slate-300 uppercase">
                  {sponsor.logo}
                </div>
              )}
            </div>
          ))}
          {/* Spacer to allow scrolling to end */}
          <div className="w-4 shrink-0"></div>
        </div>
        {/* Mobile Fade Hint */}
        <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
      </div>

      {/* Desktop Marquee View */}
      <div className="hidden lg:flex relative overflow-x-hidden group mask-gradient-x">
        <div className="animate-scroll flex gap-20 items-center whitespace-nowrap hover:[animation-play-state:paused]">
          {[...SPONSORS, ...SPONSORS, ...SPONSORS].map((sponsor, idx) => (
            <div 
              key={`desktop-${idx}`} 
              className="cursor-pointer select-none px-4 py-2 rounded transition-transform hover:scale-110 duration-300"
              style={sponsor.backgroundColor ? { backgroundColor: sponsor.backgroundColor } : {}}
            >
              {sponsor.image ? (
                <img 
                  src={sponsor.image.startsWith('http') ? sponsor.image : `/${sponsor.image}`} 
                  alt={sponsor.name} 
                  className="h-16 w-auto object-contain max-w-[200px] opacity-80 hover:opacity-100 transition-opacity" 
                />
              ) : (
                <div className="text-4xl font-display font-bold text-slate-300 hover:text-slate-800 transition-colors uppercase">
                  {sponsor.logo}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 4. CTA SECTION (Styled)
export function CTASection({ navigateTo }: SectionProps) {
  return (
    <section className="py-24 bg-[#0a0f1c]">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading title="Get Involved" subtitle="Join the Movement" centered />
        
        <div className="grid md:grid-cols-3 gap-8">
          <CTACard 
            icon={<Users className="w-8 h-8 text-white" />}
            title="Join the Team"
            desc="No experience required. Competitive & Social sides available."
            btnText="Recruitment Info"
            onClick={() => navigateTo('join')}
            accent="blue"
          />
          <CTACard 
            icon={<Handshake className="w-8 h-8 text-white" />}
            title="Sponsorship"
            desc="Partner with Michigan's premier rugby brand."
            btnText="View Opportunities"
            onClick={() => navigateTo('sponsors')}
            accent="slate"
          />
          <CTACard 
            icon={<Shield className="w-8 h-8 text-white" />}
            title="Support"
            desc="We are a 501(c)(3) nonprofit. Help us grow the game."
            btnText="Donate"
            onClick={() => {}}
            accent="slate"
          />
        </div>
      </div>
    </section>
  );
}
