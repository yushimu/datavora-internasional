import React, { useState } from 'react';
import { PageView } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { DataHealthAudit } from './components/DataHealthAudit';
import { DataCleaningDemo } from './components/DataCleaningDemo';
import { ServicesSection } from './components/ServicesSection';
import { ProcessSection } from './components/ProcessSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { PortfolioSection } from './components/PortfolioSection';
import { ConsultationForm } from './components/ConsultationForm';

import { AboutPageView } from './components/AboutPageView';
import { ProductsPageView } from './components/ProductsPageView';
import { ContactPageView } from './components/ContactPageView';
import { PortfolioPageView } from './components/PortfolioPageView';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageView>('home');

  const [consultService, setConsultService] = useState<string | undefined>();
  const [consultContext, setConsultContext] = useState<string | undefined>();

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
      setConsultContext(`Konteks kebutuhan: ${problemTitle}`);
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

            {/* Real Case Studies / Portfolio */}
            <PortfolioSection onConsult={handleConsultProblem} />

            {/* Final Consultation & WhatsApp Form */}
            <ConsultationForm
              initialService={consultService}
              initialContext={consultContext}
            />
          </>
        )}

        {currentPage === 'about' && (
          <AboutPageView 
            onBackToHome={() => handleNavigate('home')} 
            onConsult={() => handleNavigate('contact')}
            onExplorePortfolio={() => handleNavigate('portfolio')}
          />
        )}

        {(currentPage === 'products' || currentPage === 'services') && (
          <ProductsPageView onBackToHome={() => handleNavigate('home')} />
        )}

        {currentPage === 'portfolio' && (
          <PortfolioPageView 
            onBackToHome={() => handleNavigate('home')} 
            onConsult={() => handleNavigate('contact')}
          />
        )}

        {currentPage === 'contact' && <ContactPageView />}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
      />

    </div>
  );
}
