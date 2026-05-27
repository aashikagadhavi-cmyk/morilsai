import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AreaChart, Key, FileCode, Check, Copy, RefreshCw, Cpu, Activity, HelpCircle, HardDrive, ShieldCheck, TrendingUp } from 'lucide-react';

export default function ShowcaseSection() {
  const [activeTab, setActiveTab] = useState<'analytics' | 'api-key' | 'code-snippets'>('analytics');
  
  // Real-time API Key status
  const [apiKey, setApiKey] = useState('motus_live_9fa8c187e59b2014ff9da31e78bc894b');
  const [keyCopied, setKeyCopied] = useState(false);
  const [isRegenerating, setIsRegenerating] = useState(false);

  // Selected Code Snippet language
  const [selectedLang, setSelectedLang] = useState<'nodejs' | 'python' | 'curl'>('nodejs');

  // Real-time fluctuating telemetry
  const [avgLatency, setAvgLatency] = useState(84);
  const [uptime, setUptime] = useState(99.99);
  const [liveReqCount, setLiveReqCount] = useState(148092);

  useEffect(() => {
    const timer = setInterval(() => {
      // Fluctuating metric simulation
      setAvgLatency((prev) => Math.floor(Math.max(76, Math.min(94, prev + (Math.random() * 4 - 2)))));
      setLiveReqCount((prev) => prev + Math.floor(Math.random() * 3));
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const handleCopyKey = () => {
    navigator.clipboard.writeText(apiKey);
    setKeyCopied(true);
    setTimeout(() => setKeyCopied(false), 2000);
  };

  const handleRegenerateKey = () => {
    setIsRegenerating(true);
    setTimeout(() => {
      const chars = 'abcdef0123456789';
      let randomHex = '';
      for (let i = 0; i < 32; i++) {
        randomHex += chars[Math.floor(Math.random() * 16)];
      }
      setApiKey(`motus_live_${randomHex}`);
      setIsRegenerating(false);
    }, 1000);
  };

  const CODE_SNIPPETS = {
    nodejs: `// Install: npm install @google/genai\nimport { MotusClient } from '@motusai/sdk';\n\nconst client = new MotusClient({\n  apiKey: "${apiKey}"\n});\n\n// Trigger continuous orchestration\nconst response = await client.orchestrate({\n  pipelineId: "mumbai-finance-invoice-flow",\n  inputs: {\n    fileUrl: "https://bkc-records.in/invoice.pdf",\n    autoApproveAboveUsd: 5000\n  }\n});\n\nconsole.log(\`Execution Index: \${response.executionId}\`);`,
    python: `# Install: pip install motusai-sdk\nfrom motusai import MotusClient\n\nclient = MotusClient(\n  api_key="${apiKey}"\n)\n\n# Trigger multi-agent flow\nresponse = client.orchestrate(\n  pipeline_id="mumbai-finance-invoice-flow",\n  inputs={\n    'fileUrl': 'https://bkc-records.in/invoice.pdf',\n    'autoApproveAboveUsd': 5000\n  }\n)\n\nprint(f"Agent Status: {response.status}")`,
    curl: `curl -X POST "https://api.motus.ai/v1/orchestration" \\\n  -H "Authorization: Bearer ${apiKey}" \\\n  -H "Content-Type: application/json" \\\n  -d '{\n    "pipelineId": "mumbai-finance-invoice-flow",\n    "inputs": {\n      "fileUrl": "https://bkc-records.in/invoice.pdf",\n      "autoApproveAboveUsd": 5000\n    }\n  }'`
  };

  return (
    <section className="relative py-24 bg-[#03050c] border-t border-b border-white/5 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] rounded-full bg-cyan-900/5 blur-[160px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/20 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>Interactive Technology Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            Full control. Beautiful telemetry.
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Take a test drive of our active developer ecosystem. Experience our live enterprise tracking dash, credentials token system, and code SDKs built to run air-gapped workloads seamlessly.
          </p>
        </div>

        {/* Tab Selector Links */}
        <div className="flex border-b border-white/10 max-w-lg mx-auto mb-10 overflow-x-auto justify-center">
          {[
            { id: 'analytics', label: 'AI Analytics Dashboard', icon: AreaChart },
            { id: 'api-key', label: 'Developer API Console', icon: Key },
            { id: 'code-snippets', label: 'Multi-Language SDKs', icon: FileCode }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-wider border-b-2 shrink-0 transition-all ${
                  isActive
                    ? 'border-cyan-400 text-cyan-400 bg-cyan-950/15'
                    : 'border-transparent text-gray-500 hover:text-gray-300 hover:border-white/5'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive View Container */}
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            {activeTab === 'analytics' && (
              <motion.div
                key="analytics"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-6 bg-[#040712] rounded-2xl border border-white/10 p-6 md:p-8 shadow-[0_15px_40px_rgba(0,0,0,0.5)]"
              >
                {/* Dashboard Header Bar */}
                <div className="col-span-12 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="p-2 sm:p-2.5 rounded-lg bg-cyan-950/50 border border-cyan-500/30">
                      <Activity className="w-5 h-5 text-cyan-400 animate-pulse" />
                    </div>
                    <div className="text-left">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-white tracking-tight">MotusAI Performance Node #BKC-09</span>
                        <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping shrink-0" />
                      </div>
                      <span className="text-[11px] text-gray-500 font-medium">Bandra Kurla Complex (BKC) Datacenter Hub • Private Cloud</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-xs font-mono">
                    <div className="text-right">
                      <span className="text-gray-500 block text-[10px] uppercase">Service Uptime</span>
                      <span className="text-emerald-400 font-bold">{uptime}%</span>
                    </div>
                    <div className="w-[1px] h-8 bg-white/10" />
                    <div className="text-right">
                      <span className="text-gray-500 block text-[10px] uppercase">Telemetry Latency</span>
                      <span className="text-cyan-400 font-bold">{avgLatency}ms</span>
                    </div>
                  </div>
                </div>

                {/* Dashboard Metrics Cards */}
                <div className="col-span-12 grid grid-cols-1 sm:grid-cols-4 gap-4">
                  {[
                    { label: 'Cumulative Multi-Agent Calls', value: liveReqCount.toLocaleString(), change: '+42% growth rate', color: 'text-white' },
                    { label: 'Prompt Extraction Accuracy', value: '96.84%', change: 'Continuous LLM checking', color: 'text-cyan-300' },
                    { label: 'CPU Cluster Load', value: '38.4%', change: 'Dynamic execution autoscaling', color: 'text-purple-300' },
                    { label: 'Private Memory Pools', value: '4 TB / 16 TB', change: 'Fully isolated virtual stacks', color: 'text-emerald-300' }
                  ].map((metric, i) => (
                    <div key={i} className="bg-[#02040b] border border-white/5 rounded-xl p-4 text-left">
                      <span className="text-[10px] text-gray-500 uppercase tracking-wider block font-bold mb-1">{metric.label}</span>
                      <div className={`text-xl sm:text-2xl font-extrabold ${metric.color} tracking-tight`}>{metric.value}</div>
                      <span className="text-[10px] text-gray-500 block mt-0.5">{metric.change}</span>
                    </div>
                  ))}
                </div>

                {/* Custom SVG Active Stream Chart */}
                <div className="col-span-12 md:col-span-8 bg-[#02040b] border border-white/5 rounded-xl p-6 flex flex-col gap-4 text-left">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Hourly Transaction Throughput</span>
                      <span className="text-[11px] block text-gray-500">Live network updates every 10 minutes</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-cyan-400 bg-cyan-950/30 px-2.5 py-1 rounded-full font-bold">
                      <TrendingUp className="w-3.5 h-3.5" />
                      <span>Optimized Flow</span>
                    </div>
                  </div>

                  {/* Aesthetic Premium SVG Line/Area Chart */}
                  <div className="h-[210px] w-full relative flex items-end">
                    <svg className="w-full h-full absolute inset-0 text-cyan-400" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="chart-glow" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="rgb(34,211,238)" stopOpacity="0.45" />
                          <stop offset="100%" stopColor="rgb(34,211,238)" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>
                      {/* Grid Lines */}
                      <line x1="0" y1="25" x2="100" y2="25" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
                      <line x1="0" y1="50" x2="100" y2="50" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
                      <line x1="0" y1="75" x2="100" y2="75" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
                      
                      {/* Area Fill */}
                      <path d="M 0 95 Q 12 75 25 80 T 50 40 T 75 62 T 100 20 L 100 100 L 0 100 Z" fill="url(#chart-glow)" />
                      
                      {/* Line Stroke */}
                      <path d="M 0 95 Q 12 75 25 80 T 50 40 T 75 62 T 100 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      
                      {/* Dynamic blinking node dot */}
                      <circle cx="100" cy="20" r="1.5" className="fill-cyan-450 animate-ping" />
                      <circle cx="100" cy="20" r="0.75" className="fill-cyan-400" />
                    </svg>

                    {/* Chart axis label text */}
                    <div className="absolute left-1 bottom-1 text-[9px] font-mono text-gray-500">10:00 (INR 32.4L)</div>
                    <div className="absolute right-1 top-2 text-[9px] font-mono text-cyan-400 font-bold">11:38 UTC (Live: INR 89.2L)</div>
                  </div>

                  {/* Legend */}
                  <div className="flex gap-4 text-[10px] font-mono text-gray-500 border-t border-white/5 pt-3">
                    <div className="flex items-center gap-1">
                      <span className="w-2.5 h-2.5 rounded bg-cyan-400 block" />
                      <span>Deep-learning workflow success loops</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="w-2.5 h-0.5 border-t border-dashed border-gray-500 block" />
                      <span>Mumbai cluster baseline</span>
                    </div>
                  </div>
                </div>

                {/* Live Output Log Stream widget */}
                <div className="col-span-12 md:col-span-4 bg-[#02040b] border border-white/5 rounded-xl p-6 flex flex-col gap-4 text-left">
                  <div className="border-b border-white/5 pb-3">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Live Agent Direct Actions</span>
                    <span className="text-[11px] block text-gray-500">Continuous telemetry pipeline logs</span>
                  </div>

                  <div className="flex flex-col gap-3.5 max-h-[200px] overflow-y-auto pr-1">
                    {[
                      { flag: 'API_IN', action: 'Invoice Extraction BKC-02', time: 'Just now', alert: false },
                      { flag: 'AGENT_LLM', action: 'Auto-translation Marathi (Hindi queue)', time: '2m ago', alert: false },
                      { flag: 'SECURE_SEC', action: 'Private VPC sandbox validation passed', time: '4m ago', alert: true },
                      { flag: 'ANALYTICS', action: 'Dynamic cost-curve matrix output updated', time: '11m ago', alert: false }
                    ].map((log, index) => (
                      <div key={index} className="flex flex-col gap-1 border-b border-white/5 pb-2.5 last:border-0 last:pb-0">
                        <div className="flex items-center justify-between text-[10px] font-mono">
                          <span className={`px-2 py-0.5 rounded uppercase font-bold ${log.alert ? 'bg-emerald-950/80 text-emerald-300' : 'bg-blue-950/80 text-blue-300'}`}>{log.flag}</span>
                          <span className="text-gray-500">{log.time}</span>
                        </div>
                        <span className="text-xs font-sans text-gray-300">{log.action}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'api-key' && (
              <motion.div
                key="api-key"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="bg-[#040712] rounded-2xl border border-white/10 p-6 md:p-8 shadow-[0_15px_40px_rgba(0,0,0,0.5)] text-left flex flex-col gap-6"
              >
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Developer API Configuration Console</h3>
                  <p className="text-xs sm:text-sm text-gray-400">
                    Create secure authentication keys to access your fine-tuned RAG databases and cognitive multi-agent node orchestrations directly from client terminals.
                  </p>
                </div>

                {/* API Key Box */}
                <div className="bg-[#02040b] border border-white/5 p-4 rounded-xl flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                  <div className="flex-1 flex flex-col gap-1">
                    <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest font-bold">Secret Access Key</span>
                    <input
                      type="text"
                      readOnly
                      value={apiKey}
                      className="bg-transparent text-sm font-mono text-gray-300 border-0 p-0 focus:ring-0 select-all"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleCopyKey}
                      className="flex items-center gap-1 px-4 py-2 text-xs font-bold uppercase tracking-wider bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-lg transition-all"
                    >
                      {keyCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-gray-400" />}
                      <span>{keyCopied ? 'Copied' : 'Copy Token'}</span>
                    </button>
                    <button
                      onClick={handleRegenerateKey}
                      disabled={isRegenerating}
                      className="p-2 bg-white/5 hover:bg-white/10 border border-white/10 text-gray-400 hover:text-white rounded-lg transition-all"
                      title="Roll API Key"
                    >
                      <RefreshCw className={`w-3.5 h-3.5 ${isRegenerating ? 'animate-spin' : ''}`} />
                    </button>
                  </div>
                </div>

                {/* Quick security settings */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { label: 'Security Protocols', value: 'TLS 1.3 / AES-256', desc: 'Secure data in flight & at rest' },
                    { label: 'Isolated Origin Limit', value: '*.motus.ai, *.localhost', desc: 'Symmetric domain filtering active' },
                    { label: 'IP Access Safeguards', value: 'Whitelisted CIDR only', desc: 'Blocks unauthorized regional calls' }
                  ].map((sett, i) => (
                    <div key={i} className="bg-[#02040b] border border-white/5 rounded-xl p-4">
                      <span className="text-[10px] text-gray-500 uppercase tracking-wider font-bold block mb-1">{sett.label}</span>
                      <div className="text-sm font-bold text-white mb-0.5">{sett.value}</div>
                      <span className="text-[10px] text-gray-500 block leading-tight">{sett.desc}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-start gap-3 bg-blue-950/20 border border-blue-500/20 rounded-xl p-4">
                  <ShieldCheck className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5 animate-pulse" />
                  <div className="flex-1 text-xs">
                    <strong className="text-white block mb-0.5">Air-Gapped Compliance Active</strong>
                    <span className="text-gray-405 leading-relaxed">
                      This playground mimics our fully compliant production setup. All credentials generated in your BKC portal dashboard use strict private-network routing blocks, completely isolating telemetry weights so they are never fed to global LLM algorithms.
                    </span>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'code-snippets' && (
              <motion.div
                key="code-snippets"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="bg-[#040712] rounded-2xl border border-white/10 overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.5)] flex flex-col"
              >
                {/* Language Toggles */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-[#02040b]">
                  <div className="flex items-center gap-1.5 bg-black/40 border border-white/5 px-1.5 py-1 rounded-lg">
                    {[
                      { id: 'nodejs', label: 'Node.js SDK' },
                      { id: 'python', label: 'Python SDK' },
                      { id: 'curl', label: 'Raw Curl' }
                    ].map((lang) => (
                      <button
                        key={lang.id}
                        onClick={() => setSelectedLang(lang.id as any)}
                        className={`px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md transition-all ${
                          selectedLang === lang.id
                            ? 'bg-purple-900/40 border border-purple-500/30 text-purple-300'
                            : 'border-transparent text-gray-500 hover:text-white'
                        }`}
                      >
                        {lang.label}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(CODE_SNIPPETS[selectedLang]);
                      setKeyCopied(true);
                      setTimeout(() => setKeyCopied(false), 2000);
                    }}
                    className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-gray-400 hover:text-white transition-all bg-[#040712] border border-white/5 px-3 py-1.5 rounded-lg active:scale-95"
                  >
                    {keyCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{keyCopied ? 'Code Copied' : 'Copy Code'}</span>
                  </button>
                </div>

                {/* Preformatted Snippet */}
                <div className="p-6 bg-[#010207] min-h-[290px] font-mono text-xs text-left text-gray-300 overflow-x-auto scrollbar-thin">
                  <pre className="leading-6 select-all">
                    {CODE_SNIPPETS[selectedLang]}
                  </pre>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
