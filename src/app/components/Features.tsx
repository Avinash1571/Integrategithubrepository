export function Features() {
  const features = [
    {
      title: 'Cloud-Native SaaS',
      description:
        'Browser-based. No installs, no IT overhead. Simplified access for remote teams with seamless updates.',
      link: 'Replaces desktop installs',
    },
    {
      title: 'Modern Experience',
      description:
        'Clean interface designed for daily engineering use. Reduces training effort and increases adoption.',
      link: 'Replaces outdated UIs',
    },
    {
      title: 'Spreadsheet Compatible',
      description:
        'Full Excel import and export across all modules. Reuse existing data and share with stakeholders.',
      link: 'Works with your data',
    },
    {
      title: 'Scalable Platform',
      description:
        'From small teams to enterprise. Adapt without changing platforms as your organization grows.',
      link: 'Grows with you',
    },
  ];

  return (
    <section className="py-20 bg-white" id="why">
      <div className="max-w-[1280px] mx-auto px-10">
        <h2
          className="text-[clamp(2rem,4vw,3rem)] text-[var(--rams-primary)] text-center mb-2 uppercase tracking-[0.06em] animate-fade-in-up"
          style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}
        >
          Why RAMS360
        </h2>
        <p className="text-center text-[var(--rams-gray-600)] text-[0.92rem] max-w-[600px] mx-auto mb-12 leading-[1.7] animate-fade-in-up">
          Not another desktop tool with a steep learning curve. A modern web platform built for how engineering
          teams work today.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 animate-fade-in-up">
          {features.map((feature, index) => (
            <div
              key={index}
              className="border border-[var(--rams-gray-200)] rounded p-8 transition-all duration-[350ms] relative overflow-hidden hover:shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:-translate-y-[3px] before:content-[''] before:absolute before:bottom-0 before:left-0 before:right-0 before:h-[3px] before:bg-[var(--rams-accent)] before:scale-x-0 before:transition-transform before:origin-left hover:before:scale-x-100"
            >
              <h3
                className="text-[0.9rem] text-[var(--rams-primary)] mb-[0.4rem]"
                style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}
              >
                {feature.title}
              </h3>
              <p className="text-[0.82rem] text-[var(--rams-gray-600)] leading-[1.6]">{feature.description}</p>
              <a
                href="#"
                className="inline-block mt-3 text-[0.7rem] text-[var(--rams-accent)] uppercase tracking-[0.08em] transition-colors hover:text-[var(--rams-accent-dark)]"
                style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}
              >
                {feature.link} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
