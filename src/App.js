import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import React from 'react';
import AppRoutes from './navigation/AppRoutes';

/** Amplify component */

function App() {
  const theme = createMuiTheme({
    palette: {
      colors: {
        background: '#F5F6FA',
        turquoise: '#50D1B6',
        darkCyan: '#00808E',
        neonBlue: '#384CF9',
        orange: '#F99211',
        royalBlue: '#3249EB',
        pink: '#FF8FAB',
        red: '#F6134B',
        greenlow: '#78a47e',
        greenhard: '#4f6c4f',
        greenicon: '#0d7b40',
        bluehard:'#2320ff'
      }
    }
  })


  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
          <AppRoutes />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
