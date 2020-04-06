import React, { useEffect } from "react";
import pieAPI from "../../services/pieAPI";
import "./pie-chart.css";
import { Pie } from "react-chartjs-2";
import { useState } from "react";

function BarsChart() {
  const [chartPieData, setChartPieData] = useState([]);

  const values = chartPieData.map((e) => e.value);
  const legend = chartPieData.map((e) => e.label);

  const pieData = {
    labels: legend,
    datasets: [
      {
        label: "Bars Chart",
        backgroundColor: "#03A9F4",
        data: values,
      },
    ],
  };

  useEffect(() => {
    getPieAPI();
  }, []);

  const getPieAPI = async () => {
    try {
      const response = await pieAPI.get();
      setChartPieData(response.data);
      console.log(response.data);
    } catch (err) {
      console.log("An error occurs while fetching pie API:", err);
    }
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    title: {
      text: "PIE CHART",
      display: true,
      fontColor: "#035A27",
      fontSize: 14,
      position: 'top',
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
    }
    }

  return (
    <>
      <div className="pie-container">
        <Pie
          data={pieData}
        options={options}
        />
      </div>
    </>
  );
}

export default BarsChart;
