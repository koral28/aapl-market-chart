import "../App.css";
import { useState, useEffect } from "react";
import AppleIncMarketChart from "../Utils/AppleIncMarketChart";

const TabsComp = () => {
  const period = "1";
  const precision = "Hours";

  useEffect(async () => {
    let time = [];
    let usd = [];
    await AppleIncMarketChart.getAppleIncData(period, precision).then(
      (response) => {
        for (let dataObj of response.data) {
          console.log(dataObj);
          time.push(dataObj.StartTime.slice(0, 8));
          usd.push(parseInt(dataObj.Open));
        }
      }
    );
  }, []);

  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
};

export default TabsComp;
