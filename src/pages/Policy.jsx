import PageTemplate from '../components/PageTemplate';

export default function Policy({ title, content }) {
  return (
    <PageTemplate title={title}>
      <div className="max-w-3xl pb-32 font-light text-gray-400 leading-relaxed space-y-6">
        <p>{content}</p>
      </div>
    </PageTemplate>
  );
}
