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
            <p className="text-sm text-gray-600">© 2026 Aether. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
