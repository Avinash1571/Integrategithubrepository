export function Features() {
  const features = [
    {
      title: 'Cloud-native SaaS',
      description:
        'Browser-based. No installs, no IT overhead, no single-machine licence. Remote users, contractors, and academic partners all work in the same environment, always on the latest version.',
      link: 'REPLACES DESKTOP INSTALLS',
      icon: '✓',
    },
    {
      title: 'Modern experience',
      description:
        'Designed for engineers who use it every day, not quarterly. Clean, logical, fast. Reduces training time and increases the analysis work that actually gets done — rather than tool management.',
      link: 'REPLACES OUTDATED UIS',
      icon: '≡',
    },
    {
      title: 'Spreadsheet compatible',
      description:
        "Full Excel import and export across all ten modules. Your existing data isn't abandoned. It's upgraded. Share structured, standardised reports with customers, certifiers, and programme managers.",
      link: 'WORKS WITH YOUR DATA',
      icon: '⊞',
    },
    {
      title: 'Scalable platform',
      description:
        'Role-based access at the module level. Company Admin controls all projects. Engineers manage their own. Reviewers get read access without edit risk. From solo consultant to enterprise team — no platform change needed.',
      link: 'GROWS WITH YOU',
      icon: '⚬',
    },
  ];

  return (
    <section className="py-20 bg-white" id="why">
      <div className="max-w-[1280px] mx-auto px-10">
        {/* Section label */}
        <div className="text-center mb-6">
          <span
            className="inline-block text-[0.75rem] uppercase tracking-[0.16em] text-[var(--rams-accent)]"
            style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}
          >
            WHY RAMS360
          </span>
        </div>

        <h2
          className="text-[32px] text-[#1a1a2e] text-center mb-6 animate-fade-in-up"
          style={{ fontFamily: 'var(--ff-head)', fontWeight: 800, lineHeight: 1.2 }}
        >
          NOT ANOTHER DESKTOP TOOL<br />
          WITH A STEEP LEARNING CURVE.
        </h2>

        <p className="text-center text-[#6b5b8a] text-[1.05rem] max-w-[820px] mx-auto mb-12 leading-[1.7] animate-fade-in-up">
          A modern web platform built for how engineering teams actually work in 2026 — collaborative, distributed, and too busy for Windows installers.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 animate-fade-in-up">
          {features.map((feature, index) => (
            <div
              key={index}
              className="border border-[var(--rams-gray-200)] rounded-lg p-8 transition-all duration-[350ms] relative overflow-hidden hover:shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:-translate-y-[3px] bg-white"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-lg bg-[#fff5f0] border border-[#fed7aa] flex items-center justify-center mb-5 text-[var(--rams-accent)] text-2xl">
                {feature.icon}
              </div>

              <h3
                className="text-[1rem] text-[#1a1a2e] mb-3"
                style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}
              >
                {feature.title}
              </h3>
              <p className="text-[0.88rem] text-[#6b5b8a] leading-[1.65] mb-4">{feature.description}</p>
              <div
                className="text-[0.65rem] text-[var(--rams-accent)] uppercase tracking-[0.1em]"
                style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}
              >
                {feature.link} 
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
