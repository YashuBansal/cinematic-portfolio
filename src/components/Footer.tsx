import { Camera, Video, Tv } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-surface pt-16 pb-8 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-8 mb-12 border-b border-white/5 pb-12">
          <div>
            <div 
              onClick={scrollToTop}
              className="text-4xl font-display font-bold tracking-tighter mb-4 cursor-pointer hover:text-accent transition-colors select-none uppercase"
            >
              JASHAN<span className="text-accent">.</span>
            </div>
            <p className="text-gray-500 max-w-xs text-sm font-light">
              Video Editor, Motion Graphics Artist, and Brand Identity Designer.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex gap-4">
              <a href="#" className="p-4 bg-background border border-white/5 text-gray-400 hover:text-accent hover:border-accent transition-colors">
                <Camera className="w-5 h-5" />
              </a>
              <a href="#" className="p-4 bg-background border border-white/5 text-gray-400 hover:text-accent hover:border-accent transition-colors">
                <Tv className="w-5 h-5" />
              </a>
              <a href="#" className="p-4 bg-background border border-white/5 text-gray-400 hover:text-accent hover:border-accent transition-colors">
                <Video className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="flex justify-between items-center gap-4 text-xs font-display tracking-widest uppercase text-gray-600">
          <div>&copy; {new Date().getFullYear()} Jashan Khunger.</div>
          <div className="text-right">Based in the Studio</div>
        </div>
      </div>
    </footer>
  );
}
