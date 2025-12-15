
import React from 'react';
import { Facebook, Instagram, Twitter, Mail, MapPin } from 'lucide-react';
import { SocialIcon } from '../shared/Components';
import { Page } from '../../lib/types';

interface FooterProps {
  navigateTo: (page: Page) => void;
}

export default function Footer({ navigateTo }: FooterProps) {
  return (
    <footer className="bg-[#111827] border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Column 1: Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="https://ik.imagekit.io/fukntosc3/Tradesmen%20logo%20%20(1).svg" 
                alt="Detroit Tradesmen Logo" 
                className="h-12 w-auto object-contain" 
              />
              <span className="font-display font-bold text-xl tracking-tighter uppercase text-white">Detroit Tradesmen</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              Michigan's Premier Men's Rugby Club. Est. 1978.<br/>
              Building athletes, legacies, and brotherhood in the heart of Detroit.
            </p>
            <div className="flex gap-4">
              <SocialIcon Icon={Facebook} href="https://www.facebook.com/DetroitTradesmenRugby/" />
              <SocialIcon Icon={Instagram} href="https://www.instagram.com/detroittradesmenrugby#/" />
              <SocialIcon Icon={Twitter} href="https://x.com/tradesmenrfc" />
              <SocialIcon Icon={Mail} href="mailto:admin@detroittradesmen.com" />
            </div>
          </div>

          {/* Column 2: Links */}
          <div>
            <h4 className="font-display font-bold uppercase tracking-wider text-white mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><button onClick={() => navigateTo('schedule')} className="hover:text-blue-500 transition-colors">2026 Schedule</button></li>
              <li><button onClick={() => navigateTo('roster')} className="hover:text-blue-500 transition-colors">Player Roster</button></li>
              <li><button onClick={() => navigateTo('join')} className="hover:text-blue-500 transition-colors">Recruitment</button></li>
              <li><button onClick={() => navigateTo('sponsors')} className="hover:text-blue-500 transition-colors">Sponsorship Opportunities</button></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Team Store</a></li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="font-display font-bold uppercase tracking-wider text-white mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-500 shrink-0" />
                <span>Handy Park<br/>26000 Capitol Ave<br/>Redford Charter Twp, MI 48239</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                <a href="mailto:admin@detroittradesmen.com" className="hover:text-white">admin@detroittradesmen.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
          <p>&copy; 2026 Detroit Tradesmen RFC. All rights reserved.</p>
          <p className="mt-2 md:mt-0">501(c)(3) Nonprofit Organization</p>
        </div>
      </div>
    </footer>
  );
}
