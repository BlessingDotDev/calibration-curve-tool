import React from "react";
import PropTypes from "prop-types";
import { unparse } from "papaparse";

const ExportCSVButton = ({ data }) => {
  const handleExport = () => {
    const csv = unparse(data);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "calibration_data.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return <button onClick={handleExport} className="export-btn">Export CSV</button>;
};

ExportCSVButton.propTypes = {
  data: PropTypes.array.isRequired,
};

export default ExportCSVButton;
