import React from "react";

import RecoverPasswordConfirmationStyles from "../../styles/recoverPassword/recoverPasswordConfirmationStyles";
import SvgRecoverPassword from "../../assets/images/svgFiles/SvgRecoverPassword";

import { Paper } from "@material-ui/core";

export default function RecoverPasswordConfirmation() {
  const classes = RecoverPasswordConfirmationStyles();

  return (
    <React.Fragment>
      <Paper className={classes.container2}>
        <section className={classes.contMessage}>
          <div className={classes.contImageMessage}>
            <SvgRecoverPassword width={"300px"} height={"300px"} />
          </div>
          <div className={classes.sub1}>
            <p>¡Revisa tu correo!</p>
          </div>
          <div className={classes.sub2}>
            <p>Hemos enviado un enlace para restablecer tu contraseña.</p>
          </div>
        </section>
      </Paper>
    </React.Fragment>
  );
}
