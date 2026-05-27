import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Play, Sparkles, Terminal, RotateCcw, CheckCircle2, Cpu, ArrowRight } from 'lucide-react';
import { PageType } from '../types';

interface HeroSectionProps {
  setCurrentPage: (page: PageType) => void;
}

const PRESET_MOCKS = [
  {
    title: 'Analyze Marathi Regional Email',
    prompt: 'Read incoming feedback.txt, translate, determine emotional state, extract customer details, and draft response.',
    steps: [
      { text: 'Queue listener triggered: Feed index #7040', type: 'system' },
      { text: 'Extracted language: Marathi (regional client profile)', type: 'system' },
      { text: 'Content draft: "खूप छान सेवा आहे, पण वेळेत हवी होती."', type: 'content' },
      { text: 'Semantic translation: "Service is very good, but wanted it on time."', type: 'success' },
      { text: 'Sentimental quotient: Mild Anxiety (62% match)', type: 'success' },
      { text: 'Triggering multi-agent workflow: Sync with Pune regional office...', type: 'system' },
      { text: 'Drafted professional Marathi reply acknowledging turnaround schedule...', type: 'content' },
      { text: 'Action complete. Response delivered in 1.48s.', type: 'complete' }
    ]
  },
  {
    title: 'Generate E-commerce Marketing Pack',
    prompt: 'Create 3 variations of engaging ad copy for "Vibrant Silk Saree" targeting tech-savvy youth in Mumbai.',
    steps: [
      { text: 'Fine-tuned LLM node requested (Model ID: motus-gen-v4)', type: 'system' },
      { text: 'Cohort analyzed: E-commerce active shoppers, Mumbai metropolitan area', type: 'system' },
      { text: 'Generating variation 1: "Tradition marries tech. Drape yourself in smart heritage..."', type: 'content' },
      { text: 'Generating variation 2: "From Bandra brunches to office keynotes. Saree simplified..."', type: 'content' },
      { text: 'Validation engine: AI safety check & policy structure passed (100%)', type: 'success' },
      { text: 'Output formatted to client webhook payload standard', type: 'system' },
      { text: 'Generated 3 copy variations successfully in 0.94s.', type: 'complete' }
    ]
  },
  {
    title: 'Orchestrate Invoicing & Payouts',
    prompt: 'Verify vendor PDF structure, update Ledger node, detect billing anomalies, and queue approval.',
    steps: [
      { text: 'File uploaded: Invoice_May_7294.pdf', type: 'system' },
      { text: 'OCR layout parsing: Detected BKC Tech Partner Inc. standard', type: 'system' },
      { text: 'Parsed amount: INR 3,45,000. Matching with contract standard...', type: 'system' },
      { text: 'Anomaly validation: Amounts match itemized catalog metrics perfectly', type: 'success' },
      { text: 'Updating database: Syncing ledger spreadsheet entry, Row #1042', type: 'system' },
      { text: 'Email prompt drafted: "Approvals required - BM-709"', type: 'content' },
      { text: 'Transaction ready. Status: Awaiting Executive Token (BKC office Code #901)', type: 'complete' }
    ]
  }
];

