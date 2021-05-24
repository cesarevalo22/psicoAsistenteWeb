import React, { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import SvgInDevelopment from "../../../assets/images/svgFiles/SvgInDevelopment";

import inDevelopmentStyles from "../../../styles/stamAD/inDevelopmentStyles";


function InDevelopment(props) {

    const classes = inDevelopmentStyles();

      return (
        <div style={{display: "block", width: "50%", margin: "auto"}}>
            <Link to={"/home"} style={{ textDecoration: 'none' }}>
                <p className={classes.message}>"UPS!... Estamos trabajando para ti... Pronto tendrás disponible esta funcionalidad"</p>
            </Link>
                <div className = {classes.image}>
                  <SvgInDevelopment width={"100vh"} height={"100vh"} />
                </div>
            
        </div>
        );
  
}

export default InDevelopment;