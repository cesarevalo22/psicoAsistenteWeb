import { makeStyles } from '@material-ui/core/styles';

const RegisterLayoutStyles = makeStyles((theme) => ({
  gridContainer: {
    width: "100%",
    height: "100vh",
    margin: "0",
    padding: "0",
    backgroundColor: theme.palette.colors.background,
    '& .MuiGrid-container': {
      padding: '0'
    }
  },

  gridItem: {
    display: 'flex',
    maxWidth: "100%"
  },

  gridItemCircle: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '20%'
  },

  gridItemRightCircle: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: '35%',
    paddingBottom: '25%'
  },

  gridItemCharacter: {
    justifyContent: 'center',
    paddingLeft: '8%',
    paddingTop: '20%'
  },

  gridItemHelp: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    paddingRight: '10%',
    paddingBottom: '10%'
  },

  gridItemCorner: {
    alignItems: 'flex-end'
  },

  turquoiseCircle: {
    '& path': {
      fill: theme.palette.colors.turquoise
    }
  },
  
  neonBlueCircle: {
    '& path': {
      fill: theme.palette.colors.neonBlue
    }
  },

  darkCyanCircle: {
    width: '124px',
    height: '121px',
    '& path': {
      fill: theme.palette.colors.darkCyan
    }
  },

  helpButton: {
    width: '86px',
    height: '85px',
    borderRadius: '50%',
    fontSize: '20px',
    backgroundColor: theme.palette.colors.orange,
    '&:hover': {
      backgroundColor: theme.palette.colors.red
    },
    '& .MuiButton-startIcon': {
      marginRight: '0'
    },
    '& .MuiSvgIcon-root': {
      fontSize: '38px'
    }
  },

  gridItemFooter: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },

  divSocialNetworks: {
    marginTop: '5%'
  },

  buttonWhatsapp: {
    width: '25px',
    height: '35px',
    color: '#32BA46',
    marginRight: '20px',
    transition: 'all .3s ease-out',
    '&:hover': {
      transition: 'all .3s ease-in',
      color: '#1c8d2d'
    },
    '& .MuiSvgIcon-root': {
      fontSize: '55px'
    }
  },

  buttonFacebook: {
    width: '25px',
    height: '35px',
    color: '#1877F3',
    marginRight: '20px',
    '&:hover': {
      '& .MuiSvgIcon-root': {
        color: '#235ca5'
      }
    },
    '& .MuiSvgIcon-root': {
      fontSize: '55px'
    }
  },

  buttonInstagram: {
    width: '25px',
    height: '35px',
    color: '#D13C99',
    marginRight: '20px',
    '&:hover': {
      '& .MuiSvgIcon-root': {
        color: '#F64F4F'
      }
    },
    '& .MuiSvgIcon-root': {
      fontSize: '55px'
    }
  },

  gridItemLogo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '5%'
  },

  gridMainItem: {
    maxWidth: '100%',
    display: 'flex',
    justifyContent: 'center'
  }

}));

export default RegisterLayoutStyles;
