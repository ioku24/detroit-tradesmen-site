
import React from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { Page } from '../../lib/types';

interface HeroProps {
  navigateTo: (page: Page) => void;
}

export default function Hero({ navigateTo }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-start lg:items-center bg-[#0a0f1c] overflow-hidden pt-28 lg:pt-0">
      {/* 1. Industrial Gritty Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-40 mix-blend-overlay z-0 pointer-events-none"
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.5'/%3E%3C/svg%3E")`,
        }}
      ></div>

      {/* 2. Abstract Background Blobs (Blue/Navy) */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-900/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 z-0"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 z-0"></div>
      
      {/* 3. "MOTOR CITY" Watermark - Adjusted position for mobile */}
      <div className="absolute top-24 lg:top-[10%] left-0 w-full overflow-hidden z-0 pointer-events-none select-none">
        <span 
          className="font-display font-black text-[18vw] lg:text-[15vw] leading-none text-transparent whitespace-nowrap pl-4 opacity-10"
          style={{ WebkitTextStroke: '2px rgba(255, 255, 255, 0.5)' }}
        >
          MOTOR CITY
        </span>
      </div>

      {/* 4. Industrial Diagonal Lines Accent (Top Right) */}
      <div className="absolute top-0 right-0 w-1/3 h-full overflow-hidden z-0 opacity-[0.03]">
         <div className="w-full h-full" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #ffffff 10px, #ffffff 12px)' }}></div>
      </div>

      {/* 5. Hero Image (Absolute Positioned for Overlay Effect) */}
      <div className="absolute bottom-0 right-0 w-full h-[55%] lg:w-[85%] lg:h-[135%] lg:right-[-5%] z-0 pointer-events-none select-none flex items-end justify-end">
        <div className="relative w-full h-full">
           <img 
            src="https://ik.imagekit.io/fukntosc3/Hero%20photo.png?updatedAt=1765787312434" 
            alt="Detroit Tradesmen Team" 
            className="
              w-full h-full 
              object-cover lg:object-contain 
              object-top lg:object-bottom
              opacity-60 lg:opacity-100 
              transition-transform duration-1000
            "
          />
          {/* Gradients to ensure text readability over the image */}
          {/* Left/Side gradient for text readability */}
          <div className="absolute inset-y-0 left-0 w-full lg:w-1/3 bg-gradient-to-t lg:bg-gradient-to-r from-[#0a0f1c] via-[#0a0f1c]/60 to-transparent"></div>
          
          {/* Bottom gradient - Optimized for Mobile visibility */}
          {/* Mobile: Short clean fade (h-20) to show feet. Desktop: Taller fade (h-48) for balance. */}
          <div className="absolute bottom-0 left-0 right-0 h-20 lg:h-48 bg-gradient-to-t from-[#0a0f1c] to-transparent"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center relative z-20">
            <div className="flex items-center gap-3 mb-6 animate-in slide-in-from-left-10 duration-700">
              <div className="h-[2px] w-12 bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
              <span className="font-display font-bold tracking-[0.2em] uppercase text-blue-400 text-sm shadow-blue-500/50 drop-shadow-sm">Est. 1978</span>
            </div>
            
            {/* Massive Slogan */}
            <h1 className="font-display font-black italic text-6xl sm:text-7xl lg:text-[9rem] leading-[0.85] uppercase text-white mb-8 tracking-tighter animate-in slide-in-from-bottom-10 duration-1000 delay-200 drop-shadow-2xl">
              <span className="block text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-400">FORGED</span>
              <span className="block pl-2 lg:pl-4">IN DETROIT</span>
            </h1>
            
            {/* Text Overlay Box (Restored) */}
            <p className="text-gray-200 text-base md:text-xl max-w-xl mb-10 font-light leading-relaxed animate-in fade-in duration-1000 delay-500 border-l-4 border-blue-600 pl-6 bg-[#0a0f1c]/80 backdrop-blur-md py-4 rounded-r-lg border-y border-y-white/5 border-r border-r-white/5 shadow-2xl">
              Michigan's Premier Men's Rugby Club. Compete at the highest level, find your brotherhood, and build a legacy.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in duration-1000 delay-700">
              <button 
                onClick={() => navigateTo('join')}
                className="group relative px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-display font-bold uppercase tracking-widest overflow-hidden rounded-sm transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]"
              >
                <span className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></span>
                <span className="relative z-10 flex items-center gap-2 justify-center">
                  Join The Team <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              
              <button 
                onClick={() => navigateTo('schedule')}
                className="px-8 py-4 border border-white/20 hover:border-white/50 hover:bg-white/10 text-white font-display font-bold uppercase tracking-widest transition-all rounded-sm backdrop-blur-md bg-black/40"
              >
                2026 Schedule
              </button>
            </div>
          </div>

          {/* Right Column Spacer (Desktop) */}
          <div className="hidden lg:block lg:col-span-5 h-[80vh]"></div>

        </div>
      </div>

      {/* Scroll Indicator - Hidden on very small screens to avoid clutter */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-30 z-20 hidden sm:block">
        <ChevronDown className="w-6 h-6 text-white" />
      </div>
    </section>
  );
}
