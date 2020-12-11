import React from "react";

import {
  BrowserRouter as Router,
  Redirect,
  Switch,
} from "react-router-dom";

import AppRouteComplement from "./AppRouteComplement";
import ScrollToTop from "../domain/ScrollToTop";
import MainLayout from "../components/layout/MainLayout";
import NotFound from "../components/notFound";
import Dashboard from "../components/dashboard/Dashboard";
import ConfirmCode from "../components/confirmCode/ConfirmCode";
import RegisterLayout from "../components/layout/RegisterLayout";
import Register from "../components/companyRegistration/Register"
import MailNotification from "../components/companyRegistration/MailNotification"
import AccountActivated from "../components/companyRegistration/AcountActivated"
import RecoverPassword from "../components/recoverPassword/RecoverPassword"
import RecoverPasswordConfirmation from "../components/recoverPassword/RecoverPasswordConfirmation"
import RestorePassword from "../components/recoverPassword/RestorePassword"
import RestorePasswordConfirmation from "../components/recoverPassword/RestorePasswordConfirmation"



export default function AppRoutes(props) {
    return (
        <Router>
          <ScrollToTop />
          <Switch>
          <AppRouteComplement exact={true} path="/confirmCode" component={ConfirmCode} layout={RegisterLayout} showAllFooter={true} showCharacter={true}/>
          <AppRouteComplement exact={true} path="/register" component={Register} layout={RegisterLayout} showAllFooter={false} showCharacter={false}/>
          <AppRouteComplement exact={true} path="/mailNotification" component={MailNotification} layout={RegisterLayout} showAllFooter={true} showCharacter={false}/>
          <AppRouteComplement exact={true} path="/accountActivated" component={AccountActivated} layout={RegisterLayout} showAllFooter={true} showCharacter={false}/>
          <AppRouteComplement exact={true} path="/recoverPassword" component={RecoverPassword} layout={RegisterLayout} showAllFooter={false} showCharacter={true}/>
          <AppRouteComplement exact={true} path="/recoverPasswordConfirmation" component={RecoverPasswordConfirmation} layout={RegisterLayout} showAllFooter={false} showCharacter={true}/>

          <AppRouteComplement exact={true} path="/restorePassword" component={RestorePassword} layout={RegisterLayout} showAllFooter={false} showCharacter={true}/>
          <AppRouteComplement exact={true} path="/restorePasswordConfirmation" component={RestorePasswordConfirmation} layout={RegisterLayout} showAllFooter={true} showCharacter={false}/>

          <AppRouteComplement exact={true} path="/" component={Dashboard} layout={MainLayout} />
          <AppRouteComplement exact={true} path="/homePage" component={Dashboard} layout={MainLayout} />
          <AppRouteComplement exact={true} path="/notFound" component={NotFound} layout={MainLayout} />
          <Redirect to="/notFound" />
          </Switch>
          </Router>
    );
}
