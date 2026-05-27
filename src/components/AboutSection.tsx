import { motion } from 'motion/react';
import { Target, Users, ShieldCheck, HelpCircle, Briefcase, Award } from 'lucide-react';
import { PageType } from '../types';

interface AboutSectionProps {
  setCurrentPage?: (page: PageType) => void;
}

export default function AboutSection({ setCurrentPage }: AboutSectionProps) {
  return (
    <section className="relative py-24 bg-[#020308] overflow-hidden">
      {/* Decorative glows */}
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-purple-950/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-950/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Main title */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/40 border border-blue-500/20 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Target className="w-3.5 h-3.5" />
            <span>Company & Origins</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            Forging the cognitive infrastructure of tomorrow
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            MotusAI Private Limited designs fully isolated multi-agent workflows and generative modeling stacks tailored for high-security enterprise operations.
          </p>
        </div>

        {/* Founder & Corporate overview grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch mb-20">
          {/* Founder */}
          <div className="md:col-span-5 bg-gradient-to-b from-[#06091c] to-[#03050f] rounded-2xl border border-purple-500/20 p-6 md:p-8 text-left flex flex-col justify-between shadow-xl">
            <div>
              <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest block font-bold mb-1">Corporate Profile</span>
              <h3 className="text-2xl font-black text-white tracking-tight mb-2">Our Founder</h3>
              
              <div className="h-44 w-full rounded-xl bg-purple-950/30 border border-purple-550/10 relative overflow-hidden flex items-center justify-center p-6 text-center my-4 group">
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/40 via-blue-900/20 to-cyan-900/10 opacity-70" />
                <div className="relative z-10">
                  <span className="text-3xl font-black text-white block">Mohammad Faisal</span>
                  <span className="text-[11px] font-semibold text-cyan-300 uppercase tracking-widest mt-1 block">Founder & CEO, MotusAI</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-gray-350 text-gray-300 leading-relaxed mt-4">
                Founded in Mumbai, Maharashtra by technology orchestrator Mohammad Faisal, MotusAI was built to address the critical gaps in enterprise automation scaling, cognitive regional language processing, and regulatory compliance.
              </p>
            </div>

            <div className="border-t border-purple-500/10 pt-4.5 mt-6">
              <span className="text-[9px] font-mono text-zinc-500 block uppercase font-bold">HQ Location</span>
              <span className="text-xs text-purple-300 font-semibold">Maker Maxity, BKC, Mumbai, Maharashtra</span>
            </div>
          </div>

          {/* Mission statements */}
          <div className="md:col-span-7 bg-[#040612] rounded-2xl border border-white/10 p-6 md:p-8 text-left flex flex-col justify-between shadow-lg">
            <div className="flex flex-col gap-6">
              <div>
                <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest block font-bold mb-1">Core Mission</span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">Our Central Objectives</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: 'Absolute Data Privacy', desc: 'No shared directories. We run model layers inside fully air-gapped container units, ensuring zero intellectual leaks.', icon: ShieldCheck },
                  { title: 'Symmetric Automation', desc: 'Connecting legacy databases, complex mainframes, and modern API endpoints with self-testing cognitive loops.', icon: TargetsHelper },
                  { title: 'Regional Dialect Core', desc: 'Engineering native regional models (Marathi, Hindi, etc.) with sub-100ms multi-turn conversational competence.', icon: AwardHelper },
                  { title: 'Investor Ready Transparency', desc: 'Solid governance, audit-friendly ledger parameters, and highly predictable cost boundaries tailored for growth.', icon: Briefcase }
                ].map((item, i) => {
                  return (
                    <div key={i} className="bg-[#020308] border border-white/5 p-4 rounded-xl flex flex-col gap-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-extrabold text-white">{item.title}</span>
                      </div>
                      <p className="text-[11px] text-gray-500 leading-normal">{item.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="border-t border-white/5 pt-5 mt-6 sm:flex items-center justify-between text-[11px] text-gray-500">
              <span>Incorporated: MotusAI Private Limited • CIN #BKC-70295</span>
              {setCurrentPage && (
                <button
                  onClick={() => {
                    setCurrentPage('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-cyan-400 font-bold hover:text-white uppercase transition-all block mt-2 sm:mt-0"
                >
                  Request investor deck
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Security & Compliance section */}
        <div className="bg-[#040611] rounded-2xl border border-white/10 p-6 md:p-10 text-left shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8">
              <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest block font-bold mb-1">Global Security Infrastructure</span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-3">Enterprise Security & Compliance Rigor</h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                MotusAI operations are built from scratch on rigid isolation layers. Our core networks comply fully with **SOC 2 Type II**, **ISO 27001**, and global data protective policies. We run continuous auditing, full ledger encryption, and whitelisting protocols designed to withstand critical corporate scrutiny.
              </p>
            </div>
            {/* Compliance Grid badges */}
            <div className="md:col-span-4 grid grid-cols-2 gap-3 shrink-0">
              {[
                { title: 'SOC 2 TYPE II', status: 'Compliant' },
                { title: 'ISO 27001', status: 'Certified' },
                { title: 'AES-256', status: 'Encryption' },
                { title: 'VPC DIRECT', status: 'Isolate Stack' }
              ].map((badge, i) => (
                <div key={i} className="bg-[#02040c] border border-white/5 p-3 rounded-xl text-center">
                  <div className="text-xs font-black text-cyan-300 tracking-wider mb-0.5">{badge.title}</div>
                  <span className="text-[10px] text-gray-500 uppercase font-mono">{badge.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Dummy helper sub-components just to prevent compile issues (since item icons are referenced)
const TargetsHelper = (props: any) => <Target className="w-4 h-4 text-cyan-400 shrink-0" />;
const AwardHelper = (props: any) => <Award className="w-4 h-4 text-purple-400 shrink-0" />;
