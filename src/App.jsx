import React, { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

export default function App() {
  const [route, setRoute] = useState('/');

  useEffect(() => {
    const normalizeHash = () => {
      const raw = window.location.hash.replace('#', '');
      if (!raw) {
        // Normalize empty hash to root so refresh works consistently
        window.location.hash = '/';
        setRoute('/');
        return;
      }
      setRoute(raw || '/');
    };

    // Initialize + subscribe
    normalizeHash();
    window.addEventListener('hashchange', normalizeHash);
    return () => window.removeEventListener('hashchange', normalizeHash);
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#0b0b0f] to-[#0d0d13] text-white">
      {/* Left navigation */}
      <Sidebar currentRoute={route} />

      {/* Main area */}
      <div className="ml-60 flex min-h-screen flex-col">
        <main className="flex-1">
          <MainContent />
        </main>
        <Footer />
      </div>
    </div>
  );
}
