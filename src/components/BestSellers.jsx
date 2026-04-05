import ProductCard from './ProductCard';
import { products } from '../data/products';
import './BestSellers.css';

export default function BestSellers({ onAddToCart }) {
  const featured = products.slice(0, 4);

  return (
    <section className="bs section-pad">
      <div className="container">
        <div className="bs__header fade-in">
          <span className="section-label">Most Loved</span>
          <h2>The Essentials</h2>
          <span className="gold-line gold-line-center"></span>
          <p className="bs__sub">
            Four products. One complete ritual. Science you can trust.
          </p>
        </div>
        <div className="bs__grid">
          {featured.map((p, i) => (
            <div key={p.id} className={`fade-in fade-in-delay-${i + 1}`}>
              <ProductCard product={p} onAddToCart={onAddToCart} />
            </div>
          ))}
        </div>
        <div className="bs__footer fade-in">
          <a href="/products" className="btn-ghost" id="bs-view-all">
            View All Products
          </a>
        </div>
      </div>
    </section>
  );
}
