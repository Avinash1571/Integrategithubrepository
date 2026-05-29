export function RailwaysIllustration() {
  return (
    <svg viewBox="0 0 800 600" className="w-full h-full">
      <defs>
        <linearGradient id="railGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10b981" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#10b981" stopOpacity="0.05" />
        </linearGradient>
      </defs>

      <rect width="800" height="600" fill="url(#railGrad)" />

      {/* Train */}
      <g transform="translate(100, 80)">
        {/* Locomotive */}
        <rect
          x="0"
          y="50"
          width="140"
          height="100"
          rx="8"
          fill="#f0f4f8"
          stroke="#10b981"
          strokeWidth="2.5"
        />

        <rect
          x="10"
          y="65"
          width="50"
          height="35"
          rx="4"
          fill="#e8f0f8"
          stroke="#10b981"
          strokeWidth="1.5"
        />

        <rect
          x="75"
          y="65"
          width="50"
          height="35"
          rx="4"
          fill="#e8f0f8"
          stroke="#10b981"
          strokeWidth="1.5"
        />

        {/* Pantograph */}
        <path
          d="M 50 50 L 40 20 M 90 50 L 100 20 M 40 20 L 100 20"
          stroke="#10b981"
          strokeWidth="2"
          fill="none"
        />

        {/* Car 1 */}
        <rect
          x="160"
          y="50"
          width="140"
          height="100"
          rx="8"
          fill="#f0f4f8"
          stroke="#10b981"
          strokeWidth="2.5"
        />

        <rect
          x="170"
          y="65"
          width="40"
          height="35"
          rx="4"
          fill="#e8f0f8"
          stroke="#10b981"
          strokeWidth="1.5"
        />

        <rect
          x="220"
          y="65"
          width="40"
          height="35"
          rx="4"
          fill="#e8f0f8"
          stroke="#10b981"
          strokeWidth="1.5"
        />

        <rect
          x="270"
          y="65"
          width="20"
          height="35"
          rx="4"
          fill="#e8f0f8"
          stroke="#10b981"
          strokeWidth="1.5"
        />

        {/* Car 2 */}
        <rect
          x="320"
          y="50"
          width="140"
          height="100"
          rx="8"
          fill="#f0f4f8"
          stroke="#10b981"
          strokeWidth="2.5"
        />

        <rect
          x="330"
          y="65"
          width="40"
          height="35"
          rx="4"
          fill="#e8f0f8"
          stroke="#10b981"
          strokeWidth="1.5"
        />

        <rect
          x="380"
          y="65"
          width="40"
          height="35"
          rx="4"
          fill="#e8f0f8"
          stroke="#10b981"
          strokeWidth="1.5"
        />

        <rect
          x="430"
          y="65"
          width="20"
          height="35"
          rx="4"
          fill="#e8f0f8"
          stroke="#10b981"
          strokeWidth="1.5"
        />

        {/* Wheels */}
        <circle cx="35" cy="155" r="12" fill="white" stroke="#10b981" strokeWidth="2" />
        <circle cx="105" cy="155" r="12" fill="white" stroke="#10b981" strokeWidth="2" />
        <circle cx="195" cy="155" r="12" fill="white" stroke="#10b981" strokeWidth="2" />
        <circle cx="265" cy="155" r="12" fill="white" stroke="#10b981" strokeWidth="2" />
        <circle cx="355" cy="155" r="12" fill="white" stroke="#10b981" strokeWidth="2" />
        <circle cx="425" cy="155" r="12" fill="white" stroke="#10b981" strokeWidth="2" />

        {/* Rails */}
        <line x1="-20" y1="170" x2="500" y2="170" stroke="#10b981" strokeWidth="3" />
        <line x1="-20" y1="180" x2="500" y2="180" stroke="#10b981" strokeWidth="3" />

        {/* Sleepers */}
        <line x1="0" y1="165" x2="0" y2="185" stroke="#10b981" strokeWidth="2" opacity="0.5" />
        <line x1="50" y1="165" x2="50" y2="185" stroke="#10b981" strokeWidth="2" opacity="0.5" />
        <line x1="100" y1="165" x2="100" y2="185" stroke="#10b981" strokeWidth="2" opacity="0.5" />
        <line x1="150" y1="165" x2="150" y2="185" stroke="#10b981" strokeWidth="2" opacity="0.5" />
        <line x1="200" y1="165" x2="200" y2="185" stroke="#10b981" strokeWidth="2" opacity="0.5" />
        <line x1="250" y1="165" x2="250" y2="185" stroke="#10b981" strokeWidth="2" opacity="0.5" />
        <line x1="300" y1="165" x2="300" y2="185" stroke="#10b981" strokeWidth="2" opacity="0.5" />
        <line x1="350" y1="165" x2="350" y2="185" stroke="#10b981" strokeWidth="2" opacity="0.5" />
        <line x1="400" y1="165" x2="400" y2="185" stroke="#10b981" strokeWidth="2" opacity="0.5" />
        <line x1="450" y1="165" x2="450" y2="185" stroke="#10b981" strokeWidth="2" opacity="0.5" />
      </g>

      {/* EN 50126 Lifecycle phases */}
      <g transform="translate(60, 300)">
        <text
          x="0"
          y="0"
          fill="#10b981"
          fontSize="16"
          fontWeight="700"
        >
          EN 50126 Lifecycle Phases
        </text>

        {/* Concept */}
        <rect
          x="0"
          y="20"
          width="100"
          height="60"
          rx="6"
          fill="white"
          stroke="#10b981"
          strokeWidth="2"
        />

        <text
          x="50"
          y="42"
          textAnchor="middle"
          fill="#10b981"
          fontSize="16"
          fontWeight="700"
        >
          CONCEPT
        </text>

        <text
          x="50"
          y="58"
          textAnchor="middle"
          fill="#6b5b8a"
          fontSize="14"
        >
          Define
        </text>

        <text
          x="50"
          y="74"
          textAnchor="middle"
          fill="#6b5b8a"
          fontSize="14"
        >
          Requirements
        </text>

        <polygon points="105,50 120,45 120,55" fill="#10b981" />

        {/* Design */}
        <rect
          x="125"
          y="20"
          width="100"
          height="60"
          rx="6"
          fill="white"
          stroke="#10b981"
          strokeWidth="2"
        />

        <text
          x="175"
          y="42"
          textAnchor="middle"
          fill="#10b981"
          fontSize="16"
          fontWeight="700"
        >
          DESIGN
        </text>

        <text
          x="175"
          y="58"
          textAnchor="middle"
          fill="#6b5b8a"
          fontSize="14"
        >
          RAM
        </text>

        <text
          x="175"
          y="74"
          textAnchor="middle"
          fill="#6b5b8a"
          fontSize="14"
        >
          Analysis
        </text>

        <polygon points="230,50 245,45 245,55" fill="#10b981" />

        {/* Manufacture */}
        <rect
          x="250"
          y="20"
          width="100"
          height="60"
          rx="6"
          fill="white"
          stroke="#10b981"
          strokeWidth="2"
        />

        <text
          x="300"
          y="42"
          textAnchor="middle"
          fill="#10b981"
          fontSize="15"
          fontWeight="700"
        >
          MANUFACTURE
        </text>

        <text
          x="300"
          y="58"
          textAnchor="middle"
          fill="#6b5b8a"
          fontSize="14"
        >
          Production
        </text>

        <text
          x="300"
          y="74"
          textAnchor="middle"
          fill="#6b5b8a"
          fontSize="14"
        >
          & Testing
        </text>

        <polygon points="355,50 370,45 370,55" fill="#10b981" />

        {/* Operation */}
        <rect
          x="375"
          y="20"
          width="100"
          height="60"
          rx="6"
          fill="white"
          stroke="#10b981"
          strokeWidth="2"
        />

        <text
          x="425"
          y="42"
          textAnchor="middle"
          fill="#10b981"
          fontSize="16"
          fontWeight="700"
        >
          OPERATION
        </text>

        <text
          x="425"
          y="58"
          textAnchor="middle"
          fill="#6b5b8a"
          fontSize="14"
        >
          Maintenance
        </text>

        <text
          x="425"
          y="74"
          textAnchor="middle"
          fill="#6b5b8a"
          fontSize="14"
        >
          & Monitoring
        </text>

        <polygon points="480,50 495,45 495,55" fill="#10b981" />

        {/* Disposal */}
        <rect
          x="500"
          y="20"
          width="100"
          height="60"
          rx="6"
          fill="white"
          stroke="#10b981"
          strokeWidth="2"
        />

        <text
          x="550"
          y="42"
          textAnchor="middle"
          fill="#10b981"
          fontSize="16"
          fontWeight="700"
        >
          DISPOSAL
        </text>

        <text
          x="550"
          y="58"
          textAnchor="middle"
          fill="#6b5b8a"
          fontSize="14"
        >
          Decommission
        </text>

        <text
          x="550"
          y="74"
          textAnchor="middle"
          fill="#6b5b8a"
          fontSize="14"
        >
          & Retire
        </text>
      </g>

      {/* Availability Metrics Dashboard */}
      <g transform="translate(60, 420)">
        <text
          x="0"
          y="0"
          fill="#6b5b8a"
          fontSize="16"
          fontWeight="600"
        >
          Live Fleet Availability Metrics
        </text>

        {/* MTBF */}
        <rect
          x="0"
          y="15"
          width="150"
          height="70"
          rx="6"
          fill="white"
          stroke="#10b981"
          strokeWidth="1.5"
        />

        <text
          x="75"
          y="35"
          textAnchor="middle"
          fill="#10b981"
          fontSize="20"
          fontWeight="700"
        >
          45,230
        </text>

        <text
          x="75"
          y="54"
          textAnchor="middle"
          fill="#6b5b8a"
          fontSize="14"
        >
          MTBF (hours)
        </text>

        <text
          x="75"
          y="72"
          textAnchor="middle"
          fill="#10b981"
          fontSize="12"
          fontWeight="600"
        >
          ▲ 3.2% vs target
        </text>

        {/* MTTR */}
        <rect
          x="170"
          y="15"
          width="150"
          height="70"
          rx="6"
          fill="white"
          stroke="#10b981"
          strokeWidth="1.5"
        />

        <text
          x="245"
          y="35"
          textAnchor="middle"
          fill="#10b981"
          fontSize="20"
          fontWeight="700"
        >
          2.4
        </text>

        <text
          x="245"
          y="54"
          textAnchor="middle"
          fill="#6b5b8a"
          fontSize="14"
        >
          MTTR (hours)
        </text>

        <text
          x="245"
          y="72"
          textAnchor="middle"
          fill="#10b981"
          fontSize="12"
          fontWeight="600"
        >
          ▼ 8% vs target
        </text>

        {/* Availability */}
        <rect
          x="340"
          y="15"
          width="150"
          height="70"
          rx="6"
          fill="#10b981"
          stroke="#10b981"
          strokeWidth="1.5"
        />

        <text
          x="415"
          y="35"
          textAnchor="middle"
          fill="white"
          fontSize="20"
          fontWeight="700"
        >
          99.87%
        </text>

        <text
          x="415"
          y="54"
          textAnchor="middle"
          fill="white"
          fontSize="14"
        >
          Fleet Availability
        </text>

        <text
          x="415"
          y="72"
          textAnchor="middle"
          fill="white"
          fontSize="12"
          fontWeight="600"
        >
          Target: 99.5%
        </text>

        {/* Tasks */}
        <rect
          x="510"
          y="15"
          width="150"
          height="70"
          rx="6"
          fill="white"
          stroke="#10b981"
          strokeWidth="1.5"
        />

        <text
          x="585"
          y="35"
          textAnchor="middle"
          fill="#10b981"
          fontSize="20"
          fontWeight="700"
        >
          142
        </text>

        <text
          x="585"
          y="54"
          textAnchor="middle"
          fill="#6b5b8a"
          fontSize="14"
        >
          Scheduled Tasks
        </text>

        <text
          x="585"
          y="72"
          textAnchor="middle"
          fill="#6b5b8a"
          fontSize="12"
        >
          Next 30 days
        </text>
      </g>

      {/* Traceability lines */}
      <path
        d="M 330 250 L 300 300"
        stroke="#10b981"
        strokeWidth="1.5"
        strokeDasharray="4 4"
        opacity="0.4"
      />

      <path
        d="M 380 250 L 425 300"
        stroke="#10b981"
        strokeWidth="1.5"
        strokeDasharray="4 4"
        opacity="0.4"
      />
    </svg>
  );
}