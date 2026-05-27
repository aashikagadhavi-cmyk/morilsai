import { useState } from 'react';
import { motion } from 'motion/react';
import { Check, Info, HelpCircle, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { PRICING_PLANS } from '../data';
import { PageType } from '../types';

interface PricingSectionProps {
  setCurrentPage?: (page: PageType) => void;
}

export default function PricingSection({ setCurrentPage }: PricingSectionProps) {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annually'>('annually');
  
  // Custom Transaction scale pricing estimator
  const [estTokens, setEstTokens] = useState(500000); // Slider default

  // Calculate recommendation based on slider
  let recommendedPlan = 'starter';
  if (estTokens > 1500000) {
    recommendedPlan = 'enterprise';
  } else if (estTokens > 150000) {
    recommendedPlan = 'growth';
  }

  return (
    <section className="relative py-24 bg-[#03050c] overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-purple-950/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/20 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Zap className="w-3.5 h-3.5 animate-bounce" />
            <span>Elastic Pricing Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            Symmetric, Value-Driven Pricing Plans
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Choose a suitable processing tier for your multi-agent networks. Save 20% by subscribing to our annual compliance cycles.
          </p>
        </div>

        {/* Toggle Switches */}
        <div className="flex items-center justify-center gap-4 mb-14">
          <span className={`text-sm font-bold uppercase tracking-wider transition-colors ${billingPeriod === 'monthly' ? 'text-white' : 'text-gray-500'}`}>Monthly Billing</span>
          <button
            onClick={() => setBillingPeriod(billingPeriod === 'monthly' ? 'annually' : 'monthly')}
            className="w-14 h-7 rounded-full bg-[#080c23] border border-white/10 p-1 flex items-center relative transition-colors duration-300 hover:border-white/20 active:scale-95"
          >
            <motion.div
              layout
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              className={`w-5 h-5 rounded-full bg-cyan-400 shadow-md ${
                billingPeriod === 'annually' ? 'ml-7' : 'ml-0'
              }`}
            />
          </button>
          <span className={`text-sm font-bold uppercase tracking-wider transition-colors flex items-center gap-1.5 ${billingPeriod === 'annually' ? 'text-cyan-400' : 'text-gray-500'}`}>
            <span>Annual Cycle</span>
            <span className="text-[10px] bg-cyan-950/80 text-cyan-400 border border-cyan-500/20 px-2 py-0.5 rounded-full font-black">SAVE 20%</span>
          </span>
        </div>

        {/* Dynamic Cost Estimator Slider */}
        <div className="max-w-3xl mx-auto bg-[#040611] rounded-2xl border border-white/10 p-6 md:p-8 mb-16 text-left shadow-[0_15px_40px_rgba(0,0,0,0.5)]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-base font-bold text-white tracking-tight">Interactive Transaction Estimator</h3>
              <p className="text-[11px] text-gray-500 font-medium">Slide to match your anticipated monthly Generative token requirements</p>
            </div>
            <div className="bg-[#02040c] border border-white/5 py-2 px-4 rounded-xl font-mono text-center shrink-0">
              <span className="text-[9px] text-gray-500 uppercase font-bold block mb-0.5">Estimated Tokens</span>
              <span className="text-sm font-extrabold text-cyan-300">{(estTokens >= 2000000) ? 'Infinite Nodes' : `${(estTokens / 1000).toLocaleString()}k Tokens`}</span>
            </div>
          </div>

          <input
            type="range"
            min="50000"
            max="2000000"
            step="25000"
            value={estTokens}
            onChange={(e) => setEstTokens(Number(e.target.value))}
            className="w-full h-1.5 bg-[#02040b] rounded-lg appearance-none cursor-pointer accent-cyan-400 border border-white/5 outline-none mb-6"
          />

          <div className="flex items-center justify-between text-xs bg-cyan-950/20 border border-cyan-500/20 p-4 rounded-xl">
            <div className="flex items-center gap-2">
              <Info className="w-4 h-4 text-cyan-400 shrink-0" />
              <p className="text-gray-300 font-medium">
                We recommend the <span className="text-cyan-400 font-black uppercase tracking-wider">{recommendedPlan}</span> for this usage tier.
              </p>
            </div>
            {setCurrentPage && (
              <button
                onClick={() => {
                  setCurrentPage('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-xs font-black uppercase text-cyan-400 hover:text-white flex items-center gap-1 hover:translate-x-0.5 transition-all"
              >
                <span>Book Custom Plan</span>
                <ArrowRight className="w-3 px-0 mx-0 border-0" />
              </button>
            )}
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {PRICING_PLANS.map((plan, i) => {
            const isGrowth = plan.id === 'growth';
            const price = billingPeriod === 'monthly' ? plan.priceMonthly : plan.priceAnnually;

            return (
              <div
                key={plan.id}
                className={`flex flex-col justify-between rounded-2xl border text-left p-6 md:p-8 transition-all duration-300 relative ${
                  isGrowth
                    ? 'border-purple-500/80 bg-[#06091b] shadow-[0_20px_40px_rgba(168,85,247,0.15)] scale-[1.02]'
                    : 'border-white/10 bg-[#040612] hover:border-white/25 shadow-lg'
                }`}
              >
                {/* Popular Badge */}
                {plan.badge && (
                  <span className="absolute -top-3.5 left-6 bg-gradient-to-r from-purple-600 to-pink-500 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md">
                    {plan.badge}
                  </span>
                )}

                {/* Name & price */}
                <div>
                  <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest font-black block mb-1">MotusAI SaaS Pack</span>
                  <h3 className="text-xl font-extrabold text-white mb-2">{plan.name}</h3>
                  <p className="text-xs text-gray-500 mb-6 leading-relaxed min-h-[40px]">{plan.description}</p>
                  
                  <div className="flex items-baseline gap-1 bg-[#02040b] border border-white/5 p-4 rounded-xl mb-6">
                    <span className="text-xs text-zinc-500 font-semibold uppercase tracking-wider">USD</span>
                    <span className="text-3xl font-black text-white tracking-tight">${price}</span>
                    <span className="text-xs text-zinc-500 font-medium">/ month</span>
                  </div>

                  {/* Bullet points checklist */}
                  <div className="flex flex-col gap-3">
                    <span className="text-[9px] font-mono text-zinc-500 block uppercase font-bold">Capabilities Included:</span>
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className="flex gap-2.5 items-start text-xs">
                        <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-xs leading-normal">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Submit button */}
                <button
                  onClick={() => {
                    if (setCurrentPage) {
                      setCurrentPage('contact');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                  className={`w-full text-center py-3 rounded-xl text-xs font-black uppercase tracking-wider mt-8 border transition-all ${
                    isGrowth
                      ? 'bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 text-white border-transparent hover:shadow-[0_0_20px_rgba(6,182,212,0.45)]'
                      : 'bg-white/5 border-white/10 text-white hover:border-white/20 hover:bg-white/10'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            );
          })}
        </div>

        {/* SOC-2 notice */}
        <div className="flex items-center justify-center gap-2 mt-12 text-xs text-gray-500">
          <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>Need custom regional local language pricing? Contact our BKC headquarters.</span>
        </div>
      </div>
    </section>
  );
}
