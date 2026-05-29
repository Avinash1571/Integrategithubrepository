import { useState, useEffect } from 'react';
import { ContactFormModal } from './ContactForm';

const RAMS_LETTERS = [
  { letter: 'R', label: 'PBS . FRP',name:"reliability", color: '#432975', cx: 350, cy: 140 },
  { letter: 'A', label: 'RBD . FDA', name:"Availability",color: '#6b3fa0', cx: 540, cy: 278 },
  { letter: 'M', label: 'MTTR . PM', name:"Maintainability",color: '#e8722a', cx: 468, cy: 502 },
  { letter: 'S', label: 'FMECA . FTA',name:"Safety", color: '#c45a15', cx: 232, cy: 502 },
  { letter: 'LCC', label: 'SPARES . COST',name:"lifecycle cost", color: '#2a9d7f', cx: 160, cy: 278 },
];

function RamsAnimation() {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setActiveIdx((i) => (i + 1) % 5);
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
        {/* SVG Filters for glows and shadows */}
        <defs>
          {/* Soft glow filter for center node */}
          <filter id="centerGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          {/* Soft shadow filter for outer nodes */}
          <filter id="nodeShadow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="4"/>
            <feOffset dx="0" dy="2" result="offsetblur"/>
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.15"/>
            </feComponentTransfer>
            <feMerge>
              <feMergeNode/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          {/* Subtle glow for active nodes */}
          <filter id="activeGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Enhanced engineering grid background */}
        <g opacity="0.04">
          {[...Array(14)].map((_, i) => {
            const y = 50 + i * 45;
            return <line key={`h${i}`} x1="40" y1={y} x2="660" y2={y} stroke="#432975" strokeWidth="0.5" />;
          })}
          {[...Array(14)].map((_, i) => {
            const x = 50 + i * 45;
            return <line key={`v${i}`} x1={x} y1="40" x2={x} y2="640" stroke="#432975" strokeWidth="0.5" />;
          })}
        </g>

        {/* Floating micro particles */}
        {[
          { cx: 120, cy: 180, r: 2, opacity: 0.3 },
          { cx: 580, cy: 220, r: 1.5, opacity: 0.25 },
          { cx: 150, cy: 500, r: 2, opacity: 0.2 },
          { cx: 600, cy: 450, r: 1.5, opacity: 0.3 },
          { cx: 250, cy: 150, r: 1, opacity: 0.2 },
          { cx: 520, cy: 550, r: 1, opacity: 0.25 },
        ].map((dot, i) => (
          <circle key={`particle-${i}`} cx={dot.cx} cy={dot.cy} r={dot.r} fill="#432975" opacity={dot.opacity} />
        ))}

        {/* Background dotted circle connecting all outer nodes */}
        <circle cx="350" cy="340" r="200" stroke="#d0c4e0" strokeWidth="2" strokeDasharray="8 8" opacity="0.2" />

        {/* Multiple concentric orbital rings with transparency */}
        <circle cx="350" cy="340" r="240" stroke="#d4c9e8" strokeWidth="0.8" strokeDasharray="12 8" opacity="0.25" />
        <circle cx="350" cy="340" r="160" stroke="#e8e0f3" strokeWidth="0.8" strokeDasharray="8 5" opacity="0.3" />
        <circle cx="350" cy="340" r="120" stroke="#f0ebf7" strokeWidth="0.6" strokeDasharray="6 4" opacity="0.25" />

        {/* Thin dashed connection lines from center to each node */}
        {RAMS_LETTERS.map((item, i) => (
          <line
            key={`line-${i}`}
            x1="350" y1="340"
            x2={item.cx} y2={item.cy}
            stroke={i === activeIdx ? item.color : '#d0c4e0'}
            strokeWidth={i === activeIdx ? 1.5 : 0.8}
            strokeDasharray="4 3"
            opacity={i === activeIdx ? 0.7 : 0.25}
            style={{ transition: 'all 0.6s ease' }}
          />
        ))}

        {/* RAMS letter nodes with enhanced styling */}
        {RAMS_LETTERS.map((item, i) => {
          const isActive = i === activeIdx;
          return (
            <g key={item.letter} style={{ transition: 'all 0.5s ease' }} filter={isActive ? "url(#activeGlow)" : "url(#nodeShadow)"}>
              {/* Outer glow ring for active state */}
              {isActive && (
                <circle
                  cx={item.cx}
                  cy={item.cy}
                  r="58"
                  fill="none"
                  stroke={item.color}
                  strokeWidth="1"
                  opacity="0.15"
                />
              )}

              {/* Main node circle */}
              <circle
                cx={item.cx}
                cy={item.cy}
                r={isActive ? 46 : 42}
                fill={isActive ? item.color : 'white'}
                stroke={item.color}
                strokeWidth={isActive ? 0 : 2.5}
                opacity={isActive ? 1 : 0.95}
                style={{ transition: 'all 0.5s ease' }}
              />

              {/* Letter text */}
              <text
                x={item.cx}
                y={item.letter.length > 1 ? item.cy - 4 : item.cy - 6}
                textAnchor="middle"
                fill={isActive ? 'white' : item.color}
                fontSize={item.letter.length > 1 ? "16" : "24"}
                fontWeight="800"
                fontFamily="sans-serif"
                style={{ transition: 'all 0.5s ease' }}
              >
                {item.letter}
              </text>

              {/* Subtitle inside circle - show for all nodes */}
              <text
                x={item.cx}
                y={item.cy + 12}
                textAnchor="middle"
                fill={isActive ? 'rgba(255,255,255,0.85)' : item.color}
                fontSize="7"
                fontWeight="600"
                fontFamily="sans-serif"
                letterSpacing="0.8"
                opacity={isActive ? 1 : 0.7}
                style={{ transition: 'all 0.5s ease' }}
              >
                {item.letter.length > 1 ? item.label.toUpperCase() : item.label.toUpperCase()}
              </text>
            </g>
          );
        })}

        {/* Enhanced central RAMS360 node with layered glow */}
        <g filter="url(#centerGlow)">
          {/* Outer glow rings */}
          <circle cx="350" cy="340" r="85" fill="none" stroke="#432975" strokeWidth="1" opacity="0.08" />
          <circle cx="350" cy="340" r="75" fill="none" stroke="#432975" strokeWidth="1.5" opacity="0.12" />

          {/* Main central circle */}
          <circle cx="350" cy="340" r="62" fill="#432975" />

          {/* Inner decorative ring */}
          <circle cx="350" cy="340" r="54" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />

          {/* RAMS360 text */}
          <text
            x="350"
            y="345"
            textAnchor="middle"
            fill="white"
            fontSize="15"
            fontWeight="800"
            fontFamily="sans-serif"
            letterSpacing="1.2"
          >
            RAMS360
          </text>

          
        </g>

        {/* External label tags for active node */}
        {RAMS_LETTERS.map((item, i) => {
          if (i !== activeIdx) return null;
          const labelY = item.cy > 340 ? item.cy + 75 : item.cy - 75;
          return (
            <g key={`name-${i}`}>
              {/* Label background with subtle shadow */}
              <rect
                x={item.cx - 65}
                y={labelY - 12}
                width="130"
                height="22"
                rx="11"
                fill={item.color}
                opacity="0.12"
              />
              <rect
                x={item.cx - 63}
                y={labelY - 11}
                width="126"
                height="20"
                rx="10"
                fill="white"
                stroke={item.color}
                strokeWidth="1.5"
              />
              {/* Label text */}
              <text
                x={item.cx}
                y={labelY + 4}
                textAnchor="middle"
                fill={item.color}
                fontSize="10"
                fontWeight="700"
                fontFamily="sans-serif"
                letterSpacing="1.8"
              >
                {item.name.toUpperCase()}
              </text>
            </g>
          );
        })}

        {/* Animated orbital particles */}
        <circle
          cx="550"
          cy="340"
          r="4"
          fill="#e8722a"
          opacity="0.5"
          style={{ transformOrigin: '350px 340px', animation: 'orbit 8s linear infinite' }}
        />
        <circle
          cx="350"
          cy="140"
          r="3"
          fill="#432975"
          opacity="0.4"
          style={{ transformOrigin: '350px 340px', animation: 'orbit 12s linear infinite reverse' }}
        />
        <circle
          cx="150"
          cy="340"
          r="3.5"
          fill="#6b3fa0"
          opacity="0.45"
          style={{ transformOrigin: '350px 340px', animation: 'orbit 10s linear infinite' }}
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
  const [activeStage, setActiveStage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % 5);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

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
          {/* <div className="mb-5">
            <span
              className="inline-block px-3 py-1 border border-[#c4b5d8] rounded text-[#432975] text-xs uppercase tracking-widest"
              style={{ fontFamily: 'var(--ff-head)', fontWeight: 600 }}
            >
              ENGINEERING RAMS & LIFECYCLE COST ENGINEERING PLATFORM
            </span>
          </div> */}

          {/* Main Heading */}
          <h1
            className="text-[#1a1a2e]  leading-[1.18] mb-6 text-[48px]"
            style={{ fontFamily: 'var(--ff-head)', fontWeight: 800 }}
          >
            Every Failure Mode.<br />
            <span style={{ color: 'var(--rams-accent)' }}>Every Lifecycle Cost.</span><br />
            One Platform.
          </h1>

          {/* Subtitle */}
          <p
            className="text-[#4a4a6a] text-[1rem] leading-[1.7] mb-10 max-w-[540px]"
            style={{ fontFamily: 'var(--ff-body)' }}
          >
            Most RAMS teams run five disconnected tools - PBS in one file, failure rates in another, MTTR in a third, and lifecycle cost in a spreadsheet nobody trusts. One wrong paste propagates an error nobody finds until the customer review. RAMS360 connects all of it - from first failure mode to final lifecycle cost - in a single cloud platform. Live-linked. Browser-based. Zero install.
          </p>

          {/* Lifecycle Stages */}
          <div className="flex flex-nowrap items-center gap-2 mb-8 overflow-x-auto">
            <span
              className={`inline-block px-3 py-1.5 rounded-full text-[10px] uppercase tracking-wider transition-all duration-500 ${
                activeStage === 0
                  ? 'border-2 border-[var(--rams-accent)] text-[var(--rams-accent)] bg-[#fff5f0] font-bold'
                  : 'border border-[#d0c4e0] text-[#6b5b8a] bg-white font-semibold'
              }`}
              style={{ fontFamily: 'var(--ff-head)' }}
            >
              CONCEPT
            </span>
            <span className="text-[#c4b5d8] text-sm">→</span>
            <span
              className={`inline-block px-3 py-1.5 rounded-full text-[10px] uppercase tracking-wider transition-all duration-500 ${
                activeStage === 1
                  ? 'border-2 border-[var(--rams-accent)] text-[var(--rams-accent)] bg-[#fff5f0] font-bold'
                  : 'border border-[#d0c4e0] text-[#6b5b8a] bg-white font-semibold'
              }`}
              style={{ fontFamily: 'var(--ff-head)' }}
            >
              DESIGN
            </span>
            <span className="text-[#c4b5d8] text-sm">→</span>
            <span
              className={`inline-block px-3 py-1.5 rounded-full text-[10px] uppercase tracking-wider transition-all duration-500 ${
                activeStage === 2
                  ? 'border-2 border-[var(--rams-accent)] text-[var(--rams-accent)] bg-[#fff5f0] font-bold'
                  : 'border border-[#d0c4e0] text-[#6b5b8a] bg-white font-semibold'
              }`}
              style={{ fontFamily: 'var(--ff-head)' }}
            >
              PRODUCTION
            </span>
            <span className="text-[#c4b5d8] text-sm">→</span>
            <span
              className={`inline-block px-3 py-1.5 rounded-full text-[10px] uppercase tracking-wider transition-all duration-500 ${
                activeStage === 3
                  ? 'border-2 border-[var(--rams-accent)] text-[var(--rams-accent)] bg-[#fff5f0] font-bold'
                  : 'border border-[#d0c4e0] text-[#6b5b8a] bg-white font-semibold'
              }`}
              style={{ fontFamily: 'var(--ff-head)' }}
            >
              OPERATION
            </span>
            <span className="text-[#c4b5d8] text-sm">→</span>
            <span
              className={`inline-block px-3 py-1.5 rounded-full text-[10px] uppercase tracking-wider transition-all duration-500 ${
                activeStage === 4
                  ? 'border-2 border-[var(--rams-accent)] text-[var(--rams-accent)] bg-[#fff5f0] font-bold'
                  : 'border border-[#d0c4e0] text-[#6b5b8a] bg-white font-semibold'
              }`}
              style={{ fontFamily: 'var(--ff-head)' }}
            >
              DECOMMISSION
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => setOpen(true)}
              className="inline-block px-8 py-3.5 bg-[var(--rams-accent)] text-white rounded-md uppercase tracking-wider hover:bg-[var(--rams-accent-dark)] transition-colors text-sm shadow-[0_4px_16px_rgba(232,114,42,0.3)]"
              style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}
            >
              REQUEST BETA ACCESS
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
