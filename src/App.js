import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import React from 'react';
import AppRoutes from './navigation/AppRoutes';
import TranslationState from './context/translation/TranslationState'

/** Amplify component */
import { Amplify } from 'aws-amplify';
import AmplifyConfig from './config/amplifyConfig';

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
      }
    }
  })

  Amplify.configure({
    Auth: AmplifyConfig,
  });

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <TranslationState>
          <AppRoutes />
        </TranslationState>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
