import PageTemplate from '../components/PageTemplate';
import { Link } from 'react-router-dom';

export default function Cart({ cartCount }) {
  return (
    <PageTemplate title="The Vault">
      <div className="mt-8 pb-32">
        {cartCount === 0 ? (
          <div className="bg-[#111] border border-white/5 rounded-2xl p-16 text-center">
             <p className="text-gray-500 mb-8 font-light">Your collection is currently empty.</p>
             <Link to="/products" className="inline-flex bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-[#FF4500] hover:text-white transition-colors">
               Unlock the Void
             </Link>
          </div>
        ) : (
          <div className="flex flex-col md:flex-row gap-16">
            <div className="flex-1 space-y-8">
               <div className="border border-[#FF4500]/30 bg-[#FF4500]/5 p-4 rounded-lg text-sm text-[#FF4500] text-center mb-8">
                  Included: Complimentary 2ml Discovery vial with every full Extrait.
               </div>

               <div className="flex items-center gap-6 pb-8 border-b border-white/5">
                 <div className="w-24 h-32 bg-[#111] rounded overflow-hidden relative">
                    <img src="/obsidian_bottle.png" className="absolute inset-0 w-full h-full object-cover opacity-100" />
                 </div>
                 <div className="flex-1">
                   <h4 className="text-xl font-serif text-white mb-2">Obsidian Extrait</h4>
                   <p className="text-gray-500 text-sm">Qty: {cartCount}</p>
                 </div>
                 <div className="text-xl font-serif text-white">₹{(cartCount * 15500).toLocaleString('en-IN')}</div>
               </div>
            </div>

            <div className="w-full md:w-[380px] bg-[#111] border border-white/5 p-8 rounded-2xl h-fit">
               <h3 className="text-2xl font-serif text-white mb-8 border-b border-white/5 pb-4">Summary</h3>
               
               <div className="flex justify-between mb-4 text-gray-400">
                 <span>Subtotal</span>
                 <span>₹{(cartCount * 15500).toLocaleString('en-IN')}</span>
               </div>
               <div className="flex justify-between mb-8 text-gray-400">
                 <span>Vault Delivery (Insured)</span>
                 <span className="text-[#FF4500] uppercase tracking-widest text-xs self-center">Complimentary</span>
               </div>
               
               <div className="flex justify-between mb-8 pt-4 border-t border-white/5 text-white font-serif text-2xl">
                 <span>Total</span>
                 <span>₹{(cartCount * 15500).toLocaleString('en-IN')}</span>
               </div>

               <Link to="/checkout" className="flex items-center justify-center w-full bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-[#FF4500] hover:text-white transition-colors">
                 Secure Allocation
               </Link>
            </div>
          </div>
        )}
      </div>
    </PageTemplate>
  );
}
