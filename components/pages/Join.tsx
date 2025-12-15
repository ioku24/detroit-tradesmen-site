
import React, { useState } from 'react';
import { SectionHeading } from '../shared/Components';
import { Calendar, Clock, MapPin, CheckCircle, AlertCircle, Loader2, ArrowRight, Mail } from 'lucide-react';

export default function Join() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    experience: 'Never played before',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct email body
    const subject = `New Recruit Interest: ${formData.firstName} ${formData.lastName}`;
    const body = `
New Player Interest Form Submission

Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Experience Level: ${formData.experience}

Message:
${formData.message}
    `;

    // Open email client
    window.location.href = `mailto:admin@detroittradesmen.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="pt-32 pb-20 bg-[#0d1117] min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Info Side */}
          <div>
            <SectionHeading title="Join The Club" subtitle="Forged in Detroit" />
            
            <p className="text-xl text-white font-light mb-8">
              Start showing up to the trainings below and we'll help you out from there! We also have season based dues which are collected before the first match of every season.
            </p>

            {/* 15s Training */}
            <div className="bg-[#1a2a4a] border border-white/10 rounded-xl p-8 mb-6 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 uppercase rounded-bl-lg">15s Season</div>
              <h3 className="font-display font-bold text-2xl text-white mb-6 border-b border-white/10 pb-4">Outdoor Training</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-600/20 p-3 rounded-lg text-blue-500">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold uppercase tracking-wide">When</h4>
                    <p className="text-gray-400">Every Tuesday & Thursday</p>
                    <p className="text-blue-400 font-bold">6:30 PM</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-600/20 p-3 rounded-lg text-blue-500">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold uppercase tracking-wide">Where</h4>
                    <p className="text-gray-400">Handy Park</p>
                    <a href="https://www.google.com/maps/search/?api=1&query=Handy+Park+Redford+Charter+Twp+MI" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400 text-sm underline mt-1 block">Get Directions</a>
                  </div>
                </div>
              </div>
            </div>

            {/* 7s Training */}
            <div className="bg-[#1a2a4a] border border-white/10 rounded-xl p-8 mb-6 shadow-xl relative overflow-hidden opacity-80">
               <div className="absolute top-0 right-0 bg-gray-600 text-white text-xs font-bold px-3 py-1 uppercase rounded-bl-lg">Summer 7s</div>
              <h3 className="font-display font-bold text-2xl text-white mb-6 border-b border-white/10 pb-4">Summer 7s Training</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gray-700/50 p-3 rounded-lg text-gray-400">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold uppercase tracking-wide">When</h4>
                    <p className="text-gray-400">Tuesdays & Thursdays</p>
                    <p className="text-blue-400 font-bold">6:30 PM</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-gray-700/50 p-3 rounded-lg text-gray-400">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold uppercase tracking-wide">Where</h4>
                    <p className="text-gray-400">Dearborn High School</p>
                    <p className="text-gray-500 text-sm">Lower football field</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Match Locations */}
            <div className="bg-[#0f172a] border border-white/5 rounded-lg p-6 mb-8">
               <h4 className="text-white font-bold uppercase tracking-wide mb-4 flex items-center gap-2">
                 <MapPin size={18} className="text-blue-500"/> Match Locations
               </h4>
               <ul className="space-y-3 text-sm text-gray-400">
                 <li><strong className="text-white">15s Matches:</strong> Levey Middle School (Southfield)</li>
                 <li><strong className="text-white">7s Tournaments:</strong> Locations vary per season</li>
               </ul>
               <div className="mt-4 flex items-start gap-2 text-xs text-yellow-500 bg-yellow-500/10 p-3 rounded">
                 <AlertCircle size={14} className="shrink-0 mt-0.5" />
                 <p>Due to field availability, times and locations may change suddenly. Be sure to check our Facebook and Instagram page for last minute updates.</p>
               </div>
            </div>

          </div>

          {/* Form Side */}
          <div className="bg-white/5 border border-white/10 p-8 md:p-10 rounded-xl backdrop-blur-sm sticky top-32 flex flex-col">
            <h3 className="font-display font-bold text-2xl text-white mb-2 uppercase italic">New Player Interest</h3>
            <p className="text-gray-400 mb-8 text-sm">New players of all abilities are always welcome! Fill out this form to generate an email to our recruitment team.</p>
            
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase text-gray-500 tracking-wider">First Name</label>
                  <input 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required 
                    type="text" 
                    className="w-full bg-[#0d1117] border border-white/10 rounded p-3 text-white focus:border-blue-500 focus:outline-none transition-colors" 
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase text-gray-500 tracking-wider">Last Name</label>
                  <input 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required 
                    type="text" 
                    className="w-full bg-[#0d1117] border border-white/10 rounded p-3 text-white focus:border-blue-500 focus:outline-none transition-colors" 
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold uppercase text-gray-500 tracking-wider">Email Address</label>
                <input 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required 
                  type="email" 
                  className="w-full bg-[#0d1117] border border-white/10 rounded p-3 text-white focus:border-blue-500 focus:outline-none transition-colors" 
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold uppercase text-gray-500 tracking-wider">Experience Level</label>
                <select 
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  className="w-full bg-[#0d1117] border border-white/10 rounded p-3 text-white focus:border-blue-500 focus:outline-none transition-colors appearance-none"
                >
                  <option>Never played before</option>
                  <option>Played in High School</option>
                  <option>Played in College</option>
                  <option>Played Senior Club</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold uppercase text-gray-500 tracking-wider">Message (Optional)</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4} 
                  className="w-full bg-[#0d1117] border border-white/10 rounded p-3 text-white focus:border-blue-500 focus:outline-none transition-colors"
                ></textarea>
              </div>

              <button 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold font-display uppercase tracking-widest py-4 rounded transition-all transform hover:-translate-y-1 shadow-lg shadow-blue-900/50 flex items-center justify-center gap-2"
              >
                Send Email <Mail size={18} />
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}
