import { useState, useEffect } from 'react';
import { ContactFormModal } from './ContactForm';

const RAMS_LETTERS = [
  { letter: 'R', label: 'Reliability', color: '#432975', cx: 200, cy: 200 },
  { letter: 'A', label: 'Availability', color: '#6b3fa0', cx: 500, cy: 200 },
  { letter: 'M', label: 'Maintainability', color: '#e8722a', cx: 200, cy: 480 },
  { letter: 'S', label: 'Safety', color: '#c45a15', cx: 500, cy: 480 },
];

function RamsAnimation() {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setActiveIdx((i) => (i + 1) % 4);
    }, 1800);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative flex items-center justify-center w-full h-full min-h-[520px]">
      <svg
        viewBox="0 0 700 680"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-w-[900px] scale-[1.15] lg:scale-[1.25]"
      >
        {/* Subtle grid */}
        <g opacity="0.06">
          {[100, 200, 300, 400, 500, 600].map((v) => (
            <line key={`h${v}`} x1="50" y1={v} x2="650" y2={v} stroke="#432975" strokeWidth="1" />
          ))}
          {[100, 200, 300, 400, 500, 600].map((v) => (
            <line key={`v${v}`} x1={v} y1="50" x2={v} y2="630" stroke="#432975" strokeWidth="1" />
          ))}
        </g>

        {/* Connection lines from center to each letter */}
        {RAMS_LETTERS.map((item, i) => (
          <line
            key={`line-${i}`}
            x1="350" y1="340"
            x2={item.cx} y2={item.cy}
            stroke={i === activeIdx ? item.color : '#c4b5d8'}
            strokeWidth={i === activeIdx ? 2 : 1}
            strokeDasharray="6 4"
            opacity={i === activeIdx ? 0.9 : 0.35}
            style={{ transition: 'all 0.6s ease' }}
          />
        ))}

        {/* Outer orbit ring */}
        <circle cx="350" cy="340" r="200" stroke="#e2d9f0" strokeWidth="1.5" strokeDasharray="8 6" />
        <circle cx="350" cy="340" r="140" stroke="#ede8f5" strokeWidth="1" strokeDasharray="4 8" />

        {/* RAMS letter nodes */}
        {RAMS_LETTERS.map((item, i) => {
          const isActive = i === activeIdx;
          return (
            <g key={item.letter} style={{ transition: 'all 0.5s ease' }}>
              <circle
                cx={item.cx}
                cy={item.cy}
                r={isActive ? 48 : 40}
                fill={isActive ? item.color : 'white'}
                stroke={item.color}
                strokeWidth={isActive ? 0 : 2}
                opacity={isActive ? 1 : 0.7}
                style={{ transition: 'all 0.5s ease' }}
              />
              <text
                x={item.cx}
                y={item.cy - 4}
                textAnchor="middle"
                fill={isActive ? 'white' : item.color}
                fontSize="22"
                fontWeight="800"
                fontFamily="sans-serif"
                style={{ transition: 'all 0.5s ease' }}
              >
                {item.letter}
              </text>
              <text
                x={item.cx}
                y={item.cy + 13}
                textAnchor="middle"
                fill={isActive ? 'rgba(255,255,255,0.85)' : item.color}
                fontSize="8"
                fontWeight="600"
                fontFamily="sans-serif"
                letterSpacing="0.5"
                opacity={isActive ? 1 : 0.7}
                style={{ transition: 'all 0.5s ease' }}
              >
                {item.label.toUpperCase()}
              </text>
            </g>
          );
        })}

        {/* Central RAMS360 node */}
        <circle cx="350" cy="340" r="65" fill="#432975" />
        <circle cx="350" cy="340" r="55" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
        <text
          x="350"
          y="334"
          textAnchor="middle"
          fill="white"
          fontSize="18"
          fontWeight="800"
          fontFamily="sans-serif"
          letterSpacing="1"
        >
          RAMS
        </text>
        <text
          x="350"
          y="352"
          textAnchor="middle"
          fill="rgba(255,255,255,0.7)"
          fontSize="11"
          fontWeight="600"
          fontFamily="sans-serif"
          letterSpacing="2"
        >
          360°
        </text>

        {/* Active label banner below active node */}
        {RAMS_LETTERS.map((item, i) => {
          if (i !== activeIdx) return null;
          const labelY = item.cy > 340 ? item.cy + 70 : item.cy - 70;
          return (
            <g key={`label-${i}`}>
              <rect
                x={item.cx - 70}
                y={labelY - 14}
                width="140"
                height="24"
                rx="4"
                fill={item.color}
                opacity="0.12"
              />
              <text
                x={item.cx}
                y={labelY + 4}
                textAnchor="middle"
                fill={item.color}
                fontSize="11"
                fontWeight="700"
                fontFamily="sans-serif"
                letterSpacing="1.5"
              >
                {item.label.toUpperCase()}
              </text>
            </g>
          );
        })}

        {/* Rotating dots on orbit */}
        <circle
          cx="550"
          cy="340"
          r="5"
          fill="#e8722a"
          opacity="0.6"
          style={{ transformOrigin: '350px 340px', animation: 'orbit 8s linear infinite' }}
        />
        <circle
          cx="350"
          cy="140"
          r="4"
          fill="#432975"
          opacity="0.5"
          style={{ transformOrigin: '350px 340px', animation: 'orbit 12s linear infinite reverse' }}
        />
      </svg>

      <style>{`
        @keyframes orbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

export function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <section
      className="relative min-h-[88vh] overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #f8f5ff 0%, #fdf6f0 40%, #f0eaff 70%, #fef9f5 100%)',
      }}
    >
      {/* Soft decorative circles */}
      <div
        className="absolute top-[-120px] right-[-80px] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(67,41,117,0.06) 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-[-100px] left-[-60px] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(232,114,42,0.07) 0%, transparent 70%)' }}
      />

      {/* Content */}
      <div className="relative z-[2] max-w-[1280px] mx-auto px-10 pt-[100px] pb-12 flex flex-col lg:flex-row items-center gap-8 min-h-[88vh]">

        {/* LEFT: Text */}
        <div className="flex-1 max-w-[600px]">
          {/* Category label */}
          <div className="mb-5">
            <span
              className="inline-block px-3 py-1 border border-[#c4b5d8] rounded text-[#432975] text-xs uppercase tracking-widest"
              style={{ fontFamily: 'var(--ff-head)', fontWeight: 600 }}
            >
              ENTERPRISE RAMS ENGINEERING PLATFORM
            </span>
          </div>

          {/* Main Heading */}
          <h1
            className="text-[#1a1a2e] text-[clamp(2rem,4vw,3.4rem)] leading-[1.18] mb-6"
            style={{ fontFamily: 'var(--ff-head)', fontWeight: 800 }}
          >
            Unify Your RAMS Analyses in One Connected Platform
          </h1>

          {/* Subtitle */}
          <p
            className="text-[#4a4a6a] text-[1.05rem] leading-[1.7] mb-10 max-w-[540px]"
            style={{ fontFamily: 'var(--ff-body)' }}
          >
            RAMS360 brings together Reliability, Availability, Maintainability, and Safety engineering into a single cloud platform. Drive better decisions with integrated PBS, FRP, MTTR, FMECA, PM, Spares, and Safety analysis modules.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => setOpen(true)}
              className="inline-block px-8 py-3.5 bg-[var(--rams-accent)] text-white rounded-md uppercase tracking-wider hover:bg-[var(--rams-accent-dark)] transition-colors text-sm shadow-[0_4px_16px_rgba(232,114,42,0.3)]"
              style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}
            >
              REQUEST A DEMO
            </button>
            <a
              href="#modules"
              className="inline-block px-8 py-3.5 bg-transparent text-[#432975] border-2 border-[#432975] rounded-md uppercase tracking-wider hover:bg-[#432975] hover:text-white transition-colors text-sm"
              style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}
            >
              EXPLORE MODULES
            </a>
          </div>
        </div>

        {/* RIGHT: RAMS Animation */}
        <div className="flex-1 flex items-center justify-center w-full lg:max-w-[720px] xl:max-w-[820px]">
          <RamsAnimation />
        </div>
      </div>

      <ContactFormModal open={open} onOpenChange={setOpen} />
    </section>
  );
}
