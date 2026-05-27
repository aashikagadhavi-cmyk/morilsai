import { Solution, Industry, PricingPlan, BlogPost, FeatureComparison, Testimonial } from './types';

export const SOLUTIONS: Solution[] = [
  {
    id: 'generative-ai',
    title: 'Generative AI Content & Intelligence Hub',
    shortDesc: 'Automate media, content pipelines, and multi-agent knowledge systems using tailored dynamic LLMs.',
    longDesc: 'Our Generative AI Suite integrates deep neural models trained specifically for corporate domains. We deliver fine-tuned context-aware content generation, automated marketing copywriting, multi-format media synthesis, and intelligent enterprise knowledge engines that let teams query mountains of corporate documents securely.',
    features: [
      'Multi-model LLM fine-tuning tailored to company style guides',
      'Contextual knowledge retrieval (RAG) with ultra-low latency indexers',
      'Automated semantic content moderation and quality assurance algorithms',
      'Cross-platform asset synthesis (text, code, structured summaries)'
    ],
    metrics: [
      { label: 'Content Throughput Increase', value: '320%' },
      { label: 'Resource Time Savings', value: '75%' },
      { label: 'Output Score (Quality)', value: '98.4%' }
    ],
    highlightColor: 'from-[#a855f7] to-[#ec4899]' // Purple to Pink
  },
  {
    id: 'ai-chatbots',
    title: 'Cognitive AI Chatbots & Agents',
    shortDesc: 'Contextual, natural conversational systems that understand intent, resolve problems, and work 24/7.',
    longDesc: 'Ditch rigid script-based dialogue. Our cognitive AI agents process multi-turn intent with sentimental awareness, integrate on-the-fly with transaction backends, and speak over 100 native languages including Hindi, Marathi, Telugu, and Tamil, resolving 80% of Tier-1 service requests instantly.',
    features: [
      'Multi-lingual semantic routing and native regional support',
      'Cognitive sentiment analysis with live human-agent handoff fallback',
      'Bidirectional CRM sync (Salesforce, HubSpot, custom APIs)',
      'Sub-50ms verbal and written intent recognition logic'
    ],
    metrics: [
      { label: 'Instant Resolution Rate', value: '82%' },
      { label: 'Interactions Handled', value: '2M+' },
      { label: 'CSAT Improvement Mean', value: '+42%' }
    ],
    highlightColor: 'from-[#3b82f6] to-[#06b6d4]' // Blue to Cyan
  },
  {
    id: 'workflow-automation',
    title: 'Hyperscale AI Automation Orchestrator',
    shortDesc: 'Connect legacy backends, API endpoints, and smart agents to run autonomous multi-step job pipelines.',
    longDesc: 'Achieve absolute structural automation. MotusAI chains deep learning inference steps with traditional workflow engines. Detect incoming invoices, extract metadata, categorize entries, request executive approvals, and trigger vendor payouts automatically with total deterministic checks.',
    features: [
      'Dynamic AI decision-making (No-code conditional flow compiler)',
      'Legacy terminal automation & RPA-style modern screen reading',
      'Enterprise-grade auditing & transaction state reconciliation',
      'Pre-built integrations with major clouds & messaging brokers'
    ],
    metrics: [
      { label: 'Manual Input Reduction', value: '91%' },
      { label: 'Processing Speedup', value: '18x' },
      { label: 'Input Typology Errors', value: '0.01%' }
    ],
    highlightColor: 'from-[#ec4899] to-[#f97316]' // Pink to Orange
  },
  {
    id: 'predictive-analytics',
    title: 'Predictive Deep Learning Analytics',
    shortDesc: 'Forecast customer churn, optimize pricing matrices, and secure transactions with intelligent anomalies detector.',
    longDesc: 'Transform pure historical timeseries datasets into crystal-clear roadmaps. Our custom convolutional & transformer temporal layers discover leading patterns, predict future spikes in volume, map supply chains, and identify fraudulent patterns in transaction flows with extreme precision.',
    features: [
      'Timeseries forecasting and automated anomaly alerts',
      'Dynamic yield pricing engine optimization',
      'Real-time transaction fraud threshold classifiers',
      'Automated synthetic cohort segmentation'
    ],
    metrics: [
      { label: 'Forecast Mean Accuracy', value: '96.8%' },
      { label: 'Fraud Value Extinguished', value: '$1.4M+' },
      { label: 'Decision Automation Speed', value: '<5ms' }
    ],
    highlightColor: 'from-[#06b6d4] to-[#10b981]' // Cyan to Emerald
  }
];

