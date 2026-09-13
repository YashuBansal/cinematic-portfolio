import { useRef, useState } from 'react';
import type { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X } from 'lucide-react';
import CustomCursor from './CustomCursor';

// Magnetic Button Component
function MagneticButton({ children, onClick }: { children: ReactNode, onClick: () => void }) {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouse = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.3, y: middleY * 0.3 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <motion.button
      ref={ref}
      onClick={onClick}
      onMouseMove={handleMouse}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="relative overflow-hidden group flex items-center gap-4 px-10 py-5 bg-transparent border border-white/20 text-white font-display uppercase tracking-widest font-bold rounded-full z-10"
    >
      {/* Liquid / Sweep Fill Effect */}
      <div 
        className={`absolute inset-0 bg-[#E11D48] transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] z-0 ${isHovered ? 'translate-y-0' : 'translate-y-[100%]'}`}
        style={{ borderRadius: '50%' }}
      />
      <div 
        className={`absolute inset-0 bg-[#00E5FF] transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] z-0 delay-75 ${isHovered ? 'translate-y-0' : 'translate-y-[100%]'}`}
        style={{ borderRadius: '50%' }}
      />
      
      <span className="relative z-10 group-hover:text-black transition-colors duration-300 delay-100">{children}</span>
      <div className="relative z-10 w-10 h-10 rounded-full bg-white text-black flex items-center justify-center group-hover:scale-90 transition-transform duration-300">
        <Play className="w-5 h-5 fill-current ml-1" />
      </div>
    </motion.button>
  );
}

// Floating Badge Component
function FloatingBadge({ text, delay, x, y }: { text: string, delay: number, x: string, y: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        y: [0, -20, 0],
        rotate: [0, 5, -5, 0]
      }}
      transition={{ 
        opacity: { duration: 1, delay },
        scale: { duration: 1, delay, type: "spring" },
        y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: delay % 2 },
        rotate: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: delay % 3 }
      }}
      className={`absolute ${x} ${y} px-6 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-white/80 font-mono text-sm uppercase tracking-widest pointer-events-none hidden md:block z-0 shadow-[0_0_30px_rgba(255,255,255,0.05)]`}
    >
      {text}
    </motion.div>
  );
}

export default function Hero() {
  const [modalOpen, setModalOpen] = useState(false);

  // Staggered text animation configuration
  const textVariants: any = {
    hidden: { y: "110%", opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: { 
        delay: i * 0.15, 
        duration: 1.2, 
        ease: [0.77, 0, 0.175, 1] 
      }
    })
  };

  return (
    <>
      <CustomCursor />
      
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        
        {/* Floating Skill Badges */}
        <FloatingBadge text="Motion Graphics" delay={1.2} x="left-[15%]" y="top-[25%]" />
        <FloatingBadge text="Video Editing" delay={1.4} x="right-[20%]" y="top-[30%]" />
        <FloatingBadge text="Visual Identity" delay={1.6} x="left-[25%]" y="bottom-[25%]" />
        <FloatingBadge text="Short-Form Content" delay={1.8} x="right-[15%]" y="bottom-[20%]" />

        {/* Content Container */}
        <div className="container mx-auto px-6 relative z-10 flex flex-col items-center justify-center pt-20">
          
          {/* Staggered Text Reveal */}
          <div className="flex flex-col items-center select-none text-center leading-[0.85] mb-16">
            <div className="overflow-hidden pb-4">
              <motion.h1 
                custom={1}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                className="text-7xl md:text-[9rem] lg:text-[11rem] font-display font-black uppercase text-white"
              >
                CRAFTING
              </motion.h1>
            </div>
            
            <div className="overflow-hidden pb-4">
              <motion.h1 
                custom={2}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                className="text-7xl md:text-[9rem] lg:text-[11rem] font-display font-black uppercase text-white"
              >
                CINEMATIC
              </motion.h1>
            </div>
            
            <div className="overflow-hidden pb-4">
              <motion.h1 
                custom={3}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                className="text-7xl md:text-[9rem] lg:text-[11rem] font-display font-black uppercase text-transparent text-stroke text-shine"
              >
                VISUALS
              </motion.h1>
            </div>
          </div>
          
          {/* Magnetic CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <MagneticButton onClick={() => setModalOpen(true)}>
              Play Showreel
            </MagneticButton>
          </motion.div>
        </div>
      </section>

      {/* Showreel Modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12"
          >
            <button 
              onClick={() => setModalOpen(false)}
              className="absolute top-6 right-6 z-[110] p-3 bg-white/10 hover:bg-white hover:text-black text-white transition-colors rounded-full"
            >
              <X className="w-6 h-6" />
            </button>
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="w-full max-w-6xl aspect-video bg-black rounded-lg overflow-hidden border border-white/10 shadow-2xl relative"
            >
              <video 
                autoPlay 
                controls 
                className="w-full h-full object-cover"
                src="https://cdn.coverr.co/videos/coverr-cinematic-sunset-over-the-city-4395/1080p.mp4"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
