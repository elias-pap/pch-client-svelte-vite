import { TableRow } from '@material-ui/core';
import { getEntryKeyNamePairs } from '../util/otherUtil';
import { MainTableHeaderCell } from './MainTableHeaderCell';

const MainTableHeader = (props) => {
  const headerCells = getEntryKeyNamePairs().map(([entryKey, entryName]) => (
    <MainTableHeaderCell
      key={entryKey}
      fieldKey={entryKey}
      fieldName={entryName}
      updateFilter={props.updateFilter}
    />
  ));

  return <TableRow>{headerCells}</TableRow>;
};

export { MainTableHeader };
