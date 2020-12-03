import { Button, Grid } from '@material-ui/core';
import React from 'react'
import SvgCharacter from '../../assets/images/svgFiles/svgRegisterLayout/SvgCharacter';
import SvgCornerCircle from '../../assets/images/svgFiles/svgRegisterLayout/SvgCornerCircle';
import SvgCircle from '../../assets/images/svgFiles/svgRegisterLayout/SvgCircle';
import RegisterLayoutStyles from '../../styles/layout/RegisterLayoutStyles';
import SvgLogo from '../../assets/images/svgFiles/svgRegisterLayout/SvgLogo';
import SvgFooterCircles from '../../assets/images/svgFiles/svgRegisterLayout/SvgFooterCircles';
import { Facebook, Instagram, WhatsApp } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import SvgHelp from '../../assets/images/svgFiles/svgHelp';
import SvgFacebook from '../../assets/images/svgFiles/svgNetworks/facebookBlack';
import SvgWhatsApp from '../../assets/images/svgFiles/svgNetworks/whatsAppBlack';
import SvgInstagram from '../../assets/images/svgFiles/svgNetworks/instagramBlack';

const RegisterLayout = ({ children }) => {
  
  const classes = RegisterLayoutStyles();

  return (
    <Grid container spacing={2} className={classes.gridContainer}>
      <Grid container item xs={3} direction="column">
        <Grid className={`${classes.gridItem} ${classes.gridItemCircle}`} item xs={4}>
          <SvgCircle className={classes.turquoiseCircle}/>
        </Grid>
        <Grid className={`${classes.gridItem} ${classes.gridItemCharacter}`} item xs={6}>
          <SvgCharacter/>
        </Grid>
        <Grid className={`${classes.gridItem} ${classes.gridItemCorner}`} item xs={2}>
          <SvgCornerCircle className={classes.neonBlueCircle}/>
        </Grid>
      </Grid>
      
      <Grid container item xs={6} direction="column">
        <Grid className={`${classes.gridItem} ${classes.gridItemLogo}`} item xs={2}>
          <SvgLogo/>
        </Grid>
        <Grid className={`${classes.gridItem} ${classes.gridMainItem}`} item xs={7}>
          {children}
        </Grid>
        <Grid className={`${classes.gridItem} ${classes.gridItemFooter}`} item xs={3}>
          <SvgFooterCircles/>
          <div className={`${classes.divSocialNetworks}`}>
            <Link
              to="login"
              variant="contained"
              size="large"
              className={`${classes.buttonSocialNetwork}`}
            >
              <SvgWhatsApp width={"40px"} height={"40px"} />
            </Link>
            <Link
              to="login"
              variant="contained"
              size="large"
              className={`${classes.buttonSocialNetwork}`}
            >
              <SvgFacebook width={"40px"} height={"40px"} />
            </Link>
            <Link
              to="login"
              variant="contained"
              size="large"
              className={`${classes.buttonSocialNetwork}`} 
            >
              <SvgInstagram width={"40px"} height={"40px"} />
            </Link>
          </div>
        </Grid>
      </Grid>
      
      <Grid container item xs={3} direction="column">
        <Grid className={`${classes.gridItem} ${classes.gridItemRightCircle}`} item xs={9}>
          <SvgCircle className={classes.darkCyanCircle}/>
        </Grid>
        <Grid className={`${classes.gridItem} ${classes.gridItemHelp}`} item xs={3}>
          <Button
            variant="contained"
            size="large"
            className={classes.helpButton}
            startIcon={<SvgHelp/>}
          >
          </Button>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default RegisterLayout
