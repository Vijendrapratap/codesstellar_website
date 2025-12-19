export default function ServiceCard({ title, description, icon }) {
    return (
        <div className="glass-panel p-8 hover:transform hover:-translate-y-2 transition-all duration-300 group cursor-pointer relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                {/* Abstract Shape or large icon */}
                <div className="w-24 h-24 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] rounded-full blur-2xl"></div>
            </div>

            <div className="relative z-10">
                <div className="mb-6 inline-flex p-3 rounded-lg bg-white/5 border border-white/10 text-[var(--primary)] group-hover:text-white group-hover:bg-[var(--primary)] transition-colors">
                    {icon}
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-[var(--primary)] transition-colors">{title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                    {description}
                </p>
            </div>
        </div>
    );
}
