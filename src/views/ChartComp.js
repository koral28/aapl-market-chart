import React from "react";
import { Bar, Line, Doughnut } from "react-chartjs-2";
import "../App.css";
import { useEffect, useState } from "react";
import AppleIncMarketChart from "../Utils/AppleIncMarketChart";

const ChartComp = () => {
  const [aaplData, setAaplData] = useState("");
  const [dataChart, setDataChart] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      let time = [];
      let usd = [];
      await AppleIncMarketChart.getAppleIncData("1", "Hours").then(
        (response) => {
          for (let dataObj of response.data) {
            time.push(dataObj.StartTime.slice(0, 8));
            usd.push(parseInt(dataObj.Open));
          }
        }
      );
      setDataChart({
        labels: time,
        datasets: [
          {
            label: "1 minute",
            data: usd,
            borderColor: ["rgba(255,206,86,0.2)"],
            backgroundColor: ["rgba(255,206,86,0.2)"],
            pointBackgroundColor: ["rgba(255,206,86,0.2)"],
            pointBorderColor: ["rgba(255,206,86,0.2)"],
          },
          {
            label: "5 minute",
            data: usd,
            borderColor: ["rgba(54,162,235,0.2)"],
            backgroundColor: ["rgba(54,162,235,0.2)"],
            pointBackgroundColor: ["rgba(54,162,235,0.2)"],
            pointBorderColor: ["rgba(54,162,235,0.2)"],
          },
          {
            label: "1 hour",
            data: usd,
            borderColor: ["rgba(123, 239, 178, 0.2)"],
            backgroundColor: ["rgba(123, 239, 178, 0.2)"],
            pointBackgroundColor: ["rgba(123, 239, 178, 0.2)"],
            pointBorderColor: ["rgba(123, 239, 178, 0.2)"],
          },
          {
            label: "1 week",
            data: usd,
            borderColor: ["rgb(255,255,102,0.2)"],
            backgroundColor: ["rgb(255,255,102,0.2)"],
            pointBackgroundColor: ["rgb(255,255,102,0.2)"],
            pointBorderColor: ["rgb(255,255,102,0.2)"],
          },
        ],
      });
    };
    fetchData();
  }, []);
  const options = {
    title: {
      display: true,
      text: "Apple Inc Market Chart",
    },
  };
  return <Line data={dataChart} options={options} />;
};

export default ChartComp;
