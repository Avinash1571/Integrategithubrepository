import { ArrowLeft } from 'lucide-react';
import logoImage from '../../assets/logo.png';
import { Link } from 'react-router';
import { useEffect, useState } from 'react';
import { ContactFormModal } from "../components/ContactForm";


export function SafetyLandingPage() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="overflow-x-hidden bg-white">
      {/* ✅ Header UPDATED (same as MTTR) */}
      <header className="fixed top-0 left-0 right-0 z-[400] bg-white shadow-[0_2px_20px_rgba(0,0,0,0.08)]">
        <div className="max-w-[1280px] mx-auto px-10 flex items-center justify-between h-[72px]">
          <Link
            to="/"
            className="flex items-center gap-3 text-[var(--rams-gray-600)] hover:text-[#38bdf8] transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span
              className="text-[0.78rem] uppercase tracking-[0.06em]"
              style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}
            >
              Back to Home
            </span>
          </Link>

          <a href="#" className="flex items-center gap-[0.3rem]">
            <img
              src={logoImage}
              alt="RAMS360 Logo"
              className="h-[42px] w-auto"
            />
          </a>
        </div>
      </header>

      {/* ✅ Hero Section (removed mt-[72px]) */}
      <section className="relative bg-gradient-to-br from-[#38bdf8] to-[#0ea5e9] py-20 overflow-hidden mt-[72px]">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-72 h-72 border-2 border-white" style={{ clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)' }} />
          <div className="absolute bottom-16 left-16 w-64 h-64 border-2 border-white" style={{ clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)' }} />
          <div className="absolute top-40 left-1/3 w-56 h-56 border-2 border-white" style={{ clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)' }} />
        </div>

        <div className="max-w-[1280px] mx-auto px-10 relative z-10">
          {/* Title Section */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full mb-6">
              <span className="text-[0.85rem] text-white uppercase tracking-[0.08em]" style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}>
                SPA Module
              </span>
            </div>
            <h1 className="text-[3.5rem] text-white mb-6 uppercase tracking-[0.02em] leading-[1.1]" style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}>
              Safety Analysis
            </h1>
            <p className="text-[1.3rem] text-white/90 max-w-[700px] mx-auto leading-[1.7]">
              Protect people and assets. Identify hazards, assess risks, and implement controls to answer <strong>"Is it safe?"</strong>
            </p>
          </div>


          {/* Illustration - Safety Risk Assessment Process */}
          <div className="max-w-[1100px] mx-auto">
            <div className="relative w-full aspect-[4/3] flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-2xl p-10 border border-white/20">
              <svg viewBox="0 0 900 675" className="w-full h-full">
                {/* Central Hazard Source */}
                <g transform="translate(150, 120)">
                  <circle cx="0" cy="0" r="55" fill="white" opacity="0.95" />
                  <circle cx="0" cy="0" r="50" fill="#dc2626" />
                  <text x="0" y="-5" fill="white" fontSize="28" fontWeight="700" textAnchor="middle">!</text>
                  <text x="0" y="18" fill="white" fontSize="11" fontWeight="700" textAnchor="middle" style={{ fontFamily: 'var(--ff-head)' }}>
                    HAZARD
                  </text>

                  <rect x="-60" y="-90" width="120" height="35" rx="4" fill="white" opacity="0.95" />
                  <text x="0" y="-74" fill="#dc2626" fontSize="11" fontWeight="700" textAnchor="middle" style={{ fontFamily: 'var(--ff-head)' }}>
                    IDENTIFIED
                  </text>
                  <text x="0" y="-61" fill="#dc2626" fontSize="9" textAnchor="middle">
                    Electric shock risk
                  </text>
                </g>

                {/* Risk Matrix (Right Side) */}
                <g transform="translate(550, 150)">
                  <rect x="-120" y="-50" width="280" height="35" rx="6" fill="white" opacity="0.15" />
                  <text x="20" y="-26" fill="white" fontSize="13" fontWeight="700" textAnchor="middle" style={{ fontFamily: 'var(--ff-head)' }}>
                    RISK MATRIX
                  </text>

                  {/* Matrix Grid 4x4 */}
                  <rect x="-120" y="0" width="280" height="240" fill="white" opacity="0.1" rx="4" />

                  {/* Grid Lines */}
                  <line x1="-120" y1="60" x2="160" y2="60" stroke="white" strokeWidth="1" opacity="0.3" />
                  <line x1="-120" y1="120" x2="160" y2="120" stroke="white" strokeWidth="1" opacity="0.3" />
                  <line x1="-120" y1="180" x2="160" y2="180" stroke="white" strokeWidth="1" opacity="0.3" />
                  <line x1="-50" y1="0" x2="-50" y2="240" stroke="white" strokeWidth="1" opacity="0.3" />
                  <line x1="20" y1="0" x2="20" y2="240" stroke="white" strokeWidth="1" opacity="0.3" />
                  <line x1="90" y1="0" x2="90" y2="240" stroke="white" strokeWidth="1" opacity="0.3" />

                  {/* Risk Zones - Color coded */}
                  {/* Row 1 (Catastrophic) */}
                  <rect x="-120" y="0" width="70" height="60" fill="#fbbf24" opacity="0.4" />
                  <rect x="-50" y="0" width="70" height="60" fill="#f59e0b" opacity="0.5" />
                  <rect x="20" y="0" width="70" height="60" fill="#dc2626" opacity="0.5" />
                  <rect x="90" y="0" width="70" height="60" fill="#dc2626" opacity="0.6" />

                  {/* Row 2 (Critical) */}
                  <rect x="-120" y="60" width="70" height="60" fill="#10b981" opacity="0.5" />
                  <rect x="-50" y="60" width="70" height="60" fill="#fbbf24" opacity="0.5" />
                  <rect x="20" y="60" width="70" height="60" fill="#f59e0b" opacity="0.5" />
                  <rect x="90" y="60" width="70" height="60" fill="#dc2626" opacity="0.5" />

                  {/* Row 3 (Marginal) */}
                  <rect x="-120" y="120" width="70" height="60" fill="#10b981" opacity="0.5" />
                  <rect x="-50" y="120" width="70" height="60" fill="#10b981" opacity="0.6" />
                  <rect x="20" y="120" width="70" height="60" fill="#fbbf24" opacity="0.5" />
                  <rect x="90" y="120" width="70" height="60" fill="#f59e0b" opacity="0.5" />

                  {/* Row 4 (Negligible) */}
                  <rect x="-120" y="180" width="70" height="60" fill="#10b981" opacity="0.4" />
                  <rect x="-50" y="180" width="70" height="60" fill="#10b981" opacity="0.5" />
                  <rect x="20" y="180" width="70" height="60" fill="#10b981" opacity="0.6" />
                  <rect x="90" y="180" width="70" height="60" fill="#fbbf24" opacity="0.5" />

                  {/* Initial Risk Marker (before mitigation) */}
                  <circle cx="55" cy="30" r="12" fill="#dc2626" stroke="white" strokeWidth="3" />
                  <text x="55" y="36" fill="white" fontSize="11" fontWeight="700" textAnchor="middle">
                    1A
                  </text>

                  {/* Residual Risk Marker (after mitigation) */}
                  <circle cx="-15" cy="150" r="12" fill="#10b981" stroke="white" strokeWidth="3" />
                  <text x="-15" y="156" fill="white" fontSize="11" fontWeight="700" textAnchor="middle">
                    3D
                  </text>

                  {/* Arrow showing risk reduction */}
                  <path d="M 50 40 Q 30 80, 0 140" fill="none" stroke="white" strokeWidth="2" strokeDasharray="4,4" opacity="0.6" />
                  <polygon points="0,140 -5,133 5,133" fill="white" opacity="0.6" />

                  {/* Y-axis label (Severity) */}
                  <text x="-140" y="120" fill="white" fontSize="11" fontWeight="600" textAnchor="middle" transform="rotate(-90 -140 120)" style={{ fontFamily: 'var(--ff-head)' }}>
                    SEVERITY
                  </text>
                  <text x="-130" y="210" fill="white" fontSize="8" textAnchor="end" opacity="0.8">4</text>
                  <text x="-130" y="150" fill="white" fontSize="8" textAnchor="end" opacity="0.8">3</text>
                  <text x="-130" y="90" fill="white" fontSize="8" textAnchor="end" opacity="0.8">2</text>
                  <text x="-130" y="30" fill="white" fontSize="8" textAnchor="end" opacity="0.8">1</text>

                  {/* X-axis label (Likelihood) */}
                  <text x="20" y="265" fill="white" fontSize="11" fontWeight="600" textAnchor="middle" style={{ fontFamily: 'var(--ff-head)' }}>
                    LIKELIHOOD
                  </text>
                  <text x="-85" y="255" fill="white" fontSize="8" textAnchor="middle" opacity="0.8">E</text>
                  <text x="-15" y="255" fill="white" fontSize="8" textAnchor="middle" opacity="0.8">D</text>
                  <text x="55" y="255" fill="white" fontSize="8" textAnchor="middle" opacity="0.8">C</text>
                  <text x="125" y="255" fill="white" fontSize="8" textAnchor="middle" opacity="0.8">A</text>
                </g>

                {/* Safety Controls Hierarchy (Left Bottom) */}
                <g transform="translate(150, 380)">
                  <rect x="-120" y="-60" width="240" height="240" rx="8" fill="white" opacity="0.15" />

                  <text x="0" y="-35" fill="white" fontSize="13" fontWeight="700" textAnchor="middle" style={{ fontFamily: 'var(--ff-head)' }}>
                    CONTROL HIERARCHY
                  </text>

                  {/* Level 1 - Eliminate */}
                  <rect x="-100" y="-10" width="200" height="35" rx="4" fill="#10b981" opacity="0.8" />
                  <text x="0" y="6" fill="white" fontSize="10" fontWeight="700" textAnchor="middle" style={{ fontFamily: 'var(--ff-head)' }}>
                    1. ELIMINATE
                  </text>
                  <text x="0" y="18" fill="white" fontSize="8" textAnchor="middle">
                    Remove hazard by design
                  </text>

                  {/* Level 2 - Reduce */}
                  <rect x="-100" y="30" width="200" height="35" rx="4" fill="#0ea5e9" opacity="0.8" />
                  <text x="0" y="46" fill="white" fontSize="10" fontWeight="700" textAnchor="middle" style={{ fontFamily: 'var(--ff-head)' }}>
                    2. REDUCE
                  </text>
                  <text x="0" y="58" fill="white" fontSize="8" textAnchor="middle">
                    Lower risk through design
                  </text>

                  {/* Level 3 - Safety Devices */}
                  <rect x="-100" y="70" width="200" height="35" rx="4" fill="#8b5cf6" opacity="0.8" />
                  <text x="0" y="86" fill="white" fontSize="10" fontWeight="700" textAnchor="middle" style={{ fontFamily: 'var(--ff-head)' }}>
                    3. SAFETY DEVICES
                  </text>
                  <text x="0" y="98" fill="white" fontSize="8" textAnchor="middle">
                    Add protective features
                  </text>

                  {/* Level 4 - Warnings */}
                  <rect x="-100" y="110" width="200" height="35" rx="4" fill="#f59e0b" opacity="0.8" />
                  <text x="0" y="126" fill="white" fontSize="10" fontWeight="700" textAnchor="middle" style={{ fontFamily: 'var(--ff-head)' }}>
                    4. WARNINGS
                  </text>
                  <text x="0" y="138" fill="white" fontSize="8" textAnchor="middle">
                    Alerts and procedures
                  </text>

                  {/* Level 5 - PPE */}
                  <rect x="-100" y="150" width="200" height="35" rx="4" fill="#dc2626" opacity="0.8" />
                  <text x="0" y="166" fill="white" fontSize="10" fontWeight="700" textAnchor="middle" style={{ fontFamily: 'var(--ff-head)' }}>
                    5. PPE & PROCEDURES
                  </text>
                  <text x="0" y="178" fill="white" fontSize="8" textAnchor="middle">
                    Last resort protection
                  </text>
                </g>

                {/* Safety Process Steps (Right Bottom) */}
                <g transform="translate(550, 450)">
                  <rect x="-120" y="-60" width="280" height="200" rx="8" fill="white" opacity="0.15" />

                  <text x="20" y="-35" fill="white" fontSize="13" fontWeight="700" textAnchor="middle" style={{ fontFamily: 'var(--ff-head)' }}>
                    SAFETY PROCESS
                  </text>

                  {/* Step 1 */}
                  <g transform="translate(-80, 0)">
                    <circle cx="0" cy="0" r="28" fill="white" opacity="0.9" />
                    <text x="0" y="-5" fill="#38bdf8" fontSize="11" fontWeight="700" textAnchor="middle" style={{ fontFamily: 'var(--ff-head)' }}>
                      IDENTIFY
                    </text>
                    <text x="0" y="8" fill="#38bdf8" fontSize="9" textAnchor="middle">
                      Hazards
                    </text>
                    <text x="0" y="45" fill="white" fontSize="9" fontWeight="600" textAnchor="middle">
                      What can
                    </text>
                    <text x="0" y="58" fill="white" fontSize="9" fontWeight="600" textAnchor="middle">
                      go wrong?
                    </text>
                  </g>

                  {/* Step 2 */}
                  <g transform="translate(0, 0)">
                    <circle cx="0" cy="0" r="28" fill="white" opacity="0.9" />
                    <text x="0" y="-5" fill="#38bdf8" fontSize="11" fontWeight="700" textAnchor="middle" style={{ fontFamily: 'var(--ff-head)' }}>
                      ASSESS
                    </text>
                    <text x="0" y="8" fill="#38bdf8" fontSize="9" textAnchor="middle">
                      Risk
                    </text>
                    <text x="0" y="45" fill="white" fontSize="9" fontWeight="600" textAnchor="middle">
                      How bad?
                    </text>
                    <text x="0" y="58" fill="white" fontSize="9" fontWeight="600" textAnchor="middle">
                      How likely?
                    </text>
                  </g>

                  {/* Step 3 */}
                  <g transform="translate(80, 0)">
                    <circle cx="0" cy="0" r="28" fill="white" opacity="0.9" />
                    <text x="0" y="-5" fill="#38bdf8" fontSize="11" fontWeight="700" textAnchor="middle" style={{ fontFamily: 'var(--ff-head)' }}>
                      CONTROL
                    </text>
                    <text x="0" y="8" fill="#38bdf8" fontSize="9" textAnchor="middle">
                      Mitigate
                    </text>
                    <text x="0" y="45" fill="white" fontSize="9" fontWeight="600" textAnchor="middle">
                      What can we
                    </text>
                    <text x="0" y="58" fill="white" fontSize="9" fontWeight="600" textAnchor="middle">
                      do about it?
                    </text>
                  </g>

                  {/* Arrows between steps */}
                  <line x1="-52" y1="0" x2="-28" y2="0" stroke="white" strokeWidth="2" opacity="0.5" />
                  <polygon points="-25,0 -32,-3 -32,3" fill="white" opacity="0.5" />

                  <line x1="28" y1="0" x2="52" y2="0" stroke="white" strokeWidth="2" opacity="0.5" />
                  <polygon points="55,0 48,-3 48,3" fill="white" opacity="0.5" />

                  {/* Verification */}
                  <rect x="-100" y="90" width="200" height="40" rx="4" fill="#10b981" opacity="0.7" />
                  <text x="0" y="108" fill="white" fontSize="11" fontWeight="700" textAnchor="middle" style={{ fontFamily: 'var(--ff-head)' }}>
                    4. VERIFY
                  </text>
                  <text x="0" y="122" fill="white" fontSize="9" textAnchor="middle">
                    Confirm controls are effective
                  </text>
                </g>

                {/* Connection Lines */}
                <line x1="205" y1="120" x2="430" y2="180" stroke="white" strokeWidth="2" opacity="0.3" />
                <polygon points="433,182 423,178 426,187" fill="white" opacity="0.3" />

                <line x1="150" y1="370" x2="280" y2="280" stroke="white" strokeWidth="2" strokeDasharray="4,4" opacity="0.3" />

                {/* ALARP Label */}
                <rect x="380" y="30" width="100" height="50" rx="6" fill="white" opacity="0.15" />
                <text x="430" y="50" fill="white" fontSize="11" fontWeight="700" textAnchor="middle" style={{ fontFamily: 'var(--ff-head)' }}>
                  ALARP
                </text>
                <text x="430" y="64" fill="white" fontSize="8" textAnchor="middle" opacity="0.8">
                  As Low As
                </text>
                <text x="430" y="75" fill="white" fontSize="8" textAnchor="middle" opacity="0.8">
                  Reasonably Practical
                </text>
              </svg>
            </div>

            {/* Legend */}
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-center">
                <div className="w-12 h-12 bg-[#dc2626] rounded mx-auto mb-3 flex items-center justify-center">
                  <span className="text-white text-[0.85rem]" style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}>HIGH</span>
                </div>
                <div className="text-[0.85rem] text-white mb-1" style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}>Unacceptable</div>
                <div className="text-[0.7rem] text-white/70">Must eliminate</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-center">
                <div className="w-12 h-12 bg-[#f59e0b] rounded mx-auto mb-3 flex items-center justify-center">
                  <span className="text-white text-[0.85rem]" style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}>MED</span>
                </div>
                <div className="text-[0.85rem] text-white mb-1" style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}>With Controls</div>
                <div className="text-[0.7rem] text-white/70">Needs mitigation</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-center">
                <div className="w-12 h-12 bg-[#fbbf24] rounded mx-auto mb-3 flex items-center justify-center">
                  <span className="text-white text-[0.85rem]" style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}>LOW</span>
                </div>
                <div className="text-[0.85rem] text-white mb-1" style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}>ALARP</div>
                <div className="text-[0.7rem] text-white/70">Tolerable risk</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-center">
                <div className="w-12 h-12 bg-[#10b981] rounded mx-auto mb-3 flex items-center justify-center">
                  <span className="text-white text-[0.85rem]" style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}>OK</span>
                </div>
                <div className="text-[0.85rem] text-white mb-1" style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}>Acceptable</div>
                <div className="text-[0.7rem] text-white/70">Low risk</div>
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
                  What is Safety Analysis?
                </h2>
                <p className="text-[1.1rem] text-[var(--rams-gray-700)] leading-[1.8] mb-6">
                  Safety Analysis (also called System Safety or Preliminary Hazard Analysis) is a systematic process to identify hazards, evaluate their severity and likelihood, and define mitigation measures. It answers three critical questions: <strong>"What could harm people or the environment? How bad could it be? What controls do we need?"</strong>
                </p>
                <p className="text-[1.1rem] text-[var(--rams-gray-700)] leading-[1.8] mb-6">
                  The process follows four steps: <strong>Identify</strong> potential hazards (failures, human errors, environmental factors), <strong>Assess</strong> risk using severity × likelihood matrices (MIL-STD-882, ISO 26262, IEC 61508), <strong>Control</strong> hazards using the hierarchy of controls (eliminate, reduce, guard, warn, protect), and <strong>Verify</strong> that controls are effective. The goal: reduce risk to ALARP (As Low As Reasonably Practicable).
                </p>
                <p className="text-[1.1rem] text-[var(--rams-gray-700)] leading-[1.8] mb-6">
                  The risk matrix above visualizes initial risk (red zone) before controls versus residual risk (green zone) after mitigation. Safety analysis demonstrates risk reduction through documented controls—from design changes (most effective) down to procedures and PPE (least effective). This systematic approach protects people, assets, and the environment while meeting regulatory requirements and customer expectations.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#38bdf8]/10 to-transparent border-l-4 border-[#38bdf8] p-8 rounded-r">
                <p className="text-[1.05rem] text-[var(--rams-gray-700)] italic leading-[1.8]">
                  "Safety is not a product feature—it's a fundamental requirement. Identify hazards early, mitigate them systematically, and verify their effectiveness."
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white border-2 border-[var(--rams-gray-200)] rounded-xl p-8 text-center hover:border-[#38bdf8]/50 hover:shadow-lg transition-all">
                  <div className="text-[3rem] text-[#38bdf8] mb-3" style={{ fontFamily: 'var(--ff-head)', fontWeight: 800 }}>
                    🛡️
                  </div>
                  <h3 className="text-[1rem] text-[var(--rams-primary)] mb-2 uppercase tracking-[0.05em]" style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}>
                    Systematic
                  </h3>
                  <p className="text-[0.9rem] text-[var(--rams-gray-600)] leading-[1.6]">
                    Structured methodology to identify and control all hazards
                  </p>
                </div>

                <div className="bg-white border-2 border-[var(--rams-gray-200)] rounded-xl p-8 text-center hover:border-[#38bdf8]/50 hover:shadow-lg transition-all">
                  <div className="text-[3rem] text-[#38bdf8] mb-3" style={{ fontFamily: 'var(--ff-head)', fontWeight: 800 }}>
                    📋
                  </div>
                  <h3 className="text-[1rem] text-[var(--rams-primary)] mb-2 uppercase tracking-[0.05em]" style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}>
                    Compliant
                  </h3>
                  <p className="text-[0.9rem] text-[var(--rams-gray-600)] leading-[1.6]">
                    Meet MIL-STD-882, ISO 26262, IEC 61508 standards
                  </p>
                </div>

                <div className="bg-white border-2 border-[var(--rams-gray-200)] rounded-xl p-8 text-center hover:border-[#38bdf8]/50 hover:shadow-lg transition-all">
                  <div className="text-[3rem] text-[#38bdf8] mb-3" style={{ fontFamily: 'var(--ff-head)', fontWeight: 800 }}>
                    ⬇️
                  </div>
                  <h3 className="text-[1rem] text-[var(--rams-primary)] mb-2 uppercase tracking-[0.05em]" style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}>
                    Risk Reduction
                  </h3>
                  <p className="text-[0.9rem] text-[var(--rams-gray-600)] leading-[1.6]">
                    Demonstrate risk reduction to ALARP levels
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