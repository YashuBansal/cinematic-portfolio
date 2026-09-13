import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Services from './components/Services';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';

import CinematicBackground from './components/CinematicBackground';

function App() {
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
