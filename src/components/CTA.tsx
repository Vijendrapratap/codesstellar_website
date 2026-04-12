import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function BackgroundShapes() {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.05;
      groupRef.current.rotation.x = clock.getElapsedTime() * 0.02;
    }
  });

  return (
    <group ref={groupRef}>
      {[...Array(5)].map((_, i) => (
        <mesh 
          key={i} 
          position={[
            (Math.random() - 0.5) * 10, 
            (Math.random() - 0.5) * 10, 
            (Math.random() - 0.5) * 10
          ]}
          rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]}
        >
          <octahedronGeometry args={[1 + Math.random() * 2, 0]} />
          <meshBasicMaterial color="#1A5D42" wireframe transparent opacity={0.15} />
        </mesh>
      ))}
    </group>
  );
}

export default function CTA() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-background py-24">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(26,93,66,0.25),transparent_60%)] animate-[pulse_8s_ease-in-out_infinite]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(198,155,36,0.15),transparent_50%)] animate-[pulse_10s_ease-in-out_infinite_reverse]"></div>
      </div>

      {/* 3D Background */}
      <div className="absolute inset-0 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 10], fov: 50 }} frameloop="demand">
          <BackgroundShapes />
        </Canvas>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 w-full">
        <div className="text-center mb-16">
          <div className="text-sm font-mono text-accent-primary tracking-[0.2em] mb-6 uppercase">Let's Build</div>
          <h2 className="text-5xl md:text-7xl font-display mb-8">Quantum-safe systems don't build themselves.</h2>
        </div>

        <div className="flex flex-col md:flex-row gap-12 md:gap-24 relative">
          {/* Divider */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border-subtle to-transparent -translate-x-1/2"></div>

          {/* Path A */}
          <div className="flex-1 flex flex-col">
            <h3 className="text-2xl font-display mb-8">I have a project</h3>
            <form className="flex flex-col gap-6">
              <input 
                type="text" 
                placeholder="Name" 
                className="w-full bg-surface/50 border border-border-subtle rounded-lg px-4 py-3 text-text-primary placeholder:text-text-secondary focus:outline-none focus:border-accent-primary transition-colors"
              />
              <input 
                type="text" 
                placeholder="Company" 
                className="w-full bg-surface/50 border border-border-subtle rounded-lg px-4 py-3 text-text-primary placeholder:text-text-secondary focus:outline-none focus:border-accent-primary transition-colors"
              />
              <textarea 
                placeholder="Tell us about your project" 
                rows={4}
                className="w-full bg-surface/50 border border-border-subtle rounded-lg px-4 py-3 text-text-primary placeholder:text-text-secondary focus:outline-none focus:border-accent-primary transition-colors resize-none"
              ></textarea>
              <button 
                type="button"
                className="w-full py-4 bg-accent-primary text-background font-medium rounded-lg hover:bg-opacity-90 transition-all glow-effect mt-2"
                data-hover="SUBMIT"
              >
                Start the Conversation
              </button>
            </form>
          </div>

          {/* Path B */}
          <div className="flex-1 flex flex-col">
            <h3 className="text-2xl font-display mb-8">I want to explore</h3>
            <div className="flex-1 flex flex-col justify-center items-center bg-surface/30 border border-border-subtle rounded-xl p-8 text-center border-dashed">
              <div className="w-16 h-16 rounded-full bg-accent-secondary/10 flex items-center justify-center mb-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A5D42" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
              </div>
              <h4 className="text-xl font-display mb-4">Book a 30-min architecture call</h4>
              <p className="text-text-secondary mb-8">Discuss your current infrastructure and quantum migration timeline with our lead engineers.</p>
              <button 
                className="px-8 py-3 border border-accent-secondary text-text-primary font-medium rounded-full hover:bg-accent-secondary hover:text-background transition-all"
                data-hover="SCHEDULE"
              >
                View Calendar
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