export default function HeroSection({ setCurrentPage }: HeroSectionProps) {
  const [selectedPreset, setSelectedPreset] = useState(0);
  const [activeSteps, setActiveSteps] = useState<string[]>([]);
  const [activeStepTypes, setActiveStepTypes] = useState<string[]>([]);
  const [isStreaming, setIsStreaming] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const startStream = () => {
    if (isStreaming) return;
    setIsStreaming(true);
    setActiveSteps([]);
    setActiveStepTypes([]);
    setCurrentStepIndex(0);
  };

  useEffect(() => {
    if (!isStreaming) return;
    const steps = PRESET_MOCKS[selectedPreset].steps;
    if (currentStepIndex < steps.length) {
      const timer = setTimeout(() => {
        setActiveSteps((prev) => [...prev, steps[currentStepIndex].text]);
        setActiveStepTypes((prev) => [...prev, steps[currentStepIndex].type]);
        setCurrentStepIndex((prev) => prev + 1);
      }, 450);
      return () => clearTimeout(timer);
    } else {
      setIsStreaming(false);
    }
  }, [isStreaming, currentStepIndex, selectedPreset]);

  // Initial trigger
  useEffect(() => {
    startStream();
  }, [selectedPreset]);

  return (
    <section className="relative min-h-screen pt-28 pb-16 flex flex-col justify-center overflow-hidden bg-[#02040c]">
      {/* Dynamic background canvas styling */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-purple-700/10 blur-[130px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[150px]" />
        
        {/* Futuristic grid */}
        <div className="absolute inset-x-0 top-0 h-full bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left column: Headings */}
        <div className="lg:col-span-7 flex flex-col gap-6 text-left">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-950/40 border border-blue-500/20 w-fit">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span className="text-xs font-bold text-cyan-300 uppercase tracking-widest">Enterprise Generative AI Suite</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
            Automate Smarter.<span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">Scale Unbound.</span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg text-gray-400 max-w-xl leading-relaxed">
            MotusAI deploys cognitive multi-agent neural frameworks to automate legacy workflows, power natural voice and chat platforms, and predict enterprise outcomes. Seamless integration, ISO privacy, and unmatched velocity.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-2">
            <button
              onClick={() => {
                setCurrentPage('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center justify-center gap-2 px-7 py-3.5 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 text-white rounded-xl font-bold shadow-[0_0_30px_rgba(147,51,234,0.3)] hover:shadow-[0_0_35px_rgba(6,182,212,0.5)] transform hover:-translate-y-0.5 transition-all duration-300 text-sm"
            >
              <span>Transform Your Business with AI</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => {
                setCurrentPage('auth');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center justify-center gap-2 px-7 py-3.5 bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-xl font-bold hover:border-white/20 transition-all text-sm"
            >
              <span>Start Free Trial</span>
            </button>
          </div>

          {/* Metadata banner */}
          <div className="grid grid-cols-3 gap-6 pt-8 mt-4 border-t border-white/5 max-w-lg">
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white">96.8%</div>
              <div className="text-[11px] text-gray-500 font-medium uppercase tracking-wider mt-1">Accuracy Index</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white">18x</div>
              <div className="text-[11px] text-gray-500 font-medium uppercase tracking-wider mt-1">SLA Acceleration</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white">0%</div>
              <div className="text-[11px] text-gray-500 font-medium uppercase tracking-wider mt-1">Data Leakage</div>
            </div>
          </div>
        </div>

        {/* Right column: Interactive Terminal Playground */}
        <div className="lg:col-span-5 w-full flex flex-col gap-4">
          <div className="bg-[#050917] rounded-2xl border border-white/10 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.6)] relative overflow-hidden group">
            {/* Top glass pane bar */}
            <div className="flex items-center justify-between pb-4 border-b border-white/5 mb-4">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-purple-400" />
                <span className="text-xs font-mono font-medium text-gray-400">MotusAI Sandbox Shell v1.4</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              </div>
            </div>

            {/* Presets List */}
            <div className="flex gap-1.5 mb-4 overflow-x-auto pb-1 scrollbar-thin">
              {PRESET_MOCKS.map((preset, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (isStreaming) return;
                    setSelectedPreset(index);
                  }}
                  disabled={isStreaming}
                  className={`px-3 py-1.5 text-[11px] font-semibold rounded-lg shrink-0 border transition-all ${
                    selectedPreset === index
                      ? 'bg-purple-950/50 border-purple-500/40 text-purple-300 shadow-[0_0_10px_rgba(168,85,247,0.15)]'
                      : 'bg-[#080d22] border-white/5 text-gray-400 hover:text-white hover:border-white/10'
                  }`}
                >
                  {preset.title}
                </button>
              ))}
            </div>

            {/* Simulated Prompt Box */}
            <div className="bg-[#030612] border border-white/5 rounded-xl p-3 mb-4 text-left">
              <span className="text-[10px] font-mono text-purple-400 uppercase tracking-wider block mb-1">Instruction Prompt</span>
              <p className="text-xs font-sans text-gray-300">
                {PRESET_MOCKS[selectedPreset].prompt}
              </p>
            </div>

            {/* Console Window */}
            <div className="bg-[#020308] border border-white/10 rounded-xl p-4 min-h-[220px] max-h-[220px] overflow-y-auto font-mono text-xs flex flex-col gap-2.5 text-left scrollbar-thin scroll-smooth shadow-inner">
              {activeSteps.length === 0 && (
                <div className="text-gray-500 italic text-center py-16 flex flex-col items-center gap-2">
                  <Cpu className="w-6 h-6 text-gray-600 animate-spin" />
                  <span>Awaiting instructions trigger...</span>
                </div>
              )}
              {activeSteps.map((step, idx) => {
                const type = activeStepTypes[idx];
                let colorClass = 'text-gray-400';
                let iconChar = '›';

                if (type === 'system') {
                  colorClass = 'text-cyan-400/95';
                  iconChar = '⚙';
                } else if (type === 'content') {
                  colorClass = 'text-purple-300 italic';
                  iconChar = '✎';
                } else if (type === 'success') {
                  colorClass = 'text-emerald-400 font-medium';
                  iconChar = '✓';
                } else if (type === 'complete') {
                  colorClass = 'text-yellow-400 font-bold';
                  iconChar = '⚡';
                }

                return (
                  <motion.div
                    initial={{ opacity: 0, x: -5 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.15 }}
                    key={idx}
                    className={`${colorClass} leading-5 flex items-start gap-2`}
                  >
                    <span className="opacity-60">{iconChar}</span>
                    <span className="flex-1">{step}</span>
                  </motion.div>
                );
              })}
            </div>

            {/* Play controls */}
            <div className="flex items-center justify-between mt-4">
              <button
                onClick={startStream}
                disabled={isStreaming}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-900/30 hover:bg-purple-900/50 border border-purple-500/30 text-purple-300 disabled:opacity-40 transition-all text-[11px] font-bold uppercase tracking-wider"
              >
                {isStreaming ? (
                  <>
                    <Cpu className="w-3.5 h-3.5 text-purple-400 animate-spin" />
                    <span>Executing Suite</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 text-purple-400" />
                    <span>Execute Agent</span>
                  </>
                )}
              </button>

              <button
                onClick={() => {
                  setActiveSteps([]);
                  setActiveStepTypes([]);
                  setIsStreaming(false);
                }}
                className="p-2 border border-white/5 hover:border-white/10 hover:bg-white/5 rounded-lg text-gray-400 hover:text-white transition-all"
                title="Reset Shell"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="flex items-center justify-center gap-1.5 text-center text-[11px] font-medium text-gray-500">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
            <span>Simulated workspace execution node. Latency: ~1.2s avg.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
