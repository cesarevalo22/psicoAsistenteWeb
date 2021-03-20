import React, { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import SvgInDevelopment from "../../../assets/images/svgFiles/SvgInDevelopment";

import inDevelopmentStyles from "../../../styles/stamAD/inDevelopmentStyles";
import { TranslationContext } from "../../../context/translation/TranslationContext";


function InDevelopment(props) {

  const { translate } = useContext(TranslationContext)
    const classes = inDevelopmentStyles();

      return (
        <div style={{display: "block", width: "50%", margin: "auto"}}>
            <Link to={"/home"} style={{ textDecoration: 'none' }}>
                <p className={classes.message}>{translate('indevelop', 'Title')}</p>
            </Link>
                <div className = {classes.image}>
                  <SvgInDevelopment width={"100vh"} height={"100vh"} />
                </div>
            
        </div>
        );
  
}

export default InDevelopment;