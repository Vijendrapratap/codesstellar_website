import Link from 'next/link';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Cleaner, subtler background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#00f0ff20] via-transparent to-transparent opacity-40 pointer-events-none"></div>

            <div className="container relative z-10 text-center">
                <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-white/5 bg-white/5 backdrop-blur-sm animate-fade-in-up">
                    <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse"></span>
                    <span className="text-sm font-medium tracking-wide text-gray-300">Shaping the Future of Tech</span>
                </div>

                <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight tracking-tight">
                    Building Digital <br />
                    <span className="text-gradient">Universes</span>
                </h1>

                <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                    We engineer high-performance solutions in <span className="text-white">Blockchain</span>, <span className="text-white">AI</span>, and <span className="text-white">Mobile</span> to propel your business into the next era.
                </p>

                <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                    <Link href="#contact" className="px-10 py-4 rounded-full bg-white text-black font-bold hover:scale-105 transition-transform duration-300 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]">
                        Start a Project
                    </Link>
                    <Link href="#about" className="px-10 py-4 rounded-full border border-white/10 hover:bg-white/5 transition-colors backdrop-blur-sm group">
                        <span className="text-gray-300 group-hover:text-white transition-colors">Discover More</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
