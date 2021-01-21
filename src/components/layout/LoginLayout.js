import { FormControl, Grid, InputLabel, MenuItem, Select } from "@material-ui/core";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import SvgLeftCircle from "../../assets/images/svgFiles/svgLogin/SvgLeftCircle";
import SvgLeftGroup from "../../assets/images/svgFiles/svgLogin/SvgLeftGroup";
import SvgRightGroup from "../../assets/images/svgFiles/svgLogin/SvgRightGroup";
import SvgFacebook from "../../assets/images/svgFiles/svgNetworks/facebookBlack";
import SvgInstagram from "../../assets/images/svgFiles/svgNetworks/instagramBlack";
import SvgWhatsApp from "../../assets/images/svgFiles/svgNetworks/whatsAppBlack";
import SvgFooterCircles from "../../assets/images/svgFiles/svgRegisterLayout/SvgFooterCircles";
import SvgLogo from "../../assets/images/svgFiles/svgRegisterLayout/SvgLogo";
import SvgTranslation from "../../assets/images/svgFiles/svgRegisterLayout/SvgTranslation";
import { TranslationContext } from "../../context/translation/TranslationContext";
import LoginLayoutStyles from '../../styles/layout/LoginLayoutStyles';

const LoginLayout = ({children}) => {

  const classes = LoginLayoutStyles();

  const { langCode, setLanguage, updateTranslate } = useContext(TranslationContext)

  const renderLanguages = code => (
    <MenuItem value={code} selected={code === langCode}>
      {code}
    </MenuItem>
  )

  const onLanguageSelect = (e) => {
    setLanguage(e.target.value)
    localStorage.setItem('lng', e.target.value)
    updateTranslate(JSON.parse(localStorage.getItem('lng-data')))
  }

  return (
  <React.Fragment>
    <Grid container spacing={0} className={classes.gridContainer}>
      <Grid container className={`${classes.gridLeft}`} item lg={2} md={3} sm={2} xs={2} direction="column">
        <div className={`${classes.gridItem} ${classes.gridItemCircle}`}>
          <SvgLeftCircle className={classes.leftCircle}/>
        </div>
        <div className={`${classes.gridItem} ${classes.gridItemCorner}`}>
          <SvgLeftGroup className={classes.leftGroupCircles}/>
        </div>
      </Grid>

      <Grid container className={`${classes.gridCenter}`} item lg={8} md={6} sm={8} xs={8} direction="column">
        <div className={`${classes.gridItem} ${classes.gridItemLogo}`}>
          <Link
            to={`${process.env.REACT_APP_HOMEPAGE}`}
          >
            <SvgLogo/>
          </Link>
        </div>
        <div className={`${classes.gridItem} ${classes.gridMainItem}`}>
          <FormControl id="selectorLanguage" className={`${classes.divSelectLanguage}`}>
            <InputLabel className={`${classes.labelSelectLanguage}`}>
              <SvgTranslation/>
            </InputLabel>
            <Select
              value={langCode}
              onChange={onLanguageSelect}
              className={`${classes.selectLanguage}`}
            >
              {renderLanguages('EN')}
              {renderLanguages('ES')}
            </Select>
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
            <SvgFooterCircles className={classes.footerCirclesLogo}/>
          </div>
        </div>
      </Grid>
      
      <Grid container className={`${classes.gridRight}`} item lg={2} md={3} sm={2} xs={2} direction="column">
        <div className={`${classes.gridItem} ${classes.gridItemRightGroup}`}>
          <SvgRightGroup className={classes.rightGroup}/>
        </div>
      </Grid>
    </Grid>
  </React.Fragment>
  );
};
export default LoginLayout; 