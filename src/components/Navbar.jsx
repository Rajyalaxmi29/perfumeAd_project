import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar({ cartCount }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Subtle top announcement bar */}
      <div className={`fixed top-0 w-full bg-[#FF4500] text-black text-center text-[10px] sm:text-xs font-medium tracking-widest uppercase py-2 z-[60] transition-transform duration-300 ${scrolled ? '-translate-y-full' : 'translate-y-0'}`}>
        Complimentary discovery set included with all Extrait orders.
      </div>
      
      <nav
        id="main-nav"
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'top-0 py-4 bg-[#050505]/80 backdrop-blur-md border-b border-white/5' : 'top-8 py-6 bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link to="/" id="nav-logo-link" className="text-2xl font-bold tracking-tighter font-serif text-white hover:text-[#ffe0e0] transition-colors">
            AETHER.
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/about" className="text-sm text-gray-400 hover:text-white transition-colors duration-300">Our Story</Link>
            <Link to="/products" className="text-sm text-gray-400 hover:text-white transition-colors duration-300">Collections</Link>
            <Link to="/faq" className="text-sm text-gray-400 hover:text-white transition-colors duration-300">FAQ</Link>
          </div>

          <div className="flex items-center gap-6">
            <Link to="/cart" className="text-sm text-white hover:text-[#FF4500] transition-colors duration-300 font-mono">
              Cart ({cartCount})
            </Link>
            <Link to="/products" id="nav-cta-link" className="hidden md:inline-flex items-center justify-center px-6 py-2.5 rounded-full text-sm font-medium bg-white text-black hover:scale-105 hover:bg-gray-200 transition-all duration-300">
              Shop Now
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
