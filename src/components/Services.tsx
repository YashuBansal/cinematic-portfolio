import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { services } from '../data/portfolioData';

export default function Services() {
  return (
    <section id="services" className="py-24 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-6 uppercase tracking-tighter">Capabilities</h2>
          <p className="text-gray-400 text-lg font-light">
            Comprehensive creative solutions across video production, motion graphics, and brand identity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl p-8 group hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-6">
                <span className="font-display font-bold">0{index + 1}</span>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 font-display uppercase tracking-tight">{service.title}</h3>
              <p className="text-gray-400 mb-8 flex-grow font-light">
                {service.description}
              </p>

              <div className="space-y-3 mb-8">
                {service.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    <span className="text-sm text-gray-300 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between text-sm">
                <span className="text-gray-500 font-mono">Timeline</span>
                <span className="text-white font-medium">{service.estimatedTimeline}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
