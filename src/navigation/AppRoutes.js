import React from "react";

import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import AppRouteComplement from "./AppRouteComplement";
import LoginLayout from '../components/layout/LoginLayout';
import ScrollToTop from "../domain/ScrollToTop";
import MainLayout from "../components/layout/MainLayout";
import NotFound from "../components/notFound";
import Dashboard from "../components/dashboard/Dashboard";
import Register from "../components/companyRegistration/Register"





export default function AppRoutes(props) {
    return (
        <Router>
          <ScrollToTop />
          <Switch>
          <Route exact={true} path="/register" component={Register}/>
          <AppRouteComplement exact={true} path="/" component={Dashboard} layout={MainLayout} />
          <AppRouteComplement exact={true} path="/homePage" component={Dashboard} layout={MainLayout} />
          <AppRouteComplement exact={true} path="/notFound" component={NotFound} layout={MainLayout} />
          <Redirect to="/notFound" />
          </Switch>
          </Router>
    );
}
