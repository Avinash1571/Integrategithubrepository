import { ClipboardCheck, Library, BadgeCheck } from 'lucide-react';

interface Standard {
  id: string;
  name: string;
  category: string;
  description: string;
  points: string[];
  icon: JSX.Element;
  color: string;
}

export function Standards() {
  const standards: Standard[] = [
    {
      id: 'mil-hdbk-217f',
      name: 'MIL-HDBK-217F',
      category: 'Reliability Prediction',
      description:
        'Industry-standard methodology for predicting failure rates of electronic components under defined environmental and operational conditions.',
      points: [
        'Used for quantitative reliability prediction (λ - failure rate)',
        'Supports early design phase reliability estimation',
        'Covers components like resistors, capacitors, ICs, semiconductors',
        'Applies environmental factors (Ground, Airborne, Naval, Space)',
        'Forms baseline for MTBF calculations in electronic systems',
      ],
      icon: <ClipboardCheck className="w-8 h-8" />,
      color: '#0ea5e9',
    },
    {
      id: 'nprd-2011',
      name: 'NPRD 2011',
      category: 'Failure Rate Data',
      description:
        'Comprehensive database of empirical failure rates for mechanical and non-electronic components derived from field data.',
      points: [
        'Covers valves, pumps, bearings, connectors, structural components',
        'Based on real-world operational and field failure data',
        'Supports reliability modeling of mechanical systems',
        'Used in FMECA and system-level reliability analysis',
        'Complements MIL-HDBK-217F for complete system coverage',
      ],
      icon: <Library className="w-8 h-8" />,
      color: '#10b981',
    },
    {
      id: 'nprd-2016',
      name: 'NPRD 2016',
      category: 'Failure Rate Data',
      description:
        'Enhanced and updated reliability database with expanded datasets and improved accuracy for modern mechanical systems.',
      points: [
        'Updated dataset with improved statistical confidence',
        'Includes broader component categories and industries',
        'Reflects modern materials, usage profiles, and environments',
        'Improves accuracy of system reliability predictions',
        'Used for advanced RAMS modeling and lifecycle analysis',
      ],
      icon: <BadgeCheck className="w-8 h-8" />,
      color: '#8b5cf6',
    },
  ];

  return (
    <section className="bg-[#F9FAFB] py-20" id="standards">
      <div className="max-w-[1280px] mx-auto px-10">
        <h2
          className="text-[clamp(2rem,4vw,3rem)] text-[var(--rams-primary)] text-center uppercase tracking-[0.06em] mb-4 animate-fade-in-up"
          style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}
        >
          Standards in Our Product
        </h2>

        <p className="text-center text-[var(--rams-gray-600)] text-[0.95rem] max-w-[720px] mx-auto mb-14 leading-[1.7] animate-fade-in-up">
          RAMS360 leverages proven industry standards to deliver accurate reliability predictions and
          failure rate analysis for both electronic and non-electronic systems.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in-up">
          {standards.map((standard) => (
            <div
              key={standard.id}
              className="bg-white rounded-xl p-8 transition-all duration-[350ms] hover:-translate-y-[6px] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] group"
            >
              <div
                className="w-16 h-16 rounded-lg flex items-center justify-center mb-5 transition-all duration-[350ms] group-hover:scale-110"
                style={{
                  background: `linear-gradient(135deg, ${standard.color}22, ${standard.color}08)`,
                  color: standard.color,
                }}
              >
                {standard.icon}
              </div>

              <div className="mb-2">
                <span
                  className="inline-block text-[0.68rem] uppercase tracking-[0.08em] px-3 py-1 rounded-full mb-3"
                  style={{
                    fontFamily: 'var(--ff-head)',
                    fontWeight: 700,
                    background: `${standard.color}15`,
                    color: standard.color,
                  }}
                >
                  {standard.category}
                </span>
              </div>

              <h3
                className="text-[1.1rem] text-[var(--rams-primary)] mb-3 tracking-[0.02em]"
                style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}
              >
                {standard.name}
              </h3>

              <p className="text-[0.88rem] text-[var(--rams-gray-600)] leading-[1.6] mb-4">
                {standard.description}
              </p>

              <ul className="space-y-2">
                {standard.points.map((point, index) => (
                  <li
                    key={index}
                    className="text-[0.8rem] text-[var(--rams-gray-600)] flex items-start gap-2"
                  >
                    <span
                      className="mt-[6px] w-[6px] h-[6px] rounded-full"
                      style={{ backgroundColor: standard.color }}
                    />
                    <span className="leading-[1.5]">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in-up">
          <p className="text-[0.85rem] text-[var(--rams-gray-500)] italic">
            Focused on industry-proven standards to ensure accuracy, consistency, and reliability
          </p>
        </div>
      </div>
    </section>
  );
}