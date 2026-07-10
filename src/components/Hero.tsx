'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerformanceMonitor, Line } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';

import Link from 'next/link';

function QuantumLattice() {
  const groupRef = useRef<THREE.Group>(null);
  const instancedMeshRef = useRef<THREE.InstancedMesh>(null);
  
  const nodeCount = 120;
  const dummy = useMemo(() => new THREE.Object3D(), []);
  
  const nodes = useMemo(() => {
    const temp: { position: THREE.Vector3; phase: number }[] = [];
    for (let i = 0; i < nodeCount; i++) {
      const x = (Math.random() - 0.5) * 10;
      const y = (Math.random() - 0.5) * 10;
      const z = (Math.random() - 0.5) * 10;
      temp.push({ position: new THREE.Vector3(x, y, z), phase: i * 0.3 });
    }
    return temp;
  }, []);

  const lines = useMemo(() => {
    const tempLines: [THREE.Vector3, THREE.Vector3][] = [];
    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        if (nodes[i].position.distanceTo(nodes[j].position) < 2.5) {
          tempLines.push([nodes[i].position, nodes[j].position]);
        }
      }
    }
    return tempLines;
  }, [nodes]);

  useFrame(({ clock, pointer }) => {
    if (!instancedMeshRef.current || !groupRef.current) return;
    
    const time = clock.getElapsedTime();
    
    // Animate nodes
    nodes.forEach((node, i) => {
      dummy.position.copy(node.position);
      dummy.position.y += Math.sin(time + node.phase) * 0.1;
      dummy.updateMatrix();
      instancedMeshRef.current!.setMatrixAt(i, dummy.matrix);
      
      // Color lerp
      const color = new THREE.Color();
      const lerpFactor = (dummy.position.y + 5) / 10; // Normalize y to 0-1
      color.lerpColors(new THREE.Color('#C69B24'), new THREE.Color('#1A5D42'), lerpFactor);
      instancedMeshRef.current!.setColorAt(i, color);
    });
    
    instancedMeshRef.current.instanceMatrix.needsUpdate = true;
    if (instancedMeshRef.current.instanceColor) {
      instancedMeshRef.current.instanceColor.needsUpdate = true;
    }

    // Parallax
    groupRef.current.rotation.y += (pointer.x * 0.5 - groupRef.current.rotation.y) * 0.05;
    groupRef.current.rotation.x += (-pointer.y * 0.5 - groupRef.current.rotation.x) * 0.05;
  });

  return (
    <group ref={groupRef}>
      <instancedMesh ref={instancedMeshRef} args={[undefined, undefined, nodeCount]}>
        <icosahedronGeometry args={[0.04, 0]} />
        <meshBasicMaterial toneMapped={false} />
      </instancedMesh>
      
      {lines.map((line, i) => (
        <Line 
          key={i}
          points={line as [THREE.Vector3, THREE.Vector3]}
          color="#C69B24"
          opacity={0.15}
          transparent
          lineWidth={1}
        />
      ))}

      {/* Central Node */}
      <mesh>
        <icosahedronGeometry args={[0.25, 1]} />
        <meshBasicMaterial color="#C69B24" wireframe transparent opacity={0.5} />
      </mesh>
    </group>
  );
}

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[700px] flex flex-col overflow-hidden hero-gradient">
      <div className="flex-1 flex flex-col lg:flex-row max-w-7xl w-full mx-auto px-6 pt-24 pb-12">
        
        {/* Left Content */}
        <div className="w-full lg:w-[55%] flex flex-col justify-center z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-accent-primary animate-pulse" />
            <span className="text-[13px] font-mono text-accent-primary uppercase tracking-[0.2em]">
              Quantum-ready blockchain engineering
            </span>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl font-display leading-[1.1] mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <div className="overflow-hidden"><motion.span initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 0.6, delay: 1.5 }} className="block">Build for the chain</motion.span></div>
            <div className="overflow-hidden"><motion.span initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 0.6, delay: 1.7 }} className="block text-gradient-primary">after quantum.</motion.span></div>
            <div className="overflow-hidden"><motion.span initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 0.6, delay: 1.9 }} className="block">Stay agile today.</motion.span></div>
          </motion.h1>

          <motion.p 
            className="text-lg text-text-secondary max-w-md mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.1 }}
          >
            Codesstellar designs crypto-agile blockchain systems, post-quantum migration paths, and AI-assisted security operations for teams building long-lived digital infrastructure.
          </motion.p>

          <motion.div 
            className="flex flex-wrap gap-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.3 }}
          >
            <Link href="/build" className="px-8 py-4 bg-accent-primary text-background font-medium rounded-full hover:bg-opacity-90 transition-all" data-hover="EXPLORE">
              Explore capabilities
            </Link>
            <Link href="/case-studies" className="px-8 py-4 border border-accent-primary text-text-primary font-medium rounded-full hover:bg-accent-primary hover:text-background transition-all" data-hover="CASE STUDIES">
              See our approach
            </Link>
          </motion.div>

          <motion.div 
            className="grid grid-cols-3 gap-8 border-t border-border-subtle pt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 2.6 }}
          >
            <div>
              <div className="text-3xl font-display font-bold text-text-primary mb-1">PQC</div>
              <div className="text-xs text-text-secondary uppercase tracking-wider">migration planning</div>
            </div>
            <div>
              <div className="text-3xl font-display font-bold text-text-primary mb-1">AI</div>
              <div className="text-xs text-text-secondary uppercase tracking-wider">security co-pilots</div>
            </div>
            <div>
              <div className="text-3xl font-display font-bold text-text-primary mb-1">Web3</div>
              <div className="text-xs text-text-secondary uppercase tracking-wider">engineering systems</div>
            </div>
          </motion.div>
        </div>

        {/* Right Canvas */}
        <div className="absolute inset-0 lg:relative lg:w-[55%] lg:h-full opacity-30 lg:opacity-100 pointer-events-none lg:pointer-events-auto">
          <Canvas camera={{ position: [0, 0, 6], fov: 40 }} dpr={[1, 1.5]} frameloop="always" gl={{ antialias: false }}>
            <PerformanceMonitor>
              <QuantumLattice />
            </PerformanceMonitor>
          </Canvas>
        </div>
      </div>

      {/* Scrolling Ticker */}
      <div className="w-full border-t border-b border-border-subtle bg-surface/50 backdrop-blur-sm py-3 overflow-hidden group">
        <div className="flex whitespace-nowrap animate-[ticker_40s_linear_infinite] group-hover:[animation-play-state:paused]">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 px-4 text-sm font-mono text-text-secondary">
              <span>Post-Quantum Readiness</span>
              <span className="text-accent-primary">◆</span>
              <span>NIST PQC Standards 2024</span>
              <span className="text-accent-primary">◆</span>
              <span>AI-Assisted Security</span>
              <span className="text-accent-primary">◆</span>
              <span>Protocol Engineering</span>
              <span className="text-accent-primary">◆</span>
              <span>Web3 Architecture</span>
              <span className="text-accent-primary">◆</span>
              <span>Crypto-Agile Systems</span>
              <span className="text-accent-primary">◆</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
