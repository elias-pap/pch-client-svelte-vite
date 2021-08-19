import { AppBar, Button, Toolbar, Grid, IconButton } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { MeetingRoom } from '@material-ui/icons';

const TopBar = (props) => {
  const history = useHistory();

  const logout = () => {
    props.updateLoggedIn(false);
    localStorage.removeItem('user');
  };

  const onLogoClick = () => {
    history.push('/');
  };

  return (
    <AppBar position="static">
      <Toolbar style={{ width: '96.5rem', maxWidth: '94vw' }}>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Grid item>
            <h1>Welcome, {localStorage.getItem('user')}</h1>
          </Grid>
          <Grid item>
            <IconButton onClick={onLogoClick}>
              <img
                src={window.location.origin + '/logo.png'}
                style={{
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  display: 'block',
                  width: '41%',
                }}
                alt="PCH Client logo"
              />
            </IconButton>
          </Grid>
          <Grid item>
            <Button
              style={{ margin: '1rem' }}
              onClick={logout}
              endIcon={<MeetingRoom/>}
            >
              Logout
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export { TopBar };
