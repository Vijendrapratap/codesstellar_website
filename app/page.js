import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import ServiceCard from '@/components/ServiceCard';
import Industries from '@/components/Industries';
import Process from '@/components/Process';
import Footer from '@/components/Footer';

export default function Home() {
  const services = [
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications designed for user engagement and performance. iOS and Android expertise.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Blockchain Solutions",
      description: "Secure and scalable blockchain development, smart contracts, and decentralized applications (dApps) for the future of finance and data.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      title: "Artificial Intelligence",
      description: "Advanced AI and Machine Learning solutions to automate processes, gain insights, and create intelligent adaptive systems.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Gaming & Metaverse",
      description: "Immersive gaming experiences and metaverse development using cutting-edge engines and 3D technologies.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
      )
    }
  ];

  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />

      {/* Services Section */}
      <section id="services" className="py-24 relative">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title">Our <span className="text-gradient">Expertise</span></h2>
            <p className="section-subtitle">
              Comprehensive technology solutions tailored to drive innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>

      <Industries />
      <Process />

      {/* Technologies Section (Simplified) */}
      <section id="technologies" className="py-20 border-y border-white/5 bg-black/40">
        <div className="container text-center">
          <p className="text-sm font-bold tracking-widest text-gray-500 mb-8 uppercase">Powering Next-Gen Solutions With</p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Tech Badges */}
            {['React', 'Next.js', 'Node.js', 'Python', 'Solidity', 'Unity', 'Unreal Engine', 'TensorFlow', 'AWS', 'Google Cloud'].map((tech) => (
              <span key={tech} className="text-lg md:text-xl font-bold text-white px-4">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative overflow-hidden">
        <div className="container">
          <div className="glass-panel p-12 md:p-20 text-center max-w-5xl mx-auto relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--primary)] rounded-full mix-blend-screen filter blur-[100px] opacity-10 pointer-events-none"></div>

            <h2 className="section-title mb-6">Ready to <span className="text-gradient-primary">Launch</span>?</h2>
            <p className="text-gray-300 mb-10 max-w-2xl mx-auto text-lg">
              Partner with Codesstellar to transform your vision into reality. We are ready to build the extraordinary.
            </p>
            <button className="px-12 py-5 rounded-full bg-white text-black font-bold text-lg hover:scale-105 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)]">
              Get in Touch
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
