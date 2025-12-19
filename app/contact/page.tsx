"use client";

import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
    return (
        <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">

                <div className="text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold text-white mb-4"
                    >
                        Contact <span className="text-stellar-gold">Mission Control</span>
                    </motion.h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Ready to blast off? Fill out the form below or reach us directly. Our AI agents will route your request instantly.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
                            <h3 className="text-2xl font-bold text-white mb-6">Direct Channels</h3>

                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="bg-stellar-gold/20 p-3 rounded-full mr-4 text-stellar-gold">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400 font-semibold uppercase tracking-wider">Email Us</p>
                                        <p className="text-white text-lg font-medium">hello@codesstellar.com</p>
                                        <p className="text-gray-500 text-sm mt-1">Response time: &lt; 2 hours</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-stellar-gold/20 p-3 rounded-full mr-4 text-stellar-gold">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400 font-semibold uppercase tracking-wider">Call Us</p>
                                        <p className="text-white text-lg font-medium">+1 (555) 123-4567</p>
                                        <p className="text-gray-500 text-sm mt-1">Mon-Fri, 9am - 6pm EST</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-stellar-gold/20 p-3 rounded-full mr-4 text-stellar-gold">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400 font-semibold uppercase tracking-wider">HQ Location</p>
                                        <p className="text-white text-lg font-medium">123 Innovation Dr.</p>
                                        <p className="text-white">Tech City, Future State 99401</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="h-64 w-full rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all border border-white/10">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968482413!3d40.75889497932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1626184620000!5m2!1sen!2sus"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                loading="lazy"
                                title="map"
                            ></iframe>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="bg-stellar-green/20 p-8 md:p-12 rounded-3xl border border-stellar-gold/20"
                    >
                        <h2 className="text-2xl font-bold text-white mb-6">Send a Transmission</h2>
                        <form className="space-y-6">
                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-gray-400 text-sm mb-2">First Name</label>
                                    <input type="text" className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-stellar-gold focus:ring-1 focus:ring-stellar-gold outline-none transition-all" />
                                </div>
                                <div>
                                    <label className="block text-gray-400 text-sm mb-2">Last Name</label>
                                    <input type="text" className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-stellar-gold focus:ring-1 focus:ring-stellar-gold outline-none transition-all" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-gray-400 text-sm mb-2">Email Address</label>
                                <input type="email" className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-stellar-gold focus:ring-1 focus:ring-stellar-gold outline-none transition-all" />
                            </div>

                            <div>
                                <label className="block text-gray-400 text-sm mb-2">Service Interest</label>
                                <select className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-stellar-gold focus:ring-1 focus:ring-stellar-gold outline-none transition-all">
                                    <option value="" className="bg-stellar-dark">Select a Service...</option>
                                    <option value="ai" className="bg-stellar-dark">AI & Agents</option>
                                    <option value="blockchain" className="bg-stellar-dark">Blockchain</option>
                                    <option value="mobile" className="bg-stellar-dark">Mobile Apps</option>
                                    <option value="gaming" className="bg-stellar-dark">Gaming</option>
                                    <option value="web" className="bg-stellar-dark">Web Development</option>
                                    <option value="other" className="bg-stellar-dark">Other</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-gray-400 text-sm mb-2">Message</label>
                                <textarea rows={4} className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-stellar-gold focus:ring-1 focus:ring-stellar-gold outline-none transition-all"></textarea>
                            </div>

                            <button type="submit" className="w-full bg-stellar-gold text-stellar-green font-bold py-4 rounded-xl hover:bg-yellow-400 transition-all transform hover:scale-[1.02] flex items-center justify-center">
                                Launch Message <Send size={20} className="ml-2" />
                            </button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </div>
    );
};

export default Contact;
