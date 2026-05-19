import { ArrowLeft } from 'lucide-react';
import logoImage from '../../assets/ba0f8d6daaec390f80886c87b4992a47b7e1a9ad.png';
import { Link } from 'react-router';
import { useEffect, useState } from 'react';
import { ContactFormModal } from "../components/ContactForm";


export function PMLandingPage() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="overflow-x-hidden bg-white">
      {/* Header with back button */}
      <header className="fixed top-0 left-0 right-0 z-[400] bg-white shadow-[0_2px_20px_rgba(0,0,0,0.08)]">
        <div className="max-w-[1280px] mx-auto px-10 flex items-center justify-between h-[72px]">
          <Link to="/" className="flex items-center gap-3 text-[var(--rams-gray-600)] hover:text-[#8b5cf6] transition-colors">
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
      <section className="relative bg-gradient-to-br from-[#8b5cf6] to-[#7c3aed] py-20 overflow-hidden mt-[72px]">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-24 right-28 w-64 h-64 border-2 border-white rounded-full" />
          <div className="absolute bottom-24 left-20 w-80 h-80 border-2 border-white rounded-full" />
          <div className="absolute top-32 left-40 w-48 h-48 border-2 border-white rounded-full" />
        </div>

        <div className="max-w-[1280px] mx-auto px-10 relative z-10">
          {/* Title Section */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full mb-6">
              <span className="text-[0.85rem] text-white uppercase tracking-[0.08em]" style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}>
                PM Module
              </span>
            </div>
            <h1 className="text-[3.5rem] text-white mb-6 uppercase tracking-[0.02em] leading-[1.1]" style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}>
              Preventive Maintenance
            </h1>
            <p className="text-[1.3rem] text-white/90 max-w-[700px] mx-auto leading-[1.7]">
              Fix it before it breaks. Schedule, track, and optimize maintenance to answer <strong>"When should we service it?"</strong>
            </p>
          </div>

          {/* Illustration - Maintenance Calendar & Cycle */}
          <div className="max-w-[1000px] mx-auto">
            <div className="relative w-full aspect-[5/3] flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-2xl p-10 border border-white/20">
              <svg viewBox="0 0 800 480" className="w-full h-full">
                {/* Circular Maintenance Cycle */}
                <g transform="translate(400, 240)">
                  {/* Outer Circle - Cycle Path */}
                  <circle cx="0" cy="0" r="160" fill="none" stroke="white" strokeWidth="3" opacity="0.3" />
                  <circle cx="0" cy="0" r="140" fill="none" stroke="white" strokeWidth="1" opacity="0.2" />
                  
                  {/* Center Hub */}
                  <circle cx="0" cy="0" r="50" fill="white" opacity="0.95" />
                  <text x="0" y="-10" fill="#8b5cf6" fontSize="14" fontWeight="700" textAnchor="middle" style={{ fontFamily: 'var(--ff-head)' }}>
                    PM
                  </text>
                  <text x="0" y="8" fill="#8b5cf6" fontSize="11" fontWeight="700" textAnchor="middle" style={{ fontFamily: 'var(--ff-head)' }}>
                    CYCLE
                  </text>
                  <text x="0" y="23" fill="#8b5cf6" fontSize="8" textAnchor="middle" opacity="0.7">
                    Continuous
                  </text>

                  {/* Stage 1: PLAN (Top) */}
                  <g transform="translate(0, -160)">
                    <circle cx="0" cy="0" r="45" fill="white" opacity="0.95" />
                    <circle cx="0" cy="0" r="40" fill="#3b82f6" />
                    <rect x="-15" y="-15" width="30" height="28" fill="white" rx="2" />
                    <line x1="-10" y1="-10" x2="10" y2="-10" stroke="#3b82f6" strokeWidth="2" />
                    <line x1="-10" y1="-2" x2="10" y2="-2" stroke="#3b82f6" strokeWidth="2" />
                    <line x1="-10" y1="6" x2="10" y2="6" stroke="#3b82f6" strokeWidth="2" />
                    
                    <rect x="-40" y="-70" width="80" height="35" rx="4" fill="white" opacity="0.95" />
                    <text x="0" y="-54" fill="#3b82f6" fontSize="12" fontWeight="700" textAnchor="middle" style={{ fontFamily: 'var(--ff-head)' }}>
                      1. PLAN
                    </text>
                    <text x="0" y="-41" fill="#3b82f6" fontSize="9" textAnchor="middle">
                      Schedule Tasks
                    </text>
                  </g>

                  {/* Stage 2: EXECUTE (Right) */}
                  <g transform="translate(160, 0)">
                    <circle cx="0" cy="0" r="45" fill="white" opacity="0.95" />
                    <circle cx="0" cy="0" r="40" fill="#10b981" />
                    <rect x="-3" y="-15" width="6" height="20" rx="2" fill="white" />
                    <circle cx="0" cy="-18" r="7" fill="none" stroke="white" strokeWidth="2.5" />
                    <circle cx="0" cy="7" r="5" fill="white" />
                    
                    <rect x="-45" y="-18" width="90" height="35" rx="4" fill="white" opacity="0.95" />
                    <text x="0" y="-2" fill="#10b981" fontSize="12" fontWeight="700" textAnchor="middle" style={{ fontFamily: 'var(--ff-head)' }}>
                      2. EXECUTE
                    </text>
                    <text x="0" y="11" fill="#10b981" fontSize="9" textAnchor="middle">
                      Perform Maint.
                    </text>
                  </g>

                  {/* Stage 3: VERIFY (Bottom) */}
                  <g transform="translate(0, 160)">
                    <circle cx="0" cy="0" r="45" fill="white" opacity="0.95" />
                    <circle cx="0" cy="0" r="40" fill="#f59e0b" />
                    <path d="M -12 0 L -5 12 L 14 -10" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                    
                    <rect x="-40" y="35" width="80" height="35" rx="4" fill="white" opacity="0.95" />
                    <text x="0" y="51" fill="#f59e0b" fontSize="12" fontWeight="700" textAnchor="middle" style={{ fontFamily: 'var(--ff-head)' }}>
                      3. VERIFY
                    </text>
                    <text x="0" y="64" fill="#f59e0b" fontSize="9" textAnchor="middle">
                      Test & Inspect
                    </text>
                  </g>

                  {/* Stage 4: RECORD (Left) */}
                  <g transform="translate(-160, 0)">
                    <circle cx="0" cy="0" r="45" fill="white" opacity="0.95" />
                    <circle cx="0" cy="0" r="40" fill="#8b5cf6" />
                    <rect x="-10" y="-12" width="20" height="24" fill="white" rx="2" />
                    <line x1="-6" y1="-8" x2="6" y2="-8" stroke="#8b5cf6" strokeWidth="1.5" />
                    <line x1="-6" y1="-3" x2="6" y2="-3" stroke="#8b5cf6" strokeWidth="1.5" />
                    <line x1="-6" y1="2" x2="6" y2="2" stroke="#8b5cf6" strokeWidth="1.5" />
                    <line x1="-6" y1="7" x2="4" y2="7" stroke="#8b5cf6" strokeWidth="1.5" />
                    
                    <rect x="-45" y="-18" width="90" height="35" rx="4" fill="white" opacity="0.95" />
                    <text x="0" y="-2" fill="#8b5cf6" fontSize="12" fontWeight="700" textAnchor="middle" style={{ fontFamily: 'var(--ff-head)' }}>
                      4. RECORD
                    </text>
                    <text x="0" y="11" fill="#8b5cf6" fontSize="9" textAnchor="middle">
                      Log Data
                    </text>
                  </g>

                  {/* Arrows showing cycle direction */}
                  <path d="M 30 -135 Q 80 -100, 135 -30" fill="none" stroke="white" strokeWidth="2" opacity="0.5" markerEnd="url(#arrow)" />
                  <path d="M 135 30 Q 100 80, 30 135" fill="none" stroke="white" strokeWidth="2" opacity="0.5" markerEnd="url(#arrow)" />
                  <path d="M -30 135 Q -80 100, -135 30" fill="none" stroke="white" strokeWidth="2" opacity="0.5" markerEnd="url(#arrow)" />
                  <path d="M -135 -30 Q -100 -80, -30 -135" fill="none" stroke="white" strokeWidth="2" opacity="0.5" markerEnd="url(#arrow)" />
                </g>

                {/* Arrow marker definition */}
                <defs>
                  <marker id="arrow" markerWidth="10" markerHeight="10" refX="5" refY="3" orient="auto" markerUnits="strokeWidth">
                    <path d="M0,0 L0,6 L9,3 z" fill="white" opacity="0.5" />
                  </marker>
                </defs>

                {/* Calendar Icon (Left Side) */}
                <g transform="translate(100, 120)">
                  <rect x="-50" y="-60" width="100" height="120" rx="6" fill="white" opacity="0.15" />
                  <rect x="-50" y="-60" width="100" height="25" rx="6" fill="white" opacity="0.25" />
                  <text x="0" y="-40" fill="white" fontSize="12" fontWeight="700" textAnchor="middle" style={{ fontFamily: 'var(--ff-head)' }}>
                    SCHEDULE
                  </text>
                  
                  {/* Calendar dates */}
                  <circle cx="-25" cy="-10" r="8" fill="#3b82f6" opacity="0.8" />
                  <text x="-25" y="-6" fill="white" fontSize="9" fontWeight="700" textAnchor="middle">1</text>
                  
                  <circle cx="0" cy="-10" r="8" fill="white" opacity="0.3" />
                  <text x="0" y="-6" fill="white" fontSize="9" fontWeight="700" textAnchor="middle">7</text>
                  
                  <circle cx="25" cy="-10" r="8" fill="#10b981" opacity="0.8" />
                  <text x="25" y="-6" fill="white" fontSize="9" fontWeight="700" textAnchor="middle">14</text>
                  
                  <circle cx="-25" cy="15" r="8" fill="white" opacity="0.3" />
                  <text x="-25" y="19" fill="white" fontSize="9" fontWeight="700" textAnchor="middle">21</text>
                  
                  <circle cx="0" cy="15" r="8" fill="white" opacity="0.3" />
                  <text x="0" y="19" fill="white" fontSize="9" fontWeight="700" textAnchor="middle">28</text>
                  
                  <circle cx="25" cy="15" r="8" fill="#f59e0b" opacity="0.8" />
                  <text x="25" y="19" fill="white" fontSize="9" fontWeight="700" textAnchor="middle">30</text>
                  
                  <text x="0" y="45" fill="white" fontSize="8" textAnchor="middle" opacity="0.8">
                    Planned Tasks
                  </text>
                </g>

                {/* Time Intervals (Right Side) */}
                <g transform="translate(700, 120)">
                  <rect x="-100" y="-60" width="100" height="120" rx="6" fill="white" opacity="0.15" />
                  
                  <text x="-50" y="-35" fill="white" fontSize="11" fontWeight="700" textAnchor="middle" style={{ fontFamily: 'var(--ff-head)' }}>
                    INTERVALS
                  </text>
                  
                  <rect x="-85" y="-20" width="70" height="22" rx="3" fill="#3b82f6" opacity="0.7" />
                  <text x="-50" y="-5" fill="white" fontSize="9" fontWeight="600" textAnchor="middle">
                    Weekly
                  </text>
                  
                  <rect x="-85" y="7" width="70" height="22" rx="3" fill="#10b981" opacity="0.7" />
                  <text x="-50" y="22" fill="white" fontSize="9" fontWeight="600" textAnchor="middle">
                    Monthly
                  </text>
                  
                  <rect x="-85" y="34" width="70" height="22" rx="3" fill="#f59e0b" opacity="0.7" />
                  <text x="-50" y="49" fill="white" fontSize="9" fontWeight="600" textAnchor="middle">
                    Quarterly
                  </text>
                </g>

                {/* Time-based vs Condition-based */}
                <g transform="translate(100, 340)">
                  <rect x="-80" y="-25" width="160" height="50" rx="6" fill="white" opacity="0.15" />
                  <text x="0" y="-5" fill="white" fontSize="10" fontWeight="700" textAnchor="middle" style={{ fontFamily: 'var(--ff-head)' }}>
                    TIME-BASED
                  </text>
                  <text x="0" y="10" fill="white" fontSize="8" textAnchor="middle" opacity="0.8">
                    Fixed schedules
                  </text>
                </g>

                <g transform="translate(700, 340)">
                  <rect x="-80" y="-25" width="160" height="50" rx="6" fill="white" opacity="0.15" />
                  <text x="0" y="-5" fill="white" fontSize="10" fontWeight="700" textAnchor="middle" style={{ fontFamily: 'var(--ff-head)' }}>
                    CONDITION-BASED
                  </text>
                  <text x="0" y="10" fill="white" fontSize="8" textAnchor="middle" opacity="0.8">
                    Health monitoring
                  </text>
                </g>
              </svg>
            </div>

            {/* Legend */}
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-center">
                <div className="w-12 h-12 bg-[#3b82f6] rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-white text-[1rem]" style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}>1</span>
                </div>
                <div className="text-[0.85rem] text-white mb-1" style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}>Plan</div>
                <div className="text-[0.7rem] text-white/70">Schedule tasks</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-center">
                <div className="w-12 h-12 bg-[#10b981] rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-white text-[1rem]" style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}>2</span>
                </div>
                <div className="text-[0.85rem] text-white mb-1" style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}>Execute</div>
                <div className="text-[0.7rem] text-white/70">Perform work</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-center">
                <div className="w-12 h-12 bg-[#f59e0b] rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-white text-[1rem]" style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}>3</span>
                </div>
                <div className="text-[0.85rem] text-white mb-1" style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}>Verify</div>
                <div className="text-[0.7rem] text-white/70">Test & inspect</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-center">
                <div className="w-12 h-12 bg-[#8b5cf6] rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-white text-[1rem]" style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}>4</span>
                </div>
                <div className="text-[0.85rem] text-white mb-1" style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}>Record</div>
                <div className="text-[0.7rem] text-white/70">Log data</div>
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
                  What is Preventive Maintenance?
                </h2>
                <p className="text-[1.1rem] text-[var(--rams-gray-700)] leading-[1.8] mb-6">
                  Preventive Maintenance (PM) is the practice of performing routine maintenance activities on a schedule to prevent unexpected equipment failures. It's proactive, not reactive. The core question: <strong>"What maintenance should we do, and when, to avoid breakdowns?"</strong>
                </p>
                <p className="text-[1.1rem] text-[var(--rams-gray-700)] leading-[1.8] mb-6">
                  PM follows a continuous four-stage cycle: <strong>Plan</strong> (schedule tasks based on time/condition), <strong>Execute</strong> (perform inspections, lubrication, calibration, replacements), <strong>Verify</strong> (test that work was done correctly), and <strong>Record</strong> (log data for analysis and compliance). This cycle repeats at defined intervals—weekly, monthly, quarterly, or annually—depending on component criticality and usage.
                </p>
                <p className="text-[1.1rem] text-[var(--rams-gray-700)] leading-[1.8] mb-6">
                  Modern PM combines <strong>time-based</strong> schedules (fixed intervals like "every 1,000 hours") with <strong>condition-based</strong> monitoring (triggered by sensor data like temperature, vibration, or wear). This hybrid approach maximizes equipment lifespan, reduces unplanned downtime, and optimizes maintenance resource allocation. Effective PM transforms maintenance from a cost center into a strategic advantage.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#8b5cf6]/10 to-transparent border-l-4 border-[#8b5cf6] p-8 rounded-r">
                <p className="text-[1.05rem] text-[var(--rams-gray-700)] italic leading-[1.8]">
                  "An hour of preventive maintenance today saves ten hours of corrective maintenance tomorrow. The best repair is the one you never have to make."
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white border-2 border-[var(--rams-gray-200)] rounded-xl p-8 text-center hover:border-[#8b5cf6]/50 hover:shadow-lg transition-all">
                  <div className="text-[3rem] text-[#8b5cf6] mb-3" style={{ fontFamily: 'var(--ff-head)', fontWeight: 800 }}>
                    📅
                  </div>
                  <h3 className="text-[1rem] text-[var(--rams-primary)] mb-2 uppercase tracking-[0.05em]" style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}>
                    Scheduled
                  </h3>
                  <p className="text-[0.9rem] text-[var(--rams-gray-600)] leading-[1.6]">
                    Plan and execute maintenance at optimal intervals
                  </p>
                </div>

                <div className="bg-white border-2 border-[var(--rams-gray-200)] rounded-xl p-8 text-center hover:border-[#8b5cf6]/50 hover:shadow-lg transition-all">
                  <div className="text-[3rem] text-[#8b5cf6] mb-3" style={{ fontFamily: 'var(--ff-head)', fontWeight: 800 }}>
                    🔄
                  </div>
                  <h3 className="text-[1rem] text-[var(--rams-primary)] mb-2 uppercase tracking-[0.05em]" style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}>
                    Continuous
                  </h3>
                  <p className="text-[0.9rem] text-[var(--rams-gray-600)] leading-[1.6]">
                    Repeating cycle ensures nothing is overlooked
                  </p>
                </div>

                <div className="bg-white border-2 border-[var(--rams-gray-200)] rounded-xl p-8 text-center hover:border-[#8b5cf6]/50 hover:shadow-lg transition-all">
                  <div className="text-[3rem] text-[#8b5cf6] mb-3" style={{ fontFamily: 'var(--ff-head)', fontWeight: 800 }}>
                    💰
                  </div>
                  <h3 className="text-[1rem] text-[var(--rams-primary)] mb-2 uppercase tracking-[0.05em]" style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}>
                    Cost-Effective
                  </h3>
                  <p className="text-[0.9rem] text-[var(--rams-gray-600)] leading-[1.6]">
                    Prevent expensive failures and extend asset life
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