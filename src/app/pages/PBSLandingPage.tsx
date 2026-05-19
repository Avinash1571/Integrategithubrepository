import { ArrowLeft } from 'lucide-react';
import logoImage from '../../assets/logo.png';
import { Link } from 'react-router';
import { useEffect, useState } from 'react';
import { ContactFormModal } from "../components/ContactForm";


export function PBSLandingPage() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="overflow-x-hidden bg-white">
      {/* Header with back button */}
      <header className="fixed top-0 left-0 right-0 z-[400] bg-white shadow-[0_2px_20px_rgba(0,0,0,0.08)]">
        <div className="max-w-[1280px] mx-auto px-10 flex items-center justify-between h-[72px]">
          <Link to="/#modules" className="flex items-center gap-3 text-[var(--rams-gray-600)] hover:text-[var(--rams-accent)] transition-colors">
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
      <section className="relative bg-gradient-to-br from-[#e8722a] to-[#d4621f] py-20 overflow-hidden mt-[72px]">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-64 h-64 border-2 border-white rounded-lg rotate-12" />
          <div className="absolute bottom-20 right-20 w-48 h-48 border-2 border-white rounded-lg -rotate-12" />
          <div className="absolute top-40 right-40 w-32 h-32 border-2 border-white rounded-lg rotate-45" />
        </div>

        <div className="max-w-[1280px] mx-auto px-10 relative z-10">
          {/* Title Section */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full mb-6">
              <span className="text-[0.85rem] text-white uppercase tracking-[0.08em]" style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}>
                PBS Module
              </span>
            </div>
            <h1 className="text-[3.5rem] text-white mb-6 uppercase tracking-[0.02em] leading-[1.1]" style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}>
              Product Breakdown Structure
            </h1>
            <p className="text-[1.3rem] text-white/90 max-w-[700px] mx-auto leading-[1.7]">
              The foundation of your RAMS analysis. A hierarchical decomposition that answers: <strong>"What is the system made of?"</strong>
            </p>
          </div>

          {/* Illustration */}
          <div className="max-w-[900px] mx-auto">
            <div className="relative w-full aspect-[3/2] flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-2xl p-10 border border-white/20">
              <svg viewBox="0 0 600 400" className="w-full h-full">
                {/* Background circles */}
                <circle cx="300" cy="200" r="180" fill="none" stroke="white" strokeWidth="1" opacity="0.1" />
                <circle cx="300" cy="200" r="140" fill="none" stroke="white" strokeWidth="1" opacity="0.1" />
                <circle cx="300" cy="200" r="100" fill="none" stroke="white" strokeWidth="1" opacity="0.1" />

                {/* Connection Lines */}
                {/* Level 1 to Level 2 */}
                <line x1="300" y1="80" x2="200" y2="160" stroke="white" strokeWidth="3" opacity="0.3" />
                <line x1="300" y1="80" x2="400" y2="160" stroke="white" strokeWidth="3" opacity="0.3" />

                {/* Level 2 to Level 3 */}
                <line x1="200" y1="160" x2="70" y2="260" stroke="white" strokeWidth="2" opacity="0.3" />
                <line x1="200" y1="160" x2="162" y2="260" stroke="white" strokeWidth="2" opacity="0.3" />
                <line x1="200" y1="160" x2="254" y2="260" stroke="white" strokeWidth="2" opacity="0.3" />

                <line x1="400" y1="160" x2="346" y2="260" stroke="white" strokeWidth="2" opacity="0.3" />
                <line x1="400" y1="160" x2="438" y2="260" stroke="white" strokeWidth="2" opacity="0.3" />
                <line x1="400" y1="160" x2="530" y2="260" stroke="white" strokeWidth="2" opacity="0.3" />

                {/* Level 3 to Level 4 */}
                <line x1="70" y1="260" x2="50" y2="350" stroke="white" strokeWidth="1.5" opacity="0.2" />
                <line x1="70" y1="260" x2="90" y2="350" stroke="white" strokeWidth="1.5" opacity="0.2" />

                <line x1="162" y1="260" x2="142" y2="350" stroke="white" strokeWidth="1.5" opacity="0.2" />
                <line x1="162" y1="260" x2="182" y2="350" stroke="white" strokeWidth="1.5" opacity="0.2" />

                <line x1="254" y1="260" x2="234" y2="350" stroke="white" strokeWidth="1.5" opacity="0.2" />
                <line x1="254" y1="260" x2="274" y2="350" stroke="white" strokeWidth="1.5" opacity="0.2" />

                <line x1="346" y1="260" x2="326" y2="350" stroke="white" strokeWidth="1.5" opacity="0.2" />
                <line x1="346" y1="260" x2="366" y2="350" stroke="white" strokeWidth="1.5" opacity="0.2" />

                <line x1="438" y1="260" x2="418" y2="350" stroke="white" strokeWidth="1.5" opacity="0.2" />
                <line x1="438" y1="260" x2="458" y2="350" stroke="white" strokeWidth="1.5" opacity="0.2" />

                <line x1="530" y1="260" x2="510" y2="350" stroke="white" strokeWidth="1.5" opacity="0.2" />
                <line x1="530" y1="260" x2="550" y2="350" stroke="white" strokeWidth="1.5" opacity="0.2" />

                {/* Level 1 - System */}
                <rect x="250" y="50" width="100" height="60" rx="8" fill="white" />
                <text x="300" y="75" fill="#e8722a" fontSize="12" fontWeight="700" textAnchor="middle" style={{ fontFamily: 'var(--ff-head)' }}>
                  SYSTEM
                </text>
                <text x="300" y="95" fill="#e8722a" fontSize="9" textAnchor="middle" opacity="0.7">
                  Level 1
                </text>

                {/* Level 2 - Subsystems */}
                <rect x="150" y="135" width="100" height="50" rx="6" fill="white" opacity="0.95" />
                <text x="200" y="156" fill="#d4621f" fontSize="10" fontWeight="700" textAnchor="middle" style={{ fontFamily: 'var(--ff-head)' }}>
                  SUBSYSTEM A
                </text>
                <text x="200" y="171" fill="#d4621f" fontSize="8" textAnchor="middle" opacity="0.7">
                  Level 2
                </text>

                <rect x="350" y="135" width="100" height="50" rx="6" fill="white" opacity="0.95" />
                <text x="400" y="156" fill="#d4621f" fontSize="10" fontWeight="700" textAnchor="middle" style={{ fontFamily: 'var(--ff-head)' }}>
                  SUBSYSTEM B
                </text>
                <text x="400" y="171" fill="#d4621f" fontSize="8" textAnchor="middle" opacity="0.7">
                  Level 2
                </text>

                {/* Level 3 - Assemblies */}
                <rect x="30" y="240" width="80" height="40" rx="4" fill="white" opacity="0.9" />
                <text x="70" y="257" fill="#f59e0b" fontSize="9" fontWeight="600" textAnchor="middle" style={{ fontFamily: 'var(--ff-head)' }}>
                  Assembly A1
                </text>
                <text x="70" y="270" fill="#f59e0b" fontSize="7" textAnchor="middle" opacity="0.7">
                  Level 3
                </text>

                <rect x="122" y="240" width="80" height="40" rx="4" fill="white" opacity="0.9" />
                <text x="162" y="257" fill="#f59e0b" fontSize="9" fontWeight="600" textAnchor="middle" style={{ fontFamily: 'var(--ff-head)' }}>
                  Assembly A2
                </text>
                <text x="162" y="270" fill="#f59e0b" fontSize="7" textAnchor="middle" opacity="0.7">
                  Level 3
                </text>

                <rect x="214" y="240" width="80" height="40" rx="4" fill="white" opacity="0.9" />
                <text x="254" y="257" fill="#f59e0b" fontSize="9" fontWeight="600" textAnchor="middle" style={{ fontFamily: 'var(--ff-head)' }}>
                  Assembly A3
                </text>
                <text x="254" y="270" fill="#f59e0b" fontSize="7" textAnchor="middle" opacity="0.7">
                  Level 3
                </text>

                <rect x="306" y="240" width="80" height="40" rx="4" fill="white" opacity="0.9" />
                <text x="346" y="257" fill="#f59e0b" fontSize="9" fontWeight="600" textAnchor="middle" style={{ fontFamily: 'var(--ff-head)' }}>
                  Assembly B1
                </text>
                <text x="346" y="270" fill="#f59e0b" fontSize="7" textAnchor="middle" opacity="0.7">
                  Level 3
                </text>

                <rect x="398" y="240" width="80" height="40" rx="4" fill="white" opacity="0.9" />
                <text x="438" y="257" fill="#f59e0b" fontSize="9" fontWeight="600" textAnchor="middle" style={{ fontFamily: 'var(--ff-head)' }}>
                  Assembly B2
                </text>
                <text x="438" y="270" fill="#f59e0b" fontSize="7" textAnchor="middle" opacity="0.7">
                  Level 3
                </text>

                <rect x="490" y="240" width="80" height="40" rx="4" fill="white" opacity="0.9" />
                <text x="530" y="257" fill="#f59e0b" fontSize="9" fontWeight="600" textAnchor="middle" style={{ fontFamily: 'var(--ff-head)' }}>
                  Assembly B3
                </text>
                <text x="530" y="270" fill="#f59e0b" fontSize="7" textAnchor="middle" opacity="0.7">
                  Level 3
                </text>

                {/* Level 4 - Components (smaller dots) */}
                <circle cx="50" cy="350" r="12" fill="white" opacity="0.85" />
                <text x="50" y="355" fill="#fbbf24" fontSize="8" fontWeight="600" textAnchor="middle">
                  C
                </text>

                <circle cx="90" cy="350" r="12" fill="white" opacity="0.85" />
                <text x="90" y="355" fill="#fbbf24" fontSize="8" fontWeight="600" textAnchor="middle">
                  C
                </text>

                <circle cx="142" cy="350" r="12" fill="white" opacity="0.85" />
                <text x="142" y="355" fill="#fbbf24" fontSize="8" fontWeight="600" textAnchor="middle">
                  C
                </text>

                <circle cx="182" cy="350" r="12" fill="white" opacity="0.85" />
                <text x="182" y="355" fill="#fbbf24" fontSize="8" fontWeight="600" textAnchor="middle">
                  C
                </text>

                <circle cx="234" cy="350" r="12" fill="white" opacity="0.85" />
                <text x="234" y="355" fill="#fbbf24" fontSize="8" fontWeight="600" textAnchor="middle">
                  C
                </text>

                <circle cx="274" cy="350" r="12" fill="white" opacity="0.85" />
                <text x="274" y="355" fill="#fbbf24" fontSize="8" fontWeight="600" textAnchor="middle">
                  C
                </text>

                <circle cx="326" cy="350" r="12" fill="white" opacity="0.85" />
                <text x="326" y="355" fill="#fbbf24" fontSize="8" fontWeight="600" textAnchor="middle">
                  C
                </text>

                <circle cx="366" cy="350" r="12" fill="white" opacity="0.85" />
                <text x="366" y="355" fill="#fbbf24" fontSize="8" fontWeight="600" textAnchor="middle">
                  C
                </text>

                <circle cx="418" cy="350" r="12" fill="white" opacity="0.85" />
                <text x="418" y="355" fill="#fbbf24" fontSize="8" fontWeight="600" textAnchor="middle">
                  C
                </text>

                <circle cx="458" cy="350" r="12" fill="white" opacity="0.85" />
                <text x="458" y="355" fill="#fbbf24" fontSize="8" fontWeight="600" textAnchor="middle">
                  C
                </text>

                <circle cx="510" cy="350" r="12" fill="white" opacity="0.85" />
                <text x="510" y="355" fill="#fbbf24" fontSize="8" fontWeight="600" textAnchor="middle">
                  C
                </text>

                <circle cx="550" cy="350" r="12" fill="white" opacity="0.85" />
                <text x="550" y="355" fill="#fbbf24" fontSize="8" fontWeight="600" textAnchor="middle">
                  C
                </text>
              </svg>
            </div>

            {/* Legend */}
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-center">
                <div className="w-12 h-12 bg-white rounded mx-auto mb-3 flex items-center justify-center">
                  <span className="text-[#e8722a] text-[0.85rem]" style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}>1</span>
                </div>
                <div className="text-[0.85rem] text-white mb-1" style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}>System</div>
                <div className="text-[0.7rem] text-white/70">Complete product</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-center">
                <div className="w-12 h-12 bg-white/95 rounded mx-auto mb-3 flex items-center justify-center">
                  <span className="text-[#d4621f] text-[0.85rem]" style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}>2</span>
                </div>
                <div className="text-[0.85rem] text-white mb-1" style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}>Subsystems</div>
                <div className="text-[0.7rem] text-white/70">Functional areas</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-center">
                <div className="w-12 h-12 bg-white/90 rounded mx-auto mb-3 flex items-center justify-center">
                  <span className="text-[#f59e0b] text-[0.85rem]" style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}>3</span>
                </div>
                <div className="text-[0.85rem] text-white mb-1" style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}>Assemblies</div>
                <div className="text-[0.7rem] text-white/70">Replaceable units</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-center">
                <div className="w-12 h-12 bg-white/85 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-[#fbbf24] text-[0.85rem]" style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}>4</span>
                </div>
                <div className="text-[0.85rem] text-white mb-1" style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}>Components</div>
                <div className="text-[0.7rem] text-white/70">Individual parts</div>
              </div>
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
                  What is Product Breakdown Structure?
                </h2>
                <p className="text-[1.1rem] text-[var(--rams-gray-700)] leading-[1.8] mb-6">
                  Product Breakdown Structure (PBS) organizes your system into a tree of components—from the highest level (complete system) down through subsystems, assemblies, and individual parts. Each level represents a specific degree of detail.
                </p>
                <p className="text-[1.1rem] text-[var(--rams-gray-700)] leading-[1.8] mb-6">
                  PBS is not just a parts list. It defines parent-child relationships, captures component attributes (part numbers, quantities, suppliers), and serves as the structural backbone for every downstream analysis: failure rates, maintenance schedules, spare parts planning, and safety assessments.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[var(--rams-accent)]/10 to-transparent border-l-4 border-[var(--rams-accent)] p-8 rounded-r">
                <p className="text-[1.05rem] text-[var(--rams-gray-700)] italic leading-[1.8]">
                  "Without a clear PBS, you're analyzing components in isolation. With it, you understand how every part fits into the whole system—and how failures cascade through the hierarchy."
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white border-2 border-[var(--rams-gray-200)] rounded-xl p-8 text-center hover:border-[var(--rams-accent)]/50 hover:shadow-lg transition-all">
                  <div className="text-[3rem] text-[var(--rams-accent)] mb-3" style={{ fontFamily: 'var(--ff-head)', fontWeight: 800 }}>
                    ∞
                  </div>
                  <h3 className="text-[1rem] text-[var(--rams-primary)] mb-2 uppercase tracking-[0.05em]" style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}>
                    Unlimited Levels
                  </h3>
                  <p className="text-[0.9rem] text-[var(--rams-gray-600)] leading-[1.6]">
                    Define as many hierarchy levels as your system needs
                  </p>
                </div>

                <div className="bg-white border-2 border-[var(--rams-gray-200)] rounded-xl p-8 text-center hover:border-[var(--rams-accent)]/50 hover:shadow-lg transition-all">
                  <div className="text-[3rem] text-[var(--rams-accent)] mb-3" style={{ fontFamily: 'var(--ff-head)', fontWeight: 800 }}>
                    100%
                  </div>
                  <h3 className="text-[1rem] text-[var(--rams-primary)] mb-2 uppercase tracking-[0.05em]" style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}>
                    Foundation
                  </h3>
                  <p className="text-[0.9rem] text-[var(--rams-gray-600)] leading-[1.6]">
                    Every other module references PBS structure
                  </p>
                </div>

                <div className="bg-white border-2 border-[var(--rams-gray-200)] rounded-xl p-8 text-center hover:border-[var(--rams-accent)]/50 hover:shadow-lg transition-all">
                  <div className="text-[3rem] text-[var(--rams-accent)] mb-3" style={{ fontFamily: 'var(--ff-head)', fontWeight: 800 }}>
                    360°
                  </div>
                  <h3 className="text-[1rem] text-[var(--rams-primary)] mb-2 uppercase tracking-[0.05em]" style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}>
                    Complete View
                  </h3>
                  <p className="text-[0.9rem] text-[var(--rams-gray-600)] leading-[1.6]">
                    Navigate from system level to individual parts
                  </p>
                </div>
              </div>
            </div>

            {/* Standards Section */}
            <div className="my-16">
              <h2 className="text-[2rem] text-[var(--rams-primary)] mb-10 uppercase tracking-[0.03em] text-center" style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}>
                Industry Standards We Support
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* MIL-HDBK-217F Card */}
                <div className="bg-gradient-to-br from-white to-[var(--rams-gray-50)] border-2 border-[var(--rams-gray-200)] rounded-xl p-8 hover:border-[var(--rams-primary)]/50 hover:shadow-xl transition-all">
                  <div className="flex items-center justify-center w-16 h-16 bg-[var(--rams-primary)] rounded-lg mb-6 mx-auto">
                    <span className="text-white text-[1.5rem]" style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}>MIL</span>
                  </div>
                  <h3 className="text-[1.2rem] text-[var(--rams-primary)] mb-4 uppercase tracking-[0.05em] text-center" style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}>
                    MIL-HDBK-217F
                  </h3>
                  <p className="text-[0.95rem] text-[var(--rams-gray-600)] leading-[1.6] text-center">
                    U.S. Military standard for reliability prediction of electronic equipment
                  </p>
                </div>

                {/* NPRD 2011 Card */}
                <div className="bg-gradient-to-br from-white to-[var(--rams-gray-50)] border-2 border-[var(--rams-gray-200)] rounded-xl p-8 hover:border-[var(--rams-accent)]/50 hover:shadow-xl transition-all">
                  <div className="flex items-center justify-center w-16 h-16 bg-[var(--rams-accent)] rounded-lg mb-6 mx-auto">
                    <span className="text-white text-[1.5rem]" style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}>11</span>
                  </div>
                  <h3 className="text-[1.2rem] text-[var(--rams-primary)] mb-4 uppercase tracking-[0.05em] text-center" style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}>
                    NPRD 2011
                  </h3>
                  <p className="text-[0.95rem] text-[var(--rams-gray-600)] leading-[1.6] text-center">
                    Nonelectronic Parts Reliability Data for mechanical and electromechanical components
                  </p>
                </div>

                {/* NPRD 2016 Card */}
                <div className="bg-gradient-to-br from-white to-[var(--rams-gray-50)] border-2 border-[var(--rams-gray-200)] rounded-xl p-8 hover:border-[#8b5cf6]/50 hover:shadow-xl transition-all">
                  <div className="flex items-center justify-center w-16 h-16 bg-[#8b5cf6] rounded-lg mb-6 mx-auto">
                    <span className="text-white text-[1.5rem]" style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}>16</span>
                  </div>
                  <h3 className="text-[1.2rem] text-[var(--rams-primary)] mb-4 uppercase tracking-[0.05em] text-center" style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}>
                    NPRD 2016
                  </h3>
                  <p className="text-[0.95rem] text-[var(--rams-gray-600)] leading-[1.6] text-center">
                    Updated reliability data with expanded component coverage and failure rate information
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
                style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}
              >
                Back to All Modules
              </Link>
            </div>
          </div>
        </div>
      </section>
      <ContactFormModal open={open} onOpenChange={setOpen} />

      {/* Footer */}
      <footer className="bg-[var(--rams-primary-deep)] text-white/45 py-8">
        <div className="max-w-[1280px] mx-auto px-10 text-center">
          <p className="text-[0.85rem]">© 2026 Wolvio Solutions Pvt Ltd. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}