import { motion } from 'framer-motion';

export default function BentoFeatures() {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-display mb-6">Aggregated Security. <br/><span className="text-accent-primary">Infinite Scale.</span></h2>
          <p className="text-xl text-text-secondary max-w-2xl">A unified architecture combining post-quantum cryptography with real-time AI threat detection, designed for the next generation of decentralized applications.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          
          {/* Large Feature - PQC */}
          <motion.div 
            className="md:col-span-2 bg-surface border border-border-subtle rounded-3xl p-8 relative overflow-hidden group"
            whileHover={{ y: -5 }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(198,155,36,0.1),transparent_50%)]"></div>
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-display mb-3">NIST-Approved PQC</h3>
                <p className="text-text-secondary max-w-md">Implementing CRYSTALS-Kyber and Dilithium algorithms to secure state transitions against Shor's algorithm.</p>
              </div>
              <div className="w-full h-32 border border-border-subtle rounded-xl bg-background/50 flex items-center justify-center overflow-hidden relative">
                {/* Abstract visual representation */}
                <div className="absolute w-[200%] h-[200%] bg-[conic-gradient(from_90deg_at_50%_50%,#040A07_0%,#1A5D42_50%,#040A07_100%)] animate-[spin_4s_linear_infinite] opacity-30"></div>
                <div className="absolute inset-1 bg-surface rounded-lg flex items-center justify-center">
                  <span className="font-mono text-accent-primary text-sm">f(x) = A·s + e mod q</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Small Feature - AI */}
          <motion.div 
            className="bg-surface border border-border-subtle rounded-3xl p-8 relative overflow-hidden group"
            whileHover={{ y: -5 }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(26,93,66,0.15),transparent_50%)]"></div>
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-display mb-3">AI Node Sentinel</h3>
                <p className="text-text-secondary">Transformer models running on-chain to predict and halt malicious smart contract executions.</p>
              </div>
              <div className="flex items-end gap-2 h-20">
                {[40, 70, 45, 90, 65, 100].map((h, i) => (
                  <motion.div 
                    key={i}
                    className="w-full bg-accent-secondary rounded-t-sm"
                    initial={{ height: "20%" }}
                    animate={{ height: `${h}%` }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", delay: i * 0.1 }}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Small Feature - ZK */}
          <motion.div 
            className="bg-surface border border-border-subtle rounded-3xl p-8 relative overflow-hidden group"
            whileHover={{ y: -5 }}
          >
             <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-display mb-3">Zero-Knowledge</h3>
                <p className="text-text-secondary">Quantum-safe STARKs for absolute privacy and scalability.</p>
              </div>
              <div className="w-12 h-12 rounded-full border-2 border-dashed border-accent-primary animate-[spin_10s_linear_infinite] flex items-center justify-center">
                <div className="w-4 h-4 bg-accent-primary rounded-full"></div>
              </div>
            </div>
          </motion.div>

          {/* Medium Feature - Terminal */}
          <motion.div 
            className="md:col-span-2 bg-[#0A0A0A] border border-border-subtle rounded-3xl p-6 relative overflow-hidden group font-mono text-sm"
            whileHover={{ y: -5 }}
          >
            <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-4">
              <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
              <span className="text-text-secondary ml-2">deploy.ts</span>
            </div>
            <div className="text-text-secondary">
              <p><span className="text-accent-primary">import</span> {'{'} PQCProvider {'}'} <span className="text-accent-primary">from</span> '@codesstellar/sdk';</p>
              <br/>
              <p><span className="text-accent-primary">const</span> network = <span className="text-accent-primary">new</span> PQCProvider({'{'}</p>
              <p className="pl-4">algorithm: <span className="text-green-400">'CRYSTALS-Dilithium'</span>,</p>
              <p className="pl-4">aiSentinel: <span className="text-accent-primary">true</span></p>
              <p>{'}'});</p>
              <br/>
              <p className="text-green-400/50">// Network secured against quantum decryption</p>
              <p><span className="text-accent-primary">await</span> network.connect();</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
