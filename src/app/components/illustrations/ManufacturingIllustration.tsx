export function ManufacturingIllustration() {
  return (
    <svg viewBox="0 0 1000 750" className="w-full h-full">
      <defs>
        <linearGradient id="mfgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4682B4" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#4682B4" stopOpacity="0.03" />
        </linearGradient>

        <filter id="mfgGlow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Background */}
      <rect width="1000" height="750" fill="url(#mfgGrad)" />

      {/* Main Wrapper */}
      <g transform="translate(50,115) scale(0.95)">

        {/* ===================================================== */}
        {/* Production Line */}
        {/* ===================================================== */}
        <g transform="translate(0,0)">
          <text
            x="0"
            y="0"
            fill="#4682B4"
            fontSize="20"
            fontWeight="700"
          >
            Production Line Overview
          </text>

          {/* Conveyor */}
          <rect
            x="0"
            y="58"
            width="900"
            height="8"
            fill="#e8f0f8"
            stroke="#4682B4"
            strokeWidth="2"
          />

          <rect
            x="0"
            y="142"
            width="900"
            height="8"
            fill="#e8f0f8"
            stroke="#4682B4"
            strokeWidth="2"
          />

          {[
            {
              x: 20,
              title: "STAMPING",
              mtbf: "MTBF: 2400h",
              avail: "Avail: 94%",
            },
            {
              x: 195,
              title: "WELDING",
              mtbf: "MTBF: 1850h",
              avail: "Avail: 87%",
              danger: true,
            },
            {
              x: 370,
              title: "ASSEMBLY",
              mtbf: "MTBF: 3200h",
              avail: "Avail: 96%",
            },
            {
              x: 545,
              title: "INSPECTION",
              mtbf: "MTBF: 4500h",
              avail: "Avail: 99%",
            },
            {
              x: 720,
              title: "PACKAGING",
              mtbf: "MTBF: 5200h",
              avail: "Avail: 98%",
            },
          ].map((station, idx) => (
            <g key={station.title}>
              <rect
                x={station.x}
                y="18"
                width="120"
                height="130"
                rx="10"
                fill="white"
                stroke="#4682B4"
                strokeWidth="3"
              />

              {/* Title */}
              <text
                x={station.x + 60}
                y="48"
                textAnchor="middle"
                fill="#4682B4"
                fontSize="13"
                fontWeight="700"
              >
                {station.title}
              </text>

              {/* Icons */}
              {idx === 0 && (
                <>
                  <circle
                    cx={station.x + 60}
                    cy="88"
                    r="25"
                    fill="#e8f0f8"
                    stroke="#4682B4"
                    strokeWidth="3"
                  />
                  <path
                    d={`M ${station.x + 60} 63 L ${
                      station.x + 60
                    } 113 M ${station.x + 35} 88 L ${
                      station.x + 85
                    } 88`}
                    stroke="#4682B4"
                    strokeWidth="3"
                  />
                </>
              )}

              {idx === 1 && (
                <>
                  <path
                    d={`M ${station.x + 40} 72 L ${
                      station.x + 80
                    } 104 M ${station.x + 40} 104 L ${
                      station.x + 80
                    } 72`}
                    stroke="#4682B4"
                    strokeWidth="5"
                  />
                  <circle
                    cx={station.x + 60}
                    cy="88"
                    r="6"
                    fill="#f59e0b"
                    filter="url(#mfgGlow)"
                  />
                </>
              )}

              {idx === 2 && (
                <>
                  <rect
                    x={station.x + 37}
                    y="72"
                    width="46"
                    height="32"
                    rx="4"
                    fill="#e8f0f8"
                    stroke="#4682B4"
                    strokeWidth="3"
                  />
                  <circle
                    cx={station.x + 48}
                    cy="88"
                    r="4"
                    fill="#4682B4"
                  />
                  <circle
                    cx={station.x + 72}
                    cy="88"
                    r="4"
                    fill="#4682B4"
                  />
                </>
              )}

              {idx === 3 && (
                <>
                  <circle
                    cx={station.x + 60}
                    cy="88"
                    r="25"
                    fill="white"
                    stroke="#4682B4"
                    strokeWidth="3"
                  />
                  <circle
                    cx={station.x + 60}
                    cy="88"
                    r="16"
                    fill="white"
                    stroke="#4682B4"
                    strokeWidth="3"
                  />
                  <circle
                    cx={station.x + 60}
                    cy="88"
                    r="7"
                    fill="#4682B4"
                  />
                </>
              )}

              {idx === 4 && (
                <>
                  <rect
                    x={station.x + 38}
                    y="70"
                    width="44"
                    height="36"
                    rx="4"
                    fill="#e8f0f8"
                    stroke="#4682B4"
                    strokeWidth="3"
                  />
                  <path
                    d={`M ${station.x + 38} 88 L ${
                      station.x + 82
                    } 88`}
                    stroke="#4682B4"
                    strokeWidth="3"
                  />
                </>
              )}

              {/* Text */}
              <text
                x={station.x + 60}
                y="123"
                textAnchor="middle"
                fill="#6b5b8a"
                fontSize="11"
                fontWeight="500"
              >
                {station.mtbf}
              </text>

              <text
                x={station.x + 60}
                y="138"
                textAnchor="middle"
                fill={station.danger ? "#dc2626" : "#6b5b8a"}
                fontSize="11"
                fontWeight={station.danger ? "700" : "500"}
              >
                {station.avail}
              </text>
            </g>
          ))}
        </g>

        {/* ===================================================== */}
        {/* Failure Propagation */}
        {/* ===================================================== */}
        <g transform="translate(0,220)">
          <text
            x="0"
            y="0"
            fill="#4682B4"
            fontSize="20"
            fontWeight="700"
          >
            Failure Propagation Cascade
          </text>

          {[
            {
              x: 0,
              title: "Welding Robot Servo",
              status: "FAILED",
              desc: "λ = 3.2e-3 /h",
              color: "#dc2626",
            },
            {
              x: 220,
              title: "Welding Station",
              status: "DEGRADED",
              desc: "Throughput: 45%",
              color: "#f59e0b",
            },
            {
              x: 440,
              title: "Production Line",
              status: "BOTTLENECK",
              desc: "Output: 52%",
              color: "#dc2626",
            },
          ].map((item) => (
            <g key={item.title}>
              <rect
                x={item.x}
                y="40"
                width="160"
                height="85"
                rx="10"
                fill="white"
                stroke="#4682B4"
                strokeWidth="3"
              />

              <text
                x={item.x + 80}
                y="65"
                textAnchor="middle"
                fill="#4682B4"
                fontSize="13"
                fontWeight="700"
              >
                {item.title}
              </text>

              <text
                x={item.x + 80}
                y="90"
                textAnchor="middle"
                fill={item.color}
                fontSize="12"
                fontWeight="700"
              >
                {item.status}
              </text>

              <text
                x={item.x + 80}
                y="110"
                textAnchor="middle"
                fill="#6b5b8a"
                fontSize="11"
              >
                {item.desc}
              </text>
            </g>
          ))}

          {/* Arrows */}
          <path d="M 160 82 L 220 82" stroke="#dc2626" strokeWidth="4" />
          <polygon points="220,82 206,75 206,89" fill="#dc2626" />

          <path d="M 380 82 L 440 82" stroke="#f59e0b" strokeWidth="4" />
          <polygon points="440,82 426,75 426,89" fill="#f59e0b" />

          <path d="M 600 82 L 670 82" stroke="#dc2626" strokeWidth="4" />
          <polygon points="670,82 656,75 656,89" fill="#dc2626" />

          {/* Final Box */}
          <rect
            x="670"
            y="40"
            width="190"
            height="85"
            rx="10"
            fill="#dc2626"
          />

          <text
            x="765"
            y="65"
            textAnchor="middle"
            fill="white"
            fontSize="14"
            fontWeight="700"
          >
            Plant Availability
          </text>

          <text
            x="765"
            y="90"
            textAnchor="middle"
            fill="white"
            fontSize="12"
            fontWeight="700"
          >
            87% (Target: 95%)
          </text>

          <text
            x="765"
            y="110"
            textAnchor="middle"
            fill="white"
            fontSize="11"
          >
            Loss: $42k/day
          </text>
        </g>

        {/* ===================================================== */}
        {/* RBD */}
        {/* ===================================================== */}
        <g transform="translate(0,430)">
          <text
            x="0"
            y="0"
            fill="#4682B4"
            fontSize="20"
            fontWeight="700"
          >
            Reliability Block Diagram (RBD)
          </text>

          <text
            x="0"
            y="28"
            fill="#6b5b8a"
            fontSize="13"
          >
            Series Configuration:
          </text>

          {[
            { x: 0, label: "Stamping", value: "R = 0.94" },
            {
              x: 145,
              label: "Welding",
              value: "R = 0.87 ⚠",
              critical: true,
            },
            { x: 290, label: "Assembly", value: "R = 0.96" },
            { x: 435, label: "Inspection", value: "R = 0.99" },
            { x: 580, label: "Packaging", value: "R = 0.98" },
          ].map((block, idx) => (
            <g key={block.label}>
              <rect
                x={block.x}
                y="48"
                width="105"
                height="55"
                rx="8"
                fill={block.critical ? "#fef2f2" : "white"}
                stroke={block.critical ? "#dc2626" : "#4682B4"}
                strokeWidth={block.critical ? "3" : "2.5"}
              />

              <text
                x={block.x + 52.5}
                y="70"
                textAnchor="middle"
                fill={block.critical ? "#dc2626" : "#4682B4"}
                fontSize="13"
                fontWeight="700"
              >
                {block.label}
              </text>

              <text
                x={block.x + 52.5}
                y="88"
                textAnchor="middle"
                fill={block.critical ? "#dc2626" : "#6b5b8a"}
                fontSize="11"
              >
                {block.value}
              </text>

              {idx < 4 && (
                <>
                  <path
                    d={`M ${block.x + 105} 76 L ${block.x + 145} 76`}
                    stroke="#4682B4"
                    strokeWidth="3"
                  />
                  <polygon
                    points={`${block.x + 145},76 ${
                      block.x + 132
                    },70 ${block.x + 132},82`}
                    fill="#4682B4"
                  />
                </>
              )}
            </g>
          ))}

          {/* Final Reliability Box */}
          <rect
            x="740"
            y="48"
            width="140"
            height="55"
            rx="8"
            fill="#4682B4"
          />

          <text
            x="810"
            y="70"
            textAnchor="middle"
            fill="white"
            fontSize="13"
            fontWeight="700"
          >
            System R
          </text>

          <text
            x="810"
            y="88"
            textAnchor="middle"
            fill="white"
            fontSize="16"
            fontWeight="700"
          >
            0.776
          </text>
        </g>
      </g>
    </svg>
  );
}