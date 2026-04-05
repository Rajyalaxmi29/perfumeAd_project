import './ProductHighlight.css';

export default function ProductHighlight({ onAddToCart }) {
  return (
    <section className="ph section-pad">
      <div className="container">
        <div className="ph__inner">
          <div className="ph__image-col fade-in">
            <img src="/barrier_serum.png" alt="Lumio Barrier Serum" className="ph__image" />
          </div>
          <div className="ph__copy-col fade-in fade-in-delay-1">
            <span className="section-label">Our Signature Formula</span>
            <h2 className="ph__title">Rebuild. Protect. Glow.</h2>
            <span className="gold-line"></span>
            <p className="ph__desc">
              Your skin barrier is the first thing that breaks down under stress, screens, and pollution. Rebuild it in 28 days with the exact clinical concentrations proven to restore lipid balance.
            </p>
            <ul className="ph__ingredients">
              <li><strong>Ceramide NP 2%</strong> — restores lipid barrier</li>
              <li><strong>Niacinamide 5%</strong> — minimises pores</li>
              <li><strong>Bisabolol 1%</strong> — soothes sensitivity</li>
            </ul>
            <div className="ph__actions">
              <a href="/products/barrier-renewal-serum" className="btn-primary">
                Shop Barrier Serum
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
