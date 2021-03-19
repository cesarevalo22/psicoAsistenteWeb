import React from "react";

import {
  BrowserRouter as Router,
  Redirect,
  Switch,
} from "react-router-dom";

import AppRouteComplement from "./AppRouteComplement";
import ScrollToTop from "../domain/ScrollToTop";
import MainLayout from "../components/layout/MainLayout/MainLayout";
import NotFound from "../components/notFound";
import Dashboard from "../components/stamAD/dashboard/Dashboard";
import Login from "../components/login/Login";
import LoginLayout from "../components/layout/LoginLayout";
import InDevelopment  from "../components/stamAD/InDevelopment/InDevelopment"




export default function AppRoutes(props) {
    return (
        <Router>
          <ScrollToTop />
          <Switch>
          <AppRouteComplement exact={true} path="/" component={Login} layout={LoginLayout}/>
          <AppRouteComplement exact={true} path="/home" component={Dashboard} layout={MainLayout} />
          <AppRouteComplement exact={true} path="/brain" component={InDevelopment} layout={MainLayout} />
          <AppRouteComplement exact={true} path="/user" component={InDevelopment} layout={MainLayout} />
          <AppRouteComplement exact={true} path="/car" component={InDevelopment} layout={MainLayout} />
          <AppRouteComplement exact={true} path="/mail" component={InDevelopment} layout={MainLayout} />
          <AppRouteComplement exact={true} path="/chart" component={InDevelopment} layout={MainLayout} />
          <AppRouteComplement exact={true} path="/settings" component={InDevelopment} layout={MainLayout} />



          <AppRouteComplement exact={true} path="/notFound" component={NotFound} layout={MainLayout} />
          <Redirect to="/notFound" />
          </Switch>
          </Router>
    );
}
