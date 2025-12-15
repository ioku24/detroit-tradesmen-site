
import React, { useState } from 'react';
import { HALL_OF_FAME } from '../../lib/data';
import { SectionHeading } from '../shared/Components';
import { Award, Star, Mail, User } from 'lucide-react';

export default function OldBoys() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = "Old Boys Newsletter Subscription";
    const body = `Please add me to the Detroit Tradesmen Old Boys email list.\n\nEmail: ${email}`;
    window.location.href = `mailto:admin@detroittradesmen.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="pt-24 lg:pt-32 pb-20 bg-[#0d1117] min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Intro */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <SectionHeading title="Old Boys Legacy" subtitle="Once a Tradesman, Always a Tradesman" centered />
          <p className="text-gray-400 text-lg leading-relaxed">
            The Detroit Tradesman RFC Old Boys network is the backbone of our club. 
            Representing decades of history, brotherhood, and rugby excellence, our alumni 
            continue to support the current side while maintaining the bonds forged on the pitch.
          </p>
        </div>

        {/* Hall of Fame */}
        <div className="mb-20">
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="h-[1px] w-12 bg-[#d4a574]"></div>
            <h2 className="font-display font-bold text-3xl text-[#d4a574] uppercase tracking-widest flex items-center gap-3">
              <Star className="fill-[#d4a574]" size={24} /> Hall of Fame <Star className="fill-[#d4a574]" size={24} />
            </h2>
            <div className="h-[1px] w-12 bg-[#d4a574]"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {HALL_OF_FAME.map((person) => (
              <div key={person.id} className="bg-[#1a2a4a] border border-[#d4a574]/20 rounded-lg overflow-hidden group hover:border-[#d4a574]/50 transition-all flex flex-col sm:flex-row">
                {/* Image Section */}
                <div className="w-full sm:w-1/3 aspect-square sm:aspect-auto relative bg-[#0f172a]">
                  {person.image ? (
                    <img 
                      src={person.image} 
                      alt={person.name} 
                      className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700" 
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-white/10">
                      <User size={48} />
                    </div>
                  )}
                  {/* Vintage Overlay */}
                  <div className="absolute inset-0 bg-[#d4a574]/10 mix-blend-overlay"></div>
                </div>

                {/* Content Section */}
                <div className="flex-1 p-6 relative">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Award size={48} className="text-[#d4a574]" />
                  </div>
                  
                  <h3 className="font-display font-bold text-2xl text-white mb-1 uppercase italic">{person.name}</h3>
                  <div className="text-[#d4a574] font-bold text-sm uppercase tracking-wider mb-4">{person.years}</div>
                  
                  <div className="space-y-2 relative z-10">
                    <div className="flex items-center gap-2 text-gray-300">
                      <span className="w-2 h-2 bg-[#d4a574] rounded-full"></span>
                      <span className="text-sm font-bold uppercase text-gray-500">Position:</span>
                      <span className="text-white">{person.position}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <span className="w-2 h-2 bg-[#d4a574] rounded-full"></span>
                      <span className="text-sm font-bold uppercase text-gray-500">Achievement:</span>
                      <span className="text-white">{person.achievement}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Connect CTA */}
        <div className="bg-gradient-to-r from-[#1a2a4a] to-[#0f172a] rounded-xl p-12 border border-white/5 text-center shadow-2xl">
          <h3 className="font-display font-bold text-3xl text-white mb-4 uppercase italic">Stay Connected</h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Are you a former player? Join our mailing list to stay updated on match results, 
            social events, and the annual Old Boys weekend.
          </p>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email" 
              className="bg-[#0d1117] border border-white/10 text-white px-4 py-3 rounded focus:outline-none focus:border-blue-500 flex-grow"
            />
            <button className="bg-[#d4a574] hover:bg-[#c3905b] text-[#0f172a] font-bold uppercase tracking-widest px-6 py-3 rounded transition-colors flex items-center justify-center gap-2">
              Subscribe <Mail size={16} />
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
