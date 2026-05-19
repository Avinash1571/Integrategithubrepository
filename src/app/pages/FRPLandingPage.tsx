import { ArrowLeft } from 'lucide-react';
import logoImage from '../../assets/ba0f8d6daaec390f80886c87b4992a47b7e1a9ad.png';
import { Link } from 'react-router';
import { useEffect, useState } from 'react';
import { ContactFormModal } from "../components/ContactForm";



export function FRPLandingPage() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="overflow-x-hidden bg-white">
      {/* Header with back button */}
      <header className="fixed top-0 left-0 right-0 z-[400] bg-white shadow-[0_2px_20px_rgba(0,0,0,0.08)]">
        <div className="max-w-[1280px] mx-auto px-10 flex items-center justify-between h-[72px]">
          <Link to="/" className="flex items-center gap-3 text-[var(--rams-gray-600)] hover:text-[#0ea5e9] transition-colors">
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
      <section className="relative bg-gradient-to-br from-[#0ea5e9] to-[#0284c7] py-20 overflow-hidden mt-[72px]">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-72 h-72 border-2 border-white rounded-full" />
          <div className="absolute bottom-20 left-20 w-56 h-56 border-2 border-white rounded-full" />
          <div className="absolute top-40 left-1/3 w-40 h-40 border-2 border-white rounded-full" />
        </div>

        <div className="max-w-[1280px] mx-auto px-10 relative z-10">
          {/* Title Section */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full mb-6">
              <span className="text-[0.85rem] text-white uppercase tracking-[0.08em]" style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}>
                FRP Module
              </span>
            </div>
            <h1 className="text-[3.5rem] text-white mb-6 uppercase tracking-[0.02em] leading-[1.1]" style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}>
              Failure Rate Prediction
            </h1>
            <p className="text-[1.3rem] text-white/90 max-w-[700px] mx-auto leading-[1.7]">
              Quantify reliability with precision. Calculate component failure rates and predict <strong>"How often will it fail?"</strong>
            </p>
          </div>

          {/* Illustration - Bathtub Curve & Failure Rate Visualization */}
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

                {/* Axes */}
                <line x1="80" y1="400" x2="750" y2="400" stroke="white" strokeWidth="2" opacity="0.8" />
                <line x1="80" y1="400" x2="80" y2="60" stroke="white" strokeWidth="2" opacity="0.8" />
                
                {/* X-axis label */}
                <text x="415" y="440" fill="white" fontSize="14" fontWeight="600" textAnchor="middle" style={{ fontFamily: 'var(--ff-head)' }}>
                  TIME (Operating Hours)
                </text>
                
                {/* Y-axis label */}
                <text x="40" y="230" fill="white" fontSize="14" fontWeight="600" textAnchor="middle" transform="rotate(-90 40 230)" style={{ fontFamily: 'var(--ff-head)' }}>
                  FAILURE RATE (λ)
                </text>

                {/* Bathtub Curve - Classic Reliability Curve */}
                <path
                  d="M 100 120 Q 150 100, 200 110 Q 250 120, 300 130 L 500 135 Q 550 140, 600 160 Q 650 200, 700 280"
                  fill="none"
                  stroke="white"
                  strokeWidth="4"
                  opacity="0.9"
                />

                {/* Phase Labels */}
                {/* Early Life (Infant Mortality) */}
                <rect x="120" y="70" width="120" height="50" rx="6" fill="white" opacity="0.95" />
                <text x="180" y="90" fill="#dc2626" fontSize="11" fontWeight="700" textAnchor="middle" style={{ fontFamily: 'var(--ff-head)' }}>
                  INFANT
                </text>
                <text x="180" y="107" fill="#dc2626" fontSize="11" fontWeight="700" textAnchor="middle" style={{ fontFamily: 'var(--ff-head)' }}>
                  MORTALITY
                </text>
                <path d="M 180 125 L 180 150" stroke="white" strokeWidth="2" opacity="0.6" markerEnd="url(#arrowhead)" />
                
                {/* Useful Life (Constant Failure Rate) */}
                <rect x="340" y="70" width="120" height="50" rx="6" fill="white" opacity="0.95" />
                <text x="400" y="90" fill="#10b981" fontSize="11" fontWeight="700" textAnchor="middle" style={{ fontFamily: 'var(--ff-head)' }}>
                  USEFUL LIFE
                </text>
                <text x="400" y="107" fill="#10b981" fontSize="11" fontWeight="700" textAnchor="middle" style={{ fontFamily: 'var(--ff-head)' }}>
                  (Constant λ)
                </text>
                <path d="M 400 125 L 400 150" stroke="white" strokeWidth="2" opacity="0.6" />
                
                {/* Wear Out */}
                <rect x="600" y="70" width="100" height="50" rx="6" fill="white" opacity="0.95" />
                <text x="650" y="90" fill="#f59e0b" fontSize="11" fontWeight="700" textAnchor="middle" style={{ fontFamily: 'var(--ff-head)' }}>
                  WEAR OUT
                </text>
                <text x="650" y="107" fill="#f59e0b" fontSize="11" fontWeight="700" textAnchor="middle" style={{ fontFamily: 'var(--ff-head)' }}>
                  (Aging)
                </text>
                <path d="M 650 125 L 650 200" stroke="white" strokeWidth="2" opacity="0.6" />

                {/* Component Icons with Failure Rates */}
                {/* Component 1 - Low Failure Rate */}
                <g transform="translate(150, 320)">
                  <rect x="-30" y="-25" width="60" height="50" rx="4" fill="white" opacity="0.9" />
                  <circle cx="0" cy="-5" r="8" fill="#10b981" />
                  <rect x="-12" y="5" width="24" height="12" fill="#10b981" />
                  <text x="0" y="35" fill="#0ea5e9" fontSize="10" fontWeight="700" textAnchor="middle">
                    λ = 0.001
                  </text>
                </g>

                {/* Component 2 - Medium Failure Rate */}
                <g transform="translate(320, 320)">
                  <rect x="-30" y="-25" width="60" height="50" rx="4" fill="white" opacity="0.9" />
                  <circle cx="0" cy="-5" r="8" fill="#f59e0b" />
                  <rect x="-12" y="5" width="24" height="12" fill="#f59e0b" />
                  <text x="0" y="35" fill="#0ea5e9" fontSize="10" fontWeight="700" textAnchor="middle">
                    λ = 0.05
                  </text>
                </g>

                {/* Component 3 - High Failure Rate */}
                <g transform="translate(490, 320)">
                  <rect x="-30" y="-25" width="60" height="50" rx="4" fill="white" opacity="0.9" />
                  <circle cx="0" cy="-5" r="8" fill="#dc2626" />
                  <rect x="-12" y="5" width="24" height="12" fill="#dc2626" />
                  <text x="0" y="35" fill="#0ea5e9" fontSize="10" fontWeight="700" textAnchor="middle">
                    λ = 0.2
                  </text>
                </g>

                {/* Component 4 - Very Low Failure Rate */}
                <g transform="translate(660, 320)">
                  <rect x="-30" y="-25" width="60" height="50" rx="4" fill="white" opacity="0.9" />
                  <circle cx="0" cy="-5" r="8" fill="#38bdf8" />
                  <rect x="-12" y="5" width="24" height="12" fill="#38bdf8" />
                  <text x="0" y="35" fill="#0ea5e9" fontSize="10" fontWeight="700" textAnchor="middle">
                    λ = 0.0001
                  </text>
                </g>

                {/* Lambda Symbol */}
                <text x="30" y="180" fill="white" fontSize="32" fontWeight="700" opacity="0.5">
                  λ
                </text>

                {/* MTBF Formula */}
                <rect x="580" y="420" width="200" height="45" rx="6" fill="white" opacity="0.15" />
                <text x="680" y="440" fill="white" fontSize="11" fontWeight="600" textAnchor="middle" style={{ fontFamily: 'var(--ff-head)' }}>
                  MTBF = 1 / λ
                </text>
                <text x="680" y="456" fill="white" fontSize="9" textAnchor="middle" opacity="0.8">
                  Mean Time Between Failures
                </text>
              </svg>
            </div>

            {/* Legend */}
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-center">
                <div className="w-12 h-12 bg-[#dc2626] rounded mx-auto mb-3 flex items-center justify-center">
                  <span className="text-white text-[0.85rem]" style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}>HIGH</span>
                </div>
                <div className="text-[0.85rem] text-white mb-1" style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}>High λ</div>
                <div className="text-[0.7rem] text-white/70">Frequent failures</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-center">
                <div className="w-12 h-12 bg-[#f59e0b] rounded mx-auto mb-3 flex items-center justify-center">
                  <span className="text-white text-[0.75rem]" style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}>MED</span>
                </div>
                <div className="text-[0.85rem] text-white mb-1" style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}>Medium λ</div>
                <div className="text-[0.7rem] text-white/70">Moderate failures</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-center">
                <div className="w-12 h-12 bg-[#10b981] rounded mx-auto mb-3 flex items-center justify-center">
                  <span className="text-white text-[0.85rem]" style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}>LOW</span>
                </div>
                <div className="text-[0.85rem] text-white mb-1" style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}>Low λ</div>
                <div className="text-[0.7rem] text-white/70">Rare failures</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-center">
                <div className="w-12 h-12 bg-[#38bdf8] rounded mx-auto mb-3 flex items-center justify-center">
                  <span className="text-white text-[0.7rem]" style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}>V.LOW</span>
                </div>
                <div className="text-[0.85rem] text-white mb-1" style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}>Very Low λ</div>
                <div className="text-[0.7rem] text-white/70">Highly reliable</div>
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
                  What is Failure Rate Prediction?
                </h2>
                <p className="text-[1.1rem] text-[var(--rams-gray-700)] leading-[1.8] mb-6">
                  Failure Rate Prediction (FRP) quantifies how often components and systems fail. It calculates the failure rate (λ, lambda) expressed as failures per operating hour or mission. This fundamental metric answers: <strong>"How often can we expect this to break?"</strong>
                </p>
                <p className="text-[1.1rem] text-[var(--rams-gray-700)] leading-[1.8] mb-6">
                  Using industry-standard methods like MIL-HDBK-217, Telcordia SR-332, or IEC 61709, FRP combines component stress factors (temperature, voltage, environment) with historical failure data to predict reliability. These predictions drive maintenance planning, warranty analysis, spare parts stocking, and design improvements.
                </p>
                <p className="text-[1.1rem] text-[var(--rams-gray-700)] leading-[1.8] mb-6">
                  The classic "bathtub curve" shown above illustrates three life phases: <strong>infant mortality</strong> (early failures from defects), <strong>useful life</strong> (constant random failures), and <strong>wear-out</strong> (aging failures). Understanding where your components sit on this curve is critical for reliability engineering.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#0ea5e9]/10 to-transparent border-l-4 border-[#0ea5e9] p-8 rounded-r">
                <p className="text-[1.05rem] text-[var(--rams-gray-700)] italic leading-[1.8]">
                  "If you can't measure it, you can't improve it. Failure rate prediction transforms vague reliability goals into concrete, quantifiable targets."
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white border-2 border-[var(--rams-gray-200)] rounded-xl p-8 text-center hover:border-[#0ea5e9]/50 hover:shadow-lg transition-all">
                  <div className="text-[3rem] text-[#0ea5e9] mb-3" style={{ fontFamily: 'var(--ff-head)', fontWeight: 800 }}>
                    λ
                  </div>
                  <h3 className="text-[1rem] text-[var(--rams-primary)] mb-2 uppercase tracking-[0.05em]" style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}>
                    Failure Rate
                  </h3>
                  <p className="text-[0.9rem] text-[var(--rams-gray-600)] leading-[1.6]">
                    Predicted failures per operating hour
                  </p>
                </div>

                <div className="bg-white border-2 border-[var(--rams-gray-200)] rounded-xl p-8 text-center hover:border-[#0ea5e9]/50 hover:shadow-lg transition-all">
                  <div className="text-[3rem] text-[#0ea5e9] mb-3" style={{ fontFamily: 'var(--ff-head)', fontWeight: 800 }}>
                    1/λ
                  </div>
                  <h3 className="text-[1rem] text-[var(--rams-primary)] mb-2 uppercase tracking-[0.05em]" style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}>
                    MTBF
                  </h3>
                  <p className="text-[0.9rem] text-[var(--rams-gray-600)] leading-[1.6]">
                    Mean Time Between Failures
                  </p>
                </div>

                <div className="bg-white border-2 border-[var(--rams-gray-200)] rounded-xl p-8 text-center hover:border-[#0ea5e9]/50 hover:shadow-lg transition-all">
                  <div className="text-[3rem] text-[#0ea5e9] mb-3" style={{ fontFamily: 'var(--ff-head)', fontWeight: 800 }}>
                    e<sup>-λt</sup>
                  </div>
                  <h3 className="text-[1rem] text-[var(--rams-primary)] mb-2 uppercase tracking-[0.05em]" style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}>
                    Reliability
                  </h3>
                  <p className="text-[0.9rem] text-[var(--rams-gray-600)] leading-[1.6]">
                    Probability of survival over time
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