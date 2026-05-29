export function ElectronicsIllustration() {
  return (
    <div className="w-full overflow-hidden bg-[#F1FBFC] leading-none">
      <svg
        viewBox="0 0 1000 1000"
        className="block w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="elecGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.06" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.02" />
          </linearGradient>

          <filter id="elecGlow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Full Background */}
        <rect width="1000" height="500" fill="url(#elecGrad)" />

        {/* ================================================= */}
        {/* LEFT PCB */}
        {/* ================================================= */}
        <g transform="translate(45,35)">
          <text
            x="0"
            y="0"
            fill="#06b6d4"
            fontSize="18"
            fontWeight="700"
          >
            PCB Assembly - Component Level
          </text>

          {/* PCB */}
          <rect
            x="0"
            y="30"
            width="420"
            height="250"
            rx="12"
            fill="white"
            fillOpacity="0.35"
            stroke="#06b6d4"
            strokeWidth="3"
          />

          {/* Traces */}
          {[80, 130, 180, 230].map((y) => (
            <path
              key={y}
              d={`M 40 ${y} L 380 ${y}`}
              stroke="#06b6d4"
              strokeWidth="2"
              opacity="0.15"
            />
          ))}

          {[110, 210, 310].map((x) => (
            <path
              key={x}
              d={`M ${x} 50 L ${x} 260`}
              stroke="#06b6d4"
              strokeWidth="2"
              opacity="0.15"
            />
          ))}

          {/* MCU */}
          <rect
            x="165"
            y="105"
            width="115"
            height="115"
            rx="10"
            fill="white"
            stroke="#06b6d4"
            strokeWidth="4"
          />

          <text
            x="222"
            y="150"
            textAnchor="middle"
            fill="#06b6d4"
            fontSize="22"
            fontWeight="700"
          >
            MCU
          </text>

          <text
            x="222"
            y="178"
            textAnchor="middle"
            fill="#6b5b8a"
            fontSize="13"
          >
            STM32F4
          </text>

          <circle
            cx="222"
            cy="195"
            r="9"
            fill="#06b6d4"
            filter="url(#elecGlow)"
          />

          <text
            x="222"
            y="220"
            textAnchor="middle"
            fill="#6b5b8a"
            fontSize="13"
          >
            λ = 1.2e-6
          </text>

          {/* VREG */}
          <rect
            x="60"
            y="70"
            width="65"
            height="40"
            rx="4"
            fill="white"
            stroke="#06b6d4"
            strokeWidth="2"
          />

          <text
            x="92"
            y="88"
            textAnchor="middle"
            fill="#06b6d4"
            fontSize="10"
            fontWeight="700"
          >
            VREG
          </text>

          <text
            x="92"
            y="102"
            textAnchor="middle"
            fill="#6b5b8a"
            fontSize="8"
          >
            5V/3.3V
          </text>

          <circle
            cx="92"
            cy="88"
            r="5"
            fill="#dc2626"
            filter="url(#elecGlow)"
          />

          {/* Capacitors */}
          <circle
            cx="340"
            cy="88"
            r="14"
            fill="white"
            stroke="#06b6d4"
            strokeWidth="2"
          />

          <text
            x="340"
            y="92"
            textAnchor="middle"
            fill="#06b6d4"
            fontSize="10"
            fontWeight="700"
          >
            C1
          </text>

          <circle
            cx="390"
            cy="88"
            r="14"
            fill="white"
            stroke="#06b6d4"
            strokeWidth="2"
          />

          <text
            x="390"
            y="92"
            textAnchor="middle"
            fill="#06b6d4"
            fontSize="10"
            fontWeight="700"
          >
            C2
          </text>

          {/* R Array */}
          <rect
            x="40"
            y="200"
            width="80"
            height="28"
            rx="4"
            fill="white"
            stroke="#06b6d4"
            strokeWidth="2"
          />

          <text
            x="80"
            y="218"
            textAnchor="middle"
            fill="#06b6d4"
            fontSize="10"
            fontWeight="700"
          >
            R Array
          </text>

          {/* XTAL */}
          <rect
            x="325"
            y="190"
            width="52"
            height="36"
            rx="4"
            fill="white"
            stroke="#06b6d4"
            strokeWidth="2"
          />

          <text
            x="351"
            y="205"
            textAnchor="middle"
            fill="#06b6d4"
            fontSize="9"
            fontWeight="700"
          >
            XTAL
          </text>

          <text
            x="351"
            y="219"
            textAnchor="middle"
            fill="#6b5b8a"
            fontSize="8"
          >
            8MHz
          </text>

          <circle
            cx="222"
            cy="168"
            r="6"
            fill="#f59e0b"
            filter="url(#elecGlow)"
          />
        </g>

        {/* ================================================= */}
        {/* RIGHT TRACEABILITY */}
        {/* ================================================= */}
        <g transform="translate(550,40)">
          <text
            x="0"
            y="0"
            fill="#06b6d4"
            fontSize="18"
            fontWeight="700"
          >
            Component → System Traceability
          </text>

          {[
            {
              y: 35,
              title: "BOM-Level FMEA",
              t1: "VREG overvoltage",
              t2: "RPN: 240",
              active: false,
            },
            {
              y: 135,
              title: "PCB-Level FTA",
              t1: "Power rail failure",
              t2: "λ = 3.2e-5 /h",
              active: false,
            },
            {
              y: 235,
              title: "System Safety",
              t1: "MCU reset event",
              t2: "IEC 61508 SIL 2",
              active: true,
            },
          ].map((item, index) => (
            <g key={item.title}>
              <rect
                x="0"
                y={item.y}
                width="250"
                height="70"
                rx="12"
                fill={item.active ? "#06b6d4" : "white"}
                stroke="#06b6d4"
                strokeWidth="3"
              />

              <text
                x="125"
                y={item.y + 25}
                textAnchor="middle"
                fill={item.active ? "white" : "#06b6d4"}
                fontSize="16"
                fontWeight="700"
              >
                {item.title}
              </text>

              <text
                x="125"
                y={item.y + 45}
                textAnchor="middle"
                fill={item.active ? "white" : "#6b5b8a"}
                fontSize="12"
              >
                {item.t1}
              </text>

              <text
                x="125"
                y={item.y + 60}
                textAnchor="middle"
                fill={item.active ? "white" : "#6b5b8a"}
                fontSize="12"
              >
                {item.t2}
              </text>

              {index < 2 && (
                <>
                  <path
                    d={`M 125 ${item.y + 70} L 125 ${item.y + 95}`}
                    stroke="#06b6d4"
                    strokeWidth="4"
                  />

                  <polygon
                    points={`125,${item.y + 95} 118,${
                      item.y + 82
                    } 132,${item.y + 82}`}
                    fill="#06b6d4"
                  />
                </>
              )}
            </g>
          ))}
        </g>

        {/* ================================================= */}
        {/* SIL TABLE */}
        {/* ================================================= */}
        <g transform="translate(45,330)">
          <text
            x="0"
            y="0"
            fill="#06b6d4"
            fontSize="18"
            fontWeight="700"
          >
            IEC 61508 SIL Classification
          </text>

          <rect
            x="0"
            y="25"
            width="900"
            height="95"
            rx="12"
            fill="white"
            stroke="#06b6d4"
            strokeWidth="3"
          />

          {/* Headers */}
          {[
            { x: 25, label: "SIL Level" },
            { x: 220, label: "PFD Range" },
            { x: 470, label: "RRF Range" },
            { x: 710, label: "System Example" },
          ].map((item) => (
            <text
              key={item.label}
              x={item.x}
              y="55"
              fill="#06b6d4"
              fontSize="15"
              fontWeight="700"
            >
              {item.label}
            </text>
          ))}

          <line
            x1="20"
            y1="68"
            x2="880"
            y2="68"
            stroke="#06b6d4"
            strokeWidth="1.5"
            opacity="0.25"
          />

          {/* SIL 4 */}
          <rect x="25" y="84" width="58" height="26" rx="6" fill="#dc2626" />

          <text
            x="54"
            y="102"
            textAnchor="middle"
            fill="white"
            fontSize="12"
            fontWeight="700"
          >
            SIL 4
          </text>

          <text x="220" y="101" fill="#6b5b8a" fontSize="13">
            10⁻⁵ to 10⁻⁴
          </text>

          <text x="470" y="101" fill="#6b5b8a" fontSize="13">
            100,000 to 10,000
          </text>

          <text x="710" y="101" fill="#6b5b8a" fontSize="13">
            Nuclear plant safety
          </text>
        </g>

        {/* ================================================= */}
        {/* FOOTER */}
        {/* ================================================= */}
        <g transform="translate(45,455)">
          <rect
            x="0"
            y="0"
            width="900"
            height="28"
            rx="8"
            fill="#06b6d4"
            opacity="0.08"
            stroke="#06b6d4"
            strokeWidth="1"
          />

          <text
            x="20"
            y="18"
            fill="#06b6d4"
            fontSize="12"
            fontWeight="700"
          >
            Full BOM-to-Failure Traceability
          </text>

          <text x="310" y="18" fill="#6b5b8a" fontSize="11">
            Component: VREG-TI-7805
          </text>

          <text x="560" y="18" fill="#6b5b8a" fontSize="11">
            Failure Mode: Overvoltage
          </text>

          <text x="810" y="18" fill="#6b5b8a" fontSize="11">
            IEC-61508 Rev3
          </text>
        </g>

        {/* Dashed Trace Lines */}
        <path
          d="M 300 170 L 550 105"
          stroke="#06b6d4"
          strokeWidth="2"
          strokeDasharray="8 8"
          opacity="0.35"
        />

        <path
          d="M 395 255 L 550 310"
          stroke="#06b6d4"
          strokeWidth="2"
          strokeDasharray="8 8"
          opacity="0.35"
        />
      </svg>
    </div>
  );
}