import PageTemplate from '../components/PageTemplate';

export default function Contact() {
  return (
    <PageTemplate title="Initiate Contact">
      <p className="mb-12">
        Let us design the atmosphere around your identity. We accept direct inquiries regarding bespoke fragrance compositions and standard orders.
      </p>

      <form className="mt-12 max-w-2xl pb-32" onSubmit={(e) => { e.preventDefault(); alert('Transmission Sent. We will review shortly.'); }}>
        <div className="space-y-8">
          <div>
            <label className="block text-xs uppercase tracking-widest text-[#FF4500] mb-3">Identity</label>
            <input 
              type="text" 
              placeholder="Your Name" 
              className="w-full bg-transparent border-b border-white/20 focus:border-[#FF4500] py-3 text-white outline-none transition-colors placeholder:text-white/20 font-light"
              required 
            />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-widest text-[#FF4500] mb-3">Coordinates</label>
            <input 
              type="email" 
              placeholder="Email Address" 
              className="w-full bg-transparent border-b border-white/20 focus:border-[#FF4500] py-3 text-white outline-none transition-colors placeholder:text-white/20 font-light"
              required 
            />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-widest text-[#FF4500] mb-3">The Objective</label>
            <textarea 
              rows="4" 
              placeholder="Describe the nature of your inquiry (Order issue, bespoke commission...)" 
              className="w-full bg-transparent border-b border-white/20 focus:border-[#FF4500] py-3 text-white outline-none transition-colors placeholder:text-white/20 font-light resize-none"
              required 
            ></textarea>
          </div>
        </div>

        <button 
          type="submit" 
          className="mt-12 px-8 py-4 rounded-full bg-white text-black font-medium text-sm hover:scale-105 transition-transform duration-300 inline-flex items-center gap-3 cursor-pointer"
        >
          <span>Transmit Signal</span>
        </button>
      </form>
    </PageTemplate>
  );
}
