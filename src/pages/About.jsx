import PageTemplate from '../components/PageTemplate';

export default function About() {
  return (
    <PageTemplate title="Our Story">
      <div className="max-w-3xl pb-32 font-light">
        <p className="text-xl leading-relaxed text-gray-300 mb-8 italic font-serif">
           "We started AETHER because we were exhausted by the loud, overly-branded, synthetic fragrances dominating the market."
        </p>

        <p className="text-gray-400 mb-6 leading-relaxed">
          We believe elegance is refusal. By stripping away cheap alcohol fillers and focusing strictly on highly concentrated, raw botanicals, we’ve created a line of extraits that communicate everything without speaking.
        </p>

        <p className="text-gray-400 mb-12 leading-relaxed">
          Every batch is hand-poured in our underground New York studio. We source our organic materials directly from their origin: our vanilla strictly from Madagascar, our vetiver from Haiti, our cedarwood from the Atlas Mountains. 
        </p>

        <h3 className="text-2xl font-serif text-white mb-6 pt-8 border-t border-white/10">The Anti-Establishment Formula</h3>
        <p className="text-gray-400 leading-relaxed">
          The traditional fragrance industry relies heavily on masking the wearer. We rely on symbiosis. An AETHER Extrait smells differently on every single client because the pure oils react organically to your unique body heat and skin chemistry. It is not just perfume. It is your signature.
        </p>
      </div>
    </PageTemplate>
  );
}
