"use client";

import React, { useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, ExternalLink, Quote, Sparkles, Layers, Code, Zap, ChevronRight } from 'lucide-react';
import { SERVICES } from '@/lib/constants';
import { motion } from 'framer-motion';

const ServiceDetail: React.FC = () => {
    const params = useParams();
    const id = params?.id as string;
    const router = useRouter();
    const service = SERVICES.find(s => s.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!service) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-stellar-dark text-white">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Service Not Found</h2>
                    <button onClick={() => router.push('/')} className="text-stellar-gold hover:underline">Return Home</button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-24 pb-20 bg-stellar-dark text-white overflow-hidden">

            {/* Background Ambience */}
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
                <div className="absolute top-[10%] right-[-10%] w-[600px] h-[600px] bg-stellar-gold/5 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] bg-stellar-green/10 rounded-full blur-[100px]"></div>
            </div>

            {/* ----------------- HEADER SECTION ----------------- */}
            <div className="relative border-b border-white/5 pb-24 pt-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                    <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white mb-12 transition-colors group">
                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center mr-3 group-hover:bg-stellar-gold group-hover:text-stellar-green transition-colors border border-white/5">
                            <ArrowLeft size={14} />
                        </div>
                        <span className="text-sm font-medium tracking-wide uppercase">Back to Mission Control</span>
                    </Link>

                    <div className="flex flex-col lg:flex-row items-start lg:items-center gap-10">
                        {/* Animated Icon Container */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ duration: 0.8, type: 'spring' }}
                            className="relative w-24 h-24 sm:w-32 sm:h-32 flex items-center justify-center rounded-[2rem] bg-gradient-to-br from-stellar-green/20 to-black border border-white/10 shadow-[0_0_50px_rgba(15,57,43,0.4)] backdrop-blur-md"
                        >
                            <div className="absolute inset-0 rounded-[2rem] bg-stellar-gold/10 blur-xl"></div>
                            <service.icon className="w-12 h-12 sm:w-16 sm:h-16 text-stellar-gold relative z-10" />
                        </motion.div>

                        <div className="max-w-3xl">
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight"
                            >
                                {service.title}
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light"
                            >
                                {service.fullDescription}
                            </motion.p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

                    {/* ----------------- MAIN CONTENT (Left Col) ----------------- */}
                    <div className="lg:col-span-8 space-y-24">

                        {/* SUB-SERVICES GRID */}
                        {service.subServices && service.subServices.length > 0 && (
                            <section>
                                <div className="flex items-center mb-10">
                                    <div className="w-1 h-8 bg-stellar-gold mr-4 rounded-full"></div>
                                    <h2 className="text-3xl font-bold text-white tracking-tight">Core Capabilities</h2>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-6">
                                    {service.subServices.map((sub, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: idx * 0.1 }}
                                            className="group p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-stellar-gold/30 transition-all duration-500 relative overflow-hidden"
                                        >
                                            {/* Hover Gradient */}
                                            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-stellar-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                            <div className="relative z-10">
                                                {sub.icon && (
                                                    <div className="mb-6 p-3 bg-stellar-gold/10 w-fit rounded-xl text-stellar-gold group-hover:scale-110 transition-transform duration-300">
                                                        <sub.icon size={24} />
                                                    </div>
                                                )}
                                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-stellar-gold transition-colors">{sub.title}</h3>
                                                <p className="text-gray-400 text-sm leading-relaxed">{sub.description}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* PROCESS TIMELINE */}
                        {service.process && service.process.length > 0 && (
                            <section>
                                <div className="flex items-center mb-12">
                                    <div className="w-1 h-8 bg-stellar-gold mr-4 rounded-full"></div>
                                    <h2 className="text-3xl font-bold text-white tracking-tight">Mission Trajectory</h2>
                                </div>

                                <div className="relative ml-4 md:ml-6">
                                    {/* Vertical Line */}
                                    <div className="absolute left-0 top-2 bottom-0 w-px bg-gradient-to-b from-stellar-gold via-white/20 to-transparent"></div>

                                    <div className="space-y-12">
                                        {service.process.map((step, idx) => (
                                            <motion.div
                                                key={idx}
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: idx * 0.1 }}
                                                className="relative pl-12 md:pl-16 group"
                                            >
                                                {/* Dot */}
                                                <div className="absolute -left-[5px] top-1.5 w-[11px] h-[11px] rounded-full bg-stellar-dark border-2 border-stellar-gold group-hover:bg-stellar-gold transition-colors duration-300 shadow-[0_0_10px_rgba(184,134,11,0.5)]"></div>

                                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-stellar-gold transition-colors">{step.title}</h3>
                                                <p className="text-gray-400 leading-relaxed max-w-xl">{step.description}</p>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </section>
                        )}

                        {/* PROJECTS SHOWCASE */}
                        <section>
                            <div className="flex items-center mb-12">
                                <div className="w-1 h-8 bg-stellar-gold mr-4 rounded-full"></div>
                                <h2 className="text-3xl font-bold text-white tracking-tight">Featured Deployments</h2>
                            </div>

                            <div className="space-y-16">
                                {service.projects.map((project, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 40 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        className="group relative"
                                    >
                                        <div className="relative aspect-[16/9] overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
                                            <div className="absolute inset-0 bg-stellar-dark/20 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-105"
                                            />

                                            {/* Overlay Content */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 group-hover:opacity-80 transition-opacity z-20 flex flex-col justify-end p-8 md:p-12">
                                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                                    <div className="flex gap-2 mb-4">
                                                        {project.tags.map(tag => (
                                                            <span key={tag} className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest bg-white/20 backdrop-blur-md rounded text-white">
                                                                {tag}
                                                            </span>
                                                        ))}
                                                    </div>
                                                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">{project.title}</h3>
                                                    <p className="text-gray-300 max-w-xl line-clamp-2 md:line-clamp-none mb-6">{project.description}</p>

                                                    <button className="flex items-center text-stellar-gold font-bold uppercase tracking-widest text-sm hover:text-white transition-colors">
                                                        View Case Study <ArrowLeft className="ml-2 w-4 h-4 rotate-180" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </section>

                    </div>

                    {/* ----------------- SIDEBAR (Right Col) ----------------- */}
                    <div className="lg:col-span-4 space-y-12">

                        {/* Tech Stack */}
                        {service.technologies && service.technologies.length > 0 && (
                            <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 backdrop-blur-sm">
                                <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider flex items-center">
                                    <Code className="w-5 h-5 text-stellar-gold mr-3" /> Tech Stack
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {service.technologies.map((tech, idx) => (
                                        <span key={idx} className="px-4 py-2 bg-stellar-green/10 border border-stellar-green/20 text-gray-300 rounded-lg text-sm font-medium hover:bg-stellar-gold/20 hover:border-stellar-gold/40 hover:text-white transition-all cursor-default">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Testimonials (Vertical Scroll/Stack) */}
                        <div className="space-y-6">
                            <h3 className="text-lg font-bold text-white uppercase tracking-wider flex items-center px-2">
                                <Quote className="w-5 h-5 text-stellar-gold mr-3" /> Client Intel
                            </h3>
                            {service.testimonials.map((testi, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="bg-gradient-to-br from-white/5 to-transparent p-6 rounded-2xl border border-white/5 relative"
                                >
                                    <p className="text-gray-300 italic text-sm mb-6 leading-relaxed">"{testi.quote}"</p>
                                    <div className="flex items-center">
                                        <img src={testi.avatar} alt={testi.name} className="w-10 h-10 rounded-full mr-3 object-cover border border-white/20" />
                                        <div>
                                            <h4 className="font-bold text-white text-sm">{testi.name}</h4>
                                            <p className="text-gray-500 text-xs uppercase tracking-wider">{testi.role}, {testi.company}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* CTA Box */}
                        <div className="sticky top-32">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="relative overflow-hidden bg-stellar-gold rounded-3xl p-8 text-stellar-dark"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-2xl -mr-10 -mt-10"></div>

                                <div className="relative z-10">
                                    <h3 className="text-2xl font-black mb-4 uppercase leading-none">Ready to <br />Deploy?</h3>
                                    <p className="text-stellar-dark/80 font-medium mb-8 text-sm">
                                        Let's engineer your {service.title} solution. Our agents are standing by.
                                    </p>

                                    <Link href="/contact" className="w-full bg-black text-white font-bold py-4 rounded-xl hover:bg-white hover:text-black transition-all flex items-center justify-center shadow-lg transform hover:-translate-y-1">
                                        Initialize Contact
                                    </Link>

                                    <div className="mt-6 pt-6 border-t border-black/10">
                                        <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider opacity-70">
                                            <span>Avg Response</span>
                                            <span>&lt; 2 Hours</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;
