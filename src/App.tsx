/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loader from './components/Loader';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

import Home from './pages/Home';
import Blogs from './pages/Blogs';
import CaseStudiesPage from './pages/CaseStudiesPage';
import BuildWithUs from './pages/BuildWithUs';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user prefers reduced motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      // Disable animations or set loading to false immediately
      setLoading(false);
    }
  }, []);

  return (
    <Router>
      {loading && <Loader onComplete={() => setLoading(false)} />}
      
      {!loading && (
        <div className="bg-background min-h-screen text-text-primary flex flex-col">
          <Navigation />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/case-studies" element={<CaseStudiesPage />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/build" element={<BuildWithUs />} />
            </Routes>
          </main>
          <Footer />
        </div>
      )}
    </Router>
  );
}
