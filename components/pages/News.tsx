
import React, { useState } from 'react';
import { NEWS } from '../../lib/data';
import { NewsItem } from '../../lib/types';
import { SectionHeading } from '../shared/Components';
import { Calendar, ArrowRight, User, Tag, ArrowLeft, Share2 } from 'lucide-react';

export default function News() {
  const [selectedArticle, setSelectedArticle] = useState<NewsItem | null>(null);

  // Scroll to top when opening an article
  const handleReadMore = (article: NewsItem) => {
    setSelectedArticle(article);
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    setSelectedArticle(null);
    window.scrollTo(0, 0);
  };

  if (selectedArticle) {
    return (
      <div className="pt-32 pb-20 bg-[#0d1117] min-h-screen">
        <div className="max-w-4xl mx-auto px-4">
          <button 
            onClick={handleBack}
            className="flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Back to News
          </button>

          <article className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Header */}
            <div className="mb-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedArticle.tags.map(tag => (
                  <span key={tag} className="text-[#d4a574] text-xs font-bold uppercase tracking-wider border border-[#d4a574]/30 px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-white uppercase italic leading-tight mb-6">
                {selectedArticle.title}
              </h1>
              
              <div className="flex items-center gap-6 text-sm text-gray-400 border-b border-white/10 pb-8">
                <span className="flex items-center gap-2">
                  <Calendar size={16} className="text-blue-500" /> {selectedArticle.date}
                </span>
                <span className="flex items-center gap-2">
                  <User size={16} className="text-blue-500" /> {selectedArticle.author}
                </span>
              </div>
            </div>

            {/* Featured Image */}
            <div className="aspect-video w-full rounded-xl overflow-hidden mb-12 border border-white/10 shadow-2xl">
              <img 
                src={selectedArticle.image} 
                alt={selectedArticle.title} 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content Body */}
            {/* Constrained width for better reading experience, improved text color and spacing */}
            <div className="prose prose-invert prose-lg max-w-3xl mx-auto text-gray-200">
              {selectedArticle.content.map((paragraph, index) => (
                <p key={index} className="mb-8 leading-relaxed tracking-wide text-lg font-light">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Share / Footer */}
            <div className="mt-16 pt-8 border-t border-white/10 flex justify-between items-center max-w-3xl mx-auto">
              <span className="text-gray-500 text-sm italic">Share this article</span>
              <button className="flex items-center gap-2 text-blue-500 hover:text-white transition-colors uppercase font-bold text-sm tracking-wider">
                <Share2 size={18} /> Share
              </button>
            </div>
          </article>
        </div>
      </div>
    );
  }

  // Main List View
  return (
    <div className="pt-32 pb-20 bg-[#0d1117] min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading title="Latest News" subtitle="Club Announcements & Updates" centered />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {NEWS.map((item) => (
            <div key={item.id} className="bg-[#1a2a4a] border border-white/5 rounded-lg overflow-hidden group hover:border-blue-500/50 transition-all shadow-lg flex flex-col cursor-pointer" onClick={() => handleReadMore(item)}>
              <div className="aspect-video overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a2a4a] to-transparent opacity-60"></div>
                <div className="absolute bottom-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 uppercase rounded-sm flex items-center gap-2">
                  <Calendar size={12} /> {item.date}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-display font-bold text-xl text-white mb-3 leading-tight group-hover:text-blue-400 transition-colors uppercase italic">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm mb-6 line-clamp-3 flex-grow">
                  {item.excerpt}
                </p>
                
                <button 
                  onClick={(e) => { e.stopPropagation(); handleReadMore(item); }}
                  className="text-blue-500 font-bold uppercase text-xs tracking-wider flex items-center gap-2 hover:gap-3 transition-all mt-auto"
                >
                  Read Full Article <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-500 italic">For older archives, please visit our Facebook page.</p>
        </div>

      </div>
    </div>
  );
}
