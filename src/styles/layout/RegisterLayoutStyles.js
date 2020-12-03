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
    position: 'fixed',
    left: '5%',
    top: '10%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  gridItemRightCircle: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: '35%',
    paddingBottom: '25%'
  },

  gridItemCharacter: {
    position: 'fixed',
    left: '5%',
    top: '40%',
    justifyContent: 'center',
  },

  gridItemHelp: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    paddingRight: '10%',
    paddingBottom: '10%'
  },

  gridItemCorner: {
    position: 'fixed',
    left: '0%',
    bottom: '0%',
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
    position: 'fixed',
    top: '20%',
    right: '5%',
    width: '124px',
    height: '121px',
    '& path': {
      fill: theme.palette.colors.darkCyan
    }
  },

  helpButton: {
    position: 'fixed',
    bottom: '5%',
    right: '3%',
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
    ['@media (max-height:800px)']: {// eslint-disable-line no-useless-computed-key
      padding: '5% 0',
    },
  },

  divSocialNetworks: {
    marginTop: '5%'
  },

  buttonSocialNetwork: {
    marginRight: '25px',
  },

  gridItemLogo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    ['@media (max-height:800px)']: {// eslint-disable-line no-useless-computed-key
      padding: '5% 0',
    },
  },

  gridMainItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  gridCenter: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  gridLeft: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
  },

  gridRight: {
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    },
  }

}));

export default RegisterLayoutStyles;
