import logoInvert from '../../imports/Rams_360_Logo_Invert600.png';

export function OneSourceOfTruth() {
  return (
    <section
      className="py-16 md:py-24"
      style={{
        background: 'linear-gradient(135deg, #f8f5ff 0%, #fdf6f0 40%, #f0eaff 70%, #fef9f5 100%)',
      }}
    >
      <div className="max-w-[1280px] mx-auto px-10">

        {/* Content */}
        <div className="text-center max-w-[900px] mx-auto mb-16">
          {/* Section label */}
          <div className="mb-6">
            <span
              className="inline-block text-[0.75rem] uppercase tracking-[0.16em] text-[var(--rams-accent)]"
              style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}
            >
              ONE SOURCE OF TRUTH
            </span>
          </div>

          {/* Main Heading */}
          <h2
            className="text-[#1a1a2e]  leading-[1.2] mb-6 text-[32px]"
            style={{ fontFamily: 'var(--ff-head)', fontWeight: 800 }}
          >
            FRAGMENTED SPREADSHEETS TRANSFORM <br></br>INTO A UNIFIED PLATFORM.
          </h2>

          {/* Subtitle */}
          <p
            className="text-[#6b5b8a] text-[1.15rem] leading-[1.7] max-w-[720px] mx-auto text-[17px]"
            style={{ fontFamily: 'var(--ff-body)' }}
          >
            The same data your team already has — finally connected, traceable, and always in sync.
          </p>
        </div>

        {/* Illustration */}
        <div className="rounded-2xl overflow-hidden border border-gray-200/80 shadow-[0_8px_48px_rgba(0,0,0,0.09)]">
          <svg
            viewBox="0 0 1100 460"
            className="w-full block"
            xmlns="http://www.w3.org/2000/svg"
            style={{ display: 'block' }}
          >
            <defs>
              {/* Backgrounds */}
              <linearGradient id="psBeforeBg" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#f8f5ff" />
                <stop offset="40%" stopColor="#fdf6f0" />
                <stop offset="70%" stopColor="#f0eaff" />
                <stop offset="100%" stopColor="#fef9f5" />
              </linearGradient>
              <linearGradient id="psAfterBg" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#f8f5ff" />
                <stop offset="40%" stopColor="#fdf6f0" />
                <stop offset="70%" stopColor="#f0eaff" />
                <stop offset="100%" stopColor="#fef9f5" />
              </linearGradient>
              <linearGradient id="psCenterBg" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f8f5ff" />
                <stop offset="50%" stopColor="#fdf6f0" />
                <stop offset="100%" stopColor="#fef9f5" />
              </linearGradient>
              <linearGradient id="psCenterStrip" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#432975" stopOpacity="0.18" />
                <stop offset="40%" stopColor="#7C52CC" stopOpacity="0.28" />
                <stop offset="60%" stopColor="#E8722A" stopOpacity="0.22" />
                <stop offset="100%" stopColor="#E8722A" stopOpacity="0.10" />
              </linearGradient>
              {/* Hub gradient */}
              <linearGradient id="psHubGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#3B2070" />
                <stop offset="100%" stopColor="#6840B4" />
              </linearGradient>
              {/* Hub ring */}
              <linearGradient id="psHubRing" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#7C52CC" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#E8722A" stopOpacity="0.2" />
              </linearGradient>
              {/* Filters */}
              <filter id="psShadow" x="-25%" y="-25%" width="150%" height="150%">
                <feDropShadow dx="0" dy="3" stdDeviation="8" floodColor="#1a1a2e" floodOpacity="0.09" />
              </filter>
              <filter id="psShadowSm" x="-30%" y="-30%" width="160%" height="160%">
                <feDropShadow dx="0" dy="2" stdDeviation="5" floodColor="#1a1a2e" floodOpacity="0.07" />
              </filter>
              <filter id="psGlowHub" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="12" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter id="psGlowSm" x="-40%" y="-40%" width="180%" height="180%">
                <feGaussianBlur stdDeviation="5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              {/* Patterns */}
              <pattern id="psGrid" width="22" height="14" patternUnits="userSpaceOnUse">
                <rect width="22" height="14" fill="none" stroke="#E5E7EB" strokeWidth="0.4" />
              </pattern>
              <pattern id="psDots" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="0.8" fill="#9B7DC8" fillOpacity="0.18" />
              </pattern>
              <pattern id="psGridLight" width="28" height="28" patternUnits="userSpaceOnUse">
                <rect width="28" height="28" fill="none" stroke="#D8E0F5" strokeWidth="0.35" />
              </pattern>
              {/* Clip paths */}
              <clipPath id="psBeforeClip">
                <rect x="0" y="0" width="490" height="460" />
              </clipPath>
              <clipPath id="psAfterClip">
                <rect x="612" y="0" width="488" height="460" />
              </clipPath>
              {/* Arrow gradient */}
              <linearGradient id="arrowGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#432975" />
                <stop offset="100%" stopColor="#E8722A" />
              </linearGradient>
            </defs>

            {/* Base background matching section */}
            <rect x="0" y="0" width="1100" height="460" fill="url(#psBeforeBg)" />

            {/* ═══════════════════ CENTER GRADIENT STRIP ═══════════════════ */}
            <rect x="490" y="0" width="122" height="460" fill="url(#psCenterStrip)" />

            {/* ═══════════════════ BEFORE SIDE ═══════════════════ */}
            <g clipPath="url(#psBeforeClip)">
              <rect x="0" y="0" width="490" height="460" fill="url(#psBeforeBg)" />
              <rect x="0" y="0" width="490" height="460" fill="url(#psDots)" />

              {/* BEFORE badge */}
              <rect x="18" y="16" width="70" height="23" rx="11.5" fill="#432975" />
              <text x="53" y="31" textAnchor="middle" fontSize="9" fontFamily="system-ui, sans-serif" fontWeight="700" fill="white" letterSpacing="1.5">BEFORE</text>

              {/* ── Sheet 1: FMEA (main, top-left, slight CCW tilt) ── */}
              <g transform="translate(26, 46) rotate(-4, 98, 76)">
                <rect width="196" height="152" rx="5" fill="white" stroke="#D4C8E6" strokeWidth="0.8" filter="url(#psShadow)" />
                <rect width="196" height="24" rx="5" fill="#B85418" />
                <rect y="20" width="196" height="4" fill="#B85418" />
                {/* file icon */}
                <rect x="8" y="7" width="8" height="10" rx="1.5" fill="white" fillOpacity="0.25" />
                <text x="21" y="17" fontSize="7.5" fontFamily="'Courier New', monospace" fill="white" fontWeight="600">FMEA_v12_final.xlsx</text>
                <rect y="24" width="196" height="128" fill="url(#psGrid)" />
                {/* column headers */}
                <rect y="24" width="196" height="13" fill="#FFF4EE" fillOpacity="0.9" />
                <text x="8" y="34" fontSize="5.8" fontFamily="'Courier New', monospace" fill="#B85418" fontWeight="700">Failure Mode</text>
                <text x="100" y="34" fontSize="5.8" fontFamily="'Courier New', monospace" fill="#B85418" fontWeight="700">λ rate</text>
                <text x="156" y="34" fontSize="5.8" fontFamily="'Courier New', monospace" fill="#B85418" fontWeight="700">Sev.</text>
                {/* row 1 */}
                <text x="8" y="49" fontSize="5.8" fontFamily="'Courier New', monospace" fill="#374151">Open Circuit</text>
                <rect x="96" y="39" width="44" height="12" rx="2" fill="#FEE2E2" fillOpacity="0.9" />
                <text x="100" y="49" fontSize="5.8" fontFamily="'Courier New', monospace" fill="#DC2626" fontWeight="700">2.3e-5</text>
                <text x="156" y="49" fontSize="5.8" fontFamily="'Courier New', monospace" fill="#374151">Crit.</text>
                {/* row 2 */}
                <text x="8" y="63" fontSize="5.8" fontFamily="'Courier New', monospace" fill="#374151">Short Circuit</text>
                <text x="100" y="63" fontSize="5.8" fontFamily="'Courier New', monospace" fill="#6B7280">1.8e-6</text>
                <text x="156" y="63" fontSize="5.8" fontFamily="'Courier New', monospace" fill="#374151">Maj.</text>
                {/* row 3 — duplicate highlighted */}
                <text x="8" y="77" fontSize="5.8" fontFamily="'Courier New', monospace" fill="#374151">Overheat</text>
                <rect x="96" y="67" width="44" height="12" rx="2" fill="#FEE2E2" fillOpacity="0.9" />
                <text x="100" y="77" fontSize="5.8" fontFamily="'Courier New', monospace" fill="#DC2626" fontWeight="700">2.3e-5</text>
                <text x="156" y="77" fontSize="5.8" fontFamily="'Courier New', monospace" fill="#374151">Crit.</text>
                {/* fading rows */}
                <text x="8" y="91" fontSize="5.8" fontFamily="'Courier New', monospace" fill="#9CA3AF">Vibration</text>
                <text x="100" y="91" fontSize="5.8" fontFamily="'Courier New', monospace" fill="#9CA3AF">4.5e-7</text>
                <text x="156" y="91" fontSize="5.8" fontFamily="'Courier New', monospace" fill="#9CA3AF">Min.</text>
                <rect y="100" width="196" height="52" fill="white" fillOpacity="0.72" />
                <text x="8" y="119" fontSize="5" fontFamily="'Courier New', monospace" fill="#9CA3AF">...28 more rows</text>
                <line x1="0" y1="114" x2="196" y2="114" stroke="#E5E7EB" strokeWidth="0.4" />
                <line x1="0" y1="128" x2="196" y2="128" stroke="#E5E7EB" strokeWidth="0.4" />
                <line x1="0" y1="142" x2="196" y2="142" stroke="#E5E7EB" strokeWidth="0.4" />
              </g>

              {/* Version label — sheet 1 */}
              <rect x="22" y="196" width="74" height="17" rx="4" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="0.8" />
              <text x="59" y="208" textAnchor="middle" fontSize="7" fontFamily="system-ui, sans-serif" fill="#92400E" fontWeight="600">v12_final</text>

              {/* Warning triangle — sheet 1 */}
              <g transform="translate(200, 42)">
                <polygon points="11,0 0,19 22,19" fill="#FEE2E2" stroke="#EF4444" strokeWidth="1.2" />
                <text x="11" y="15" textAnchor="middle" fontSize="9" fontFamily="system-ui, sans-serif" fill="#DC2626" fontWeight="700">!</text>
              </g>

              {/* ── Sheet 2: FRP (top-right, CW tilt) ── */}
              <g transform="translate(257, 34) rotate(6, 89, 66)">
                <rect width="178" height="132" rx="5" fill="white" stroke="#B4D8C6" strokeWidth="0.8" filter="url(#psShadow)" />
                <rect width="178" height="24" rx="5" fill="#0C6E52" />
                <rect y="20" width="178" height="4" fill="#0C6E52" />
                <text x="10" y="17" fontSize="7" fontFamily="'Courier New', monospace" fill="white" fontWeight="600">FRP_v12_final_final.xlsx</text>
                <rect y="24" width="178" height="108" fill="url(#psGrid)" />
                <rect y="24" width="178" height="13" fill="#F0FDF8" fillOpacity="0.9" />
                <text x="8" y="34" fontSize="5.8" fontFamily="'Courier New', monospace" fill="#0C6E52" fontWeight="700">Component</text>
                <text x="96" y="34" fontSize="5.8" fontFamily="'Courier New', monospace" fill="#0C6E52" fontWeight="700">λ base</text>
                <text x="8" y="49" fontSize="5.8" fontFamily="'Courier New', monospace" fill="#374151">Resistor R1</text>
                <rect x="92" y="39" width="44" height="12" rx="2" fill="#FEE2E2" fillOpacity="0.9" />
                <text x="96" y="49" fontSize="5.8" fontFamily="'Courier New', monospace" fill="#DC2626" fontWeight="700">2.3e-5</text>
                <text x="8" y="63" fontSize="5.8" fontFamily="'Courier New', monospace" fill="#374151">Capacitor C3</text>
                <text x="96" y="63" fontSize="5.8" fontFamily="'Courier New', monospace" fill="#6B7280">8.5e-7</text>
                <text x="8" y="77" fontSize="5.8" fontFamily="'Courier New', monospace" fill="#9CA3AF">Transistor Q2</text>
                <text x="96" y="77" fontSize="5.8" fontFamily="'Courier New', monospace" fill="#9CA3AF">6.2e-6</text>
                <rect y="86" width="178" height="46" fill="white" fillOpacity="0.68" />
                <text x="8" y="104" fontSize="5" fontFamily="'Courier New', monospace" fill="#9CA3AF">...17 more rows</text>
              </g>

              {/* Conflict tag — sheet 2 */}
              <rect x="288" y="170" width="122" height="17" rx="4" fill="#FEE2E2" stroke="#EF4444" strokeWidth="0.8" />
              <text x="349" y="182" textAnchor="middle" fontSize="6.5" fontFamily="system-ui, sans-serif" fill="#991B1B" fontWeight="700">⚠ v12_final_final</text>

              {/* Warning triangle — sheet 2 */}
              <g transform="translate(428, 30)">
                <polygon points="11,0 0,19 22,19" fill="#FEE2E2" stroke="#EF4444" strokeWidth="1.2" />
                <text x="11" y="15" textAnchor="middle" fontSize="9" fontFamily="system-ui, sans-serif" fill="#DC2626" fontWeight="700">!</text>
              </g>

              {/* ── Sheet 3: MTTR (bottom-left, slight CCW tilt) ── */}
              <g transform="translate(20, 220) rotate(-3, 91, 59)">
                <rect width="182" height="118" rx="5" fill="white" stroke="#C0D4EC" strokeWidth="0.8" filter="url(#psShadow)" />
                <rect width="182" height="24" rx="5" fill="#1E4FA0" />
                <rect y="20" width="182" height="4" fill="#1E4FA0" />
                <text x="10" y="17" fontSize="7.5" fontFamily="'Courier New', monospace" fill="white" fontWeight="600">MTTR_latest_v3.xlsx</text>
                <rect y="24" width="182" height="94" fill="url(#psGrid)" />
                <rect y="24" width="182" height="13" fill="#EFF6FF" fillOpacity="0.9" />
                <text x="8" y="34" fontSize="5.8" fontFamily="'Courier New', monospace" fill="#1E4FA0" fontWeight="700">System</text>
                <text x="92" y="34" fontSize="5.8" fontFamily="'Courier New', monospace" fill="#1E4FA0" fontWeight="700">MTTR (h)</text>
                <text x="8" y="49" fontSize="5.8" fontFamily="'Courier New', monospace" fill="#374151">Pump A-1</text>
                <text x="92" y="49" fontSize="5.8" fontFamily="'Courier New', monospace" fill="#374151">4.2</text>
                <text x="8" y="63" fontSize="5.8" fontFamily="'Courier New', monospace" fill="#374151">Valve B-3</text>
                <text x="92" y="63" fontSize="5.8" fontFamily="'Courier New', monospace" fill="#374151">2.8</text>
                <text x="8" y="77" fontSize="5.8" fontFamily="'Courier New', monospace" fill="#9CA3AF">Motor C-2</text>
                <text x="92" y="77" fontSize="5.8" fontFamily="'Courier New', monospace" fill="#9CA3AF">6.1</text>
                <rect y="84" width="182" height="34" fill="white" fillOpacity="0.65" />
                <text x="8" y="101" fontSize="5" fontFamily="'Courier New', monospace" fill="#9CA3AF">...12 more rows</text>
              </g>

              {/* Version label — sheet 3 */}
              <rect x="20" y="338" width="72" height="17" rx="4" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="0.8" />
              <text x="56" y="350" textAnchor="middle" fontSize="7" fontFamily="system-ui, sans-serif" fill="#92400E" fontWeight="600">latest_v3</text>

              {/* ── Sheet 4: FMECA (bottom-right, partial) ── */}
              <g transform="translate(278, 208) rotate(4, 82, 54)">
                <rect width="164" height="108" rx="5" fill="white" stroke="#CEBFE8" strokeWidth="0.8" filter="url(#psShadow)" />
                <rect width="164" height="24" rx="5" fill="#5B2D8C" />
                <rect y="20" width="164" height="4" fill="#5B2D8C" />
                <text x="10" y="17" fontSize="7.5" fontFamily="'Courier New', monospace" fill="white" fontWeight="600">FMECA_data.xlsx</text>
                <rect y="24" width="164" height="84" fill="url(#psGrid)" />
                <rect y="24" width="164" height="13" fill="#FAF5FF" fillOpacity="0.9" />
                <text x="8" y="34" fontSize="5.8" fontFamily="'Courier New', monospace" fill="#5B2D8C" fontWeight="700">Mode</text>
                <text x="78" y="34" fontSize="5.8" fontFamily="'Courier New', monospace" fill="#5B2D8C" fontWeight="700">RPN</text>
                <text x="8" y="49" fontSize="5.8" fontFamily="'Courier New', monospace" fill="#374151">Thermal Fail.</text>
                <text x="78" y="49" fontSize="5.8" fontFamily="'Courier New', monospace" fill="#374151">320</text>
                <text x="8" y="63" fontSize="5.8" fontFamily="'Courier New', monospace" fill="#374151">Vibration</text>
                <text x="78" y="63" fontSize="5.8" fontFamily="'Courier New', monospace" fill="#374151">168</text>
                <rect y="70" width="164" height="38" fill="white" fillOpacity="0.6" />
              </g>

              {/* ── Broken dashed connections ── */}
              {/* Sheet 1 → Sheet 2 */}
              <polyline points="218,103 234,96 248,110 263,102" stroke="#EF4444" strokeWidth="1.3" strokeDasharray="4,3" fill="none" strokeLinecap="round" />
              <polygon points="263,98 273,102 263,106" fill="#EF4444" />
              {/* Sheet 1 → Sheet 3 */}
              <polyline points="116,192 111,205 124,217 110,230" stroke="#EF4444" strokeWidth="1.3" strokeDasharray="4,3" fill="none" strokeLinecap="round" />
              <polygon points="105,230 111,241 119,232" fill="#EF4444" />
              {/* Sheet 2 → Sheet 4 */}
              <polyline points="320,174 316,189 329,202 318,217" stroke="#DC2626" strokeWidth="1" strokeDasharray="3,3" fill="none" strokeLinecap="round" strokeOpacity="0.6" />

              {/* Manual copy label */}
              <rect x="234" y="86" width="64" height="16" rx="4" fill="#FEE2E2" stroke="#EF4444" strokeWidth="0.6" />
              <text x="266" y="97" textAnchor="middle" fontSize="6" fontFamily="system-ui, sans-serif" fill="#991B1B" fontWeight="600">manual copy</text>

              {/* Duplicate data warning */}
              <rect x="148" y="148" width="126" height="30" rx="6" fill="white" stroke="#EF4444" strokeWidth="1" filter="url(#psShadowSm)" />
              <text x="211" y="161" textAnchor="middle" fontSize="6.5" fontFamily="system-ui, sans-serif" fill="#DC2626" fontWeight="700">⚠ λ = 2.3e-5 duplicated</text>
              <text x="211" y="172" textAnchor="middle" fontSize="5.5" fontFamily="system-ui, sans-serif" fill="#9CA3AF">found in 3 separate files</text>

              {/* CONFLICT badge */}
              <rect x="336" y="155" width="74" height="20" rx="5" fill="#DC2626" />
              <text x="373" y="169" textAnchor="middle" fontSize="8" fontFamily="system-ui, sans-serif" fill="white" fontWeight="700" letterSpacing="0.5">CONFLICT</text>

              {/* Faded background formula */}
              <text x="28" y="386" fontSize="8" fontFamily="'Courier New', monospace" fill="#8B6DC0" fillOpacity="0.38">λp = λb × πT × πC × πE</text>
              <text x="274" y="374" fontSize="7" fontFamily="'Courier New', monospace" fill="#8B6DC0" fillOpacity="0.28">R(t) = e^(−λt)</text>

              {/* Bottleneck card */}
              <rect x="154" y="404" width="158" height="36" rx="8" fill="#1a1a2e" fillOpacity="0.9" />
              <text x="233" y="419" textAnchor="middle" fontSize="8.5" fontFamily="system-ui, sans-serif" fill="#F59E0B" fontWeight="600">⏳  BOTTLENECK</text>
              <text x="233" y="432" textAnchor="middle" fontSize="6" fontFamily="system-ui, sans-serif" fill="#9CA3AF">Single license — team queuing</text>

              {/* Section subtitle */}
              <text x="245" y="453" textAnchor="middle" fontSize="10" fontFamily="system-ui, sans-serif" fill="#6B4FA8" fontWeight="500" fillOpacity="0.52">Fragmented · Siloed · Error-prone</text>
            </g>


            {/* ═══════════════════ AFTER SIDE ═══════════════════ */}
            <g clipPath="url(#psAfterClip)">
              <rect x="612" y="0" width="488" height="460" fill="url(#psBeforeBg)" />
              <rect x="612" y="0" width="488" height="460" fill="url(#psDots)" />

              {/* AFTER badge */}
              <rect x="622" y="16" width="116" height="23" rx="11.5" fill="#059669" />
              <text x="680" y="31" textAnchor="middle" fontSize="9" fontFamily="system-ui, sans-serif" fill="white" fontWeight="700" letterSpacing="0.8">WITH RAMS360</text>

              {/* ── Browser window ── */}
              <rect x="630" y="50" width="454" height="384" rx="12" fill="white" stroke="#DDE4F0" strokeWidth="1" filter="url(#psShadow)" />

              {/* Browser chrome */}
              <rect x="630" y="50" width="454" height="36" rx="12" fill="#F2F5FA" />
              <rect x="630" y="70" width="454" height="16" fill="#F2F5FA" />
              {/* Traffic lights */}
              <circle cx="650" cy="68" r="5" fill="#EF4444" fillOpacity="0.62" />
              <circle cx="666" cy="68" r="5" fill="#F59E0B" fillOpacity="0.62" />
              <circle cx="682" cy="68" r="5" fill="#10B981" fillOpacity="0.62" />
              {/* URL bar */}
              <rect x="700" y="59" width="258" height="18" rx="9" fill="white" stroke="#DDE4F0" strokeWidth="0.8" />
              <text x="829" y="71" textAnchor="middle" fontSize="7" fontFamily="system-ui, sans-serif" fill="#6B7280">🔒  rams360.com/workspace</text>

              {/* App nav bar */}
              <rect x="630" y="86" width="454" height="30" fill="#1a1a2e" />
              {/* Logo */}
              <image
  href={logoInvert}
  x="600"
  y="60"
  width="500"
  height="82"
  preserveAspectRatio="xMinYMid meet"
/>
              {/* Nav links */}
              <text x="736" y="104" fontSize="7.5" fontFamily="system-ui, sans-serif" fill="#8B929E">PBS</text>
              <text x="760" y="104" fontSize="7.5" fontFamily="system-ui, sans-serif" fill="#8B929E">FRP</text>
              <text x="783" y="104" fontSize="7.5" fontFamily="system-ui, sans-serif" fill="#8B929E">FMECA</text>
              <text x="822" y="104" fontSize="7.5" fontFamily="system-ui, sans-serif" fill="#8B929E">Reports</text>
              {/* Collaboration avatars */}
              <circle cx="1014" cy="101" r="9" fill="#432975" />
              <text x="1014" y="104.5" textAnchor="middle" fontSize="5.8" fontFamily="system-ui, sans-serif" fill="white" fontWeight="700">JK</text>
              <circle cx="1031" cy="101" r="9" fill="#B85418" />
              <text x="1031" y="104.5" textAnchor="middle" fontSize="5.8" fontFamily="system-ui, sans-serif" fill="white" fontWeight="700">RS</text>
              <circle cx="1048" cy="101" r="9" fill="#0C6E52" />
              <text x="1048" y="104.5" textAnchor="middle" fontSize="5.8" fontFamily="system-ui, sans-serif" fill="white" fontWeight="700">AM</text>

              {/* ── Hub glow rings ── */}
              <circle cx="857" cy="262" r="58" fill="none" stroke="url(#psHubRing)" strokeWidth="1.5" filter="url(#psGlowHub)" />
              <circle cx="857" cy="262" r="50" fill="none" stroke="#7C52CC" strokeWidth="0.5" strokeDasharray="3,4" strokeOpacity="0.28" />

              {/* Hub circle */}
              <circle cx="857" cy="262" r="40" fill="url(#psHubGrad)" filter="url(#psGlowSm)" />
              <text x="857" y="257" textAnchor="middle" fontSize="8.5" fontFamily="system-ui, sans-serif" fill="white" fontWeight="800" letterSpacing="0.4">RAMS</text>
              <text x="857" y="269" textAnchor="middle" fontSize="8.5" fontFamily="system-ui, sans-serif" fill="white" fontWeight="800" letterSpacing="0.4">360</text>
              <text x="857" y="281" textAnchor="middle" fontSize="5.5" fontFamily="system-ui, sans-serif" fill="#BBA6E0">CORE PLATFORM</text>

              {/* ── Connection paths ── */}
              {/* → PBS */}
              <path d="M 832,238 C 818,208 798,182 756,148" stroke="#7C52CC" strokeWidth="1.8" fill="none" strokeOpacity="0.52" />
              {/* → FRP */}
              <path d="M 817,262 C 797,262 770,260 716,260" stroke="#7C52CC" strokeWidth="1.8" fill="none" strokeOpacity="0.52" />
              {/* → FMECA */}
              <path d="M 832,286 C 818,314 798,342 756,368" stroke="#7C52CC" strokeWidth="1.8" fill="none" strokeOpacity="0.52" />
              {/* → MMEA */}
              <path d="M 882,286 C 900,316 924,344 954,368" stroke="#E8722A" strokeWidth="1.8" fill="none" strokeOpacity="0.52" />
              {/* → FMEDA */}
              <path d="M 897,262 C 924,262 958,260 1000,260" stroke="#E8722A" strokeWidth="1.8" fill="none" strokeOpacity="0.52" />
              {/* → REPORT */}
              <path d="M 882,238 C 902,206 932,175 960,148" stroke="#E8722A" strokeWidth="1.8" fill="none" strokeOpacity="0.52" />

              {/* Flow dots on paths */}
              <circle cx="794" cy="193" r="3.5" fill="#7C52CC" filter="url(#psGlowSm)" />
              <circle cx="766" cy="261" r="3.5" fill="#7C52CC" filter="url(#psGlowSm)" />
              <circle cx="794" cy="327" r="3.5" fill="#7C52CC" filter="url(#psGlowSm)" />
              <circle cx="918" cy="327" r="3.5" fill="#E8722A" filter="url(#psGlowSm)" />
              <circle cx="948" cy="261" r="3.5" fill="#E8722A" filter="url(#psGlowSm)" />
              <circle cx="921" cy="193" r="3.5" fill="#E8722A" filter="url(#psGlowSm)" />

              {/* ── Module cards ── */}
              {/* PBS */}
              <rect x="714" y="127" width="84" height="42" rx="7" fill="#1a1a2e" filter="url(#psShadowSm)" />
              <circle cx="727" cy="141" r="4" fill="#10B981" />
              <text x="737" y="145" fontSize="8.5" fontFamily="system-ui, sans-serif" fill="white" fontWeight="700">PBS</text>
              <text x="727" y="159" fontSize="5.8" fontFamily="system-ui, sans-serif" fill="#9CA3AF">Product Breakdown</text>

              {/* FRP */}
              <rect x="674" y="239" width="84" height="42" rx="7" fill="#432975" filter="url(#psShadowSm)" />
              <circle cx="687" cy="253" r="4" fill="#10B981" />
              <text x="697" y="257" fontSize="8.5" fontFamily="system-ui, sans-serif" fill="white" fontWeight="700">FRP</text>
              <text x="687" y="271" fontSize="5.8" fontFamily="system-ui, sans-serif" fill="#C4A8E8">Failure Rate Pred.</text>

              {/* FMECA */}
              <rect x="714" y="347" width="84" height="42" rx="7" fill="#5A3FA0" filter="url(#psShadowSm)" />
              <circle cx="727" cy="361" r="4" fill="#10B981" />
              <text x="737" y="365" fontSize="8" fontFamily="system-ui, sans-serif" fill="white" fontWeight="700">FMECA</text>
              <text x="727" y="379" fontSize="5.8" fontFamily="system-ui, sans-serif" fill="#C4A8E8">Criticality Analysis</text>

              {/* MMEA */}
              <rect x="912" y="347" width="84" height="42" rx="7" fill="#B85418" filter="url(#psShadowSm)" />
              <circle cx="925" cy="361" r="4" fill="#10B981" />
              <text x="935" y="365" fontSize="8" fontFamily="system-ui, sans-serif" fill="white" fontWeight="700">MMEA</text>
              <text x="925" y="379" fontSize="5.8" fontFamily="system-ui, sans-serif" fill="#FED7AA">Maintenance</text>

              {/* FMEDA */}
              <rect x="958" y="239" width="84" height="42" rx="7" fill="#0C6D5A" filter="url(#psShadowSm)" />
              <circle cx="971" cy="253" r="4" fill="#10B981" />
              <text x="981" y="257" fontSize="7.5" fontFamily="system-ui, sans-serif" fill="white" fontWeight="700">FMEDA</text>
              <text x="971" y="271" fontSize="5.8" fontFamily="system-ui, sans-serif" fill="#A7F3D0">Extended FMEA</text>

              {/* REPORT */}
              <rect x="918" y="127" width="84" height="42" rx="7" fill="#374151" filter="url(#psShadowSm)" />
              <circle cx="931" cy="141" r="4" fill="#10B981" />
              <text x="941" y="145" fontSize="7.5" fontFamily="system-ui, sans-serif" fill="white" fontWeight="700">REPORT</text>
              <text x="931" y="159" fontSize="5.8" fontFamily="system-ui, sans-serif" fill="#D1D5DB">Auto-generated</text>

              
              {/* Live Sync */}
              <rect x="740" y="408" width="78" height="22" rx="11" fill="#D1FAE5" stroke="#10B981" strokeWidth="0.8" />
              <circle cx="754" cy="419" r="3.5" fill="#10B981" />
              <text x="790" y="423" textAnchor="middle" fontSize="7" fontFamily="system-ui, sans-serif" fill="#065F46" fontWeight="600">Live Sync</text>

              {/* 1 Source of Truth */}
              <rect x="830" y="408" width="122" height="22" rx="11" fill="#EDE9FE" stroke="#432975" strokeWidth="0.8" />
              <text x="891" y="423" textAnchor="middle" fontSize="7" fontFamily="system-ui, sans-serif" fill="#432975" fontWeight="600">1 Source of Truth</text>

              {/* Active users */}
              <rect x="964" y="406" width="108" height="24" rx="6" fill="#F8FAFF" stroke="#DDE4F0" strokeWidth="0.8" />
              <circle cx="979" cy="418" r="6" fill="#432975" />
              <circle cx="992" cy="418" r="6" fill="#B85418" />
              <circle cx="1005" cy="418" r="6" fill="#0C6E52" />
              <text x="1026" y="422" fontSize="6.5" fontFamily="system-ui, sans-serif" fill="#6B7280">3 active</text>

              {/* Section subtitle */}
              <text x="857" y="452" textAnchor="middle" fontSize="10" fontFamily="system-ui, sans-serif" fill="#432975" fontWeight="500" fillOpacity="0.5">Unified · Real-time · Collaborative</text>
            </g>

            {/* ── Center arrow + label ── */}
            {/* ── Center arrow + label ── */}
New Message
{/* ── Center arrow + label ── */}
<g transform="translate(505, 205)">
  {/* Modern horizontal arrow */}
  <line
    x1="18"
    y1="20"
    x2="72"
    y2="20"
    stroke="#F97316"
    strokeWidth="5"
    strokeLinecap="round"
  />
 
  {/* Arrow head top */}
  <line
    x1="72"
    y1="20"
    x2="56"
    y2="6"
    stroke="#F97316"
    strokeWidth="5"
    strokeLinecap="round"
  />
 
  {/* Arrow head bottom */}
  <line
    x1="72"
    y1="20"
    x2="56"
    y2="34"
    stroke="#F97316"
    strokeWidth="5"
    strokeLinecap="round"
  />
 
  {/* Glow behind arrow */}
  <line
    x1="18"
    y1="20"
    x2="72"
    y2="20"
    stroke="#FDBA74"
    strokeWidth="10"
    strokeLinecap="round"
    opacity="0.18"
  />
 
  {/* TRANSFORMS text */}
  <text
    x="45"
    y="52"
    textAnchor="middle"
    fontSize="8"
    fontFamily="system-ui, sans-serif"
    fill="#9B8BB5"
    fontWeight="700"
    letterSpacing="1.5"
  >
    TRANSFORMS
  </text>
 
  {/* INTO text */}
  <text
    x="45"
    y="64"
    textAnchor="middle"
    fontSize="8"
    fontFamily="system-ui, sans-serif"
    fill="#9B8BB5"
    fontWeight="700"
    letterSpacing="1.5"
  >
    INTO
  </text>
</g>
          </svg>
        </div>

      </div>
    </section>
  );
}
