import { Button, Grid } from '@material-ui/core';
import React from 'react'
import SvgCharacter from '../../assets/images/svgFiles/svgRegisterLayout/SvgCharacter';
import SvgCornerCircle from '../../assets/images/svgFiles/svgRegisterLayout/SvgCornerCircle';
import SvgCircle from '../../assets/images/svgFiles/svgRegisterLayout/SvgCircle';
import RegisterLayoutStyles from '../../styles/layout/RegisterLayoutStyles';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

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
      <Grid item xs={7}>
        Col2
      </Grid>
      <Grid container item xs={2} direction="column">
        <Grid className={`${classes.gridItem} ${classes.gridItemRightCircle}`} item xs={9}>
          <SvgCircle className={classes.darkCyanCircle}/>
        </Grid>
        <Grid className={`${classes.gridItem} ${classes.gridItemHelp}`} item xs={3}>
          <Button
            variant="contained"
            size="large"
            className={classes.helpButton}
            startIcon={<HelpOutlineIcon/>}
          >
          </Button>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default RegisterLayout
