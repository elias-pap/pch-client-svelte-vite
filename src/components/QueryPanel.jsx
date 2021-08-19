import { AddEntryButton } from './AddEntryButton';
import { ClearQueryTextFieldsButton } from './ClearQueryTextFieldsButton';
import { QueryPanelTextField } from './QueryPanelTextField';
import { Grid, Snackbar } from '@material-ui/core';
import { ENTRY_NAMES_EMPTY, getEntryKeyNamePairs } from '../util/otherUtil';
import { useState } from 'react';
import { ADD_ENTRY_MUTATION } from '../util/graphqlUtil';
import { useMutation } from '@apollo/client';

const QueryPanel = () => {
  const [fields, setFields] = useState(ENTRY_NAMES_EMPTY);
  const [isSnackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [addEntry] = useMutation(ADD_ENTRY_MUTATION);

  const updateField = (field, value) => {
    const newFields = { ...fields };
    newFields[field] = value;
    setFields(newFields);
  };

  const clearFields = () => {
    setFields(ENTRY_NAMES_EMPTY);
  };

  const arePrimaryFieldsSet = () => {
    return fields.ixp && fields.city && fields.country && fields.protocol;
  };

  const provideDefaultsForMissingValues = (fields) => {
    if (!fields.number_of_peers) fields.number_of_peers = 0;
    if (!fields.number_of_rib_entries) fields.number_of_rib_entries = 0;
    if (!fields.rs_local_asn) fields.rs_local_asn = 0;
    if (!fields.total_number_of_neighbors) fields.total_number_of_neighbors = 0;
    if (!fields.updated_at) fields.updated_at = new Date();
    return fields;
  };

  const doAddEntry = async (entry) => {
    try {
      await addEntry(entry);
      setSnackbarMessage('Success! Entry added to database. Look for it in the table.');
      clearFields();
    } catch (e) {
      console.error(e.message);
      setSnackbarMessage(
        'Failure: Error adding entry to database. Check the logs for details.'
      );
    } finally {
      setSnackbarOpen(true);
    }
  };

  const addEntryToDatabase = () => {
    if (!arePrimaryFieldsSet()) return;
    const variables = provideDefaultsForMissingValues({ ...fields });
    doAddEntry({
      variables,
    });
  };

  const onSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const textFields = getEntryKeyNamePairs().map(([entryKey, entryName]) => (
    <Grid key={entryKey} item xs={12} md>
      <QueryPanelTextField
        value={fields[entryKey]}
        fieldKey={entryKey}
        label={entryName}
        updateField={updateField}
      />
    </Grid>
  ));

  const buttons = [
    <AddEntryButton
      enabled={arePrimaryFieldsSet()}
      addEntryToDatabase={addEntryToDatabase}
    />,
    <ClearQueryTextFieldsButton clearFields={clearFields} />,
  ].map((button, index) => {
    return (
      <Grid key={index} item>
        {button}
      </Grid>
    );
  });

  return (
    <Grid
      container
      className="card-entity"
      style={{ backgroundColor: '#906387', maxWidth: '100rem' }}
      direction="column"
      justify="center"
      alignItems="center"
    >
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={isSnackbarOpen}
        onClose={onSnackbarClose}
        autoHideDuration={6000}
        message={snackbarMessage}
      />
      <Grid container justify="center" alignItems="center">
        <Grid item>
          <div className="title-div" style={{ paddingBottom: '1.5rem' }}>
            New Entry
          </div>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={1}
      >
        {textFields}
      </Grid>
      <Grid
        container
        style={{ paddingTop: '1rem' }}
        direction="row"
        justify="space-evenly"
        alignItems="center"
      >
        {buttons}
      </Grid>
    </Grid>
  );
};

export { QueryPanel };
