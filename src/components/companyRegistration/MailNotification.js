import React from "react";

import MailNotificationStyles from "../../styles/Register/mailNotificationStyles";
import SvgMailNotification from "../../assets/images/svgFiles/SvgMailNotification";

import { Paper } from "@material-ui/core";

export default function MailNotification() {
  const classes = MailNotificationStyles();

  return (
    <React.Fragment>
      <Paper className={classes.container2}>
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
      </Paper>
    </React.Fragment>
  );
}
