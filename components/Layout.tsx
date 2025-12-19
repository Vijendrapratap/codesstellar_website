import React, { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import StarBackground from './StarBackground';
import CustomCursor from './CustomCursor';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen flex flex-col font-sans overflow-x-hidden bg-stellar-dark selection:bg-stellar-gold selection:text-stellar-dark">
      <CustomCursor />
      <div className="bg-noise"></div>
      <StarBackground />
      
      {/* Subtle Gradient Spots for Atmosphere */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-5 pointer-events-none">
         {/* Green Nebula */}
        <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-stellar-green/10 rounded-full mix-blend-screen filter blur-[100px] opacity-20 animate-pulse-slow"></div>
         {/* Gold Nebula */}
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-stellar-gold/5 rounded-full mix-blend-screen filter blur-[120px] opacity-20"></div>
      </div>

      <Navbar />
      <main className="flex-grow z-10 w-full">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;