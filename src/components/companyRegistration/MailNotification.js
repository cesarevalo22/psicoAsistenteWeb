import React, { useState } from "react";

import { useHistory } from "react-router-dom";

import MailNotificationStyles from "../../styles/Register/mailNotificationStyles";
import SgvCircle from "../../assets/images/svgFiles/SvgRegister/SvgCircle";
import SvgIcon1 from "../../assets/images/svgFiles/SvgRegister/SvgIcon1";
import SgvLogo from "../../assets/images/svgFiles/SvgRegister/Svglogo";
import Sgv5 from "../../assets/images/svgFiles/SvgRegister/SvgRegister";
import SvgWhatsAppBlack from "../../assets/images/svgFiles/svgNetworks/whatsAppBlack";
import SvgFacebookBlack from "../../assets/images/svgFiles/svgNetworks/facebookBlack";
import SvgInstagramBlack from "../../assets/images/svgFiles/svgNetworks/instagramBlack";
import SvgMailNotification from "../../assets/images/svgFiles/SvgMailNotification";
import SvgHelp from "../../assets/images/svgFiles/svgHelp";

import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import { Grid, Paper, Fab } from "@material-ui/core";

import { useAlert, positions } from "react-alert";

export default function MailNotification() {
  const classes = MailNotificationStyles();

  return (
    <React.Fragment>
      <Paper className={classes.container2}>
        <section className={classes.contMessage}>
          <div className={classes.contImageMessage}>
            <SvgMailNotification width={"292px"} height={"278px"} />
          </div>
          <div className={classes.sub1}>
            <p>¡Revisa tu correo!</p>
          </div>
          <div className={classes.sub2}>
            <p>Te hemos enviado un correo para activar tu cuenta.</p>
          </div>
        </section>
      </Paper>
    </React.Fragment>
  );
}
