import { useState } from 'react';
import { X } from 'lucide-react';
import illustrationImage from '../../imports/rams360_illustration_white_1.png';
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
              <img
              src={illustrationImage}
              alt="RAMS360 Platform Illustration"
              className="w-full max-w-[400px] md:max-w-[600px] lg:max-w-[980px] lg:scale-120"
            />
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
