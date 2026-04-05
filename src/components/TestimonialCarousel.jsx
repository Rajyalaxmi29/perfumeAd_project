import { useState } from 'react';
import { reviews } from '../data/products';
import './TestimonialCarousel.css';

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % reviews.length);
  const prev = () => setCurrent((c) => (c - 1 + reviews.length) % reviews.length);

  return (
    <section className="tc section-pad">
      <div className="container">
        <div className="tc__inner fade-in">
          <svg className="tc__quote" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <div className="tc__track">
            {reviews.map((rev, i) => (
              <div
                key={i}
                className={`tc__slide ${i === current ? 'active' : ''}`}
                style={{ transform: `translateX(${(i - current) * 100}%)` }}
              >
                <div className="tc__stars">★★★★★</div>
                <p className="tc__text">&ldquo;{rev.text}&rdquo;</p>
                <div className="tc__author-row">
                  <span className="tc__author">{rev.author}</span>
                  <span className="tc__badge">{rev.label}</span>
                </div>
                <span className="tc__product">{rev.product}</span>
              </div>
            ))}
          </div>
          <div className="tc__controls">
            <button onClick={prev} aria-label="Previous review">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <div className="tc__dots">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  className={`tc__dot ${i === current ? 'active' : ''}`}
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
            <button onClick={next} aria-label="Next review">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
