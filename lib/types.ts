
import { ReactNode } from 'react';

export type Page = 'home' | 'schedule' | 'roster' | 'old-boys' | 'join' | 'sponsors' | 'dues' | 'store' | 'news' | 'gear';

export interface Match {
  id: string;
  date: string;
  time: string;
  opponent: string;
  location: string;
  isHome: boolean;
  result?: { home: number; away: number; won: boolean };
  status: 'upcoming' | 'completed' | 'cancelled';
}

export interface Player {
  id: string;
  name: string;
  nickname?: string;
  position: string;
  division: 'D1' | 'D3' | 'D1/D3';
  isCaptain?: boolean;
  group: 'forwards' | 'backs';
  image?: string; // Optional URL for headshot
}

export interface Staff {
  id: string;
  name: string;
  role: string;
}

export interface HallOfFamer {
  id: string;
  name: string;
  years: string;
  position: string;
  achievement: string;
  image?: string; // Added image support
}

export interface Sponsor {
  name: string;
  logo: string; // Text fallback
  image?: string; // Path to logo image
  tier: 'legacy' | 'season' | 'game-day';
  backgroundColor?: string; // Optional hex code for logo background if needed (e.g. for white logos)
  url?: string; // External link to sponsor site
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  author: string;
  image: string;
  excerpt: string;
  content: string[]; // Array of paragraphs for the full article
  tags: string[];
}

export interface GearCategory {
  id: string;
  name: string;
  description: string;
  image: string;
}

export interface SectionProps {
  navigateTo: (page: Page) => void;
}
