import { MainTable } from '../components/MainTable';
import { useSubscription } from '@apollo/client';
import { MONITOR_DATA_SUBSCRIPTION } from '../util/graphqlUtil';
import { QueryPanel } from '../components/QueryPanel';
import { Backdrop, CircularProgress, Grid } from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import { TopBar } from '../components/TopBar';

const Dashboard = (props) => {
  const { loading, error, data } = useSubscription(MONITOR_DATA_SUBSCRIPTION);

  if (!props.isLoggedIn) return <Redirect to="/auth" />;

  if (loading)
    return (
      <Backdrop open>
        <Grid container direction="column" alignItems="center">
          <Grid item>
            <img
              src={window.location.origin + '/logo.png'}
              style={{
                marginLeft: 'auto',
                marginRight: 'auto',
                display: 'block',
              }}
              alt="PCH Client logo"
            />
          </Grid>
          <Grid>
            <CircularProgress color="inherit" />
          </Grid>
        </Grid>
      </Backdrop>
    );
  if (error) return <p>Error :(</p>;

  return (
    <Grid container direction="column" alignItems="center" spacing={2}>
      <Grid item xs>
        <TopBar updateLoggedIn={props.updateLoggedIn} />
      </Grid>
      <Grid item xs>
        <QueryPanel />
      </Grid>
      <Grid item xs>
        <MainTable data={data} />
      </Grid>
    </Grid>
  );
};

export { Dashboard };
