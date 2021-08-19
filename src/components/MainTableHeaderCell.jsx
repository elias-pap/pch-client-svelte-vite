import { TableCell, TextField } from '@material-ui/core';

const MainTableHeaderCell = (props) => {
  const onTextFieldChange = (e) => {
    props.updateFilter(props.fieldKey, e.target.value);
  };

  return (
    <TableCell>
      <div className="MainTableHeaderCell-title">{props.fieldName}</div>
      <TextField
        label="Filter"
        className="MainTableHeaderCell-text-field"
        onChange={onTextFieldChange}
      />
    </TableCell>
  );
};

export { MainTableHeaderCell };
