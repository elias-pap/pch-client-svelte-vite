import { Tooltip, Zoom, Button } from '@material-ui/core';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';

const AddEntryButton = (props) => {
  const style = props.enabled ? { backgroundColor: '#4bb39a' } : {};

  return (
    <Tooltip TransitionComponent={Zoom} enterDelay={1000} leaveDelay={200} title="Save text inputs to database">
      <div>
        <Button
          style={style}
          endIcon={<PlaylistAddIcon />}
          onClick={() => props.addEntryToDatabase()}
          disabled={!props.enabled}
        >
          Add Entry
        </Button>
      </div>
    </Tooltip>
  );
};

export { AddEntryButton };
