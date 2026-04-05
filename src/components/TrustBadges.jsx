import './TrustBadges.css';

const badges = [
  { label: 'Dermatologist Tested', path: 'M9 12l2 2 4-4 m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
  { label: 'Cruelty-Free', path: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' },
  { label: 'Clean Ingredients', path: 'M12 22S4 14.5 4 8.5a8.5 8.5 0 1117 0c0 6-8 13.5-8 13.5z' },
  { label: 'Plastic Neutral', path: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15' },
  { label: '30-Day Returns', path: 'M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m9 14V5a2 2 0 00-2-2H6a2 2 0 00-2 2v16l4-2 4 2 4-2 4 2z' },
];

export default function TrustBadges() {
  return (
    <section className="tb section-pad-sm">
      <div className="container">
        <div className="tb__grid">
          {badges.map((badge, i) => (
            <div key={badge.label} className={`tb__item fade-in fade-in-delay-${i % 4}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path strokeLinecap="round" strokeLinejoin="round" d={badge.path} />
              </svg>
              <span>{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
