import './BenefitsSection.css';

export default function BenefitsSection() {
  return (
    <section className="benefits section-pad">
      <div className="container">
        <div className="benefits__grid">
          <div className="benefits__item fade-in fade-in-delay-1">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4" />
              <path d="M12 8h.01" />
            </svg>
            <h3>Transparent Formula</h3>
            <p>Every ingredient listed. Every source disclosed. Nothing hidden, ever.</p>
          </div>
          <div className="benefits__item fade-in fade-in-delay-2">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
              <path d="M9 12l2 2 4-4" />
              <circle cx="12" cy="12" r="10" />
            </svg>
            <h3>Dermatologist Tested</h3>
            <p>Clinically validated formulas with proven efficacy at published concentrations.</p>
          </div>
          <div className="benefits__item fade-in fade-in-delay-3">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
              <path d="M12 2v20" />
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
            <h3>Plastic-Neutral</h3>
            <p>Each order funds plastic recovery equal to 3× its packaging weight.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
