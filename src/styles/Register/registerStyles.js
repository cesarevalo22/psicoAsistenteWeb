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
    display: "grid",
    gridTemplateRows: "104px 111px auto"
  },

  logo:{
    margin: "auto",
  },

  containerTitle: {
    
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
