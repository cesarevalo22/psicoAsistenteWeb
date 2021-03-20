import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = "78px";

const HomePageStyles = makeStyles((theme) => ({

  prueba:{
    "&::-webkit-scrollbar":{
      display: "none"
  },
  },
  root:{
    display:"flex",
  },

  container: {
    display: "block",
    width: "90.6%",
    paddingLeft: "14px",
    marginLeft: "100px",
    marginRight: "0px",
    marginTop: "90px",
    position: "absolute",
    overflowX: "auto",
    overflowY: "hidden",

  },


  appBar: {
    width: `calc(100% - ${drawerWidth})`,
    height: '81px',
    boxShadow: 'none',
    boxShadow:'0px 0px 1px -1px rgba(0,0,0,0.2), 0px 1px 0px 0px rgba(0,0,0,0.14), 0px 0px 0px 0px rgba(0,0,0,0.12)',
  },

  line: {
    borderLeft: '1px solid #E6E8F1',
    height: '200vh',
    marginLeft: '20px',
  },
  toolbar: {
    position: 'relative',
    height: '81px',
    padding: '0px',
    backgroundColor: '#ffffff',
  },

  divTextHeader: {
    fontFamily: 'Roboto',
    margin: 'auto',
    marginRight: '12px',
    marginLeft: '125px',
    textAlign: 'right',
    
  },

  helloHeader: {
    width: '297px',
    fontSize: '16px',
    fontWeight: '300',
    lineHeight: 'normal',
    color: '#474747',
    opacity: '0.5',
    '& span': {
      fontWeight: '300',
    },
  },

  titleHeader: {
    fontSize: '13px',
    fontWeight: 'normal',
    lineHeight: '0.92',
    color: '#636e71',
  },

  divAvatarHeader: {
    margin: 'auto',
    marginRight: '0px',
    marginLeft: '0px',
    '& button': {
      padding: '0px',
    },
  },

  badgeAvatarHeader: {
    '& span': {
      right: '2%',
      padding: '0',
      backgroundColor: '#ffffff',
    },
  },

  avatarHeader: {
    letterSpacing: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    fontSize: '16px',
    fontWeight: 'normal',
    lineHeight: '1.56',
    textAlign: 'center',
    backgroundColor: '#262822',
  },

  
  divMesagge: {
    marginLeft: 'auto',
    marginRight: '0',
    fill: '#0d7b40',
  },

  divText: {
    '& p': {
      fontFamily: 'Roboto',
      color: '#0d7b40',
      fontSize: '14px',
      marginLeft: '6px',
      marginTop: '8px',
      width:'90px',
    },
  },

  line2: {
    borderLeft: '1px solid #E6E8F1',
    height: '82px',
    marginLeft: '20px',
  },

  line3: {
    borderLeft: '1px solid #E6E8F1',
    height: '82px',
    marginLeft: '20px',
  },
  
  divNot: {
    marginLeft: '34px',
    fill: '#979797',
  },
 

}));

export default HomePageStyles;
