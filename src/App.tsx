import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Services from './components/Services';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';

import CinematicBackground from './components/CinematicBackground';

function App() {
  useEffect(() => {
    // Fade out the global HTML loader once React is ready
    const loader = document.getElementById('global-loader');
    if (loader) {
      setTimeout(() => {
        loader.style.opacity = '0';
        loader.style.visibility = 'hidden';
        setTimeout(() => loader.remove(), 800);
      }, 300);
    }
  }, []);

  return (
    <div className="min-h-screen text-gray-200">

      <CinematicBackground />
      
      <Navbar />
      
      <main>
        <Hero />
        <Projects />
        <Services />
        <Process />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
