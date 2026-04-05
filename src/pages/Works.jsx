import PageTemplate from '../components/PageTemplate';

export default function Works() {
  return (
    <PageTemplate title="Selected Works">
      <p className="mb-12">
        A curated selection of our most resonant collaborations. We build environments that elevate substance over spectacle.
      </p>

      <div className="space-y-24 mt-16 pb-12">
        <div className="group cursor-pointer">
          <div className="w-full aspect-[21/9] bg-[#111] overflow-hidden mb-6 rounded-lg border border-white/5 relative">
             <div className="absolute inset-0 bg-[#FF4500]/5 group-hover:bg-[#FF4500]/10 transition-colors duration-500"></div>
          </div>
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-3xl font-serif text-white group-hover:text-[#FF4500] transition-colors">Aether & Co.</h3>
              <p className="text-gray-500 mt-2 tracking-widest text-sm uppercase">Brand Identity / Digital</p>
            </div>
            <span className="text-white/30 font-serif tabular-nums text-lg">01</span>
          </div>
        </div>

        <div className="group cursor-pointer">
          <div className="w-full aspect-[21/9] bg-[#111] overflow-hidden mb-6 rounded-lg border border-white/5 relative">
             <div className="absolute inset-0 bg-white/5 group-hover:bg-white/10 transition-colors duration-500"></div>
          </div>
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-3xl font-serif text-white group-hover:text-[#FF4500] transition-colors">Vanguard Protocol</h3>
              <p className="text-gray-500 mt-2 tracking-widest text-sm uppercase">Creative Direction</p>
            </div>
            <span className="text-white/30 font-serif tabular-nums text-lg">02</span>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}
