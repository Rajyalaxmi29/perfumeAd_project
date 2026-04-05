import './ProductCard.css';

export default function ProductCard({ product, onAddToCart }) {
  const savings = product.comparePrice
    ? Math.round(((product.comparePrice - product.price) / product.comparePrice) * 100)
    : null;

  return (
    <div className="pc">
      <a href={`/products/${product.id}`} className="pc__image-wrap">
        <img
          src={product.image}
          alt={product.name}
          className="pc__image"
          loading="lazy"
        />
        {product.badge && (
          <span className="pc__badge">{product.badge}</span>
        )}
        {savings && (
          <span className="pc__save">Save {savings}%</span>
        )}
      </a>
      <div className="pc__body">
        <span className="pc__type">{product.type}</span>
        <h3 className="pc__name">
          <a href={`/products/${product.id}`}>{product.name}</a>
        </h3>
        <p className="pc__tagline">{product.tagline}</p>
        <div className="pc__price-row">
          <span className="pc__price">${product.price}</span>
          {product.comparePrice && (
            <span className="pc__compare">${product.comparePrice}</span>
          )}
        </div>
        <button
          className="btn-primary pc__atc"
          onClick={() => onAddToCart && onAddToCart(product)}
          id={`atc-${product.id}`}
        >
          Add to Ritual
        </button>
      </div>
    </div>
  );
}
