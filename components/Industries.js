export default function Industries() {
    const industries = [
        { name: "Healthcare", icon: "🏥" },
        { name: "FinTech", icon: "💳" },
        { name: "E-Commerce", icon: "🛍️" },
        { name: "Gaming", icon: "🎮" },
        { name: "Real Estate", icon: "🏢" },
        { name: "Education", icon: "🎓" },
        { name: "Travel", icon: "✈️" },
        { name: "Logistics", icon: "🚚" },
    ];

    return (
        <section className="py-24 relative overflow-hidden">
            <div className="container text-center">
                <h2 className="section-title">Transforming <span className="text-gradient-primary">Industries</span></h2>
                <p className="section-subtitle">
                    We bring digital innovation to diverse sectors, creating value and driving growth through tailored solutions.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {industries.map((item, index) => (
                        <div key={index} className="glass-panel p-6 flex flex-col items-center justify-center gap-3 hover:bg-white/5 transition-colors group">
                            <span className="text-4xl filter grayscale group-hover:grayscale-0 transition-all duration-300">{item.icon}</span>
                            <span className="font-medium text-lg text-gray-300 group-hover:text-white">{item.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
