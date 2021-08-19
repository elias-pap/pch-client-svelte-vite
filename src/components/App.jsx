import { Dashboard } from '../pages/Dashboard';
import { Auth } from '../pages/Auth';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { getInitialAuthState } from '../util/authUtil';
import { ThemeProvider } from '@material-ui/core/styles';
import { globalTheme, GlobalCss } from '../util/styleUtil';
import { useState } from 'react';

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(getInitialAuthState());

  const updateLoggedIn = (loggedIn) => {
    setLoggedIn(loggedIn);
  };

  return (
    <ThemeProvider theme={globalTheme}>
      <GlobalCss />
      <Router>
        <Switch>
          <Route path="/dashboard">
            <Dashboard isLoggedIn={isLoggedIn} updateLoggedIn={updateLoggedIn} />
          </Route>
          <Route path="/auth">
            <Auth isLoggedIn={isLoggedIn} updateLoggedIn={updateLoggedIn} />
          </Route>
          <Route path="/">
            <Redirect to="/auth" />;
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
