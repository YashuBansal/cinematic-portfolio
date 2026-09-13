import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Layers } from 'lucide-react';
import type { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.dispatchEvent(new CustomEvent('modal-state', { detail: true }));
    } else {
      document.body.style.overflow = '';
      document.dispatchEvent(new CustomEvent('modal-state', { detail: false }));
    }
    return () => {
      document.body.style.overflow = '';
      document.dispatchEvent(new CustomEvent('modal-state', { detail: false }));
    };
  }, [isOpen]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-background/90 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-4 md:inset-10 z-[101] bg-surface border border-white/10 rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-2xl"
          >
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black rounded-full text-white transition-colors backdrop-blur-md border border-white/10"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left: Image/Media */}
            <div className="w-full md:w-1/2 h-64 md:h-full relative overflow-hidden bg-black flex items-center justify-center">
              {project.youtubeId ? (
                <div className="absolute top-1/2 left-1/2 w-[150%] h-[150%] -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-80">
                  <iframe 
                    src={`https://www.youtube.com/embed/${project.youtubeId}?autoplay=1&mute=1&loop=1&playlist=${project.youtubeId}&controls=0&showinfo=0&modestbranding=1&playsinline=1`}
                    className="w-full h-full"
                    allow="autoplay; encrypted-media"
                    frameBorder="0"
                    loading="lazy"
                  />
                </div>
              ) : project.videoUrl ? (
                <video 
                  src={project.videoUrl} 
                  poster={project.thumbnail}
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-full h-full object-cover opacity-80"
                />
              ) : (
                <img 
                  src={project.thumbnail} 
                  alt={project.title} 
                  loading="lazy"
                  className="w-full h-full object-cover opacity-80"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent md:bg-gradient-to-r" />
            </div>

            {/* Right: Content */}
            <div className="w-full md:w-1/2 h-full overflow-y-auto p-8 md:p-12 custom-scrollbar">
              <div className="inline-block px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-mono mb-6">
                {project.category}
              </div>
              
              <h2 className="text-3xl md:text-5xl font-bold mb-6 font-display uppercase tracking-tight">{project.title}</h2>
              
              <div className="space-y-8">
                <section>
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2 text-white font-display uppercase tracking-wider">
                    <Layers className="w-5 h-5 text-accent" /> Approach
                  </h3>
                  <p className="text-gray-400 leading-relaxed font-light">
                    {project.longDescription}
                  </p>
                </section>

                <section className="bg-card p-6 rounded-xl border border-white/5">
                  <h4 className="text-sm font-mono text-gray-500 mb-2 uppercase tracking-wider">The Challenge</h4>
                  <p className="text-gray-300 mb-6 font-light">{project.problem}</p>
                  
                  <h4 className="text-sm font-mono text-gray-500 mb-2 uppercase tracking-wider">The Result</h4>
                  <p className="text-accent font-semibold">{project.result}</p>
                </section>

                <section>
                  <h3 className="text-lg font-bold mb-4 text-white font-display uppercase tracking-wider">Technical Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map(tech => (
                      <span key={tech} className="px-3 py-1.5 bg-surface border border-white/10 rounded text-sm font-mono text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
