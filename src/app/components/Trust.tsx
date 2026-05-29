export function Trust() {
  const tags = [
    { text: 'RAMS / Reliability Faculty', icon: '📚' },
    { text: 'PhD & MS Researchers', icon: '🎓' },
    { text: 'Practicing RAMS Engineers', icon: '⚙️' },
    { text: 'Safety & Assurance Professionals', icon: '🛡️' },
    { text: 'Defense & Aerospace Teams', icon: '✈️' },
    { text: 'Rail & Energy Sectors', icon: '🏭' },
    { text: 'Systems Engineers', icon: '💻' },
    { text: 'Asset Lifecycle Specialists', icon: '📊' },
    { text: 'Reliability Consultancies', icon: '📋' },
    { text: 'Industrial OEM Teams', icon: '🏗️' },
    { text: 'Maintenance & MRO Teams', icon: '🔧' },
  ];

  return (
    <section
      className="py-16 md:py-20 bg-[#F9FAFB]"
      id="beta"
    >
      <div className="max-w-[1280px] mx-auto px-10">
        {/* Section label */}
        <div className="text-center mb-6">
          <span
            className="inline-block text-[0.75rem] uppercase tracking-[0.16em] text-[var(--rams-accent)]"
            style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}
          >
            WHO USES RAMS360
          </span>
        </div>

        <h2
          className="text-[32px] text-[#1a1a2e] text-center mb-6 leading-[1.2] animate-fade-in-up"
          style={{ fontFamily: 'var(--ff-head)', fontWeight: 800 }}
        >
          EVERY ENGINEER WHO'S EVER WISHED<br />
          THEIR TOOLS WORKED TOGETHER.
        </h2>

        <p className="text-center text-[#6b5b8a] text-[1.05rem] max-w-[820px] mx-auto mb-12 leading-[1.7] animate-fade-in-up">
          From hands-on reliability analysts to RAMS consultants managing multiple clients to academic researchers building the next generation of practitioners.
        </p>

        <div className="flex flex-wrap justify-center gap-3 md:gap-4 animate-fade-in-up">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-4 md:px-5 py-2.5 border border-[#d0c4e0] rounded-full text-[0.75rem] md:text-[0.8rem] text-[#6b5b8a] bg-white transition-all hover:border-[var(--rams-accent)] hover:text-[var(--rams-accent)] hover:shadow-sm"
              style={{ fontFamily: 'var(--ff-head)', fontWeight: 600 }}
            >
              <span className="mr-1.5">{tag.icon}</span>
              {tag.text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
