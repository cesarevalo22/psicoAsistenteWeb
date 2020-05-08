import React from 'react';

import AppRoutes from './navigation/AppRoutes';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import About from './pages/About';
import {BrowserRouter,Route,Switch} from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
      <AppRoutes />
    </React.Fragment>
  );
}

export default App;
