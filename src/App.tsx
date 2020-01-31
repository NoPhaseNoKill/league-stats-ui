import React from 'react';
import { HomePage } from 'components/HomePage';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme/theme';

const App: React.FC = () => {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <HomePage />
      </ThemeProvider>
    </div>
  );
};

export default App;
