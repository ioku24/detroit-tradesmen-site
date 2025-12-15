
import React, { useState } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { Page } from '../../lib/types';

interface HeaderProps {
  navigateTo: (page: Page) => void;
  isScrolled: boolean;
}

export default function Header({ navigateTo, isScrolled }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNav = (page: Page) => {
    navigateTo(page);
    setMobileMenuOpen(false);
  };

  const navItems = [
    { label: 'Schedule', id: 'schedule' },
    { label: 'Roster', id: 'roster' },
    { label: 'Join', id: 'join' },
    { label: 'Events', id: 'store' }, // Renamed from Store to Events
    { label: 'Dues', id: 'dues' },
    { label: 'News', id: 'news' },
    { label: 'Gear', id: 'gear' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled || mobileMenuOpen 
          ? 'bg-[#0d1117]/95 backdrop-blur-md border-white/10 py-3' 
          : 'bg-transparent border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => handleNav('home')}
          >
            <img 
              src="https://ik.imagekit.io/fukntosc3/Tradesmen%20logo%20%20(1).svg" 
              alt="Detroit Tradesmen Logo" 
              className="h-14 w-auto object-contain group-hover:scale-105 transition-transform" 
            />
            <span className="font-display font-bold text-2xl tracking-tighter italic uppercase text-white">
              Detroit <span className="text-blue-500">Tradesmen</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id as Page)}
                className="text-sm font-bold uppercase tracking-wider text-gray-300 hover:text-white hover:text-blue-500 transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
              </button>
            ))}
            <button
                onClick={() => handleNav('old-boys')}
                className="text-sm font-bold uppercase tracking-wider text-gray-300 hover:text-white hover:text-blue-500 transition-colors relative group"
              >
                Old Boys
            </button>
            <button 
              onClick={() => handleNav('sponsors')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-sm font-display font-bold uppercase tracking-wide text-sm transition-all transform hover:-translate-y-0.5"
            >
              Sponsors
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Sheet */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#0d1117] border-b border-white/10 p-4 shadow-xl animate-in slide-in-from-top-5 h-screen overflow-y-auto">
          <div className="flex flex-col gap-4 pb-20">
            <button
                onClick={() => handleNav('home')}
                className="text-left text-lg font-display font-bold uppercase tracking-wide text-white hover:text-blue-500 py-2 border-b border-white/5"
              >
                Home
            </button>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id as Page)}
                className="text-left text-lg font-display font-bold uppercase tracking-wide text-white hover:text-blue-500 py-2 border-b border-white/5"
              >
                {item.label}
              </button>
            ))}
            <button
                onClick={() => handleNav('old-boys')}
                className="text-left text-lg font-display font-bold uppercase tracking-wide text-white hover:text-blue-500 py-2 border-b border-white/5"
              >
                Old Boys
            </button>
            <button 
              onClick={() => handleNav('sponsors')}
              className="bg-blue-600 text-white px-5 py-3 rounded-sm font-display font-bold uppercase tracking-wide text-center mt-2"
            >
              Sponsors
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
