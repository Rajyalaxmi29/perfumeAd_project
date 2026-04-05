import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useReveal } from '../hooks/useReveal';

export default function PageTemplate({ title, children }) {
  useReveal();
  
  return (
    <div className="min-h-screen bg-[#050505] selection:bg-[#FF4500] selection:text-white flex flex-col">
      <div className="noise-overlay"></div>
      <Navbar />
      
      <main className="flex-1 relative pt-40 pb-20 overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-[20%] left-[50%] -translate-x-1/2 w-[800px] h-[400px] bg-[#FF4500]/5 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="reveal mb-16 max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-medium leading-[1.1] tracking-tight text-white font-serif">
              {title}
            </h1>
            <div className="w-24 h-px bg-[#FF4500] mt-8"></div>
          </div>
          
          <div className="reveal text-gray-400 font-light text-lg md:text-xl leading-relaxed" style={{ transitionDelay: '100ms' }}>
            {children}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
