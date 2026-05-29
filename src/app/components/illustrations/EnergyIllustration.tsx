export function EnergyIllustration() {
  return (
    <svg viewBox="0 0 800 600" className="w-full h-full">
      <defs>
        <linearGradient id="energyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.05" />
        </linearGradient>

        <filter id="energyGlow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Background */}
      <rect width="800" height="600" fill="url(#energyGrad)" />

      {/* Main Illustration shifted to center */}
      <g transform="translate(60, 25) scale(0.85)">
        {/* Wind Turbine */}
        <g transform="translate(80, 70)">
          <rect
            x="85"
            y="100"
            width="10"
            height="120"
            fill="#f0f4f8"
            stroke="#8b5cf6"
            strokeWidth="2"
          />

          <circle
            cx="90"
            cy="95"
            r="15"
            fill="white"
            stroke="#8b5cf6"
            strokeWidth="2"
          />

          {/* Blades */}
          <path
            d="M 90 95 L 90 30"
            stroke="#8b5cf6"
            strokeWidth="3"
            fill="none"
          />

          <ellipse
            cx="90"
            cy="15"
            rx="8"
            ry="15"
            fill="#e8f0f8"
            stroke="#8b5cf6"
            strokeWidth="2"
          />

          <path
            d="M 90 95 L 140 140"
            stroke="#8b5cf6"
            strokeWidth="3"
            fill="none"
          />

          <ellipse
            cx="150"
            cy="150"
            rx="15"
            ry="8"
            fill="#e8f0f8"
            stroke="#8b5cf6"
            strokeWidth="2"
            transform="rotate(55 150 150)"
          />

          <path
            d="M 90 95 L 40 140"
            stroke="#8b5cf6"
            strokeWidth="3"
            fill="none"
          />

          <ellipse
            cx="30"
            cy="150"
            rx="15"
            ry="8"
            fill="#e8f0f8"
            stroke="#8b5cf6"
            strokeWidth="2"
            transform="rotate(-55 30 150)"
          />
        </g>

        {/* Solar Array */}
        <g transform="translate(240, 75)">
          {[0, 70].map((x, i) => (
            <g key={`top-${i}`}>
              <rect
                x={x}
                y="120"
                width="60"
                height="35"
                rx="3"
                fill="#e8f0f8"
                stroke="#8b5cf6"
                strokeWidth="2"
              />
              <line
                x1={x + 20}
                y1="120"
                x2={x + 20}
                y2="155"
                stroke="#8b5cf6"
                strokeWidth="1"
                opacity="0.5"
              />
              <line
                x1={x + 40}
                y1="120"
                x2={x + 40}
                y2="155"
                stroke="#8b5cf6"
                strokeWidth="1"
                opacity="0.5"
              />
            </g>
          ))}

          {[0, 70].map((x, i) => (
            <g key={`bottom-${i}`}>
              <rect
                x={x}
                y="165"
                width="60"
                height="35"
                rx="3"
                fill="#e8f0f8"
                stroke="#8b5cf6"
                strokeWidth="2"
              />
              <line
                x1={x + 20}
                y1="165"
                x2={x + 20}
                y2="200"
                stroke="#8b5cf6"
                strokeWidth="1"
                opacity="0.5"
              />
              <line
                x1={x + 40}
                y1="165"
                x2={x + 40}
                y2="200"
                stroke="#8b5cf6"
                strokeWidth="1"
                opacity="0.5"
              />
            </g>
          ))}

          <text
            x="65"
            y="230"
            textAnchor="middle"
            fill="#8b5cf6"
            fontSize="16"
            fontWeight="700"
          >
            Solar
          </text>
        </g>

        {/* Transmission */}
        <g transform="translate(450, 70)">
          <path
            d="M 50 200 L 50 80 M 30 120 L 70 120 M 35 160 L 65 160"
            stroke="#8b5cf6"
            strokeWidth="3"
            fill="none"
          />

          <circle cx="30" cy="120" r="4" fill="#8b5cf6" />
          <circle cx="70" cy="120" r="4" fill="#8b5cf6" />

          <path
            d="M 30 120 Q 0 125 -20 120"
            stroke="#8b5cf6"
            strokeWidth="2"
            fill="none"
          />

          <path
            d="M 70 120 Q 100 125 120 120"
            stroke="#8b5cf6"
            strokeWidth="2"
            fill="none"
          />

          <text
            x="50"
            y="230"
            textAnchor="middle"
            fill="#8b5cf6"
            fontSize="16"
            fontWeight="700"
          >
            Transmission
          </text>
        </g>

        {/* Substation */}
        <g transform="translate(620, 120)">
          <rect
            x="0"
            y="0"
            width="80"
            height="80"
            rx="6"
            fill="#f0f4f8"
            stroke="#8b5cf6"
            strokeWidth="2"
          />

          <circle
            cx="40"
            cy="40"
            r="20"
            fill="white"
            stroke="#8b5cf6"
            strokeWidth="2"
          />

          <path
            d="M 40 25 L 40 55 M 25 40 L 55 40"
            stroke="#8b5cf6"
            strokeWidth="2"
          />

          <text
            x="40"
            y="105"
            textAnchor="middle"
            fill="#8b5cf6"
            fontSize="16"
            fontWeight="700"
          >
            Substation
          </text>
        </g>

        {/* Grid connections */}
        <path
          d="M 180 200 L 240 200"
          stroke="#8b5cf6"
          strokeWidth="2.5"
          strokeDasharray="5 5"
        />

        <path
          d="M 370 200 L 450 200"
          stroke="#8b5cf6"
          strokeWidth="2.5"
          strokeDasharray="5 5"
        />

        <path
          d="M 570 200 L 620 180"
          stroke="#8b5cf6"
          strokeWidth="2.5"
          strokeDasharray="5 5"
        />

        {/* Asset Criticality Ranking */}
        <g transform="translate(60, 290)">
          <text
            x="10"
            y="15"
            fill="#8b5cf6"
            fontSize="16"
            fontWeight="700"
          >
            Asset Criticality Ranking
          </text>

          {[
            {
              x: 0,
              title: "CRITICAL",
              name: "Transmission Hub A",
              meta: "MTTR: 2.5h | Impact: 45MW",
              color: "#dc2626",
              num: 1,
            },
            {
              x: 230,
              title: "HIGH",
              name: "Wind Farm Controller",
              meta: "MTTR: 4h | Impact: 28MW",
              color: "#f59e0b",
              num: 2,
            },
            {
              x: 460,
              title: "MEDIUM",
              name: "Solar Inverter Bank",
              meta: "MTTR: 8h | Impact: 12MW",
              color: "#fbbf24",
              num: 3,
            },
          ].map((card) => (
            <g key={card.num}>
              <rect
                x={card.x}
                y="30"
                width="210"
                height="70"
                rx="8"
                fill={card.color}
                opacity="0.92"
              />

              <text
                x={card.x + 18}
                y="55"
                fill="white"
                fontSize="16"
                fontWeight="700"
              >
                {card.title}
              </text>

              <text
                x={card.x + 18}
                y="75"
                fill="white"
                fontSize="14"
              >
                {card.name}
              </text>

              <text
                x={card.x + 18}
                y="92"
                fill="white"
                fontSize="12"
              >
                {card.meta}
              </text>

              <circle
                cx={card.x + 185}
                cy="63"
                r="10"
                fill="white"
                opacity="0.3"
              />

              <text
                x={card.x + 185}
                y="68"
                textAnchor="middle"
                fill="white"
                fontSize="12"
                fontWeight="700"
              >
                {card.num}
              </text>
            </g>
          ))}
        </g>

        {/* Fault Tree Analysis */}
        <g transform="translate(70, 420)">
          <text
            x="0"
            y="0"
            fill="#6b5b8a"
            fontSize="16"
            fontWeight="700"
          >
            Protection System Fault Tree Analysis
          </text>

          {/* Top Event */}
          <rect
            x="180"
            y="20"
            width="170"
            height="50"
            rx="6"
            fill="white"
            stroke="#8b5cf6"
            strokeWidth="2"
          />

          <text
            x="265"
            y="42"
            textAnchor="middle"
            fill="#8b5cf6"
            fontSize="14"
            fontWeight="700"
          >
            Grid Blackout
          </text>

          <text
            x="265"
            y="60"
            textAnchor="middle"
            fill="#6b5b8a"
            fontSize="12"
          >
            λ = 2.3e-4 /yr
          </text>

          {/* OR Gate */}
          <path d="M 265 70 L 265 88" stroke="#8b5cf6" strokeWidth="2" />

          <path d="M 255 88 Q 265 98 275 88 Z" fill="#8b5cf6" />

          <text
            x="265"
            y="112"
            textAnchor="middle"
            fill="#8b5cf6"
            fontSize="12"
            fontWeight="700"
          >
            OR
          </text>

          {/* Branch Lines */}
          <path
            d="M 265 118 L 265 130 M 265 130 L 90 130 L 90 145"
            stroke="#8b5cf6"
            strokeWidth="1.5"
          />

          <path
            d="M 265 130 L 265 145"
            stroke="#8b5cf6"
            strokeWidth="1.5"
          />

          <path
            d="M 265 130 L 440 130 L 440 145"
            stroke="#8b5cf6"
            strokeWidth="1.5"
          />

          {[
            {
              x: 30,
              title: "Relay Failure",
              rate: "λ = 1.2e-4 /yr",
            },
            {
              x: 205,
              title: "Breaker Fault",
              rate: "λ = 8.5e-5 /yr",
            },
            {
              x: 380,
              title: "SCADA Error",
              rate: "λ = 3.1e-5 /yr",
            },
          ].map((item) => (
            <g key={item.title}>
              <rect
                x={item.x}
                y="145"
                width="120"
                height="45"
                rx="6"
                fill="white"
                stroke="#8b5cf6"
                strokeWidth="1.5"
              />

              <text
                x={item.x + 60}
                y="164"
                textAnchor="middle"
                fill="#8b5cf6"
                fontSize="14"
                fontWeight="700"
              >
                {item.title}
              </text>

              <text
                x={item.x + 60}
                y="180"
                textAnchor="middle"
                fill="#6b5b8a"
                fontSize="12"
              >
                {item.rate}
              </text>
            </g>
          ))}
        </g>

        {/* Traceability */}
        <path
          d="M 640 200 L 420 290"
          stroke="#8b5cf6"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          opacity="0.4"
        />

        <path
          d="M 180 235 L 150 290"
          stroke="#8b5cf6"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          opacity="0.4"
        />
      </g>
    </svg>
  );
}