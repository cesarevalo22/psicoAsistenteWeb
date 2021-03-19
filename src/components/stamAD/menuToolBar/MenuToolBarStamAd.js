import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";


import {List,ListItem,ListItemIcon,IconButton} from "@material-ui/core";

import SvgHome from "../../../assets/images/svgFiles/svgMenuToolBarStamAd/SvgHome";
import SvgBrain from "../../../assets/images/svgFiles/svgMenuToolBarStamAd/SvgBrain";
import SvgUser from "../../../assets/images/svgFiles/svgMenuToolBarStamAd/SvgUser";
import SvgCart from "../../../assets/images/svgFiles/svgMenuToolBarStamAd/SvgCart";
import SvgMail from "../../../assets/images/svgFiles/svgMenuToolBarStamAd/SvgMail";
import SvgChart from "../../../assets/images/svgFiles/svgMenuToolBarStamAd/SvgChart";
import SvgSettings from "../../../assets/images/svgFiles/svgMenuToolBarStamAd/SvgSettings";
import Logo from "../../../assets/images/svgFiles/svgLogin/SicoAsistenteLogo";
import MenuDots from "../../../assets/images/svgFiles/svgMenuToolBarStamAd/SvgMenuDots";

import cookieName from '../../../helpers/cookiesDeclaration';



import menuToolbarStyles from "../../../styles/stamAD/menuToolBarStyles/menuToolBarStyles";


function MenuToolBarStamAd(props) {

    const [cookies, setCookie] = useCookies([cookieName]);
    const [arrowBoard, setArrowBoard] = useState(false)
    const [arrowAccount, setArrowAccount] = useState(false)
    const [arrowUser, setArrowUser] = useState(false)
    const [arrowCampaing, setArrowCampaing] = useState(false)
    const [arrowAdmin, setArrowAdmin] = useState(false)
    const [arrowStatics, setArrowStatics] = useState(false)
    const [arrowSettings, setArrowSettings] = useState(false)
  
    const classes = menuToolbarStyles();
    let pathname = window.location.pathname


    const user = cookies[cookieName];
    console.log('user',user)
    console.log('pathName',pathname)

      return (
        <div className={classes.drawer}>
          <div className={classes.logo}>
          <Logo/>
          </div>
          <List style={{ width: '0' }} >
            <Link to={"/home"} style={{ textDecoration: 'none' }}>
              <ListItem button >
                <ListItemIcon className={pathname==="/home" ? classes.leftIconC : classes.leftIcon}>
                  <SvgHome />
                </ListItemIcon>
                { pathname==="/home" ?     
                <ListItemIcon className={classes.rightIcon}>
                <div className={classes.line4}></div>
              </ListItemIcon> : null
                }
              </ListItem>
            </Link>
    
            <Link to={"/brain"} style={{ textDecoration: 'none' }}>
              <ListItem  button >
                <ListItemIcon className={pathname==="/brain" ? classes.leftIconC : classes.leftIcon}>
                  <SvgBrain />
                </ListItemIcon>
                { pathname==="/brain" ?     
                <ListItemIcon className={classes.rightIcon}>
                <div className={classes.line4}></div>
              </ListItemIcon> : null
                }
              </ListItem>
            </Link>
    
            <Link to={"/user"} style={{ textDecoration: 'none' }}>
              <ListItem button >
                <ListItemIcon className={pathname==="/user" ? classes.leftIconC : classes.leftIcon}>
                  <SvgUser />
                </ListItemIcon>
                { pathname==="/user" ?     
                <ListItemIcon className={classes.rightIcon}>
                <div className={classes.line4}></div>
              </ListItemIcon> : null
                }
              </ListItem>
            </Link>
    
            <Link to={"/car"} style={{ textDecoration: 'none' }}>
              <ListItem button >
                <ListItemIcon className={pathname==="/car" ? classes.leftIconC : classes.leftIcon}>
                  <SvgCart />
                </ListItemIcon>

                { pathname==="/car" ?     
                <ListItemIcon className={classes.rightIcon}>
                <div className={classes.line4}></div>
              </ListItemIcon> : null
                }
                  </ListItem>
            </Link>
    
            <Link to={"/mail"} style={{ textDecoration: 'none' }}>
              <ListItem button >
                <ListItemIcon className={pathname==="/mail" ? classes.leftIconC : classes.leftIcon}>
                  <SvgMail />
                </ListItemIcon>
                { pathname==="/mail" ?     
                <ListItemIcon className={classes.rightIcon}>
                <div className={classes.line4}></div>
              </ListItemIcon> : null
                } 
              </ListItem>
            </Link>
    
            <Link to={"/chart"} style={{ textDecoration: 'none' }}>
              <ListItem button >
                <ListItemIcon className={pathname==="/chart" ? classes.leftIconC : classes.leftIcon}>
                  <SvgChart />
                </ListItemIcon>
                { pathname==="/chart" ?     
                <ListItemIcon className={classes.rightIcon}>
                <div className={classes.line4}></div>
              </ListItemIcon> : null
                } 
              </ListItem>
            </Link>
            
            <Link to={"/settings"} style={{ textDecoration: 'none' }}>
              <ListItem button >
                <ListItemIcon className={pathname==="/settings" ? classes.leftIconC : classes.leftIcon}>
                  <SvgSettings />
                </ListItemIcon>
                { pathname==="/settings" ?     
                <ListItemIcon className={classes.rightIcon}>
                <div className={classes.line4}></div>
              </ListItemIcon> : null
                } 
              </ListItem>
            </Link>
          </List>
          
          <IconButton className={classes.menuDots}>
          <MenuDots/>
          </IconButton>
        </div>
        );
  
}

export default MenuToolBarStamAd;