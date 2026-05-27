import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Bot, 
  Eye, 
  EyeOff, 
  ShieldCheck, 
  Mail, 
  Lock, 
  User, 
  Building2, 
  Key, 
  Terminal, 
  ArrowRight, 
  CheckCircle2, 
  RotateCcw, 
  AlertCircle, 
  Sparkles, 
  LogOut, 
  Code, 
  RefreshCw, 
  Cpu, 
  Layers,
  Fingerprint,
  Radio,
  Server
} from 'lucide-react';
import { PageType } from '../types';

interface AuthSectionProps {
  setCurrentPage: (page: PageType) => void;
}

export default function AuthSection({ setCurrentPage }: AuthSectionProps) {
  // Authentication tab mode
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  
  // Form input states
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [region, setRegion] = useState('mumbai-bkc');
  const [showPassword, setShowPassword] = useState(false);
  const [company, setCompany] = useState('');

  // UI state feedback
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [activeTab, setActiveTab2] = useState<'creds' | 'sso'>('creds');
  
  // Simulated logged-in session state with localStorage persistence
  const [session, setSession] = useState<{
    isAuthenticated: boolean;
    userEmail: string;
    userName: string;
    role: string;
    companyName: string;
    jwtToken: string;
    nodeRegion: string;
  } | null>(null);

  // Load existing session from localStorage if present
  useEffect(() => {
    const saved = localStorage.getItem('motus_simulated_session_v1');
    if (saved) {
      try {
        setSession(JSON.parse(saved));
      } catch (e) {
        // Safe fallback
      }
    }
  }, []);

  // Compute password score (0 to 4)
  const getPasswordStrength = () => {
    if (!password) return 0;
    let score = 0;
    if (password.length >= 6) score += 1;
    if (password.length >= 10) score += 1;
    if (/[A-Z]/.test(password)) score += 1;
    if (/[0-9]/.test(password) || /[^A-Za-z0-9]/.test(password)) score += 1;
    return score;
  };

  const strengthScore = getPasswordStrength();

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');

    // Basic Validations
    if (!email) {
      setErrorMsg('Please supply a valid corporate email address.');
      return;
    }
    if (!password) {
      setErrorMsg('Please specify a valid security containment key (password).');
      return;
    }
    if (password.length < 6) {
      setErrorMsg('Password should contain at least 6 characters.');
      return;
    }

    if (mode === 'signup' && !fullName) {
      setErrorMsg('Please supply your full name for access provisioning.');
      return;
    }

    setIsSubmitting(true);

    // Simulate authentic network handshake delay
    setTimeout(() => {
      setIsSubmitting(false);
      
      const assumedName = mode === 'signup' ? fullName : email.split('@')[0].replace(/[^a-zA-Z]/g, ' ').toUpperCase();
      const companyDomain = email.includes('@') ? email.split('@')[1].split('.')[0].toUpperCase() : 'ENTERPRISE';
      const actualCompany = mode === 'signup' ? (company || companyDomain) : companyDomain;
      
      const newSession = {
        isAuthenticated: true,
        userEmail: email,
        userName: assumedName.charAt(0).toUpperCase() + assumedName.slice(1),
        role: email.includes('admin') ? 'Sovereign Cluster Architect' : 'Neural Core Engineer',
        companyName: actualCompany,
        nodeRegion: region,
        jwtToken: `motus_secure_jwt_${Math.random().toString(36).substring(2)}${Math.random().toString(36).substring(2).toUpperCase()}`
      };

      setSession(newSession);
      localStorage.setItem('motus_simulated_session_v1', JSON.stringify(newSession));
      setSuccessMsg(mode === 'signup' ? 'Workspace provisioning successful!' : 'Secure session handshaked!');
    }, 1200);
  };

  const handleLogout = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setSession(null);
      localStorage.removeItem('motus_simulated_session_v1');
      setIsSubmitting(false);
      setEmail('');
      setPassword('');
      setFullName('');
      setCompany('');
      setSuccessMsg('');
      setErrorMsg('');
    }, 800);
  };

  // Simulated live dashboard actions
  const [isGeneratingNewToken, setIsGeneratingNewToken] = useState(false);
  const [complianceLogs, setComplianceLogs] = useState<string[]>([
    'SYSTEM: Initializing workspace console audit...',
    'SECURITY: Handshaking with verified SOC2 compliance router v3.0...',
    'NET: Core socket established securely over TLS 1.3.'
  ]);

  const addLog = (msg: string) => {
    setComplianceLogs(prev => [...prev.slice(-6), `TIME: [${new Date().toLocaleTimeString()}] ${msg}`]);
  };

  const runDiagnostic = () => {
    addLog('SECURITY: Initiating zero-trust audit scanner on cluster node...');
    setTimeout(() => {
      addLog('SCANNER: 24 active model workloads verified in memory.');
    }, 400);
    setTimeout(() => {
      addLog('SCANNER: Encryption check: AES-256 integrity loops are 100% stable.');
    }, 800);
    setTimeout(() => {
      addLog('SYSTEM: Diagnostic complete. 0 vulnerabilities reported.');
    }, 1200);
  };

  const testAuthPing = () => {
    addLog('PING: Sending ping query to private cloud regional server...');
    setTimeout(() => {
      addLog(`PONG: Received 200 OK frame (Latency: ${Math.floor(Math.random() * 40) + 12}ms)`);
    }, 500);
  };

  return (
    <div className="pt-28 pb-20 px-4 min-h-screen relative bg-[#020308] overflow-hidden flex flex-col justify-center">
      {/* Decorative cybernetic overlay lines and glow spots */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-purple-950/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-cyan-950/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        
        <AnimatePresence mode="wait">
          {!session?.isAuthenticated ? (
            /* ================= SIGN IN / SIGN UP FORM CONTAINER ================= */
            <motion.div
              key="auth-forms"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
            >
              
              {/* Left Column: Cybernetic Trust Pane & Specifications */}
              <div id="auth-left-pane" className="lg:col-span-5 bg-gradient-to-br from-[#040611] to-[#010207] p-8 rounded-3xl border border-white/10 flex flex-col justify-between text-left relative overflow-hidden group min-h-[450px]">
                <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                
                <div>
                  {/* Brand Tag */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] text-cyan-300 font-mono tracking-widest uppercase mb-6">
                    <Radio className="w-3 h-3 text-cyan-400 animate-pulse" />
                    <span>Secure Gateway Node IP-X9</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
                    Access MotusAI sovereign networks.
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-400 mt-4 leading-relaxed font-sans font-medium">
                    Provision clusters, inspect model telemetry, and configure private neural pipelines securely directly from your browser.
                  </p>

                  {/* Corporate Features List */}
                  <div className="mt-8 space-y-4">
                    <div className="flex gap-3.5 items-start">
                      <div className="p-1.5 rounded-lg bg-purple-950/40 border border-purple-500/20 text-purple-300 mt-0.5">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-white block">SOC-2 Type II Certified</span>
                        <span className="text-[11px] text-gray-500 block leading-snug mt-0.5">VPC isolation policies guarantee no unauthorized text telemetry spills to open weights.</span>
                      </div>
                    </div>

                    <div className="flex gap-3.5 items-start">
                      <div className="p-1.5 rounded-lg bg-cyan-950/40 border border-cyan-500/20 text-cyan-300 mt-0.5">
                        <Fingerprint className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-white block">Biometric Integrity Safeguards</span>
                        <span className="text-[11px] text-gray-500 block leading-snug mt-0.5">Dual-factor cryptographic login checks and hardware key integrations enforced.</span>
                      </div>
                    </div>

                    <div className="flex gap-3.5 items-start">
                      <div className="p-1.5 rounded-lg bg-blue-950/40 border border-blue-500/20 text-blue-300 mt-0.5">
                        <Server className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-white block">Bandra Kurla Complex (BKC) Nodes</span>
                        <span className="text-[11px] text-gray-500 block leading-snug mt-0.5">Hosted safely on Tier IV Indian hardware with full fallback capability.</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cyber Console Simulation Mini Box */}
                <div className="mt-10 bg-black/60 rounded-xl p-4.5 border border-white/5 font-mono text-[10px] text-gray-500">
                  <div className="flex items-center justify-between mb-2 pb-2 border-b border-white/5">
                    <div className="flex items-center gap-1.5">
                      <Terminal className="w-3 h-3 text-cyan-400" />
                      <span className="text-[9px] uppercase font-bold text-gray-400 tracking-wider">Gateway Telemetry Live</span>
                    </div>
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                  </div>
                  <div className="space-y-1 select-none">
                    <p className="text-cyan-400/90">&gt; verifying corporate domain certs... [OK]</p>
                    <p className="text-purple-400/90">&gt; model integrity verified: Motus LLama-70B</p>
                    <p>&gt; waiting for sovereign token handshakes...</p>
                  </div>
                </div>
              </div>

              {/* Right Column: Interaction form panel */}
              <div id="auth-right-pane" className="lg:col-span-7 bg-[#03050c] p-6 sm:p-10 rounded-3xl border border-white/10 flex flex-col justify-between text-left shadow-[0_15px_50px_rgba(0,0,0,0.5)]">
                <div>
                  {/* Form Headers & Mode Sorter Tabs */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                    <div>
                      <h3 className="text-xl font-bold text-white tracking-tight">
                        {mode === 'login' ? 'Welcome back to MotusAI' : 'Create Sovereign Credentials'}
                      </h3>
                      <span className="text-xs text-gray-500 block mt-1.5">
                        {mode === 'login' 
                          ? 'Access high-performance generative workloads.' 
                          : 'Enroll to configure multi-agent networks.'}
                      </span>
                    </div>

                    {/* Mode Toggle Switchers */}
                    <div className="bg-black/40 border border-white/5 rounded-xl p-1 flex gap-1 self-start sm:self-auto">
                      <button
                        onClick={() => {
                          setMode('login');
                          setErrorMsg('');
                          setSuccessMsg('');
                        }}
                        className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                          mode === 'login' 
                            ? 'bg-purple-950/60 border border-purple-500/25 text-white' 
                            : 'text-gray-400 hover:text-white'
                        }`}
                        id="auth-mode-login"
                      >
                        Sign In
                      </button>
                      <button
                        onClick={() => {
                          setMode('signup');
                          setErrorMsg('');
                          setSuccessMsg('');
                        }}
                        className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                          mode === 'signup' 
                            ? 'bg-purple-950/60 border border-purple-500/25 text-white' 
                            : 'text-gray-400 hover:text-white'
                        }`}
                        id="auth-mode-signup"
                      >
                        Enroll
                      </button>
                    </div>
                  </div>

                  {/* Alternative Login types tabs */}
                  <div className="flex gap-4 border-b border-white/5 pb-4.5 mb-6">
                    <button
                      onClick={() => setActiveTab2('creds')}
                      className={`text-xs font-bold tracking-wider uppercase border-b-2 pb-2 transition-all ${
                        activeTab === 'creds' 
                          ? 'border-purple-500 text-purple-300' 
                          : 'border-transparent text-gray-500 hover:text-gray-300'
                      }`}
                    >
                      Security Key
                    </button>
                    <button
                      onClick={() => setActiveTab2('sso')}
                      className={`text-xs font-bold tracking-wider uppercase border-b-2 pb-2 transition-all ${
                        activeTab === 'sso' 
                          ? 'border-purple-500 text-purple-300' 
                          : 'border-transparent text-gray-500 hover:text-gray-300'
                      }`}
                    >
                      Single Sign-On (SSO)
                    </button>
                  </div>

                  <AnimatePresence mode="wait">
                    {activeTab === 'sso' ? (
                      /* ================= SSO DIRECT LOGIN PORTAL SIMULATOR ================= */
                      <motion.div
                        key="sso-panel"
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        className="space-y-4 py-3"
                      >
                        <div className="text-xs text-gray-400 leading-relaxed mb-6">
                          Connect immediately using centralized user directories supported by our identity rules:
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                          <button
                            onClick={() => {
                              setEmail('engineering_lead@bkc_corporate.com');
                              setPassword('SSO_OIDC_TOKEN_PASSED_98412');
                              setFullName('Pranav Mehta');
                              setCompany('BKC Corporate Partner');
                              setMode('login');
                              setActiveTab2('creds');
                              setSuccessMsg('Okta parameters compiled. Review and click "Validate Portal Entry" below!');
                            }}
                            className="p-4 rounded-xl border border-white/5 hover:border-white/10 bg-black/40 hover:bg-black/60 transition-all text-left flex items-center gap-3.5"
                          >
                            <Building2 className="w-5 h-5 text-blue-400 shrink-0" />
                            <div>
                              <span className="text-xs font-bold text-white block">Log in with Okta</span>
                              <span className="text-[10px] text-gray-500 block">Single Sign-On Auth</span>
                            </div>
                          </button>

                          <button
                            onClick={() => {
                              setEmail('global_architect@motus.ai');
                              setPassword('SECURE_WORKFLOW_AUDITOR_2026');
                              setFullName('Mohammad Faisal');
                              setCompany('MotusAI Corp');
                              setMode('login');
                              setActiveTab2('creds');
                              setSuccessMsg('GitHub Enterprise parameters loaded. Click "Validate Portal Entry" below!');
                            }}
                            className="p-4 rounded-xl border border-white/5 hover:border-white/10 bg-black/40 hover:bg-black/60 transition-all text-left flex items-center gap-3.5"
                          >
                            <Code className="w-5 h-5 text-purple-400 shrink-0" />
                            <div>
                              <span className="text-xs font-bold text-white block">GitHub Enterprise</span>
                              <span className="text-[10px] text-gray-500 block">Deploy key credentials</span>
                            </div>
                          </button>
                        </div>

                        <div className="text-center py-6 text-[11px] text-gray-500">
                          - OR -
                        </div>

                        <button
                          onClick={() => setActiveTab2('creds')}
                          className="w-full text-center py-3 border border-white/10 hover:border-white/20 hover:bg-white/5 text-xs text-gray-300 font-bold rounded-xl transition-all"
                        >
                          Use Standard Multi-Factor Corporate Key instead
                        </button>
                      </motion.div>
                    ) : (
                      /* ================= CREDENTIALS STANDARD SECURITY INPUTS ================= */
                      <motion.form
                        key="credentials-form"
                        onSubmit={handleAuth}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        className="space-y-4"
                      >
                        {/* FULL NAME (Enrollment only) */}
                        {mode === 'signup' && (
                          <div className="flex flex-col gap-1.5">
                            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Full Sovereign Name</label>
                            <div className="relative">
                              <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                              <input
                                type="text"
                                placeholder="E.g. Pooja Deshmukh"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                className="w-full bg-[#020308] border border-white/10 hover:border-white/25 rounded-xl pl-10 pr-4 py-3 text-xs sm:text-sm text-white font-medium focus:border-purple-500/40 focus:ring-1 focus:ring-purple-500/30 outline-none transition-all"
                              />
                            </div>
                          </div>
                        )}

                        {/* CORPORATE EMAIL ADDRESS */}
                        <div className="flex flex-col gap-1.5">
                          <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Identity Corporate Email</label>
                          <div className="relative">
                            <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                            <input
                              type="email"
                              placeholder="E.g. engineer@bkc_office.com"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              className="w-full bg-[#020308] border border-white/10 hover:border-white/25 rounded-xl pl-10 pr-4 py-3 text-xs sm:text-sm text-white font-medium focus:border-purple-500/40 focus:ring-1 focus:ring-purple-500/30 outline-none transition-all"
                            />
                          </div>
                        </div>

                        {/* COMPANY (Enrollment only) */}
                        {mode === 'signup' && (
                          <div className="flex flex-col gap-1.5">
                            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Enterprise Affiliate Name</label>
                            <div className="relative">
                              <Building2 className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                              <input
                                type="text"
                                placeholder="E.g. Bandra Kurla Logistics Ltd"
                                value={company}
                                onChange={(e) => setCompany(e.target.value)}
                                className="w-full bg-[#020308] border border-white/10 hover:border-white/25 rounded-xl pl-10 pr-4 py-3 text-xs sm:text-sm text-white font-medium focus:border-purple-500/40 focus:ring-1 focus:ring-purple-500/30 outline-none transition-all"
                              />
                            </div>
                          </div>
                        )}

                        {/* PRIVATE CONTAINMENT KEY PASSWORD */}
                        <div className="flex flex-col gap-1.5">
                          <div className="flex items-center justify-between">
                            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Password Private Access Key</label>
                            {mode === 'login' && (
                              <button
                                type="button"
                                onClick={() => {
                                  if (!email) {
                                    setErrorMsg('Enter your email to request recovery parameters.');
                                  } else {
                                    setSuccessMsg(`Simulated OTP recovery parameters dispatched to: ${email}`);
                                  }
                                }}
                                className="text-[10px] text-cyan-400 font-bold hover:underline"
                              >
                                Lost access key?
                              </button>
                            )}
                          </div>
                          
                          <div className="relative">
                            <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                            <input
                              type={showPassword ? 'text' : 'password'}
                              placeholder="••••••••••••"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              className="w-full bg-[#020308] border border-white/10 hover:border-white/25 rounded-xl pl-10 pr-11 py-3 text-xs sm:text-sm text-white font-medium focus:border-purple-500/40 focus:ring-1 focus:ring-purple-500/30 outline-none transition-all"
                            />
                            
                            <button
                              type="button"
                              onClick={() => setShowPassword(!showPassword)}
                              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
                              title={showPassword ? 'Hide password' : 'Show password'}
                            >
                              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                            </button>
                          </div>

                          {/* Dynamic password strength bar */}
                          {mode === 'signup' && password.length > 0 && (
                            <div className="mt-2 text-left">
                              <div className="flex items-center justify-between text-[10px] text-gray-500 mb-1">
                                <span>Security Entropy Audit:</span>
                                <span className={`font-bold uppercase ${
                                  strengthScore <= 1 ? 'text-red-400' : strengthScore === 2 || strengthScore === 3 ? 'text-yellow-400' : 'text-emerald-400'
                                }`}>
                                  {strengthScore <= 1 ? 'Vulnerable' : strengthScore === 2 || strengthScore === 3 ? 'Medium Guard' : 'Fortified'}
                                </span>
                              </div>
                              <div className="flex gap-1 h-1 bg-black/40 rounded-full overflow-hidden">
                                <div className={`flex-1 transition-all rounded-full duration-500 ${
                                  strengthScore >= 1 ? (strengthScore === 1 ? 'bg-red-500' : strengthScore <= 3 ? 'bg-yellow-500' : 'bg-emerald-500') : 'bg-white/5'
                                }`} />
                                <div className={`flex-1 transition-all rounded-full duration-500 ${
                                  strengthScore >= 2 ? (strengthScore <= 3 ? 'bg-yellow-500' : 'bg-emerald-500') : 'bg-white/5'
                                }`} />
                                <div className={`flex-1 transition-all rounded-full duration-500 ${
                                  strengthScore >= 3 ? (strengthScore === 3 ? 'bg-yellow-550' : 'bg-emerald-500') : 'bg-white/5'
                                }`} />
                                <div className={`flex-1 transition-all rounded-full duration-500 ${
                                  strengthScore >= 4 ? 'bg-emerald-500' : 'bg-white/5'
                                }`} />
                              </div>
                            </div>
                          )}
                        </div>

                        {/* PRIVATE WORKSPACE REGION */}
                        <div className="flex flex-col gap-1.5">
                          <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Deploy Target Workspace Region</label>
                          <select
                            value={region}
                            onChange={(e) => setRegion(e.target.value)}
                            className="w-full bg-[#020308] border border-white/10 hover:border-white/25 rounded-xl px-3.5 py-3 text-xs sm:text-sm text-gray-300 font-medium focus:border-purple-500/40 outline-none transition-all cursor-pointer"
                          >
                            <option value="mumbai-bkc">Mumbai BKC Terminal (Maker Maxity Main Node)</option>
                            <option value="bengaluru-ec">Bangalore Electronic City Hub (Tier-4 Backup)</option>
                            <option value="hyderabad-hitech">Hyderabad hi-tech park (API-Express router)</option>
                            <option value="air-gapped-del">New Delhi Private Air-Gapped Cloud</option>
                          </select>
                        </div>

                        {/* Form state alert lines */}
                        {errorMsg && (
                          <div className="flex items-start gap-2 text-xs text-red-400 bg-red-950/25 border border-red-500/10 p-3 rounded-lg">
                            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                            <span>{errorMsg}</span>
                          </div>
                        )}

                        {successMsg && (
                          <div className="flex items-start gap-2 text-xs text-emerald-400 bg-emerald-950/25 border border-emerald-500/10 p-3 rounded-lg">
                            <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                            <span>{successMsg}</span>
                          </div>
                        )}

                        {/* Dispatch Entry CTA Button */}
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full mt-3 py-3.5 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 hover:opacity-90 active:scale-[0.98] text-white text-xs sm:text-sm font-extrabold rounded-xl transition-all flex items-center justify-center gap-2 shadow-[0_5px_20px_rgba(147,51,234,0.35)] disabled:opacity-50"
                        >
                          {isSubmitting ? (
                            <>
                              <RefreshCw className="w-4 h-4 animate-spin" />
                              <span>Validating Integrity Certificates...</span>
                            </>
                          ) : (
                            <>
                              <span>{mode === 'login' ? 'Validate Portal Entry' : 'Provision Sovereign Workspace'}</span>
                              <ArrowRight className="w-4 h-4" />
                            </>
                          )}
                        </button>
                      </motion.form>
                    )}
                  </AnimatePresence>
                </div>

                {/* Secure Sign on Legal Footnotes */}
                <div className="mt-8 border-t border-white/5 pt-4 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-2.5 text-[10px] text-gray-500">
                  <span className="font-semibold block">Protected by MotusAI Security Enforcement rules.</span>
                  <div className="flex gap-4">
                    <button type="button" className="hover:text-cyan-400 font-bold transition-all">Privacy Guard</button>
                    <span className="text-white/10">|</span>
                    <button type="button" className="hover:text-cyan-400 font-bold transition-all">Sovereign TOS</button>
                  </div>
                </div>

              </div>

            </motion.div>
          ) : (
            /* ================= FULLY AUTHENTICATED SOVEREIGN CONSOLE DASHBOARD ================= */
            <motion.div
              key="auth-console"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.35 }}
              className="bg-gradient-to-br from-[#03050c] to-[#010207] rounded-3xl border border-white/10 p-6 md:p-10 text-left shadow-[0_20px_60px_rgba(0,0,0,0.8)] relative"
            >
              {/* Backglow line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500 via-cyan-400 to-blue-500" />

              {/* Console Dashboard Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-white/5 pb-8 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-600 to-cyan-400 p-[1.5px]">
                    <div className="w-full h-full bg-[#020308] rounded-[14px] flex items-center justify-center text-cyan-300">
                      <Bot className="w-6 h-6 animate-pulse" />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h2 className="text-xl md:text-2xl font-extrabold text-white tracking-tight">
                        Welcome back, {session.userName}!
                      </h2>
                      <span className="px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-500/20 text-emerald-400 font-mono text-[9px] font-bold uppercase tracking-wider">
                        Authorized Session
                      </span>
                    </div>
                    <span className="text-xs text-gray-400 block mt-1">
                      {session.role} • <strong className="text-gray-300">{session.companyName}</strong> workspace terminal
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <div className="px-3.5 py-1.5 rounded-xl bg-black/40 border border-white/5 flex items-center gap-2 text-xs text-gray-400">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                    <span className="font-mono">Node ID: {session.nodeRegion.toUpperCase()}</span>
                  </div>

                  <button
                    onClick={handleLogout}
                    disabled={isSubmitting}
                    className="px-4.5 py-2 bg-red-950/20 hover:bg-red-950/40 border border-red-500/10 text-red-400 hover:text-red-300 rounded-xl text-xs font-bold transition-all flex items-center gap-2"
                  >
                    {isSubmitting ? (
                      <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    ) : (
                      <LogOut className="w-3.5 h-3.5" />
                    )}
                    <span>Close Session</span>
                  </button>
                </div>
              </div>

              {/* Console Dashboard workspace columns */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Column (Spanning 7 Cols): Live API Keys & Simulated model provisions */}
                <div className="lg:col-span-7 space-y-6">
                  
                  {/* API JWT Token credentials display */}
                  <div className="bg-[#020308] rounded-2xl border border-white/10 p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <Key className="w-4 h-4 text-purple-400" />
                        <span className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">Gateway Authorization Key</span>
                      </div>
                      <span className="text-[10px] text-gray-500 uppercase tracking-widest font-mono">Expires in 24h</span>
                    </div>

                    <p className="text-xs text-gray-400 font-sans leading-relaxed mb-4">
                      Use this server-side cryptographical key to authenticate API queries from your local shell terminals or automated Docker micro-workloads.
                    </p>

                    <div className="relative font-mono text-xs text-cyan-300 bg-black/60 rounded-xl px-4 py-3.5 border border-white/5 select-all overflow-x-auto break-all flex items-center justify-between gap-4">
                      <span>{session.jwtToken}</span>
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(session.jwtToken);
                          addLog('SYSTEM: Copied gateway JSON access token to client clipboards.');
                        }}
                        className="text-[10px] text-gray-500 hover:text-white uppercase font-bold shrink-0"
                      >
                        Copy
                      </button>
                    </div>

                    {/* Developer integration snippet code */}
                    <div className="mt-4 pt-4 border-t border-white/5">
                      <span className="text-[10px] text-gray-500 uppercase tracking-wider font-bold block mb-2">Integrating into python workspace scripts:</span>
                      <pre className="font-mono text-[10px] select-all bg-[#010205] text-gray-400 p-3.5 rounded-lg overflow-x-auto leading-relaxed">
                        {`import motus_ai_sdk as motus

client = motus.SovereignClient(
    token="${session.jwtToken.slice(0, 16)}...",
    region="${session.nodeRegion}"
)
response = client.generate(
    prompt="Summarize latest Mumbai BKC contracts",
    isolation="secure_air_gapped"
)`}
                      </pre>
                    </div>
                  </div>

                  {/* Active Cloud Deployment controls */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <button
                      onClick={() => {
                        setIsGeneratingNewToken(true);
                        addLog('NET: Attempting to rotate gateway credentials keys...');
                        setTimeout(() => {
                          const newToken = `motus_secure_jwt_${Math.random().toString(36).substring(2)}${Math.random().toString(36).substring(2).toUpperCase()}`;
                          setSession(prev => prev ? { ...prev, jwtToken: newToken } : null);
                          setIsGeneratingNewToken(false);
                          addLog('SECURITY: Successfully re-encrypted and rotated OIDC authorization key.');
                        }, 1000);
                      }}
                      disabled={isGeneratingNewToken}
                      className="p-5 bg-black/40 hover:bg-black/80 border border-white/5 hover:border-white/10 rounded-2xl text-left transition-all group flex items-start gap-4"
                    >
                      <div className="p-2.5 rounded-xl bg-purple-950/40 border border-purple-500/20 text-purple-300">
                        <RefreshCw className={`w-5 h-5 ${isGeneratingNewToken ? 'animate-spin' : 'group-hover:rotate-180 duration-500 transition-all'}`} />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-white block">Rotate Security Keys</span>
                        <span className="text-[10px] text-gray-500 block leading-snug mt-1">Generate new single-use high entropy token credentials immediately.</span>
                      </div>
                    </button>

                    <button
                      onClick={testAuthPing}
                      className="p-5 bg-black/40 hover:bg-black/80 border border-white/5 hover:border-white/10 rounded-2xl text-left transition-all group flex items-start gap-4"
                    >
                      <div className="p-2.5 rounded-xl bg-cyan-950/40 border border-cyan-500/20 text-cyan-300">
                        <Radio className="w-5 h-5 group-hover:scale-110 duration-200" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-white block">Ping Air-gapped Node</span>
                        <span className="text-[10px] text-gray-500 block leading-snug mt-1">Verify direct socket connection state to Maker Maxity.</span>
                      </div>
                    </button>
                  </div>

                </div>

                {/* Right Column (Spanning 5 Cols): Real-time Diagnostic audits & logs terminal */}
                <div className="lg:col-span-5 space-y-6">

                  {/* Systems audits status cards */}
                  <div className="bg-[#03050c] p-6 rounded-2xl border border-white/10 text-left">
                    <div className="flex items-center justify-between mb-4.5">
                      <div className="flex items-center gap-1.5">
                        <Cpu className="w-4 h-4 text-cyan-400" />
                        <span className="text-xs font-bold text-white uppercase tracking-wider">Cluster Capacity Status</span>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 font-mono text-[9px] font-bold uppercase">
                        Optimal
                      </span>
                    </div>

                    <div className="space-y-4">
                      {/* Metric 1 */}
                      <div>
                        <div className="flex justify-between text-[11px] text-gray-500 mb-1">
                          <span>BKC GPU Load (8x H100 Node Group)</span>
                          <span className="font-mono text-gray-300 font-bold">14.2%</span>
                        </div>
                        <div className="h-1.5 bg-black/60 rounded-full overflow-hidden">
                          <div className="h-full bg-cyan-400" style={{ width: '14.2%' }} />
                        </div>
                      </div>

                      {/* Metric 2 */}
                      <div>
                        <div className="flex justify-between text-[11px] text-gray-500 mb-1">
                          <span>Encrypted Ram Allocation</span>
                          <span className="font-mono text-gray-300 font-bold">42.8%</span>
                        </div>
                        <div className="h-1.5 bg-black/60 rounded-full overflow-hidden">
                          <div className="h-full bg-purple-500" style={{ width: '42.8%' }} />
                        </div>
                      </div>

                      {/* Metric 3 */}
                      <div>
                        <div className="flex justify-between text-[11px] text-gray-500 mb-1">
                          <span>ISO-27001 Data Isolation Audit</span>
                          <span className="font-mono text-emerald-400 font-bold">100% OK</span>
                        </div>
                        <div className="h-1.5 bg-black/60 rounded-full overflow-hidden">
                          <div className="h-full bg-emerald-500" style={{ width: '100%' }} />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Live Security Log monitor console */}
                  <div className="bg-black/90 p-5 rounded-2xl border-2 border-white/10 text-left font-mono text-[10px] text-gray-500">
                    <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-2.5">
                      <div className="flex items-center gap-2">
                        <Terminal className="w-3.5 h-3.5 text-purple-400" />
                        <span className="text-[9px] uppercase font-bold text-gray-400 tracking-wider">Gateway Verification Console</span>
                      </div>
                      
                      <button
                        onClick={runDiagnostic}
                        className="text-[9px] font-bold text-cyan-400 hover:underline"
                      >
                        Audit WORKSPACE
                      </button>
                    </div>

                    <div className="space-y-2 select-none min-h-[120px] max-h-[220px] overflow-y-auto">
                      {complianceLogs.map((log, idx) => (
                        <p 
                          key={idx} 
                          className={
                            log.includes('SECURITY:') ? 'text-purple-300/90' : 
                            log.includes('SYSTEM:') ? 'text-yellow-400/90' : 
                            log.includes('PING:') ? 'text-cyan-400/90' :
                            log.includes('PONG:') ? 'text-emerald-400/90' : 'text-gray-550 text-gray-500'
                          }
                        >
                          {log}
                        </p>
                      ))}
                    </div>

                    <div className="mt-4 pt-3.5 border-t border-white/5 flex justify-end gap-3.5 text-[8px] font-bold font-mono tracking-widest text-[#ffffff20]">
                      <span>SOC2_SECURED</span>
                      <span>128BIT_RSA</span>
                      <span>ISO_9001</span>
                    </div>
                  </div>

                </div>

              </div>

            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
