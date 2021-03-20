import React, { useContext } from "react";
import mainLayoutStyles from "../../../styles/layout/mainLayoutStyles";
import MenuToolBarStamAd from "../../../components/stamAD/menuToolBar/MenuToolBarStamAd";


import AppBar from "@material-ui/core/AppBar";
import Avatar from "@material-ui/core/Avatar";
import Badge from "@material-ui/core/Badge";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";

import SvgMessage from "../../../assets/images/svgFiles/SvgMessage";
import SvgNotification from "../../../assets/images/svgFiles/SvgNotification";
import { TranslationContext } from "../../../context/translation/TranslationContext";



import Cookies from 'universal-cookie';

function ToolBar(props) {

  const { translate } = useContext(TranslationContext)

    const classes = mainLayoutStyles();
    const cookies = new Cookies();
      return (
        <div className={classes.root} >
          <AppBar position="fixed" className={classes.appBar} elevation={1}>
            <Toolbar className={classes.toolbar}>
              <div className= {classes.divMesagge}>
              <IconButton> 
                <SvgMessage />
                </IconButton>
                </div>
                <div className= {classes.divText}>
                <p>
                {translate('header', 'Title')}
                </p>
                </div>
                <div className={classes.line2}></div>

              <div className={classes.divTextHeader}>
                <p className={classes.helloHeader}>
                 <span> {cookies.get('userName')} </span> | {cookies.get('userRole')}
                </p>
                </div>
    
              <div className={classes.divAvatarHeader}>
                <IconButton>
                  <Badge
                    color="secondary"
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "right",
                    }}
                   
                  >
                    <Avatar className={classes.avatarHeader}>{cookies.get('avatar')}</Avatar>
                  </Badge>
                </IconButton>
              </div>

              <div className={classes.line3}></div>
              <div className={classes.divNot}>
              <IconButton> 
                <SvgNotification/>
                </IconButton>
              </div>
            </Toolbar>

          </AppBar>
          <MenuToolBarStamAd/>
        </div>
      );
  
}

export default ToolBar;
