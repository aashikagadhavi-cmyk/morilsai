import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Cpu, Zap, Forward, Play, Radio, Database, Sparkles, MessageCircleCode, CheckCircle2 } from 'lucide-react';

interface PipelineNode {
  id: string;
  name: string;
  role: string;
  status: 'idle' | 'active' | 'complete';
  icon: any;
  color: string;
}

const FLOWS = [
  {
    name: 'Customer Support Router',
    desc: 'Incoming support ticket parsed, translated, categorized, and resolved natively.',
    nodes: [
      { id: '1', name: 'Raw API Ticket In', role: 'Listens to regional feeds', icon: Radio, color: 'text-cyan-400 border-cyan-500/20 bg-cyan-950/20' },
      { id: '2', name: 'Marathi Language Translater', role: 'Sub-50ms conversational analyzer', icon: Sparkles, color: 'text-purple-400 border-purple-500/20 bg-purple-950/20' },
      { id: '3', name: 'Salesforce CRM Vector Reconciler', role: 'Fetches historic patterns', icon: Database, color: 'text-blue-400 border-blue-500/20 bg-blue-950/20' },
      { id: '4', name: 'Auto Whatsapp outbound payload', role: 'Delivers local language response', icon: MessageCircleCode, color: 'text-emerald-400 border-emerald-500/20 bg-emerald-950/20' }
    ]
  },
  {
    name: 'BKC Financial Ledger Audit',
    desc: 'Vendor uploads invoice PDF, system matches contract items, and queues automatic approval.',
    nodes: [
      { id: '1', name: 'Document Indexer In', role: 'Listens via secure AWS VPC', icon: Radio, color: 'text-purple-400 border-purple-500/20 bg-purple-950/20' },
      { id: '2', name: 'OCR Semantic Structurer', role: 'Extracts tabular amounts', icon: Sparkles, color: 'text-cyan-400 border-cyan-500/20 bg-cyan-950/20' },
      { id: '3', name: 'Contracts Baseline Crossmatch', role: 'Checks threshold invariants', icon: Database, color: 'text-blue-400 border-blue-500/20 bg-blue-950/20' },
      { id: '4', name: 'Mumbai Ledger Approval Draft', role: 'Triggers local bank token flow', icon: Cpu, color: 'text-yellow-400 border-yellow-500/20 bg-yellow-950/20' }
    ]
  }
];

