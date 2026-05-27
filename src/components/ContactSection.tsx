import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, MapPin, Mail, Phone, Clock, ArrowRight, CheckCircle2, User, HelpCircle, Building2, Send } from 'lucide-react';
import { OFFICE_ADDRESS } from '../data';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    emailAddress: 'aashikagadhavi@gmail.com', // Pre-populate with logged user email for extreme convenience!
    corporateName: '',
    solutionTier: 'growth',
    messageDetails: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.emailAddress) {
      alert('Please output your Full name and Email Address.');
      return;
    }

    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setFormSubmitted(true);
    }, 1200);
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      emailAddress: 'aashikagadhavi@gmail.com',
      corporateName: '',
      solutionTier: 'growth',
      messageDetails: ''
    });
    setFormSubmitted(false);
  };

  return (
    <section className="relative py-24 bg-[#020308] border-t border-white/5 overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[350px] h-[350px] bg-purple-950/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/40 border border-blue-500/20 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Connect & Orchestrate</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            Transform your enterprise scale today
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Ready to deploy isolated multi-agent workflows? Reach out to Mohammad Faisal and our Mumbai-based executive engineering teams for an immediate proposal.
          </p>
        </div>

        {/* Content columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch max-w-6xl mx-auto">
          {/* Left Column: Form Info */}
          <div className="lg:col-span-4 flex flex-col justify-between bg-[#040611] rounded-2xl border border-white/10 p-6 md:p-8 text-left shadow-lg">
            <div className="flex flex-col gap-6">
              <div>
                <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest block font-bold mb-1">Corporate Headquarters</span>
                <span className="text-base font-bold text-white block mt-0.5">MotusAI Private Limited</span>
              </div>

              {/* Geographic, Email, Office hours coordinates */}
              <div className="flex flex-col gap-4 text-xs font-sans">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4.5 h-4.5 text-cyan-400 shrink-0 mt-0.5" />
                  <div className="text-gray-300 leading-normal">
                    <span>{OFFICE_ADDRESS.line1}</span>
                    <span className="block">{OFFICE_ADDRESS.line2}</span>
                    <span className="block font-semibold mt-1 text-cyan-300">{OFFICE_ADDRESS.country}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 border-t border-white/5 pt-4">
                  <Mail className="w-4.5 h-4.5 text-purple-400 shrink-0" />
                  <span className="text-gray-300 font-mono">{OFFICE_ADDRESS.email}</span>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-4.5 h-4.5 text-purple-400 shrink-0" />
                  <span className="text-gray-300 font-mono">{OFFICE_ADDRESS.phone}</span>
                </div>

                <div className="flex items-start gap-3 border-t border-white/5 pt-4">
                  <Clock className="w-4.5 h-4.5 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-gray-300 block">Monday • Friday (Active)</span>
                    <span className="text-gray-500 block mt-0.5">09:30 AM • 06:30 PM (IST)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-white/5 pt-5 mt-6 shrink-0 text-[10px] text-gray-550 text-gray-500 leading-relaxed font-mono">
              Symmetric billing support routed securely through Bandra Kurla Complex datacenter hubs.
            </div>
          </div>

          {/* Right Column: Lead Form Card */}
          <div className="lg:col-span-8 bg-[#040611] rounded-2xl border border-white/10 p-6 md:p-8 text-left shadow-lg relative min-h-[450px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {!formSubmitted ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  onSubmit={handleFormSubmit}
                  className="flex flex-col gap-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-mono text-gray-400 uppercase tracking-wider font-bold">Full Name *</label>
                      <div className="relative">
                        <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-550 text-gray-500" />
                        <input
                          type="text"
                          required
                          name="fullName"
                          placeholder="Mohammad Patel"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          className="w-full bg-[#02040b] border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-xs font-semibold text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/35 transition-all"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-mono text-gray-400 uppercase tracking-wider font-bold">Email Address *</label>
                      <div className="relative">
                        <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-550 text-gray-500" />
                        <input
                          type="email"
                          required
                          name="emailAddress"
                          placeholder="aashikagadhavi@gmail.com"
                          value={formData.emailAddress}
                          onChange={handleInputChange}
                          className="w-full bg-[#02040b] border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-xs font-semibold text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/35 transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Organization */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-mono text-gray-400 uppercase tracking-wider font-bold">Corporate Name</label>
                      <div className="relative">
                        <Building2 className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-550 text-gray-500" />
                        <input
                          type="text"
                          name="corporateName"
                          placeholder="Mumbai Tech Solutions Ltd"
                          value={formData.corporateName}
                          onChange={handleInputChange}
                          className="w-full bg-[#02040b] border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-xs font-semibold text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/35 transition-all"
                        />
                      </div>
                    </div>

                    {/* Interest / Objective Selection */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-mono text-gray-400 uppercase tracking-wider font-bold">Inquiry Objective</label>
                      <select
                        name="solutionTier"
                        value={formData.solutionTier}
                        onChange={handleInputChange}
                        className="w-full bg-[#02040b] border border-white/10 rounded-xl py-2.5 px-4 text-xs font-semibold text-gray-300 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/35 transition-all appearance-none cursor-pointer"
                      >
                        <option value="starter">Schedule Starter Sandbox Tour</option>
                        <option value="growth">Schedule Growth Enterprise Demo</option>
                        <option value="enterprise">Request Custom Air-gapped VPC Setup</option>
                        <option value="investor">Request Executive Investor Deck</option>
                      </select>
                    </div>
                  </div>

                  {/* Message Details */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-mono text-gray-400 uppercase tracking-wider font-bold">Detailed Inquiry Notes</label>
                    <textarea
                      name="messageDetails"
                      rows={4}
                      placeholder="Specify your approximate multi-agent pipeline trigger requirements or regional language criteria..."
                      value={formData.messageDetails}
                      onChange={handleInputChange}
                      className="w-full bg-[#02040b] border border-white/10 rounded-xl p-4 text-xs font-semibold text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/35 transition-all resize-none leading-relaxed"
                    />
                  </div>

                  {/* Submit buttons */}
                  <button
                    type="submit"
                    disabled={isSending}
                    className="flex items-center justify-center gap-2 w-full sm:w-fit px-6.5 py-3 rounded-xl bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 text-white text-xs font-black uppercase tracking-wider shadow-lg hover:shadow-cyan-550/20 hover:-translate-y-0.5 transition-all disabled:opacity-40"
                  >
                    {isSending ? (
                      <span>TRANSMITTING DATA PACK...</span>
                    ) : (
                      <>
                        <span>Transmitting Inquiry Proposal</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="form-success"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  className="flex flex-col items-center text-center p-6 bg-emerald-950/20 border border-emerald-500/20 rounded-2xl max-w-lg mx-auto"
                >
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mb-4 animate-bounce" />
                  <h3 className="text-lg font-bold text-white mb-1.5">Proposal Successfully Transmitted</h3>
                  <p className="text-xs text-gray-300 leading-relaxed max-w-sm mb-6">
                    A secure receipt has been compiled. Mohammad Faisal and the BKC executive team will review your inquiry details and contact you at <strong className="text-emerald-300 font-bold">{formData.emailAddress}</strong> within 12 business hours.
                  </p>
                  <button
                    onClick={resetForm}
                    className="px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white font-bold text-xs uppercase tracking-wider hover:bg-white/10 transition-all"
                  >
                    Send Another Proposal
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
