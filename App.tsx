
import React, { useState, useEffect } from 'react';
import { Page } from './lib/types';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/home/Hero';
import { AboutSection, NextMatchSection, SponsorScrollSection, CTASection } from './components/home/Sections';
import { PlaceholderPage } from './components/shared/Components';

// Pages
import Schedule from './components/pages/Schedule';
import Roster from './components/pages/Roster';
import OldBoys from './components/pages/OldBoys';
import Join from './components/pages/Join';
import Sponsors from './components/pages/Sponsors';
import TeamDues from './components/pages/TeamDues';
import Store from './components/pages/Store';
import News from './components/pages/News';
import Gear from './components/pages/Gear';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero navigateTo={navigateTo} />
            <AboutSection navigateTo={navigateTo} />
            <NextMatchSection navigateTo={navigateTo} />
            <SponsorScrollSection navigateTo={navigateTo} />
            <CTASection navigateTo={navigateTo} />
          </>
        );
      case 'schedule':
        return <Schedule />;
      case 'roster':
        return <Roster />;
      case 'old-boys':
        return <OldBoys />;
      case 'join':
        return <Join />;
      case 'sponsors':
        return <Sponsors />;
      case 'dues':
        return <TeamDues />;
      case 'store':
        return <Store />;
      case 'news':
        return <News />;
      case 'gear':
        return <Gear />;
      default:
        return <PlaceholderPage title={currentPage} navigateTo={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0d1117] text-white flex flex-col font-sans">
      <Header navigateTo={navigateTo} isScrolled={isScrolled} />

      <main className="flex-grow">
        {renderPage()}
      </main>

      <Footer navigateTo={navigateTo} />
    </div>
  );
}
