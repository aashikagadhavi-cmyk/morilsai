import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Network, ArrowRight, ShieldCheck, ShoppingCart, Activity, Zap, Layers, BarChart2 } from 'lucide-react';
import { INDUSTRIES } from '../data';

export default function IndustriesSection() {
  const [selectedIdx, setSelectedIdx] = useState(0);

  const icons = [ShoppingCart, Activity, Zap, Layers, ShieldCheck];

  return (
    <section className="relative py-24 bg-[#03050c] overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[300px] h-[300px] rounded-full bg-blue-900/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header content */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/20 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Network className="w-3.5 h-3.5" />
            <span>Target Industries & Verticals</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            Custom-Fit for High Impact Industries
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Every sector requires specialized linguistic and logical focus. Our systems are pre-compiled and optimized with native vertical compliance standards.
          </p>
        </div>

        {/* Tab List horizontal bar on mobile, grid on desktop */}
        <div className="flex flex-wrap gap-2.5 justify-center mb-10 max-w-4xl mx-auto">
          {INDUSTRIES.map((ind, idx) => {
            const Icon = icons[idx];
            const isSelected = selectedIdx === idx;
            return (
              <button
                key={ind.id}
                onClick={() => setSelectedIdx(idx)}
                className={`flex items-center gap-2 px-4.5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider border transition-all ${
                  isSelected
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white border-transparent'
                    : 'bg-white/5 border-white/5 text-gray-400 hover:text-white hover:border-white/10'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{ind.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active industry layout showcase */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedIdx}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch"
            >
              {/* Left Column: Summary */}
              <div className="md:col-span-7 bg-[#040611] rounded-2xl border border-white/10 p-6 md:p-8 text-left flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest block font-bold mb-1">Sector Overview</span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2">{INDUSTRIES[selectedIdx].name}</h3>
                  <p className="text-xs sm:text-sm text-cyan-200/80 italic mb-4">“{INDUSTRIES[selectedIdx].tagline}”</p>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                    {INDUSTRIES[selectedIdx].description}
                  </p>
                </div>

                {/* Benefits List */}
                <div className="flex flex-col gap-2 mt-6">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block font-bold">Key Benefits</span>
                  {INDUSTRIES[selectedIdx].benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                      <span className="text-xs text-gray-300 font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Case study and numbers */}
              <div className="md:col-span-5 bg-gradient-to-b from-[#080c20]/60 to-[#030510]/80 rounded-2xl border border-white/10 p-6 md:p-8 text-left flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest block font-bold mb-1">Live Case Study</span>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-bold text-white bg-purple-950/40 border border-purple-500/20 px-2 py-0.5 rounded">Client: {INDUSTRIES[selectedIdx].caseStudy.client}</span>
                  </div>
                  
                  <div className="flex flex-col gap-3 text-xs leading-normal">
                    <div>
                      <strong className="text-gray-400 block font-mono text-[9px] uppercase">The Challenge</strong>
                      <span className="text-gray-300">{INDUSTRIES[selectedIdx].caseStudy.challenge}</span>
                    </div>
                    <div>
                      <strong className="text-gray-400 block font-mono text-[9px] uppercase">The Solution Implemented</strong>
                      <span className="text-gray-300">{INDUSTRIES[selectedIdx].caseStudy.outcome}</span>
                    </div>
                  </div>
                </div>

                {/* Big Metric Output visual */}
                <div className="border-t border-white/10 pt-5 mt-6">
                  <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-wider block font-semibold mb-1">Performance Index Accomplished</span>
                  <div className="flex items-baseline gap-2 text-2xl font-black bg-gradient-to-r from-emerald-400 to-cyan-300 bg-clip-text text-transparent">
                    {INDUSTRIES[selectedIdx].caseStudy.stat}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
