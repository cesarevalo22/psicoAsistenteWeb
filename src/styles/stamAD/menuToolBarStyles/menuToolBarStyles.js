import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = "71px";

const HomePageStyles = makeStyles((theme) => ({

  drawer: {
    width: drawerWidth,
    height: "100vh",
    backgroundColor: '#FFFFFF',
    marginTop: 'auto',
    marginLeft: '5px',
    position: 'fixed',
    borderRight: "1px solid #E6E8F1",
    overflowY: 'auto',
    overflowX: 'hidden',
    "&::-webkit-scrollbar":{
      width: "2px",
  },
  "&::-webkit-scrollbar-thumb":{
    background: "#ccc",
  },
    '& .MuiContainer-root': {
      paddingLeft: '0',
      paddingRight: '0',
    },
    ' & .MuiList-root': {
      marginTop: '100px',
    },
    '& .MuiListItem-root': {
      paddingBottom: '16px !important',
    },

    '& .MuiListItem-button': {
      transition: 'none',
      '&:hover': {
        backgroundColor: '#FFFFFF',
      },
    },
    '& .MuiListItem-gutters':{
      paddingLeft:'14px',
    },

  },

 /*  drawerT: {
    width: drawerWidth,
    backgroundColor: 'transparent',
    height: '100vh',
    flexShrink: 0,
    position: 'absolute',
  }, */

  logo:{
    textAlign: "center",
  },

  leftIcon: {
    marginLeft: '0px',
    marginRight: '20px',
    width: '28px',
    minWidth: '18px',
    fill: '#929292',
  },


  leftIconC: {
    marginLeft: '0px',
    marginRight: '20px',
    width: '28px',
    minWidth: '18px',
    fill: theme.palette.colors.greenicon
  },

  rightIcon: {
    marginLeft: '5px',
    marginTop:'8px',
    width: '10px',
   },

   line4:{
    borderLeft: '4px solid',
    borderLeftColor: theme.palette.colors.greenicon,
    height: '25px',
   },

   menuDots:{
    position: "relative",
    bottom: "-60px",
   }
}));

export default HomePageStyles;
