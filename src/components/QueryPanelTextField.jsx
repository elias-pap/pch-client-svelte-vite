import { TextField } from '@material-ui/core';
import { ENTRY_NAMES_EMPTY } from '../util/otherUtil';

const QueryPanelTextField = (props) => {
  const onTextFieldChange = (e) => {
    props.updateField(props.fieldKey, e.target.value);
  }

  const type = typeof ENTRY_NAMES_EMPTY[props.fieldKey];

  return (
    <TextField
      label={props.label}
      variant="outlined"
      InputLabelProps={{
        shrink: true,
      }}
      fullWidth
      onChange={onTextFieldChange}
      value={props.value}
      type={type}
    />
  );
};

export { QueryPanelTextField };
