import { motion } from 'framer-motion';

export default function CinematicBackground() {
  return (
    <div className="fixed inset-0 w-full h-full -z-50 bg-[#050505] overflow-hidden pointer-events-none">
      {/* Film Texture Noise Overlay */}
      <div className="absolute inset-0 z-[1] opacity-20 film-grain" />

      {/* Light 1: Deep Cinematic Cyan */}
      <motion.div 
        animate={{
          x: ['-20%', '30%', '-10%', '-20%'],
          y: ['-10%', '20%', '10%', '-10%'],
          scale: [1, 1.2, 0.9, 1],
          opacity: [0.15, 0.25, 0.15, 0.15]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 -left-1/4 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-[#00E5FF] rounded-full blur-[100px] will-change-transform"
        style={{ transform: 'translateZ(0)' }}
      />

      {/* Light 2: Crimson / Neon Red */}
      <motion.div 
        animate={{
          x: ['20%', '-20%', '10%', '20%'],
          y: ['20%', '-10%', '30%', '20%'],
          scale: [1, 1.1, 0.8, 1],
          opacity: [0.1, 0.2, 0.1, 0.1]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/4 -right-1/4 w-[70vw] h-[70vw] max-w-[900px] max-h-[900px] bg-[#E11D48] rounded-full blur-[100px] will-change-transform"
        style={{ transform: 'translateZ(0)' }}
      />

      {/* Light 3: Deep Violet */}
      <motion.div 
        animate={{
          x: ['10%', '-30%', '20%', '10%'],
          y: ['-20%', '10%', '-30%', '-20%'],
          scale: [0.9, 1.2, 1, 0.9],
          opacity: [0.15, 0.25, 0.15, 0.15]
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/4 w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] bg-[#7C3AED] rounded-full blur-[100px] will-change-transform"
        style={{ transform: 'translateZ(0)' }}
      />
    </div>
  );
}
