import { useState } from 'react';
import { X } from 'lucide-react';
import ramsvideo from '../../assets/ramsdemo.mp4';

export function PlatformOverview() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 md:gap-16 items-center">

            {/* Left Content */}
            <div>
              <p className="text-[0.95rem] md:text-[1.05rem] text-[var(--rams-gray-700)] leading-[1.7] mb-6 md:mb-10">
                Our platform is built so engineers can focus on analysis, not on fighting tools. And you're never alone when it comes to questions or decisions:
              </p>

              {/* Built for Real Engineering Teams */}
              <div className="mb-6 md:mb-8">
                <h3
                  className="text-[1.2rem] md:text-[1.5rem] text-[var(--rams-primary)] mb-3 md:mb-4 tracking-[0.02em]"
                  style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}
                >
                  Built for Real Engineering Teams
                </h3>
                <p className="text-[0.9rem] md:text-[0.95rem] text-[var(--rams-gray-600)] leading-[1.7]">
                  Role-based access control with Super Admin, Company Admin, and Employee roles. Granular read/write permissions at module level. Connected libraries that link data within and across modules automatically.
                </p>
              </div>

              {/* Excel-Native Workflows */}
              <div className="mb-8 md:mb-10">
                <h3
                  className="text-[1.2rem] md:text-[1.5rem] text-[var(--rams-primary)] mb-3 md:mb-4 tracking-[0.02em]"
                  style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}
                >
                  Excel-Native Workflows
                </h3>
                <p className="text-[0.9rem] md:text-[0.95rem] text-[var(--rams-gray-600)] leading-[1.7]">
                  Import your existing spreadsheet data. Export structured reports for PBS, Reliability, FMECA, Maintenance, Spares, and Safety. Works the way your team already works.
                </p>
              </div>

              {/* Video Button */}
              <button
                onClick={() => setShowVideo(true)}
                className="flex items-center gap-3 md:gap-4 bg-white rounded-xl md:rounded-2xl p-4 md:p-6 md:pr-8 transition-all duration-300 shadow-[0_2px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.15)] hover:-translate-y-1 w-full max-w-[520px]"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white border-2 border-[var(--rams-accent)] flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 md:w-7 md:h-7 ml-1"
                    fill="var(--rams-accent)"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <div className="text-left flex-1">
                  <div
                    className="text-[0.95rem] md:text-[1.05rem] text-[var(--rams-primary)] mb-1"
                    style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}
                  >
                    See RAMS360 in action
                  </div>
                  <div className="text-[0.8rem] md:text-[0.875rem] text-[var(--rams-gray-500)]">
                    3 min product walkthrough
                  </div>
                </div>
                <span className="hidden sm:inline-block px-4 py-2 bg-[#fff5f0] text-[var(--rams-accent)] text-[0.7rem] uppercase tracking-[0.08em] rounded-md" style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}>
                  VIDEO
                </span>
              </button>
            </div>

            {/* Right Illustration */}
            <div className="flex items-center justify-center lg:justify-end mt-8 lg:mt-0">
              <svg viewBox="0 0 1000 600" className="w-full max-w-[400px] md:max-w-[600px] lg:max-w-[980px]" fill="none">
                {/* Divider Line */}
                <line x1="500" y1="80" x2="500" y2="520" stroke="#e5e7eb" strokeWidth="2" />

                {/* LEFT SIDE - BEFORE (Manual Process) */}
                <g>
                  {/* Scattered Excel Files */}
                  <g transform="translate(180, 120)">
                    <rect x="0" y="0" width="100" height="80" rx="6" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="2" />
                    <rect x="8" y="8" width="84" height="20" rx="3" fill="#10b981" opacity="0.8" />
                    <text x="50" y="23" textAnchor="middle" fill="white" fontSize="11" fontWeight="700">Excel</text>
                    <line x1="15" y1="40" x2="85" y2="40" stroke="#cbd5e1" strokeWidth="1.5" />
                    <line x1="15" y1="50" x2="70" y2="50" stroke="#cbd5e1" strokeWidth="1.5" />
                    <line x1="15" y1="60" x2="80" y2="60" stroke="#cbd5e1" strokeWidth="1.5" />
                  </g>

                  <g transform="translate(90, 250)">
                    <rect x="0" y="0" width="100" height="80" rx="6" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="2" />
                    <rect x="8" y="8" width="84" height="20" rx="3" fill="#10b981" opacity="0.8" />
                    <text x="50" y="23" textAnchor="middle" fill="white" fontSize="11" fontWeight="700">Excel</text>
                    <line x1="15" y1="40" x2="85" y2="40" stroke="#cbd5e1" strokeWidth="1.5" />
                    <line x1="15" y1="50" x2="65" y2="50" stroke="#cbd5e1" strokeWidth="1.5" />
                    <line x1="15" y1="60" x2="75" y2="60" stroke="#cbd5e1" strokeWidth="1.5" />
                  </g>

                  <g transform="translate(280, 280)">
                    <rect x="0" y="0" width="100" height="80" rx="6" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="2" />
                    <rect x="8" y="8" width="84" height="20" rx="3" fill="#10b981" opacity="0.8" />
                    <text x="50" y="23" textAnchor="middle" fill="white" fontSize="11" fontWeight="700">Excel</text>
                    <line x1="15" y1="40" x2="85" y2="40" stroke="#cbd5e1" strokeWidth="1.5" />
                    <line x1="15" y1="50" x2="60" y2="50" stroke="#cbd5e1" strokeWidth="1.5" />
                    <line x1="15" y1="60" x2="70" y2="60" stroke="#cbd5e1" strokeWidth="1.5" />
                  </g>

                  {/* Disconnected Icons */}
                  <g transform="translate(320, 150)">
                    <circle cx="0" cy="0" r="18" fill="#ef4444" opacity="0.2" />
                    <line x1="-6" y1="-6" x2="6" y2="6" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />
                    <line x1="6" y1="-6" x2="-6" y2="6" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />
                  </g>

                  <g transform="translate(120, 400)">
                    <circle cx="0" cy="0" r="18" fill="#f59e0b" opacity="0.2" />
                    <path d="M 0 -8 L 7 4 L -7 4 Z" fill="#f59e0b" />
                    <circle cx="0" cy="0" r="1.5" fill="white" />
                    <rect x="-1" y="-5" width="2" height="4" rx="1" fill="white" />
                  </g>

                  {/* Label */}
                  <text x="240" y="480" textAnchor="middle" fill="#64748b" fontSize="18" fontWeight="600">Manual Process</text>
                  <text x="240" y="505" textAnchor="middle" fill="#94a3b8" fontSize="13" fontWeight="500">Disconnected spreadsheets</text>
                </g>

                {/* RIGHT SIDE - AFTER (Automated SaaS Platform) */}
                <g>
                  {/* Cloud Platform Base */}
                  <g transform="translate(760, 140)">
                    <ellipse cx="0" cy="0" rx="140" ry="35" fill="#e0f2fe" opacity="0.6" />
                    <ellipse cx="0" cy="0" rx="120" ry="28" fill="#bae6fd" opacity="0.4" />
                    <path d="M -80 -15 Q -100 -30 -90 -45 Q -70 -55 -50 -45 Q -40 -60 -20 -55 Q 0 -65 20 -55 Q 40 -60 50 -45 Q 70 -55 90 -45 Q 100 -30 80 -15"
                          fill="#0ea5e9" opacity="0.2" stroke="#0ea5e9" strokeWidth="2" />
                    <text x="0" y="-28" textAnchor="middle" fill="#0369a1" fontSize="14" fontWeight="700">RAMS360 SaaS</text>
                  </g>

                  {/* Automated Workflow Pipeline */}
                  <g transform="translate(580, 200)">
                    {/* Input */}
                    <rect x="0" y="0" width="70" height="50" rx="6" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="2" />
                    <text x="35" y="30" textAnchor="middle" fill="#64748b" fontSize="11" fontWeight="600">Data In</text>

                    {/* Arrow 1 */}
                    <path d="M 70 25 L 100 25" stroke="#22c55e" strokeWidth="2" markerEnd="url(#arrowgreen)" />

                    {/* Automation Gear 1 */}
                    <g transform="translate(120, 25)">
                      <circle cx="0" cy="0" r="20" fill="#6366f1" opacity="0.15" stroke="#6366f1" strokeWidth="2" />
                      <circle cx="0" cy="0" r="8" fill="#6366f1" opacity="0.3" />
                      <path d="M 0 -12 L 3 -16 L -3 -16 Z M 12 0 L 16 3 L 16 -3 Z M 0 12 L 3 16 L -3 16 Z M -12 0 L -16 3 L -16 -3 Z"
                            fill="#6366f1" />
                    </g>

                    {/* Arrow 2 */}
                    <path d="M 140 25 L 170 25" stroke="#22c55e" strokeWidth="2" />

                    {/* Processing */}
                    <rect x="170" y="0" width="80" height="50" rx="6" fill="#6366f1" opacity="0.1" stroke="#6366f1" strokeWidth="2" />
                    <text x="210" y="22" textAnchor="middle" fill="#6366f1" fontSize="10" fontWeight="700">Auto</text>
                    <text x="210" y="36" textAnchor="middle" fill="#6366f1" fontSize="10" fontWeight="700">Analysis</text>

                    {/* Arrow 3 */}
                    <path d="M 250 25 L 280 25" stroke="#22c55e" strokeWidth="2" />

                    {/* Automation Gear 2 */}
                    <g transform="translate(300, 25)">
                      <circle cx="0" cy="0" r="20" fill="#6366f1" opacity="0.15" stroke="#6366f1" strokeWidth="2" />
                      <circle cx="0" cy="0" r="8" fill="#6366f1" opacity="0.3" />
                      <path d="M 0 -12 L 3 -16 L -3 -16 Z M 12 0 L 16 3 L 16 -3 Z M 0 12 L 3 16 L -3 16 Z M -12 0 L -16 3 L -16 -3 Z"
                            fill="#6366f1" />
                    </g>

                    {/* Arrow 4 */}
                    <path d="M 320 25 L 350 25" stroke="#22c55e" strokeWidth="2" />

                    {/* Output */}
                    <rect x="350" y="0" width="70" height="50" rx="6" fill="#22c55e" opacity="0.15" stroke="#22c55e" strokeWidth="2" />
                    <text x="385" y="30" textAnchor="middle" fill="#22c55e" fontSize="11" fontWeight="700">Reports</text>
                  </g>

                  {/* Arrow marker definition */}
                  <defs>
                    <marker id="arrowgreen" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
                      <path d="M0,0 L0,6 L9,3 z" fill="#22c55e" />
                    </marker>
                  </defs>

                  {/* Happy Engineer After RAMS360 */}
                  <g transform="translate(770, 330)">
                    {/* Head */}
                    <circle cx="0" cy="0" r="40" fill="#1e293b" />

                    {/* Happy face */}
                    <ellipse cx="-14" cy="-8" rx="5" ry="6" fill="#334155" />
                    <ellipse cx="14" cy="-8" rx="5" ry="6" fill="#334155" />

                    {/* Big smile */}
                    <path d="M -18 6 Q 0 22 18 6" stroke="#22c55e" strokeWidth="3" fill="none" strokeLinecap="round" />

                    {/* Body */}
                    <rect x="-35" y="40" width="70" height="80" rx="10" fill="#0ea5e9" opacity="0.9" />

                    {/* Arms - relaxed and happy */}
                    <rect x="-60" y="50" width="22" height="50" rx="10" fill="#0ea5e9" opacity="0.9" />
                    <rect x="38" y="50" width="22" height="50" rx="10" fill="#0ea5e9" opacity="0.9" />

                    {/* Thumbs up */}
                    <circle cx="50" cy="70" r="10" fill="#fbbf24" />
                    <rect x="46" y="62" width="8" height="15" rx="4" fill="#fbbf24" />

                    {/* Success checkmark */}
                    <g transform="translate(-70, -10)">
                      <circle cx="0" cy="0" r="18" fill="#22c55e" opacity="0.2" />
                      <path d="M -6 0 L -2 5 L 7 -6" stroke="#22c55e" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </g>

                    {/* Sparkles/stars indicating happiness */}
                    <g transform="translate(60, -20)">
                      <path d="M 0 -8 L 2 0 L 0 8 L -2 0 Z" fill="#fbbf24" />
                      <path d="M -8 0 L 0 2 L 8 0 L 0 -2 Z" fill="#fbbf24" />
                    </g>

                    <g transform="translate(-65, 30)">
                      <path d="M 0 -6 L 1.5 0 L 0 6 L -1.5 0 Z" fill="#fbbf24" opacity="0.8" />
                      <path d="M -6 0 L 0 1.5 L 6 0 L 0 -1.5 Z" fill="#fbbf24" opacity="0.8" />
                    </g>
                  </g>

                  {/* Label */}
                  <text x="760" y="480" textAnchor="middle" fill="#64748b" fontSize="18" fontWeight="600">Automated SaaS Platform</text>
                  <text x="760" y="505" textAnchor="middle" fill="#94a3b8" fontSize="13" fontWeight="500">Reduces manual effort by 90%</text>
                </g>

                {/* Center Arrow */}
                <g transform="translate(500, 300)">
                  <circle cx="0" cy="0" r="32" fill="white" stroke="#e2e8f0" strokeWidth="2" />
                  <path d="M -10 0 L 10 0 M 4 -6 L 10 0 L 4 6" stroke="#6366f1" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </g>
              </svg>
            </div>

          </div>
        </div>
      </section>

      {/* Video Popup Modal */}
      {showVideo && (
        <div
          className="fixed inset-0 z-[10000] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setShowVideo(false)}
        >
          <div
            className="relative w-full max-w-[1000px] aspect-video bg-black rounded-lg overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-all"
              aria-label="Close video"
            >
              <X className="w-6 h-6" />
            </button>
            <video
              className="w-full h-full"
              src={ramsvideo}
              controls
              autoPlay
              playsInline
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </>
  );
}
