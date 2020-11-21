import { makeStyles } from "@material-ui/core/styles";
const MailNotificationStyles = makeStyles((theme) => ({
  
  mainContainer: {
    height: '100vh',
    background: "#ECECEC",
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
    display: "grid",
    gridTemplateRows: "104px auto 181px"
  },

  logo:{
    margin: "auto",
  },

  contMessage : {
    width:"auto",
    height:"436px",
    display: "grid",
    gridTemplateRows: "218px 39px auto",
    background: "#ffffff"
  },

  contImageMessage: {
    display: "flex",
    marginTop: "101px",
    marginLeft: "auto",
    marginRight: "auto",
  },

  sub1: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "8px",
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
    marginTop: "10px",

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
      margin: "5px",
    }
  },

  container3: {
    display: "grid",
    gridTemplateRows: "50%"
  },

  circle2:{
    display: "flex",
    marginLeft: "50%",
    marginTop: "25%"
  },

  contButtonHelp:{
    marginBottom: "10%",
    marginTop: "auto",
    marginLeft:"auto",
    marginRight:"10%"

  },

}));
export default MailNotificationStyles;
