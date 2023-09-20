import React, { useRef, useEffect } from "react";
import Chart from "react-apexcharts";

const calc = (data, labels) => {
  debugger;

  return data.reduce((prev, curr, index) => {
    prev[labels.indexOf(curr.direction.label)] = curr.speed;
    return prev;
  }, new Array(labels.length).fill(0));
};

const setTitle = (title, data = [0]) => {
  return (
    <div>
      <span>`${title}`</span>
      <span>
        `${data.absolute.speed},${data.absolute.direction}`
      </span>
      <span>
        `${data.relative.speed},${data.relative.direction}`
      </span>
    </div>
  );
};

const PolarChart = (props) => {
  const { data, title, topic, labels } = props;
  debugger
  const state = {
    options: {
      chart: {
        type: "polarArea",
      },
      stroke: {
        colors: ["#fff"],
      },
      fill: {
        opacity: 0.8,
      },
      title: {
        text: setTitle(title, data),
        align: "left",
        offsetY: 10,
        style: {
          fontSize: "1.5vh",
          fontWeight: "bold",
          color: "#C4C4C4",
        },
      },

      yaxis: {
        labels: {
          formatter: (value) => {
            if (!Number.isInteger(value)) {
              return Number(value).toFixed(2) + " m/s";
            } else return value + " m/s";
          },
        },
      },

      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
              height: "auto",
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
      theme: {
        monochrome: {
          enabled: true,
          shadeTo: "light",
          shadeIntensity: 0.6,
        },
      },

      labels,
    },
  };

  return (
    <React.Fragment>
      <Chart
        options={state.options}
        series={calc(data, labels)}
        type="polarArea"
        width={"100%"}
        height={"100%"}
      />
    </React.Fragment>
  );
};

export default PolarChart;
