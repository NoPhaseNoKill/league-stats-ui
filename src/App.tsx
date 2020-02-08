import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme/theme';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { Heroes, Home } from 'components/Pages';

const App = () => {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/heroes">Heroes</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/heroes">
              <Heroes />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
};

export default App;
