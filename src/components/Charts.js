import React from "react";
import Chartist from "react-chartist";
import ChartistTooltip from "chartist-plugin-tooltips-updated";

import "../css/Chart.css";

export const SalesValueChart = () => {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    series: [[0, 0, 0, 0, 0, 0, 0]],
  };

  // const data = {
  //   labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  //   series: [[1, 2, 2, 3, 3, 4, 3]],
  // };

  const options = {
    low: 0,
    showArea: true,
    fullWidth: true,
    axisX: {
      position: "end",
      showGrid: true,
    },
    axisY: {
      // On the y-axis start means left and end means right
      showGrid: false,
      showLabel: false,
      labelInterpolationFnc: (value) => `$${value / 1}k`,
    },
  };

  const plugins = [ChartistTooltip()];

  return (
    <Chartist
      data={data}
      options={{ ...options, plugins }}
      type="Line"
      className="ct-series-g ct-series-a"
    />
  );
};