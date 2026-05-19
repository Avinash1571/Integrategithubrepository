export function Trust() {
  const tags = [
    'RAMS / Reliability Faculty',
    'PhD & MS Researchers',
    'Practicing RAMS Engineers',
    'Safety & Assurance Professionals',
    'Defense & Aerospace',
    'Rail & Energy Sectors',
    'Systems Engineers',
    'Asset Lifecycle Specialists',
  ];

  return (
    <section className="bg-[var(--rams-gray-100)] py-12" id="beta">
      <div className="max-w-[1280px] mx-auto px-10">
        <h2
          className="text-[1rem] text-[var(--rams-primary)] text-center mb-6 uppercase tracking-[0.06em] animate-fade-in-up"
          style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}
        >
          Who Is This For?
        </h2>
        <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-5 py-2 border border-[var(--rams-gray-200)] rounded-full text-[0.72rem] text-[var(--rams-gray-600)] bg-white transition-all hover:border-[var(--rams-accent)] hover:text-[var(--rams-accent)]"
              style={{ fontFamily: 'var(--ff-head)', fontWeight: 600 }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
