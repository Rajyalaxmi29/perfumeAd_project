import { useNavigate } from 'react-router-dom';

export default function Checkout({ cartCount }) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center py-20 px-6">
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-16">
        
        {/* Left Side - Form */}
        <div className="space-y-12">
          <div>
            <h1 className="text-3xl font-serif text-white mb-2">AETHER.</h1>
            <p className="text-gray-400 font-light text-sm">Express Checkout</p>
          </div>

          <form className="space-y-8" onSubmit={(e) => { e.preventDefault(); alert('Test Order Placed Successfully!'); navigate('/'); }}>
            <div>
              <h3 className="text-xl font-serif text-white mb-6 border-b border-white/10 pb-2">Coordinates</h3>
              <div className="space-y-4">
                <input type="email" placeholder="Email Address" required className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#FF4500] outline-none font-light" />
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="First Name" required className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#FF4500] outline-none font-light" />
                  <input type="text" placeholder="Last Name" required className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#FF4500] outline-none font-light" />
                </div>
                <input type="text" placeholder="Delivery Address" required className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#FF4500] outline-none font-light" />
              </div>
            </div>

            <div>
              <h3 className="text-xl font-serif text-white mb-6 border-b border-white/10 pb-2">Vault Allocation (Payment)</h3>
              <div className="space-y-4">
                <input type="text" placeholder="Card Number (Test)" required className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#FF4500] outline-none font-light" />
                <div className="grid grid-cols-3 gap-4">
                  <input type="text" placeholder="MM/YY" required className="col-span-2 w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#FF4500] outline-none font-light" />
                  <input type="text" placeholder="CVC" required className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#FF4500] outline-none font-light" />
                </div>
              </div>
            </div>

            <button type="submit" className="w-full bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-[#FF4500] hover:text-white transition-colors cursor-pointer text-lg">
              Authorize Payment
            </button>
          </form>
        </div>

        {/* Right Side - Summary */}
        <div className="bg-[#111] border border-white/5 rounded-2xl p-6 md:p-8 h-fit flex-col w-full order-first md:order-last overflow-hidden">
           <h3 className="text-xl font-serif text-white mb-8 border-b border-white/5 pb-4">Secure Ledger</h3>
           <div className="flex items-center gap-4 mb-8">
             <div className="w-16 h-20 bg-[#222] rounded overflow-hidden relative">
                <img src="/obsidian_bottle.png" className="absolute inset-0 w-full h-full object-cover opacity-100" />
             </div>
             <div className="flex-1">
               <h4 className="font-serif text-white text-sm">Obsidian Extrait</h4>
               <p className="text-gray-500 text-xs mt-1">Qty: {cartCount > 0 ? cartCount : 1}</p>
             </div>
             <div className="text-white font-serif">₹{((cartCount > 0 ? cartCount : 1) * 15500).toLocaleString('en-IN')}</div>
           </div>

           <div className="space-y-4 text-sm text-gray-400 border-t border-white/5 pt-6">
             <div className="flex justify-between">
               <span>Subtotal</span>
               <span>₹{((cartCount > 0 ? cartCount : 1) * 15500).toLocaleString('en-IN')}</span>
             </div>
             <div className="flex justify-between">
               <span>Shipping</span>
               <span className="text-[#FF4500]">Complimentary</span>
             </div>
             <div className="flex justify-between text-white font-serif text-xl border-t border-white/5 pt-6 mt-6">
               <span>Total Allocation</span>
               <span>₹{((cartCount > 0 ? cartCount : 1) * 15500).toLocaleString('en-IN')}</span>
             </div>
           </div>
           
           <div className="mt-8 flex items-center justify-center gap-2 text-white/30 text-xs uppercase tracking-widest">
             <iconify-icon icon="lucide:lock" class="text-lg"></iconify-icon> Secure 256-bit Encryption
           </div>
        </div>

      </div>
    </div>
  );
}
