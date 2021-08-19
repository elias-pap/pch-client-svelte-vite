import {
  Table,
  TableContainer,
  TableHead,
  TableBody,
  Grid,
} from '@material-ui/core';
import { useState } from 'react';
import { MainTableHeader } from './MainTableHeader';
import { MainTableRows } from './MainTableRows';

const MainTable = (props) => {
  const [filters, setFilters] = useState({});

  const updateFilter = (field, value) => {
    const newFilters = { ...filters };
    newFilters[field] = value;
    setFilters(newFilters);
  };

  return (
    <Grid
      container
      className="card-entity"
      style={{ backgroundColor: '#906387', maxWidth: '100rem' }}
      direction="column"
      justify="center"
      alignItems="center"
    >
      <Grid item>
        <div
          className="title-div"
          style={{
            paddingBottom: '0.5rem',
          }}
        >
          Main Table
        </div>
      </Grid>
      <Grid item>
        <TableContainer>
          <Table>
            <TableHead>
              <MainTableHeader updateFilter={updateFilter} />
            </TableHead>
            <TableBody>
              <MainTableRows data={props.data} filters={filters} />
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
};

export { MainTable };
