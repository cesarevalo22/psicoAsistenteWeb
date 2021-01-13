import { makeStyles } from '@material-ui/core/styles';

const LoginLayoutStyles = makeStyles((theme) => ({
  gridContainer: {
    position: "fixed",
    top: "0",
    bottom: "0",
    left: "0",
    right: "0",
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
    top: '50%',
  },

  gridItemRightCircle: {
    position: 'absolute',
    top: '20%',
  },

  gridItemCharacter: {
    position: 'absolute',
    top: '35%',
  },

  gridItemRightGroup: {
    position: 'absolute',
    bottom: '0',
    right: '0',
  },

  gridItemCorner: {
    position: 'absolute',
    bottom: '0',
    left: '0',
  },

  leftCircle: {
    width: '45px',
    height: '45px',
  },

  leftGroupCircles: {
    width: '118px',
    height: '142px',
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


  rightGroup: {
    width: '380px',
    height: '340px',
  },

  gridItemFooter: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 'auto', 
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
      margin:"auto",
    },
  },

  gridMainItem: {
    position: 'relative',
    marginBottom: '50px',
    margin: 'auto',
    ['@media (max-height:810px)']: {// eslint-disable-line no-useless-computed-key
      marginBottom: '10px',
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
    justifyContent: 'space-between'
  },

  gridRight: {
    height: '100vh',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
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

export default LoginLayoutStyles;
