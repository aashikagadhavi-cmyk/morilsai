import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Cpu, 
  Layers, 
  Bot, 
  Workflow, 
  BarChart3, 
  Database, 
  ArrowRight, 
  CheckCircle, 
  Terminal, 
  Sparkles, 
  MessageSquare, 
  Zap, 
  Code, 
  ShieldCheck, 
  TrendingUp,
  RefreshCw,
  Search,
  Globe
} from 'lucide-react';

interface ProductInfo {
  id: string;
  name: string;
  subtitle: string;
  category: string;
  description: string;
  architectureNotes: string;
  techStack: string[];
  metrics: { label: string; value: string }[];
  modelDetails: {
    backbone: string;
    latency: string;
    accuracy: string;
    isolation: string;
  };
  sampleInputs: { label: string; value: string; result: any }[];
}

const PRODUCTS: ProductInfo[] = [
  {
    id: 'core-ai',
    name: 'Motus Core Neural Engine',
    subtitle: 'Contextual Generative AI & Knowledge RAG Synthesizer',
    category: 'GEN AI & INTELLIGENCE HUB',
    description: 'A sovereign dynamic content processor built directly on private cloud infrastructure. It tokenizes large corporate archives, runs context-aware vector searches, and synthesizes high-fidelity domain materials (legal agreements, copywriting, audit digests) without leaking private telemetry to global datasets.',
    architectureNotes: 'Utilizes custom chunking schemas on semantic vector indexes combined with private LLM fine-tuned layers.',
    techStack: ['Llama-3-70B Private Weights', 'Qdrant Vector Database', 'PyTorch Inference Runtime', 'MinIO Document Blobs'],
    metrics: [
      { label: 'Token Ingestion Speed', value: '450 t/sec' },
      { label: 'First-Token Latency', value: '142ms' },
      { label: 'RAG Retrieval F1 Score', value: '0.942' }
    ],
    modelDetails: {
      backbone: 'Motus-LLaMA Custom Fine-Tune',
      latency: '150ms average state time',
      accuracy: '98.4% Quality rating',
      isolation: 'VPC air-gapped single nodes'
    },
    sampleInputs: [
      { 
        label: 'Mumbai BKC Logistics contract summaries', 
        value: 'Summarize our commercial lease contract for Level 15 BKC Maker Maxity. Extract specific terms and renewal options.',
        result: {
          status: "SUCCESS_RAG_SYNTHESIZED",
          executionTime: "168ms",
          tokensProcessed: 1840,
          documentMatch: "BKC_Contract_L15.docx (98.2% semantic match score)",
          output: "Based on BKC_Contract_L15.docx, MotusAI Private Ltd leased Maker Maxity L15. Under section 14.2, the 5-year lease expires May 2031, requiring a formal written intent of renewal 120 days prior (January 2031) to freeze the rent surge limit at 4.5% annual mean."
        }
      },
      { 
        label: 'Auto-translate legal brief to regional Marathi', 
        value: 'Translate current intellectual property enforcement rules to formal regional Marathi.',
        result: {
          status: "SUCCESS_RAG_SYNTHESIZED",
          executionTime: "115ms",
          tokensProcessed: 910,
          documentMatch: "IP_Compliance_Enforcement.pdf (100% dialect match score)",
          output: "बँड्रा कुर्ला संकुल (BKC) मुंबई मुख्य कार्यालयानुसार, या करारांतर्गत सर्व बौद्धिक संपदा हक्क (Intellectual Property Rights) पूर्णपणे सुरक्षित आहेत. कोणत्याही अनधिकृत वापरासाठी कायदेशीर कारवाई केली जाईल."
        }
      },
      { 
        label: 'Generate compliance audit report preview', 
        value: 'Produce a standard regulatory compliance bulletin outline based on ISO-27001 data isolation policies.',
        result: {
          status: "SUCCESS_RAG_SYNTHESIZED",
          executionTime: "192ms",
          tokensProcessed: 3220,
          documentMatch: "ISO_27001_Data_Rules.pdf (94.9% matching indices)",
          output: "1. Data Separation Checklist: Enforce AWS/GCP IAM role tokens limiting tenant crossover.\n2. Telemetry Isolation: Set server-side storage loops with explicit zero-retention on public prompt logs.\n3. Encryption State: Confirm 256-bit symmetric keys are cycled every 180 days automatically check."
        }
      }
    ]
  },
  {
    id: 'cognitive-agents',
    name: 'Motus Cognitive Agent Node',
    subtitle: 'Multilingual Digital Ambassadors with Autonomous Intent Recognition',
    category: 'AI CHATBOTS & CONVERSATIONAL CONSOLES',
    description: 'Ditch scripted logic. Our conversational cognitive agents process multi-turn intent with sentimental awareness. They plug live into regional CRMs to process shipping options, check account balances, resolve billing disputes, and converse smoothly in English and over 12 native Indian regional dialects including Hindi, Marathi, and Tamil.',
    architectureNotes: 'Integrated with custom conversational graphs, context memories, and bidirectional Webhook sync blocks.',
    techStack: ['Motus Regional-LLM fine-tuned pack', 'FastAPI Multi-turn Websockets', 'Redis Token Cache', 'Twilio & WhatsApp API Integrations'],
    metrics: [
      { label: 'Instant Desk Resolution', value: '82.4%' },
      { label: 'Accent Dialect Decoding', value: '12 Localized' },
      { label: 'CRM Sync Pipeline Latency', value: '<30ms' }
    ],
    modelDetails: {
      backbone: 'Motus Conversational Dual-Transformer',
      latency: '52ms verbal processing',
      accuracy: '96.2% Customer CSAT rating',
      isolation: 'Multi-tenant secure encryption key storage'
    },
    sampleInputs: [
      { 
        label: 'Regional Hindi Payment Failure Complaint', 
        value: 'सॉरी, मेरा पेमेंट कल फेल हो गया था पर मेरे बैंक से मनी डेबिट हो गया है। हेल्प करे।',
        result: {
          status: "AGENT_RESOLVED_AUTO",
          detectedLanguage: "Hindi (Indian Regional)",
          sentimentRating: "Frustrated / High Priority",
          linkedAccount: "IND-9812A (Verified from CRM database sync)",
          output: "नमस्ते! हमने जांच की है कि ₹4,500 कल शाम 6:12 बजे असफल था। घबराएं नहीं—यह आपके बैंक से 3 कार्य दिवसों (Working Days) में वापस जमा हो जाएगा। हमने आपके खाते पर एक नया कैशबैक कूपन (Code: MOTUSHINDI) सक्रिय कर दिया है।"
        }
      },
      { 
        label: 'Mumbai BKC Shipping Query Check', 
        value: 'Is continuous drone delivery available to Bandra Kurla Complex terminal BKC today?',
        result: {
          status: "AGENT_RESOLVED_AUTO",
          detectedLanguage: "English (Neutral)",
          sentimentRating: "Inquisitive / Medium Priority",
          linkedAccount: "Guest (IP: Mumbai)",
          output: "Yes! High-speed drone & courier delivery is fully operational in Bandra Kurla Complex (BKC) and neighboring suburbs in Mumbai. Since Maker Maxity has a designated landing pad, your delivery is expected in exactly 45 minutes with real-time temperature telemetry actively tracked."
        }
      },
      { 
        label: 'Security Role Access Update', 
        value: 'Update developers credentials roles to access our database staging clusters',
        result: {
          status: "AGENT_TRIGGERED_HUMAN_HANDOFF",
          detectedLanguage: "English (Tech Dialect)",
          sentimentRating: "Neutral / High Risk",
          linkedAccount: "DevOps Lead (Token verified)",
          output: "Attempting to change staging cluster access keys is flagged as a high-risk security operation. I have automatically queued this request with your IT Security Chief (Pooja Deshmukh) and launched a secure validation OTP code. Please enter the verification OTP sent to your corporate phone."
        }
      }
    ]
  },
  {
    id: 'workflow-orchestrator',
    name: 'Hyperscale AI Automation Orchestrator',
    subtitle: 'Continuous Pipeline Multi-Agent Workflow Coordinator',
    category: 'HYPERSCALE AI AUTOMATION ORCHESTRATOR',
    description: 'Engineered as an autonomous compiler that chains various AI decisions with traditional legacy endpoints. It receives high-volume documents, classifies the core tasks, runs sequential optical character and translation extraction steps, cross-checks vendor billing accounts against central ledgers, and triggers automated Slack/ERP events with total deterministic validation.',
    architectureNotes: 'Leverages isolated sandbox container pools that handle parallel node execution and auto-fallback recovery loops.',
    techStack: ['Temporal.io Orchestration Engine', 'Kafka Event Stream Queue', 'Tesseract/EasyOCR Fine-Tunes', 'Custom Sandbox Containers'],
    metrics: [
      { label: 'Daily Process Capacity', value: '4.8M pipelines' },
      { label: 'Step Transition Latency', value: '12ms max' },
      { label: 'Validation Loop Accuracy', value: '99.999%' }
    ],
    modelDetails: {
      backbone: 'Motus Event Graph Orchestrator Class v2',
      latency: 'Instantaneous node routing',
      accuracy: 'Deterministic validation locks',
      isolation: 'Zero-retention temporary RAM cache buffers'
    },
    sampleInputs: [
      { 
        label: 'Automated Invoice Processing Pipeline', 
        value: 'Scan PDF billing -> Extract company balance -> Check local GST -> Alert financial Slack',
        result: {
          status: "PIPELINE_FLOW_COMPLETED",
          stepsExecuted: [
            { step: "1. PDF_PARSER", status: "OK", metadata: "Found Invoice #9021. Billing Amount: 1,82,000 INR" },
            { step: "2. IDENTITY_CHECK", status: "OK", metadata: "Vendor matched Maker Maxity BKC Operations Hub" },
            { step: "3. INDIA_GST_CALCULATION", status: "OK", metadata: "Applied GST 18% (32,760 INR) to final bill" },
            { step: "4. DETERMINISTIC_PAYMENT_INIT", status: "QUEUED", metadata: "Requires admin signoff from Mohammad Faisal" },
            { step: "5. SLACK_INTEGRATION_HOOK", status: "OK", metadata: "Dispatched compliance message to channel #bkc-finance-alerts" }
          ],
          totalDuration: "612ms",
          output: "Successfully processed Invoice #9021. Auto-compiled accounting sheets, routed tax ledger modifications, and queued BKC financial dispatch notifications."
        }
      },
      { 
        label: 'Smart Content Review Pipeline', 
        value: 'Analyze feedback -> Classify polarity -> Generate custom support response -> Translate to English/Hindi',
        result: {
          status: "PIPELINE_FLOW_COMPLETED",
          stepsExecuted: [
            { step: "1. SENTIMENT_TRANSFORMER", status: "OK", metadata: "Polarity Score: 0.12 (Strong Negative)" },
            { step: "2. PROBLEM_CLASSIFIER", status: "OK", metadata: "Category found: System Lag / Latency in BKC portal" },
            { step: "3. BRAIN_RESPOND_DRAFT", status: "OK", metadata: "Drafted polite apology explain technical node upgrade" },
            { step: "4. MULTI_DIALECT_TRANSLATION", status: "OK", metadata: "Symmetric outputs rendered in English and regional Hindi" }
          ],
          totalDuration: "420ms",
          output: "Feedback flagged to backend. Support drafts compiled: 'सर, तकनीकी अपग्रेड के कारण हुई असुविधा के लिए खेद है... (Sorry for BKC lag, active tuning is complete).'"
        }
      }
    ]
  },
  {
    id: 'predictive-analytics',
    name: 'Motus Predictive Analytics Node',
    subtitle: 'Deep Learning Temporal Forecasting & Anomaly Core',
    category: 'PREDICTIVE DEEP LEARNING ANALYTICS',
    description: 'Transform pure historical timeseries datasets into crystal-clear operational forecasts. Our custom convolutional and transformer layers automatically flag network anomalies, forecast sudden customer churn spikes, and optimize storage parameters in anticipation of regional supply chain shifts.',
    architectureNotes: 'Custom dense LSTM modules and time-series transformer architectures optimized for high-volume database streams.',
    techStack: ['TensorFlow Temporal Transformer v3', 'InfluxDB Timeseries Engine', 'Scikit-Learn Regression Modules', 'Grafana Data Feed Connectors'],
    metrics: [
      { label: 'Forecast Mean Accuracy', value: '96.84%' },
      { label: 'Fraud Values Prevented', value: 'INR 1.4Cr+' },
      { label: 'Incomplete Records Imputed', value: '98.5%' }
    ],
    modelDetails: {
      backbone: 'Motus Temporal Transformer Neural Stack',
      latency: 'Sub-5ms batch inference times',
      accuracy: '96.84% Mean Absolute Percentile Accuracy',
      isolation: 'Isolated local tenant container partitions'
    },
    sampleInputs: [
      { 
        label: 'Diwali Retail Sales Projection', 
        value: 'Predict user transaction volume for our Mumbai region during upcoming Diwali season.',
        result: {
          status: "SUCCESS_FORECAST_GENERATED",
          timePeriod: "October - November 2026 (Diwali Festival Node)",
          historicalDatasetsAnalyzed: "3 Years local BKC transactions",
          confidenceInterval: "95% bounds active",
          output: {
            expectedIncrease: "3.8x baseline volume",
            peakDate: "November 4, 2026",
            recommendations: "1. Scale CPU pods by 120% starting Oct 28.\n2. Enable automatic memory expansion buffers on BKC Cluster #09.\n3. Increase local Mumbai logistics workforce capacity by 35% in advance."
          }
        }
      },
      { 
        label: 'Server Anomalies Detection Log', 
        value: 'Analyze recent cluster database access telemetry to discover potential security anomalies.',
        result: {
          status: "SUCCESS_FORECAST_GENERATED",
          timePeriod: "Previous 24 Hours continuous",
          historicalDatasetsAnalyzed: "18.4 Million access check lines",
          confidenceInterval: "99.9% anomalies threshold active",
          output: {
            anomaliesDetectedCount: 1,
            incidentDetails: "Spike discovered at 03:14 UTC: 140 unauthorized staging requests in 500ms from non-whitelisted IP subnet.",
            currentAction: "Auto-blocked IP 103.42.18.29. Added temporary CIDR firewall restrictions on the Maker Maxity workspace gate."
          }
        }
      }
    ]
  }
];

