import { makeStyles } from "@material-ui/core/styles";
const RegisterStyles = makeStyles((theme) => ({
  
  mainContainer: {
    height: '100vh',
    width: '100%',
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
    width: "547px",
    height: "590px",
    margin: "auto",
    boxShadow: "0px 6px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "12px",
      [theme.breakpoints.down('sm')]: {
      width: '370px',
      height: '590px',
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
    marginTop: "0px",
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
    [theme.breakpoints.down('xs')]: {
      width: '75%',
      display: "inline-block",
      marginLeft: '73px',
    },
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
    marginBottom: "0px",
    background: "white",
    border: "0px transparent",
    margin: "auto",
    marginTop: "5px",


  },

  contPoliticas:{
    width: "590px",
    color: "#BFBFBF",
    display: "flex",
    margin:"auto",
    "& span":{
      fontStyle: "normal",
      fontWeight: "700",
      color: "#FF8FAB",
      textDecoration: "underline",
    },
        [theme.breakpoints.down('xs')]: {
      width: '320px',
      '& p ':{
        alignItems:"center",
      }
    },
    [theme.breakpoints.down('sm')]: {
      width: '320px',
      height: "76px",
      marginTop: "35px",
      '& p ':{
        alignItems:"center",
      }
  }
  },
  
  contButtonForm: {
    marginTop: "15px",
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
    display: "flex",
    justifyContent: "center",
  },

  contNeworks:{
    display: "flex",
    marginBottom: "53px",
    justifyContent: "center",
    
    "& p":{
      margin: "15px",
    },[theme.breakpoints.down('xs')]: {
      
    },
  },

  container3: {
    display: "grid",
    gridTemplateRows: "50%"
  },

  circle2:{
    display: "flex",
    marginTop: "25%"
  },

  contButtonHelp:{
    bottom: "5px",
    position: "fixed",
    display:"block",
    marginLeft:"13%",
    marginBottom:"3%",
  },

  buttonHelp:{
    "&.MuiButton-containedSizeLarge": {
      background: "#F99211"
    }
  }

}));
export default RegisterStyles;
