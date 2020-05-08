import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import About from '../pages/About';
import Layout from '../components/layout/Layout';


export default function AppRoutes() {
    return (
            <Router>
              <Layout>
              <Switch>
              <Route exact={true} path="/" component={Home} />
              <Route exact={true} path="/about" component={About} />
              <Route component={NotFound} />
              </Switch>
              </Layout>
              </Router>
        );
}


