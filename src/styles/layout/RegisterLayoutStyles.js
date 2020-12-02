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
  }

}));

export default RegisterLayoutStyles;
