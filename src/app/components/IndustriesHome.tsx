import { useState, useRef, useEffect } from 'react';
import { AerospaceIllustration } from './illustrations/AerospaceIllustration';
import { AutomotiveIllustration } from './illustrations/AutomotiveIllustration';
import { RailwaysIllustration } from './illustrations/RailwaysIllustration';
import { EnergyIllustration } from './illustrations/EnergyIllustration';
import { ManufacturingIllustration } from './illustrations/ManufacturingIllustration';
import { ElectronicsIllustration } from './illustrations/ElectronicsIllustration';

const industries = [
  {
    id: 'aerospace',
    label: 'Aerospace & Defense',
    icon: '✈',
    tagline: 'Where airworthiness meets accountability',
    heading: 'RAMS Engineering for Aerospace & Defense',
    description:
      'Airworthiness certification cycles cost teams months of manual reconciliation. RAMS360 connects your FMEA, FTA, and RBD analyses in a single audit-ready environment — so every safety decision is traceable from component to certification document, with zero manual re-entry.',
    highlights: [
      'Full DO-178C / DO-254 traceability from component to cert document',
      'Avionics reliability modeling with live failure rate data (MIL-HDBK-217F)',
      'FMEA workflows purpose-built for UAV and autonomous flight architectures',
      'Radar & sonar safety models with linked FTA and severity classification',
      'Criticality ranking for defense networks — MIL-STD-882 aligned',
    ],
    illustration: <AerospaceIllustration />,
    accent: '#E8722A',
  },
  {
    id: 'automotive',
    label: 'Automotive & Mobility',
    icon: '⚡',
    tagline: 'Safety-first engineering, from silicon to road',
    heading: 'RAMS Engineering for Automotive & Mobility',
    description:
      'When vehicle architectures evolve mid-program, FMEA rework cascades across every subsystem. RAMS360 propagates architecture changes automatically across linked safety analyses — so your ISO 26262 documentation stays current without a manual reconciliation sprint every design cycle.',
    highlights: [
      'ASIL decomposition and HARA workflows aligned to ISO 26262',
      'E/E architecture reliability modeling — powertrain, chassis, ADAS',
      'ADAS safety analysis with scenario-based failure mode coverage',
      'EV battery FMEA with thermal runaway and cell-level failure tracking',
      'Supplier failure data integration for end-to-end lifecycle traceability',
    ],
    illustration: <AutomotiveIllustration />,
    accent: '#f59e0b',
  },
  {
    id: 'railways',
    label: 'Railways & Transportation',
    icon: '🚆',
    tagline: 'Zero-tolerance reliability, across every lifecycle stage',
    heading: 'RAMS Engineering for Railways & Transportation',
    description:
      'Railway safety leaves no margin for documentation gaps. RAMS360 delivers EN 50126-aligned RAM analysis connected across rolling stock, signaling, and infrastructure — so availability targets and maintenance plans stay synchronized through every lifecycle phase.',
    highlights: [
      'EN 50126 compliance workflows with phase-gated RAM targets',
      'Rolling stock FMEA with maintenance task linkage and interval modeling',
      'Signaling system FTA with hazard rate allocation to subsystems',
      'Preventive vs. predictive maintenance strategy optimizer',
      'Fleet-level availability dashboard with live MTBF and MTTR tracking',
    ],
    illustration: <RailwaysIllustration />,
    accent: '#10b981',
  },
  {
    id: 'energy',
    label: 'Energy & Utilities',
    icon: '🔋',
    tagline: 'Grid reliability engineered, not assumed',
    heading: 'RAMS Engineering for Energy & Utilities',
    description:
      'Grid failures have no buffer. RAMS360 connects your asset reliability models to real operational data — giving engineers live fault tree analysis, traceable maintenance decisions, and IEC 61511 / IEC 61508-aligned safety workflows across the full asset lifecycle.',
    highlights: [
      'Asset criticality ranking with risk-based inspection prioritization',
      'Substation FTA with protection system failure mode coverage',
      'Wind, solar, and storage system FMEA with degradation modeling',
      'Condition-based and predictive maintenance planning integration',
      'IEC 61511 / IEC 61508 safety lifecycle traceability and audit trail',
    ],
    illustration: <EnergyIllustration />,
    accent: '#8b5cf6',
  },
  {
    id: 'manufacturing',
    label: 'Industrial Manufacturing',
    icon: '⚙',
    tagline: 'Every hour of downtime has a root cause — find it faster',
    heading: 'RAMS Engineering for Industrial Manufacturing',
    description:
      'Unplanned downtime starts with a failure no one traced in time. RAMS360 connects your process FMEA, reliability block diagrams, and maintenance plans — so when equipment changes, your safety and availability analysis updates with it. No rework. No version drift.',
    highlights: [
      'Process equipment RBD with failure rate library (OREDA / NPRD)',
      'Production line FMEA linked to RBD — changes propagate automatically',
      'Maintenance task optimization by criticality, cost, and interval',
      'SIL verification and safety instrumented system (SIS) analysis',
      'LCC modeling with availability sensitivity and spare parts impact',
    ],
    illustration: <ManufacturingIllustration />,
    accent: '#4682B4',
  },
  {
    id: 'electronics',
    label: 'Electronics & Semiconductors',
    icon: '💡',
    tagline: 'From component failure to system risk — in one model',
    heading: 'RAMS Engineering for Electronics & Semiconductors',
    description:
      'A single component failure can cascade to system-level risk before the next design review. RAMS360 traces failure modes from BOM-level FMEA through system FTA — giving your team full certification traceability for IEC 61508 and SIL qualification, with every design revision automatically reflected.',
    highlights: [
      'Component FMEA with part stress analysis and derating verification',
      'PCB-level FTA linked to system safety model — auto-updated on revision',
      'IEC 61508 SIL classification with diagnostic coverage calculation',
      'Reliability growth tracking with HALT / HAST test data integration',
      'Full BOM-to-failure traceability for certification audit readiness',
    ],
    illustration: <ElectronicsIllustration />,
    accent: '#06b6d4',
  },
];

