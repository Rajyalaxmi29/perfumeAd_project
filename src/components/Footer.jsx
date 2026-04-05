import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="py-20 border-t border-white/5 bg-[#050505] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          <div className="w-full md:w-auto">
            <h2 className="text-[12vw] md:text-[10vw] leading-[0.8] tracking-tighter text-white/5 font-bold select-none pointer-events-none mb-4 md:mb-0 font-serif">
              AETHER.
            </h2>
          </div>
          
          <div className="flex flex-col gap-8 text-right w-full md:w-auto">
            <div className="flex flex-col gap-4 text-gray-400">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Instagram</a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Twitter</a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
            </div>
            <div className="flex flex-col md:items-end gap-2 text-right">
              <p className="text-sm text-gray-600">© 2026 Aether. All rights reserved.</p>
              <div className="text-[#FF4500]/80 text-[10px] uppercase tracking-[0.2em] mt-2 font-mono border border-[#FF4500]/20 px-3 py-1 rounded-full backdrop-blur-sm bg-white/5 pointer-events-auto">
                Architected by Rajyalaxmi
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
