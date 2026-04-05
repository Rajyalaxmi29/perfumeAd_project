import PageTemplate from '../components/PageTemplate';

export default function Expertise() {
  return (
    <PageTemplate title="Our Expertise">
      <p className="mb-8">
        We specialize in the alchemy of brand perception. By meticulously analyzing the negative space surrounding your brand—what remains unsaid, unseen, and unexplored—we craft strategies that cut through the noise.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 text-left">
        <div className="border-t border-white/10 pt-6">
          <h3 className="text-2xl font-serif text-white mb-3">Brand Architecture</h3>
          <p className="text-gray-400 text-sm">Structuring your identity for maximal longevity and resonance across all touchpoints.</p>
        </div>
        <div className="border-t border-white/10 pt-6">
          <h3 className="text-2xl font-serif text-white mb-3">Digital Environments</h3>
          <p className="text-gray-400 text-sm">Designing immersive, frictionless web experiences that reflect the true gravity of your brand.</p>
        </div>
        <div className="border-t border-white/10 pt-6">
          <h3 className="text-2xl font-serif text-white mb-3">Visual Alchemy</h3>
          <p className="text-gray-400 text-sm">Translating complex strategy into refined, minimalist visual assets that speak without shouting.</p>
        </div>
        <div className="border-t border-white/10 pt-6">
          <h3 className="text-2xl font-serif text-white mb-3">Atmospheric Positioning</h3>
          <p className="text-gray-400 text-sm">Defining the aura and mood of your product to attract discerning demographics.</p>
        </div>
      </div>
    </PageTemplate>
  );
}
