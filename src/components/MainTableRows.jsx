import { createUniqueEntryKey } from '../util/otherUtil';
import { MainTableRow } from './MainTableRow';

const MainTableRows = (props) => {
  const cellPassesFilter = (row, key, filterText) => {
    return (
      // No filter ? No check.
      !filterText ||
      // Must start with the same string, ignoring case
      row[key].toString().toLowerCase().startsWith(filterText.toLowerCase())
    );
  };

  const shouldBeShown = (row) => {
    // Each cell should pass its filter for the row to be displayed.
    for (const key of Object.keys(row)) {
      const filterValue = props.filters[key];
      if (!cellPassesFilter(row, key, filterValue)) {
        return false;
      }
    }
    return true;
  };

  const rowsToShow = props.data.ixp_server_data
    .filter((row) => shouldBeShown(row))
    .map((row) => <MainTableRow key={createUniqueEntryKey(row)} data={row} />);

  return rowsToShow;
};

export { MainTableRows };
