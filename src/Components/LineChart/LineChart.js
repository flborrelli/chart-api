import React, { useEffect } from "react";
import lineAPI from "../../services/lineAPI";
import "./line-chart.css";
import { Line } from "react-chartjs-2";
import { useState } from "react";

function LineChart() {
  const [chartLineTodayData, setChartLineTodayData] = useState([]);
  const [chartLineYesterdayData, setChartLineYesterdayData] = useState([]);


  const todayValues = chartLineTodayData.map((e) => e.value);
  const yesterdayValues = chartLineYesterdayData.map((e) => e.value);
  const time = chartLineTodayData.map((e) => e.label);
  // const yesterdayTime = chartLineYesterdayData.map((e) => e.label);

  const lineData = {
    labels: time,
    datasets: [
      {
        label: "Today",
        data: todayValues,

        // backgroundColor: "rgba(0,0,0,0)",
        borderColor: "#303F9F",
      },
      {
        label: "Yesterday",
        data: yesterdayValues,

        backgroundColor: "rgba(0,0,0,0)",
        borderColor: "#BF3FFF",
      },
    ],
  };

  useEffect(() => {
    getLineAPI();
  }, []);

  const getLineAPI = async () => {
    try {
      const response = await lineAPI.get();
      setChartLineTodayData(response.data.today);
      setChartLineYesterdayData(response.data.yesterday);
      console.log(response.data.today);
    } catch (err) {
      console.log("An error occurs while fetching line API:", err);
    }
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    legend: {
      labels: {
        usePointStyle: true,
        fontColor: '#4A4A4A',
      },
      align: 'end'
    },
    title: {
      text: "LINE CHART 2 DATA",
      display: true,
      fontColor: "#035A27",
      fontSize: 14,
      position: 'top',
      padding: 35,
    },
    scales: {
      yAxes: [
        {
          ticks: {
            autoSkip: true,
            // maxTicksLimit: 10,
            beginAtZero: true,
          },
          gridLines: {
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
          },
        },
      ],
    }
    }

  return (
    <>
      <div className="line-container">
        <Line
          data={lineData}
        options={options}
        />
      </div>
    </>
  );
}

export default LineChart;
