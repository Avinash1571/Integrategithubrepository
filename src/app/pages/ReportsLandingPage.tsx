import { ArrowLeft } from 'lucide-react';
import logoImage from '../../assets/ba0f8d6daaec390f80886c87b4992a47b7e1a9ad.png';
import { Link } from 'react-router';
import { useEffect, useState } from 'react';
import { ContactFormModal } from "../components/ContactForm";


export function ReportsLandingPage() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="overflow-x-hidden bg-white">
      {/* Header with back button */}
      <header className="fixed top-0 left-0 right-0 z-[400] bg-white shadow-[0_2px_20px_rgba(0,0,0,0.08)]">
        <div className="max-w-[1280px] mx-auto px-10 flex items-center justify-between h-[72px]">
          <Link to="/" className="flex items-center gap-3 text-[var(--rams-gray-600)] hover:text-[#06b6d4] transition-colors">
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
      <section className="relative bg-gradient-to-br from-[#06b6d4] to-[#0891b2] py-20 overflow-hidden mt-[72px]">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-32 w-80 h-80 border-2 border-white rounded-lg rotate-12" />
          <div className="absolute bottom-24 left-24 w-64 h-64 border-2 border-white rounded-lg -rotate-12" />
          <div className="absolute top-1/2 right-1/4 w-48 h-48 border-2 border-white rounded-lg rotate-45" />
        </div>

        <div className="max-w-[1280px] mx-auto px-10 relative z-10">
          {/* Title Section */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full mb-6">
              <span className="text-[0.85rem] text-white uppercase tracking-[0.08em]" style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}>
                Reports Module
              </span>
            </div>
            <h1 className="text-[3.5rem] text-white mb-6 uppercase tracking-[0.02em] leading-[1.1]" style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}>
              Reports Generation
            </h1>
            <p className="text-[1.3rem] text-white/90 max-w-[700px] mx-auto leading-[1.7]">
              Transform complex engineering data into structured, downloadable reports for faster analysis and smarter decisions.
            </p>
          </div>

          {/* Illustration - Reports Generation Diagram */}
          <div className="max-w-[1000px] mx-auto">
            <div className="relative w-full aspect-[5/3] flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-2xl p-10 border border-white/30">
              <svg viewBox="0 0 800 480" className="w-full h-full">
                {/* Grid Background */}
                <defs>
                  <pattern id="grid-reports" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" opacity="0.1"/>
                  </pattern>
                </defs>
                <rect width="800" height="480" fill="url(#grid-reports)" />

                {/* Central Document Stack */}
                <g transform="translate(400, 240)">
                  {/* Back document */}
                  <rect x="-80" y="-95" width="160" height="200" rx="8" fill="white" opacity="0.4" transform="rotate(-8)" />
                  {/* Middle document */}
                  <rect x="-80" y="-100" width="160" height="200" rx="8" fill="white" opacity="0.6" transform="rotate(4)" />
                  {/* Front document */}
                  <rect x="-80" y="-100" width="160" height="200" rx="8" fill="white" opacity="0.95" />

                  {/* Document lines */}
                  <line x1="-60" y1="-75" x2="60" y2="-75" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" />
                  <line x1="-60" y1="-55" x2="60" y2="-55" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" />
                  <line x1="-60" y1="-35" x2="40" y2="-35" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" />
                  <line x1="-60" y1="-15" x2="55" y2="-15" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" />
                  <line x1="-60" y1="5" x2="45" y2="5" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" />
                  <line x1="-60" y1="25" x2="60" y2="25" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" />

                  {/* Report icon */}
                  <rect x="-50" y="45" width="30" height="35" rx="3" fill="#06b6d4" opacity="0.3" />
                  <text x="-35" y="68" fill="#06b6d4" fontSize="12" fontWeight="700" textAnchor="middle" style={{ fontFamily: 'var(--ff-head)' }}>
                    PDF
                  </text>
                </g>

                {/* PDF Export - Top Left */}
                <g transform="translate(150, 120)">
                  <rect x="-40" y="-30" width="80" height="60" rx="6" fill="white" opacity="0.9" />
                  <text x="0" y="-5" fill="#ef4444" fontSize="14" fontWeight="700" textAnchor="middle" style={{ fontFamily: 'var(--ff-head)' }}>
                    PDF
                  </text>
                  <text x="0" y="12" fill="#6b7280" fontSize="9" fontWeight="600" textAnchor="middle">
                    Export Format
                  </text>
                  {/* Connection line to center */}
                  <line x1="40" y1="0" x2="260" y2="140" stroke="white" strokeWidth="2" opacity="0.6" strokeDasharray="5,5" />
                </g>

                {/* Excel Export - Top Right */}
                <g transform="translate(650, 120)">
                  <rect x="-40" y="-30" width="80" height="60" rx="6" fill="white" opacity="0.9" />
                  <text x="0" y="-5" fill="#10b981" fontSize="14" fontWeight="700" textAnchor="middle" style={{ fontFamily: 'var(--ff-head)' }}>
                    Excel
                  </text>
                  <text x="0" y="12" fill="#6b7280" fontSize="9" fontWeight="600" textAnchor="middle">
                    Export Format
                  </text>
                  {/* Connection line to center */}
                  <line x1="-40" y1="0" x2="-220" y2="140" stroke="white" strokeWidth="2" opacity="0.6" strokeDasharray="5,5" />
                </g>

                {/* Word Export - Bottom */}
                <g transform="translate(400, 420)">
                  <rect x="-40" y="-30" width="80" height="60" rx="6" fill="white" opacity="0.9" />
                  <text x="0" y="-5" fill="#3b82f6" fontSize="14" fontWeight="700" textAnchor="middle" style={{ fontFamily: 'var(--ff-head)' }}>
                    Word
                  </text>
                  <text x="0" y="12" fill="#6b7280" fontSize="9" fontWeight="600" textAnchor="middle">
                    Export Format
                  </text>
                  {/* Connection line to center */}
                  <line x1="0" y1="-30" x2="0" y2="-90" stroke="white" strokeWidth="2" opacity="0.6" strokeDasharray="5,5" />
                </g>

                {/* Filter Icon - Left */}
                <g transform="translate(80, 300)">
                  <path d="M -15 -20 L 15 -20 L 5 -5 L 5 15 L -5 15 L -5 -5 Z" fill="white" opacity="0.8" />
                  <text x="0" y="35" fill="white" fontSize="10" fontWeight="600" textAnchor="middle" style={{ fontFamily: 'var(--ff-head)' }}>
                    Custom Filter
                  </text>
                  {/* Connection line to center */}
                  <line x1="15" y1="0" x2="240" y2="-40" stroke="white" strokeWidth="2" opacity="0.6" strokeDasharray="5,5" />
                </g>

                {/* Database Icon - Right */}
                <g transform="translate(720, 300)">
                  <ellipse cx="0" cy="-15" rx="18" ry="8" fill="white" opacity="0.8" />
                  <rect x="-18" y="-15" width="36" height="20" fill="white" opacity="0.8" />
                  <ellipse cx="0" cy="5" rx="18" ry="8" fill="white" opacity="0.8" />
                  <text x="0" y="35" fill="white" fontSize="10" fontWeight="600" textAnchor="middle" style={{ fontFamily: 'var(--ff-head)' }}>
                    Project Data
                  </text>
                  {/* Connection line to center */}
                  <line x1="-18" y1="0" x2="-240" y2="-40" stroke="white" strokeWidth="2" opacity="0.6" strokeDasharray="5,5" />
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
                  What is the Reports Module?
                </h2>
                <p className="text-[1.1rem] text-[var(--rams-gray-700)] leading-[1.8] mb-6">
                  The Reports Module provides centralized report generation and export capabilities across all reliability and maintenance analysis modules. It allows users to generate detailed project reports for PBS, Reliability, Maintainability, Preventive Maintenance, Spare Analysis, FMECA, and Safety modules.
                </p>
                <p className="text-[1.1rem] text-[var(--rams-gray-700)] leading-[1.8] mb-6">
                  Users can filter reports based on hierarchy level, assembly type, electronic/mechanical parts, or component categories, and download reports in Excel, PDF, or Word formats with complete metadata and tabular analysis data.
                </p>
                <p className="text-[1.1rem] text-[var(--rams-gray-700)] leading-[1.8] mb-6">
                  The module helps organizations simplify documentation, improve analysis visibility, and maintain standardized engineering reports for project reviews and decision-making.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#06b6d4]/10 to-transparent border-l-4 border-[#06b6d4] p-8 rounded-r">
                <p className="text-[1.05rem] text-[var(--rams-gray-700)] italic leading-[1.8]">
                  "Transform complex engineering data into structured, downloadable reports for faster analysis and smarter decisions."
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white border-2 border-[var(--rams-gray-200)] rounded-xl p-8 text-center hover:border-[#06b6d4]/50 hover:shadow-lg transition-all">
                  <div className="text-[3rem] text-[#06b6d4] mb-3" style={{ fontFamily: 'var(--ff-head)', fontWeight: 800 }}>
                    3
                  </div>
                  <h3 className="text-[1rem] text-[var(--rams-primary)] mb-2 uppercase tracking-[0.05em]" style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}>
                    Export Formats
                  </h3>
                  <p className="text-[0.9rem] text-[var(--rams-gray-600)] leading-[1.6]">
                    Generate reports in PDF, Excel, and Word formats
                  </p>
                </div>

                <div className="bg-white border-2 border-[var(--rams-gray-200)] rounded-xl p-8 text-center hover:border-[#06b6d4]/50 hover:shadow-lg transition-all">
                  <div className="text-[3rem] text-[#06b6d4] mb-3" style={{ fontFamily: 'var(--ff-head)', fontWeight: 800 }}>
                    ∞
                  </div>
                  <h3 className="text-[1rem] text-[var(--rams-primary)] mb-2 uppercase tracking-[0.05em]" style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}>
                    Custom Filtering
                  </h3>
                  <p className="text-[0.9rem] text-[var(--rams-gray-600)] leading-[1.6]">
                    Generate reports by module, hierarchy, or component type
                  </p>
                </div>

                <div className="bg-white border-2 border-[var(--rams-gray-200)] rounded-xl p-8 text-center hover:border-[#06b6d4]/50 hover:shadow-lg transition-all">
                  <div className="text-[3rem] text-[#06b6d4] mb-3" style={{ fontFamily: 'var(--ff-head)', fontWeight: 800 }}>
                    100%
                  </div>
                  <h3 className="text-[1rem] text-[var(--rams-primary)] mb-2 uppercase tracking-[0.05em]" style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}>
                    Standardized Documentation
                  </h3>
                  <p className="text-[0.9rem] text-[var(--rams-gray-600)] leading-[1.6]">
                    Maintain revision history and project report details
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
