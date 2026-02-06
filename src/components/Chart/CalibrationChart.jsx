// components/CalibrationChart.jsx
import React, { useRef, forwardRef, useImperativeHandle, Fragment } from "react";
import { Scatter } from "react-chartjs-2";
import { Button } from "@mui/material";
import { Chart as ChartJS, LinearScale, PointElement, LineElement, Tooltip, Legend } from "chart.js";
import PropTypes from "prop-types";
import { saveAs } from "file-saver";
import "./CalibrationChart.css";

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

const CalibrationChart = forwardRef(
  ({ filteredPoints, regressionLine, slope, intercept, r2, xUnit, yUnit }, ref) => {
    const chartRef = useRef();

    // ✅ expose function to get actual canvas DOM
    useImperativeHandle(ref, () => ({
      getCanvas: () => chartRef.current?.canvas,
    }));

    const chartData = {
      datasets: [
        { label: "Data Points", data: filteredPoints, backgroundColor: "blue" },
        {
          label: `y = ${slope.toFixed(3)}x + ${intercept.toFixed(3)} (R²=${r2.toFixed(4)})`,
          data: regressionLine,
          borderColor: "red",
          showLine: true,
          fill: false,
          pointRadius: 0,
        },
      ],
    };

    const options = {
      scales: {
        x: { title: { display: true, text: xUnit } },
        y: { title: { display: true, text: yUnit } },
      },
      plugins: { legend: { position: "top" } },
    };

    const handleDownload = () => {
      const canvas = chartRef.current?.canvas;
      if (!canvas) return;

      canvas.toBlob((blob) => {
        if (blob) saveAs(blob, "calibration_chart.png");
      });
    };

    return (
      <div className="calibration-curve">
        <Scatter ref={chartRef} data={chartData} options={options} />
        <Button sx={{ mt: 2 }} variant="contained" onClick={handleDownload}>
          Download Chart
        </Button>
      </div>
    );
  }
);

CalibrationChart.propTypes = {
  filteredPoints: PropTypes.array.isRequired,
  regressionLine: PropTypes.array.isRequired,
  slope: PropTypes.number.isRequired,
  intercept: PropTypes.number.isRequired,
  r2: PropTypes.number.isRequired,
  xUnit: PropTypes.string.isRequired,
  yUnit: PropTypes.string.isRequired,
};

export default CalibrationChart;
