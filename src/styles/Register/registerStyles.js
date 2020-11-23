import { makeStyles } from "@material-ui/core/styles";
const RegisterStyles = makeStyles((theme) => ({
  
  mainContainer: {
    height: '100vh',
    background: "#ECECEC",
  },

  circle1: {
    display: "flex",
    marginLeft: "25%",
    marginTop: "10%"
      
  },

  svgStrolling: {
    display: "flex",
    marginLeft: "25%",
    marginTop: "15%"
  },

  svgIcon1: {
    bottom: "-5px",
    position: "fixed",
    margin: "0",
  },

  

  container2: {
    display: "block",
    width: "63%",
    height: "70%",
    margin: "auto",
    boxShadow: "0px 6px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "12px",
  },

  logo:{
    justifyContent: "center",
    margin:"auto",
    display:"flex"
  },

  
  sub1: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "8px",
    fontFamily: ["Roboto", "sans-serif"].join(","),
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "24px",
    lineHeight: "28px",
    color: "#575757",
  },
  sub2: {
    display: "flex",
    justifyContent: "center",
    margin: "auto",
    fontFamily: ["Roboto", "sans-serif"].join(","),
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: "24px",
    lineHeight: "28px",
    color: "#1B3355",
  },

  containerTitle:{
    paddingTop: "15px",
  },

  form: {
    marginBottom: "auto",
    display: "block"
  },

  containerFields:{
    display: "grid",
    margin: "auto"
  },

  textbox: {
    width:"70%",
    marginBottom: "7px",
    background: "white",
    border: "0px transparent",
    margin: "auto",

  },
  
  contButtonForm: {
    height: "55px",
    display: "flex",
  },

  submit: {
    width: "190px",
    height: "100%",
    background: "#F6134B",
    boxShadow: "0px 12px 35px rgba(52, 77, 178, 0.340636)",
    borderRadius: "3px",
    border: "1px",
    margin: "auto",
    color: "#ffffff"
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

  buttonHelp:{
    "&.MuiButton-containedSizeLarge": {
      background: "#F99211"
    }
  }

}));
export default RegisterStyles;
