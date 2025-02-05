import React from "react";

const StatsCard = ({ title, value, maxValue, color }) => {
  return (
    <div className="stats-card" style={{ marginBottom: "15px" }}>
     <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
     <p>{title}</p>
      <p style={{ fontSize: "12px", marginTop: "5px"  }}>
        {value} / {maxValue}
      </p>
     </div>
      <div
        style={{
          height: "8px",
          width: "100%",
          background: "#f4f4f4",
          borderRadius: "5px",
          position: "relative",
        }}
      >
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
