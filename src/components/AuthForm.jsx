import { Grid, Paper, Tab, Tabs } from '@material-ui/core';
import { Card, CardContent } from '@material-ui/core';
import { useState } from 'react';
import { LoginButton } from './LoginButton';
import { LoginForm } from './LoginForm';

const AuthForm = (props) => {
  const [selectedTab, setSelectedTab] = useState('1');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const updateUsername = (username) => {
    setUsername(username);
  };

  const updatePassword = (password) => {
    setPassword(password);
  };

  return (
    <Card>
      <CardContent>
        <Grid container direction="column" spacing={2}>
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
          <Grid container justify="center">
            <Paper>
              <Tabs
                value={selectedTab}
                indicatorColor="primary"
                textColor="primary"
                onChange={(event, value) => {
                  setSelectedTab(value);
                }}
                aria-label="disabled tabs example"
              >
                <Tab value="1" label="Log In" />
                <Tab value="2" label="Sign Up" />
              </Tabs>
            </Paper>
          </Grid>
          <Grid item>
            <LoginForm
              updateUsername={updateUsername}
              updatePassword={updatePassword}
            />
          </Grid>
          <Grid item>
            <LoginButton
              username={username}
              password={password}
              updateLoggedIn={props.updateLoggedIn}
              enabled={username !== '' && password !== ''}
              type={selectedTab === '1' ? 'login' : 'signup'}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export { AuthForm };
