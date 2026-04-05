import { useState, useEffect } from 'react';
import './AnnouncementBar.css';

const messages = [
  'Free shipping on orders over $60 — US & Canada',
  'Join 40,000+ skin science enthusiasts — 15% off your first order',
  'New: Retinol Night Reset is live — Shop now →',
];

export default function AnnouncementBar() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % messages.length);
        setFade(true);
      }, 300);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="announcement-bar">
      <p className={`announcement-bar__text ${fade ? 'show' : ''}`}>
        {messages[index]}
      </p>
    </div>
  );
}
