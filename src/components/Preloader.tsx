import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Lock scrolling while loading
    document.body.style.overflow = 'hidden';
    
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onComplete();
            document.body.style.overflow = '';
          }, 400);
          return 100;
        }
        // Increment faster for better UX
        const increment = Math.floor(Math.random() * 15) + 5;
        return Math.min(prev + increment, 100);
      });
    }, 120);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = '';
    };
  }, [onComplete]);

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[999] bg-[#050505] flex flex-col items-center justify-center"
    >
      <div className="flex flex-col items-center gap-8 w-64">
        {/* Logo Reveal */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-display font-bold tracking-widest text-white uppercase"
        >
          JASHAN<span className="text-[#00E5FF]">.</span>
        </motion.div>
        
        {/* Progress Bar Container */}
        <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden relative">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-[#00E5FF] shadow-[0_0_15px_rgba(0,229,255,0.5)]"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "linear", duration: 0.15 }}
          />
        </div>
        
        {/* Percentage Text */}
        <motion.div 
          className="text-xs font-mono text-gray-500 tracking-widest"
        >
          {progress.toString().padStart(3, '0')}%
        </motion.div>
      </div>
    </motion.div>
  );
}