export default function AIProductDetails() {
  const [selectedProduct, setSelectedProduct] = useState<ProductInfo>(PRODUCTS[0]);
  const [selectedSampleIdx, setSelectedSampleIdx] = useState<number>(0);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [copiedIndex, setCopiedIndex] = useState<boolean>(false);

  const activeSample = selectedProduct.sampleInputs[selectedSampleIdx] || selectedProduct.sampleInputs[0];

  const handleSimulate = () => {
    setIsSimulating(true);
    setTimeout(() => {
      setIsSimulating(false);
    }, 1500);
  };

  const copyResultToClipboard = () => {
    navigator.clipboard.writeText(JSON.stringify(activeSample.result, null, 2));
    setCopiedIndex(true);
    setTimeout(() => setCopiedIndex(false), 2000);
  };

  return (
    <section className="relative py-28 bg-[#020308] border-t border-b border-white/5 overflow-hidden">
      {/* Visual background lights */}
      <div className="absolute top-0 right-10 w-[450px] h-[450px] bg-purple-950/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-cyan-950/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header content with deep descriptive emphasis */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-950/40 border border-purple-500/20 text-purple-300 text-[10px] font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
            <span>AI Product Catalog & Engineering Specifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white font-sans mb-6">
            Exactly what we are building.
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Get comprehensive, structured, and deep insights into the exact AI mechanics driving the 
            <strong> MotusAI Private Limited</strong> ecosystem. Explore our models, average latency parameters, system boundaries, and test active inputs dynamically below.
          </p>
        </div>

        {/* 2-Column Product Explorer & Live Interactive Testing Sandbox */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Product Picker Cards */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="text-left mb-2 pl-1">
              <span className="text-xs text-gray-400 font-bold uppercase tracking-wider block">Model Group Modules</span>
              <span className="text-[10px] text-gray-500 block">Select a product to view architecture specs</span>
            </div>

            {PRODUCTS.map((prod) => {
              const isSelected = selectedProduct.id === prod.id;
              return (
                <button
                  key={prod.id}
                  onClick={() => {
                    setSelectedProduct(prod);
                    setSelectedSampleIdx(0);
                  }}
                  className={`text-left p-5 rounded-2xl border transition-all duration-300 flex items-start gap-4 relative overflow-hidden ${
                    isSelected 
                      ? 'bg-[#040612] border-purple-500/35 shadow-[0_4px_25px_rgba(168,85,247,0.1)]' 
                      : 'bg-black/30 border-white/5 hover:border-white/10 hover:bg-white/5'
                  }`}
                  id={`prod-btn-${prod.id}`}
                >
                  {/* Selected Indicator Light Line */}
                  {isSelected && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-cyan-400" />
                  )}

                  {/* Icon Block */}
                  <div className={`p-2.5 rounded-xl shrink-0 ${
                    isSelected ? 'bg-purple-950/55 border border-purple-500/40 text-purple-300' : 'bg-[#040612] border border-white/5 text-gray-500'
                  }`}>
                    {prod.id === 'core-ai' && <Cpu className="w-5 h-5" />}
                    {prod.id === 'cognitive-agents' && <Bot className="w-5 h-5" />}
                    {prod.id === 'workflow-orchestrator' && <Workflow className="w-5 h-5" />}
                    {prod.id === 'predictive-analytics' && <BarChart3 className="w-5 h-5" />}
                  </div>

                  <div className="flex-1">
                    <span className="text-[9px] text-gray-500 font-bold uppercase tracking-wider block mb-1">{prod.category}</span>
                    <h3 className="text-sm sm:text-base font-bold text-white mb-1.5 flex items-center gap-1.5">
                      {prod.name}
                      {isSelected && <Zap className="w-3.5 h-3.5 text-cyan-400 fill-current animate-pulse" />}
                    </h3>
                    <p className="text-xs text-gray-400 leading-relaxed font-sans line-clamp-2">
                      {prod.subtitle}
                    </p>
                  </div>
                </button>
              );
            })}

            {/* General Technical Standards Notice */}
            <div className="bg-black/40 border border-white/5 rounded-2xl p-5 text-left mt-4">
              <div className="flex items-center gap-2 mb-2 font-bold text-white text-xs">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Sovereign Security Framework</span>
              </div>
              <p className="text-[11px] text-gray-500 leading-relaxed">
                All MotusAI engine pipelines execute on virtualized private cloud frameworks in our Bandra Kurla Complex (BKC) hub. This satisfies strict Indian local regulatory frameworks and keeps your telemetry completely secure.
              </p>
            </div>
          </div>

          {/* Right Column: High-Tech Specification Dashboard & Sandbox Simulator */}
          <div className="lg:col-span-7 flex flex-col justify-between bg-[#03050d] rounded-2xl border border-white/10 p-6 md:p-8 relative shadow-[0_15px_40px_rgba(0,0,0,0.6)]">
            
            {/* Spec Box Header */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-white/5 pb-6">
              <div className="text-left">
                <span className="text-[10px] text-purple-400 font-bold uppercase tracking-wider block mb-0.5">Core Product Specifications</span>
                <h3 className="text-xl font-extrabold text-white tracking-tight">{selectedProduct.name}</h3>
                <span className="text-xs text-gray-400 block mt-1.5 font-medium">{selectedProduct.subtitle}</span>
              </div>

              {/* Rapid performance parameters */}
              <div className="flex gap-4 shrink-0 font-mono text-right text-xs">
                <div>
                  <span className="text-[9px] text-gray-500 block uppercase font-bold text-[8px]">Latency Index</span>
                  <span className="text-cyan-400 font-bold">{selectedProduct.modelDetails.latency.split(' ')[0]}</span>
                </div>
                <div className="w-[1px] h-7 bg-white/10" />
                <div>
                  <span className="text-[9px] text-gray-500 block uppercase font-bold text-[8px]">Quality Mean</span>
                  <span className="text-purple-300 font-bold">{selectedProduct.modelDetails.accuracy.split(' ')[0]}</span>
                </div>
              </div>
            </div>

            {/* Comprehensive Detail Field */}
            <div className="py-6 text-left border-b border-white/5">
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Functional Overview</h4>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-sans font-medium mb-4">
                {selectedProduct.description}
              </p>

              {/* Sub-specification items */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                <div className="bg-[#02040a] border border-white/5 p-4 rounded-xl">
                  <span className="text-[10px] text-gray-550 text-gray-500 font-bold uppercase block mb-1">Architecture Pipeline Matrix</span>
                  <span className="text-xs text-gray-300 block leading-relaxed font-medium">
                    {selectedProduct.architectureNotes}
                  </span>
                </div>
                <div className="bg-[#02040a] border border-white/5 p-4 rounded-xl">
                  <span className="text-[10px] text-gray-550 text-gray-500 font-bold uppercase block mb-1.5">Underlying Software Stack</span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProduct.techStack.map((tech, idx) => (
                      <span key={idx} className="text-[9px] font-mono px-2 py-0.5 rounded bg-purple-950/40 border border-purple-500/10 text-purple-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Performance Metrics Row */}
              <div className="grid grid-cols-3 gap-3.5 mt-4">
                {selectedProduct.metrics.map((met, i) => (
                  <div key={i} className="bg-black/40 border border-white/5 rounded-xl p-3.5 text-center">
                    <span className="text-[9px] text-gray-500 uppercase tracking-widest font-bold block mb-1">{met.label}</span>
                    <span className="text-sm font-extrabold text-white tracking-tight">{met.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive Live Testing Sandbox Area */}
            <div className="pt-6 text-left">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Interactive Live Simulator</span>
                </div>
                <span className="text-[10px] text-gray-500 font-medium font-mono">Select sample telemetry input to test</span>
              </div>

              {/* Input Choice Pills */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {selectedProduct.sampleInputs.map((sample, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setSelectedSampleIdx(idx);
                      // Reset simulation state
                    }}
                    className={`px-3 py-1.5 rounded-lg text-[10px] sm:text-xs font-bold transition-all ${
                      selectedSampleIdx === idx 
                        ? 'bg-cyan-950/35 border border-cyan-500/30 text-cyan-300 font-bold' 
                        : 'bg-black/30 border border-white/5 text-gray-500 hover:text-gray-300'
                    }`}
                  >
                    {sample.label}
                  </button>
                ))}
              </div>

              {/* Dynamic Simulation Workspace Box */}
              <div className="bg-[#010206] border border-white/10 rounded-xl overflow-hidden p-5 flex flex-col gap-4">
                {/* Inputs prompt code view */}
                <div className="flex flex-col gap-1 text-xs border-b border-white/5 pb-3">
                  <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest font-bold">Inbound Query Parameters</span>
                  <div className="font-mono text-[11px] text-gray-250 text-gray-300 pt-1 leading-relaxed">
                    {activeSample.value}
                  </div>
                </div>

                {/* Simulation controls actions */}
                <div className="flex items-center justify-between py-1">
                  <div className="flex items-center gap-2">
                    <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                    <span className="text-[10px] font-mono text-gray-500 uppercase">Interactive Node Ready</span>
                  </div>

                  <button
                    onClick={handleSimulate}
                    disabled={isSimulating}
                    className="flex items-center gap-1.5 px-4 py-1.5 bg-gradient-to-r from-purple-600 to-cyan-500 hover:opacity-90 active:scale-95 text-white text-xs font-extrabold rounded-lg transition-all shadow-[0_3px_12px_rgba(147,51,234,0.3)] shrink-0 disabled:opacity-50"
                  >
                    {isSimulating ? (
                      <>
                        <RefreshCw className="w-3 h-3 animate-spin" />
                        <span>Compiling Suite...</span>
                      </>
                    ) : (
                      <>
                        <Zap className="w-3 h-3 fill-current" />
                        <span>Simulate Model Run</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Simulator output code terminal */}
                <div className="relative font-mono text-[10px] sm:text-xs rounded-lg p-4 bg-black/60 border border-white/5 max-h-[220px] overflow-y-auto">
                  <AnimatePresence mode="wait">
                    {isSimulating ? (
                      <motion.div
                        key="loading-sig"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex flex-col gap-2.5 text-cyan-400 text-left py-4"
                      >
                        <div className="flex items-center gap-2 text-[11px]">
                          <RefreshCw className="w-3.5 h-3.5 animate-spin text-purple-400" />
                          <span className="font-bold">Initializing Model Weights on BKC cluster partition...</span>
                        </div>
                        <span className="text-gray-500 pl-5 text-[10px]">Processing Context: "{activeSample.value.slice(0, 32)}..."</span>
                        <span className="text-gray-500 pl-5 text-[10px]">Executing fine-tuned domain alignment parameters</span>
                        <span className="text-emerald-400 pl-5 text-[10px]">✔ Privacy validation locks established</span>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="result-sig"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="flex items-center justify-between text-[11px] border-b border-white/5 pb-2 mb-2">
                          <span className="text-emerald-400 font-bold select-none flex items-center gap-1">
                            <CheckCircle className="w-3.5 h-3.5 fill-current text-emerald-500" />
                            <span>Inference Outbound Stream</span>
                          </span>
                          <button 
                            onClick={copyResultToClipboard} 
                            className="text-gray-500 hover:text-white transition-all text-[9px] uppercase font-bold"
                            title="Copy output data"
                          >
                            {copiedIndex ? 'Copied' : 'Copy JSON'}
                          </button>
                        </div>
                        <pre className="text-gray-300 leading- relaxed overflow-x-auto text-[11px] select-all py-1.5">
                          {JSON.stringify(activeSample.result, null, 2)}
                        </pre>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
