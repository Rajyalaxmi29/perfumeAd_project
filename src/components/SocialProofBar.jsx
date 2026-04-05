import './SocialProofBar.css';

const items = [
  '4.9 Stars',
  '12,000+ Reviews',
  'Free Shipping Over $60',
  'Dermatologist Tested',
  'Clean Ingredients',
  'Cruelty-Free',
  'No Fillers',
  'Leaping Bunny Certified',
  'Plastic Neutral',
  '4.9 Stars',
  '12,000+ Reviews',
  'Free Shipping Over $60',
  'Dermatologist Tested',
  'Clean Ingredients',
  'Cruelty-Free',
  'No Fillers',
];

export default function SocialProofBar() {
  return (
    <div className="spb">
      <div className="spb__track" aria-hidden="true">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="spb__item">
            <span className="spb__dot"></span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
