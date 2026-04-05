import { products } from '../data/aetherProducts';
import PageTemplate from '../components/PageTemplate';
import { Link } from 'react-router-dom';

export default function Shop({ cartCount }) {
  return (
    <PageTemplate title="Collections" badge="Shop All">
      <p className="mb-12 max-w-2xl">
        A curated selection of our most potent extraits. We build olfactory environments that elevate substance over spectacle.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 pb-12 max-w-5xl">
        {products.map((p, idx) => (
          <Link to={`/products/${p.id}`} key={p.id} className="group cursor-pointer block">
            <div className="w-full aspect-[4/5] bg-[#111] overflow-hidden mb-6 rounded-lg border border-white/5 relative">
              <img src={p.image} alt={p.name} className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[2s]" />
              <div className="absolute inset-0 bg-[#FF4500]/5 group-hover:bg-transparent transition-colors duration-500"></div>
              {p.badge && (
                <div className="absolute top-6 left-6 text-xs text-white bg-black/50 backdrop-blur-sm border border-white/20 px-3 py-1 rounded-full uppercase tracking-widest">{p.badge}</div>
              )}
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-3xl font-serif text-white group-hover:text-[#FF4500] transition-colors">{p.name}</h3>
                <p className="text-gray-500 mt-2 tracking-widest text-sm uppercase">{p.tagline}</p>
              </div>
              <span className="text-white font-serif tabular-nums text-lg">₹{p.price.toLocaleString('en-IN')}</span>
            </div>
          </Link>
        ))}
      </div>
    </PageTemplate>
  );
}
