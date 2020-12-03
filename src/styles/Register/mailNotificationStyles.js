import { makeStyles } from "@material-ui/core/styles";
const MailNotificationStyles = makeStyles((theme) => ({
  
  mainContainer: {
    maxWidth: '100%',
  },

  circle1: {
    display: "flex",
    marginLeft: "46%",
    marginTop: "10%"
  },

  svgIcon1: {
    bottom: "-5px",
    position: "fixed",
    margin: "0",
  },

  container2: {
    width: "680px",
    height: "430px",
    margin: "auto",
    borderRadius: "12px",
      [theme.breakpoints.down('sm')]: {
      width: '370px',
      height: '623px',
    },
    [theme.breakpoints.down('xs')]: {
      width: '320px',
      height: 'auto',
      '& p ':{
        alignItems:"center",
      }
      //height: '48px',
    },
  },

  logo:{
    margin: "auto",
  },

  contMessage : {
    width:"auto",
    height:"436px",
    background: "#ffffff"
  },

  contImageMessage: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "35px auto 5px",
  },

  sub1: {
    display: "flex",
    justifyContent: "center",
    fontFamily: ["Roboto", "sans-serif"].join(","),
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "24px",
    lineHeight: "28px",
    color: "#1B3355",
  },

  sub2: {
    display: "flex",
    justifyContent: "center",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "-25px",

    fontFamily: ["Roboto", "sans-serif"].join(","),
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "16,41px",
    color: "#1B3355",
  },

  form: {
    marginTop: "0",
    marginBottom: "auto",
  },

  textbox: {
    width:"100%",
    marginBottom: "7px",
    background: "white",
    border: "0px transparent"
  },

  sgv5:{
    display: "flex",
    justifyContent:"center",
  },

  contFoot:{
    marginTop:"10px", 
    display: "grid",
    gridTemplateRows: "50%",
  },

  contNeworks:{
    display: "flex",
    marginBottom: "53px",
    justifyContent: "center",
    "& p":{
      margin: "15px",
    }
  },

  circle2:{
    display: "flex",
    marginTop: "25%",
    justifyContent: "center",
    marginLeft: "65px",
    
  },

  contButtonHelp:{
    bottom: "5px",
    position: "fixed",
    display:"flex",
    marginBottom:"3%",
    width: "24%",
    justifyContent: "flex-end"
  },

}));
export default MailNotificationStyles;
