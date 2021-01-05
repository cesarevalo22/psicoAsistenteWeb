import React from 'react'
import restorePasswordconfirmationstyles from "../../styles/recoverPassword/restorePasswordConfirmationStyles";
import SvgRestorePasswordConfirmation from "../../assets/images/svgFiles/SvgRestorePasswordConfirmation";
import { Paper } from "@material-ui/core";
import { Link } from "react-router-dom"


export default function () {

    const classes = restorePasswordconfirmationstyles();

    return (
        <>
        <Paper className={classes.container2}>
        <section className={classes.contMessage}>
          <div className={classes.contImageMessage}>
            <SvgRestorePasswordConfirmation width={"300px"} height={"300px"} />
          </div>
          <div className={classes.sub1}>
            <p>Tu contraseña ha sido reestablecida</p>
          </div>
          <div className={classes.sub2}>
            <p>Hemos reestablecido tu contraseña, ya puedes iniciar sesión con tu nueva contraseña</p>
          </div>
          <Link to={"/restorePasswordconfirmation"}>
          <div className={classes.sub3}>
              <p>Iniciar sesión</p>
          </div>
          </Link>
        </section>
      </Paper>
        </>
    )
}