import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';
import { BrowserRouter as Router } from 'react-router-dom';
import { Banner } from 'components/Banner/Banner';
import { Navigation } from 'components/Navigation/Navigation';
import { Divider } from 'components/Divider/Divider';

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
