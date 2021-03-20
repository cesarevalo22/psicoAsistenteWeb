import React , {useContext} from 'react'
import NotFoundStyles from "../../styles/stamAD/notFoundStyles";
import SvgAccountActivated from "../../assets/images/svgFiles/SvgAccountActivated";
import { Paper } from "@material-ui/core";
import { Link } from "react-router-dom"


export default function () {

    const classes = NotFoundStyles();

    return (
        <>
        <Paper className={classes.container2}>
        <section className={classes.contMessage}>
          <div className={classes.contImageMessage}>
            <SvgAccountActivated width={"210px"} height={"130px"} />
          </div>
          <div className={classes.sub1}>
            <p>404 NOT FOUND</p>
          </div>
          <Link to={"/login"}>
          <div className={classes.sub3}>
              <p>Vuelve al inicio</p>
          </div>
          </Link>
        </section>
      </Paper>
        </>
    )
}