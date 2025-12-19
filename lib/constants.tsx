import {
  Cpu,
  Gamepad2,
  Globe,
  Smartphone,
  Blocks,
  Bot,
  Rocket,
  Shield,
  Code,
  Zap,
  Layers,
  Server,
  Cloud,
  Lock,
  Eye,
  Terminal,
  Sparkles
} from 'lucide-react';
import { ServiceData } from './types';

export const COMPANY_NAME = "Codesstellar";

export const SERVICES: ServiceData[] = [
  {
    id: "software-development",
    title: "Software Engineering & MVP",
    shortDescription: "Architecting scalable digital ecosystems and rapid MVPs for the next generation of enterprise.",
    fullDescription: "In the digital expanse, speed and stability are your oxygen. We specialize in building robust, cloud-native software architectures that scale effortlessly. For startups, our 'MVP to Unicorn' pipeline focuses on rapid validation and iterative growth. For enterprises, we modernize legacy monoliths into agile microservices, ensuring your infrastructure is ready for the quantum age.",
    icon: Code,
    features: [
      "Rapid MVP Prototyping",
      "Microservices Architecture",
      "Cloud-Native Solutions",
      "Legacy Modernization",
      "API-First Ecosystems"
    ],
    subServices: [
      {
        title: "MVP Development",
        description: "From concept to launchpad in weeks, not months. We prioritize core features to validate market fit, minimizing burn rate while maximizing user feedback loops.",
        icon: Rocket
      },
      {
        title: "Enterprise SaaS",
        description: "Multi-tenant, high-availability platforms designed for global scale. Includes advanced billing engines, RBAC security, and automated onboarding.",
        icon: Server
      },
      {
        title: "Cloud & DevOps",
        description: "Serverless infrastructures on AWS/Azure that auto-scale. CI/CD pipelines ensuring code quality and zero-downtime deployments.",
        icon: Cloud
      }
    ],
    process: [
      { title: "Blueprint Discovery", description: "We deep-dive into your business logic to architect a solution that solves real problems, not just symptoms." },
      { title: "Agile Development", description: "Two-week sprints with transparent deliverables. You see the product evolve in real-time." },
      { title: "Rigorous Testing", description: "Automated unit, integration, and load testing to ensure your software survives the harsh vacuum of the internet." },
      { title: "Launch & Orbit", description: "Seamless deployment strategies (Blue/Green, Canary) and 24/7 monitoring." }
    ],
    technologies: ["React", "Node.js", "Python", "Go", "Docker", "Kubernetes", "AWS Lambda", "PostgreSQL"],
    projects: [
      {
        title: "Nebula FinTech Core",
        description: "A high-frequency trading dashboard processing 50k transactions per second with sub-millisecond latency.",
        image: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?q=80&w=1600&auto=format&fit=crop",
        tags: ["Go", "gRPC", "React"]
      },
      {
        title: "Aero Logistics Platform",
        description: "AI-driven supply chain management system optimizing routes for a global shipping fleet.",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1600&auto=format&fit=crop",
        tags: ["Python", "TensorFlow", "AWS"]
      }
    ],
    testimonials: [
      {
        name: "James Sterling",
        role: "CTO",
        company: "Vanguard Systems",
        quote: "Codesstellar didn't just write code; they re-engineered our entire workflow. Our efficiency improved by 300%.",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
      }
    ]
  },
  {
    id: "mobile-app",
    title: "Mobile App Development",
    shortDescription: "Native iOS & Android experiences crafted for the human touch.",
    fullDescription: "The smartphone is the extension of the human mind. We craft mobile experiences that feel natural, fluid, and powerful. Whether it's a high-performance native iOS app using SwiftUI or a cross-platform Flutter solution for rapid market penetration, we ensure 60fps performance and pixel-perfect design across all devices.",
    icon: Smartphone,
    features: [
      "Native iOS (Swift/SwiftUI)",
      "Native Android (Kotlin)",
      "Cross-Platform (Flutter)",
      "IoT & Wearable Integration",
      "Offline-First Data Sync"
    ],
    subServices: [
      {
        title: "iOS Engineering",
        description: "Leveraging the full power of the Apple ecosystem. CoreML for on-device AI, ARKit for augmented reality, and secure Enclave integration.",
        icon: Smartphone
      },
      {
        title: "Android Ecosystem",
        description: "Building resilient apps for the fragmented Android market. Optimized for battery life and performance across thousands of device types.",
        icon: Bot
      },
      {
        title: "Flutter/React Native",
        description: "Write once, dominate everywhere. Ideal for startups needing to hit both App Stores simultaneously without compromising on feel.",
        icon: Layers
      }
    ],
    process: [
      { title: "UX/UI Strategy", description: "Wireframing user journeys that minimize friction and maximize retention." },
      { title: "Native Development", description: "Writing clean, modular code following Clean Architecture principles." },
      { title: "Beta Testing", description: "Distribution via TestFlight and Play Console for real-world user feedback." },
      { title: "Store Optimization", description: "Handling the complex submission process and ASO (App Store Optimization)." }
    ],
    technologies: ["Swift", "SwiftUI", "Kotlin", "Jetpack Compose", "Flutter", "Dart", "Firebase", "GraphQL"],
    projects: [
      {
        title: "Zenith Health",
        description: "A holistic wellness tracker integrating with Apple HealthKit and Google Fit for real-time biometrics.",
        image: "https://images.unsplash.com/photo-1576091160550-217358c7db81?q=80&w=1600&auto=format&fit=crop",
        tags: ["SwiftUI", "HealthKit", "Node.js"]
      },
      {
        title: "Urban Pulse",
        description: "Hyper-local social network connecting neighbors for events and safety alerts.",
        image: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?q=80&w=1600&auto=format&fit=crop",
        tags: ["Flutter", "Firebase", "Google Maps"]
      }
    ],
    testimonials: [
      {
        name: "Elena Rodriguez",
        role: "Product Owner",
        company: "StartUp Inc",
        quote: "We went from concept to App Store featured list in 4 months. The animations are buttery smooth.",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
      }
    ]
  },
  {
    id: "blockchain",
    title: "Blockchain & Post-Quantum",
    shortDescription: "Secure, decentralized architectures for the Web3 economy.",
    fullDescription: "We build the immutable ledgers of tomorrow. From DeFi protocols handling millions in TVL to NFT marketplaces and private enterprise blockchains. Crucially, we are pioneers in Post-Quantum Cryptography (PQC), ensuring your blockchain assets remain secure even when quantum computing breaks current encryption standards.",
    icon: Blocks,
    features: [
      "Post-Quantum Cryptography",
      "Smart Contract Auditing",
      "DeFi Protocol Engineering",
      "NFT Ecosystems",
      "Layer 2 Scaling Solutions"
    ],
    subServices: [
      {
        title: "Post-Quantum Security",
        description: "Implementing Lattice-based cryptography and hash-based signatures to future-proof your keys against quantum attacks.",
        icon: Shield
      },
      {
        title: "DeFi & Exchanges",
        description: "Building Decentralized Exchanges (DEX) with AMM logic, staking pools, and yield farming protocols.",
        icon: Zap
      },
      {
        title: "NFT Marketplaces",
        description: "Custom platforms for minting, trading, and auctioning digital assets, supporting ERC-721/1155 and fractional ownership.",
        icon: Layers
      },
      {
        title: "Private Blockchains",
        description: "Permissioned networks using Hyperledger or Corda for supply chain transparency and secure inter-bank settlement.",
        icon: Lock
      }
    ],
    process: [
      { title: "Tokenomics Design", description: "Designing a sustainable economic model for your token or protocol." },
      { title: "Smart Contract Dev", description: "Writing gas-optimized Solidity/Rust code with security-first mindset." },
      { title: "Audit & Verify", description: " rigorous third-party auditing and formal verification to prevent exploits." },
      { title: "Mainnet Launch", description: "Orchestrating the genesis block and node deployment." }
    ],
    technologies: ["Solidity", "Rust", "Ethereum", "Solana", "Hyperledger", "Web3.js", "IPFS", "Hardhat"],
    projects: [
      {
        title: "Aegis Custody",
        description: "A multi-sig institutional crypto wallet with post-quantum security layers.",
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1600&auto=format&fit=crop",
        tags: ["Rust", "PQC", "Security"]
      },
      {
        title: "EtherMarket",
        description: "A zero-fee NFT marketplace aggregation layer for high-volume trading.",
        image: "https://images.unsplash.com/photo-1620321023374-d1a68fddadb3?q=80&w=1600&auto=format&fit=crop",
        tags: ["Solidity", "Next.js", "Graph Protocol"]
      }
    ],
    testimonials: [
      {
        name: "David Chen",
        role: "Founder",
        company: "Blockify DAO",
        quote: "The security audit passed with flying colors. Codesstellar understands the nuances of EVM bytecode like no one else.",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
      }
    ]
  },
  {
    id: "ai-development",
    title: "AI & Autonomous Agents",
    shortDescription: "Cognitive computing that automates complex decision making.",
    fullDescription: "We move beyond simple chatbots. We engineer Autonomous AI Agents capable of reasoning, planning, and executing complex workflows. By fine-tuning Large Language Models (LLMs) on your proprietary data, we create intelligent systems that predict trends, generate content, and automate operations with frightening accuracy.",
    icon: Bot,
    features: [
      "Autonomous Agent Frameworks",
      "LLM Fine-Tuning & RAG",
      "Computer Vision",
      "Predictive Analytics",
      "Generative AI Content"
    ],
    subServices: [
      {
        title: "Autonomous Agents",
        description: "Self-governing AI entities that can browse the web, use APIs, and complete multi-step tasks (e.g., market research, booking) without human intervention.",
        icon: Bot
      },
      {
        title: "Machine Learning Ops",
        description: "End-to-end ML pipelines. From data vectorization to model training and deployment on edge devices.",
        icon: Cpu
      },
      {
        title: "Generative AI",
        description: "Custom models for generating marketing copy, code, or photorealistic images tailored to your brand voice.",
        icon: Sparkles
      }
    ],
    process: [
      { title: "Data Vectorization", description: "Cleaning and embedding your data into vector databases for semantic search." },
      { title: "Model Training", description: "Fine-tuning foundational models (Llama 3, GPT-4) on your specific domain knowledge." },
      { title: "Agent Integration", description: "Building the 'tool use' capabilities so the AI can interact with your existing software." },
      { title: "Continuous Learning", description: "Implementing feedback loops so the model gets smarter with every interaction." }
    ],
    technologies: ["Python", "PyTorch", "TensorFlow", "LangChain", "OpenAI API", "Pinecone", "Hugging Face"],
    projects: [
      {
        title: "MarketMind Agent",
        description: "An autonomous agent that analyzes stock sentiment and executes trades based on risk parameters.",
        image: "https://images.unsplash.com/photo-1611974765270-ca12586343bb?q=80&w=1600&auto=format&fit=crop",
        tags: ["Python", "LangChain", "Finance"]
      },
      {
        title: "VisionGuard",
        description: "Computer vision system for manufacturing quality control, detecting defects with 99.9% accuracy.",
        image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=1600&auto=format&fit=crop",
        tags: ["TensorFlow", "IoT", "Edge AI"]
      }
    ],
    testimonials: [
      {
        name: "Sarah Jenkins",
        role: "CMO",
        company: "RetailFlow",
        quote: "Our customer support is now 90% automated, yet our satisfaction scores went up. The AI feels incredibly human.",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop"
      }
    ]
  },
  {
    id: "gaming",
    title: "Gaming & Metaverse",
    shortDescription: "Immersive 3D worlds and blockchain-integrated gameplay.",
    fullDescription: "We build worlds where players live, trade, and conquer. Our gaming division combines AAA visual fidelity with hardcore engineering. From Unity-based mobile hits to Unreal Engine 5 hyper-realistic simulations, we integrate blockchain for true asset ownership (Play-to-Earn) and create persistent Metaverse environments.",
    icon: Gamepad2,
    features: [
      "Unity & Unreal Engine 5",
      "Web3 / Play-to-Earn",
      "Metaverse Land Development",
      "AR/VR Experiences",
      "Multiplayer Networking"
    ],
    subServices: [
      {
        title: "Game Development",
        description: "Full-cycle production. Concept art, 3D modeling (Blender/Maya), level design, and rigorous physics programming.",
        icon: Gamepad2
      },
      {
        title: "Metaverse Spaces",
        description: "Building decentralized virtual HQs, galleries, and event spaces where users interact via avatars.",
        icon: Globe
      },
      {
        title: "AR/VR Immersion",
        description: "Training simulations and marketing experiences using headsets (Quest 3, Vision Pro) or mobile AR.",
        icon: Eye
      }
    ],
    process: [
      { title: "Concept Art", description: "Visualizing characters and environments. Establishing the art style and mood." },
      { title: "Core Loop Dev", description: "Prototyping the main gameplay mechanics to ensure it's actually fun." },
      { title: "Asset Production", description: "Creating high-fidelity 3D models, textures, and animations." },
      { title: "Polish & Optimize", description: "Shader optimization and VFX to ensure high frame rates on target hardware." }
    ],
    technologies: ["Unity", "Unreal Engine 5", "C#", "C++", "Blender", "Photon", "WebGL"],
    projects: [
      {
        title: "Star Atlas Drifter",
        description: "A multiplayer space exploration game with NFT ship ownership and real economic systems.",
        image: "https://images.unsplash.com/photo-1614726365723-49cfae973fb3?q=80&w=1600&auto=format&fit=crop",
        tags: ["Unreal Engine 5", "Web3", "Multiplayer"]
      },
      {
        title: "Virtual showroom",
        description: "Interactive VR experience allowing customers to customize luxury vehicles in real-time.",
        image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=1600&auto=format&fit=crop",
        tags: ["Unity", "VR", "Oculus"]
      }
    ],
    testimonials: [
      {
        name: "Marcus Thorne",
        role: "Director",
        company: "GameStudio X",
        quote: "Visually stunning. The networking code holds up even with 100+ players in the same lobby.",
        avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop"
      }
    ]
  }
];
