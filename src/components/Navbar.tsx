import { motion } from 'motion/react';
import { Bot, Menu, X, ArrowUpRight, ShieldCheck, Fingerprint } from 'lucide-react';
import { useState } from 'react';
import { PageType } from '../types';

interface NavbarProps {
  currentPage: PageType;
  setCurrentPage: (page: PageType) => void;
}

export default function Navbar({ currentPage, setCurrentPage }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems: { label: string; id: PageType }[] = [
    { label: 'Home', id: 'home' },
    { label: 'Solutions', id: 'solutions' },
    { label: 'Industries', id: 'industries' },
    { label: 'Pricing', id: 'pricing' },
    { label: 'About', id: 'about' },
    { label: 'Blog', id: 'blog' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id: PageType) => {
    setCurrentPage(id);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-4 py-3 sm:px-6">
      <div id="nav-container" className="max-w-7xl mx-auto flex items-center justify-between bg-[#04060e]/75 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 shadow-[0_0_30px_rgba(59,130,246,0.1)]">
        {/* Logo */}
        <div 
          onClick={() => handleNavClick('home')} 
          className="flex items-center gap-2 cursor-pointer group"
        >
          <div className="relative flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-tr from-purple-600 via-blue-600 to-cyan-400 p-[1.5px] shadow-[0_0_15px_rgba(168,85,247,0.4)]">
            <div className="w-full h-full bg-[#04060e] rounded-[7px] flex items-center justify-center transition-all duration-300 group-hover:bg-transparent">
              <Bot className="w-4 h-4 text-cyan-400 group-hover:text-white transition-colors duration-300" />
            </div>
          </div>
          <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-white via-cyan-100 to-purple-300 bg-clip-text text-transparent">
            Motus<span className="text-cyan-400 font-extrabold">AI</span>
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="relative px-3 py-1.5 text-sm font-medium transition-all duration-200"
              >
                <span className={`relative z-10 transition-colors duration-300 ${isActive ? 'text-cyan-400' : 'text-gray-400 hover:text-white'}`}>
                  {item.label}
                </span>
                {isActive && (
                  <motion.div
                    layoutId="active-pill"
                    transition={{ type: 'spring', damping: 18, stiffness: 120 }}
                    className="absolute inset-0 bg-blue-950/40 border border-blue-500/20 rounded-full"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* CTA & Trust Badges */}
        <div className="hidden md:flex items-center gap-3">
          <div className="flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[11px] text-gray-400">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>SOC2 / ISO Compliant</span>
          </div>

          <button
            onClick={() => handleNavClick('auth')}
            className={`flex items-center gap-1.5 px-4.5 py-1.8 text-xs font-bold rounded-full border transition-all duration-300 ${
              currentPage === 'auth'
                ? 'bg-purple-950/40 border-purple-500/50 text-purple-300'
                : 'border-white/10 text-gray-200 hover:border-white/20 hover:bg-white/5'
            }`}
          >
            <Fingerprint className="w-3.5 h-3.5 text-cyan-400" />
            <span>Sovereign Portal</span>
          </button>
          
          <button
            onClick={() => handleNavClick('contact')}
            className="flex items-center gap-1 px-4.5 py-1.8 text-xs font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-300"
          >
            <span>Book Demo</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => handleNavClick('contact')}
            className="px-3.5 py-1.5 text-[11px] font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full"
          >
            Demo
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-gray-400 hover:text-white transition-colors border border-white/5 bg-[#0a0f24] rounded-full"
          >
            {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          className="absolute top-20 left-4 right-4 bg-[#050816]/95 backdrop-blur-xl rounded-2xl border border-white/10 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex flex-col gap-4 md:hidden z-40"
        >
          <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Navigation</div>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-left text-base font-semibold py-2 px-3 rounded-lg transition-all ${
                currentPage === item.id 
                  ? 'text-cyan-400 bg-blue-950/30 border-l-2 border-cyan-400 pl-4' 
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="h-[1px] bg-white/10 my-1" />
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-center gap-1.5 py-2 bg-white/5 border border-white/10 rounded-lg text-xs text-gray-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>India Headquarters • Mumbai</span>
            </div>
            <button
              onClick={() => handleNavClick('auth')}
              className="w-full text-center py-2.5 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 text-white rounded-xl text-sm font-bold"
            >
              Sovereign Portal Sign In / Register
            </button>
            <button
              onClick={() => handleNavClick('pricing')}
              className="w-full text-center py-2.5 bg-white/5 border border-white/10 text-white rounded-xl text-sm font-semibold"
            >
              Start Free Trial
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
