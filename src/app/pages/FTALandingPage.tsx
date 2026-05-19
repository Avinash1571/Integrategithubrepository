import { ArrowLeft } from 'lucide-react';
import logoImage from '../../assets/ba0f8d6daaec390f80886c87b4992a47b7e1a9ad.png';
import { Link } from 'react-router';
import { useEffect, useState } from 'react';
import { ContactFormModal } from "../components/ContactForm";


export function FTALandingPage() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="overflow-x-hidden bg-white">
      {/* Header with back button */}
      <header className="fixed top-0 left-0 right-0 z-[400] bg-white shadow-[0_2px_20px_rgba(0,0,0,0.08)]">
        <div className="max-w-[1280px] mx-auto px-10 flex items-center justify-between h-[72px]">
          <Link to="/" className="flex items-center gap-3 text-[var(--rams-gray-600)] hover:text-[#ec4899] transition-colors">
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
      <section className="relative bg-gradient-to-br from-[#ec4899] to-[#db2777] py-20 overflow-hidden mt-[72px]">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-16 right-24 w-96 h-96 border-2 border-white rotate-12">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-2 border-white rotate-45" />
          </div>
          <div className="absolute bottom-20 left-32 w-72 h-72 border-2 border-white -rotate-45" />
          <div className="absolute top-1/2 left-1/4 w-56 h-56 border-2 border-white rotate-45" />
        </div>

        <div className="max-w-[1280px] mx-auto px-10 relative z-10">
          {/* Title Section */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full mb-6">
              <span className="text-[0.85rem] text-white uppercase tracking-[0.08em]" style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}>
                FTA Module
              </span>
            </div>
            <h1 className="text-[3.5rem] text-white mb-6 uppercase tracking-[0.02em] leading-[1.1]" style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}>
              Fault Tree Analysis
            </h1>
            <p className="text-[1.3rem] text-white/90 max-w-[700px] mx-auto leading-[1.7]">
              Analyze system failures and identify root causes using logical fault trees.
            </p>
          </div>

          {/* Illustration - Fault Tree Diagram */}
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

                {/* Top Event */}
                <g transform="translate(400, 80)">
                  <ellipse cx="0" cy="0" rx="100" ry="35" fill="white" opacity="0.95" />
                  <text x="0" y="-8" fill="#ec4899" fontSize="13" fontWeight="700" textAnchor="middle" style={{ fontFamily: 'var(--ff-head)' }}>
                    TOP EVENT
                  </text>
                  <text x="0" y="8" fill="#ec4899" fontSize="11" fontWeight="600" textAnchor="middle" style={{ fontFamily: 'var(--ff-head)' }}>
                    System Failure
                  </text>
                  <text x="0" y="23" fill="#ec4899" fontSize="10" fontWeight="500" textAnchor="middle">
                    Q(t) = 0.015
                  </text>
                </g>

                {/* Connection Line from Top Event to OR Gate */}
                <line x1="400" y1="115" x2="400" y2="160" stroke="white" strokeWidth="2" opacity="0.8" />

                {/* OR Gate */}
                <g transform="translate(400, 180)">
                  <path d="M -30 -20 L 30 -20 L 30 10 Q 30 30, 0 30 Q -30 30, -30 10 Z" fill="white" opacity="0.95" />
                  <text x="0" y="0" fill="#ec4899" fontSize="16" fontWeight="700" textAnchor="middle" style={{ fontFamily: 'var(--ff-head)' }}>
                    OR
                  </text>
                </g>

                {/* Connections from OR Gate to Intermediate Events */}
                <line x1="400" y1="210" x2="250" y2="260" stroke="white" strokeWidth="2" opacity="0.8" />
                <line x1="400" y1="210" x2="550" y2="260" stroke="white" strokeWidth="2" opacity="0.8" />

                {/* Intermediate Event 1 */}
                <g transform="translate(250, 280)">
                  <ellipse cx="0" cy="0" rx="80" ry="30" fill="white" opacity="0.9" />
                  <text x="0" y="-5" fill="#ec4899" fontSize="11" fontWeight="600" textAnchor="middle" style={{ fontFamily: 'var(--ff-head)' }}>
                    Hardware Failure
                  </text>
                  <text x="0" y="10" fill="#ec4899" fontSize="9" fontWeight="500" textAnchor="middle">
                    Q(t) = 0.008
                  </text>
                </g>

                {/* Intermediate Event 2 */}
                <g transform="translate(550, 280)">
                  <ellipse cx="0" cy="0" rx="80" ry="30" fill="white" opacity="0.9" />
                  <text x="0" y="-5" fill="#ec4899" fontSize="11" fontWeight="600" textAnchor="middle" style={{ fontFamily: 'var(--ff-head)' }}>
                    Software Failure
                  </text>
                  <text x="0" y="10" fill="#ec4899" fontSize="9" fontWeight="500" textAnchor="middle">
                    Q(t) = 0.007
                  </text>
                </g>

                {/* Connection from Hardware to AND Gate */}
                <line x1="250" y1="310" x2="250" y2="350" stroke="white" strokeWidth="2" opacity="0.8" />

                {/* AND Gate */}
                <g transform="translate(250, 370)">
                  <path d="M -30 -20 L 10 -20 Q 30 -20, 30 0 Q 30 20, 10 20 L -30 20 Z" fill="white" opacity="0.95" />
                  <text x="0" y="0" fill="#ec4899" fontSize="14" fontWeight="700" textAnchor="middle" style={{ fontFamily: 'var(--ff-head)' }}>
                    AND
                  </text>
                </g>

                {/* Connections from AND Gate to Basic Events */}
                <line x1="250" y1="390" x2="180" y2="430" stroke="white" strokeWidth="2" opacity="0.8" />
                <line x1="250" y1="390" x2="320" y2="430" stroke="white" strokeWidth="2" opacity="0.8" />

                {/* Basic Event 1 */}
                <g transform="translate(180, 450)">
                  <circle cx="0" cy="0" r="25" fill="white" opacity="0.9" />
                  <text x="0" y="-3" fill="#ec4899" fontSize="10" fontWeight="600" textAnchor="middle" style={{ fontFamily: 'var(--ff-head)' }}>
                    Power
                  </text>
                  <text x="0" y="8" fill="#ec4899" fontSize="10" fontWeight="600" textAnchor="middle" style={{ fontFamily: 'var(--ff-head)' }}>
                    Loss
                  </text>
                </g>

                {/* Basic Event 2 */}
                <g transform="translate(320, 450)">
                  <circle cx="0" cy="0" r="25" fill="white" opacity="0.9" />
                  <text x="0" y="-3" fill="#ec4899" fontSize="10" fontWeight="600" textAnchor="middle" style={{ fontFamily: 'var(--ff-head)' }}>
                    Sensor
                  </text>
                  <text x="0" y="8" fill="#ec4899" fontSize="10" fontWeight="600" textAnchor="middle" style={{ fontFamily: 'var(--ff-head)' }}>
                    Fault
                  </text>
                </g>

                {/* Connection from Software to Basic Event */}
                <line x1="550" y1="310" x2="550" y2="410" stroke="white" strokeWidth="2" opacity="0.8" />

                {/* Basic Event 3 */}
                <g transform="translate(550, 450)">
                  <circle cx="0" cy="0" r="25" fill="white" opacity="0.9" />
                  <text x="0" y="-3" fill="#ec4899" fontSize="10" fontWeight="600" textAnchor="middle" style={{ fontFamily: 'var(--ff-head)' }}>
                    Code
                  </text>
                  <text x="0" y="8" fill="#ec4899" fontSize="10" fontWeight="600" textAnchor="middle" style={{ fontFamily: 'var(--ff-head)' }}>
                    Error
                  </text>
                </g>

                {/* Legend */}
                <g transform="translate(50, 30)">
                  <text x="0" y="0" fill="white" fontSize="11" fontWeight="600" opacity="0.9" style={{ fontFamily: 'var(--ff-head)' }}>
                    LEGEND:
                  </text>
                  <ellipse cx="15" cy="25" rx="30" ry="12" fill="white" opacity="0.9" />
                  <text x="55" y="30" fill="white" fontSize="10" fontWeight="500" opacity="0.8">
                    Event
                  </text>
                  <circle cx="15" cy="55" r="10" fill="white" opacity="0.9" />
                  <text x="55" y="60" fill="white" fontSize="10" fontWeight="500" opacity="0.8">
                    Basic Event
                  </text>
                  <path d="M -5 75 L 25 75 L 25 95 Q 25 105, 10 105 Q -5 105, -5 95 Z" fill="white" opacity="0.9" transform="translate(10, 0)" />
                  <text x="55" y="95" fill="white" fontSize="10" fontWeight="500" opacity="0.8">
                    Logic Gate
                  </text>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* What is FTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-10">
          <div className="max-w-[900px] mx-auto">
            <div className="space-y-8 mb-12">
              <div>
                <h2 className="text-[2rem] text-[var(--rams-primary)] mb-6 uppercase tracking-[0.03em] text-center" style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}>
                  What is Fault Tree Analysis?
                </h2>
                <p className="text-[1.1rem] text-[var(--rams-gray-700)] leading-[1.8] mb-6">
                  <strong>Fault Tree Analysis (FTA)</strong> is a graphical reliability and safety analysis method used to identify the root causes of system failures. It starts with an undesired system event (Top Event) and breaks it down into lower-level failures using logical gates such as <strong>AND, OR, and XOR</strong>.
                </p>
                <p className="text-[1.1rem] text-[var(--rams-gray-700)] leading-[1.8] mb-6">
                  FTA helps engineers understand how component failures, software issues, or human errors can combine to cause critical system failures. It is widely used in safety-critical industries such as <strong>aerospace, automotive, defense, railways, and industrial systems</strong>.
                </p>
                <p className="text-[1.1rem] text-[var(--rams-gray-700)] leading-[1.8] mb-6">
                  Using quantitative and qualitative analysis methods, FTA calculates <strong>failure probability, system unavailability, Minimal Cut Sets (MCS), and critical failure paths</strong>. It helps improve system safety, optimize design reliability, and reduce operational risks.
                </p>
                <p className="text-[1.1rem] text-[var(--rams-gray-700)] leading-[1.8] mb-6">
                  Fault Trees also support integration with Reliability, FMECA, and Safety analyses, enabling complete system-level risk assessment and reliability evaluation.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#ec4899]/10 to-transparent border-l-4 border-[#ec4899] p-8 rounded-r">
                <p className="text-[1.05rem] text-[var(--rams-gray-700)] italic leading-[1.8]">
                  "FTA transforms complex system failures into clear logical relationships, helping engineers predict, prevent, and control critical risks."
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white border-2 border-[var(--rams-gray-200)] rounded-xl p-8 text-center hover:border-[#ec4899]/50 hover:shadow-lg transition-all">
                  <div className="text-[3rem] text-[#ec4899] mb-3" style={{ fontFamily: 'var(--ff-head)', fontWeight: 800 }}>
                    Q(t)
                  </div>
                  <h3 className="text-[1rem] text-[var(--rams-primary)] mb-2 uppercase tracking-[0.05em]" style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}>
                    Unavailability
                  </h3>
                  <p className="text-[0.9rem] text-[var(--rams-gray-600)] leading-[1.6]">
                    Probability of system failure at time t
                  </p>
                </div>

                <div className="bg-white border-2 border-[var(--rams-gray-200)] rounded-xl p-8 text-center hover:border-[#ec4899]/50 hover:shadow-lg transition-all">
                  <div className="text-[2.5rem] text-[#ec4899] mb-3" style={{ fontFamily: 'var(--ff-head)', fontWeight: 800 }}>
                    MCS
                  </div>
                  <h3 className="text-[1rem] text-[var(--rams-primary)] mb-2 uppercase tracking-[0.05em]" style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}>
                    Minimal Cut Sets
                  </h3>
                  <p className="text-[0.9rem] text-[var(--rams-gray-600)] leading-[1.6]">
                    Critical failure combinations causing top event
                  </p>
                </div>

                <div className="bg-white border-2 border-[var(--rams-gray-200)] rounded-xl p-8 text-center hover:border-[#ec4899]/50 hover:shadow-lg transition-all">
                  <div className="text-[3rem] text-[#ec4899] mb-3" style={{ fontFamily: 'var(--ff-head)', fontWeight: 800 }}>
                    λ
                  </div>
                  <h3 className="text-[1rem] text-[var(--rams-primary)] mb-2 uppercase tracking-[0.05em]" style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}>
                    Failure Rate
                  </h3>
                  <p className="text-[0.9rem] text-[var(--rams-gray-600)] leading-[1.6]">
                    Failure occurrence frequency of events
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
