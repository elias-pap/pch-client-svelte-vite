import { Tooltip, Zoom, Button } from '@material-ui/core';
import ClearAllIcon from '@material-ui/icons/ClearAll';

const ClearQueryTextFieldsButton = (props) => {
  return (
    <Tooltip TransitionComponent={Zoom} enterDelay={1000} leaveDelay={200} title="Empty all text fields">
      <Button
        style={{ backgroundColor: '#d68438' }}
        endIcon={<ClearAllIcon />}
        onClick={() => props.clearFields()}
      >
        Clear All
      </Button>
    </Tooltip>
  );
};

export { ClearQueryTextFieldsButton };
