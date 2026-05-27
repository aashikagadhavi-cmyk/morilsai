import { motion } from 'motion/react';
import { Bot, Mail, Send, Github, Linkedin, Twitter, Sparkles, Check } from 'lucide-react';
import React, { useState } from 'react';
import { PageType } from '../types';

interface FooterProps {
  setCurrentPage: (page: PageType) => void;
}

export default function Footer({ setCurrentPage }: FooterProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
    }, 2000);
  };

  const handlePageClick = (id: PageType) => {
    setCurrentPage(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#020308] border-t border-white/5 pt-16 pb-8 relative overflow-hidden text-left">
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-blue-950/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-10">
        {/* Column 1: Branding */}
        <div className="md:col-span-4 flex flex-col gap-4">
          <div onClick={() => handlePageClick('home')} className="flex items-center gap-2 cursor-pointer group w-fit">
            <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-600 via-blue-600 to-cyan-400 p-[1.5px]">
              <div className="w-full h-full bg-[#020308] rounded-[7px] flex items-center justify-center">
                <Bot className="w-3.5 h-3.5 text-cyan-400" />
              </div>
            </div>
            <span className="text-lg font-bold tracking-tight bg-gradient-to-r from-white via-cyan-100 to-purple-300 bg-clip-text text-transparent">
              Motus<span className="text-cyan-400 font-black">AI</span>
            </span>
          </div>

          <p className="text-xs text-gray-500 leading-relaxed max-w-sm">
            Empowering global institutions and high-growth enterprises with secure, isolated cognitive agent networks, RAG indexes, and multi-lingual deep learning.
          </p>

          <span className="text-xs text-gray-500 italic block">
            Founded by Mohammad Faisal • HQ BKC Mumbai, Maharashtra
          </span>

          {/* Socials */}
          <div className="flex items-center gap-3 mt-2">
            {[Github, Linkedin, Twitter].map((Social, idx) => (
              <a
                key={idx}
                href="#"
                onClick={(e) => e.preventDefault()}
                className="p-2 border border-white/5 hover:border-white/10 hover:bg-white/5 rounded-lg text-gray-500 hover:text-white transition-all"
              >
                <Social className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Column 2: Sitemap Links */}
        <div className="md:col-span-4 grid grid-cols-2 gap-8">
          {/* Site Pages */}
          <div className="flex flex-col gap-3">
            <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest font-bold">Solutions Hub</span>
            <div className="flex flex-col gap-2 text-xs">
              {[
                { name: 'Generative AI', id: 'solutions' },
                { name: 'Cognitive Chatbots', id: 'solutions' },
                { name: 'Automated Workflows', id: 'solutions' },
                { name: 'Predictive Analytics', id: 'solutions' }
              ].map((link, idx) => (
                <button
                  key={idx}
                  onClick={() => handlePageClick(link.id as PageType)}
                  className="text-gray-400 hover:text-white transition-colors text-left"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Corporate Sections */}
          <div className="flex flex-col gap-3">
            <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest font-bold">Identity Portal</span>
            <div className="flex flex-col gap-2 text-xs">
              {[
                { name: 'About Faisal & Corporate', id: 'about' },
                { name: 'Global Case Studies', id: 'industries' },
                { name: 'Elastic Subscriptions', id: 'pricing' },
                { name: 'Intelligence Journal', id: 'blog' },
                { name: 'Headquarters BKC', id: 'contact' }
              ].map((link, idx) => (
                <button
                  key={idx}
                  onClick={() => handlePageClick(link.id as PageType)}
                  className="text-gray-400 hover:text-white transition-colors text-left"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Column 3: Newsletter */}
        <div className="md:col-span-4 flex flex-col gap-3">
          <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest font-bold">Stay updated • Insight journal</span>
          <p className="text-xs text-gray-500 leading-normal mb-1">
            Subscribe to receive our weekly multi-agent design patterns and compliance digests.
          </p>

          <form onSubmit={handleSubscribe} className="flex gap-2">
            <div className="relative flex-1">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-550 text-gray-500" />
              <input
                type="email"
                required
                placeholder="aashikagadhavi@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#040612] border border-white/10 rounded-xl py-2 pl-9 pr-4 text-xs font-semibold text-white focus:outline-none focus:border-cyan-500/50 transition-all placeholder:text-gray-600"
              />
            </div>
            <button
              type="submit"
              className="p-2.5 bg-gradient-to-r from-blue-600 to-cyan-505 bg-gradient-to-r from-blue-600 to-cyan-550 border border-transparent rounded-xl text-white hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all shrink-0 flex items-center justify-center"
            >
              {subscribed ? <Check className="w-4 h-4 text-emerald-400" /> : <Send className="w-4 h-4" />}
            </button>
          </form>

          {subscribed && (
            <span className="text-[10px] text-emerald-400 font-bold tracking-tight">
              Asecure dispatch loop scheduled. Verified!
            </span>
          )}
        </div>
      </div>

      {/* Copy attribution bottom bar */}
      <div className="max-w-7xl mx-auto px-6 border-t border-white/5 mt-12 pt-6.5 flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-650 text-gray-500 gap-4">
        <span>© 2026 MotusAI Private Limited. Incorporating Bandra Kurla Complex (BKC), Mumbai, Maharashtra 400051.</span>
        <div className="flex gap-4">
          <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors">Privacy Charter</a>
          <span>•</span>
          <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors">ISO Regulatory terms</a>
        </div>
      </div>
    </footer>
  );
}
