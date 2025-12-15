
import React from 'react';
import { SectionHeading } from '../shared/Components';
import { Check, CreditCard, Heart, ExternalLink } from 'lucide-react';
import { ZEFFY_URL } from '../../lib/data';

export default function TeamDues() {
  const handlePayment = (type: string) => {
    // In a real app, this might open a specific modal or go to a specific product ID
    // For now, we direct to the main Zeffy page
    window.open(ZEFFY_URL, '_blank');
  };

  return (
    <div className="pt-24 lg:pt-32 pb-20 bg-[#0d1117] min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="text-center mb-16">
          <SectionHeading title="Team Dues" subtitle="Support Our Mission" centered />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Dues allow us to rent fields, pay referees, maintain equipment, and support our youth programs. 
            We are a 501(c)(3) non-profit organization.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          
          {/* Annual Dues Column */}
          <div>
            <h3 className="text-2xl font-display font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-sm">01</span>
              Annual Dues
            </h3>
            
            <div className="space-y-6">
              {/* Senior Card */}
              <div className="bg-[#1a2a4a] border border-blue-500/30 rounded-xl p-6 hover:border-blue-500 transition-colors group relative overflow-hidden">
                <div className="flex justify-between items-start mb-4 relative z-10">
                  <div>
                    <h4 className="text-xl font-bold text-white">Fall Dues - Senior</h4>
                    <p className="text-blue-400 text-sm mt-1">For returning players</p>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-display font-bold text-white">$300</span>
                  </div>
                </div>
                <p className="text-gray-400 text-sm mb-6 relative z-10">Full season team dues for senior players.</p>
                <button 
                  onClick={() => handlePayment('senior')}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold uppercase tracking-wider py-3 rounded text-sm transition-colors flex items-center justify-center gap-2 relative z-10"
                >
                  Select <CreditCard size={16} />
                </button>
              </div>

              {/* Rookie Card */}
              <div className="bg-[#1a2a4a] border border-white/10 rounded-xl p-6 hover:border-white/30 transition-colors group">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-white">Fall Dues - Rookie</h4>
                    <p className="text-blue-400 text-sm mt-1">First year players</p>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-display font-bold text-white">$150</span>
                  </div>
                </div>
                <p className="text-gray-400 text-sm mb-6">Fall season team dues for rookie players in their first year of play.</p>
                <button 
                  onClick={() => handlePayment('rookie')}
                  className="w-full bg-[#2d3748] hover:bg-[#4a5568] text-white font-bold uppercase tracking-wider py-3 rounded text-sm transition-colors flex items-center justify-center gap-2"
                >
                  Select <CreditCard size={16} />
                </button>
              </div>
            </div>
            
            <div className="mt-4 bg-blue-900/20 p-4 rounded-lg flex gap-3 text-sm text-blue-200">
               <Heart size={18} className="shrink-0 mt-0.5" />
               <p><strong>Did you know?</strong> We fundraise with Zeffy to ensure 100% of your payment goes to our mission!</p>
            </div>
          </div>

          {/* Monthly Dues Column */}
          <div>
            <h3 className="text-2xl font-display font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-8 bg-[#d4a574] text-[#0f172a] rounded flex items-center justify-center text-sm">02</span>
              Monthly Dues
            </h3>

            <div className="bg-[#1a2a4a] border border-white/10 rounded-xl p-8">
              <h4 className="text-white font-bold mb-6">Choose monthly amount:</h4>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <button 
                  onClick={() => handlePayment('50')}
                  className="border border-blue-500 bg-blue-500/10 text-white font-bold py-4 rounded-lg hover:bg-blue-500 hover:text-white transition-all"
                >
                  $50
                </button>
                <button 
                  onClick={() => handlePayment('25')}
                  className="border border-white/10 bg-[#0d1117] text-gray-400 font-bold py-4 rounded-lg hover:border-white/30 hover:text-white transition-all"
                >
                  $25
                </button>
              </div>

              <div className="relative mb-8">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-bold">$</span>
                <input 
                  type="number" 
                  placeholder="Other Amount" 
                  className="w-full bg-[#0d1117] border border-white/10 rounded-lg py-4 pl-8 pr-4 text-white focus:border-blue-500 focus:outline-none"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm">/month</span>
              </div>

              <button 
                onClick={() => handlePayment('custom')}
                className="w-full bg-[#d4a574] hover:bg-[#c3905b] text-[#0f172a] font-bold uppercase tracking-wider py-4 rounded shadow-lg transition-colors flex items-center justify-center gap-2"
              >
                Subscribe Monthly <ExternalLink size={16} />
              </button>
              
              <div className="mt-6 text-center">
                <span className="text-xs text-gray-500 font-bold uppercase tracking-widest">Powered by Zeffy</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
