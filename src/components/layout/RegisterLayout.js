import { Button, Grid } from '@material-ui/core';
import React from 'react'
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

const RegisterLayout = ({ children, showAllFooter, showCharacter}) => {
  
  const classes = RegisterLayoutStyles();

  return (
    <Grid container spacing={0} className={classes.gridContainer}>
      <Grid className={`${classes.gridLeft}`} container item lg={2} md={2} direction="column">
        <Grid className={`${classes.gridItem} ${classes.gridItemCircle}`} item xs={4}>
          <SvgCircle className={classes.turquoiseCircle}/>
        </Grid>
        <Grid className={`${classes.gridItem} ${classes.gridItemCharacter}`} item xs={6}>
          {showCharacter && (
            <SvgCharacter/>
          )}
        </Grid>
        <Grid className={`${classes.gridItem} ${classes.gridItemCorner}`} item xs={2}>
          <SvgCornerCircle className={classes.neonBlueCircle}/>
        </Grid>
      </Grid>
      
      <Grid className={`${classes.gridCenter}`} container item lg={8} md={8} sm={10} xs={12} direction="column">
        <Grid className={`${classes.gridItem} ${classes.gridItemLogo}`} item xs={2}>
          <Link
            to={`${process.env.REACT_APP_HOMEPAGE}`}
          >
            <SvgLogo/>
          </Link>
        </Grid>
        <Grid className={`${classes.gridItem} ${classes.gridMainItem}`} item xs={showAllFooter ? 7 : 8}>
          {children}
        </Grid>
        <Grid className={`${classes.gridItem} ${classes.gridItemFooter}`} item xs={showAllFooter ? 3 : 2}>
          {showAllFooter && (
            <div className={`${classes.divFooterCircles}`}>
              <SvgFooterCircles width="145px" height="71px"/>
            </div>
          )}
          <div className={`${classes.divSocialNetworks}`}>
            <Link
              to="login"
              variant="contained"
              size="large"
              className={`${classes.buttonSocialNetwork}`}
            >
              <SvgWhatsApp width={"55px"} height={"55px"} />
            </Link>
            <Link
              to="login"
              variant="contained"
              size="large"
              className={`${classes.buttonSocialNetwork}`}
            >
              <SvgFacebook width={"55px"} height={"55px"} />
            </Link>
            <Link
              to="login"
              variant="contained"
              size="large"
              className={`${classes.buttonSocialNetwork}`} 
            >
              <SvgInstagram width={"55px"} height={"55px"} />
            </Link>
          </div>
        </Grid>
      </Grid>
      
      <Grid className={`${classes.gridRight}`} container item lg={2} md={2} sm={2} direction="column">
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
