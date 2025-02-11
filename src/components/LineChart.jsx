import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Filler);

const LineChart = () => {
  const [isUpdating, setIsUpdating] = useState(false);
  const [chartData, setChartData] = useState({
    labels: Array.from({ length: 200 }, (_, i) => i),
    datasets: [
      {
        label: "Live Update",
        data: Array.from({ length: 200 }, () => Math.random() * 70),
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.4,
        fill: true,
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
          stepSize: 25, //intervals of 25 units.
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
    <div className="chart-container btn-toggle">
      {/* Toggle Button */}
      <div className="toggle-button-position">
        <div
          className="toggle-button"
          onClick={() => setIsUpdating(!isUpdating)}
          style={{
            backgroundColor: isUpdating ? "#4CAF50" : "#ccc",
          }}
        >
          <div
            className="toggle-button-update"
            style={{
              left: isUpdating ? "27px" : "2px",
            }}
          />
        </div>
      </div>

      <Line data={chartData} options={options} />
    </div>
  );
};

export default LineChart;
