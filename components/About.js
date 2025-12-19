export default function About() {
    return (
        <section id="about" className="py-24 relative">
            <div className="container">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    <div className="md:w-1/2">
                        <h2 className="section-title">Who <span className="text-gradient">We Are</span></h2>
                        <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                            Codesstellar is a forward-thinking IT consultancy bridging the gap between imagination and execution. We specialize in navigating the complexities of the digital frontier.
                        </p>
                        <p className="text-gray-400 mb-8 leading-relaxed">
                            From building immersive gaming worlds to architecting secure blockchain ecosystems, our team of visionaries and engineers is dedicated to pushing the boundaries of what is possible.
                        </p>

                        <div className="grid grid-cols-2 gap-8">
                            <div>
                                <h4 className="text-3xl font-bold text-white mb-2">50+</h4>
                                <p className="text-sm text-gray-500 uppercase tracking-widest">Projects Delivered</p>
                            </div>
                            <div>
                                <h4 className="text-3xl font-bold text-white mb-2">98%</h4>
                                <p className="text-sm text-gray-500 uppercase tracking-widest">Client Retention</p>
                            </div>
                        </div>
                    </div>

                    <div className="md:w-1/2 relative">
                        <div className="glass-panel p-8 relative z-10 aspect-square flex items-center justify-center">
                            {/* Abstract visual representation */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--primary)] to-[var(--secondary)] opacity-10 rounded-2xl"></div>
                            <div className="text-center">
                                <span className="block text-sm text-[var(--primary)] font-bold tracking-widest mb-4">OUR MISSION</span>
                                <h3 className="text-2xl font-bold leading-normal">
                                    "To decode complex challenges and recode them into stellar digital solutions."
                                </h3>
                            </div>
                        </div>
                        {/* Decoration */}
                        <div className="absolute -top-10 -right-10 w-full h-full border border-white/5 rounded-2xl -z-0"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
