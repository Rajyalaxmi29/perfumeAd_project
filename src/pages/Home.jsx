import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useReveal } from '../hooks/useReveal';
import { useTime } from '../hooks/useTime';

export default function Home({ cartCount }) {
  useReveal();
  const timeStr = useTime();
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const heroWrapperTransform = scrollY < 1000 ? `translateY(${scrollY * 0.4}px)` : 'none';
  const heroWrapperOpacity = scrollY < 600 ? Math.max(0, 1 - scrollY / 600) : 0;
  
  const upCardStyle = { transform: `translateY(${scrollY * -0.05}px)` };
  const downCardStyle = { transform: `translateY(${scrollY * 0.05}px)` };

  return (
    <div className="min-h-screen bg-[#050505] selection:bg-[#FF4500] selection:text-white">
      <div className="noise-overlay"></div>
      <Navbar cartCount={cartCount} />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20 bg-[#050505]">
        <div className="absolute inset-0 z-0 pointer-events-none select-none">
          <div className="absolute top-0 left-0 w-full h-full opacity-60 mix-blend-screen">
            <img src="https://framerusercontent.com/images/9zvwRJAavKKacVyhFCwHyXW1U.png?width=1536&height=1024" alt="Atmosphere" className="w-full h-full object-cover object-center opacity-80" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050505] z-10"></div>
        </div>

        <div className="absolute -left-[10%] top-[-10%] md:left-[-5%] md:top-[-15%] w-[50vw] md:w-[40vw] max-w-[800px] z-10 pointer-events-none mix-blend-hard-light opacity-80 animate-float-left">
          <img src="https://framerusercontent.com/images/KNhiA5A2ykNYqNkj04Hk6BVg5A.png?width=1540&height=1320" alt="Hand Reaching" className="w-full h-auto object-contain" />
        </div>

        <div className="absolute -right-[10%] bottom-[-10%] md:right-[-5%] md:bottom-[-5%] w-[45vw] md:w-[35vw] max-w-[700px] z-10 pointer-events-none mix-blend-hard-light opacity-80 animate-float-right">
          <img src="https://framerusercontent.com/images/X89VFCABCEjjZ4oLGa3PjbOmsA.png?width=1542&height=1002" alt="Hand Receiving" className="w-full h-auto object-contain" />
        </div>

        <div className="container mx-auto px-6 relative z-20 text-center flex flex-col items-center justify-center h-full">
          <div 
            className="max-w-4xl mx-auto"
            style={{ transform: heroWrapperTransform, opacity: heroWrapperOpacity }}
          >
            <div className="reveal">
              <h1 className="text-5xl md:text-7xl font-medium leading-[1.1] tracking-tight mb-6 text-[#ffe0e0] mix-blend-overlay font-serif" style={{ textShadow: '0 0 12px rgba(255,255,255,0.71)' }}>
                AETHER. <br />
                <span className="italic font-light text-[#ffe0e0]">The alchemy of scent.</span>
              </h1>
            </div>
            
            <div className="reveal" style={{ transitionDelay: '200ms' }}>
              <p className="text-base md:text-lg text-[#ffe0e0]/90 max-w-lg mx-auto mb-16 font-light tracking-wide leading-relaxed mix-blend-overlay" style={{ textShadow: '0 0 12px rgba(255,255,255,0.71)' }}>
                We distill the boldest elements of nature into unforgettable fragrances. A luxury grooming house for those who dare to leave a lasting impression.
              </p>
            </div>

            <div className="reveal flex flex-col items-center gap-6" style={{ transitionDelay: '400ms' }}>
              <div className="relative group cursor-pointer" onClick={() => navigate('/products')}>
                <div className="absolute inset-0 bg-[#FF4500]/20 blur-xl rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                <div className="relative border border-white/20 bg-white/5 backdrop-blur-sm px-6 py-2 rounded-full flex items-center gap-3 text-xs md:text-sm text-white/80 uppercase tracking-widest hover:bg-white/10 transition-colors duration-300">
                  <span>Enter the Void</span>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-[10px] md:text-xs text-white/40 uppercase tracking-widest mt-8 font-mono">
                <span>{timeStr}</span>
                <span className="w-px h-3 bg-white/20"></span>
                <span>NYC, USA</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* USP Section */}
      <section id="expertise" className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center reveal">
            <h2 className="text-3xl md:text-5xl lg:text-6xl leading-tight text-white/90 mb-12 font-serif">
              Formulated in the shadows. Perfected for the skin.
            </h2>
            <p className="text-xl md:text-2xl text-gray-500 leading-relaxed font-light">
              We remove synthetic noise so the raw, organic pheromones resonate with absolute power. Paraben-free. Cruelty-free. Undeniably potent.
            </p>
          </div>

          <div className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center transition-all duration-500 text-center">
            <div className="reveal">
              <div className="font-bold text-xl tracking-widest mb-2 font-serif text-[#FF4500]">01</div>
              <p className="text-sm tracking-wider uppercase text-gray-400">Pure Extracts</p>
            </div>
            <div className="reveal" style={{ transitionDelay: '100ms' }}>
              <div className="font-bold text-xl tracking-widest mb-2 font-serif text-[#FF4500]">02</div>
              <p className="text-sm tracking-wider uppercase text-gray-400">Hand Poured</p>
            </div>
            <div className="reveal" style={{ transitionDelay: '200ms' }}>
              <div className="font-bold text-xl tracking-widest mb-2 font-serif text-[#FF4500]">03</div>
              <p className="text-sm tracking-wider uppercase text-gray-400">24Hr Sillage</p>
            </div>
            <div className="reveal" style={{ transitionDelay: '300ms' }}>
              <div className="font-bold text-xl tracking-widest mb-2 font-serif text-[#FF4500]">04</div>
              <p className="text-sm tracking-wider uppercase text-gray-400">Vegan Craft</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 border-y border-white/5 bg-[#080808]">
        <div className="container mx-auto px-6 flex flex-wrap justify-center gap-8 md:gap-16 text-center">
           <div className="flex flex-col items-center max-w-[200px]">
             <iconify-icon icon="lucide:lock" class="text-white/40 text-2xl mb-3"></iconify-icon>
             <h4 className="text-sm text-white mb-1">Secure Vault</h4>
             <p className="text-xs text-gray-500">End-to-end encrypted transactions.</p>
           </div>
           <div className="flex flex-col items-center max-w-[200px]">
             <iconify-icon icon="lucide:globe" class="text-white/40 text-2xl mb-3"></iconify-icon>
             <h4 className="text-sm text-white mb-1">Global Transit</h4>
             <p className="text-xs text-gray-500">Complimentary insured shipping on orders over ₹12,000.</p>
           </div>
           <div className="flex flex-col items-center max-w-[200px]">
             <iconify-icon icon="lucide:shield-check" class="text-white/40 text-2xl mb-3"></iconify-icon>
             <h4 className="text-sm text-white mb-1">Discovery Guarantee</h4>
             <p className="text-xs text-gray-500">Every bottle ships with a 2ml vial. Test before opening.</p>
           </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="works" className="py-40 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="reveal mb-32">
            <h2 className="text-5xl md:text-7xl text-center font-serif">
              Define your <br />
              <span className="italic">personal aura</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div style={downCardStyle} onClick={() => navigate('/products/obsidian-extrait')}>
              <div className="reveal bg-[#FF4500] rounded-3xl p-8 md:p-12 aspect-[4/5] flex flex-col justify-between shadow-2xl hover:shadow-[0_20px_50px_rgba(255,69,0,0.3)] transition-all duration-500 group cursor-pointer relative overflow-hidden">
                <img src="/obsidian_bottle.png" alt="Obsidian" className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[2s]" />
                <div className="absolute inset-0 bg-black/10 transition-colors duration-500 z-0 pointer-events-none"></div>
                
                <div className="flex justify-between items-start relative z-10">
                  <div className="w-12 h-12 rounded-full bg-black/20 flex items-center justify-center group-hover:rotate-45 transition-transform duration-500">
                    <iconify-icon icon="lucide:star" class="text-white text-2xl"></iconify-icon>
                  </div>
                  <span className="text-white font-medium text-sm border border-white/40 px-3 py-1 rounded-full uppercase tracking-widest backdrop-blur-sm bg-white/10">Bestseller</span>
                </div>
                <div className="relative z-10">
                  <h3 className="text-4xl md:text-5xl text-white mb-4 leading-none tracking-tight font-serif drop-shadow-lg">
                    Obsidian <br />Extrait
                  </h3>
                  <p className="text-white/90 text-lg leading-snug mb-6 drop-shadow-md font-light">
                    A brooding, smoky profile of Madagascar vanilla, burnt cedar, and raw leather.
                  </p>
                  <div className="flex justify-between items-center border-t border-white/20 pt-6 mt-2">
                    <span className="text-2xl font-serif text-white">₹15,500</span>
                    <span className="text-xs uppercase tracking-widest text-white hover:underline cursor-pointer font-bold">Discover</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:mt-24" style={upCardStyle} onClick={() => navigate('/products/crimson-void')}>
              <div className="reveal bg-[#111] border border-white/10 rounded-3xl p-8 md:p-12 aspect-[4/5] flex flex-col justify-between shadow-2xl group cursor-pointer hover:border-[#FF4500]/50 transition-all duration-500" style={{ transitionDelay: '150ms' }}>
                <img src="/crimson_bottle.png" alt="Crimson Void" className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[2s]" />                <div className="flex justify-between items-start relative z-10">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:translate-x-2 transition-transform duration-500">
                     <iconify-icon icon="lucide:arrow-right" class="text-white text-2xl -rotate-45"></iconify-icon>
                  </div>
                  <span className="text-white font-medium text-sm border border-[#FF4500] text-[#FF4500] px-3 py-1 rounded-full uppercase tracking-widest backdrop-blur-sm bg-[#FF4500]/10">New</span>
                </div>
                <div className="relative z-10">
                  <h3 className="text-4xl md:text-5xl text-white mb-4 leading-none tracking-tight font-serif drop-shadow-lg">
                    Crimson <br />Void
                  </h3>
                  <p className="text-gray-300 font-light text-lg leading-snug mb-6 drop-shadow-md">
                    Blood orange slices through rich black musk and amber. A sensory paradox.
                  </p>
                  <div className="flex justify-between items-center border-t border-white/10 pt-6 mt-2">
                    <div className="flex gap-4 items-center">
                      <span className="text-2xl font-serif text-[#FF4500]">₹17,500</span>
                      <span className="text-sm line-through text-white/30">₹20,000</span>
                    </div>
                    <span className="text-xs uppercase tracking-widest text-[#FF4500] hover:text-white transition-colors cursor-pointer font-bold">Discover</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:mt-12" style={downCardStyle} onClick={() => navigate('/products/silver-oudh')}>
              <div className="reveal bg-[#FF4500] rounded-3xl p-8 md:p-12 aspect-[4/5] flex flex-col justify-between shadow-2xl hover:shadow-[0_20px_50px_rgba(255,69,0,0.3)] transition-all duration-500 group cursor-pointer relative overflow-hidden" style={{ transitionDelay: '300ms' }}>
                <img src="/silver_oudh.png" alt="Silver Oudh" className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[2s]" />
                <div className="absolute inset-0 bg-black/10 transition-colors duration-500 z-0 pointer-events-none"></div>
                
                <div className="flex justify-between items-start relative z-10">
                  <div className="w-12 h-12 rounded-full bg-black/20 flex items-center justify-center group-hover:rotate-45 transition-transform duration-500">
                    <iconify-icon icon="lucide:star" class="text-white text-2xl"></iconify-icon>
                  </div>
                  <span className="text-white font-medium text-sm border border-white/40 px-3 py-1 rounded-full uppercase tracking-widest backdrop-blur-sm bg-white/10">Limited Batch</span>
                </div>
                <div className="relative z-10">
                  <h3 className="text-4xl md:text-5xl text-white mb-4 leading-none tracking-tight font-serif drop-shadow-lg">
                    Silver <br />Oudh
                  </h3>
                  <p className="text-white/90 text-lg leading-snug mb-6 drop-shadow-md font-light">
                    A clinical edge masking an ancient resin. Cold precision.
                  </p>
                  <div className="flex justify-between items-center border-t border-white/20 pt-6 mt-2">
                    <span className="text-2xl font-serif text-white">₹26,500</span>
                    <span className="text-xs uppercase tracking-widest text-white hover:underline cursor-pointer font-bold">Discover</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:mt-36" style={upCardStyle} onClick={() => navigate('/products/midnight-vetiver')}>
              <div className="reveal bg-[#111] border border-white/10 rounded-3xl p-8 md:p-12 aspect-[4/5] flex flex-col justify-between shadow-2xl group cursor-pointer hover:border-[#FF4500]/50 transition-all duration-500" style={{ transitionDelay: '450ms' }}>
                <img src="/midnight_vetiver.png" alt="Midnight Vetiver" className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[2s]" />
                <div className="flex justify-between items-start relative z-10">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:translate-x-2 transition-transform duration-500">
                     <iconify-icon icon="lucide:arrow-right" class="text-white text-2xl -rotate-45"></iconify-icon>
                  </div>
                </div>
                <div className="relative z-10">
                  <h3 className="text-4xl md:text-5xl text-white mb-4 leading-none tracking-tight font-serif drop-shadow-lg">
                    Midnight <br />Vetiver
                  </h3>
                  <p className="text-gray-300 font-light text-lg leading-snug mb-6 drop-shadow-md">
                    Roots yanked from the damp earth under a new moon. Uncompromising.
                  </p>
                  <div className="flex justify-between items-center border-t border-white/10 pt-6 mt-2">
                    <span className="text-2xl font-serif text-[#FF4500]">₹13,800</span>
                    <span className="text-xs uppercase tracking-widest text-[#FF4500] hover:text-white transition-colors cursor-pointer font-bold">Discover</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </section>

      {/* Testimonials */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6 reveal">
           <h3 className="text-center font-serif text-3xl mb-16 text-white/90">Olfactory Responses</h3>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
             <div className="bg-[#111] p-8 rounded-xl border border-white/5">
                <div className="flex gap-1 mb-4 text-[#FF4500]">
                  <iconify-icon icon="lucide:star"></iconify-icon><iconify-icon icon="lucide:star"></iconify-icon><iconify-icon icon="lucide:star"></iconify-icon><iconify-icon icon="lucide:star"></iconify-icon><iconify-icon icon="lucide:star"></iconify-icon>
                </div>
                <p className="text-gray-400 font-light italic mb-6">"Obsidian Extrait is unlike anything else. It commands the room without whispering a single word."</p>
                <div className="text-sm font-bold text-white uppercase tracking-widest">— Julian M.</div>
             </div>
             <div className="bg-[#111] p-8 rounded-xl border border-white/5">
                <div className="flex gap-1 mb-4 text-[#FF4500]">
                  <iconify-icon icon="lucide:star"></iconify-icon><iconify-icon icon="lucide:star"></iconify-icon><iconify-icon icon="lucide:star"></iconify-icon><iconify-icon icon="lucide:star"></iconify-icon><iconify-icon icon="lucide:star"></iconify-icon>
                </div>
                <p className="text-gray-400 font-light italic mb-6">"Finally, a fragrance house that relies on complex botanicals instead of cheap alcohol fillers."</p>
                <div className="text-sm font-bold text-white uppercase tracking-widest">— Clara T.</div>
             </div>
             <div className="bg-[#111] p-8 rounded-xl border border-white/5">
                <div className="flex gap-1 mb-4 text-[#FF4500]">
                  <iconify-icon icon="lucide:star"></iconify-icon><iconify-icon icon="lucide:star"></iconify-icon><iconify-icon icon="lucide:star"></iconify-icon><iconify-icon icon="lucide:star"></iconify-icon><iconify-icon icon="lucide:star"></iconify-icon>
                </div>
                <p className="text-gray-400 font-light italic mb-6">"Minimal packaging. Maximum impact. The unboxing experience alone is worth the price."</p>
                <div className="text-sm font-bold text-white uppercase tracking-widest">— David R.</div>
             </div>
           </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 border-t border-white/5 bg-[#080808]">
        <div className="container mx-auto px-6 text-center max-w-2xl reveal">
           <h3 className="text-3xl font-serif text-white mb-4">Join the Inner Circle</h3>
           <p className="text-gray-400 font-light mb-8">Gain early access to limited batch releases and olfactory insights. Plus 10% off your first true order.</p>
           <form className="flex gap-4 max-w-md mx-auto" onSubmit={(e) => { e.preventDefault(); alert('Subscribed to the void.'); }}>
             <input type="email" placeholder="Your minimalist email..." className="w-full bg-[#111] border border-white/10 rounded-full px-6 py-3 text-white focus:outline-none focus:border-[#FF4500] transition-colors" required />
             <button type="submit" className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-[#FF4500] hover:text-white transition-colors cursor-pointer">Subscribe</button>
           </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
