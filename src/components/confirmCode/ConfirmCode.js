import { Container } from '@material-ui/core'
import React from 'react'
import ConfirmCodeStyles from '../../styles/confirmCode/ConfirmCodeStyles'

const ConfirmCode = () => {
  const classes = ConfirmCodeStyles();
  
  return (
    <Container className={`${classes.mainContainer}`} maxWidth="sm">

    </Container>
  )
}

export default ConfirmCode
