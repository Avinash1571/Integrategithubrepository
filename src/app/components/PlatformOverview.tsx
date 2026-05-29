import { useState } from 'react';
import { ContactFormModal } from './ContactForm';

export function PlatformOverview() {
  const [openContact, setOpenContact] = useState(false);

  return (
    <>
      <section
        className="py-12 md:py-20"
        style={{
          background: 'linear-gradient(135deg, #f8f5ff 0%, #fdf6f0 40%, #f0eaff 70%, #fef9f5 100%)',
        }}
      >
        <div className="max-w-[1280px] mx-auto px-5 md:px-10">
          {/* Section label */}
          <div className="text-center mb-6">
            <span
              className="inline-block text-[0.65rem] uppercase tracking-[0.16em] text-[var(--rams-accent)]"
              style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}
            >
              BUILT FOR ENGINEERING TEAMS
            </span>
          </div>

          <h2
            className="text-[32px] text-[#1a1a2e] text-center mb-6 leading-[1.2] animate-fade-in-up"
            style={{ fontFamily: 'var(--ff-head)', fontWeight: 800 }}
          >
            OUR PLATFORM IS BUILT SO ENGINEERS<br />
            CAN FOCUS ON ANALYSIS, NOT ON FIGHTING TOOLS.
          </h2>

          <p className="text-center text-[#6b5b8a] text-[1.05rem] max-w-[820px] mx-auto mb-12 leading-[1.7] animate-fade-in-up">
            Role-based permissions, Excel-native workflows, and real engineering support — built for teams who need RAMS tools that actually work the way they do.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 md:gap-16 items-center">

            {/* Left Content */}
            <div>
              {/* Built for real engineering teams */}
              <div className="mb-6 md:mb-8">
                <h3
                  className="text-[1.1rem] md:text-[1.3rem] text-[#1a1a2e] mb-3 tracking-[0.02em]"
                  style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}
                >
                  Built for real engineering teams
                </h3>
                <p className="text-[0.92rem] md:text-[0.98rem] text-[#6b5b8a] leading-[1.7]">
                  Role-based access control with Super Admin, Company Admin, and Employee roles. Granular read/write permissions at the module level — grant a reviewer read-only FMECA access while your analyst has full write control over PBS and FRP. Connected libraries link data within and across modules automatically.
                </p>
              </div>

              {/* Excel-native workflows */}
              <div className="mb-6 md:mb-8">
                <h3
                  className="text-[1.1rem] md:text-[1.3rem] text-[#1a1a2e] mb-3 tracking-[0.02em]"
                  style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}
                >
                  Excel-native workflows
                </h3>
                <p className="text-[0.92rem] md:text-[0.98rem] text-[#6b5b8a] leading-[1.7]">
                  Import your existing data across all modules. Export structured reports for PBS, Reliability, FMECA, Maintenance, Spares, Safety, and Lifecycle Cost. Works the way your team already works — with the structure they need for audits and customer deliverables.
                </p>
              </div>

              {/* You're never alone */}
              <div className="mb-8 md:mb-10">
                <h3
                  className="text-[1.1rem] md:text-[1.3rem] text-[#1a1a2e] mb-3 tracking-[0.02em]"
                  style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}
                >
                  You're never alone
                </h3>
                <p className="text-[0.92rem] md:text-[0.98rem] text-[#6b5b8a] leading-[1.7]">
                  Direct access to the engineering team that built the platform. Bug reports get read and acted on, not ticketed into a 6-month backlog. Beta users have a real voice in what gets built next — this is a partnership, not a licence agreement.
                </p>
              </div>

              {/* Request a Demo CTA */}
              <button
                onClick={() => setOpenContact(true)}
                className="inline-flex items-center gap-3 px-7 py-4 bg-[var(--rams-accent)] text-white rounded-lg transition-all duration-300 hover:bg-[#d4621f] hover:shadow-[0_8px_24px_rgba(232,114,42,0.35)] hover:-translate-y-[2px] active:translate-y-0"
                style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}
              >
                <span className="text-[0.85rem] uppercase tracking-[0.1em]">REQUEST A DEMO</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>

            {/* Right Illustration */}
