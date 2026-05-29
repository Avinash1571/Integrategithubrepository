export function AutomotiveIllustration() {
  return (
    <svg viewBox="0 0 800 600" className="w-full h-full">
      <defs>
        <linearGradient id="autoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.05" />
        </linearGradient>

        <filter id="autoGlow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <rect width="800" height="600" fill="url(#autoGrad)" />

      {/* Car side view */}
      <g transform="translate(120, 100)">
        {/* Car body */}
        <path
          d="M 50 120 L 80 80 L 200 80 L 250 120 L 450 120 L 480 140 L 480 180 L 50 180 Z"
          fill="#f0f4f8"
          stroke="#f59e0b"
          strokeWidth="2.5"
        />

        {/* Windows */}
        <path
          d="M 90 85 L 110 105 L 180 105 L 190 85 Z"
          fill="#e8f0f8"
          stroke="#f59e0b"
          strokeWidth="1.5"
        />

        <path
          d="M 210 85 L 220 105 L 310 105 L 320 85 Z"
          fill="#e8f0f8"
          stroke="#f59e0b"
          strokeWidth="1.5"
        />

        {/* Front and rear */}
        <rect
          x="450"
          y="120"
          width="30"
          height="60"
          rx="4"
          fill="#f0f4f8"
          stroke="#f59e0b"
          strokeWidth="2"
        />

        <rect
          x="20"
          y="120"
          width="30"
          height="60"
          rx="4"
          fill="#f0f4f8"
          stroke="#f59e0b"
          strokeWidth="2"
        />

        {/* Wheels */}
        <circle
          cx="130"
          cy="180"
          r="35"
          fill="#e8f0f8"
          stroke="#f59e0b"
          strokeWidth="3"
        />

        <circle
          cx="130"
          cy="180"
          r="20"
          fill="white"
          stroke="#f59e0b"
          strokeWidth="2"
        />

        <circle
          cx="400"
          cy="180"
          r="35"
          fill="#e8f0f8"
          stroke="#f59e0b"
          strokeWidth="3"
        />

        <circle
          cx="400"
          cy="180"
          r="20"
          fill="white"
          stroke="#f59e0b"
          strokeWidth="2"
        />

        {/* ADAS sensors */}
        <circle
          cx="475"
          cy="145"
          r="6"
          fill="#f59e0b"
          filter="url(#autoGlow)"
        />

        <text
          x="490"
          y="150"
          fill="#f59e0b"
          fontSize="14"
          fontWeight="600"
        >
          ADAS
        </text>

        {/* Powertrain marker */}
        <circle
          cx="265"
          cy="150"
          r="6"
          fill="#f59e0b"
          filter="url(#autoGlow)"
        />

        {/* Battery (EV) */}
        <rect
          x="180"
          y="165"
          width="180"
          height="12"
          rx="2"
          fill="#f59e0b"
          opacity="0.3"
        />

        <text
          x="270"
          y="193"
          textAnchor="middle"
          fill="#f59e0b"
          fontSize="14"
          fontWeight="600"
        >
          Battery Pack
        </text>
      </g>

      {/* ISO 26262 ASIL levels */}
      <g transform="translate(80, 340)">
        <text
          x="0"
          y="0"
          fill="#f59e0b"
          fontSize="16"
          fontWeight="700"
        >
          ISO 26262 ASIL Classification
        </text>

        {/* ASIL D */}
        <rect
          x="0"
          y="20"
          width="150"
          height="50"
          rx="6"
          fill="#dc2626"
          opacity="0.9"
        />

        <text
          x="75"
          y="42"
          textAnchor="middle"
          fill="white"
          fontSize="16"
          fontWeight="700"
        >
          ASIL D
        </text>

        <text
          x="75"
          y="60"
          textAnchor="middle"
          fill="white"
          fontSize="14"
        >
          Braking, Steering
        </text>

        {/* ASIL C */}
        <rect
          x="170"
          y="20"
          width="150"
          height="50"
          rx="6"
          fill="#f59e0b"
          opacity="0.9"
        />

        <text
          x="245"
          y="42"
          textAnchor="middle"
          fill="white"
          fontSize="16"
          fontWeight="700"
        >
          ASIL C
        </text>

        <text
          x="245"
          y="60"
          textAnchor="middle"
          fill="white"
          fontSize="14"
        >
          Airbag, ABS
        </text>

        {/* ASIL B */}
        <rect
          x="340"
          y="20"
          width="150"
          height="50"
          rx="6"
          fill="#fbbf24"
          opacity="0.9"
        />

        <text
          x="415"
          y="42"
          textAnchor="middle"
          fill="white"
          fontSize="16"
          fontWeight="700"
        >
          ASIL B
        </text>

        <text
          x="415"
          y="60"
          textAnchor="middle"
          fill="white"
          fontSize="14"
        >
          Headlights
        </text>

        {/* ASIL A */}
        <rect
          x="510"
          y="20"
          width="150"
          height="50"
          rx="6"
          fill="#86efac"
          opacity="0.9"
        />

        <text
          x="585"
          y="42"
          textAnchor="middle"
          fill="#1a1a2e"
          fontSize="16"
          fontWeight="700"
        >
          ASIL A
        </text>

        <text
          x="585"
          y="60"
          textAnchor="middle"
          fill="#1a1a2e"
          fontSize="14"
        >
          Tail lights
        </text>
      </g>

      {/* E/E Architecture */}
      <g transform="translate(100, 460)">
        <text
          x="0"
          y="0"
          fill="#6b5b8a"
          fontSize="16"
          fontWeight="600"
        >
          E/E Architecture Safety Analysis
        </text>

        {/* ECU 1 */}
        <rect
          x="0"
          y="15"
          width="70"
          height="40"
          rx="4"
          fill="white"
          stroke="#f59e0b"
          strokeWidth="1.5"
        />

        <text
          x="35"
          y="30"
          textAnchor="middle"
          fill="#f59e0b"
          fontSize="14"
          fontWeight="600"
        >
          ECU 1
        </text>

        <text
          x="35"
          y="46"
          textAnchor="middle"
          fill="#6b5b8a"
          fontSize="12"
        >
          Powertrain
        </text>

        {/* ECU 2 */}
        <rect
          x="100"
          y="15"
          width="70"
          height="40"
          rx="4"
          fill="white"
          stroke="#f59e0b"
          strokeWidth="1.5"
        />

        <text
          x="135"
          y="30"
          textAnchor="middle"
          fill="#f59e0b"
          fontSize="14"
          fontWeight="600"
        >
          ECU 2
        </text>

        <text
          x="135"
          y="46"
          textAnchor="middle"
          fill="#6b5b8a"
          fontSize="12"
        >
          Chassis
        </text>

        {/* ECU 3 */}
        <rect
          x="200"
          y="15"
          width="70"
          height="40"
          rx="4"
          fill="white"
          stroke="#f59e0b"
          strokeWidth="1.5"
        />

        <text
          x="235"
          y="30"
          textAnchor="middle"
          fill="#f59e0b"
          fontSize="14"
          fontWeight="600"
        >
          ECU 3
        </text>

        <text
          x="235"
          y="46"
          textAnchor="middle"
          fill="#6b5b8a"
          fontSize="12"
        >
          ADAS
        </text>

        {/* ECU 4 */}
        <rect
          x="300"
          y="15"
          width="70"
          height="40"
          rx="4"
          fill="white"
          stroke="#f59e0b"
          strokeWidth="1.5"
        />

        <text
          x="335"
          y="30"
          textAnchor="middle"
          fill="#f59e0b"
          fontSize="14"
          fontWeight="600"
        >
          ECU 4
        </text>

        <text
          x="335"
          y="46"
          textAnchor="middle"
          fill="#6b5b8a"
          fontSize="12"
        >
          Body
        </text>

        {/* CAN bus */}
        <line
          x1="0"
          y1="70"
          x2="370"
          y2="70"
          stroke="#f59e0b"
          strokeWidth="2"
        />

        <text
          x="400"
          y="75"
          fill="#f59e0b"
          fontSize="14"
          fontWeight="600"
        >
          CAN Bus
        </text>

        {/* Connections */}
        <line x1="35" y1="55" x2="35" y2="70" stroke="#f59e0b" strokeWidth="1.5" />
        <line x1="135" y1="55" x2="135" y2="70" stroke="#f59e0b" strokeWidth="1.5" />
        <line x1="235" y1="55" x2="235" y2="70" stroke="#f59e0b" strokeWidth="1.5" />
        <line x1="335" y1="55" x2="335" y2="70" stroke="#f59e0b" strokeWidth="1.5" />
      </g>

      {/* Traceability arrows */}
      <path
        d="M 400 260 L 300 340"
        stroke="#f59e0b"
        strokeWidth="1.5"
        strokeDasharray="4 4"
        opacity="0.4"
      />

      <path
        d="M 385 260 L 420 340"
        stroke="#f59e0b"
        strokeWidth="1.5"
        strokeDasharray="4 4"
        opacity="0.4"
      />
    </svg>
  );
}