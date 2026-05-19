import { ArrowLeft } from 'lucide-react';
import logoImage from '../../assets/ba0f8d6daaec390f80886c87b4992a47b7e1a9ad.png';
import { Link } from 'react-router';
import { useEffect, useState } from 'react';
import { ContactFormModal } from "../components/ContactForm";


export function RBDLandingPage() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="overflow-x-hidden bg-white">
      {/* Header with back button */}
      <header className="fixed top-0 left-0 right-0 z-[400] bg-white shadow-[0_2px_20px_rgba(0,0,0,0.08)]">
        <div className="max-w-[1280px] mx-auto px-10 flex items-center justify-between h-[72px]">
          <Link to="/" className="flex items-center gap-3 text-[var(--rams-gray-600)] hover:text-[#14b8a6] transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="text-[0.78rem] uppercase tracking-[0.06em]" style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}>
              Back to Home
            </span>
          </Link>
          <a href="#" className="flex items-center gap-[0.3rem]">
            <div>
              <img
                src={logoImage}
                alt="RAMS360 Logo"
                className="h-[42px] w-auto"
              />
            </div>
          </a>
        </div>
      </header>

      {/* Hero Section with Illustration */}
      <section className="relative bg-gradient-to-br from-[#14b8a6] to-[#0d9488] py-20 overflow-hidden mt-[72px]">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-16 w-64 h-64 border-2 border-white rounded-lg" />
          <div className="absolute bottom-24 left-24 w-80 h-80 border-2 border-white rounded-lg rotate-45" />
          <div className="absolute top-40 left-60 w-48 h-48 border-2 border-white rounded-lg -rotate-12" />
        </div>

        <div className="max-w-[1280px] mx-auto px-10 relative z-10">
          {/* Title Section */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full mb-6">
              <span className="text-[0.85rem] text-white uppercase tracking-[0.08em]" style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}>
                RBD Module
              </span>
            </div>
            <h1 className="text-[3.5rem] text-white mb-6 uppercase tracking-[0.02em] leading-[1.1]" style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}>
              Reliability Block Diagram
            </h1>
            <p className="text-[1.3rem] text-white/90 max-w-[700px] mx-auto leading-[1.7]">
              Model system reliability and component dependencies using block diagrams.
            </p>
          </div>

          {/* Illustration - RBD Diagram */}
          <div className="max-w-[1000px] mx-auto">
            <div className="relative w-full aspect-[5/3] flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-2xl p-10 border border-white/20">
              <svg viewBox="0 0 800 480" className="w-full h-full">
                {/* Grid Background */}
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" opacity="0.1"/>
                  </pattern>
                </defs>
                <rect width="800" height="480" fill="url(#grid)" />

                {/* System Input */}
                <g transform="translate(50, 240)">
                  <circle cx="0" cy="0" r="15" fill="white" opacity="0.9" />
                  <text x="0" y="5" fill="#14b8a6" fontSize="12" fontWeight="700" textAnchor="middle" style={{ fontFamily: 'var(--ff-head)' }}>
                    IN
                  </text>
                </g>

                {/* Line from Input to Series Block 1 */}
                <line x1="65" y1="240" x2="120" y2="240" stroke="white" strokeWidth="2" opacity="0.8" />

                {/* Series Block 1 */}
                <g transform="translate(120, 240)">
                  <rect x="0" y="-40" width="100" height="80" rx="6" fill="white" opacity="0.95" />
                  <text x="50" y="-10" fill="#14b8a6" fontSize="12" fontWeight="700" textAnchor="middle" style={{ fontFamily: 'var(--ff-head)' }}>
                    Component A
                  </text>
                  <text x="50" y="10" fill="#14b8a6" fontSize="10" fontWeight="500" textAnchor="middle">
                    R = 0.95
                  </text>
                  <text x="50" y="25" fill="#14b8a6" fontSize="9" fontWeight="500" textAnchor="middle">
                    Series
                  </text>
                </g>

                {/* Line from Block 1 to Parallel Junction */}
                <line x1="220" y1="240" x2="280" y2="240" stroke="white" strokeWidth="2" opacity="0.8" />

                {/* Parallel Branch Point */}
                <circle cx="280" cy="240" r="4" fill="white" opacity="0.9" />

                {/* Parallel Branch Lines */}
                <line x1="280" y1="240" x2="280" y2="140" stroke="white" strokeWidth="2" opacity="0.8" />
                <line x1="280" y1="240" x2="280" y2="340" stroke="white" strokeWidth="2" opacity="0.8" />
                <line x1="280" y1="140" x2="320" y2="140" stroke="white" strokeWidth="2" opacity="0.8" />
                <line x1="280" y1="340" x2="320" y2="340" stroke="white" strokeWidth="2" opacity="0.8" />

                {/* Parallel Block 1 (Top) */}
                <g transform="translate(320, 140)">
                  <rect x="0" y="-35" width="100" height="70" rx="6" fill="white" opacity="0.95" />
                  <text x="50" y="-8" fill="#14b8a6" fontSize="11" fontWeight="700" textAnchor="middle" style={{ fontFamily: 'var(--ff-head)' }}>
                    Component B1
                  </text>
                  <text x="50" y="8" fill="#14b8a6" fontSize="9" fontWeight="500" textAnchor="middle">
                    R = 0.90
                  </text>
                  <text x="50" y="22" fill="#14b8a6" fontSize="8" fontWeight="500" textAnchor="middle">
                    Parallel
                  </text>
                </g>

                {/* Parallel Block 2 (Bottom) */}
                <g transform="translate(320, 340)">
                  <rect x="0" y="-35" width="100" height="70" rx="6" fill="white" opacity="0.95" />
                  <text x="50" y="-8" fill="#14b8a6" fontSize="11" fontWeight="700" textAnchor="middle" style={{ fontFamily: 'var(--ff-head)' }}>
                    Component B2
                  </text>
                  <text x="50" y="8" fill="#14b8a6" fontSize="9" fontWeight="500" textAnchor="middle">
                    R = 0.90
                  </text>
                  <text x="50" y="22" fill="#14b8a6" fontSize="8" fontWeight="500" textAnchor="middle">
                    Parallel
                  </text>
                </g>

                {/* Lines from Parallel Blocks to Junction */}
                <line x1="420" y1="140" x2="480" y2="140" stroke="white" strokeWidth="2" opacity="0.8" />
                <line x1="420" y1="340" x2="480" y2="340" stroke="white" strokeWidth="2" opacity="0.8" />
                <line x1="480" y1="140" x2="480" y2="240" stroke="white" strokeWidth="2" opacity="0.8" />
                <line x1="480" y1="340" x2="480" y2="240" stroke="white" strokeWidth="2" opacity="0.8" />

                {/* Parallel Join Point */}
                <circle cx="480" cy="240" r="4" fill="white" opacity="0.9" />

                {/* Line from Junction to Series Block 2 */}
                <line x1="480" y1="240" x2="520" y2="240" stroke="white" strokeWidth="2" opacity="0.8" />

                {/* Series Block 2 */}
                <g transform="translate(520, 240)">
                  <rect x="0" y="-40" width="100" height="80" rx="6" fill="white" opacity="0.95" />
                  <text x="50" y="-10" fill="#14b8a6" fontSize="12" fontWeight="700" textAnchor="middle" style={{ fontFamily: 'var(--ff-head)' }}>
                    Component C
                  </text>
                  <text x="50" y="10" fill="#14b8a6" fontSize="10" fontWeight="500" textAnchor="middle">
                    R = 0.98
                  </text>
                  <text x="50" y="25" fill="#14b8a6" fontSize="9" fontWeight="500" textAnchor="middle">
                    Series
                  </text>
                </g>

                {/* Line to Output */}
                <line x1="620" y1="240" x2="680" y2="240" stroke="white" strokeWidth="2" opacity="0.8" />

                {/* System Output */}
                <g transform="translate(700, 240)">
                  <circle cx="0" cy="0" r="15" fill="white" opacity="0.9" />
                  <text x="0" y="5" fill="#14b8a6" fontSize="11" fontWeight="700" textAnchor="middle" style={{ fontFamily: 'var(--ff-head)' }}>
                    OUT
                  </text>
                </g>

                {/* System Reliability Label */}
                <g transform="translate(400, 50)">
                  <rect x="-100" y="-25" width="200" height="50" rx="8" fill="white" opacity="0.95" />
                  <text x="0" y="-5" fill="#14b8a6" fontSize="13" fontWeight="700" textAnchor="middle" style={{ fontFamily: 'var(--ff-head)' }}>
                    System Reliability
                  </text>
                  <text x="0" y="15" fill="#14b8a6" fontSize="16" fontWeight="800" textAnchor="middle" style={{ fontFamily: 'var(--ff-head)' }}>
                    R<tspan fontSize="10" dy="3">sys</tspan> = 0.9324
                  </text>
                </g>

                {/* Legend */}
                <g transform="translate(50, 30)">
                  <text x="0" y="0" fill="white" fontSize="11" fontWeight="600" opacity="0.9" style={{ fontFamily: 'var(--ff-head)' }}>
                    CONFIGURATION:
                  </text>
                  <rect x="0" y="10" width="50" height="25" rx="4" fill="white" opacity="0.9" />
                  <text x="25" y="27" fill="#14b8a6" fontSize="9" fontWeight="600" textAnchor="middle">
                    Series
                  </text>
                  <rect x="0" y="45" width="50" height="25" rx="4" fill="white" opacity="0.9" />
                  <text x="25" y="62" fill="#14b8a6" fontSize="9" fontWeight="600" textAnchor="middle">
                    Parallel
                  </text>
                </g>

                {/* Formula Box */}
                <g transform="translate(650, 380)">
                  <rect x="-80" y="-35" width="160" height="70" rx="6" fill="white" opacity="0.15" />
                  <text x="0" y="-10" fill="white" fontSize="11" fontWeight="600" textAnchor="middle" style={{ fontFamily: 'var(--ff-head)' }}>
                    Series:
                  </text>
                  <text x="0" y="5" fill="white" fontSize="10" textAnchor="middle" opacity="0.9">
                    R = R₁ × R₂ × ... × Rₙ
                  </text>
                  <text x="0" y="25" fill="white" fontSize="11" fontWeight="600" textAnchor="middle" style={{ fontFamily: 'var(--ff-head)' }}>
                    Parallel:
                  </text>
                  <text x="0" y="40" fill="white" fontSize="10" textAnchor="middle" opacity="0.9">
                    R = 1 - (1-R₁)(1-R₂)...(1-Rₙ)
                  </text>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24">
        <div className="max-w-[1280px] mx-auto px-10">
          <div className="max-w-[900px] mx-auto">
            <div className="space-y-8 mb-12">
              <div>
                <h2 className="text-[2rem] text-[var(--rams-primary)] mb-6 uppercase tracking-[0.03em] text-center" style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}>
                  What is Reliability Block Diagram?
                </h2>
                <p className="text-[1.1rem] text-[var(--rams-gray-700)] leading-[1.8] mb-6">
                  Reliability Block Diagram (RBD) is a graphical reliability modeling technique used to represent how system components work together to achieve successful operation. Each block represents a component or subsystem, while connections define dependency and redundancy relationships.
                </p>
                <p className="text-[1.1rem] text-[var(--rams-gray-700)] leading-[1.8] mb-6">
                  RBD helps engineers evaluate system reliability, availability, and maintainability by modeling series, parallel, standby, and K-out-of-N configurations. It identifies how component failures affect overall system performance and reliability.
                </p>
                <p className="text-[1.1rem] text-[var(--rams-gray-700)] leading-[1.8] mb-6">
                  Using analytical calculations and Monte Carlo simulations, RBD predicts system reliability over mission time, calculates Mean Time Between Critical Failures (MTBCF), and evaluates redundancy effectiveness.
                </p>
                <p className="text-[1.1rem] text-[var(--rams-gray-700)] leading-[1.8] mb-6">
                  RBD is widely used for reliability engineering, maintenance planning, redundancy optimization, and performance analysis in complex engineering systems.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#14b8a6]/10 to-transparent border-l-4 border-[#14b8a6] p-8 rounded-r">
                <p className="text-[1.05rem] text-[var(--rams-gray-700)] italic leading-[1.8]">
                  "RBD converts complex system architectures into measurable reliability models for smarter engineering decisions."
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white border-2 border-[var(--rams-gray-200)] rounded-xl p-8 text-center hover:border-[#14b8a6]/50 hover:shadow-lg transition-all">
                  <div className="text-[3rem] text-[#14b8a6] mb-3" style={{ fontFamily: 'var(--ff-head)', fontWeight: 800 }}>
                    R(t)
                  </div>
                  <h3 className="text-[1rem] text-[var(--rams-primary)] mb-2 uppercase tracking-[0.05em]" style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}>
                    Reliability
                  </h3>
                  <p className="text-[0.9rem] text-[var(--rams-gray-600)] leading-[1.6]">
                    Probability of successful operation over time
                  </p>
                </div>

                <div className="bg-white border-2 border-[var(--rams-gray-200)] rounded-xl p-8 text-center hover:border-[#14b8a6]/50 hover:shadow-lg transition-all">
                  <div className="text-[2.5rem] text-[#14b8a6] mb-3" style={{ fontFamily: 'var(--ff-head)', fontWeight: 800 }}>
                    MTBCF
                  </div>
                  <h3 className="text-[1rem] text-[var(--rams-primary)] mb-2 uppercase tracking-[0.05em]" style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}>
                    Mean Time Between Critical Failures
                  </h3>
                  <p className="text-[0.9rem] text-[var(--rams-gray-600)] leading-[1.6]">
                    Average operating time before critical failure
                  </p>
                </div>

                <div className="bg-white border-2 border-[var(--rams-gray-200)] rounded-xl p-8 text-center hover:border-[#14b8a6]/50 hover:shadow-lg transition-all">
                  <div className="text-[3rem] text-[#14b8a6] mb-3" style={{ fontFamily: 'var(--ff-head)', fontWeight: 800 }}>
                    A(t)
                  </div>
                  <h3 className="text-[1rem] text-[var(--rams-primary)] mb-2 uppercase tracking-[0.05em]" style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}>
                    Availability
                  </h3>
                  <p className="text-[0.9rem] text-[var(--rams-gray-600)] leading-[1.6]">
                    Probability that the system remains operational
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setOpen(true)}
                className="inline-block px-10 py-4 bg-[var(--rams-accent)] text-white text-[0.9rem] tracking-[0.06em] uppercase rounded transition-all shadow-[0_4px_20px_rgba(232,114,42,0.3)] hover:bg-[var(--rams-accent-dark)] hover:-translate-y-[2px] text-center"
                style={{ fontFamily: "var(--ff-head)", fontWeight: 700 }}
              >
                Request Beta Access
              </button>
              <Link
                to="/#modules"
                className="inline-block px-10 py-4 border-2 border-[var(--rams-gray-300)] text-[var(--rams-primary)] text-[0.9rem] tracking-[0.06em] uppercase rounded transition-all hover:bg-[var(--rams-gray-100)] hover:border-[var(--rams-gray-400)] text-center"
                style={{ fontFamily: "var(--ff-head)", fontWeight: 700 }}
              >
                Back to All Modules
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ContactFormModal open={open} onOpenChange={setOpen} />
    </div>
  );
}
