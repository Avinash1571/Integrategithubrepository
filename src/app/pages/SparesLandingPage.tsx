import { ArrowLeft } from 'lucide-react';
import logoImage from '../../assets/logo.png';
import { Link } from 'react-router';
import { useEffect, useState } from 'react';
import { ContactFormModal } from "../components/ContactForm";


export function SparesLandingPage() {
      const [open, setOpen] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="overflow-x-hidden bg-white">
      {/* Header with back button */}
      <header className="fixed top-0 left-0 right-0 z-[400] bg-white shadow-[0_2px_20px_rgba(0,0,0,0.08)]">
        <div className="max-w-[1280px] mx-auto px-10 flex items-center justify-between h-[72px]">
          <Link to="/" className="flex items-center gap-3 text-[var(--rams-gray-600)] hover:text-[#f59e0b] transition-colors">
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
      <section className="relative bg-gradient-to-br from-[#f59e0b] to-[#d97706] py-20 overflow-hidden mt-[72px]">
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
                Spares Module
              </span>
            </div>
            <h1 className="text-[3.5rem] text-white mb-6 uppercase tracking-[0.02em] leading-[1.1]" style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}>
              Spare Parts Analysis
            </h1>
            <p className="text-[1.3rem] text-white/90 max-w-[700px] mx-auto leading-[1.7]">
              Stock smarter, not harder. Optimize inventory levels to answer <strong>"How many spares do we need?"</strong>
            </p>
          </div>

          {/* Illustration - Spare Parts Inventory Optimization */}
          <div className="max-w-[1100px] mx-auto">
            <div className="relative w-full aspect-[4/3] flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-2xl p-10 border border-white/20">
              <svg viewBox="0 0 900 675" className="w-full h-full">
                {/* Warehouse/Storage Area */}
                <g transform="translate(450, 120)">
                  <rect x="-150" y="-60" width="300" height="120" rx="8" fill="white" opacity="0.15" />
                  <rect x="-150" y="-60" width="300" height="35" rx="8" fill="white" opacity="0.25" />
                  <text x="0" y="-32" fill="white" fontSize="14" fontWeight="700" textAnchor="middle" style={{ fontFamily: 'var(--ff-head)' }}>
                    SPARE PARTS INVENTORY
                  </text>
                  
                  {/* Inventory boxes */}
                  <g transform="translate(-90, 0)">
                    <rect x="-25" y="-10" width="50" height="40" rx="4" fill="#10b981" opacity="0.8" />
                    <rect x="-20" y="-5" width="40" height="8" fill="white" opacity="0.3" />
                    <rect x="-20" y="5" width="40" height="8" fill="white" opacity="0.3" />
                    <rect x="-20" y="15" width="40" height="8" fill="white" opacity="0.3" />
                    <text x="0" y="48" fill="white" fontSize="9" fontWeight="600" textAnchor="middle">
                      Optimal
                    </text>
                  </g>
                  
                  <g transform="translate(0, 0)">
                    <rect x="-25" y="-10" width="50" height="40" rx="4" fill="#3b82f6" opacity="0.8" />
                    <rect x="-20" y="-5" width="40" height="8" fill="white" opacity="0.3" />
                    <rect x="-20" y="5" width="40" height="8" fill="white" opacity="0.3" />
                    <rect x="-20" y="15" width="40" height="8" fill="white" opacity="0.3" />
                    <text x="0" y="48" fill="white" fontSize="9" fontWeight="600" textAnchor="middle">
                      In Stock
                    </text>
                  </g>
                  
                  <g transform="translate(90, 0)">
                    <rect x="-25" y="-10" width="50" height="40" rx="4" fill="#dc2626" opacity="0.8" />
                    <rect x="-20" y="10" width="40" height="8" fill="white" opacity="0.3" />
                    <text x="0" y="48" fill="white" fontSize="9" fontWeight="600" textAnchor="middle">
                      Low Stock
                    </text>
                  </g>
                </g>

                {/* Demand Flow - Left Side */}
                <g transform="translate(150, 320)">
                  <rect x="-100" y="-80" width="200" height="160" rx="8" fill="white" opacity="0.15" />
                  
                  <text x="0" y="-55" fill="white" fontSize="13" fontWeight="700" textAnchor="middle" style={{ fontFamily: 'var(--ff-head)' }}>
                    DEMAND INPUT
                  </text>
                  
                  {/* Failure Rate */}
                  <circle cx="-60" cy="-20" r="22" fill="white" opacity="0.9" />
                  <text x="-60" y="-22" fill="#f59e0b" fontSize="10" fontWeight="700" textAnchor="middle">
                    λ
                  </text>
                  <text x="-60" y="-10" fill="#f59e0b" fontSize="8" textAnchor="middle">
                    Rate
                  </text>
                  <text x="-60" y="10" fill="white" fontSize="8" fontWeight="600" textAnchor="middle">
                    Failure Rate
                  </text>
                  
                  {/* Lead Time */}
                  <circle cx="0" cy="-20" r="22" fill="white" opacity="0.9" />
                  <text x="0" y="-22" fill="#f59e0b" fontSize="10" fontWeight="700" textAnchor="middle">
                    T
                  </text>
                  <text x="0" y="-10" fill="#f59e0b" fontSize="8" textAnchor="middle">
                    Lead
                  </text>
                  <text x="0" y="10" fill="white" fontSize="8" fontWeight="600" textAnchor="middle">
                    Lead Time
                  </text>
                  
                  {/* Criticality */}
                  <circle cx="60" cy="-20" r="22" fill="white" opacity="0.9" />
                  <text x="60" y="-22" fill="#f59e0b" fontSize="10" fontWeight="700" textAnchor="middle">
                    C
                  </text>
                  <text x="60" y="-10" fill="#f59e0b" fontSize="8" textAnchor="middle">
                    Crit
                  </text>
                  <text x="60" y="10" fill="white" fontSize="8" fontWeight="600" textAnchor="middle">
                    Criticality
                  </text>
                  
                  {/* Arrow pointing to optimization */}
                  <line x1="100" y1="0" x2="180" y2="-100" stroke="white" strokeWidth="2" opacity="0.4" />
                  <polygon points="185,-102 175,-97 178,-107" fill="white" opacity="0.4" />
                </g>

                {/* Cost Optimization - Right Side */}
                <g transform="translate(750, 320)">
                  <rect x="-100" y="-80" width="200" height="160" rx="8" fill="white" opacity="0.15" />
                  
                  <text x="0" y="-55" fill="white" fontSize="13" fontWeight="700" textAnchor="middle" style={{ fontFamily: 'var(--ff-head)' }}>
                    COST BALANCE
                  </text>
                  
                  {/* Holding Cost */}
                  <g transform="translate(-55, -10)">
                    <rect x="-35" y="-25" width="70" height="50" rx="4" fill="#dc2626" opacity="0.7" />
                    <text x="0" y="-5" fill="white" fontSize="10" fontWeight="700" textAnchor="middle" style={{ fontFamily: 'var(--ff-head)' }}>
                      HOLDING
                    </text>
                    <text x="0" y="8" fill="white" fontSize="8" textAnchor="middle">
                      Storage
                    </text>
                    <text x="0" y="19" fill="white" fontSize="8" textAnchor="middle">
                      Cost ↑
                    </text>
                  </g>
                  
                  {/* Stockout Cost */}
                  <g transform="translate(55, -10)">
                    <rect x="-35" y="-25" width="70" height="50" rx="4" fill="#dc2626" opacity="0.7" />
                    <text x="0" y="-5" fill="white" fontSize="10" fontWeight="700" textAnchor="middle" style={{ fontFamily: 'var(--ff-head)' }}>
                      STOCKOUT
                    </text>
                    <text x="0" y="8" fill="white" fontSize="8" textAnchor="middle">
                      Downtime
                    </text>
                    <text x="0" y="19" fill="white" fontSize="8" textAnchor="middle">
                      Cost ↑
                    </text>
                  </g>
                  
                  {/* Optimal point */}
                  <circle cx="0" cy="50" r="18" fill="#10b981" opacity="0.9" />
                  <text x="0" y="55" fill="white" fontSize="16" fontWeight="700" textAnchor="middle">
                    ✓
                  </text>
                  <text x="0" y="75" fill="white" fontSize="8" fontWeight="600" textAnchor="middle">
                    Sweet Spot
                  </text>
                  
                  {/* Arrow pointing from optimization */}
                  <line x1="-100" y1="0" x2="-180" y2="-100" stroke="white" strokeWidth="2" opacity="0.4" />
                  <polygon points="-185,-102 -175,-107 -178,-97" fill="white" opacity="0.4" />
                </g>

                {/* Stock Level Chart */}
                <g transform="translate(450, 480)">
                  <rect x="-250" y="-100" width="500" height="180" rx="8" fill="white" opacity="0.15" />
                  
                  <text x="0" y="-75" fill="white" fontSize="13" fontWeight="700" textAnchor="middle" style={{ fontFamily: 'var(--ff-head)' }}>
                    STOCK LEVEL OPTIMIZATION
                  </text>
                  
                  {/* Axes */}
                  <line x1="-200" y1="50" x2="200" y2="50" stroke="white" strokeWidth="2" opacity="0.5" />
                  <line x1="-200" y1="50" x2="-200" y2="-50" stroke="white" strokeWidth="2" opacity="0.5" />
                  
                  {/* X-axis label */}
                  <text x="0" y="70" fill="white" fontSize="10" fontWeight="600" textAnchor="middle">
                    TIME
                  </text>
                  
                  {/* Y-axis label */}
                  <text x="-220" y="0" fill="white" fontSize="10" fontWeight="600" textAnchor="middle" transform="rotate(-90 -220 0)">
                    QUANTITY
                  </text>
                  
                  {/* Stock level line (sawtooth pattern) */}
                  <path d="M -200 -30 L -120 10 L -120 -30 L -40 10 L -40 -30 L 40 10 L 40 -30 L 120 10 L 120 -30 L 200 10" 
                        fill="none" stroke="#3b82f6" strokeWidth="3" opacity="0.9" />
                  
                  {/* Reorder point line */}
                  <line x1="-200" y1="10" x2="200" y2="10" stroke="#f59e0b" strokeWidth="2" strokeDasharray="5,5" opacity="0.8" />
                  <text x="210" y="14" fill="#f59e0b" fontSize="9" fontWeight="600">
                    Reorder
                  </text>
                  
                  {/* Safety stock line */}
                  <line x1="-200" y1="35" x2="200" y2="35" stroke="#10b981" strokeWidth="2" strokeDasharray="5,5" opacity="0.8" />
                  <text x="210" y="39" fill="#10b981" fontSize="9" fontWeight="600">
                    Safety
                  </text>
                  
                  {/* Max stock line */}
                  <line x1="-200" y1="-30" x2="200" y2="-30" stroke="#dc2626" strokeWidth="2" strokeDasharray="5,5" opacity="0.8" />
                  <text x="210" y="-26" fill="#dc2626" fontSize="9" fontWeight="600">
                    Max
                  </text>
                  
                  {/* Reorder indicators */}
                  <circle cx="-120" cy="10" r="5" fill="#f59e0b" opacity="0.9" />
                  <circle cx="-40" cy="10" r="5" fill="#f59e0b" opacity="0.9" />
                  <circle cx="40" cy="10" r="5" fill="#f59e0b" opacity="0.9" />
                  <circle cx="120" cy="10" r="5" fill="#f59e0b" opacity="0.9" />
                </g>

                {/* Formula Box */}
                <rect x="50" y="600" width="240" height="60" rx="6" fill="white" opacity="0.15" />
                <text x="170" y="625" fill="white" fontSize="11" fontWeight="700" textAnchor="middle" style={{ fontFamily: 'var(--ff-head)' }}>
                  OPTIMAL STOCK LEVEL
                </text>
                <text x="170" y="642" fill="white" fontSize="9" textAnchor="middle" opacity="0.9">
                  Q = √(2DS/H) × Service Level
                </text>
                <text x="170" y="655" fill="white" fontSize="7" textAnchor="middle" opacity="0.7">
                  D=Demand, S=Order Cost, H=Holding Cost
                </text>

                {/* Availability Impact */}
                <rect x="610" y="600" width="240" height="60" rx="6" fill="white" opacity="0.15" />
                <text x="730" y="625" fill="white" fontSize="11" fontWeight="700" textAnchor="middle" style={{ fontFamily: 'var(--ff-head)' }}>
                  AVAILABILITY IMPACT
                </text>
                <text x="730" y="642" fill="white" fontSize="9" textAnchor="middle" opacity="0.9">
                  A = MTBF / (MTBF + MTTR + Wait)
                </text>
                <text x="730" y="655" fill="white" fontSize="7" textAnchor="middle" opacity="0.7">
                  Wait Time = Spare unavailability
                </text>
              </svg>
            </div>

            {/* Legend */}
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-center">
                <div className="w-12 h-12 bg-[#10b981] rounded mx-auto mb-3 flex items-center justify-center">
                  <span className="text-white text-[1rem]" style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}>✓</span>
                </div>
                <div className="text-[0.85rem] text-white mb-1" style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}>Optimal</div>
                <div className="text-[0.7rem] text-white/70">Right quantity</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-center">
                <div className="w-12 h-12 bg-[#3b82f6] rounded mx-auto mb-3 flex items-center justify-center">
                  <span className="text-white text-[1rem]" style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}>📦</span>
                </div>
                <div className="text-[0.85rem] text-white mb-1" style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}>In Stock</div>
                <div className="text-[0.7rem] text-white/70">Available now</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-center">
                <div className="w-12 h-12 bg-[#f59e0b] rounded mx-auto mb-3 flex items-center justify-center">
                  <span className="text-white text-[1rem]" style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}>⚠️</span>
                </div>
                <div className="text-[0.85rem] text-white mb-1" style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}>Reorder</div>
                <div className="text-[0.7rem] text-white/70">Trigger point</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-center">
                <div className="w-12 h-12 bg-[#dc2626] rounded mx-auto mb-3 flex items-center justify-center">
                  <span className="text-white text-[1rem]" style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}>!</span>
                </div>
                <div className="text-[0.85rem] text-white mb-1" style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}>Low Stock</div>
                <div className="text-[0.7rem] text-white/70">Critical level</div>
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
                  What is Spare Parts Analysis?
                </h2>
                <p className="text-[1.1rem] text-[var(--rams-gray-700)] leading-[1.8] mb-6">
                  Spare Parts Analysis determines the optimal inventory levels for replacement components. It balances two competing costs: <strong>holding costs</strong> (storage, capital tied up, obsolescence) versus <strong>stockout costs</strong> (downtime, lost production, emergency procurement). The central question: <strong>"How many spares should we keep on hand?"</strong>
                </p>
                <p className="text-[1.1rem] text-[var(--rams-gray-700)] leading-[1.8] mb-6">
                  The analysis considers multiple inputs: component failure rates (λ from FRP), lead times for procurement, component criticality (from FMECA), repair versus replace decisions, and service level targets. Using these inputs, mathematical models calculate reorder points, safety stock levels, and economic order quantities. The goal: ensure spares are available when needed without excessive inventory investment.
                </p>
                <p className="text-[1.1rem] text-[var(--rams-gray-700)] leading-[1.8] mb-6">
                  The stock level chart above shows the classic sawtooth pattern: inventory depletes through usage, hits a reorder point (triggering procurement), and replenishes before reaching safety stock. Too much inventory wastes capital; too little causes downtime. Spare parts analysis finds the sweet spot—the optimal balance that maximizes availability while minimizing total cost of ownership.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#f59e0b]/10 to-transparent border-l-4 border-[#f59e0b] p-8 rounded-r">
                <p className="text-[1.05rem] text-[var(--rams-gray-700)] italic leading-[1.8]">
                  "Having too many spares is expensive. Having too few is catastrophic. Spare parts analysis is the science of getting it exactly right."
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white border-2 border-[var(--rams-gray-200)] rounded-xl p-8 text-center hover:border-[#f59e0b]/50 hover:shadow-lg transition-all">
                  <div className="text-[3rem] text-[#f59e0b] mb-3" style={{ fontFamily: 'var(--ff-head)', fontWeight: 800 }}>
                    📊
                  </div>
                  <h3 className="text-[1rem] text-[var(--rams-primary)] mb-2 uppercase tracking-[0.05em]" style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}>
                    Data-Driven
                  </h3>
                  <p className="text-[0.9rem] text-[var(--rams-gray-600)] leading-[1.6]">
                    Mathematical models based on failure rates and costs
                  </p>
                </div>

                <div className="bg-white border-2 border-[var(--rams-gray-200)] rounded-xl p-8 text-center hover:border-[#f59e0b]/50 hover:shadow-lg transition-all">
                  <div className="text-[3rem] text-[#f59e0b] mb-3" style={{ fontFamily: 'var(--ff-head)', fontWeight: 800 }}>
                    ⚖️
                  </div>
                  <h3 className="text-[1rem] text-[var(--rams-primary)] mb-2 uppercase tracking-[0.05em]" style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}>
                    Balanced
                  </h3>
                  <p className="text-[0.9rem] text-[var(--rams-gray-600)] leading-[1.6]">
                    Minimize holding costs while preventing stockouts
                  </p>
                </div>

                <div className="bg-white border-2 border-[var(--rams-gray-200)] rounded-xl p-8 text-center hover:border-[#f59e0b]/50 hover:shadow-lg transition-all">
                  <div className="text-[3rem] text-[#f59e0b] mb-3" style={{ fontFamily: 'var(--ff-head)', fontWeight: 800 }}>
                    ⏱️
                  </div>
                  <h3 className="text-[1rem] text-[var(--rams-primary)] mb-2 uppercase tracking-[0.05em]" style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}>
                    Availability
                  </h3>
                  <p className="text-[0.9rem] text-[var(--rams-gray-600)] leading-[1.6]">
                    Spare availability directly impacts system uptime
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