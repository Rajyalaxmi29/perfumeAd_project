import './FeaturedCollections.css';

const collections = [
  {
    name: 'AM Ritual',
    subtitle: 'Morning luminescence',
    description: 'Protect, brighten, hydrate.',
    href: '/collections/am-ritual',
    color: '#E8E0D0',
  },
  {
    name: 'PM Ritual',
    subtitle: 'Night recovery',
    description: 'Repair, rebuild, renew.',
    href: '/collections/pm-ritual',
    color: '#D8D0C8',
  },
  {
    name: 'Targeted Treatments',
    subtitle: 'Precision skincare',
    description: 'Clinical actives. Exact doses.',
    href: '/collections/treatments',
    color: '#C8C0B0',
  },
];

export default function FeaturedCollections() {
  return (
    <section className="fc section-pad">
      <div className="container">
        <div className="fc__header fade-in">
          <span className="section-label">Shop by Goal</span>
          <h2>Your Ritual Awaits</h2>
          <span className="gold-line gold-line-center"></span>
        </div>
        <div className="fc__grid">
          {collections.map((col, i) => (
            <a
              key={col.name}
              href={col.href}
              className={`fc__tile fade-in fade-in-delay-${i + 1}`}
              style={{ '--tile-color': col.color }}
            >
              <div className="fc__tile-bg" style={{ background: col.color }}></div>
              <div className="fc__tile-content">
                <span className="fc__tile-subtitle">{col.subtitle}</span>
                <h3 className="fc__tile-name">{col.name}</h3>
                <p className="fc__tile-desc">{col.description}</p>
                <span className="fc__explore">Explore →</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
