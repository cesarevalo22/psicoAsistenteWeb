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
      <Grid container spacing={0} className={classes.mainContainer}>
        <Grid item xs={4}>
          <div className={classes.circle1}>
            <SgvCircle
              color={"#50D1B6"}
              width={"135.9px"}
              height={"135.73px"}
            />
          </div>
          <div className={classes.svgIcon1}>
            <SvgIcon1 rotate="rotate(-90)" />
          </div>
        </Grid>
        <Grid item xs={4} className={classes.container2}>
          <div className={classes.logo}>
            <SgvLogo />
          </div>

          <section className={classes.contMessage}>
            <div className={classes.contImageMessage}>
              <SvgMailNotification width={"231px"} height={"321px"} />
            </div>
            <div className={classes.sub1}>
              <p>¡Revisa tu correo!</p>
            </div>
            <div className={classes.sub2}>
              <p>Te hemos enviado un correo para activar tu cuenta.</p>
            </div>
          </section>

          <div className={classes.contFoot}>
            <div className={classes.sgv5}>
              <Sgv5 width="145px" height="71px" />
            </div>
            <div className={classes.contNeworks}>
              <p>
                <SvgWhatsAppBlack width={"54px"} height={"54px"} />
              </p>
              <p>
                <SvgFacebookBlack width={"54px"} height={"54px"} />
              </p>
              <p>
                <SvgInstagramBlack width={"54px"} height={"54px"} />
              </p>
            </div>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className={classes.circle2}>
            <SgvCircle color={"#00808E"} width={"124px"} height={"121px"} />
          </div>

          <div className={classes.contButtonHelp}>
            <Fab
              style={{
                width: "86px",
                height: "86px",
                background: "#F99211",
              }}
            >
              <SvgHelp />
            </Fab>
          </div>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
