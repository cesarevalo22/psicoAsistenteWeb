import { Grid } from '@material-ui/core';
import React from 'react'
import RegisterLayoutStyles from '../../styles/layout/RegisterLayoutStyles';

const RegisterLayout = ({ children }) => {
  const classes = RegisterLayoutStyles();

  return (
    <Grid container spacing={2} className={classes.gridContainer}>
      <Grid item xs={4}>
        Col1
      </Grid>
      <Grid item xs={4}>
        Col2
      </Grid>
      <Grid item xs={4}>
        Col3
      </Grid>
    </Grid>
  )
}

export default RegisterLayout
