import './Newsletter.css';

export default function Newsletter() {
  return (
    <section className="nl section-pad">
      <div className="container">
        <div className="nl__inner fade-in">
          <h2 className="nl__title">Your skin has questions.<br />We have answers.</h2>
          <p className="nl__sub">Join 40,000 readers — get expert guides, early launches, and 15% off your first order.</p>
          <form className="nl__form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your email address" required className="nl__input" />
            <button type="submit" className="btn-primary nl__btn">Join Lumio</button>
          </form>
          <p className="nl__micro">No spam, ever. Unsubscribe anytime.</p>
        </div>
      </div>
    </section>
  );
}
