import { faqs } from '../data/aetherProducts';
import PageTemplate from '../components/PageTemplate';

export default function FAQ() {
  return (
    <PageTemplate title="Frequently Asked Questions">
      <div className="max-w-3xl pb-32">
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-[#111] p-8 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
              <h3 className="font-serif text-xl text-white mb-4">{faq.q}</h3>
              <p className="text-gray-400 font-light leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/10 text-center">
           <p className="text-gray-500 text-sm mb-4">Still have unanswered questions?</p>
           <a href="/contact" className="text-[#FF4500] uppercase tracking-widest text-xs hover:text-white transition-colors">Initiate Contact</a>
        </div>
      </div>
    </PageTemplate>
  );
}
