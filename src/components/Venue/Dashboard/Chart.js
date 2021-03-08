import React from "react";
import { Line } from "react-chartjs-2";

const Chart = () => {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        label: "",
        data: [10, 20, 42, 58, 68, 80],
        backgroundColor: "rgba(166, 206, 227, 0.8)",
        pointBorderColor: "rgba(166, 206, 227, 0.8)",
      },
    ],
  };

  const options = {};

  return <Line data={data} legend={{ display: false }} />;
};

export default Chart;
