
import React, { ReactNode } from 'react';
import { ChevronRight, LucideIcon } from 'lucide-react';
import { Page } from '../../lib/types';

export function SocialIcon({ Icon, href }: { Icon: LucideIcon, href: string }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-blue-600 hover:scale-110 transition-all"
    >
      <Icon size={18} />
    </a>
  );
}

export function Stat({ number, label }: { number: string, label: string }) {
  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-display font-bold text-white mb-1">{number}</div>
      <div className="text-xs uppercase tracking-widest text-blue-500 font-bold">{label}</div>
    </div>
  );
}

export function SectionHeading({ title, subtitle, centered = false, light = false }: { title: string, subtitle?: string, centered?: boolean, light?: boolean }) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className={`font-display font-bold text-3xl md:text-4xl uppercase italic ${light ? 'text-white' : 'text-white'} mb-2`}>
        {title}
      </h2>
      {subtitle && (
        <p className="text-blue-500 font-bold uppercase tracking-widest text-sm">{subtitle}</p>
      )}
      <div className={`h-1 w-20 bg-blue-600 mt-4 ${centered ? 'mx-auto' : ''}`}></div>
    </div>
  );
}

interface CTACardProps {
  icon: ReactNode;
  title: string;
  desc: string;
  btnText: string;
  onClick: () => void;
  accent: 'blue' | 'slate';
}

export function CTACard({ icon, title, desc, btnText, onClick, accent }: CTACardProps) {
  return (
    <div className={`bg-[#1a2a4a] border border-white/5 p-8 rounded-lg hover:border-blue-500/50 hover:-translate-y-1 transition-all group h-full flex flex-col`}>
      <div className={`w-14 h-14 ${accent === 'blue' ? 'bg-blue-600' : 'bg-white/10'} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
        {icon}
      </div>
      <h3 className="font-display font-bold text-2xl uppercase italic text-white mb-3">{title}</h3>
      <p className="text-gray-400 text-sm mb-6 leading-relaxed flex-grow">{desc}</p>
      <button 
        onClick={onClick}
        className="flex items-center gap-2 text-white font-bold uppercase text-xs tracking-wider hover:text-blue-400 transition-colors mt-auto"
      >
        {btnText} <ChevronRight className="w-3 h-3" />
      </button>
    </div>
  );
}

export function PlaceholderPage({ title, navigateTo }: { title: string, navigateTo: (p: Page) => void }) {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center bg-[#0d1117] relative overflow-hidden pt-20">
       <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%221%22/%3E%3C/svg%3E")' }}></div>
       
       <h1 className="text-6xl font-display font-bold uppercase italic text-white/10 mb-4">{title}</h1>
       <div className="z-10 text-center">
         <h2 className="text-3xl font-display font-bold text-white uppercase mb-4">
           {title.replace('-', ' ')} Page
         </h2>
         <p className="text-gray-400 mb-8 max-w-md mx-auto">
           This page is under construction.
         </p>
         <button 
            onClick={() => navigateTo('home')}
            className="px-6 py-3 border border-white/20 text-white font-bold uppercase text-sm hover:bg-white hover:text-slate-900 transition-all"
         >
           Return Home
         </button>
       </div>
    </div>
  );
}
