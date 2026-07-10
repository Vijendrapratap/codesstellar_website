'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const reveal = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section className="hero-gradient relative isolate min-h-[760px] overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,#040A07_0%,rgba(4,10,7,.94)_38%,rgba(4,10,7,.45)_65%,rgba(4,10,7,.75)_100%)]" />
      <motion.div
        initial={{ opacity: 0, scale: 1.035 }}
        animate={{ opacity: 0.92, scale: 1 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-y-0 right-0 hidden w-[65%] lg:block"
      >
        <img src="/assets/editorial/pqc-network.png" alt="Abstract cryptographic network" className="h-full w-full object-cover object-right" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_48%,transparent_0%,rgba(4,10,7,.18)_42%,rgba(4,10,7,.72)_100%)]" />
      </motion.div>

      <div className="relative mx-auto flex min-h-[760px] max-w-7xl items-center px-6 py-32">
        <div className="max-w-3xl">
          <motion.div variants={reveal} initial="hidden" animate="visible" transition={{ duration: 0.55, delay: 0.12 }} className="mb-7 flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-accent-primary shadow-[0_0_18px_rgba(198,155,36,.85)]" />
            <span className="font-mono text-[13px] uppercase tracking-[0.2em] text-accent-primary">Quantum-ready blockchain engineering</span>
          </motion.div>

          <motion.h1 variants={reveal} initial="hidden" animate="visible" transition={{ duration: 0.75, delay: 0.22, ease: [0.16, 1, 0.3, 1] }} className="font-display text-5xl leading-[.98] md:text-7xl lg:text-8xl">
            Systems that evolve <span className="text-gradient-primary">with the threat.</span>
          </motion.h1>

          <motion.p variants={reveal} initial="hidden" animate="visible" transition={{ duration: 0.55, delay: 0.38 }} className="mt-8 max-w-xl text-lg leading-relaxed text-text-secondary md:text-xl">
            Codesstellar helps teams design crypto-agile blockchain systems, practical post-quantum migration paths, and security operations that keep people in control.
          </motion.p>

          <motion.div variants={reveal} initial="hidden" animate="visible" transition={{ duration: 0.55, delay: 0.5 }} className="mt-10 flex flex-wrap gap-4">
            <Link href="/build" className="rounded-full bg-accent-primary px-8 py-4 font-medium text-background transition-transform hover:-translate-y-0.5 hover:bg-[#d5ab32]" data-hover="EXPLORE">Explore capabilities</Link>
            <Link href="/case-studies" className="rounded-full border border-white/20 bg-background/35 px-8 py-4 font-medium text-text-primary backdrop-blur-sm transition-colors hover:border-accent-primary hover:text-accent-primary" data-hover="CASE STUDIES">See our approach</Link>
          </motion.div>

          <motion.div variants={reveal} initial="hidden" animate="visible" transition={{ duration: 0.55, delay: 0.62 }} className="mt-16 grid max-w-xl grid-cols-3 gap-5 border-t border-white/10 pt-7">
            {[['PQC', 'migration planning'], ['AI', 'security co-pilots'], ['Web3', 'engineering systems']].map(([value, label]) => (
              <div key={value}><p className="font-display text-2xl text-text-primary">{value}</p><p className="mt-1 text-[10px] uppercase tracking-[.14em] text-text-secondary">{label}</p></div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="relative border-y border-white/10 bg-background/65 py-3 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-6 gap-y-1 px-6 font-mono text-xs uppercase tracking-[.13em] text-text-secondary">
          <span>Post-quantum readiness</span><span className="text-accent-primary">◆</span><span>Crypto-agile systems</span><span className="text-accent-primary">◆</span><span>Human-reviewed AI security</span>
        </div>
      </div>
    </section>
  );
}
