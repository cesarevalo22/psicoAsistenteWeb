import React from 'react'
import AccountActivatedStyles from "../../styles/Register/accountActivatedStyles";
import SvgAccountActivated from "../../assets/images/svgFiles/SvgAccountActivated";
import { Paper } from "@material-ui/core";
import { Link } from "react-router-dom"


export default function () {

    const classes = AccountActivatedStyles();

    return (
        <>
        <Paper className={classes.container2}>
        <section className={classes.contMessage}>
          <div className={classes.contImageMessage}>
            <SvgAccountActivated width={"292px"} height={"218px"} />
          </div>
          <div className={classes.sub1}>
            <p>Bienvenido</p>
          </div>
          <div className={classes.sub2}>
            <p>Tu cuenta se encuentra activa y lista para hacer crecer tu negocio.</p>
          </div>
          <Link to={"/accountactivated"}>
          <div className={classes.sub3}>
              <p>Iniciar sesión</p>
          </div>
          </Link>
        </section>
      </Paper>
        </>
    )
}