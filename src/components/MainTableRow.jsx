import { TableCell, TableRow } from '@material-ui/core';
import { createUniqueEntryKey, getEntryKeys } from '../util/otherUtil';

const MainTableRow = (props) => {
  const rowCells = getEntryKeys().map((entryKey) => (
    <TableCell key={createUniqueEntryKey(props.data) + entryKey}>
      {props.data[entryKey]}
    </TableCell>
  ));

  return <TableRow>{rowCells}</TableRow>;
};

export { MainTableRow };
