import './HeroSection.css';

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero__inner">
        {/* Left — Copy */}
        <div className="hero__copy">
          <span className="section-label">Lumio — Clean Science Skincare</span>
          <h1 className="hero__heading">
            Science That<br />
            <em>Feels Like</em><br />
            Luxury.
          </h1>
          <span className="gold-line"></span>
          <p className="hero__sub">
            Dermatologist-formulated essentials. Every ingredient.<br />
            Every reason. Explained.
          </p>
          <div className="hero__actions">
            <a href="/products" className="btn-primary" id="hero-cta-primary">
              Shop the Ritual
            </a>
            <a href="/about" className="btn-ghost" id="hero-cta-secondary">
              See How It Works
            </a>
          </div>
          <p className="hero__trust">
            <span>★★★★★</span> 4.9 · 12,000+ Verified Reviews
          </p>
        </div>

        {/* Right — Image */}
        <div className="hero__image-wrap">
          <img
            src="/hero_flatlay.png"
            alt="Lumio premium skincare product flat-lay"
            className="hero__image"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}
