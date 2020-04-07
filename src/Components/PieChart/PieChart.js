import React, { useEffect } from "react";
import pieAPI from "../../services/pieAPI";
import "./pie-chart.css";
import { Pie } from "react-chartjs-2";
import { useState } from "react";
import Loader from "react-loader-spinner";

function PieChart() {
  const [chartPieData, setChartPieData] = useState([]);
  const [loading, setLoading] = useState(true);

  const values = chartPieData.map((e) => e.value);
  const legend = chartPieData.map((e) => e.label);

  useEffect(() => {
    getPieAPI();
  }, []);

  const getPieAPI = async () => {
    try {
      const response = await pieAPI.get();
      setChartPieData(response.data);
      setLoading(false);
    } catch (err) {
      console.log("An error occurs while fetching pie API:", err);
    }
  };

  const pieData = {
    labels: legend,
    datasets: [
      {
        label: "Bars Chart",
        data: values,
        backgroundColor: ["#DBECF8", "#2C82BE", "#32B88B"],
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    legend: {
      labels: {
        usePointStyle: true,
        fontColor: "#4A4A4A",
      },
      align: "end",
    },
    title: {
      text: "PIE CHART",
      display: true,
      fontColor: "#035A27",
      fontSize: 14,
      position: "top",
      padding: 35,
    },
    scales: {
      yAxes: [
        {
          display: false,
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
          display: false,
          gridLines: {
            display: false,
          },
        },
      ],
    },
  };

  return (
    <>
      {
        <div className="pie-container">
          {loading ? (
            <div className="loader">
              <Loader
                type="ThreeDots"
                color="#00BFFF"
                height={300}
                width={300}
              />
            </div>
          ) : (
            <Pie data={pieData} options={options} />
          )}
        </div>
      }
    </>
  );
}

export default PieChart;
