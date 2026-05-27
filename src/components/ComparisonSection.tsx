import { useState } from 'react';
import { motion } from 'motion/react';
import { ToggleLeft, Check, CheckSquare, XCircle, ListFilter, ShieldCheck } from 'lucide-react';
import { FEATURE_COMPARISON } from '../data';

export default function ComparisonSection() {
  const [filterCategory, setFilterCategory] = useState<'all' | 'core' | 'security' | 'support' | 'integration'>('all');

  const filteredFeatures = FEATURE_COMPARISON.filter(
    (feat) => filterCategory === 'all' || feat.category === filterCategory
  );

  const renderCellHelper = (val: boolean | string) => {
    if (typeof val === 'boolean') {
      return val ? (
        <Check className="w-5 h-5 text-emerald-450 text-emerald-400 mx-auto" />
      ) : (
        <XCircle className="w-4.5 h-4.5 text-gray-700 mx-auto opacity-40" />
      );
    }
    return <span className="text-xs text-gray-300 font-medium">{val}</span>;
  };

  return (
    <section className="relative py-24 bg-[#020308] border-t border-[#121c35]/20 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 w-[450px] h-[450px] rounded-full bg-blue-950/10 blur-[130px] -translate-x-1/2 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/40 border border-blue-500/20 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <ListFilter className="w-3.5 h-3.5" />
            <span>Robust Evaluation Matrix</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            SaaS Feature Comparison Matrix
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Review detailed criteria, processing limits, and security controls across starter, growth, and dedicated private cloud partitions.
          </p>
        </div>

        {/* Categories Tab selector filter */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {[
            { id: 'all', label: 'All Specifications' },
            { id: 'core', label: 'Core AI Models' },
            { id: 'integration', label: 'API & Connectors' },
            { id: 'security', label: 'Security & Isolated VPC' },
            { id: 'support', label: 'SLA Support' }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilterCategory(cat.id as any)}
              className={`px-4.5 py-2 rounded-full text-xs font-bold uppercase tracking-wider border transition-all ${
                filterCategory === cat.id
                  ? 'bg-purple-950/40 border-purple-500/30 text-purple-300'
                  : 'bg-white/5 border-white/5 text-gray-500 hover:text-gray-300 hover:border-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Comparison Matrix Table */}
        <div className="max-w-5xl mx-auto overflow-x-auto bg-[#040612] rounded-2xl border border-white/10 shadow-[0_15px_40px_rgba(0,0,0,0.4)]">
          <table className="w-full border-collapse text-left min-w-[700px]">
            {/* Headers */}
            <thead>
              <tr className="border-b border-white/10 bg-[#02040b]">
                <th className="py-5 px-6 text-xs font-bold text-gray-450 uppercase tracking-wider text-gray-400 w-1/3">Capabilities & Limits</th>
                <th className="py-5 px-6 text-xs font-bold text-gray-450 uppercase tracking-wider text-center text-white">Starter Tier</th>
                <th className="py-5 px-6 text-xs font-bold text-gray-450 uppercase tracking-wider text-center text-cyan-400">Growth Enterprise</th>
                <th className="py-5 px-6 text-xs font-bold text-gray-450 uppercase tracking-wider text-center text-purple-400">Custom Enterprise</th>
              </tr>
            </thead>
            {/* Rows */}
            <tbody className="divide-y divide-white/5">
              {filteredFeatures.map((feat, index) => (
                <tr key={index} className="hover:bg-white/5 transition-all">
                  {/* Name */}
                  <td className="py-4.5 px-6">
                    <span className="text-sm font-semibold text-white tracking-tight">{feat.name}</span>
                    <span className="block text-[10px] text-gray-500 uppercase font-mono tracking-widest mt-1">Class: {feat.category}</span>
                  </td>
                  {/* Starter */}
                  <td className="py-4.5 px-6 text-center border-l border-white/5 bg-black/10">
                    {renderCellHelper(feat.starter)}
                  </td>
                  {/* Growth */}
                  <td className="py-4.5 px-6 text-center border-l border-white/5 bg-black/15">
                    {renderCellHelper(feat.growth)}
                  </td>
                  {/* Enterprise */}
                  <td className="py-4.5 px-6 text-center border-l border border-white/5 bg-purple-950/5">
                    {renderCellHelper(feat.enterprise)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom SOC-2 note */}
        <div className="flex items-center justify-center gap-2 mt-8 text-xs text-gray-500">
          <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>All metrics backed by symmetric Mumbai BKC center log audits • ISO 27001 Certified processes</span>
        </div>
      </div>
    </section>
  );
}
