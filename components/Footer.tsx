import React from 'react';
import Link from 'next/link';
import { Twitter, Linkedin, Github, Mail, MapPin, Rocket } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stellar-green/30 border-t border-white/5 pt-16 pb-8 backdrop-blur-sm relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Rocket className="w-5 h-5 text-stellar-gold" />
              <span className="text-xl font-bold tracking-wider text-white">
                CODES<span className="text-stellar-gold">STELLAR</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Empowering businesses with futuristic IT solutions. We build the technology that propels you to the stars.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-stellar-gold transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-stellar-gold transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-stellar-gold transition-colors"><Github size={20} /></a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services/ai-development" className="text-gray-400 hover:text-stellar-gold text-sm">AI & Agents</Link></li>
              <li><Link href="/services/blockchain" className="text-gray-400 hover:text-stellar-gold text-sm">Blockchain</Link></li>
              <li><Link href="/services/gaming" className="text-gray-400 hover:text-stellar-gold text-sm">Gaming & Metaverse</Link></li>
              <li><Link href="/services/mobile-app" className="text-gray-400 hover:text-stellar-gold text-sm">Mobile Apps</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-stellar-gold text-sm">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-stellar-gold text-sm">Careers</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-stellar-gold text-sm">Blog</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-stellar-gold text-sm">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-sm text-gray-400">
                <MapPin className="w-5 h-5 text-stellar-gold shrink-0" />
                <span>123 Innovation Dr, Tech City,<br />Future State, 99401</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-gray-400">
                <Mail className="w-5 h-5 text-stellar-gold shrink-0" />
                <span>hello@codesstellar.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Codesstellar. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-white text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;