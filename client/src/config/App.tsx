import React, {Suspense, lazy} from 'react';

// Libraries
import {CssBaseline, useMediaQuery, ThemeProvider} from '@material-ui/core';
import {Router, Route, Switch} from 'react-router-dom';

// Context Providers
import {ComposeProvider} from '../store/contexts';

// Components
import {MobileView} from '../components';

// Config
import theme from './theme';

// Utils
import createBrowserHistory from '../utils/createBrowserHistory';

// Lazily Load all components
const HomePage = lazy(() => import('../screens/Home'));
const ComposePage = lazy(() => import('../screens/Compose'));
const DemoPage = lazy(() => import('../screens/Demo'));
const ApprovePage = lazy(() => import('../screens/Approve'));
const AuthPage = lazy(() => import('../screens/Auth'));

function App(): JSX.Element {
  const isMobileView = useMediaQuery('(max-width:600px)');

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {isMobileView ? (
        <MobileView />
      ) : (
        <Router history={createBrowserHistory}>
          <Suspense fallback={<div>Loading...</div>}>
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
          </Suspense>
        </Router>
      )}
    </ThemeProvider>
  );
}

export default App;
