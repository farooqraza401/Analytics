import React, { useState, useEffect } from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Filler } from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Filler);

const LineChart = () => {
  const [isUpdating, setIsUpdating] = useState(false);
  const [chartData, setChartData] = useState({
    labels: Array.from({ length: 200 }, (_, i) => i),
    datasets: [
      {
        label: "Live Update",
        data: Array.from({ length: 200 }, () => Math.random() * 100),
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)", // Adjust transparency for area fill
        tension: 0.4,
        fill: true, // Enable area fill
      },
    ],
  });

  useEffect(() => {
    let intervalId;
    if (isUpdating) {
      intervalId = setInterval(() => {
        setChartData((prev) => ({
          ...prev,
          datasets: [
            {
              ...prev.datasets[0],
              data: [...prev.datasets[0].data.slice(1), Math.random() * 100],
            },
          ],
        }));
      }, 2000);
    }
    return () => clearInterval(intervalId);
  }, [isUpdating]);

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: true,
        labels: {
          color: "#666",
        },
      },
    },
    scales: {
      x: {
        display: true,
        type: "linear",
        min: 0,
        max: 175,
        ticks: {
          stepSize: 25,
          color: "#666",
        },
      },
      y: {
        display: true,
        min: 0,
        max: 100,
        ticks: {
          stepSize: 20,
          color: "#666",
        },
      },
    },
  };

  return (
    <div
      className="chart-container"
      style={{
        height: "360px",
        width: "780px",
        position: "relative", // Needed for toggle positioning
      }}
    >
      {/* Toggle Button */}
      <div
        style={{
          position: "absolute",
          top: "10px",
          left: "10px",
          zIndex: 1,
          display: "flex",
          alignItems: "center",
          gap: "100px",
        }}
      >
        
        <div
          onClick={() => setIsUpdating(!isUpdating)}
          style={{
            width: "50px",
            height: "24px",
            backgroundColor: isUpdating ? "#4CAF50" : "#ccc",
            borderRadius: "12px",
            position: "relative",
            cursor: "pointer",
            transition: "background-color 0.3s",
          }}
        >
          <span style={{ color: "#666", fontSize: "14px" }}></span>
          <div
            style={{
              position: "absolute",
              top: "2px",
              left: isUpdating ? "27px" : "2px",
              width: "20px",
              height: "20px",
              backgroundColor: "white",
              borderRadius: "50%",
              transition: "left 0.3s",
              boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
            }}
          />
        </div>
      </div>

      <Line data={chartData} options={options} />
    </div>
  );
};

export default LineChart;

