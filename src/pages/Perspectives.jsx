import PageTemplate from '../components/PageTemplate';

export default function Perspectives() {
  return (
    <PageTemplate title="Perspectives">
      <p className="mb-12">
        Essays, thoughts, and observations on the intersection of design, technology, and culture.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <article className="bg-[#111] p-8 rounded-2xl border border-white/5 hover:border-[#FF4500]/30 transition-colors cursor-pointer group">
          <span className="text-[#FF4500] text-sm uppercase tracking-widest block mb-4">Design Theory</span>
          <h2 className="text-2xl font-serif text-white mb-4 group-hover:text-[#ffe0e0] transition-colors">The Death of Maximalism</h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-8">
            Why the future of luxury lies in aggressive subtraction rather than boundless addition.
          </p>
          <span className="text-white/50 text-xs uppercase tracking-widest">Read Article →</span>
        </article>

        <article className="bg-[#111] p-8 rounded-2xl border border-white/5 hover:border-[#FF4500]/30 transition-colors cursor-pointer group">
          <span className="text-[#FF4500] text-sm uppercase tracking-widest block mb-4">Culture</span>
          <h2 className="text-2xl font-serif text-white mb-4 group-hover:text-[#ffe0e0] transition-colors">Atmospheric Brutalism</h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-8">
            How defining the mood of an environment has eclipsed the necessity of its literal architecture.
          </p>
          <span className="text-white/50 text-xs uppercase tracking-widest">Read Article →</span>
        </article>
      </div>
    </PageTemplate>
  );
}
