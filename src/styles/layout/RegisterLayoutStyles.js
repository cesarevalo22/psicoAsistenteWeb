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
    '& path': {
      fill: theme.palette.colors.turquoise
    }
  },
  
  neonBlueCircle: {
    '& path': {
      fill: theme.palette.colors.neonBlue
    }
  },

  footerCirclesLogo: {
    width: '145px',
    height: '71px',
    ['@media (max-height:810px)']: {// eslint-disable-line no-useless-computed-key
      width: '125px',
      height: '55px',
    },
  },
  whatsappLogo: {
    width: '55px',
    height: '55px',
    ['@media (max-height:810px)']: {// eslint-disable-line no-useless-computed-key
      width: '45px',
      height: '45px',
    },
  },
  facebookLogo: {
    width: '55px',
    height: '55px',
    ['@media (max-height:810px)']: {// eslint-disable-line no-useless-computed-key
      width: '45px',
      height: '45px',
    },
  },
  instagramLogo: {
    width: '55px',
    height: '55px',
    ['@media (max-height:810px)']: {// eslint-disable-line no-useless-computed-key
      width: '45px',
      height: '45px',
    },
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
      marginBottom: '10px',
    },
  },

  gridMainItem: {
    marginBottom: '50px',
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
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  gridRight: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between'
  }

}));

export default RegisterLayoutStyles;
