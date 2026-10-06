import React, { useState, useEffect } from 'react';
import { PageView, BlogPost } from './types';
import { BLOG_POSTS } from './data/siteData';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { DataHealthAudit } from './components/DataHealthAudit';
import { DataCleaningDemo } from './components/DataCleaningDemo';
import { ServicesSection } from './components/ServicesSection';
import { SolutionsSection } from './components/SolutionsSection';
import { ProcessSection } from './components/ProcessSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { PortfolioSection } from './components/PortfolioSection';
import { BlogSection } from './components/BlogSection';
import { ConsultationForm } from './components/ConsultationForm';

import { AboutPageView } from './components/AboutPageView';
import { ServicesPageView } from './components/ServicesPageView';
import { SolutionsPageView } from './components/SolutionsPageView';
import { ContactPageView } from './components/ContactPageView';
import { Download, PenTool, Sparkles } from 'lucide-react';

const STORAGE_KEY = 'datavora_articles_v1';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageView>('home');

  const [consultService, setConsultService] = useState<string | undefined>();
  const [consultContext, setConsultContext] = useState<string | undefined>();

  // Persistent posts state
  const [posts, setPosts] = useState<BlogPost[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (e) {
      console.warn('Could not read saved articles from localStorage', e);
    }
    return BLOG_POSTS;
  });

  const handlePublishArticle = (newPost: BlogPost) => {
    const updated = [newPost, ...posts];
    setPosts(updated);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch (e) {
      console.warn('Could not persist articles to localStorage', e);
    }
  };

  const handleDeleteUserPost = (id: string) => {
    const updated = posts.filter(p => p.id !== id);
    setPosts(updated);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch (e) {
      console.warn('Could not update articles in localStorage', e);
    }
  };

  const handleNavigate = (page: PageView) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleConsultService = (serviceTitle: string) => {
    setConsultService(serviceTitle);
    setCurrentPage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleConsultProblem = (problemTitle?: string) => {
    if (problemTitle) {
      setConsultContext(`Kendala operasional: ${problemTitle}`);
    }
    setCurrentPage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA] text-[#1E293B]">


      {/* Main Sticky Navbar */}
      <Navbar
        currentPage={currentPage}
        setCurrentPage={handleNavigate}
      />

      {/* Page Content Rendering */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <>
            <HeroSection
              onExploreServices={() => {
                const el = document.getElementById('layanan');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
                else handleNavigate('services');
              }}
              onConsultProject={() => handleNavigate('contact')}
            />

            {/* Interactive Data Cleansing Showcase */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <DataCleaningDemo />
            </div>

            {/* Core Services Section */}
            <ServicesSection onSelectServiceForConsult={handleConsultService} />

            {/* Interactive Data Health & Readiness Calculator */}
            <DataHealthAudit />

            {/* 6 Core Value Advantages */}
            <WhyChooseUs />

            {/* 5-Step Methodology */}
            <ProcessSection />

            {/* Business Solutions & Industry Matrix */}
            <SolutionsSection onConsult={handleConsultProblem} />

            {/* Real Case Studies / Portfolio */}
            <PortfolioSection onConsult={handleConsultProblem} />

            {/* Articles & Insights (With User Posting Support) */}
            <BlogSection 
              posts={posts}
              onConsult={() => handleNavigate('contact')}
              onDeleteUserPost={handleDeleteUserPost}
            />

            {/* Final Consultation & WhatsApp Form */}
            <ConsultationForm
              initialService={consultService}
              initialContext={consultContext}
            />
          </>
        )}

        {currentPage === 'about' && (
          <AboutPageView onConsult={() => handleNavigate('contact')} />
        )}

        {currentPage === 'services' && (
          <ServicesPageView onConsultService={handleConsultService} />
        )}

        {currentPage === 'solutions' && (
          <SolutionsPageView onConsultProblem={handleConsultProblem} />
        )}

        {currentPage === 'portfolio' && (
          <div className="py-6 sm:py-12 bg-white">
            <PortfolioSection onConsult={handleConsultProblem} />
            <ConsultationForm />
          </div>
        )}

        {currentPage === 'blog' && (
          <div className="py-6 sm:py-12 bg-white">
            <BlogSection 
              posts={posts}
              onConsult={() => handleNavigate('contact')}
              onDeleteUserPost={handleDeleteUserPost}
            />
          </div>
        )}

        {currentPage === 'contact' && <ContactPageView />}
      </main>

      {/* Corporate Footer */}
      <Footer
        onNavigate={handleNavigate}
      />

    </div>
  );
}
