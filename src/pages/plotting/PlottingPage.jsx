import { Link } from "react-router";
import Header from "../../components/Header";
import "./PlottingPage.css";

import React, { useContext, useRef } from "react";
import { CustomThemeProvider, ColorModeContext } from "../../theme/ThemeContext";
import {
  Container,
  Typography,
  IconButton,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import DataTable from "../../components/Table/DataTable";
import CalibrationChart from "../../components/Chart/CalibrationChart";
import { useRegression } from "../../hooks/useRegression";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import UnknownSamplesTable from "../../components/UnknownSamples/UnknownSamplesTable";
import { generatePdfReport } from "../../utils/generatePdfReport";

const AppContent = () => {
  const { toggleColorMode } = useContext(ColorModeContext);

  const [data, setData] = React.useState([{ x: "", y: "" }]);
  const { slope, intercept, r2, regressionLine, filtered } = useRegression(data);

  const [samples, setSamples] = React.useState([{ y: "" }]);

  const [xUnit, setXUnit] = React.useState("Concentration (mg/L)");
  const [yUnit, setYUnit] = React.useState("Absorbance (AU)");

  const chartRef = useRef();

  const handlePdf = async () => {
    if (!chartRef.current) {
      alert("Chart not ready yet!");
      return;
    }
    const canvas = chartRef.current.getCanvas();
    if (!canvas) {
      alert("Chart canvas not ready yet!");
      return;
    }

    await generatePdfReport({
      chartCanvas: canvas, // ✅ pass actual DOM canvas
      data,
      samples,
      slope,
      intercept,
      r2,
      xUnit,
      yUnit,
    });
  };

  return (

    <Container className="main-container" sx={{ my: 4 }}>
      <Header varient="plotting" />
      <Link to="/">
        <button>GO back home</button>
      </Link>

      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h4">Professional Calibration Tool</Typography>
        <IconButton onClick={toggleColorMode}>
          <Brightness4Icon />
        </IconButton>
      </Box>

      {/* Units + PDF button */}
      <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
        <FormControl size="small" sx={{ minWidth: 180 }}>
          <InputLabel>X Unit</InputLabel>
          <Select value={xUnit} label="X Unit" onChange={(e) => setXUnit(e.target.value)}>
            <MenuItem value="Concentration (mg/L)">mg/L</MenuItem>
            <MenuItem value="Concentration (µg/L)">µg/L</MenuItem>
            <MenuItem value="Concentration (ppm)">ppm</MenuItem>
            <MenuItem value="Concentration (mol/L)">mol/L</MenuItem>
          </Select>
        </FormControl>

        <FormControl size="small" sx={{ minWidth: 180 }}>
          <InputLabel>Y Unit</InputLabel>
          <Select value={yUnit} label="Y Unit" onChange={(e) => setYUnit(e.target.value)}>
            <MenuItem value="Absorbance (AU)">Absorbance (AU)</MenuItem>
            <MenuItem value="Peak Area">Peak Area</MenuItem>
            <MenuItem value="Peak Height">Peak Height</MenuItem>
            <MenuItem value="Fluorescence Intensity">Fluorescence</MenuItem>
          </Select>
        </FormControl>

        <Button variant="contained" onClick={handlePdf}>
          Download PDF Report
        </Button>
      </Box>

      <DataTable data={data} setData={setData} xUnit={xUnit} yUnit={yUnit} />

      <CalibrationChart
        ref={chartRef}
        filteredPoints={filtered}
        regressionLine={regressionLine}
        slope={slope}
        intercept={intercept}
        r2={r2}
        xUnit={xUnit}
        yUnit={yUnit}
      />

      <UnknownSamplesTable
        samples={samples}
        setSamples={setSamples}
        slope={slope}
        intercept={intercept}
        xUnit={xUnit}
        yUnit={yUnit}
      />
    </Container>
  );
};

const PlottingPage = () => (
  <CustomThemeProvider>
    <AppContent />
  </CustomThemeProvider>
);

export default PlottingPage;
