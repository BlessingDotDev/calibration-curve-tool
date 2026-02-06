// components/DataTable.jsximport React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
  TextField,
  Card,
  CardContent,
} from "@mui/material";
import PropTypes from "prop-types";

const DataTable = ({ data, setData, xUnit, yUnit }) => {
  const handleChange = (index, field, value) => {
    const newData = [...data];
    newData[index][field] = value;
    setData(newData);
  };

  const addRow = () => setData([...data, { x: "", y: "" }]);
  const removeRow = (index) => setData(data.filter((_, i) => i !== index));

  return (
    <Card sx={{ my: 2 }}>
      <CardContent>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>{xUnit}</TableCell>
              <TableCell>{yUnit}</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {data.map((row, index) => (
              <TableRow key={index}>
                <TableCell>
                  <TextField
                    type="number"
                    size="small"
                    value={row.x}
                    onChange={(e) => handleChange(index, "x", e.target.value)}
                  />
                </TableCell>

                <TableCell>
                  <TextField
                    type="number"
                    size="small"
                    value={row.y}
                    onChange={(e) => handleChange(index, "y", e.target.value)}
                  />
                </TableCell>

                <TableCell>
                  <Button color="error" onClick={() => removeRow(index)}>
                    Remove
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <Button sx={{ mt: 1 }} variant="contained" onClick={addRow}>
          Add Data Point
        </Button>
      </CardContent>
    </Card>
  );
};

DataTable.propTypes = {
  data: PropTypes.array.isRequired,
  setData: PropTypes.func.isRequired,
  xUnit: PropTypes.string.isRequired,
  yUnit: PropTypes.string.isRequired,
};

export default DataTable;
