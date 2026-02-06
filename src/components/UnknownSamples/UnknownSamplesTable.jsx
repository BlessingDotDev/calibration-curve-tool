import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TextField,
  Button,
} from "@mui/material";
import PropTypes from "prop-types";

const UnknownSamplesTable = ({
  samples,
  setSamples,
  slope,
  intercept,
  xUnit,
  yUnit,
}) => {
  // Update Y value
  const handleChange = (index, value) => {
    const newSamples = [...samples];
    newSamples[index].y = value;
    setSamples(newSamples);
  };

  // Add new sample row
  const addSample = () => {
    setSamples([...samples, { y: "" }]);
  };

  // Remove sample row
  const removeSample = (index) => {
    setSamples(samples.filter((_, i) => i !== index));
  };

  // Calculate X concentration from regression
  const calculateX = (y) => {
    if (y === "" || slope === 0) return "";
    return ((Number(y) - intercept) / slope).toFixed(3);
  };

  return (
    <Card sx={{ mt: 3 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Unknown Sample Calculator
        </Typography>

        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Sample</TableCell>
              <TableCell>Signal ({yUnit})</TableCell>
              <TableCell>Concentration ({xUnit})</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {samples.map((sample, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>

                <TableCell>
                  <TextField
                    type="number"
                    size="small"
                    value={sample.y}
                    onChange={(e) => handleChange(index, e.target.value)}
                  />
                </TableCell>

                <TableCell>
                  {calculateX(sample.y)}
                </TableCell>

                <TableCell>
                  <Button color="error" onClick={() => removeSample(index)}>
                    Remove
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <Button sx={{ mt: 2 }} variant="contained" onClick={addSample}>
          Add Unknown Sample
        </Button>
      </CardContent>
    </Card>
  );
};

UnknownSamplesTable.propTypes = {
  samples: PropTypes.array.isRequired,
  setSamples: PropTypes.func.isRequired,
  slope: PropTypes.number.isRequired,
  intercept: PropTypes.number.isRequired,
  xUnit: PropTypes.string.isRequired,
  yUnit: PropTypes.string.isRequired,
};

export default UnknownSamplesTable;
