import { makeStyles } from '@material-ui/core/styles';

const RegisterLayoutStyles = makeStyles((theme) => ({
  gridContainer: {
    width: "100%",
    minHeight: "100vh",
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
    position: 'absolute',
    top: '10%',
  },

  gridItemRightCircle: {
    position: 'absolute',
    top: '20%',
  },

  gridItemCharacter: {
    position: 'absolute',
    top: '35%',
  },

  gridItemHelp: {
    position: 'absolute',
    bottom: '8%',
    right: '12%',
  },

  gridItemCorner: {
    position: 'absolute',
    bottom: '0',
    left: '0',
  },

  turquoiseCircle: {
    width: '90px',
    height: '90px',
    '& path': {
      fill: theme.palette.colors.turquoise
    }
  },

  character:{
    width: '20px',
    height: '20px',
  },
  
  neonBlueCircle: {
    width: '55px',
    height: '45px',
    '& path': {
      fill: theme.palette.colors.neonBlue
    }
  },

  footerCirclesLogo: {
    width: '120px',
    height: '50px',
    ['@media (max-height:810px)']: {// eslint-disable-line no-useless-computed-key
      width: '100px',
      height: '40px',
    },
  },
  whatsappLogo: {
    width: '35px',
    height: '35px',
    ['@media (max-height:810px)']: {// eslint-disable-line no-useless-computed-key
      width: '35px',
      height: '35px',
    },
  },
  facebookLogo: {
    width: '32px',
    height: '32px',
    ['@media (max-height:810px)']: {// eslint-disable-line no-useless-computed-key
      width: '32px',
      height: '32px',
    },
  },
  instagramLogo: {
    width: '32px',
    height: '32px',
    ['@media (max-height:810px)']: {// eslint-disable-line no-useless-computed-key
      width: '32px',
      height: '32px',
    },
  },

  darkCyanCircle: {
    width: '90px',
    height: '90px',
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
    justifyContent: 'center',
    margin: '0 auto 5%', 
    ['@media (max-height:800px)']: {// eslint-disable-line no-useless-computed-key
      // padding: '5% 0',
    },
  },

  divSocialNetworks: {
    marginTop: '5%',
  },

  divFooterCircles: {
    marginBottom: '18px',
    ['@media (max-height:810px)']: {// eslint-disable-line no-useless-computed-key
      margin: '0',
    },
  },

  buttonSocialNetwork: {
    marginRight: '25px',
  },

  gridItemLogo: {
    marginBottom: '18px',
    ['@media (max-height:810px)']: {// eslint-disable-line no-useless-computed-key
      //marginBottom: '10px',
      margin:"0 auto",
    },
  },

  gridMainItem: {
    position: 'relative',
    margin: 'auto',
    marginBottom: 'auto',
    //height: "75%",
    ['@media (max-height:810px)']: {// eslint-disable-line no-useless-computed-key
      marginBottom: 'auto',
    },
  },
  
  gridCenter: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    ['@media (max-height:804px)']: {// eslint-disable-line no-useless-computed-key
      justifyContent: 'end',
    },
  },

  gridLeft: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  gridRight: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  divSelectLanguage: {
    position: 'absolute',
    right: '0',
    marginRight: '3%',
    marginTop: '1%',
    '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
      borderBottom: 'none',
    },
    '& .MuiInput-underline:after': {
      borderBottom: 'none',
    },
    '& .MuiInput-underline:before': {
      borderBottom: 'none',
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: '0',
      '& label + .MuiInput-formControl': {
        marginTop: '5px'
      }
    },
    ['@media (max-height:810px)']: {// eslint-disable-line no-useless-computed-key
      [theme.breakpoints.down('sm')]: {
        marginTop: '0',
        '& label + .MuiInput-formControl': {
          marginTop: '5px'
        }
      },
    },
  },

  labelSelectLanguage: {
    '&.MuiInputLabel-shrink': {
      transform: 'translate(-24px, 20px) scale(1)'
    },
    ['@media (max-height:810px)']: {// eslint-disable-line no-useless-computed-key
      fontSize: '12px',
      [theme.breakpoints.down('sm')]: {
        '&.MuiInputLabel-shrink': {
          transform: 'translate(-20px, 10px) scale(.8)'
        }
      },
    },
    [theme.breakpoints.down('sm')]: {
      '&.MuiInputLabel-shrink': {
        transform: 'translate(-20px, 12px) scale(.8)'
      }
    },
  },

  selectLanguage: {
    borderRadius: '4px',
    boxShadow: '3px 1px 3px -1px rgba(0, 0, 0, 0.25)',
    ['@media (max-height:810px)']: {// eslint-disable-line no-useless-computed-key
      fontSize: '12px',
      [theme.breakpoints.down('xs')]: {
        fontSize: '11px'
      },
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '12px'
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '13px'
    },
  }

}));

export default RegisterLayoutStyles;
