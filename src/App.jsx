import React, { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  const [route, setRoute] = useState('/');

  useEffect(() => {
    const readHash = () => setRoute(window.location.hash.replace('#', '') || '/');
    readHash();
    window.addEventListener('hashchange', readHash);
    return () => window.removeEventListener('hashchange', readHash);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Sidebar currentRoute={route} />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
