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
    marginTop: "10px    "
  },

  containerFields:{
    display: "grid",
    margin: "auto"
  },

  textbox: {
    width:"83%",
    height: "60px",
    marginBottom: "0px",
    background: "white",
    border: "0px transparent",
    margin: "auto",
    marginTop: "5px",
    "& .MuiFormLabel-root.Mui-error": {
      marginLeft: "18px",
    },
    "& .MuiInputLabel-animated": {
      marginLeft: "18px",
    },
    "& .MuiFormLabel-root.Mui-": {
      marginLeft: "18px",
    },
    "& .MuiInputBase-input": {
      marginLeft: "18px",
    }

    
  },

  contPoliticas:{
    width: "590px",
    color: "#BFBFBF",
    display: "flex",
    margin:"auto",
  
        [theme.breakpoints.down('xs')]: {
      width: '320px',
      '& p ':{
        alignItems:"center",
      }
    },
    [theme.breakpoints.down('sm')]: {
      width: '320px',
      height: "76px",
      marginTop: "23px",
      '& p ':{
        alignItems:"center",
      }
  }
  },

    políticasTitle: {
    cursor: "pointer",
    fontStyle: "normal",
    fontWeight: "700",
    color: "#FF8FAB",
    textDecoration: "underline",
  },
  
  contButtonForm: {
    marginTop: "15px",
    height: "55px",
    display: "flex",
  },

  submit: {
    cursor: "pointer",
    width: "190px",
    height: "100%",
    background: "#F6134B",
    boxShadow: "0px 12px 35px rgba(52, 77, 178, 0.340636)",
    borderRadius: "3px",
    border: "1px",
    margin: "auto",
    color: "#ffffff"
  },

  submitDisabled: {
    width: "190px",
    height: "100%",
    background: "#ff8fab",
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
    marginTop:"5px", 
    display: "flex",
    justifyContent: "center",
    height: "63px",
  },

  contNeworks:{
    display: "flex",
    marginBottom: "53px",
    justifyContent: "center",
    
    "& p":{
      margin: "15px",
      cursor: "pointer",
    },[theme.breakpoints.down('xs')]: {
      
    },
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

  buttonHelp:{
    "&.MuiButton-containedSizeLarge": {
      background: "#F99211"
    }
  }

}));
export default RegisterStyles;
