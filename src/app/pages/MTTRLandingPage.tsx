import { ArrowLeft } from 'lucide-react';
import logoImage from '../../assets/ba0f8d6daaec390f80886c87b4992a47b7e1a9ad.png';
import { Link } from 'react-router';
import { useEffect, useState } from 'react';
import { ContactFormModal } from "../components/ContactForm";


export function MTTRLandingPage() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="overflow-x-hidden bg-white">
      {/* Header with back button */}
      <header className="fixed top-0 left-0 right-0 z-[400] bg-white shadow-[0_2px_20px_rgba(0,0,0,0.08)]">
        <div className="max-w-[1280px] mx-auto px-10 flex items-center justify-between h-[72px]">
          <Link to="/" className="flex items-center gap-3 text-[var(--rams-gray-600)] hover:text-[#10b981] transition-colors">
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
      <section className="relative bg-gradient-to-br from-[#10b981] to-[#059669] py-20 overflow-hidden mt-[72px]">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-32 w-80 h-80 border-2 border-white rounded-lg rotate-45" />
          <div className="absolute bottom-16 left-24 w-64 h-64 border-2 border-white rounded-lg -rotate-12" />
          <div className="absolute top-1/2 left-1/2 w-48 h-48 border-2 border-white rounded-lg rotate-12" />
        </div>

        <div className="max-w-[1280px] mx-auto px-10 relative z-10">
          {/* Title Section */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full mb-6">
              <span className="text-[0.85rem] text-white uppercase tracking-[0.08em]" style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}>
                MTTR Module
              </span>
            </div>
            <h1 className="text-[3.5rem] text-white mb-6 uppercase tracking-[0.02em] leading-[1.1]" style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}>
              Mean Time To Repair
            </h1>
            <p className="text-[1.3rem] text-white/90 max-w-[700px] mx-auto leading-[1.7]">
              Minimize downtime, maximize availability. Calculate and optimize <strong>"How long does it take to fix?"</strong>
            </p>
          </div>

          {/* Illustration - Repair Timeline Process */}
          <div className="max-w-[1000px] mx-auto">
            <div className="relative w-full aspect-[5/3] flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-2xl p-10 border border-white/20">
              <svg viewBox="0 0 800 480" className="w-full h-full">
                {/* Timeline Base */}
                <line x1="80" y1="240" x2="720" y2="240" stroke="white" strokeWidth="4" opacity="0.3" />
                
                {/* Timeline Markers */}
                <circle cx="80" cy="240" r="8" fill="white" opacity="0.5" />
                <circle cx="720" cy="240" r="8" fill="white" opacity="0.5" />

                {/* Stage 1: Failure Detected */}
                <g transform="translate(150, 140)">
                  {/* Alert Icon */}
                  <circle cx="0" cy="0" r="40" fill="white" opacity="0.95" />
                  <circle cx="0" cy="0" r="35" fill="#dc2626" />
                  <text x="0" y="8" fill="white" fontSize="32" fontWeight="700" textAnchor="middle">!</text>
                  
                  {/* Vertical Line to Timeline */}
                  <line x1="0" y1="45" x2="0" y2="95" stroke="white" strokeWidth="3" opacity="0.6" />
                  <circle cx="0" cy="100" r="6" fill="white" />
                  
                  {/* Label */}
                  <rect x="-50" y="-85" width="100" height="35" rx="4" fill="white" opacity="0.95" />
                  <text x="0" y="-70" fill="#dc2626" fontSize="11" fontWeight="700" textAnchor="middle" style={{ fontFamily: 'var(--ff-head)' }}>
                    FAILURE
                  </text>
                  <text x="0" y="-57" fill="#dc2626" fontSize="9" textAnchor="middle">
                    t = 0
                  </text>
                </g>

                {/* Stage 2: Diagnosis */}
                <g transform="translate(300, 140)">
                  {/* Magnifying Glass Icon */}
                  <circle cx="0" cy="0" r="40" fill="white" opacity="0.95" />
                  <circle cx="0" cy="0" r="35" fill="#f59e0b" />
                  <circle cx="-5" cy="-5" r="12" fill="none" stroke="white" strokeWidth="3" />
                  <line x1="3" y1="3" x2="12" y2="12" stroke="white" strokeWidth="3" />
                  
                  {/* Vertical Line to Timeline */}
                  <line x1="0" y1="45" x2="0" y2="95" stroke="white" strokeWidth="3" opacity="0.6" />
                  <circle cx="0" cy="100" r="6" fill="white" />
                  
                  {/* Label */}
                  <rect x="-50" y="-85" width="100" height="35" rx="4" fill="white" opacity="0.95" />
                  <text x="0" y="-70" fill="#f59e0b" fontSize="11" fontWeight="700" textAnchor="middle" style={{ fontFamily: 'var(--ff-head)' }}>
                    DIAGNOSIS
                  </text>
                  <text x="0" y="-57" fill="#f59e0b" fontSize="9" textAnchor="middle">
                    Detect Issue
                  </text>
                </g>

                {/* Stage 3: Repair Action */}
                <g transform="translate(450, 140)">
                  {/* Wrench Icon */}
                  <circle cx="0" cy="0" r="40" fill="white" opacity="0.95" />
                  <circle cx="0" cy="0" r="35" fill="#3b82f6" />
                  <rect x="-3" y="-15" width="6" height="25" rx="2" fill="white" />
                  <circle cx="0" cy="-18" r="8" fill="none" stroke="white" strokeWidth="3" />
                  <circle cx="0" cy="12" r="6" fill="white" />
                  
                  {/* Vertical Line to Timeline */}
                  <line x1="0" y1="45" x2="0" y2="95" stroke="white" strokeWidth="3" opacity="0.6" />
                  <circle cx="0" cy="100" r="6" fill="white" />
                  
                  {/* Label */}
                  <rect x="-50" y="-85" width="100" height="35" rx="4" fill="white" opacity="0.95" />
                  <text x="0" y="-70" fill="#3b82f6" fontSize="11" fontWeight="700" textAnchor="middle" style={{ fontFamily: 'var(--ff-head)' }}>
                    REPAIR
                  </text>
                  <text x="0" y="-57" fill="#3b82f6" fontSize="9" textAnchor="middle">
                    Fix Problem
                  </text>
                </g>

                {/* Stage 4: Testing */}
                <g transform="translate(600, 140)">
                  {/* Checkmark Icon */}
                  <circle cx="0" cy="0" r="40" fill="white" opacity="0.95" />
                  <circle cx="0" cy="0" r="35" fill="#10b981" />
                  <path d="M -10 0 L -3 10 L 12 -8" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                  
                  {/* Vertical Line to Timeline */}
                  <line x1="0" y1="45" x2="0" y2="95" stroke="white" strokeWidth="3" opacity="0.6" />
                  <circle cx="0" cy="100" r="6" fill="white" />
                  
                  {/* Label */}
                  <rect x="-50" y="-85" width="100" height="35" rx="4" fill="white" opacity="0.95" />
                  <text x="0" y="-70" fill="#10b981" fontSize="11" fontWeight="700" textAnchor="middle" style={{ fontFamily: 'var(--ff-head)' }}>
                    RESTORED
                  </text>
                  <text x="0" y="-57" fill="#10b981" fontSize="9" textAnchor="middle">
                    Operational
                  </text>
                </g>

                {/* MTTR Span Indicator */}
                <g transform="translate(0, 340)">
                  {/* Arrow showing total MTTR */}
                  <line x1="150" y1="0" x2="600" y2="0" stroke="white" strokeWidth="3" opacity="0.8" />
                  <polygon points="145,0 155,-6 155,6" fill="white" opacity="0.8" />
                  <polygon points="605,0 595,-6 595,6" fill="white" opacity="0.8" />
                  
                  {/* MTTR Label */}
                  <rect x="325" y="-30" width="150" height="50" rx="6" fill="white" opacity="0.95" />
                  <text x="400" y="-10" fill="#10b981" fontSize="14" fontWeight="700" textAnchor="middle" style={{ fontFamily: 'var(--ff-head)' }}>
                    MTTR
                  </text>
                  <text x="400" y="8" fill="#10b981" fontSize="11" textAnchor="middle">
                    Total Repair Time
                  </text>
                </g>

                {/* Time Duration Indicators */}
                {/* Detection to Diagnosis */}
                <g transform="translate(225, 270)">
                  <text x="0" y="0" fill="white" fontSize="10" fontWeight="600" textAnchor="middle" opacity="0.9">
                    30 min
                  </text>
                </g>

                {/* Diagnosis to Repair */}
                <g transform="translate(375, 270)">
                  <text x="0" y="0" fill="white" fontSize="10" fontWeight="600" textAnchor="middle" opacity="0.9">
                    45 min
                  </text>
                </g>

                {/* Repair to Restored */}
                <g transform="translate(525, 270)">
                  <text x="0" y="0" fill="white" fontSize="10" fontWeight="600" textAnchor="middle" opacity="0.9">
                    60 min
                  </text>
                </g>

                {/* Clock Icon */}
                <g transform="translate(50, 400)">
                  <circle cx="0" cy="0" r="30" fill="white" opacity="0.2" />
                  <circle cx="0" cy="0" r="25" fill="none" stroke="white" strokeWidth="2" opacity="0.8" />
                  <line x1="0" y1="0" x2="0" y2="-15" stroke="white" strokeWidth="2" opacity="0.8" />
                  <line x1="0" y1="0" x2="10" y2="0" stroke="white" strokeWidth="2" opacity="0.8" />
                  <circle cx="0" cy="0" r="2" fill="white" opacity="0.8" />
                </g>

                {/* Downtime Label */}
                <g transform="translate(50, 450)">
                  <text x="0" y="0" fill="white" fontSize="11" fontWeight="600" textAnchor="middle" opacity="0.8">
                    DOWNTIME
                  </text>
                </g>

                {/* Formula */}
                <rect x="600" y="390" width="180" height="60" rx="6" fill="white" opacity="0.15" />
                <text x="690" y="415" fill="white" fontSize="12" fontWeight="600" textAnchor="middle" style={{ fontFamily: 'var(--ff-head)' }}>
                  MTTR = Σ Repair Time
                </text>
                <text x="690" y="432" fill="white" fontSize="10" textAnchor="middle" opacity="0.8">
                  / Number of Repairs
                </text>
              </svg>
            </div>

            {/* Legend */}
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-center">
                <div className="w-12 h-12 bg-[#dc2626] rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-white text-[1.2rem]" style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}>!</span>
                </div>
                <div className="text-[0.85rem] text-white mb-1" style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}>Failure</div>
                <div className="text-[0.7rem] text-white/70">System down</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-center">
                <div className="w-12 h-12 bg-[#f59e0b] rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-white text-[1.2rem]" style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}>🔍</span>
                </div>
                <div className="text-[0.85rem] text-white mb-1" style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}>Diagnosis</div>
                <div className="text-[0.7rem] text-white/70">Find root cause</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-center">
                <div className="w-12 h-12 bg-[#3b82f6] rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-white text-[1.2rem]" style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}>🔧</span>
                </div>
                <div className="text-[0.85rem] text-white mb-1" style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}>Repair</div>
                <div className="text-[0.7rem] text-white/70">Execute fix</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-center">
                <div className="w-12 h-12 bg-[#10b981] rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-white text-[1.2rem]" style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}>✓</span>
                </div>
                <div className="text-[0.85rem] text-white mb-1" style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}>Restored</div>
                <div className="text-[0.7rem] text-white/70">Back online</div>
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
                  What is Mean Time To Repair?
                </h2>
                <p className="text-[1.1rem] text-[var(--rams-gray-700)] leading-[1.8] mb-6">
                  Mean Time To Repair (MTTR) measures the average time required to restore a failed component or system to full operational status. It's a critical maintainability metric that answers: <strong>"How quickly can we get back up and running?"</strong>
                </p>
                <p className="text-[1.1rem] text-[var(--rams-gray-700)] leading-[1.8] mb-6">
                  MTTR encompasses the entire restoration process: failure detection, diagnosis, obtaining spare parts, executing the repair, testing functionality, and returning to service. Lower MTTR means less downtime, higher availability, and reduced operational costs. It directly impacts customer satisfaction and revenue.
                </p>
                <p className="text-[1.1rem] text-[var(--rams-gray-700)] leading-[1.8] mb-6">
                  The timeline above illustrates the four critical phases of repair. Optimizing MTTR requires addressing each phase: faster diagnostics through better training, quick access to spares, efficient repair procedures, and streamlined testing protocols. Every minute saved in MTTR is a minute gained in system availability.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#10b981]/10 to-transparent border-l-4 border-[#10b981] p-8 rounded-r">
                <p className="text-[1.05rem] text-[var(--rams-gray-700)] italic leading-[1.8]">
                  "In mission-critical systems, MTTR isn't just a metric—it's the difference between meeting your availability targets and catastrophic downtime."
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white border-2 border-[var(--rams-gray-200)] rounded-xl p-8 text-center hover:border-[#10b981]/50 hover:shadow-lg transition-all">
                  <div className="text-[3rem] text-[#10b981] mb-3" style={{ fontFamily: 'var(--ff-head)', fontWeight: 800 }}>
                    ⏱️
                  </div>
                  <h3 className="text-[1rem] text-[var(--rams-primary)] mb-2 uppercase tracking-[0.05em]" style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}>
                    Fast Recovery
                  </h3>
                  <p className="text-[0.9rem] text-[var(--rams-gray-600)] leading-[1.6]">
                    Minimize downtime with optimized repair procedures
                  </p>
                </div>

                <div className="bg-white border-2 border-[var(--rams-gray-200)] rounded-xl p-8 text-center hover:border-[#10b981]/50 hover:shadow-lg transition-all">
                  <div className="text-[3rem] text-[#10b981] mb-3" style={{ fontFamily: 'var(--ff-head)', fontWeight: 800 }}>
                    📊
                  </div>
                  <h3 className="text-[1rem] text-[var(--rams-primary)] mb-2 uppercase tracking-[0.05em]" style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}>
                    Data-Driven
                  </h3>
                  <p className="text-[0.9rem] text-[var(--rams-gray-600)] leading-[1.6]">
                    Track historical repair times to identify bottlenecks
                  </p>
                </div>

                <div className="bg-white border-2 border-[var(--rams-gray-200)] rounded-xl p-8 text-center hover:border-[#10b981]/50 hover:shadow-lg transition-all">
                  <div className="text-[3rem] text-[#10b981] mb-3" style={{ fontFamily: 'var(--ff-head)', fontWeight: 800 }}>
                    A = f(MTTR)
                  </div>
                  <h3 className="text-[1rem] text-[var(--rams-primary)] mb-2 uppercase tracking-[0.05em]" style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}>
                    Availability
                  </h3>
                  <p className="text-[0.9rem] text-[var(--rams-gray-600)] leading-[1.6]">
                    Lower MTTR directly increases system availability
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