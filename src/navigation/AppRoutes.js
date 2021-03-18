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
<<<<<<< HEAD
import Dashboard from "../components/dashboard/Dashboard";
=======
import Dashboard from "../components/stamAD/dashboard/Dashboard";
import ConfirmCode from "../components/confirmCode/ConfirmCode";
import RegisterLayout from "../components/layout/RegisterLayout";
import Register from "../components/companyRegistration/Register"
import MailNotification from "../components/companyRegistration/MailNotification"
import AccountActivated from "../components/companyRegistration/AcountActivated"
import RecoverPassword from "../components/recoverPassword/RecoverPassword"
import RecoverPasswordConfirmation from "../components/recoverPassword/RecoverPasswordConfirmation"
import RestorePassword from "../components/recoverPassword/RestorePassword"
import RestorePasswordConfirmation from "../components/recoverPassword/RestorePasswordConfirmation"
>>>>>>> 521ba4d4632d8e1f86c8077911006dcb48d8d945
import Login from "../components/login/Login";
import LoginLayout from "../components/layout/LoginLayout";




export default function AppRoutes(props) {
    return (
        <Router>
          <ScrollToTop />
          <Switch>
          <AppRouteComplement exact={true} path="/" component={Login} layout={LoginLayout}/>
          <AppRouteComplement exact={true} path="/home" component={Dashboard} layout={MainLayout} />
          <AppRouteComplement exact={true} path="/notFound" component={NotFound} layout={MainLayout} />
          <Redirect to="/notFound" />
          </Switch>
          </Router>
    );
}
