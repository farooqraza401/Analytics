import React from "react";

const StatsCard = ({ title, value, maxValue, color }) => {
  return (
    <div className="stats-card">
      <div className="stats-card-value">
        <span>{title}</span>
        <p>
          {value} / {maxValue}
        </p>
      </div>
      <div className="stats-card-innerline">
        <div
          style={{
            height: "8px",
            width: `${(value / maxValue) * 100}%`,
            background: color,
            borderRadius: "5px",
          }}
        />
      </div>
    </div>
  );
};

export default StatsCard;
