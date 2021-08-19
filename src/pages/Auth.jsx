import { Grid } from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import { AuthForm } from '../components/AuthForm';
import { initAuthDb } from '../util/minioUtil';

initAuthDb();

const Auth = (props) => {
  if (props.isLoggedIn) return <Redirect to="/dashboard" />;

  return (
    <Grid
      container
      alignItems="center"
      justify="center"
      style={{ height: '100vh' }}
    >
      <Grid item>
        <AuthForm isLoggedIn={props.isLoggedIn} updateLoggedIn={props.updateLoggedIn} />
      </Grid>
    </Grid>
  );
};

export { Auth };
