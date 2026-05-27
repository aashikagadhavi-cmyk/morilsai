/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ShowcaseSection from './components/ShowcaseSection';
import AIProductDetails from './components/AIProductDetails';
import WorkflowSection from './components/WorkflowSection';
import SolutionsSection from './components/SolutionsSection';
import IndustriesSection from './components/IndustriesSection';
import TestimonialsSection from './components/TestimonialsSection';
import ComparisonSection from './components/ComparisonSection';
import PricingSection from './components/PricingSection';
import AboutSection from './components/AboutSection';
import BlogSection from './components/BlogSection';
import ContactSection from './components/ContactSection';
import AuthSection from './components/AuthSection';
import Footer from './components/Footer';
import { PageType } from './types';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  const renderActivePage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutSection setCurrentPage={setCurrentPage} />;
      case 'solutions':
        return <SolutionsSection setCurrentPage={setCurrentPage} />;
      case 'industries':
        return <IndustriesSection />;
      case 'pricing':
        return <PricingSection setCurrentPage={setCurrentPage} />;
      case 'blog':
        return <BlogSection />;
      case 'contact':
        return <ContactSection />;
      case 'auth':
        return <AuthSection setCurrentPage={setCurrentPage} />;
      case 'home':
      default:
        return (
          <>
            <HeroSection setCurrentPage={setCurrentPage} />
            <ShowcaseSection />
            <AIProductDetails />
            <WorkflowSection />
            <SolutionsSection setCurrentPage={setCurrentPage} />
            <ComparisonSection />
            <TestimonialsSection />
            <PricingSection setCurrentPage={setCurrentPage} />
            <ContactSection />
          </>
        );
    }
  };

  return (
    <div id="saas-portal" className="min-h-screen bg-[#020308] text-gray-200 flex flex-col font-sans select-none antialiased">
      {/* Dynamic top bar global blur gradient element */}
      <div className="fixed top-0 left-0 w-full h-[150px] bg-gradient-to-b from-[#020308] to-transparent pointer-events-none z-40" />

      {/* Corporate navigation header */}
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {/* Pages Router View wrapper */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
          >
            {renderActivePage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Standard site map information footer */}
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}
