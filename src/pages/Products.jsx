import { products } from '../data/products';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnnouncementBar from '../components/AnnouncementBar';
import ProductCard from '../components/ProductCard';

export default function Products({ cartCount, onAddToCart }) {
  return (
    <>
      <AnnouncementBar />
      <Navbar cartCount={cartCount} />
      
      <main style={{ paddingTop: '112px', background: 'var(--off-white)', minHeight: '80vh' }}>
        <div className="container" style={{ paddingTop: '64px', paddingBottom: '80px' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <span className="section-label">Complete Skincare</span>
            <h1 className="fade-in" style={{ color: 'var(--obsidian)', marginTop: '8px' }}>
              Shop All
            </h1>
            <span className="gold-line gold-line-center fade-in"></span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
            {products.map((p, i) => (
              <div key={p.id} className={`fade-in fade-in-delay-${i % 4}`}>
                <ProductCard product={p} onAddToCart={onAddToCart} />
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
