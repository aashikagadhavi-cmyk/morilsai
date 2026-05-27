import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, BrainCircuit, Workflow, BarChart3, CheckSquare, TrendingUp } from 'lucide-react';
import { SOLUTIONS } from '../data';
import { PageType } from '../types';

interface SolutionsSectionProps {
  setCurrentPage?: (page: PageType) => void;
}

export default function SolutionsSection({ setCurrentPage }: SolutionsSectionProps) {
  const [selectedIdx, setSelectedIdx] = useState(0);

  const icons = [Sparkles, BrainCircuit, Workflow, BarChart3];

  return (
    <section className="relative py-24 bg-[#02040a] overflow-hidden">
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-purple-900/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header content */}
        <div className="text-left max-w-3xl mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/40 border border-blue-500/20 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <BrainCircuit className="w-3.5 h-3.5" />
            <span>Core AI Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            Solutions Built to Solve Real Scale Challenges
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Our specialized generative engines and deep learning protocols are engineered to unlock exponential productivity. Discover our central solutions.
          </p>
        </div>

        {/* Tab/Navigation Panels Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left panel tabs: 4 Items */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            {SOLUTIONS.map((sol, idx) => {
              const Icon = icons[idx];
              const isSelected = selectedIdx === idx;
              return (
                <button
                  key={sol.id}
                  onClick={() => setSelectedIdx(idx)}
                  className={`p-5 rounded-2xl border text-left flex items-start gap-4 transition-all duration-300 ${
                    isSelected
                      ? 'bg-gradient-to-r from-blue-950/30 to-purple-950/20 border-cyan-500/40 shadow-[0_0_20px_rgba(6,182,212,0.1)]'
                      : 'bg-[#040610] border-white/5 hover:border-white/10 hover:bg-[#070b1b]'
                  }`}
                >
                  <div className={`p-2.5 rounded-xl border shrink-0 ${
                    isSelected ? 'text-cyan-400 border-cyan-500/30' : 'text-gray-500 border-white/5 bg-black/20'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className={`text-sm font-bold transition-colors ${isSelected ? 'text-white' : 'text-gray-450 text-gray-400'}`}>{sol.title}</h3>
                    <p className="text-[11px] text-gray-500 leading-normal mt-1.5 line-clamp-2">{sol.shortDesc}</p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right panel display: Active Detail Panel */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedIdx}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-[#040611] rounded-2xl border border-white/10 p-6 md:p-8 shadow-[0_20px_45px_rgba(0,0,0,0.6)] text-left flex flex-col gap-6"
              >
                {/* Visual Label */}
                <div className="flex items-center justify-between border-b border-white/5 pb-4">
                  <span className="text-xs font-mono text-purple-400 uppercase font-black tracking-widest">Active Solutions Matrix</span>
                  <div className="flex items-center gap-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-450 bg-cyan-400" />
                    <span className="text-[10px] font-mono text-gray-400 font-bold uppercase">Ready Deploy Node</span>
                  </div>
                </div>

                {/* Heading & Paragraph */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">{SOLUTIONS[selectedIdx].title}</h3>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mt-3">
                    {SOLUTIONS[selectedIdx].longDesc}
                  </p>
                </div>

                {/* Features Checklist */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-2">
                  {SOLUTIONS[selectedIdx].features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2.5 bg-[#020308] border border-white/5 p-3 rounded-xl">
                      <CheckSquare className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="text-xs text-gray-300 leading-normal">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Statistics Panels */}
                <div className="border-t border-white/10 pt-6">
                  <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider block font-bold mb-3">Enterprise SLA Metrics Accomplished</span>
                  <div className="grid grid-cols-3 gap-4">
                    {SOLUTIONS[selectedIdx].metrics.map((metric, i) => (
                      <div key={i} className="bg-gradient-to-b from-[#02040b] to-[#040713] border border-white/5 p-4 rounded-xl">
                        <div className="text-xl sm:text-2xl font-black text-white tracking-tight">{metric.value}</div>
                        <div className="text-[10px] text-zinc-500 font-medium uppercase tracking-wider mt-1.5 leading-tight">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action CTA */}
                {setCurrentPage && (
                  <div className="flex gap-4 mt-2">
                    <button
                      onClick={() => {
                        setCurrentPage('contact');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-xs uppercase tracking-wider transition-all"
                    >
                      Configure Sandbox
                    </button>
                    <button
                      onClick={() => {
                        setCurrentPage('pricing');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-xs uppercase tracking-wider transition-all"
                    >
                      Get Pricing Pack
                    </button>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
