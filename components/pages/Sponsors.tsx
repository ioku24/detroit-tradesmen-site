
import React, { useState } from 'react';
import { SectionHeading } from '../shared/Components';
import { SPONSORS } from '../../lib/data';
import { Shield, Star, Trophy, Check, Send, Mail } from 'lucide-react';

export default function Sponsors() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = `Sponsorship Inquiry: ${formData.companyName}`;
    const body = `
New Sponsorship Interest

Company: ${formData.companyName}
Contact Person: ${formData.contactPerson}
Email: ${formData.email}
Phone: ${formData.phone}

Message:
${formData.message}
    `;

    window.location.href = `mailto:admin@detroittradesmen.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="pt-32 pb-20 bg-[#0d1117] min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <SectionHeading title="Our Partners" subtitle="Supporting the Club" centered />
          <p className="text-gray-400 text-lg">
            The Detroit Tradesman RFC is proud to partner with businesses that support our mission and community.
            Our sponsors help us maintain our facilities, travel for competition, and grow the game of rugby in Detroit.
          </p>
        </div>

        {/* Current Sponsors Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
          {SPONSORS.map((sponsor, i) => (
            <div 
              key={i} 
              className={`rounded-lg p-8 flex items-center justify-center h-40 hover:scale-105 transition-transform shadow-lg group ${sponsor.backgroundColor ? '' : 'bg-white'}`}
              style={{ backgroundColor: sponsor.backgroundColor }}
            >
              {sponsor.image ? (
                <img 
                  src={sponsor.image.startsWith('http') ? sponsor.image : `/${sponsor.image}`} 
                  alt={sponsor.name} 
                  className="max-h-full max-w-full object-contain filter group-hover:brightness-110 transition-all"
                />
              ) : (
                <span className="text-slate-800 font-display font-bold text-xl uppercase text-center">{sponsor.name}</span>
              )}
            </div>
          ))}
        </div>

        {/* Tiers */}
        <div className="mb-20">
          <SectionHeading title="Partnership Opportunities" subtitle="Join our Team" centered />
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Tier 1 */}
            <div className="bg-[#1a2a4a] border border-white/10 rounded-xl p-8 flex flex-col hover:border-blue-500/30 transition-colors">
              <div className="bg-blue-900/30 w-16 h-16 rounded-full flex items-center justify-center text-blue-400 mb-6">
                <Shield size={32} />
              </div>
              <h3 className="text-white font-display font-bold text-2xl uppercase italic mb-2">Game Day</h3>
              <p className="text-gray-400 text-sm mb-8">Perfect for local businesses wanting visibility at home matches.</p>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-start gap-3 text-gray-300 text-sm">
                  <Check size={16} className="text-blue-500 mt-0.5 shrink-0" /> Social media recognition
                </li>
                <li className="flex items-start gap-3 text-gray-300 text-sm">
                  <Check size={16} className="text-blue-500 mt-0.5 shrink-0" /> Logo on website
                </li>
                <li className="flex items-start gap-3 text-gray-300 text-sm">
                  <Check size={16} className="text-blue-500 mt-0.5 shrink-0" /> PA announcements at games
                </li>
              </ul>
              <button 
                onClick={() => document.getElementById('inquiry-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full border border-white/20 text-white font-bold uppercase py-3 rounded hover:bg-white hover:text-[#0f172a] transition-colors"
              >
                Inquire
              </button>
            </div>

            {/* Tier 2 */}
            <div className="bg-[#1a2a4a] border border-blue-500/50 rounded-xl p-8 flex flex-col relative transform md:-translate-y-4 shadow-xl shadow-blue-900/20">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Most Popular</div>
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center text-white mb-6">
                <Star size={32} />
              </div>
              <h3 className="text-white font-display font-bold text-2xl uppercase italic mb-2">Season Sponsor</h3>
              <p className="text-gray-400 text-sm mb-8">Comprehensive visibility throughout the entire competitive season.</p>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-start gap-3 text-white text-sm">
                  <Check size={16} className="text-blue-400 mt-0.5 shrink-0" /> All Game Day benefits
                </li>
                <li className="flex items-start gap-3 text-white text-sm">
                  <Check size={16} className="text-blue-400 mt-0.5 shrink-0" /> Logo on training shirts
                </li>
                <li className="flex items-start gap-3 text-white text-sm">
                  <Check size={16} className="text-blue-400 mt-0.5 shrink-0" /> Field banner at home matches
                </li>
                <li className="flex items-start gap-3 text-white text-sm">
                  <Check size={16} className="text-blue-400 mt-0.5 shrink-0" /> Featured partner story
                </li>
              </ul>
              <button 
                onClick={() => document.getElementById('inquiry-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full bg-blue-600 text-white font-bold uppercase py-3 rounded hover:bg-blue-700 transition-colors"
              >
                Inquire
              </button>
            </div>

            {/* Tier 3 */}
            <div className="bg-[#1a2a4a] border border-[#d4a574]/30 rounded-xl p-8 flex flex-col hover:border-[#d4a574]/60 transition-colors">
              <div className="bg-[#d4a574]/20 w-16 h-16 rounded-full flex items-center justify-center text-[#d4a574] mb-6">
                <Trophy size={32} />
              </div>
              <h3 className="text-white font-display font-bold text-2xl uppercase italic mb-2">Legacy Partner</h3>
              <p className="text-gray-400 text-sm mb-8">Premier partnership creating lasting impact on the club.</p>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-start gap-3 text-gray-300 text-sm">
                  <Check size={16} className="text-[#d4a574] mt-0.5 shrink-0" /> All Season Sponsor benefits
                </li>
                <li className="flex items-start gap-3 text-gray-300 text-sm">
                  <Check size={16} className="text-[#d4a574] mt-0.5 shrink-0" /> Premium jersey placement
                </li>
                <li className="flex items-start gap-3 text-gray-300 text-sm">
                  <Check size={16} className="text-[#d4a574] mt-0.5 shrink-0" /> Exclusive event access
                </li>
                <li className="flex items-start gap-3 text-gray-300 text-sm">
                  <Check size={16} className="text-[#d4a574] mt-0.5 shrink-0" /> Named scholarship/fund
                </li>
              </ul>
              <button 
                onClick={() => document.getElementById('inquiry-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full border border-[#d4a574]/50 text-[#d4a574] font-bold uppercase py-3 rounded hover:bg-[#d4a574] hover:text-[#0f172a] transition-colors"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>

        {/* Inquiry Form */}
        <div id="inquiry-form" className="bg-white/5 border border-white/10 rounded-xl p-8 md:p-12 max-w-3xl mx-auto scroll-mt-32">
          <h3 className="font-display font-bold text-2xl text-white mb-6 text-center uppercase">Become a Partner</h3>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-4">
              <input 
                name="companyName" 
                value={formData.companyName} 
                onChange={handleChange} 
                type="text" 
                required
                placeholder="Company Name" 
                className="bg-[#0d1117] border border-white/10 text-white p-3 rounded w-full focus:outline-none focus:border-blue-500" 
              />
              <input 
                name="contactPerson" 
                value={formData.contactPerson} 
                onChange={handleChange} 
                type="text" 
                required
                placeholder="Contact Person" 
                className="bg-[#0d1117] border border-white/10 text-white p-3 rounded w-full focus:outline-none focus:border-blue-500" 
              />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <input 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                type="email" 
                required
                placeholder="Email Address" 
                className="bg-[#0d1117] border border-white/10 text-white p-3 rounded w-full focus:outline-none focus:border-blue-500" 
              />
              <input 
                name="phone" 
                value={formData.phone} 
                onChange={handleChange} 
                type="tel" 
                placeholder="Phone Number" 
                className="bg-[#0d1117] border border-white/10 text-white p-3 rounded w-full focus:outline-none focus:border-blue-500" 
              />
            </div>
            <textarea 
              name="message" 
              value={formData.message} 
              onChange={handleChange} 
              rows={4} 
              placeholder="Tell us about your sponsorship goals" 
              className="bg-[#0d1117] border border-white/10 text-white p-3 rounded w-full focus:outline-none focus:border-blue-500"
            ></textarea>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold uppercase py-4 rounded transition-colors flex items-center justify-center gap-2 shadow-lg">
              Start the Conversation <Mail size={18} />
            </button>
            <p className="text-center text-xs text-gray-500 mt-4">
              The Detroit Tradesman RFC is a 501(c)(3) nonprofit organization. Your sponsorship may be tax-deductible.
            </p>
          </form>
        </div>

      </div>
    </div>
  );
}
