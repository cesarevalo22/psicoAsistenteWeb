import { makeStyles } from "@material-ui/core/styles";
const RegisterStyles = makeStyles((theme) => ({
  
 
  container2: {
    display: "block",
    width: "547px",
    height: "477px",
    margin: "auto",
    boxShadow: "0px 6px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "12px",
      [theme.breakpoints.down('sm')]: {
      width: '370px',
      height: '477px',
    },
    [theme.breakpoints.down('xs')]: {
      width: '320px',
      height: '461px',
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
    marginTop: "10px",
  },
  sub2: {
    display: "flex",
    justifyContent: "center",
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
    marginTop: "37px",
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
    },[theme.breakpoints.down('sm')]: {
      marginTop: "37px",
    },[theme.breakpoints.down('xs')]: {
      marginTop: "10px",
    },

    
  },

  contButtonForm: {
    marginTop: "40px",
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
    color: "#ffffff",[theme.breakpoints.down('xs')]: {
      marginTop: "15px",
    }
  },

  submitDisabled: {
    width: "190px",
    height: "100%",
    background: "#ff8fab",
    boxShadow: "0px 12px 35px rgba(52, 77, 178, 0.340636)",
    borderRadius: "3px",
    border: "1px",
    margin: "auto",
    color: "#ffffff",[theme.breakpoints.down('xs')]: {
      marginTop: "15px",
    }
  }

}));
export default RegisterStyles;
