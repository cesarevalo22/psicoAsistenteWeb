import { Grid } from '@material-ui/core';
import React from 'react'
import SvgCharacter from '../../assets/images/svgFiles/svgRegisterLayout/SvgCharacter';
import SvgCornerCircle from '../../assets/images/svgFiles/svgRegisterLayout/SvgCornerCircle';
import SvgLeftCircle from '../../assets/images/svgFiles/svgRegisterLayout/SvgLeftCircle';
import RegisterLayoutStyles from '../../styles/layout/RegisterLayoutStyles';

const RegisterLayout = ({ children }) => {
  
  const classes = RegisterLayoutStyles();

  return (
    <Grid container spacing={2} className={classes.gridContainer}>
      <Grid container item xs={3} direction="column">
        <Grid className={`${classes.gridItem} ${classes.gridItemCircle}`} item xs={4}>
          <SvgLeftCircle/>
        </Grid>
        <Grid className={`${classes.gridItem} ${classes.gridItemCharacter}`} item xs={6}>
          <SvgCharacter/>
        </Grid>
        <Grid className={`${classes.gridItem} ${classes.gridItemCorner}`} item xs={2}>
          <SvgCornerCircle/>
        </Grid>
      </Grid>
      <Grid item xs={6}>
        Col2
      </Grid>
      <Grid item xs={3}>
        Col3
      </Grid>
    </Grid>
  )
}

export default RegisterLayout
