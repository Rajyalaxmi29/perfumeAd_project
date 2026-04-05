import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data/aetherProducts';
import PageTemplate from '../components/PageTemplate';

export default function ProductDetail({ cartCount, onAddToCart }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === id);

  if (!product) {
    return <PageTemplate title="Not Found"><p>This formulation does not exist.</p></PageTemplate>;
  }

  const handleAdd = () => {
    onAddToCart();
    navigate('/cart');
  };

  return (
    <PageTemplate title={product.name} badge={product.badge}>
      <div className="flex flex-col md:flex-row gap-16 mt-8 pb-20 items-start">
        <div className="md:w-1/2 w-full aspect-[4/5] bg-[#111] rounded-2xl border border-white/10 relative overflow-hidden flex-shrink-0">
          <img src={product.image} alt={product.name} className="absolute inset-0 w-full h-full object-cover opacity-100" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
        </div>

        <div className="md:w-1/2 flex flex-col pt-4">
          <p className="text-[#FF4500] uppercase tracking-widest text-sm mb-4">{product.tagline}</p>
          <p className="text-3xl font-serif text-white italic mb-12" style={{ lineHeight: '1.4' }}>"{product.hook}"</p>
          
          <div className="flex items-center gap-6 mb-12 pb-12 border-b border-white/10">
            <span className="text-4xl font-serif text-white">₹{product.price.toLocaleString('en-IN')}</span>
            {product.comparePrice && <span className="text-xl line-through text-gray-600">₹{product.comparePrice.toLocaleString('en-IN')}</span>}
            <button onClick={handleAdd} className="ml-auto bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-[#FF4500] hover:text-white transition-colors">
              Add to Collection
            </button>
          </div>

          <div className="mb-12">
            <h4 className="text-white font-serif text-xl mb-4">The Narrative</h4>
            <p className="text-gray-400 font-light leading-relaxed">{product.description}</p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-white font-serif text-xl mb-4">Notes</h4>
              <ul className="text-gray-400 font-light space-y-2 text-sm">
                {product.features.map(f => <li key={f} className="flex items-center gap-2"><span className="w-1 h-1 bg-[#FF4500] rounded-full"></span>{f}</li>)}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-serif text-xl mb-4">Alchemy</h4>
              <ul className="text-gray-400 font-light space-y-2 text-sm">
                {product.benefits.map(b => <li key={b} className="flex items-center gap-2"><span className="w-1 h-1 bg-[#FF4500] rounded-full"></span>{b}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}
