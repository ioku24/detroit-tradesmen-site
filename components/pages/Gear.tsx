
import React from 'react';
import { GEAR_CATEGORIES, RUGBY_IMPORTS_URL } from '../../lib/data';
import { SectionHeading } from '../shared/Components';
import { ExternalLink, ShoppingBag, ArrowRight } from 'lucide-react';

export default function Gear() {
  const handleShopClick = () => {
    window.open(RUGBY_IMPORTS_URL, '_blank');
  };

  return (
    <div className="pt-32 pb-20 bg-[#0d1117] min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="text-center mb-16">
          <SectionHeading title="Team Gear" subtitle="Official Merchandise" centered />
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Rep the Tradesmen on and off the pitch. Our official team store is hosted by Rugby Imports.
            All items are made to order and shipped directly to you.
          </p>
          
          <button 
            onClick={handleShopClick}
            className="inline-flex items-center gap-2 bg-blue-600 text-white font-bold uppercase tracking-wider px-10 py-4 rounded hover:bg-blue-700 transition-colors shadow-lg hover:shadow-blue-900/20 transform hover:-translate-y-1 duration-300"
          >
            <ShoppingBag size={20} /> Visit Official Store
          </button>
        </div>

        {/* Categories */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {GEAR_CATEGORIES.map((cat) => (
            <div 
              key={cat.id} 
              className="bg-[#1a2a4a] border border-white/5 rounded-xl overflow-hidden group cursor-pointer hover:border-blue-500/50 transition-all shadow-xl"
              onClick={handleShopClick}
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
                  src={cat.image} 
                  alt={cat.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a2a4a] to-transparent opacity-80"></div>
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-2xl font-display font-bold text-white uppercase italic mb-1">{cat.name}</h3>
                  <div className="h-1 w-12 bg-blue-600 group-hover:w-20 transition-all duration-300"></div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-400 text-sm mb-6">{cat.description}</p>
                <span className="text-blue-500 text-xs font-bold uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all">
                  Shop Now <ArrowRight size={16} />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Banner */}
        <div className="bg-gradient-to-r from-blue-900/40 to-[#1a2a4a] border border-blue-500/20 rounded-xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
           <div className="text-center md:text-left">
             <h3 className="font-display font-bold text-3xl text-white uppercase italic mb-2">Every Purchase Supports The Club</h3>
             <p className="text-gray-300 max-w-xl">A portion of every sale from the team store goes directly back to the Detroit Tradesmen to support field rentals and equipment.</p>
           </div>
           <button 
             onClick={handleShopClick}
             className="whitespace-nowrap border border-white/20 text-white hover:bg-white hover:text-[#0f172a] font-bold uppercase tracking-wider px-8 py-3 rounded transition-colors"
           >
             Shop Rugby Imports
           </button>
        </div>

        {/* Shipping Info */}
        <div className="mt-20 border-t border-white/10 pt-12">
           <div className="grid md:grid-cols-3 gap-8 text-center text-gray-400 text-sm">
              <div className="p-4">
                <h4 className="text-white font-bold uppercase mb-2">Production Time</h4>
                <p>Items are embroidered on demand. Please allow 2-3 weeks for production.</p>
              </div>
              <div className="p-4">
                <h4 className="text-white font-bold uppercase mb-2">Direct Shipping</h4>
                <p>Orders are shipped directly to your provided address via UPS or USPS.</p>
              </div>
              <div className="p-4">
                <h4 className="text-white font-bold uppercase mb-2">Trusted Partner</h4>
                <p>Fulfilled by Rugby Imports, a leader in rugby apparel since 1976.</p>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
}
