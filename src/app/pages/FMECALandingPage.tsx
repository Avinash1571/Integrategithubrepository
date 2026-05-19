import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import { useEffect, useState } from 'react';
import { ContactFormModal } from "../components/ContactForm";

export function FMECALandingPage() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="overflow-x-hidden bg-white">
      {/* Header with back button */}
      <header className="fixed top-0 left-0 right-0 z-[400] bg-white shadow-[0_2px_20px_rgba(0,0,0,0.08)]">
        <div className="max-w-[1280px] mx-auto px-10 flex items-center justify-between h-[72px]">
          <Link to="/" className="flex items-center gap-3 text-[var(--rams-gray-600)] hover:text-[#f43f5e] transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="text-[0.78rem] uppercase tracking-[0.06em]" style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}>
              Back to Home
            </span>
          </Link>
          <a href="#" className="flex items-center gap-[0.3rem]">
            <div className="h-[42px] flex items-center">
              <span className="text-[1rem] font-bold text-[var(--rams-gray-600)]">RAMS360</span>
            </div>
          </a>
        </div>
      </header>

      {/* Hero Section with Illustration */}
      <section className="relative bg-gradient-to-br from-[#f43f5e] to-[#e11d48] py-20 overflow-hidden mt-[72px]">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-16 right-24 w-96 h-96 border-2 border-white rotate-12" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }} />
          <div className="absolute bottom-20 left-32 w-72 h-72 border-2 border-white -rotate-45" />
          <div className="absolute top-1/2 left-1/4 w-56 h-56 border-2 border-white rotate-45" />
        </div>

        <div className="max-w-[1280px] mx-auto px-10 relative z-10">
          {/* Title Section */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full mb-6">
              <span className="text-[0.85rem] text-white uppercase tracking-[0.08em]" style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}>
                FMECA Module
              </span>
            </div>
            <h1 className="text-[3.5rem] text-white mb-6 uppercase tracking-[0.02em] leading-[1.1]" style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}>
              Failure Modes, Effects & Criticality Analysis
            </h1>
            <p className="text-[1.3rem] text-white/90 max-w-[700px] mx-auto leading-[1.7]">
              Identify risks before they happen. Systematically analyze <strong>"What can fail, how, and what's the impact?"</strong>
            </p>
          </div>

          {/* Illustration - FMECA Flow & Risk Matrix */}
          <div className="max-w-[1100px] mx-auto">
            <div className="relative w-full aspect-[4/3] flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-2xl p-10 border border-white/20">
              <svg viewBox="0 0 900 675" className="w-full h-full">
                {/* Central Component */}
                <g transform="translate(150, 100)">
                  <rect x="-60" y="-40" width="120" height="80" rx="8" fill="white" opacity="0.95" />
                  <text x="0" y="-10" fill="#f43f5e" fontSize="14" fontWeight="700" textAnchor="middle" style={{ fontFamily: 'var(--ff-head)' }}>
                    COMPONENT
                  </text>
                  <text x="0" y="10" fill="#f43f5e" fontSize="11" textAnchor="middle">
                    Electric Motor
                  </text>
                  <text x="0" y="28" fill="#f43f5e" fontSize="9" textAnchor="middle" opacity="0.7">
                    Part #: EM-001
                  </text>
                </g>

                {/* Failure Mode 1 - Bearing Failure (Critical) */}
                <g transform="translate(150, 250)">
                  {/* Connection Line */}
                  <line x1="0" y1="-110" x2="0" y2="-50" stroke="white" strokeWidth="2" opacity="0.4" />
                  
                  {/* Failure Mode Box */}
                  <rect x="-70" y="-40" width="140" height="80" rx="6" fill="white" opacity="0.9" />
                  <rect x="-70" y="-40" width="140" height="25" rx="6" fill="#dc2626" />
                  <text x="0" y="-22" fill="white" fontSize="11" fontWeight="700" textAnchor="middle" style={{ fontFamily: 'var(--ff-head)' }}>
                    FAILURE MODE 1
                  </text>
                  <text x="0" y="0" fill="#dc2626" fontSize="10" fontWeight="600" textAnchor="middle">
                    Bearing Seizure
                  </text>
                  <text x="0" y="18" fill="#374151" fontSize="8" textAnchor="middle">
                    Criticality: CRITICAL
                  </text>
                  
                  {/* Effect Arrow */}
                  <line x1="70" y1="0" x2="130" y2="0" stroke="white" strokeWidth="2" opacity="0.5" />
                  <polygon points="135,0 125,-4 125,4" fill="white" opacity="0.5" />
                  
                  {/* Effect Box */}
                  <rect x="140" y="-25" width="120" height="50" rx="4" fill="white" opacity="0.85" />
                  <text x="200" y="-8" fill="#dc2626" fontSize="9" fontWeight="700" textAnchor="middle" style={{ fontFamily: 'var(--ff-head)' }}>
                    EFFECT
                  </text>
                  <text x="200" y="6" fill="#374151" fontSize="8" textAnchor="middle">
                    Complete shutdown
                  </text>
                  <text x="200" y="18" fill="#374151" fontSize="8" textAnchor="middle">
                    RPN: 280
                  </text>
                </g>

                {/* Failure Mode 2 - Overheating (High) */}
                <g transform="translate(150, 380)">
                  {/* Connection Line */}
                  <line x1="0" y1="-240" x2="-50" y2="-190" stroke="white" strokeWidth="2" opacity="0.4" />
                  <line x1="-50" y1="-190" x2="-50" y2="-50" stroke="white" strokeWidth="2" opacity="0.4" />
                  
                  {/* Failure Mode Box */}
                  <rect x="-120" y="-40" width="140" height="80" rx="6" fill="white" opacity="0.9" />
                  <rect x="-120" y="-40" width="140" height="25" rx="6" fill="#f59e0b" />
                  <text x="-50" y="-22" fill="white" fontSize="11" fontWeight="700" textAnchor="middle" style={{ fontFamily: 'var(--ff-head)' }}>
                    FAILURE MODE 2
                  </text>
                  <text x="-50" y="0" fill="#f59e0b" fontSize="10" fontWeight="600" textAnchor="middle">
                    Overheating
                  </text>
                  <text x="-50" y="18" fill="#374151" fontSize="8" textAnchor="middle">
                    Criticality: HIGH
                  </text>
                  
                  {/* Effect Arrow */}
                  <line x1="20" y1="0" x2="80" y2="0" stroke="white" strokeWidth="2" opacity="0.5" />
                  <polygon points="85,0 75,-4 75,4" fill="white" opacity="0.5" />
                  
                  {/* Effect Box */}
                  <rect x="90" y="-25" width="120" height="50" rx="4" fill="white" opacity="0.85" />
                  <text x="150" y="-8" fill="#f59e0b" fontSize="9" fontWeight="700" textAnchor="middle" style={{ fontFamily: 'var(--ff-head)' }}>
                    EFFECT
                  </text>
                  <text x="150" y="6" fill="#374151" fontSize="8" textAnchor="middle">
                    Reduced efficiency
                  </text>
                  <text x="150" y="18" fill="#374151" fontSize="8" textAnchor="middle">
                    RPN: 180
                  </text>
                </g>

                {/* Failure Mode 3 - Insulation Breakdown (Medium) */}
                <g transform="translate(150, 510)">
                  {/* Connection Line */}
                  <line x1="0" y1="-370" x2="50" y2="-320" stroke="white" strokeWidth="2" opacity="0.4" />
                  <line x1="50" y1="-320" x2="50" y2="-50" stroke="white" strokeWidth="2" opacity="0.4" />
                  
                  {/* Failure Mode Box */}
                  <rect x="-20" y="-40" width="140" height="80" rx="6" fill="white" opacity="0.9" />
                  <rect x="-20" y="-40" width="140" height="25" rx="6" fill="#3b82f6" />
                  <text x="50" y="-22" fill="white" fontSize="11" fontWeight="700" textAnchor="middle" style={{ fontFamily: 'var(--ff-head)' }}>
                    FAILURE MODE 3
                  </text>
                  <text x="50" y="0" fill="#3b82f6" fontSize="10" fontWeight="600" textAnchor="middle">
                    Insulation Loss
                  </text>
                  <text x="50" y="18" fill="#374151" fontSize="8" textAnchor="middle">
                    Criticality: MEDIUM
                  </text>
                  
                  {/* Effect Arrow */}
                  <line x1="120" y1="0" x2="180" y2="0" stroke="white" strokeWidth="2" opacity="0.5" />
                  <polygon points="185,0 175,-4 175,4" fill="white" opacity="0.5" />
                  
                  {/* Effect Box */}
                  <rect x="190" y="-25" width="120" height="50" rx="4" fill="white" opacity="0.85" />
                  <text x="250" y="-8" fill="#3b82f6" fontSize="9" fontWeight="700" textAnchor="middle" style={{ fontFamily: 'var(--ff-head)' }}>
                    EFFECT
                  </text>
                  <text x="250" y="6" fill="#374151" fontSize="8" textAnchor="middle">
                    Safety hazard
                  </text>
                  <text x="250" y="18" fill="#374151" fontSize="8" textAnchor="middle">
                    RPN: 120
                  </text>
                </g>

                {/* Risk Matrix */}
                <g transform="translate(550, 120)">
                  {/* Title */}
                  <rect x="0" y="-40" width="280" height="35" rx="6" fill="white" opacity="0.15" />
                  <text x="140" y="-18" fill="white" fontSize="14" fontWeight="700" textAnchor="middle" style={{ fontFamily: 'var(--ff-head)' }}>
                    RISK MATRIX
                  </text>

                  {/* Matrix Grid */}
                  <rect x="0" y="0" width="280" height="280" fill="white" opacity="0.1" rx="4" />
                  
                  {/* Grid Lines */}
                  <line x1="0" y1="70" x2="280" y2="70" stroke="white" strokeWidth="1" opacity="0.3" />
                  <line x1="0" y1="140" x2="280" y2="140" stroke="white" strokeWidth="1" opacity="0.3" />
                  <line x1="0" y1="210" x2="280" y2="210" stroke="white" strokeWidth="1" opacity="0.3" />
                  <line x1="70" y1="0" x2="70" y2="280" stroke="white" strokeWidth="1" opacity="0.3" />
                  <line x1="140" y1="0" x2="140" y2="280" stroke="white" strokeWidth="1" opacity="0.3" />
                  <line x1="210" y1="0" x2="210" y2="280" stroke="white" strokeWidth="1" opacity="0.3" />

                  {/* Risk Zones */}
                  <rect x="0" y="0" width="70" height="70" fill="#10b981" opacity="0.4" />
                  <rect x="70" y="0" width="70" height="70" fill="#10b981" opacity="0.5" />
                  <rect x="140" y="0" width="70" height="70" fill="#3b82f6" opacity="0.5" />
                  <rect x="210" y="0" width="70" height="70" fill="#f59e0b" opacity="0.5" />
                  
                  <rect x="0" y="70" width="70" height="70" fill="#10b981" opacity="0.5" />
                  <rect x="70" y="70" width="70" height="70" fill="#3b82f6" opacity="0.5" />
                  <rect x="140" y="70" width="70" height="70" fill="#f59e0b" opacity="0.5" />
                  <rect x="210" y="70" width="70" height="70" fill="#f59e0b" opacity="0.6" />
                  
                  <rect x="0" y="140" width="70" height="70" fill="#3b82f6" opacity="0.5" />
                  <rect x="70" y="140" width="70" height="70" fill="#f59e0b" opacity="0.5" />
                  <rect x="140" y="140" width="70" height="70" fill="#f59e0b" opacity="0.6" />
                  <rect x="210" y="140" width="70" height="70" fill="#dc2626" opacity="0.5" />
                  
                  <rect x="0" y="210" width="70" height="70" fill="#f59e0b" opacity="0.5" />
                  <rect x="70" y="210" width="70" height="70" fill="#f59e0b" opacity="0.6" />
                  <rect x="140" y="210" width="70" height="70" fill="#dc2626" opacity="0.5" />
                  <rect x="210" y="210" width="70" height="70" fill="#dc2626" opacity="0.6" />

                  {/* Failure Mode Markers */}
                  <circle cx="245" cy="245" r="8" fill="#dc2626" stroke="white" strokeWidth="2" />
                  <text x="245" y="249" fill="white" fontSize="10" fontWeight="700" textAnchor="middle">1</text>
                  
                  <circle cx="175" cy="175" r="8" fill="#f59e0b" stroke="white" strokeWidth="2" />
                  <text x="175" y="179" fill="white" fontSize="10" fontWeight="700" textAnchor="middle">2</text>
                  
                  <circle cx="105" cy="140" r="8" fill="#3b82f6" stroke="white" strokeWidth="2" />
                  <text x="105" y="144" fill="white" fontSize="10" fontWeight="700" textAnchor="middle">3</text>

                  {/* Y-axis label (Severity) */}
                  <text x="-20" y="140" fill="white" fontSize="12" fontWeight="600" textAnchor="middle" transform="rotate(-90 -20 140)" style={{ fontFamily: 'var(--ff-head)' }}>
                    SEVERITY
                  </text>
                  <text x="-10" y="265" fill="white" fontSize="9" textAnchor="end" opacity="0.8">Low</text>
                  <text x="-10" y="15" fill="white" fontSize="9" textAnchor="end" opacity="0.8">High</text>

                  {/* X-axis label (Occurrence) */}
                  <text x="140" y="310" fill="white" fontSize="12" fontWeight="600" textAnchor="middle" style={{ fontFamily: 'var(--ff-head)' }}>
                    OCCURRENCE
                  </text>
                  <text x="15" y="300" fill="white" fontSize="9" textAnchor="middle" opacity="0.8">Low</text>
                  <text x="265" y="300" fill="white" fontSize="9" textAnchor="middle" opacity="0.8">High</text>
                </g>

                {/* RPN Formula */}
                <rect x="550" y="480" width="280" height="80" rx="6" fill="white" opacity="0.15" />
                <text x="690" y="510" fill="white" fontSize="13" fontWeight="700" textAnchor="middle" style={{ fontFamily: 'var(--ff-head)' }}>
                  RPN CALCULATION
                </text>
                <text x="690" y="530" fill="white" fontSize="11" textAnchor="middle" opacity="0.9">
                  RPN = Severity × Occurrence × Detection
                </text>
                <text x="690" y="548" fill="white" fontSize="9" textAnchor="middle" opacity="0.7">
                  Risk Priority Number (1-1000)
                </text>
              </svg>
            </div>

            {/* Legend */}
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-center">
                <div className="w-12 h-12 bg-[#dc2626] rounded mx-auto mb-3 flex items-center justify-center">
                  <span className="text-white text-[0.85rem]" style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}>CRIT</span>
                </div>
                <div className="text-[0.85rem] text-white mb-1" style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}>Critical</div>
                <div className="text-[0.7rem] text-white/70">RPN: 200-1000</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-center">
                <div className="w-12 h-12 bg-[#f59e0b] rounded mx-auto mb-3 flex items-center justify-center">
                  <span className="text-white text-[0.85rem]" style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}>HIGH</span>
                </div>
                <div className="text-[0.85rem] text-white mb-1" style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}>High</div>
                <div className="text-[0.7rem] text-white/70">RPN: 100-199</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-center">
                <div className="w-12 h-12 bg-[#3b82f6] rounded mx-auto mb-3 flex items-center justify-center">
                  <span className="text-white text-[0.85rem]" style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}>MED</span>
                </div>
                <div className="text-[0.85rem] text-white mb-1" style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}>Medium</div>
                <div className="text-[0.7rem] text-white/70">RPN: 50-99</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-center">
                <div className="w-12 h-12 bg-[#10b981] rounded mx-auto mb-3 flex items-center justify-center">
                  <span className="text-white text-[0.85rem]" style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}>LOW</span>
                </div>
                <div className="text-[0.85rem] text-white mb-1" style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}>Low</div>
                <div className="text-[0.7rem] text-white/70">RPN: 1-49</div>
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
                  What is FMECA?
                </h2>
                <p className="text-[1.1rem] text-[var(--rams-gray-700)] leading-[1.8] mb-6">
                  Failure Modes, Effects, and Criticality Analysis (FMECA) is a systematic, step-by-step approach for identifying all possible failures in a design, manufacturing process, or product. It answers three critical questions: <strong>"What can go wrong? What happens when it does? How serious is it?"</strong>
                </p>
                <p className="text-[1.1rem] text-[var(--rams-gray-700)] leading-[1.8] mb-6">
                  FMECA extends traditional FMEA by adding criticality analysis—ranking each failure mode by its Risk Priority Number (RPN). The RPN is calculated by multiplying three factors: Severity (impact on system/safety), Occurrence (frequency), and Detection (ability to catch before impact). Higher RPN scores demand immediate attention and mitigation strategies.
                </p>
                <p className="text-[1.1rem] text-[var(--rams-gray-700)] leading-[1.8] mb-6">
                  The risk matrix above visualizes where each failure mode sits in terms of severity versus occurrence. Critical failures (red zone) require design changes, redundancy, or enhanced monitoring. Medium and low risks may be acceptable with proper documentation and monitoring. FMECA drives proactive risk management, not reactive firefighting.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#f43f5e]/10 to-transparent border-l-4 border-[#f43f5e] p-8 rounded-r">
                <p className="text-[1.05rem] text-[var(--rams-gray-700)] italic leading-[1.8]">
                  "FMECA isn't about predicting the future—it's about preparing for it. Every failure mode you identify today is one less catastrophe tomorrow."
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white border-2 border-[var(--rams-gray-200)] rounded-xl p-8 text-center hover:border-[#f43f5e]/50 hover:shadow-lg transition-all">
                  <div className="text-[3rem] text-[#f43f5e] mb-3" style={{ fontFamily: 'var(--ff-head)', fontWeight: 800 }}>
                    S×O×D
                  </div>
                  <h3 className="text-[1rem] text-[var(--rams-primary)] mb-2 uppercase tracking-[0.05em]" style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}>
                    RPN Formula
                  </h3>
                  <p className="text-[0.9rem] text-[var(--rams-gray-600)] leading-[1.6]">
                    Severity × Occurrence × Detection = Risk Priority
                  </p>
                </div>

                <div className="bg-white border-2 border-[var(--rams-gray-200)] rounded-xl p-8 text-center hover:border-[#f43f5e]/50 hover:shadow-lg transition-all">
                  <div className="text-[3rem] text-[#f43f5e] mb-3" style={{ fontFamily: 'var(--ff-head)', fontWeight: 800 }}>
                    🎯
                  </div>
                  <h3 className="text-[1rem] text-[var(--rams-primary)] mb-2 uppercase tracking-[0.05em]" style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}>
                    Proactive
                  </h3>
                  <p className="text-[0.9rem] text-[var(--rams-gray-600)] leading-[1.6]">
                    Identify and mitigate risks before they occur
                  </p>
                </div>

                <div className="bg-white border-2 border-[var(--rams-gray-200)] rounded-xl p-8 text-center hover:border-[#f43f5e]/50 hover:shadow-lg transition-all">
                  <div className="text-[3rem] text-[#f43f5e] mb-3" style={{ fontFamily: 'var(--ff-head)', fontWeight: 800 }}>
                    📋
                  </div>
                  <h3 className="text-[1rem] text-[var(--rams-primary)] mb-2 uppercase tracking-[0.05em]" style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}>
                    Documented
                  </h3>
                  <p className="text-[0.9rem] text-[var(--rams-gray-600)] leading-[1.6]">
                    Complete audit trail for compliance and certification
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