import { makeStyles } from "@material-ui/core/styles";
const RegisterStyles = makeStyles((theme) => ({
  
  mainContainer: {
    maxWidth: '100%',
  },

  container2: {
    display: "block",
    width: "420px",
    height: "419px",
    margin: "auto",
    boxShadow: "0px 6px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "12px",
      [theme.breakpoints.down('sm')]: {
      width: '370px',
      height: '419px',
    },
    [theme.breakpoints.down('xs')]: {
      width: '320px',
      height: '419px',
      '& p ':{
        alignItems:"center",
      }
      //height: '48px',
    },
  },

  sub1: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "0",
    fontFamily: ["Roboto", "sans-serif"].join(","),
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "15px",
    lineHeight: "20px",
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
    fontSize: "15px",
    lineHeight: "20px",
    color: "#1B3355",
    [theme.breakpoints.down('xs')]: {
      width: '75%',
      display: "inline-block",
      marginLeft: '73px',
    },
  },

  containerTitle:{
    paddingTop: "5px",
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
    height: "50px",
    marginBottom: "0px",
    background: "white",
    border: "0px transparent",
    margin: "auto",
    marginTop: "0px",
    fontSize:"13px",
    "& .MuiInput-input": {
      fontSize:"12px",
    },
    "& .MuiFormLabel-root.Mui-error": {
      marginLeft: "18px",
    },
    "& .MuiInputLabel-animated": {
      marginLeft: "18px",
      fontSize:"12px",
    },
    "& .MuiFormLabel-root.Mui-": {
      marginLeft: "18px",
    },
    "& .MuiInputBase-input": {
      marginLeft: "18px",
    }

    
  },

  contPoliticas:{
    width: "auto",
    color: "#BFBFBF",
    display: "flex",
    margin:"auto",
    justifyContent:"center",

      '& p': {
        fontSize:"13px",
        textAlign:"left",
      },
        [theme.breakpoints.down('xs')]: {
      width: 'auto',
      '& p ':{
        alignItems:"center",
        
      }
    },
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
      height: "42px",
      marginTop: "7px",
      '& p ':{
        alignItems:"center",
        width:'auto',
        margin:'0',
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
    marginTop: "0px",
    height: "42px",
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

}));
export default RegisterStyles;
