import { JSX, useState } from 'react';
import { Link } from 'react-router';

interface Module {
  id: string;
  name: string;
  label: string;
  color: string;
  icon: JSX.Element;
  description: string;
  tagline: string;
  link?: string;
}

export function Solutions() {
  const [hoveredModule, setHoveredModule] = useState<string | null>(null);

  const modules: Module[] = [
    {
      id: 'pbs',
      name: 'PBS',
      label: 'Product\nBreakdown Structure',
      color: '#e8722a',
      link: '/modules/pbs',
      icon: (
        <svg viewBox="0 0 80 80" fill="none" className="w-[60%] h-[60%] relative z-[1]">
          <rect x="10" y="10" width="25" height="25" rx="4" fill="#e8722a" opacity="0.8" />
          <rect x="45" y="10" width="25" height="25" rx="4" fill="#e8722a" opacity="0.5" />
          <rect x="10" y="45" width="25" height="25" rx="4" fill="#e8722a" opacity="0.5" />
          <rect x="45" y="45" width="25" height="25" rx="4" fill="#e8722a" opacity="0.3" />
        </svg>
      ),
      description: 'System hierarchy: systems → subsystems → components. Foundation for all analysis.',
      tagline: 'What the system is',
    },
    {
      id: 'frp',
      name: 'FRP',
      label: 'Failure Rate\nPrediction',
      color: '#0ea5e9',
      link: '/modules/frp',
      icon: (
        <svg viewBox="0 0 80 80" fill="none" className="w-[60%] h-[60%] relative z-[1]">
          <line x1="15" y1="60" x2="30" y2="30" stroke="#0ea5e9" strokeWidth="4" strokeLinecap="round" />
          <line x1="30" y1="30" x2="45" y2="50" stroke="#0ea5e9" strokeWidth="4" strokeLinecap="round" />
          <line x1="45" y1="50" x2="65" y2="20" stroke="#0ea5e9" strokeWidth="4" strokeLinecap="round" />
          <circle cx="30" cy="30" r="4" fill="#0ea5e9" />
          <circle cx="65" cy="20" r="4" fill="#0ea5e9" />
        </svg>
      ),
      description: 'Expected failure frequency via manual entry or MIL-HDBK-217F standards.',
      tagline: 'How often things fail',
    },
    {
      id: 'mttr',
      name: 'MTTR',
      label: 'Mean Time\nTo Repair',
      color: '#10b981',
      link: '/modules/mttr',
      icon: (
        <svg viewBox="0 0 80 80" fill="none" className="w-[60%] h-[60%] relative z-[1]">
          <circle cx="40" cy="40" r="25" stroke="#10b981" strokeWidth="4" fill="none" />
          <line x1="40" y1="25" x2="40" y2="40" stroke="#10b981" strokeWidth="3" strokeLinecap="round" />
          <line x1="40" y1="40" x2="52" y2="46" stroke="#10b981" strokeWidth="3" strokeLinecap="round" />
        </svg>
      ),
      description: 'Repair duration, location, task breakdown, manpower, and spare availability.',
      tagline: 'How long repairs take',
    },
    {
      id: 'fmeca',
      name: 'FMECA',
      label: 'Failure Modes\nEffects & Criticality',
      color: '#f43f5e',
      link: '/modules/fmeca',
      icon: (
        <svg viewBox="0 0 80 80" fill="none" className="w-[60%] h-[60%] relative z-[1]">
          <path d="M40 15L62 55H18L40 15Z" fill="#f43f5e" opacity="0.7" />
          <circle cx="40" cy="42" r="3" fill="#fff" />
          <rect x="38" y="28" width="4" height="10" rx="2" fill="#fff" />
        </svg>
      ),
      description: 'Failure modes, severity, frequency, detectability. Risk priority and controls.',
      tagline: 'What failures mean',
    },
    {
      id: 'pm',
      name: 'PM MRA',
      label: 'Preventive\nMaintenance',
      color: '#8b5cf6',
      link: '/modules/pm',
      icon: (
        <svg viewBox="0 0 80 80" fill="none" className="w-[60%] h-[60%] relative z-[1]">
          <rect x="15" y="20" width="50" height="40" rx="4" stroke="#8b5cf6" strokeWidth="3" fill="none" />
          <line x1="15" y1="32" x2="65" y2="32" stroke="#8b5cf6" strokeWidth="2" />
          <circle cx="28" cy="45" r="4" fill="#8b5cf6" opacity="0.6" />
          <circle cx="42" cy="45" r="4" fill="#8b5cf6" opacity="0.8" />
          <circle cx="56" cy="45" r="4" fill="#8b5cf6" opacity="0.4" />
        </svg>
      ),
      description: 'Maintenance strategy, tasks, intervals, and manpower from FMECA data.',
      tagline: 'What maintenance to do',
    },
    {
      id: 'spares',
      name: 'Spares',
      label: 'Spare Parts\nAnalysis',
      color: '#f59e0b',
      link: '/modules/spares',
      icon: (
        <svg viewBox="0 0 80 80" fill="none" className="w-[60%] h-[60%] relative z-[1]">
          <rect x="20" y="30" width="40" height="30" rx="3" fill="#f59e0b" opacity="0.3" />
          <rect x="25" y="25" width="30" height="30" rx="3" fill="#f59e0b" opacity="0.5" />
          <rect x="30" y="20" width="20" height="30" rx="3" fill="#f59e0b" opacity="0.7" />
        </svg>
      ),
      description: 'Which parts, what quantity, when. Cost, lead time, and MOQ optimisation.',
      tagline: 'What to stock',
    },
    {
      id: 'safety',
      name: 'SPA',
      label: 'Safety\nAnalysis',
      color: '#38bdf8',
      link: '/modules/safety',
      icon: (
        <svg viewBox="0 0 80 80" fill="none" className="w-[60%] h-[60%] relative z-[1]">
          <path d="M40 12L60 24V44C60 56 40 68 40 68C40 68 20 56 20 44V24L40 12Z" fill="#38bdf8" opacity="0.6" />
          <polyline points="30,42 37,50 52,34" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      ),
      description: 'Hazards, severity, likelihood, mitigation actions, and residual risk tracking.',
      tagline: 'How safe the system is',
    },
    {
      id: 'fta',
      name: 'FTA',
      label: 'Fault Tree\nAnalysis',
      color: '#ec4899',
      link: '/modules/fta',
      icon: (
        <svg viewBox="0 0 80 80" fill="none" className="w-[60%] h-[60%] relative z-[1]">
          <circle cx="40" cy="20" r="8" fill="#ec4899" opacity="0.7" />
          <line x1="40" y1="28" x2="40" y2="40" stroke="#ec4899" strokeWidth="2" />
          <line x1="40" y1="40" x2="25" y2="50" stroke="#ec4899" strokeWidth="2" />
          <line x1="40" y1="40" x2="55" y2="50" stroke="#ec4899" strokeWidth="2" />
          <circle cx="25" cy="50" r="6" fill="#ec4899" opacity="0.6" />
          <circle cx="55" cy="50" r="6" fill="#ec4899" opacity="0.6" />
          <line x1="25" y1="56" x2="25" y2="65" stroke="#ec4899" strokeWidth="2" />
          <line x1="55" y1="56" x2="55" y2="65" stroke="#ec4899" strokeWidth="2" />
          <rect x="20" y="65" width="10" height="8" rx="2" fill="#ec4899" opacity="0.5" />
          <rect x="50" y="65" width="10" height="8" rx="2" fill="#ec4899" opacity="0.5" />
        </svg>
      ),
      description: 'Analyze system failures and identify root causes using logical fault trees.',
      tagline: 'Failure cause analysis',
    },
    {
      id: 'rbd',
      name: 'RBD',
      label: 'Reliability Block\nDiagram',
      color: '#14b8a6',
      link: '/modules/rbd',
      icon: (
        <svg viewBox="0 0 80 80" fill="none" className="w-[60%] h-[60%] relative z-[1]">
          <rect x="15" y="15" width="20" height="20" rx="3" fill="#14b8a6" opacity="0.6" />
          <rect x="45" y="15" width="20" height="20" rx="3" fill="#14b8a6" opacity="0.6" />
          <rect x="30" y="45" width="20" height="20" rx="3" fill="#14b8a6" opacity="0.6" />
          <line x1="25" y1="35" x2="25" y2="45" stroke="#14b8a6" strokeWidth="2" />
          <line x1="40" y1="45" x2="55" y2="35" stroke="#14b8a6" strokeWidth="2" />
          <line x1="40" y1="45" x2="25" y2="35" stroke="#14b8a6" strokeWidth="2" />
        </svg>
      ),
      description: 'Model system reliability and component dependencies using block diagrams.',
      tagline: 'System reliability structure',
    },
    {
      id: 'reports',
      name: 'Reports',
      label: 'Reports',
      color: '#06b6d4',
      link: '/modules/reports',
      icon: (
        <svg viewBox="0 0 80 80" fill="none" className="w-[60%] h-[60%] relative z-[1]">
          <rect x="20" y="15" width="40" height="50" rx="4" fill="#06b6d4" opacity="0.3" />
          <rect x="25" y="10" width="30" height="50" rx="3" fill="#06b6d4" opacity="0.6" />
          <line x1="30" y1="22" x2="50" y2="22" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" />
          <line x1="30" y1="30" x2="50" y2="30" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" />
          <line x1="30" y1="38" x2="45" y2="38" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" />
          <line x1="30" y1="46" x2="48" y2="46" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
      description: 'Generate and download project reports across all analysis modules.',
      tagline: 'Consolidated reporting',
    },
  ];

  return (
    <section className="bg-white py-20 scroll-mt-[80px]" id="modules">
      <div className="max-w-[1280px] mx-auto px-10">
        <div className="w-1/2 mx-auto h-[1px] bg-gray-200 mb-8"></div>
        <h2
          className="text-[clamp(2rem,4vw,3rem)] text-[#1a1a2e] text-center uppercase tracking-[0.06em] mb-4 animate-fade-in-up"
          style={{ fontFamily: 'var(--ff-head)', fontWeight: 800 }}
        >
          Connected Analysis Modules
        </h2>
        <p className="text-center text-[#4a4a6a] text-[0.95rem] max-w-[720px] mx-auto mb-14 leading-[1.7] animate-fade-in-up">
          Every module is linked. PBS forms the base. Failure rates feed FMECA. FMECA drives maintenance.
          RAMS360 connects PBS, Failure Prediction, MTTR, FMECA, Maintenance, Spare Parts, Safety, FTA, RBD, and Reports into one unified reliability ecosystem.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 animate-fade-in-up">
          {modules.map((module, index) => {
            const content = (
              <>
                {/* Number Badge */}
                <div className="absolute top-5 right-5 text-gray-300 text-sm font-bold z-10">
                  {String(index + 1).padStart(2, '0')}
                </div>

                {/* Icon */}
                <div
                  className="w-[90px] h-[90px] rounded-xl flex items-center justify-center mb-5 mx-auto"
                  style={{
                    background: `linear-gradient(135deg, ${module.color}22, ${module.color}14)`,
                  }}
                >
                  <div style={{ color: module.color }} className="w-[90px] h-[90px] flex items-center justify-center">
                    {module.icon}
                  </div>
                </div>

                {/* Title */}
                <h3
                  className="text-[#1a1a2e] text-[1rem] mb-3 leading-tight text-center"
                  style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}
                >
                  {module.label.replace('\n', ' ')}
                </h3>

                {/* Description */}
                <p className="text-[#6b7280] text-[0.82rem] leading-relaxed text-center mb-6 flex-grow">
                  {module.description}
                </p>

                {/* Arrow Button */}
                <div className="flex justify-center mt-auto">
                  <div className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center transition-all duration-300 hover:border-gray-400 hover:bg-gray-50">
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="text-gray-400">
                      <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </>
            );

            const commonProps = {
              className: "relative cursor-pointer transition-all duration-300 hover:-translate-y-2 block p-7 rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md hover:border-gray-300 min-h-[300px] flex flex-col",
              onMouseEnter: () => setHoveredModule(module.id),
              onMouseLeave: () => setHoveredModule(null),
            };

            return module.link ? (
              <Link key={module.id} to={module.link} {...commonProps}>
                {content}
              </Link>
            ) : (
              <div key={module.id} {...commonProps}>{content}</div>
            );
          })}
        </div>

        <div className="text-center mt-10 animate-fade-in-up">
          
        </div>
      </div>
    </section>
  );
}