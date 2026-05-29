export function AerospaceIllustration() {
  return (
    <svg viewBox="0 0 800 600" className="w-full h-full">
      <defs>
        <linearGradient id="aeroGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E8722A" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#E8722A" stopOpacity="0.05" />
        </linearGradient>

        <filter id="aeroGlow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Background */}
      <rect width="800" height="600" fill="url(#aeroGrad)" />

      {/* Aircraft schematic - simplified side view */}
      <g transform="translate(150, 80)">
        {/* Fuselage */}
        <ellipse
          cx="200"
          cy="100"
          rx="180"
          ry="35"
          fill="#f0f4f8"
          stroke="#E8722A"
          strokeWidth="2.5"
        />

        <rect
          x="20"
          y="65"
          width="360"
          height="70"
          fill="#f0f4f8"
          stroke="#E8722A"
          strokeWidth="2.5"
        />

        {/* Nose cone */}
        <path
          d="M 20 65 Q 0 100 20 135"
          fill="#f0f4f8"
          stroke="#E8722A"
          strokeWidth="2.5"
        />

        {/* Tail */}
        <path
          d="M 380 65 L 420 50 L 420 90 Z"
          fill="#f0f4f8"
          stroke="#E8722A"
          strokeWidth="2.5"
        />

        <path
          d="M 380 100 L 420 85 L 420 115 Z"
          fill="#f0f4f8"
          stroke="#E8722A"
          strokeWidth="2.5"
        />

        {/* Wing */}
        <ellipse
          cx="180"
          cy="135"
          rx="120"
          ry="15"
          fill="#e8f0f8"
          stroke="#E8722A"
          strokeWidth="2"
        />

        {/* Engines */}
        <ellipse
          cx="140"
          cy="160"
          rx="20"
          ry="30"
          fill="#f0f4f8"
          stroke="#E8722A"
          strokeWidth="2"
        />

        <ellipse
          cx="220"
          cy="160"
          rx="20"
          ry="30"
          fill="#f0f4f8"
          stroke="#E8722A"
          strokeWidth="2"
        />

        {/* Component labels */}
        <circle
          cx="100"
          cy="100"
          r="4"
          fill="#E8722A"
          filter="url(#aeroGlow)"
        />

        <circle
          cx="200"
          cy="100"
          r="4"
          fill="#E8722A"
          filter="url(#aeroGlow)"
        />

        <circle
          cx="300"
          cy="100"
          r="4"
          fill="#E8722A"
          filter="url(#aeroGlow)"
        />

        <circle
          cx="180"
          cy="135"
          r="4"
          fill="#E8722A"
          filter="url(#aeroGlow)"
        />
      </g>

      {/* Process flow diagram */}
      <g transform="translate(100, 320)">
        {/* PBS box */}
        <rect
          x="0"
          y="0"
          width="120"
          height="70"
          rx="6"
          fill="white"
          stroke="#E8722A"
          strokeWidth="2"
        />

        <text
          x="60"
          y="25"
          textAnchor="middle"
          fill="#E8722A"
          fontSize="16"
          fontWeight="700"
        >
          PBS
        </text>

        <text
          x="60"
          y="45"
          textAnchor="middle"
          fill="#6b5b8a"
          fontSize="14"
        >
          Product
        </text>

        <text
          x="60"
          y="62"
          textAnchor="middle"
          fill="#6b5b8a"
          fontSize="14"
        >
          Breakdown
        </text>

        {/* Arrow 1 */}
        <path
          d="M 125 35 L 165 35"
          stroke="#E8722A"
          strokeWidth="2.5"
        />

        <polygon
          points="165,35 157,32 157,38"
          fill="#E8722A"
        />

        {/* FMECA box */}
        <rect
          x="170"
          y="0"
          width="120"
          height="70"
          rx="6"
          fill="white"
          stroke="#E8722A"
          strokeWidth="2"
        />

        <text
          x="230"
          y="25"
          textAnchor="middle"
          fill="#E8722A"
          fontSize="16"
          fontWeight="700"
        >
          FMECA
        </text>

        <text
          x="230"
          y="45"
          textAnchor="middle"
          fill="#6b5b8a"
          fontSize="14"
        >
          Failure Mode
        </text>

        <text
          x="230"
          y="62"
          textAnchor="middle"
          fill="#6b5b8a"
          fontSize="14"
        >
          Analysis
        </text>

        {/* Arrow 2 */}
        <path
          d="M 295 35 L 335 35"
          stroke="#E8722A"
          strokeWidth="2.5"
        />

        <polygon
          points="335,35 327,32 327,38"
          fill="#E8722A"
        />

        {/* FTA box */}
        <rect
          x="340"
          y="0"
          width="120"
          height="70"
          rx="6"
          fill="white"
          stroke="#E8722A"
          strokeWidth="2"
        />

        <text
          x="400"
          y="25"
          textAnchor="middle"
          fill="#E8722A"
          fontSize="16"
          fontWeight="700"
        >
          FTA
        </text>

        <text
          x="400"
          y="45"
          textAnchor="middle"
          fill="#6b5b8a"
          fontSize="14"
        >
          Fault Tree
        </text>

        <text
          x="400"
          y="62"
          textAnchor="middle"
          fill="#6b5b8a"
          fontSize="14"
        >
          Analysis
        </text>

        {/* Arrow 3 */}
        <path
          d="M 465 35 L 505 35"
          stroke="#E8722A"
          strokeWidth="2.5"
        />

        <polygon
          points="505,35 497,32 497,38"
          fill="#E8722A"
        />

        {/* Certification box */}
        <rect
          x="510"
          y="0"
          width="140"
          height="70"
          rx="6"
          fill="#E8722A"
          stroke="#E8722A"
          strokeWidth="2"
        />

        <text
          x="580"
          y="30"
          textAnchor="middle"
          fill="white"
          fontSize="16"
          fontWeight="700"
        >
          CERTIFICATION
        </text>

        <text
          x="580"
          y="52"
          textAnchor="middle"
          fill="white"
          fontSize="14"
        >
          DO-178C / DO-254
        </text>
      </g>

      {/* Traceability lines connecting aircraft to process */}
      <path
        d="M 250 230 L 160 320"
        stroke="#E8722A"
        strokeWidth="1.5"
        strokeDasharray="4 4"
        opacity="0.4"
      />

      <path
        d="M 350 230 L 400 320"
        stroke="#E8722A"
        strokeWidth="1.5"
        strokeDasharray="4 4"
        opacity="0.4"
      />

      {/* Legend */}
      <g transform="translate(50, 480)">
        <text
          x="0"
          y="0"
          fill="#6b5b8a"
          fontSize="16"
          fontWeight="600"
        >
          Component-to-Certification Traceability
        </text>

        <circle
          cx="8"
          cy="25"
          r="3"
          fill="#E8722A"
        />

        <text
          x="18"
          y="30"
          fill="#6b5b8a"
          fontSize="14"
        >
          Critical components tracked through full certification lifecycle
        </text>
      </g>
    </svg>
  );
}