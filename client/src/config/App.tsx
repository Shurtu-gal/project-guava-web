import React from 'react';

// Libraries
import {CssBaseline, useMediaQuery, ThemeProvider} from '@material-ui/core';
import {Router, Route, Switch} from 'react-router-dom';

// Context Providers
import {ComposeProvider} from '../store/contexts';

// Components
import {
  HomePage,
  AuthPage,
  ComposePage,
  DemoPage,
  ApprovePage,
} from '../screens';
import {MobileView} from '../components';

// Config
import theme from './theme';

// Utils
import createBrowserHistory from '../utils/createBrowserHistory';

function App(): JSX.Element {
  const isMobileView = useMediaQuery('(max-width:600px)');

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {isMobileView ? (
        <MobileView />
      ) : (
        <Router history={createBrowserHistory}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/demo" component={DemoPage} />

            <Route exact path="/signup" component={AuthPage} />
            <Route exact path="/login" component={AuthPage} />

            <Route exact path="/compose">
              <ComposeProvider>
                <ComposePage />
              </ComposeProvider>
            </Route>
            <Route exact path="/approve">
              <ApprovePage />
            </Route>
          </Switch>
        </Router>
      )}
    </ThemeProvider>
  );
}

export default App;
