import { useState, useRef, useEffect } from "react";

const industries = [
  {
    id: "aerospace",
    label: "Aerospace & Defense",
    icon: "✈",
    tagline: "Where airworthiness meets accountability",
    heading: "RAMS Engineering for Aerospace & Defense",
    description:
      "Airworthiness certification cycles cost teams months of manual reconciliation. RAMS360 connects your FMEA, FTA, and RBD analyses in a single audit-ready environment — so every safety decision is traceable from component to certification document, with zero manual re-entry..",
    highlights: [
      "Full DO-178C / DO-254 traceability from component to cert document",
      "Avionics reliability modeling with live failure rate data (MIL-HDBK-217F)",
      "FMEA workflows purpose-built for UAV and autonomous flight architectures",
      "Radar & sonar safety models with linked FTA and severity classification",
      "Criticality ranking for defense networks — MIL-STD-882 aligned",
    ],
    image:
      "https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZXJvc3BhY2UlMjBhaXJjcmFmdCUyMHJlbGlhYmlsaXR5JTIwZW5naW5lZXJpbmd8ZW58MXx8fHwxNzc5MTc0MjE0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    accent: "#E8722A",
    stat: "5",
    statLabel: "Certifications",
  },
  {
    id: "automotive",
    label: "Automotive & Mobility",
    icon: "⚡",
    tagline: "Safety-first engineering, from silicon to road",
    heading: "RAMS Engineering for Automotive & Mobility",
    description:
      "When vehicle architectures evolve mid-program, FMEA rework cascades across every subsystem. RAMS360 propagates architecture changes automatically across linked safety analyses — so your ISO 26262 documentation stays current without a manual reconciliation sprint every design cycle.",
    highlights: [
      "ASIL decomposition and HARA workflows aligned to ISO 26262",
      "E/E architecture reliability modeling — powertrain, chassis, ADAS",
      "ADAS safety analysis with scenario-based failure mode coverage",
      "EV battery FMEA with thermal runaway and cell-level failure tracking",
      "Supplier failure data integration for end-to-end lifecycle traceability",
    ],
    image:
      "https://images.unsplash.com/photo-1567789884554-0b844b597180?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbW90aXZlJTIwdmVoaWNsZSUyMG1hbnVmYWN0dXJpbmclMjBzYWZldHl8ZW58MXx8fHwxNzc5MTc0MjE1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    accent: "#f59e0b",
    stat: "5",
    statLabel: "Standards Met",
  },
  {
    id: "railways",
    label: "Railways & Transportation",
    icon: "🚆",
    tagline: "Zero-tolerance reliability, across every lifecycle stage",
    heading: "RAMS Engineering for Railways & Transportation",
    description:
      "Railway safety leaves no margin for documentation gaps. RAMS360 delivers EN 50126-aligned RAM analysis connected across rolling stock, signaling, and infrastructure — so availability targets and maintenance plans stay synchronized through every lifecycle phase.",
    highlights: [
      "EN 50126 compliance workflows with phase-gated RAM targets",
      "Rolling stock FMEA with maintenance task linkage and interval modeling",
      "Signaling system FTA with hazard rate allocation to subsystems",
      "Preventive vs. predictive maintenance strategy optimizer",
      "Fleet-level availability dashboard with live MTBF and MTTR tracking",
    ],
    image:
      "https://images.unsplash.com/photo-1580442374555-3def8fb41738?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWlsd2F5JTIwdHJhaW4lMjB0cmFuc3BvcnRhdGlvbiUyMGluZnJhc3RydWN0dXJlfGVufDF8fHx8MTc3OTE3NDIxNnww&ixlib=rb-4.1.0&q=80&w=1080",
    accent: "#10b981",
    stat: "5",
    statLabel: "SIL Levels",
  },
  {
    id: "energy",
    label: "Energy & Utilities",
    icon: "🔋",
    tagline: "Grid reliability engineered, not assumed",
    heading: "RAMS Engineering for Energy & Utilities",
    description:
      "Grid failures have no buffer. RAMS360 connects your asset reliability models to real operational data — giving engineers live fault tree analysis, traceable maintenance decisions, and IEC 61511 / IEC 61508-aligned safety workflows across the full asset lifecycle.",
    highlights: [
      "Asset criticality ranking with risk-based inspection prioritization",
      "Substation FTA with protection system failure mode coverage",
      "Wind, solar, and storage system FMEA with degradation modeling",
      "Condition-based and predictive maintenance planning integration",
      "IEC 61511 / IEC 61508 safety lifecycle traceability and audit trail",
    ],
    image:
      "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmVyZ3klMjBwb3dlciUyMGdyaWQlMjByZW5ld2FibGUlMjBpbmZyYXN0cnVjdHVyZXxlbnwxfHx8fDE3NzkxNzQyMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    accent: "#8b5cf6",
    stat: "5",
    statLabel: "IEC Standards",
  },
  {
    id: "manufacturing",
    label: "Industrial Manufacturing",
    icon: "⚙",
    tagline: "Every hour of downtime has a root cause — find it faster",
    heading: "RAMS Engineering for Industrial Manufacturing",
    description:
      "Unplanned downtime starts with a failure no one traced in time. RAMS360 connects your process FMEA, reliability block diagrams, and maintenance plans — so when equipment changes, your safety and availability analysis updates with it. No rework. No version drift.",
    highlights: [
      "Process equipment RBD with failure rate library (OREDA / NPRD)",
      "Production line FMEA linked to RBD — changes propagate automatically",
      "Maintenance task optimization by criticality, cost, and interval",
      "SIL verification and safety instrumented system (SIS) analysis",
      "LCC modeling with availability sensitivity and spare parts impact",
    ],
    image:
      "https://images.unsplash.com/photo-1717386255773-1e3037c81788?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwbWFudWZhY3R1cmluZyUyMGF1dG9tYXRpb24lMjBmYWN0b3J5fGVufDF8fHx8MTc3OTE3NDIxN3ww&ixlib=rb-4.1.0&q=80&w=1080",
    accent: "#4682B4",
    stat: "5",
    statLabel: "Capabilities",
  },
  {
    id: "electronics",
    label: "Electronics & Semiconductors",
    icon: "💡",
    tagline: "From component failure to system risk — in one model",
    heading: "RAMS Engineering for Electronics & Semiconductors",
    description:
      "A single component failure can cascade to system-level risk before the next design review. RAMS360 traces failure modes from BOM-level FMEA through system FTA — giving your team full certification traceability for IEC 61508 and SIL qualification, with every design revision automatically reflected.",
    highlights: [
      "Component FMEA with part stress analysis and derating verification",
      "PCB-level FTA linked to system safety model — auto-updated on revision",
      "IEC 61508 SIL classification with diagnostic coverage calculation",
      "Reliability growth tracking with HALT / HAST test data integration",
      "Full BOM-to-failure traceability for certification audit readiness",
    ],
    image:
      "https://images.unsplash.com/photo-1562408590-e32931084e23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxlbGVjdHJvbmljcyUyMHNlbWljb25kdWN0b3IlMjBtYW51ZmFjdHVyaW5nJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzkxNzQyMzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    accent: "#06b6d4",
    stat: "5",
    statLabel: "Platforms",
  },
];

