import LineChart from "./components/LineChart";
import ProgressBar from "./components/ProgressBar";
import StatsCard from "./components/StatsCard";
import MapComponent from "./components/MapComponent";
import "./styles.css";

const App = () => {
  return (
    <div className="dashboard">
      {/*  Header */}
      <div className="header-content-space">
        <div className="heder-analytics">
          <h3>Analytics</h3>
          <div className="header-dashboard">Dashboard</div>
        </div>
        <div className="header-exp-fix">
          <div className="exp-flex">
            <div className="header-exp">EXPENSES</div>
            <div className="header-exp47">$47,000</div>
          </div>
          <div className="header-exp-bw-ln" />
          <div className="exp-flex">
            <div className="header-exp">MY PROFITS</div>
            <div className="header-exp38">$38,500</div>
          </div>
        </div>
      </div>
      {/* ------  */}
      <div className="chart-container-section">
        <header>
          <h2>Live Feeds</h2>
        </header>

        <div className="chart-section">
          <LineChart />
          {/* StatsCard */}
          <div className="stats-card-f">
            <div className="stats-card-w">
              <StatsCard
                title="My Tasks"
                value={130}
                maxValue={500}
                color="#000"
              />
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
              <div className="button-s">
                <button>Generate PDF</button>
                <button>Report a BUG</button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="prgs">
            <div className="progress-bar-sp">
              <ProgressBar value={75} title="SERVER LOAD" color="#8e44ad" />
            </div>
            <div className="progress-bar-sp">
              <ProgressBar value={79} title="DISK SPACE" color="#1abc9c" />
            </div>
            <div className="progress-bar-sp">
              <ProgressBar value={23} title="DATA TTF" color="#8e44ad" />
            </div>
            <div className="progress-bar-sp">
              <ProgressBar value={36} title="TEMP" color="#e74c3c" />
            </div>
          </div>
        </div>
      </div>

      {/* <h1 className="app-header">Interactive World Map</h1> */}
      <div
      // style={{ display: "flex", placeItems: "end" }}
      >
        <MapComponent />
      </div>
    </div>
  );
};

export default App;
