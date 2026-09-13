import { useState, useRef } from 'react';
import { Copy, Send, Loader2, CheckCircle2 } from 'lucide-react';
import Toast from './Toast';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('Jashankhunger3@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const brand = formData.get('brand');
    const type = formData.get('type');
    const message = formData.get('message');

    const text = `*New Inquiry from Portfolio*
*Name:* ${name}
*Brand/Agency:* ${brand}
*Project Type:* ${type}

*Message:*
${message}`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/919518203556?text=${encodedText}`;

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      if (formRef.current) formRef.current.reset();
      
      window.open(whatsappUrl, '_blank');
      
      setTimeout(() => setSubmitted(false), 5000);
    }, 800);
  };

  return (
    <section id="contact" className="py-32 relative z-10 bg-surface border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 md:gap-24">
          
          <div>
            <h2 className="text-6xl md:text-8xl font-display font-bold uppercase tracking-tighter mb-8 leading-none">
              Let's Create<br />
              <span className="text-gray-600">Something</span><br />
              <span className="text-accent text-glow">Memorable.</span>
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-md font-light">
              Currently accepting commercial and editorial projects. Let's bring your vision to life.
            </p>
            
            <div className="space-y-4">
              <div className="text-xs font-display text-gray-500 uppercase tracking-widest">Direct Inquiry</div>
              <button 
                onClick={handleCopyEmail}
                className="group flex items-center gap-4 px-6 py-4 rounded bg-background border border-white/5 hover:border-accent/50 transition-colors w-full max-w-sm"
              >
                <div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center group-hover:bg-accent/10 group-hover:text-accent transition-colors">
                  <Copy className="w-4 h-4" />
                </div>
                <div className="text-left flex-1">
                  <div className="font-medium text-white font-display tracking-wide">Jashankhunger3@gmail.com</div>
                  <div className="text-xs text-gray-500 transition-colors">
                    {copied ? <span className="text-accent">Copied to clipboard!</span> : "Click to copy email"}
                  </div>
                </div>
              </button>
            </div>
          </div>
          
          <div className="bg-background rounded p-8 md:p-12 border border-white/5 relative">
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-accent/5 blur-[120px] pointer-events-none" />
            
            <form ref={formRef} onSubmit={handleSubmit} className="relative z-10 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <input required type="text" name="name" className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-accent transition-colors font-light placeholder:text-gray-600 rounded-none" placeholder="Your Name" />
                </div>
                <div className="space-y-2">
                  <input required type="text" name="brand" className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-accent transition-colors font-light placeholder:text-gray-600 rounded-none" placeholder="Brand / Agency" />
                </div>
              </div>
              
              <div className="space-y-4 pt-4">
                <label className="text-xs font-display text-gray-500 uppercase tracking-widest">Project Type</label>
                <div className="flex gap-4">
                  {['Video Editing', 'Motion Graphics', 'Graphic Design'].map(type => (
                    <label key={type} className="cursor-pointer">
                      <input type="radio" name="type" value={type} className="peer sr-only" required />
                      <div className="px-4 py-2 border border-white/10 bg-surface text-sm text-gray-400 peer-checked:bg-accent peer-checked:text-black peer-checked:border-accent transition-colors font-display uppercase tracking-wider">
                        {type}
                      </div>
                    </label>
                  ))}
                </div>
              </div>
              
              <div className="space-y-2 pt-4">
                <textarea required name="message" rows={4} className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-accent transition-colors font-light placeholder:text-gray-600 resize-none rounded-none" placeholder="Tell me about the vision, timeline, and goals..."></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={submitting || submitted}
                className="w-full py-5 font-display font-bold uppercase tracking-widest flex items-center justify-center gap-3 transition-all disabled:opacity-70 disabled:cursor-not-allowed text-black bg-white hover:bg-accent border border-transparent shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(0,229,255,0.4)]"
              >
                {submitting ? (
                  <><Loader2 className="w-5 h-5 animate-spin" /> Sending...</>
                ) : submitted ? (
                  <><CheckCircle2 className="w-5 h-5" /> Transmission Received</>
                ) : (
                  <>Send Message <Send className="w-4 h-4" /></>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
      
      <Toast 
        message="Email copied to clipboard!" 
        isVisible={copied} 
        onClose={() => setCopied(false)} 
      />
    </section>
  );
}