<div className="flex items-center justify-center lg:justify-end mt-8 lg:mt-0 overflow-visible">

  <svg
    viewBox="0 0 1600 1300"
    className="w-full max-w-[1400px] md:max-w-[1800px] lg:max-w-[2400px] xl:max-w-[2800px] h-auto"
    fill="none"
    preserveAspectRatio="xMidYMid meet"
  >
    <g transform="scale(1.15) translate(60, 40)">

      <defs>
        <circle
          id="ripple1"
          cx="250"
          cy="360"
          r="90"
          fill="none"
          stroke="#E8722A"
          strokeWidth="3"
          opacity="0.28"
        >
          <animate attributeName="r" from="90" to="190" dur="2.4s" repeatCount="indefinite" />
          <animate attributeName="opacity" from="0.28" to="0" dur="2.4s" repeatCount="indefinite" />
        </circle>

        <circle
          id="ripple2"
          cx="250"
          cy="360"
          r="90"
          fill="none"
          stroke="#E8722A"
          strokeWidth="3"
          opacity="0.28"
        >
          <animate attributeName="r" from="90" to="190" dur="2.4s" begin="1.2s" repeatCount="indefinite" />
          <animate attributeName="opacity" from="0.28" to="0" dur="2.4s" begin="1.2s" repeatCount="indefinite" />
        </circle>
      </defs>

      <use href="#ripple1" />
      <use href="#ripple2" />

      {/* ================= CENTRAL HUB ================= */}
      <g transform="translate(500, 170)">

        {/* TOP LABEL */}
        <g transform="translate(40, -60)">
          <rect
            x="0"
            y="0"
            width="340"
            height="56"
            rx="10"
            fill="#E8722A"
          />
          <text
            x="170"
            y="35"
            textAnchor="middle"
            fill="white"
            fontSize="22"
            fontWeight="700"
          >
            Change propagates instantly
          </text>
        </g>

        {/* MAIN PANEL */}
        <rect
          x="0"
          y="0"
          width="420"
          height="470"
          rx="20"
          fill="#1a1a2e"
          stroke="#432975"
          strokeWidth="3"
        />

        {/* URL BAR */}
        <rect
          x="22"
          y="22"
          width="376"
          height="42"
          rx="8"
          fill="#2a2a3e"
        />

        <text
          x="40"
          y="48"
          fill="#9ca3af"
          fontSize="17"
          fontWeight="500"
        >
          https://app.rams360.io/project/...
        </text>

        {/* MODULES */}
        <g transform="translate(28, 105)">
          <text
            x="0"
            y="0"
            fill="#f3f4f6"
            fontSize="22"
            fontWeight="700"
          >
            Modules
          </text>

          {[
            ['PBS', 0, 18],
            ['FRP', 118, 18],
            ['FMECA', 236, 18],
            ['MTTR', 0, 78],
            ['PM', 118, 78],
            ['Spares', 236, 78],
          ].map(([label, x, y]) => (
            <g key={label}>
              <rect
                x={x}
                y={y}
                width="102"
                height="44"
                rx="9"
                fill="#432975"
                opacity="0.35"
                stroke="#6b3fa0"
                strokeWidth="2"
              />

              <text
                x={Number(x) + 51}
                y={Number(y) + 28}
                textAnchor="middle"
                fill="#f3f4f6"
                fontSize="18"
                fontWeight="700"
              >
                {label}
              </text>
            </g>
          ))}
        </g>

        {/* TEAM ACCESS */}
        <g transform="translate(28, 255)">

          <text
            x="0"
            y="0"
            fill="#f3f4f6"
            fontSize="22"
            fontWeight="700"
          >
            Team Access
          </text>

          {[
            ['JK', 'Full Access', '#E8722A', 18],
            ['RS', 'Read FMECA', '#2a9d7f', 78],
            ['AM', 'Safety + FTA', '#8b5cf6', 138],
          ].map(([name, role, color, y]) => (
            <g key={name}>
              <rect
                x="0"
                y={y}
                width="360"
                height="46"
                rx="9"
                fill="#2a2a3e"
              />

              <circle
                cx="18"
                cy={Number(y) + 23}
                r="8"
                fill={color}
              />

              <text
                x="40"
                y={Number(y) + 29}
                fill="#f3f4f6"
                fontSize="18"
                fontWeight="700"
              >
                {name}
              </text>

              <text
                x="105"
                y={Number(y) + 29}
                fill="#9ca3af"
                fontSize="17"
              >
                {role}
              </text>
            </g>
          ))}
        </g>
      </g>

      {/* ================= LEFT CARD ================= */}
      <g transform="translate(120, 280)">

        <rect
          x="0"
          y="0"
          width="240"
          height="300"
          rx="18"
          fill="white"
          stroke="#E8722A"
          strokeWidth="3"
        />

        <circle
          cx="120"
          cy="62"
          r="38"
          fill="#E8722A"
          opacity="0.15"
        />

        <text
          x="120"
          y="70"
          textAnchor="middle"
          fill="#E8722A"
          fontSize="24"
          fontWeight="700"
        >
          JK
        </text>

        <text
          x="120"
          y="118"
          textAnchor="middle"
          fill="#1a1a2e"
          fontSize="21"
          fontWeight="700"
        >
          Reliability Lead
        </text>

        <text
          x="120"
          y="148"
          textAnchor="middle"
          fill="#6b5b8a"
          fontSize="18"
        >
          Full Access
        </text>

        <rect
          x="28"
          y="242"
          width="184"
          height="36"
          rx="8"
          fill="#E8722A"
          opacity="0.1"
        />

        <text
          x="120"
          y="265"
          textAnchor="middle"
          fill="#E8722A"
          fontSize="17"
          fontWeight="700"
        >
          Owns project data
        </text>
      </g>

      {/* ================= BOTTOM CARD ================= */}
      <g transform="translate(570, 700)">

        <rect
          x="0"
          y="0"
          width="240"
          height="300"
          rx="18"
          fill="white"
          stroke="#2a9d7f"
          strokeWidth="3"
        />

        <circle
          cx="120"
          cy="62"
          r="38"
          fill="#2a9d7f"
          opacity="0.15"
        />

        <text
          x="120"
          y="70"
          textAnchor="middle"
          fill="#2a9d7f"
          fontSize="24"
          fontWeight="700"
        >
          RS
        </text>

        <text
          x="120"
          y="118"
          textAnchor="middle"
          fill="#1a1a2e"
          fontSize="21"
          fontWeight="700"
        >
          Customer Review
        </text>

        <text
          x="120"
          y="148"
          textAnchor="middle"
          fill="#6b5b8a"
          fontSize="18"
        >
          Read-only FMECA
        </text>

        <rect
          x="28"
          y="242"
          width="184"
          height="36"
          rx="8"
          fill="#2a9d7f"
          opacity="0.1"
        />

        <text
          x="120"
          y="265"
          textAnchor="middle"
          fill="#2a9d7f"
          fontSize="17"
          fontWeight="700"
        >
          Views safety analysis
        </text>
      </g>

      {/* ================= RIGHT CARD ================= */}
      <g transform="translate(1080, 280)">

        <rect
          x="0"
          y="0"
          width="240"
          height="300"
          rx="18"
          fill="white"
          stroke="#8b5cf6"
          strokeWidth="3"
        />

        <circle
          cx="120"
          cy="62"
          r="38"
          fill="#8b5cf6"
          opacity="0.15"
        />

        <text
          x="120"
          y="70"
          textAnchor="middle"
          fill="#8b5cf6"
          fontSize="24"
          fontWeight="700"
        >
          AM
        </text>

        <text
          x="120"
          y="118"
          textAnchor="middle"
          fill="#1a1a2e"
          fontSize="21"
          fontWeight="700"
        >
          Safety Specialist
        </text>

        <text
          x="120"
          y="148"
          textAnchor="middle"
          fill="#6b5b8a"
          fontSize="18"
        >
          Safety + FTA only
        </text>

        <rect
          x="28"
          y="242"
          width="184"
          height="36"
          rx="8"
          fill="#8b5cf6"
          opacity="0.1"
        />

        <text
          x="120"
          y="265"
          textAnchor="middle"
          fill="#8b5cf6"
          fontSize="17"
          fontWeight="700"
        >
          Focused domain access
        </text>
      </g>

      {/* ================= CONNECTION LINES ================= */}

      {/* Left */}
      <path
        d="M 360 430 Q 470 360 500 360"
        stroke="#E8722A"
        strokeWidth="4"
        strokeDasharray="10 8"
        fill="none"
        opacity="0.75"
      >
        <animate
          attributeName="stroke-dashoffset"
          from="0"
          to="24"
          dur="1s"
          repeatCount="indefinite"
        />
      </path>

      {/* Bottom */}
      <path
        d="M 720 640 Q 720 690 690 700"
        stroke="#E8722A"
        strokeWidth="4"
        strokeDasharray="10 8"
        fill="none"
        opacity="0.75"
      >
        <animate
          attributeName="stroke-dashoffset"
          from="0"
          to="24"
          dur="1s"
          repeatCount="indefinite"
        />
      </path>

      {/* Right */}
      <path
        d="M 920 360 Q 1040 360 1080 430"
        stroke="#E8722A"
        strokeWidth="4"
        strokeDasharray="10 8"
        fill="none"
        opacity="0.75"
      >
        <animate
          attributeName="stroke-dashoffset"
          from="0"
          to="24"
          dur="1s"
          repeatCount="indefinite"
        />
      </path>

      {/* ================= BOTTOM STATUS BAR ================= */}
      <g transform="translate(350, 980)">

        <rect
          x="0"
          y="30"
          width="860"
          height="52"
          rx="12"
          fill="#1a1a2e"
          opacity="0.96"
        />

        <circle
          cx="24"
          cy="56"
          r="7"
          fill="#10b981"
        />

        <text
          x="42"
          y="63"
          fill="#f3f4f6"
          fontSize="18"
          fontWeight="700"
        >
          Live Sync
        </text>

        <text
          x="210"
          y="63"
          fill="#f3f4f6"
          fontSize="18"
        >
          No Install
        </text>

        <text
          x="430"
          y="63"
          fill="#10b981"
          fontSize="18"
          fontWeight="700"
        >
          α = 1.000 ✓
        </text>

        <text
          x="620"
          y="63"
          fill="#f3f4f6"
          fontSize="18"
        >
          3 active users
        </text>

        <text
          x="770"
          y="63"
          fill="#10b981"
          fontSize="18"
          fontWeight="700"
        >
          0 conflicts
        </text>
      </g>

    </g>
  </svg>
</div>

          </div>
        </div>
      </section>

      <ContactFormModal open={openContact} onOpenChange={setOpenContact} />
    </>
  );
}