export function IndustriesHome() {
  const [activeTab, setActiveTab] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleTabChange = (index: number) => {
    if (index === activeTab) return;
    setAnimating(true);
    const tabEl = tabsRef.current?.children[index] as HTMLElement;
    if (tabEl && tabsRef.current) {
      const container = tabsRef.current;
      container.scrollTo({
        left: tabEl.offsetLeft - container.offsetWidth / 2 + tabEl.offsetWidth / 2,
        behavior: 'smooth',
      });
    }
    setTimeout(() => { setActiveTab(index); setAnimating(false); }, 220);
  };

  const current = industries[activeTab];

  return (
    <section
      ref={sectionRef}
      className="bg-white py-20 border-t border-gray-100"
      id="industries"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(32px)',
        transition: 'opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)',
      }}
    >
      <div className="max-w-[1280px] mx-auto px-10">

        {/* Header */}
        <div className=" gap-6 flex-wrap mb-6">
          <div>
            <div className="gap-2 mb-3 text-center">
              {/* <span className="w-7 h-[2px] bg-[var(--rams-accent)] rounded" /> */}
              <span
                className="text-[0.68rem] uppercase tracking-[0.16em] text-[var(--rams-accent)] text-center"
                style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}
              >
                What We Serve
              </span>
            </div>
            <h2
              className="text-[clamp(1.8rem,4vw,3rem)] text-[#1a1a2e] uppercase tracking-[0.04em] leading-[1.1] text-center text-[32px]"
              style={{ fontFamily: 'var(--ff-head)', fontWeight: 800 }}
            >
              Industries We{' '}
              <span className="text-[#1a1a2e]">Transform</span>
            </h2>
          </div>
         
        </div>
         <p
            className="text-[0.9rem] text-[#6b7280] leading-[1.7] text-center text-[17px]"
            style={{ fontFamily: 'var(--ff-body)' }}
          >
            Deep domain expertise across every critical sector — from silicon to systems, embedded to enterprise.
          </p>

        {/* Tabs */}
        <div
          ref={tabsRef}
          className="flex gap-0 border-b border-gray-200 mb-12 mt-5 overflow-x-auto"
          style={{ scrollbarWidth: 'none' }}
        >
          {industries.map((ind, i) => (
            <button
              key={ind.id}
              onClick={() => handleTabChange(i)}
              className="relative flex items-center gap-2 px-5 py-4 shrink-0 text-[0.8rem] transition-colors duration-200 border-b-2 -mb-[2px]"
              style={{
                fontFamily: 'var(--ff-head)',
                fontWeight: 600,
                color: activeTab === i ? '#1a1a2e' : '#9ca3af',
                borderBottomColor: activeTab === i ? ind.accent : 'transparent',
              }}
            >
              <span style={{ opacity: activeTab === i ? 1 : 0.5 }}>{ind.icon}</span>
              {ind.label}
            </button>
          ))}
        </div>

        {/* Panel */}
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          style={{
            opacity: animating ? 0 : 1,
            transform: animating ? 'translateY(12px)' : 'translateY(0)',
            transition: 'opacity 0.22s ease, transform 0.22s ease',
          }}
        >
          {/* Left — copy */}
          <div className="flex flex-col gap-7">
            {/* Tagline */}
            <div className="flex items-center gap-3">
              {/* <span
                className="w-5 h-[2px] rounded"
                style={{ background: current.accent }}
              /> */}
              <span
                className="text-[0.72rem] uppercase tracking-[0.12em]"
                style={{ fontFamily: 'var(--ff-head)', fontWeight: 700, color: current.accent }}
              >
                {current.tagline}
              </span>
            </div>

            {/* Heading */}
            <h3
              className="text-[clamp(1.3rem,2.5vw,2rem)] text-[#1a1a2e] leading-[1.25]"
              style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}
            >
              {current.heading}
            </h3>

            {/* Description */}
            <p
              className="text-[0.93rem] text-[#4a4a6a] leading-[1.8] text-[15px]"
              style={{ fontFamily: 'var(--ff-body)' }}
            >
              {current.description}
            </p>

            {/* Highlights */}
            <div className="flex flex-col gap-2">
              {current.highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 px-4 py-3 rounded-lg border border-gray-100 bg-[#F9FAFB] hover:border-gray-200 hover:bg-white transition-all duration-200 group"
                >
                  <span
                    className="w-[6px] h-[6px] rounded-full shrink-0"
                    style={{ background: current.accent }}
                  />
                  <span
                    className="text-[0.83rem] text-[#374151] leading-[1.5] flex-1 text-[15px]"
                    style={{ fontFamily: 'var(--ff-body)', fontWeight: 500 }}
                  >
                    {item}
                  </span>
                  {/* <span className="text-gray-300 text-sm group-hover:translate-x-1 group-hover:text-gray-400 transition-all">→</span> */}
                </div>
              ))}
            </div>
          </div>

          {/* Right — illustration */}
          <div className="relative">
            <div
              className="relative rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.12)] bg-white"
              style={{ aspectRatio: '4/3' }}
            >
              <div className="w-full h-full">
                {current.illustration}
              </div>
              {/* Accent bar */}
              <div
                className="absolute bottom-0 left-0 right-0 h-[3px]"
                style={{ background: current.accent }}
              />
              {/* Badge */}
              <div className="absolute top-4 left-4 flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-lg px-3 py-2 shadow-sm">
                <span className="text-base">{current.icon}</span>
                <span
                  className="text-[0.75rem] text-[#1a1a2e]"
                  style={{ fontFamily: 'var(--ff-head)', fontWeight: 600 }}
                >
                  {current.label}
                </span>
              </div>
            </div>

            {/* Float card */}
            {/* <div className="absolute -bottom-5 -right-4 bg-white border border-gray-200 rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.1)] px-5 py-4 flex flex-col gap-1 min-w-[120px]">
              <span
                className="text-[1.9rem] leading-none"
                style={{ fontFamily: 'var(--ff-head)', fontWeight: 800, color: current.accent }}
              >
                {current.highlights.length}+
              </span>
              <span
                className="text-[0.62rem] uppercase tracking-[0.1em] text-[#9ca3af]"
                style={{ fontFamily: 'var(--ff-head)', fontWeight: 600 }}
              >
                Capabilities
              </span>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