export function Industries() {
  const [activeTab, setActiveTab] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [sectionVisible, setSectionVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);

  // Intersection observer for section entrance
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSectionVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleTabChange = (index: number) => {
    if (index === activeTab) return;
    setAnimating(true);
    // Scroll active tab into view
   const tabEl = tabsRef.current?.children[index] as HTMLElement;

if (tabEl && tabsRef.current) {
  const container = tabsRef.current;
  const tabLeft = tabEl.offsetLeft;
  const tabWidth = tabEl.offsetWidth;
  const containerWidth = container.offsetWidth;

  container.scrollTo({
    left: tabLeft - containerWidth / 2 + tabWidth / 2,
    behavior: "smooth",
  });
}
    setTimeout(() => {
      setActiveTab(index);
      setAnimating(false);
    }, 220);
  };

  const current = industries[activeTab];

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600&display=swap"
        rel="stylesheet"
      />

      <style>{`
        /* ── Reset ── */
        .ind-root *, .ind-root *::before, .ind-root *::after {
          box-sizing: border-box; margin: 0; padding: 0;
        }

        /* ── Root ── */
        .ind-root {
          font-family: 'Sora', 'Plus Jakarta Sans', sans-serif;
          background: #050a14;
          color: #e2e8f0;
          overflow-x: hidden;
          position: relative;
        }

        /* ── Subtle section separator glow ── */
        .ind-root::before {
          content: '';
          position: absolute;
          top: 0; left: 50%;
          transform: translateX(-50%);
          width: 800px; height: 1px;
          background: linear-gradient(90deg,
            transparent 0%,
            rgba(14,165,233,0.25) 30%,
            rgba(129,140,248,0.25) 70%,
            transparent 100%
          );
        }

        /* ── Section wrapper ── */
        .ind-section {
          max-width: 1320px;
          margin: 0 auto;
          padding: 100px 32px 120px;
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.8s cubic-bezier(0.16,1,0.3,1),
                      transform 0.8s cubic-bezier(0.16,1,0.3,1);
        }
        .ind-section.visible {
          opacity: 1; transform: translateY(0);
        }

        /* ── Header ── */
        .ind-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 24px;
          margin-bottom: 64px;
          flex-wrap: wrap;
        }
        .ind-header-left {}
        .ind-eyebrow {
          font-size: 11px; font-weight: 600;
          color: #E8722A; letter-spacing: 0.18em;
          text-transform: uppercase; margin-bottom: 14px;
          display: flex; align-items: center; gap: 10px;
        }
        .ind-eyebrow::before {
          content: '';
          width: 28px; height: 2px;
          background: linear-gradient(90deg, #E8722A, #E8722A);
          border-radius: 2px;
          flex-shrink: 0;
        }
        .ind-title {
          font-size: clamp(30px, 4vw, 48px);
          font-weight: 800;
          color: #f1f5f9;
          letter-spacing: -0.03em;
          line-height: 1.1;
        }
        .ind-title span {
          background: linear-gradient(135deg, #E8722A 0%, #E8722A 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .ind-header-right {
          font-size: 14px;
          color: #475569;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 400;
          max-width: 280px;
          line-height: 1.7;
          text-align: right;
        }

        /* ── Tabs ── */
        .ind-tabs {
          display: flex;
          gap: 0;
          border-bottom: 1px solid rgba(255,255,255,0.07);
          margin-bottom: 64px;
          overflow-x: auto;
          scrollbar-width: none;
          -webkit-overflow-scrolling: touch;
        }
        .ind-tabs::-webkit-scrollbar { display: none; }

        .ind-tab {
          position: relative;
          display: flex; align-items: center; gap: 8px;
          padding: 16px 24px;
          background: none; border: none;
          color: #4b5563;
          font-family: 'Sora', sans-serif;
          font-size: 13px; font-weight: 500;
          cursor: pointer;
          white-space: nowrap;
          transition: color 0.2s ease;
          letter-spacing: 0.01em;
          flex-shrink: 0;
        }
        .ind-tab:hover { color: #94a3b8; }
        .ind-tab.active { color: #f1f5f9; }
        .ind-tab-icon {
          font-size: 15px;
          opacity: 0.5;
          transition: opacity 0.2s;
        }
        .ind-tab.active .ind-tab-icon { opacity: 1; }
        .ind-tab-line {
          position: absolute;
          bottom: -1px; left: 0; right: 0;
          height: 2px;
          border-radius: 2px 2px 0 0;
          background: transparent;
          transition: background 0.25s ease, box-shadow 0.25s ease;
        }
        .ind-tab.active .ind-tab-line {
          background: var(--accent);
          box-shadow: 0 0 12px var(--accent);
        }

        /* ── Panel ── */
        .ind-panel {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
          transition: opacity 0.22s ease, transform 0.22s ease;
        }
        .ind-panel.out { opacity: 0; transform: translateY(14px); }
        .ind-panel.in  { opacity: 1; transform: translateY(0); }

        /* ── Left copy ── */
        .ind-copy { display: flex; flex-direction: column; gap: 28px; }
        .ind-tag {
          display: inline-flex; align-items: center; gap: 10px;
          font-size: 11px; font-weight: 600;
          letter-spacing: 0.14em; text-transform: uppercase;
          color: var(--accent);
          font-family: 'Sora', sans-serif;
        }
        .ind-tag-line {
          width: 24px; height: 2px;
          background: var(--accent);
          border-radius: 2px;
          opacity: 0.8;
        }
        .ind-heading {
          font-size: clamp(22px, 3vw, 34px);
          font-weight: 700; line-height: 1.22;
          color: #f1f5f9;
          letter-spacing: -0.02em;
        }
        .ind-desc {
          font-size: 15px; line-height: 1.85;
          color: #64748b;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 400;
        }

        /* ── Highlights ── */
        .ind-highlights { display: flex; flex-direction: column; gap: 10px; }
        .ind-item {
          display: flex; align-items: center; gap: 14px;
          padding: 10px 16px;
          border-radius: 8px;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.04);
          transition: background 0.2s, border-color 0.2s, transform 0.2s;
          cursor: default;
        }
        .ind-item:hover {
          background: rgba(255,255,255,0.05);
          border-color: rgba(255,255,255,0.08);
          transform: translateX(4px);
        }
        .ind-item-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: var(--accent);
          flex-shrink: 0;
          box-shadow: 0 0 8px var(--accent);
        }
        .ind-item-text {
          font-size: 13.5px;
          color: #cbd5e1;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 500;
        }
        .ind-item-arrow {
          margin-left: auto;
          color: #334155;
          font-size: 14px;
          transition: color 0.2s, transform 0.2s;
        }
        .ind-item:hover .ind-item-arrow {
          color: var(--accent);
          transform: translateX(3px);
        }

        /* ── CTA ── */
        .ind-cta {
          display: inline-flex; align-items: center; gap: 10px;
          padding: 13px 28px;
          border-radius: 8px;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.03);
          color: #f1f5f9;
          font-family: 'Sora', sans-serif;
          font-size: 13.5px; font-weight: 500;
          cursor: pointer;
          transition: background 0.2s, border-color 0.2s, box-shadow 0.2s;
          text-decoration: none;
          width: fit-content;
          letter-spacing: 0.01em;
        }
        .ind-cta:hover {
          background: rgba(255,255,255,0.07);
          border-color: var(--accent);
          box-shadow: 0 0 24px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.04);
        }
        .ind-cta-arrow { transition: transform 0.2s; }
        .ind-cta:hover .ind-cta-arrow { transform: translateX(4px); }

        /* ── Image ── */
        .ind-img-wrap { position: relative; }
        .ind-img-frame {
          position: relative;
          border-radius: 18px;
          overflow: hidden;
          aspect-ratio: 4/3;
          box-shadow:
            0 40px 100px rgba(0,0,0,0.6),
            0 0 0 1px rgba(255,255,255,0.05);
        }
        .ind-img {
          width: 100%; height: 100%;
          object-fit: cover;
          display: block;
          filter: brightness(0.8) saturate(1.15);
          transition: transform 0.7s cubic-bezier(0.16,1,0.3,1);
        }
        .ind-img-frame:hover .ind-img { transform: scale(1.04); }
        .ind-img-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(
            160deg,
            rgba(5,10,20,0.15) 0%,
            transparent 50%,
            rgba(5,10,20,0.4) 100%
          );
        }
        .ind-img-bar {
          position: absolute; bottom: 0; left: 0; right: 0;
          height: 3px;
          background: var(--accent);
          box-shadow: 0 0 20px var(--accent);
          opacity: 0.9;
        }
        .ind-img-badge {
          position: absolute; top: 18px; left: 18px;
          background: rgba(5,10,20,0.75);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 8px;
          padding: 9px 15px;
          font-size: 12.5px; font-weight: 600;
          color: #f1f5f9;
          display: flex; align-items: center; gap: 8px;
          letter-spacing: 0.01em;
        }

        /* ── Float card ── */
        .ind-float {
          position: absolute;
          bottom: -22px; right: -18px;
          background: rgba(5,10,20,0.88);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 14px;
          padding: 18px 22px;
          display: flex; flex-direction: column; gap: 4px;
          min-width: 130px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.5);
        }
        .ind-float-num {
          font-size: 30px; font-weight: 800;
          color: var(--accent);
          line-height: 1;
          letter-spacing: -0.03em;
        }
        .ind-float-label {
          font-size: 10px; font-weight: 600;
          color: #475569;
          letter-spacing: 0.12em; text-transform: uppercase;
          font-family: 'Plus Jakarta Sans', sans-serif;
        }

        /* ── Counter chips ── */
        .ind-counter-row {
          display: flex; gap: 8px;
          flex-wrap: wrap;
          margin-top: 4px;
        }
        .ind-chip {
          padding: 5px 12px;
          border-radius: 100px;
          border: 1px solid rgba(255,255,255,0.06);
          background: rgba(255,255,255,0.03);
          font-size: 11px; font-weight: 500;
          color: #475569;
          font-family: 'Plus Jakarta Sans', sans-serif;
          cursor: pointer;
          transition: all 0.2s;
        }
        .ind-chip:hover, .ind-chip.active {
          border-color: var(--accent);
          color: var(--accent);
          background: rgba(14,165,233,0.06);
        }

        /* ── Responsive ── */
        @media (max-width: 960px) {
          .ind-panel { grid-template-columns: 1fr; gap: 44px; }
          .ind-img-wrap { order: -1; }
          .ind-float { bottom: -14px; right: 4px; }
          .ind-header-right { text-align: left; max-width: 100%; }
        }
        @media (max-width: 600px) {
  .ind-section { padding: 72px 20px 100px; }
  .ind-tab { padding: 12px 14px; font-size: 12px; gap: 5px; }
  .ind-heading { font-size: 22px; }

  .ind-tabs {
    padding-left: 12px;
    padding-right: 12px;
  }
}
   
      `}</style>

      <div className="ind-root">
        <section
          className={`ind-section${sectionVisible ? " visible" : ""}`}
          ref={sectionRef}
        >
          {/* ── Header ── */}
          <div className="ind-header">
            <div className="ind-header-left">
              <div className="ind-eyebrow">What We Serve</div>
              <h2 className="ind-title">
                Industries We <span>Transform</span>
              </h2>
            </div>
            <p className="ind-header-right">
              Deep domain expertise across every critical sector — from silicon
              to systems, embedded to enterprise.
            </p>
          </div>

          {/* ── Tabs ── */}
          <div className="ind-tabs" ref={tabsRef}>
            {industries.map((ind, i) => (
              <button
                key={ind.id}
                className={`ind-tab${activeTab === i ? " active" : ""}`}
                style={{ "--accent": ind.accent } as React.CSSProperties}
                onClick={() => handleTabChange(i)}
              >
                <span className="ind-tab-icon">{ind.icon}</span>
                {ind.label}
                <span className="ind-tab-line" />
              </button>
            ))}
          </div>

          {/* ── Panel ── */}
          <div
            className={`ind-panel${animating ? " out" : " in"}`}
            style={{ "--accent": current.accent } as React.CSSProperties}
          >
            {/* Copy */}
            <div className="ind-copy">
              <div className="ind-tag">
                <span className="ind-tag-line" />
                {current.tagline}
              </div>

              <h3 className="ind-heading">{current.heading}</h3>

              <p className="ind-desc">{current.description}</p>

              <div className="ind-highlights">
                {current.highlights.map((item) => (
                  <div className="ind-item" key={item}>
                    <span className="ind-item-dot" />
                    <span className="ind-item-text">{item}</span>
                    
                  </div>
                ))}
              </div>

              {/* <a className="ind-cta" href="#">
                Explore {current.label}
                <span className="ind-cta-arrow">→</span>
              </a> */}
            </div>

            {/* Image */}
            <div className="ind-img-wrap">
              <div className="ind-img-frame">
                <img
                  className="ind-img"
                  src={current.image}
                  alt={current.label}
                />
                <div className="ind-img-overlay" />
                <div className="ind-img-bar" />
                <div className="ind-img-badge">
                  <span>{current.icon}</span>
                  {current.label}
                </div>
              </div>
              {/* <div className="ind-float">
                <span className="ind-float-num">
                  {current.highlights.length}+
                </span>
                <span className="ind-float-label">Certified Solutions</span>
              </div> */}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}