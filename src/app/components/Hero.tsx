import { CheckCircle, Cloud, Users } from 'lucide-react';
import { useState } from 'react';
import { ContactFormModal } from './ContactForm';

export function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative min-h-[400px] overflow-hidden bg-gradient-to-r from-[#432975] via-[#6b3fa0] to-[#e8722a]">
      {/* Radial gradients */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 120% 80% at 30% 80%, rgba(0, 215, 176, 0.15) 0%, transparent 50%), radial-gradient(ellipse 100% 60% at 70% 40%, rgba(232, 114, 42, 0.12) 0%, transparent 50%)',
        }}
      />

      {/* Animated curves */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-[20%] left-[-10%] w-[140%] h-[120%] rounded-full border border-white/[0.06]"
          style={{
            animation: 'curve-spin 30s linear infinite',
          }}
        />
        <div
          className="absolute top-[30%] left-0 w-[130%] h-full rounded-full border border-white/[0.04]"
          style={{
            animation: 'curve-spin 45s linear infinite reverse',
          }}
        />
      </div>

      {/* RAMS Illustration Background */}
      <div className="absolute inset-0 z-[1] opacity-10 pointer-events-none">
        <svg
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[700px] h-[700px]"
          viewBox="0 0 700 700"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* System Architecture Diagram */}
          {/* Central Node */}
          <circle cx="350" cy="350" r="60" stroke="white" strokeWidth="2" fill="none" opacity="0.6" />
          <circle cx="350" cy="350" r="50" stroke="white" strokeWidth="1.5" fill="white" fillOpacity="0.05" />
          <text x="350" y="355" textAnchor="middle" fill="white" fontSize="14" fontWeight="600">RAMS</text>

          {/* Outer Nodes - Reliability */}
          <circle cx="200" cy="200" r="40" stroke="white" strokeWidth="2" fill="none" opacity="0.5" />
          <circle cx="200" cy="200" r="32" stroke="white" strokeWidth="1" fill="white" fillOpacity="0.03" />
          <text x="200" y="203" textAnchor="middle" fill="white" fontSize="11" fontWeight="500">R</text>

          {/* Availability */}
          <circle cx="500" cy="200" r="40" stroke="white" strokeWidth="2" fill="none" opacity="0.5" />
          <circle cx="500" cy="200" r="32" stroke="white" strokeWidth="1" fill="white" fillOpacity="0.03" />
          <text x="500" y="203" textAnchor="middle" fill="white" fontSize="11" fontWeight="500">A</text>

          {/* Maintainability */}
          <circle cx="200" cy="500" r="40" stroke="white" strokeWidth="2" fill="none" opacity="0.5" />
          <circle cx="200" cy="500" r="32" stroke="white" strokeWidth="1" fill="white" fillOpacity="0.03" />
          <text x="200" y="503" textAnchor="middle" fill="white" fontSize="11" fontWeight="500">M</text>

          {/* Safety */}
          <circle cx="500" cy="500" r="40" stroke="white" strokeWidth="2" fill="none" opacity="0.5" />
          <circle cx="500" cy="500" r="32" stroke="white" strokeWidth="1" fill="white" fillOpacity="0.03" />
          <text x="500" y="503" textAnchor="middle" fill="white" fontSize="11" fontWeight="500">S</text>

          {/* Connection Lines */}
          <line x1="350" y1="350" x2="200" y2="200" stroke="white" strokeWidth="1.5" opacity="0.3" strokeDasharray="5,5" />
          <line x1="350" y1="350" x2="500" y2="200" stroke="white" strokeWidth="1.5" opacity="0.3" strokeDasharray="5,5" />
          <line x1="350" y1="350" x2="200" y2="500" stroke="white" strokeWidth="1.5" opacity="0.3" strokeDasharray="5,5" />
          <line x1="350" y1="350" x2="500" y2="500" stroke="white" strokeWidth="1.5" opacity="0.3" strokeDasharray="5,5" />

          {/* Data Flow Arrows */}
          <path d="M 280 280 Q 240 240 200 200" stroke="white" strokeWidth="1" fill="none" opacity="0.4" />
          <polygon points="203,197 200,200 197,197" fill="white" opacity="0.4" />

          <path d="M 420 280 Q 460 240 500 200" stroke="white" strokeWidth="1" fill="none" opacity="0.4" />
          <polygon points="503,203 500,200 497,203" fill="white" opacity="0.4" />

          {/* Technical Grid Pattern */}
          <g opacity="0.15">
            <line x1="100" y1="100" x2="600" y2="100" stroke="white" strokeWidth="0.5" />
            <line x1="100" y1="200" x2="600" y2="200" stroke="white" strokeWidth="0.5" />
            <line x1="100" y1="300" x2="600" y2="300" stroke="white" strokeWidth="0.5" />
            <line x1="100" y1="400" x2="600" y2="400" stroke="white" strokeWidth="0.5" />
            <line x1="100" y1="500" x2="600" y2="500" stroke="white" strokeWidth="0.5" />
            <line x1="100" y1="600" x2="600" y2="600" stroke="white" strokeWidth="0.5" />

            <line y1="100" x1="100" y2="600" x2="100" stroke="white" strokeWidth="0.5" />
            <line y1="100" x1="200" y2="600" x2="200" stroke="white" strokeWidth="0.5" />
            <line y1="100" x1="300" y2="600" x2="300" stroke="white" strokeWidth="0.5" />
            <line y1="100" x1="400" y2="600" x2="400" stroke="white" strokeWidth="0.5" />
            <line y1="100" x1="500" y2="600" x2="500" stroke="white" strokeWidth="0.5" />
            <line y1="100" x1="600" y2="600" x2="600" stroke="white" strokeWidth="0.5" />
          </g>

          {/* Engineering Markers */}
          <circle cx="120" cy="120" r="3" fill="white" opacity="0.5" />
          <circle cx="580" cy="120" r="3" fill="white" opacity="0.5" />
          <circle cx="120" cy="580" r="3" fill="white" opacity="0.5" />
          <circle cx="580" cy="580" r="3" fill="white" opacity="0.5" />
        </svg>
      </div>

      {/* Content Container */}
      <div className="relative z-[2] max-w-[1280px] mx-auto px-10 pt-32 pb-6">
        {/* Top Label */}
        <div className="mb-6">
          <span className="inline-block px-3 py-1 border border-white/30 rounded text-white/80 text-xs uppercase tracking-wider">
            ENTERPRISE RAMS ENGINEERING PLATFORM
          </span>
        </div>

        {/* Main Heading */}
        <h1
          className="text-white text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.2] mb-6 max-w-[700px]"
          style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}
        >
          Unify Your RAMS Analyses in One Connected Platform
        </h1>

        {/* Subtitle */}
        <p className="text-white/85 text-[1.05rem] leading-[1.65] mb-10 max-w-[650px]">
          RAMS360 brings together Reliability, Availability, Maintainability, and Safety engineering into a single cloud platform. Drive better decisions with integrated PBS, FRP, MTTR, FMECA, PM, Spares, and Safety analysis modules.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 mb-16">
          <button
            onClick={() => setOpen(true)}
            className="inline-block px-8 py-3.5 bg-[var(--rams-accent)] text-white rounded-md uppercase tracking-wider hover:bg-[var(--rams-accent-dark)] transition-colors text-sm"
            style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}
          >
            REQUEST A DEMO
          </button>
          <a
            href="#modules"
            className="inline-block px-8 py-3.5 bg-white/10 text-white border border-white/30 rounded-md uppercase tracking-wider hover:bg-white/20 transition-colors text-sm backdrop-blur-sm"
            style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}
          >
            EXPLORE MODULES
          </a>
        </div>

      </div>

      <ContactFormModal open={open} onOpenChange={setOpen} />

      <style>{`
        @keyframes curve-spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
}