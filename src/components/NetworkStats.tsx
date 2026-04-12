import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function NetworkStats() {
  const [threats, setThreats] = useState(14205830);
  const [txCount, setTxCount] = useState(89240100);

  // Simulate live network activity
  useEffect(() => {
    const interval = setInterval(() => {
      setThreats(prev => prev + Math.floor(Math.random() * 3));
      setTxCount(prev => prev + Math.floor(Math.random() * 15));
    }, 800);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    {
      label: "Quantum Threats Mitigated",
      value: threats.toLocaleString(),
      color: "text-accent-primary"
    },
    {
      label: "Total Transactions",
      value: txCount.toLocaleString(),
      color: "text-text-primary"
    },
    {
      label: "Avg. Block Time",
      value: "400ms",
      color: "text-text-primary"
    },
    {
      label: "Active Validator Nodes",
      value: "1,204",
      color: "text-accent-secondary"
    }
  ];

  return (
    <section className="border-y border-border-subtle bg-surface/50 backdrop-blur-md relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border-subtle border-x border-border-subtle">
          {stats.map((stat, i) => (
            <div key={i} className="p-6 md:p-8 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-2">
                {i === 0 && <span className="w-2 h-2 rounded-full bg-accent-primary animate-pulse"></span>}
                <span className="text-xs font-mono text-text-secondary uppercase tracking-wider">{stat.label}</span>
              </div>
              <motion.div 
                key={stat.value}
                initial={{ opacity: 0.5, y: 2 }}
                animate={{ opacity: 1, y: 0 }}
                className={`text-2xl md:text-4xl font-display font-bold ${stat.color}`}
              >
                {stat.value}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
