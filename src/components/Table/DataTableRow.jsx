import React from "react";
import PropTypes from "prop-types";

const DataTableRow = ({ row, index, onChange, onRemove }) => {
  return (
    <tr>
      <td>
        <input
          type="number"
          value={row.x}
          onChange={(e) => onChange(index, "x", e.target.value)}
        />
      </td>
      <td>
        <input
          type="number"
          value={row.y}
          onChange={(e) => onChange(index, "y", e.target.value)}
        />
      </td>
      <td>
        <button onClick={() => onRemove(index)}>Remove</button>
      </td>
    </tr>
  );
};

DataTableRow.propTypes = {
  row: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default DataTableRow;