export const INDUSTRIES: Industry[] = [
  {
    id: 'ecommerce',
    name: 'E-commerce & Retail',
    tagline: 'Hyper-personalized product matches & semantic search.',
    description: 'Empower retail hubs with generative descriptions, smart visual search queries, and inventory forecasting that accurately tracks shopping season trends in Mumbai and globally.',
    caseStudy: {
      client: 'BazaarHub India',
      challenge: 'Manual description writing for 50k monthly uploads & high cart churn.',
      outcome: 'Installed MotusAI Content Hub & dynamic personalization agent.',
      stat: '+38% conversion, 95% writing time saved'
    },
    benefits: ['Dynamic automated catalog descriptions', 'Intelligent visual search overlays', 'Dynamic real-time discount optimizer']
  },
  {
    id: 'saas',
    name: 'Software-as-a-Service (SaaS)',
    tagline: 'Supercharge customer onboarding & live telemetry.',
    description: 'Embed advanced cognitive prompts, automate complex workflows, and analyze user behavior pattern shifts directly in your product interface.',
    caseStudy: {
      client: 'OpsScale, Inc.',
      challenge: 'Massive volume of complex setup support queries slowing engineering velocity.',
      outcome: 'Engineered MotusAI Agent directly into target user console layout.',
      stat: '-67% support overhead, +21% trial retention'
    },
    benefits: ['In-app self-serve guided setup bots', 'Smart workflow builder add-ons', 'Predictive trial churn alerts']
  },
  {
    id: 'startups',
    name: 'High-Growth Startups',
    tagline: 'Deploy premium enterprise systems with light seed assets.',
    description: 'Compete directly with major conglomerates by leveraging automated customer agents, automated social pipelines, and continuous operations checklists.',
    caseStudy: {
      client: 'KwikFin Tech',
      challenge: 'Rapidly scaling service queries during 300% hyper-growth phase.',
      outcome: 'Deployed fully cognitive multilingual bot in exactly 2 weeks.',
      stat: '93% CSAT achieved with zero internal hires'
    },
    benefits: ['Zero-startup dev infrastructure models', 'Multi-channel API endpoints in minutes', 'Elastic price execution plans']
  },
  {
    id: 'agencies',
    name: 'Enterprise Agencies',
    tagline: 'Turn around massive strategic campaigns overnight.',
    description: 'Harness state-of-the-art synthetic layouts, localized translation layers, and asset design accelerators to serve 5x the number of accounts safely.',
    caseStudy: {
      client: 'Vanguard Digital',
      challenge: 'Managing dynamic local language social variations for 20 national fast-moving brands.',
      outcome: 'Chained Generative AI Hub with direct auto-translation framework.',
      stat: '10x marketing output variation'
    },
    benefits: ['Automated localized regional variants', 'Smart copy editing accelerators', 'Multilingual semantic voiceover templates']
  },
  {
    id: 'enterprises',
    name: 'Global Enterprises',
    tagline: 'Secure, private, air-gapped LLM operations.',
    description: 'Ensure critical security compliance (SOC 2, ISO 27001) while operating localized generative systems built on completely private cloud partitions.',
    caseStudy: {
      client: 'Maharashtra Global Finance',
      challenge: 'Strict regulatory governance blocking deployment of cloud productivity AI.',
      outcome: 'Established dedicated Virtual Private Cloud system with fine-tuned private models.',
      stat: '100% compliant operations, 4.8s average document summary speed'
    },
    benefits: ['Fully private, non-shared fine-tuned systems', 'Extensive security verification suite', 'Uncompromising SOC 2 & ISO parameters']
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter Tier',
    priceMonthly: 149,
    priceAnnually: 119,
    description: 'Ideal for fast-growing startups and agencies seeking to automate core customer and content pipelines.',
    features: [
      'Up to 150k custom LLM tokens / month',
      '2 active Cognitive AI chatbots',
      'Standard RAG knowledge base integration',
      'API access: 30 requests / minute max',
      'Email support (24h response guarantee)',
      'Encrypted SSL transport protocols'
    ],
    cta: 'Start Free Trial'
  },
  {
    id: 'growth',
    name: 'Growth Enterprise',
    priceMonthly: 499,
    priceAnnually: 399,
    description: 'Optimized for larger operations seeking automated cross-platform workflows and predictive tools.',
    features: [
      '1.5M fine-tuned LLM tokens / month',
      '10 active Cognitive AI chatbots & agents',
      'Custom workflow automation pipeline builder',
      'Predictive analytics prediction forecasting',
      'High-speed API: 250 requests / minute',
      'Dedicated Slack + email support channels',
      'Advanced telemetry data logs interface'
    ],
    cta: 'Transform with Growth',
    badge: 'MOST POPULAR'
  },
  {
    id: 'enterprise',
    name: 'Custom Enterprise',
    priceMonthly: 1999,
    priceAnnually: 1599,
    description: 'Air-gapped security, infinite throughput, and direct engineering access to solve legacy workflows.',
    features: [
      'Infinite token throughput (Private node)',
      'Unlimited chatbots, agents, and processes',
      'Custom fine-tuned specialized corporate model',
      'Direct VPC / Dedicated server installations',
      'Uncompromising SOC-2 & ISO Compliance',
      'Sub-10ms custom predictive model tuning',
      'Direct engineering hotline to Mumbai head office'
    ],
    cta: 'Book Enterprise Demo'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of Enterprise Automation: Orchestrated Multi-Agent Networks',
    summary: 'Discover how traditional sequential robotic automation is giving way to dynamic, self-correcting neural agents checking their own output.',
    content: `The paradigm of business automation has shifted irrevocably. For years, companies relied on RPA (Robotic Process Automation) — brittle, script-based systems that broke the second a button shifted by three pixels on an interface. 

At MotusAI, founded by Mohammad Faisal in Mumbai, Maharashtra, we are engineering a robust new world: **Cognitive Multi-Agent Networks**. 

Instead of sequential, hardcoded scripts, multi-agent networks utilize fine-tuned, specialized LLM models as individual business units. One agent reads an incoming request, another acts as a logistics specialized database query system, a third generates a natural multi-lingual reply (supporting Hindi, English, and more), and a final "supervisor" agent continuously verifies that the output conforms exactly with enterprise compliance rules.

### Why Brittle Rules Fail
Traditional automation works well when data is 100% structured (like sterile Excel tables). But 90% of business operations operate with unstructured data:
- PDF contracts with random layouts
- Confused customer requests with mixed spelling
- Varied regional voice calls

Our multi-agent grids use semantic vector analysis to extract truth dynamically. They make real design decisions, reconcile anomalies, and run non-stop with incredible fault tolerance.

### Real-World Business Outcomes
In our work with large Indian conglomerates and SaaS hubs, switching to dynamic multi-agent workflows has decreased manual intervention rates from 45% down to under 5%. The resulting processing speeds are up to 18x faster, driving immense efficiency directly to the bottom line.`,
    category: 'AI Insights',
    readTime: '6 min read',
    date: '2026-05-20',
    author: {
      name: 'Mohammad Faisal',
      role: 'Founder & CEO, MotusAI'
    }
  },
  {
    id: '2',
    title: 'Achieving SOC-2 and ISO Regulatory Rigor with Generative Models',
    summary: 'An depth architecture breakdown showing how to isolate telemetry data and keep enterprise knowledge fully secure and private.',
    content: `For Fortune 500 enterprises, the primary barrier in adopting generative AI isn't capability—it is security and governance. Feeding sensitive raw financial metrics or IP documents into public consumer AI models is a serious regulatory risk.

At MotusAI, we design with **uncompromising enterprise-grade security structures**.

### The Hybrid Isolated RAG Paradigm
Our architecture prevents data leakage. We secure corporate pipelines via:
1. **Isolated Cloud Container Sandboxing**: Your documents are stored on fully secure virtual private partitions, keeping vector indexes separate.
2. **Deterministic Encryption**: All telemetry documents, chats, and model weights are encrypted at rest with AES-256 and in transit with TLS 1.3.
3. **Painless Compliance Audit Trails**: Every prompt, decision step, and log is logged, enabling compliance officers to track execution chains seamlessly.

With Mumbai increasingly acting as a powerful technological epicentre for data operations, maintaining iron-clad compliance with global and national regulatory structures is our absolute focus.`,
    category: 'Engineering',
    readTime: '8 min read',
    date: '2026-05-18',
    author: {
      name: 'Pooja Deshmukh',
      role: 'Head of AI Trust & Compliance'
    }
  },
  {
    id: '3',
    title: 'Why Native Support for Regional Languages is Core to India’s Digital SaaS Revolution',
    summary: 'Expanding accessibility beyond standard English. How localized AI models drive unparalleled conversion across different regional demographics.',
    content: `Languages shape culture, and in digital commerce, they shape conversion. Providing software solutions that rely strictly on standard English misses out on connecting with over 80% of India's fast-growing digital consumer base.

At MotusAI Private Limited, we have built localized LLM semantic nodes that natively translate, comprehend, and speak over 12 primary Indian languages including **Marathi, Hindi, Bengali, Tamil, and Kannada**.

### Moving Beyond Simple Translate
Most translation tools are mere dictionary lookups. They miss local metaphors, formal registers, and hybrid colloquialisms. Our cognitive chatbots interpret the underlying conversational intent. This prevents frustrating loops, builds massive customer trust, and leads to dramatic improvements in customer satisfaction (CSAT) ratings.`,
    category: 'Workflows',
    readTime: '5 min read',
    date: '2026-05-12',
    author: {
      name: 'Aditya Sen',
      role: 'Director of Conversational AI'
    }
  }
];

