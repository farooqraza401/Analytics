import React from "react";
import LineChart from "./components/LineChart";
import ProgressBar from "./components/ProgressBar";
import StatsCard from "./components/StatsCard";
import MapComponent from "./components/MapComponent";
import "./styles.css";

const App = () => {
  return (
    <div
      className="dashboard"
      style={{ padding: "20px", display: "flex", flexDirection: "column", width:"100vw"  }}
    >
      <header style={{ marginBottom: "20px" }}>
        <h1>Live Feeds</h1>
        
      </header>

      <div
        className="chart-section"
        style={{ marginBottom: "20px", display: "flex", color: "#666" }}
      >
        <LineChart />
        <div style={{ flex: 1 }}>
         <div style={{display:"flex",flexDirection:"column",marginLeft: "20px"}}>
         <StatsCard title="My Tasks" value={130} maxValue={500} color="#000" />
          <StatsCard
            title="Transferred"
            value={440}
            maxValue={500}
            color="#1abc9c"
          />
          <StatsCard
            title="Bugs Squashed"
            value={77}
            maxValue={100}
            color="#3498db"
          />
          <StatsCard
            title="User Testing"
            value={7}
            maxValue={10}
            color="#8e44ad"
          />
          <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
          <button style={{background:"#f5f5f5",color:"#666666",border:"1px solid #ccc"}}>Generate PDF</button>
          <button style={{background:"#f5f5f5",color:"#666666",border:"1px solid #ccc"}}>Report a BUG</button>
          </div>
         </div>
        </div>
        
      </div>

      <div
        className="stats-overview"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "100px",
          color: "#333",
        }}
      >
        <div
          style={{
            display: "flex",
            height: "70px",
            
          }}
        >
          <div style={{ border: "0.5px solid #ccc",width: "25%", justifyContent:"space-between", }}>
            <ProgressBar value={75} title="SERVER LOAD" color="#8e44ad" />
          </div>
          <div style={{ border: "1px solid #ccc",width: "25%" }}>
            <ProgressBar value={79} title="DISK SPACE" color="#1abc9c" />
          </div>
          <div style={{ border: "1px solid #ccc",width: "25%"}}>
            <ProgressBar value={23} title="DATA TTF" color="#8e44ad" />
          </div>
          <div style={{ border: "1px solid #ccc",width: "25%" }}>
            <ProgressBar value={36} title="TEMP" color="#e74c3c" />
          </div>
        </div>
      </div>
      <div className="jvectormap-container">
        {/* <h1 className="app-header">Interactive World Map</h1> */}
        <MapComponent />
      </div>
    </div>
  );
};

export default App;
