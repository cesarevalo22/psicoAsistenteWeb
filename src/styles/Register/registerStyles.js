import { makeStyles } from "@material-ui/core/styles";
const RegisterStyles = makeStyles((theme) => ({
  
  mainContainer: {
    maxWidth: '100%',
  },

  container2: {
    display: "block",
    width: "100%",
    height: "100%",
    margin: "auto",
    boxShadow: "0px 6px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "12px",
      [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: '100%',
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      height: '100%',
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
    fontWeight: "600",
    fontSize: "18px",
    lineHeight: "29px",
    color: "#575757",
    marginTop: "3%",
  },
  sub2: {
    display: "flex",
    justifyContent: "center",
    margin: "auto",
    fontFamily: ["Roboto", "sans-serif"].join(","),
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: "18px",
    lineHeight: "29px",
    textAlign: 'center',
    color: "#1B3355",
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      display: "inline-block",
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
    margin: "4% auto 0"
  },

  textbox: {
    width:"83%",
    height: "60px",
    marginBottom: "0px",
    background: "white",
    border: "0px transparent",
    margin: "auto",
    marginTop: "0px",
    fontSize:"13px",
    "& .MuiInput-input": {
      fontSize:"14px",
    },
    "& .MuiFormLabel-root.Mui-error": {
      marginLeft: "18px",
    },
    "& .MuiInputLabel-animated": {
      marginLeft: "18px",
      fontSize:"14px",
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
        margin:' auto 0',
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
    height: "42px",
    display: "flex",
    margin: "5%"
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