export const TESTIMONIALS: Testimonial[] = [
  ...Array.from({ length: 4 }).map((_, i) => ({
    id: `t${i + 1}`,
    quote: [
      "MotusAI transformed our support desk overnight. Resolving 80% of regional customer questions instantly without any human intervention felt like magic. Absolute enterprise class engineering.",
      "The multi-step cognitive pipeline creator has automated 95% of our vendor onboarding. We can now focus completely on high-impact strategic growth.",
      "Mohammad Faisal and the MotusAI engineering team solved our strict private data isolation limits perfectly. Their SOC-2 secure deployment is second to none.",
      "The custom predictive timeseries modeling saved us millions in early warehouse optimizations. Highly recommend for any fast-growing logistics or retail operations."
    ][i],
    author: ["Rajesh Mehta", "Sarah Jenkins", "Dr. Amit Varma", "Elena Rostova"][i],
    role: ["Chief Technology Officer", "VP of Operations", "Director of Risk Mitigation", "Head of Digital Products"][i],
    company: ["OmniCorp Retail", "LogiScale Global", "Vanguard Finance India", "SaaSStream Hub"][i],
    avatar: [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&fit=crop&q=80",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&fit=crop&q=80",
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&fit=crop&q=80",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&fit=crop&q=80"
    ][i]
  }))
];

