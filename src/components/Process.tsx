import { motion } from 'framer-motion';
import { milestones } from '../data/portfolioData';

export default function Process() {
  return (
    <section id="process" className="py-24 relative z-10 bg-surface border-y border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-20">
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-4 uppercase tracking-tighter text-center">The Process</h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2" />

          <div className="space-y-12">
            {milestones.map((milestone, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={milestone.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row gap-8 md:gap-0 ${
                    isEven ? '' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-accent rounded-full -translate-x-[5px] md:-translate-x-1/2 mt-6 md:mt-8 z-10 shadow-[0_0_10px_rgba(0,229,255,0.5)]" />

                  {/* Empty space for alternating layout on desktop */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Content Card */}
                  <div className={`pl-12 md:pl-0 md:w-1/2 ${isEven ? 'md:pr-16' : 'md:pl-16'}`}>
                    <div className="glass-panel p-8 rounded-2xl relative overflow-hidden group hover:border-accent/30 transition-colors">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full -z-10 group-hover:bg-accent/10 transition-colors" />
                      
                      <div className="text-accent font-display font-bold mb-2 tracking-widest text-sm">
                        STEP {milestone.step}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2 font-display uppercase tracking-tight">{milestone.title}</h3>
                      
                      <p className="text-gray-400 leading-relaxed font-light mt-4">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
