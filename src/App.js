import React from 'react';
import AppRoutes from './navigation/AppRoutes';


/** Amplify component */
import { Amplify } from 'aws-amplify';
import AmplifyConfig from './config/amplifyConfig';

function App() {
  Amplify.configure({
    Auth: AmplifyConfig,
  });

  return (
    <React.Fragment>
      <AppRoutes />
    </React.Fragment>
  );
}

export default App;