export const FEATURE_COMPARISON: FeatureComparison[] = [
  { name: 'Multimodal Generative Models', starter: 'Basic (Text)', growth: 'Advanced (Text + Media)', enterprise: 'Tailored Private Model', category: 'core' },
  { name: 'Active Conversational Agents', starter: '2 Agents Included', growth: '10 Agents Included', enterprise: 'Unlimited Specialized Agents', category: 'core' },
  { name: 'Advanced RAG Vector Index', starter: '100MB Isolated Index', growth: '10GB Custom Index', enterprise: 'Unlimited Private Storage', category: 'core' },
  { name: 'Workflow Automation Pipelines', starter: false, growth: 'Standard (Visual Builder)', enterprise: 'Adaptive Cognitive Flows', category: 'core' },
  { name: 'Predictive Analytics Node', starter: false, growth: 'Standard (Timeseries)', enterprise: 'Custom Transformer Layers', category: 'core' },
  { name: 'API Rate Limits (per min)', starter: '30 requests', growth: '250 requests', enterprise: 'Infinite Isolated Node', category: 'integration' },
  { name: 'CRM & ERP Custom Integration', starter: 'Pre-built Webhooks Only', growth: 'Standard Bidirectional Sync', enterprise: 'Custom Bespoke Architecture', category: 'integration' },
  { name: 'SOC-2 & ISO Compliance Engine', starter: 'Standard Security', growth: 'Standard Compliance Logs', enterprise: 'Full Private Isolation Guard', category: 'security' },
  { name: 'Local Indian Language Support', starter: 'Hindi & English Only', growth: 'Full Regional Core Packs', enterprise: 'Custom Fine-Tuned Local Dialects', category: 'core' },
  { name: 'Dedicated Client Support Hub', starter: 'Email (24-hour guarantee)', growth: 'Slack + Rapid Email Support', enterprise: '24/7 dedicated local engineer support hotline', category: 'support' },
  { name: 'Virtual Private Cloud Deployment', starter: false, growth: false, enterprise: 'Full AWS / GCP VPC Support', category: 'security' }
];

export const OFFICE_ADDRESS = {
  line1: 'MotusAI Private Limited, Level 15, Maker Maxity',
  line2: 'Bandra Kurla Complex (BKC), Mumbai, Maharashtra 400051',
  country: 'India',
  email: 'contact@motusai.com',
  phone: '+91 22 6902 4491'
};
