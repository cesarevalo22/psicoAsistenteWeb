import { makeStyles } from "@material-ui/core/styles";
const RegisterStyles = makeStyles((theme) => ({
  
  mainContainer: {
    maxWidth: '100%',
  },

  container2: {
    display: "block",
    width: "547px",
    height: "453px",
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
    marginTop: "23px",
  },
  sub2: {
    display: "flex",
    justifyContent: "center",
    margin: "auto",
    marginTop: "37px",
    fontFamily: ["Roboto", "sans-serif"].join(","),
    fontStyle: "normal",
    fontWeight: "300px",
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

  sub3: {
    width: "82%",
    display: "flex",
    justifyContent: "center",
    margin: "auto",
    marginTop: "37px",
    fontFamily: ["Roboto", "sans-serif"].join(","),
    fontStyle: "normal",
    fontWeight: "300px",
    fontSize: "18px",
    lineHeight: "21px",
    color: "#000000",
    "& p": {
      textAlign: "center",
      marginTop: "0",
    },
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
    width:"88%",
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

}));
export default RegisterStyles;
