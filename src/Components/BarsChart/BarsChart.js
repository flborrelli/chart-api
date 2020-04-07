import React, { useEffect } from "react";
import barsAPI from "../../services/barsAPI";
import "./bars-chart.css";
import { Bar } from "react-chartjs-2";
import { useState } from "react";

function BarsChart() {
  const [chartBarData, setChartBarData] = useState([]);

  useEffect(() => {
    getBarsAPI();
  }, []);

  const getBarsAPI = async () => {
    try {
      const response = await barsAPI.get();
      setChartBarData(response.data);
    } catch (err) {
      console.log("An error occurs while fetching bars API:", err);
    }
  };

  const values = chartBarData.map((e) => e.value);
  const months = chartBarData.map(
    (e) =>
      e.label.charAt(0).toUpperCase() + e.label.substring(1).substring(0, 2)
  );

  const barsData = {
    labels: months,
    datasets: [
      {
        label: "Bars Chart",
        backgroundColor: "#03A9F4",
        data: values,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    legend: {
      display: false,
    },
    title: {
      text: "BARS CHART",
      display: true,
      fontColor: "#035A27",
      fontSize: 14,
      position: "top",
      padding: 35,
    },
    scales: {
      yAxes: [
        {
          ticks: {
            autoSkip: true,
            maxTicksLimit: 10,
            beginAtZero: true,
          },
          gridLines: {
            display: false,
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            display: false,
          },
        },
      ],
    },
  };

  return (
    <>
      <div className="bars-container">
        <Bar data={barsData} options={options} />
      </div>
    </>
  );
}

export default BarsChart;
