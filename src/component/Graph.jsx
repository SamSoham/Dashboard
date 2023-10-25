import Chart from "react-apexcharts";
import icon from "../assets/graphIcon.png";
import style from "./Graph.module.css";

export default function Graph({ percentile }) {
  return (
    <div className={style.container}>
      <p className={style.head}>Comparision Graph</p>
      <div className={style.tag}>
        <p className={style.heading}>
          <span>Your score is {percentile}% percentile</span> which is{" "}
          {percentile > 72 ? "higher" : "lower"} than the average percentile 72%
          of all the engineers who took the assesment.
        </p>
        <img src={icon} alt="graph-icon" width={"30px"} height={"30px"} />
      </div>
      <Chart
        type="line"
        height={300}
        width={650}
        series={[
          {
            name: "Score",
            data: [20, 30, 45, 25, 30, 18],
          },
        ]}
        options={{
          chart: {
            fontFamily: "'Poppins', sans-serif",
            toolbar: {
              show: false,
            },
          },
          stroke: {
            curve: "smooth",
            width: 3,
            colors: "#438AF6",
          },
          grid: {
            show: false,
          },
          annotations: {
            xaxis: [
              {
                x: 72,
                borderColor: "#FF9142",
                strokeDashArray: 5,
                label: {
                  borderColor: "#FF9142",
                  offsetY: 140,
                  style: {
                    color: "#fff",
                    background: "#FF9142",
                  },
                  text: "Avg. Percentile",
                },
              },
              {
                x: percentile,
                borderColor: "#775DD0",
                strokeDashArray: 5,
                label: {
                  borderColor: "#775DD0",
                  offsetY: 10,
                  style: {
                    color: "#fff",
                    background: "#775DD0",
                  },
                  text: `${percentile} Percentile your score`,
                  orientation: "horizontal",
                },
              },
            ],
          },
          labels: [0, 20, 40, 60, 80, 100],
          xaxis: {
            type: "numeric",
            labels: {
              show: true,
            },
          },
          yaxis: {
            axisBorder: {
              show: true,
            },
            labels: {
              show: false,
            },
          },
          tooltip: {
            enabled: false,
          },
        }}
      />
    </div>
  );
}
