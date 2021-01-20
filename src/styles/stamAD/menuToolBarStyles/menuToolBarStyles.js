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
    '& .MuiContainer-root': {
      paddingLeft: '0',
      paddingRight: '0',
    },
    ' & .MuiList-root': {
      marginTop: '150px',
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

  },

  leftIcon: {
    marginLeft: '0px',
    marginRight: '20px',
    width: '18px',
    minWidth: '18px',
    fill: '#929292',
  },


  leftIconC: {
    marginLeft: '0px',
    marginRight: '20px',
    width: '18px',
    minWidth: '18px',
    fill: '#F6134B',
  },

  rightIcon: {
    marginLeft: '-13px',
    marginTop:'8px',
    width: '10px',
   },

   line4:{
    borderLeft: '4px solid #F6134B',
    height: '25px',
   }

}));

export default HomePageStyles;
