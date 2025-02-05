


import React from "react";

const ProgressBar = ({ value, title, color }) => {
  const size = 70; // Diameter of the circular progress
  const strokeWidth = 6; // Thickness of the progress bar
  const radius = (size - strokeWidth) / 2; // Radius of the circle
  const circumference = 2 * Math.PI * radius; // Circumference of the circle
  const progress = (value / 100) * circumference; // Progress stroke length

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "130px" }}>
      {/* Circular progress bar */}
      <svg
        width={size}
        height={size}
        
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#e0e0e0"
          strokeWidth={strokeWidth}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progress}
          style={{
            transition: "stroke-dashoffset 0.5s ease",
          }}
        />
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          fill="#666"
          fontSize="16px"
          dy="0.3em"
        >
          {value}
        </text>
      </svg>

      {/* Title and details */}
      <div>
        <p style={{ margin: 0, fontSize: "14px", color: "#555" }}>{title}</p>
        <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
          <span
            style={{
              backgroundColor: color,
              color: "#fff",
              padding: "2px 6px",
              borderRadius: "4px",
              fontSize: "12px",
            }}
          >
            {value}%
          </span>
          <span style={{ fontSize: "12px", color: "#888" }}>44%</span>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;

