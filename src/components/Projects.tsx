import { useState } from 'react';
import { motion } from 'framer-motion';
import { Maximize2 } from 'lucide-react';
import { projects } from '../data/portfolioData';
import type { Project } from '../types';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="work" className="py-24 relative z-10 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-4 uppercase tracking-tighter">Selected Work</h2>
            <p className="text-gray-400 max-w-xl font-light text-lg">
              A curated selection of cinematic short-form edits, visual identities, and motion graphics.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {/* Browser Mockup Frame */}
              <div className="bg-surface rounded-t-xl border border-white/10 border-b-0 p-3 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/50" />
                </div>
                <div className="mx-auto px-4 py-1 bg-background rounded-md text-[10px] font-mono text-gray-500 border border-white/5">
                  {project.title.toLowerCase().replace(/\s+/g, '-')}
                </div>
              </div>

              {/* Project Card */}
              <div className="relative overflow-hidden bg-card border border-white/10 rounded-b-xl aspect-[4/5] md:aspect-[16/10] bg-black">
                {project.youtubeId ? (
                  <div className="absolute top-1/2 left-1/2 w-[150%] h-[150%] -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-50 group-hover:opacity-30 transition-opacity duration-700">
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
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-40"
                  />
                ) : (
                  <img 
                    src={project.thumbnail} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-40"
                  />
                )}
                
                {/* Overlay Content */}
                <div className="absolute inset-0 p-5 md:p-8 flex flex-col justify-end bg-gradient-to-t from-background/90 via-background/40 to-transparent">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex justify-between items-end">
                      <div>
                        <div className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-white text-[10px] md:text-xs font-mono mb-2 md:mb-4 border border-white/10">
                          {project.category}
                        </div>
                        <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-1 md:mb-2 uppercase tracking-tight">{project.title}</h3>
                        <p className="text-gray-300 line-clamp-2 text-sm max-w-md font-light">{project.problem}</p>
                      </div>
                      
                      <div className="hidden md:flex gap-3">
                        <button className="p-3 bg-white text-black rounded-full hover:bg-accent transition-colors">
                          <Maximize2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Tech Stack Footer */}
                    <div className="flex items-center gap-4 mt-6 pt-6 border-t border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="flex gap-2">
                        {project.techStack.slice(0, 3).map(tech => (
                          <span key={tech} className="text-xs font-mono text-gray-400">{tech}</span>
                        ))}
                      </div>
                      <div className="ml-auto text-accent font-mono text-sm">{project.roi}</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <ProjectModal 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
}
