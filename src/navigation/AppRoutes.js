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
import ConfirmCode from "../components/confirmCode/ConfirmCode";
import RegisterLayout from "../components/layout/RegisterLayout";
import Register from "../components/companyRegistration/Register"
import MailNotification from "../components/companyRegistration/MailNotification"






export default function AppRoutes(props) {
    return (
        <Router>
          <ScrollToTop />
          <Switch>
          <AppRouteComplement exact={true} path="/confirmCode" component={ConfirmCode} showAllFooter={true} layout={RegisterLayout} />
          <AppRouteComplement exact={true} path="/register" component={Register} showAllFooter={false} layout={RegisterLayout}/>
          <AppRouteComplement exact={true} path="/MailNotification" component={MailNotification} showAllFooter={true} layout={RegisterLayout}/>
          <AppRouteComplement exact={true} path="/" component={Dashboard} layout={MainLayout} />
          <AppRouteComplement exact={true} path="/homePage" component={Dashboard} layout={MainLayout} />
          <AppRouteComplement exact={true} path="/notFound" component={NotFound} layout={MainLayout} />
          <Redirect to="/notFound" />
          </Switch>
          </Router>
    );
}
