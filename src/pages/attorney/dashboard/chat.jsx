import React from "react";
import Chart from "react-apexcharts";

const RadialBarChart = () => {
  const options = {
    chart: {
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        startAngle: -100, // Starts from the left side
        endAngle: 100, // Ends on the right side
        hollow: {
          size: "20%", // Adjusts the thickness of the bars
        },
        track: {
          show: true,
          background: "#eee",
          strokeWidth: "100%",
          margin: 15,
        },
        dataLabels: {
          show: false,
        },
      },
    },
    colors: ["#F4A100", "#28A745", "#007BFF"],
    labels: ["Apples", "Oranges", "Bananas"],
  };

  const series = [80, 60, 40];

  return (
    <div className="w-full sm:h-full h-[310px] flex justify-center items-center pt-[20px] ">
      <Chart options={options} series={series} type="radialBar" width="100%" height="100%" />
    </div>
  );
};

export default RadialBarChart;