export default function WorkflowSection() {
  const [selectedFlow, setSelectedFlow] = useState(0);
  const [activeStep, setActiveStep] = useState(-1);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    setActiveStep(-1);
    setIsRunning(false);
  }, [selectedFlow]);

  const triggerWorkflowSimulation = () => {
    if (isRunning) return;
    setIsRunning(true);
    setActiveStep(0);
  };

  useEffect(() => {
    if (!isRunning) return;
    const maxSteps = FLOWS[selectedFlow].nodes.length;
    if (activeStep >= 0 && activeStep < maxSteps) {
      const timer = setTimeout(() => {
        setActiveStep((prev) => prev + 1);
      }, 1500); // 1.5s per node pulse
      return () => clearTimeout(timer);
    } else {
      setIsRunning(false);
    }
  }, [isRunning, activeStep, selectedFlow]);

  return (
    <section className="relative py-24 bg-[#020308] border-b border-white/5 overflow-hidden">
      <div className="absolute top-10 left-10 w-[300px] h-[300px] rounded-full bg-purple-950/10 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950/40 border border-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>Autonomous Orchestration</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            Hyperscale AI Automation Workflows
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Configure dynamic multi-tier pipelines that span database nodes, fine-tuned generative networks, and legacy terminals. Watch a live simulated cycle.
          </p>
        </div>

        {/* Outer Box */}
        <div className="max-w-5xl mx-auto bg-[#040611] rounded-2xl border border-white/10 p-6 md:p-8 shadow-[0_15px_40px_rgba(0,0,0,0.5)]">
          {/* Header Controls */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-white/5 pb-6 mb-8 text-left">
            <div>
              <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest font-bold">Pipeline Profiles</span>
              <div className="flex gap-2 mt-1.5">
                {FLOWS.map((flow, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      if (isRunning) return;
                      setSelectedFlow(idx);
                    }}
                    disabled={isRunning}
                    className={`px-4 py-2 rounded-lg text-xs font-bold transition-all border ${
                      selectedFlow === idx
                        ? 'bg-purple-950/30 border-purple-500/30 text-purple-300'
                        : 'bg-white/5 border-white/5 text-gray-400 hover:text-white hover:border-white/10'
                    }`}
                  >
                    {flow.name}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={triggerWorkflowSimulation}
              disabled={isRunning}
              className="flex items-center gap-2 px-5 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-cyan-550/20 disabled:opacity-40 hover:-translate-y-0.5 active:translate-y-0 transition-all shrink-0 mt-3 sm:mt-0"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>{isRunning ? 'Flow Executing' : 'Trigger Flow'}</span>
            </button>
          </div>

          {/* Description */}
          <p className="text-sm text-gray-400 text-left mb-8 italic">
            <strong>Active Target:</strong> {FLOWS[selectedFlow].desc}
          </p>

          {/* Visual Interactive Pipeline Graph Horizontal Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-stretch relative">
            {FLOWS[selectedFlow].nodes.map((node, i) => {
              const Icon = node.icon;
              const isCurrent = activeStep === i;
              const isCompleted = activeStep > i;
              const isIdle = activeStep < i || activeStep === -1;

              return (
                <div key={node.id} className="relative flex flex-col items-center">
                  {/* Outer card slot */}
                  <div
                    className={`w-full p-5 rounded-2xl border text-left flex flex-col gap-3 transition-all duration-500 ${
                      isCurrent
                        ? 'border-purple-500/80 bg-purple-950/20 shadow-[0_0_20px_rgba(168,85,247,0.3)] scale-[1.03]'
                        : isCompleted
                        ? 'border-emerald-500/40 bg-emerald-950/5 opacity-80'
                        : 'border-white/5 bg-[#02040b]'
                    }`}
                  >
                    {/* Node status indicators */}
                    <div className="flex items-center justify-between">
                      <div className={`p-2 rounded-lg border ${node.color} shrink-0`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded-full font-bold ${
                        isCurrent
                          ? 'bg-purple-900/30 text-purple-300 animate-pulse'
                          : isCompleted
                          ? 'bg-emerald-950/80 text-emerald-300'
                          : 'bg-white/5 text-gray-500'
                      }`}>
                        {isCurrent ? 'ACTIVE' : isCompleted ? 'RESOLVED' : 'QUEUED'}
                      </span>
                    </div>

                    <div className="mt-1">
                      <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider block">Node {i+1}</span>
                      <h4 className="text-[13px] font-bold text-white tracking-tight mt-0.5">{node.name}</h4>
                      <p className="text-[11px] text-gray-500 leading-normal mt-1">{node.role}</p>
                    </div>

                    {/* Progress tracking line */}
                    {isCurrent && (
                      <div className="w-full h-1 bg-purple-950 rounded-full overflow-hidden mt-1">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: '100%' }}
                          transition={{ duration: 1.5, ease: 'linear' }}
                          className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                        />
                      </div>
                    )}
                  </div>

                  {/* Connect arrow desktop indicator */}
                  {i < FLOWS[selectedFlow].nodes.length - 1 && (
                    <div className="hidden md:block absolute -right-4.5 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
                      <Forward className={`w-5 h-5 transition-transform duration-300 ${
                        isCompleted ? 'text-emerald-400 rotate-0' : 'text-gray-700'
                      }`} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Execution Telemetry Success Footer */}
          {activeStep === FLOWS[selectedFlow].nodes.length && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-center gap-2 mt-8 bg-emerald-950/20 border border-emerald-500/20 rounded-xl p-4 max-w-lg mx-auto"
            >
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <div className="text-xs text-left">
                <span className="text-white font-bold block mb-0.5">Pipeline Cycle Safe</span>
                <span className="text-gray-400 leading-normal">
                  All conditional tasks parsed and committed securely with zero ledger errors. Reconciled in 6.00s.
                </span>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
