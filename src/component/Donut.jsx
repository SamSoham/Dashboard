import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

import Chart from "react-apexcharts";
import style from "./Donut.module.css";
ChartJS.register(ArcElement, Tooltip, Legend);

export default function Donut({ score }) {
  const data = {
    datasets: [
      {
        data: [score, 15 - score],
        backgroundColor: ["#438AF6", "#438AF687"],
      },
    ],
  };
  return (
    <div className={style.container}>
      <div className={style.tag}>
        <p className="highlight">Question Analysis</p>
        <p style={{ color: "#438AF6" }}>{score}/15</p>
      </div>
      <p style={{ fontSize: "14px", textAlign: "left" }}>
        <span className={style.highlight}>
          You scored {score} question correct out of 15.{" "}
        </span>
        {score > 9 ? "Keep it up" : "However it still needs some improvement"}
      </p>
      <div style={{ width: "220px" }}>
        <Doughnut data={data} width={100} />
      </div>
    </div>
  );
}
