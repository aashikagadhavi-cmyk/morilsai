import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, ArrowLeft, ArrowRight, Star } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function TestimonialsSection() {
  const [activeIdx, setActiveIdx] = useState(0);

  const prev = () => {
    setActiveIdx((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const next = () => {
    setActiveIdx((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative py-20 bg-[#020308] border-t border-white/5 overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-purple-950/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Header content */}
        <div className="max-w-2xl mx-auto mb-12">
          <Quote className="w-8 h-8 text-cyan-400 mx-auto opacity-70 mb-3" />
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
            Endorsed by Leading Tech Orchestrators
          </h2>
          <span className="text-xs text-gray-450 text-gray-500 block uppercase tracking-wider mt-1.5 font-bold">Client Success Experiences</span>
        </div>

        {/* Carousel slide box */}
        <div className="relative bg-[#040611] rounded-2xl border border-white/10 p-6 md:p-10 shadow-lg text-left overflow-hidden min-h-[220px] flex flex-col justify-between">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIdx}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col md:flex-row items-center gap-6 justify-between"
            >
              <div className="flex-1">
                {/* 5 stars */}
                <div className="flex gap-1.5 mb-4 text-yellow-450 text-yellow-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                
                <p className="text-sm sm:text-base text-gray-250 text-gray-200 leading-relaxed font-sans font-medium">
                  “{TESTIMONIALS[activeIdx].quote}”
                </p>
                
                <div className="mt-6 flex items-center gap-3">
                  <img
                    src={TESTIMONIALS[activeIdx].avatar}
                    alt={TESTIMONIALS[activeIdx].author}
                    referrerPolicy="no-referrer"
                    className="w-9 h-9 rounded-full object-cover border border-cyan-400/30 shrink-0"
                  />
                  <div>
                    <span className="text-xs font-bold text-white block leading-none">{TESTIMONIALS[activeIdx].author}</span>
                    <span className="text-[10px] text-gray-500 block mt-1 leading-none">{TESTIMONIALS[activeIdx].role} • {TESTIMONIALS[activeIdx].company}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Left/Right controls indicators */}
          <div className="flex justify-end gap-2.5 mt-8 border-t border-white/5 pt-4.5">
            <button
              onClick={prev}
              className="p-2 border border-white/10 hover:border-white/20 hover:bg-white/5 rounded-lg text-gray-500 hover:text-white transition-all active:scale-90"
              title="Previous testimony"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={next}
              className="p-2 border border-white/10 hover:border-white/20 hover:bg-white/5 rounded-lg text-gray-500 hover:text-white transition-all active:scale-90"
              title="Next testimony"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
