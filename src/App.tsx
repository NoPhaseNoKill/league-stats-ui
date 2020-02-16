import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme/theme';
import { BrowserRouter as Router } from 'react-router-dom';
import { Banner } from 'components/Banner/Banner';
import { Divider } from 'semantic-ui-react';
import { Navigation } from 'components/Navigation/Navigation';

const StyledPage = styled.div`
  background: ${(props) => props.theme.colors.background};
`;

const App = () => {
  return (
    <Router>
      <div className="App">
        <ThemeProvider theme={theme}>
          <StyledPage>
            <Banner />
            <Divider inverted />
            <Navigation />
          </StyledPage>
        </ThemeProvider>
      </div>
    </Router>
  );
};

export default App;
