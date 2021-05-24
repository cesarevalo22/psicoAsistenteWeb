import { FormControl, Grid, InputLabel, MenuItem, Select } from "@material-ui/core";
import React  from "react";
import { Link } from "react-router-dom";
import SicoAsistenteLogo from "../../assets/images/svgFiles/svgLogin/SicoAsistenteLogo";
import SvgCircle from "../../assets/images/svgFiles/svgLogin/SvgCircle";
import SvgFacebook from "../../assets/images/svgFiles/svgNetworks/facebookBlack";
import SvgInstagram from "../../assets/images/svgFiles/svgNetworks/instagramBlack";
import SvgWhatsApp from "../../assets/images/svgFiles/svgNetworks/whatsAppBlack";
import SvgLogo from "../../assets/images/svgFiles/svgRegisterLayout/SvgLogo";
import SvgTranslation from "../../assets/images/svgFiles/svgRegisterLayout/SvgTranslation";
import LoginLayoutStyles from '../../styles/layout/LoginLayoutStyles';

const LoginLayout = ({children}) => {

  const classes = LoginLayoutStyles();

  return (
  <React.Fragment>
    <Grid container spacing={0} className={classes.gridContainer}>
      <Grid container className={`${classes.gridLeft}`} item lg={2} md={3} sm={2} xs={2} direction="column">
       
        <div className={`${classes.gridItem} ${classes.gridItemCorner}`}>
          <SvgCircle className={classes.leftGroupCircles}/>
        </div>
      </Grid>

      <Grid container className={`${classes.gridCenter}`} item lg={8} md={6} sm={8} xs={8} direction="column">
        <div className={`${classes.gridItem} ${classes.gridItemLogo}`}>
            <SvgLogo/>
        </div>
        <div className={`${classes.gridItem} ${classes.gridMainItem}`}>
          <FormControl id="selectorLanguage" className={`${classes.divSelectLanguage}`}>
            <InputLabel className={`${classes.labelSelectLanguage}`}>
              <SvgTranslation/>
            </InputLabel>
          </FormControl>
          {children}
        </div>
        <div className={`${classes.gridItem} ${classes.gridItemFooter}`}>
          <div className={`${classes.divSocialNetworks}`}>
            <a
              href={`${process.env.REACT_APP_WHATSAPP}`}
              target='_blank'
              rel="noopener noreferrer"
              className={`${classes.buttonSocialNetwork}`}
            >
              <SvgWhatsApp className={classes.whatsappLogo} />
            </a>
            <a
              href={`${process.env.REACT_APP_FACEBOOK}`}
              target='_blank'
              rel="noopener noreferrer"
              className={`${classes.buttonSocialNetwork}`}
            >
              <SvgFacebook className={classes.facebookLogo} />
            </a>
            <a
              href={`${process.env.REACT_APP_INSTAGRAM}`}
              target='_blank'
              rel="noopener noreferrer"
              className={`${classes.buttonSocialNetwork}`} 
            >
              <SvgInstagram className={classes.instagramLogo} />
            </a>
          </div>
          <div className={`${classes.divFooterCircles}`}>
            <SicoAsistenteLogo width={"6.5vw"} heigth ={"6.5vh"} className={classes.footerCirclesLogo}/>
          </div>
        </div>
      </Grid>
      
      <Grid container className={`${classes.gridRight}`} item lg={2} md={3} sm={2} xs={2} direction="column">
        <div className={`${classes.gridItem} ${classes.gridItemRightGroup}`}>
          <SvgCircle className={classes.leftGroupCircles}/>
        </div>
      </Grid>
    </Grid>
  </React.Fragment>
  );
};
export default LoginLayout; 