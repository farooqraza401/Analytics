import React from "react";

const ProgressBar = ({ value, title, color }) => {
  const size = 70; // Diameter of the circular progress
  const strokeWidth = 6; // Thickness of the progress bar
  const radius = (size - strokeWidth) / 2; // Radius of the circle
  const circumference = 2 * Math.PI * radius; // Circumference of the circle
  const progress = (value / 100) * circumference; // Progress stroke length

  return (
    <div className="progress-bar">
      {/* Circular progress bar */}
      <svg width={size} height={size}>
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
          // style={{
          //   transition: "stroke-dashoffset 0.5s ease",
          // }}
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
        <p className="progress-bar-title">{title}</p>
        <div className="progrs">
          <span
            className="progress-bar-color"
            style={{
              backgroundColor: color,
            }}
          >
            {value}%
          </span>
          <span className="progrs44">44%</span>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
