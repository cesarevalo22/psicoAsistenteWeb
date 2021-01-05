import { Button, FormControl, Grid, InputLabel, MenuItem, Select } from '@material-ui/core';
import React, { useContext } from 'react'
import SvgCharacter from '../../assets/images/svgFiles/svgRegisterLayout/SvgCharacter';
import SvgCornerCircle from '../../assets/images/svgFiles/svgRegisterLayout/SvgCornerCircle';
import SvgCircle from '../../assets/images/svgFiles/svgRegisterLayout/SvgCircle';
import RegisterLayoutStyles from '../../styles/layout/RegisterLayoutStyles';
import SvgLogo from '../../assets/images/svgFiles/svgRegisterLayout/SvgLogo';
import SvgFooterCircles from '../../assets/images/svgFiles/svgRegisterLayout/SvgFooterCircles';
import { Link } from 'react-router-dom';
import SvgHelp from '../../assets/images/svgFiles/svgHelp';
import SvgFacebook from '../../assets/images/svgFiles/svgNetworks/facebookBlack';
import SvgWhatsApp from '../../assets/images/svgFiles/svgNetworks/whatsAppBlack';
import SvgInstagram from '../../assets/images/svgFiles/svgNetworks/instagramBlack';
import { TranslationContext } from '../../context/translation/TranslationContext';
import SvgTranslation from '../../assets/images/svgFiles/svgRegisterLayout/SvgTranslation';

const RegisterLayout = ({ children, showAllFooter, showCharacter}) => {
  
  const classes = RegisterLayoutStyles();

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
    <Grid container spacing={0} className={classes.gridContainer}>
      <Grid className={`${classes.gridLeft}`} container item lg={2} md={3} sm={2} xs={2} direction="column">
        <div className={`${classes.gridItem} ${classes.gridItemCircle}`}>
          <SvgCircle className={classes.turquoiseCircle}/>
        </div>
        <div className={`${classes.gridItem} ${classes.gridItemCharacter}`}>
          {showCharacter && (
            <SvgCharacter className={classes.character} />
          )}
        </div>
        <div className={`${classes.gridItem} ${classes.gridItemCorner}`}>
          <SvgCornerCircle className={classes.neonBlueCircle}/>
        </div>
      </Grid>
      
      <Grid className={`${classes.gridCenter}`} container item lg={8} md={6} sm={8} xs={8} direction="column">
        <div className={`${classes.gridItem} ${classes.gridItemLogo}`}>
          <Link
            to={`${process.env.REACT_APP_HOMEPAGE}`}
          >
            <SvgLogo/>
          </Link>
        </div>
        <div className={`${classes.gridItem} ${classes.gridMainItem}`}>
          <FormControl className={`${classes.divSelectLanguage}`}>
            <InputLabel className={`${classes.labelSelectLanguage}`}>
              <SvgTranslation/>
            </InputLabel>
            <Select
              value={langCode}
              displayEmpty
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
          {showAllFooter && (
            <div className={`${classes.divFooterCircles}`}>
              <SvgFooterCircles className={classes.footerCirclesLogo}/>
            </div>
          )}
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
        </div>
      </Grid>
      
      <Grid className={`${classes.gridRight}`} container item lg={2} md={3} sm={2} xs={2} direction="column">
        <div className={`${classes.gridItem} ${classes.gridItemRightCircle}`} >
          <SvgCircle className={classes.darkCyanCircle}/>
        </div>
        <div className={`${classes.gridItem} ${classes.gridItemHelp}`} >
          <Button
            variant="contained"
            size="large"
            className={classes.helpButton}
            startIcon={<SvgHelp/>}
          >
          </Button>
        </div>
      </Grid>
    </Grid>
  )
}

export default RegisterLayout
