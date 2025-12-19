export default function Process() {
    const steps = [
        { number: "01", title: "Discovery", desc: "Understanding your vision and business goals." },
        { number: "02", title: "Strategy", desc: "Planning the roadmap and technical architecture." },
        { number: "03", title: "Design", desc: "Creating intuitive and engaging user experiences." },
        { number: "04", title: "Development", desc: "Building robust solutions with clean code." },
        { number: "05", title: "Testing", desc: "Rigorous quality assurance and optimization." },
        { number: "06", title: "Launch", desc: "Seamless deployment and post-launch support." },
    ];

    return (
        <section className="py-24 bg-black/20">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="section-title">Our <span className="text-gradient-primary">Process</span></h2>
                    <p className="section-subtitle">
                        A streamlined agile methodology designed to deliver excellence at every step.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="relative p-8 border-l border-white/10 hover:border-[var(--primary)] transition-colors duration-500">
                            <span className="text-6xl font-bold text-white/5 absolute -top-4 -left-2 font-outfit select-none">
                                {step.number}
                            </span>
                            <h3 className="text-xl font-bold mb-3 relative z-10">{step.title}</h3>
                            <p className="text-gray-400 relative z-10 leading-relaxed">
                                {step.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
