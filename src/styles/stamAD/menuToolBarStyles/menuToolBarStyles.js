import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 0;

const HomePageStyles = makeStyles((theme) => ({

  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    backgroundColor: '#FFFFFF',
    marginTop: '190px',
    marginLeft: '5px',
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
