import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/utils';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [visible, setVisible] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const handleModalState = (e: Event) => setModalOpen((e as CustomEvent).detail);
    document.addEventListener('modal-state', handleModalState);
    return () => document.removeEventListener('modal-state', handleModalState);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Hidden on scroll down, revealed on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      
      setScrolled(currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { name: 'Work', href: '#work' },
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
  ];

  return (
    <AnimatePresence>
      {visible && !modalOpen && (
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className={cn(
            "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-12 flex items-center justify-between",
            scrolled ? "bg-background/80 backdrop-blur-lg border-b border-white/5 py-4" : "bg-transparent py-6"
          )}
        >
          <div className="flex items-center gap-2">
            <a href="#" className="text-2xl font-display font-bold tracking-tighter hover:text-accent transition-colors">
              JASHAN<span className="text-accent">.</span>
            </a>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-400 hover:text-white hover:text-glow transition-all uppercase tracking-widest font-display"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="#contact" 
              className="px-6 py-2.5 bg-accent text-black font-display uppercase tracking-widest font-bold rounded hover:bg-white hover:text-black transition-colors text-sm border border-accent hover:border-white shadow-[0_0_15px_rgba(0,229,255,0.3)] hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]"
            >
              Hire Me
            </a>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
