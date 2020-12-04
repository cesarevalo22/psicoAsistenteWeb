import { makeStyles } from '@material-ui/core/styles';

const ConfirmCodeStyles = makeStyles((theme) => ({
  mainContainer: {
    maxWidth: '100%',
    backgroundColor: '#FFF',
    padding: '0',
    boxShadow: "0px 6px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "12px",
  },

  containerForm: {
    display: "block",
    width: '615px',
    height: "350px",
    margin: "auto",
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
    },
  },

  divTitle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    margin: '26px auto 9px',
    color: '#575757',
    textAlign: 'center',
    fontSize: '24px',
    fontFamily: ["Roboto", "sans-serif"].join(","),
    fontWeight: '600',
    lineHeight: '28px'
  },

  sub: {
    margin: '0',
    color: '#1B3355',
    textAlign: 'center',
    fontSize: '24px',
    fontFamily: ["Roboto", "sans-serif"].join(","),
    fontWeight: '300',
    lineHeight: '28px'
  },
  
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },

  textbox: {
    fontFamily: ["Roboto", "sans-serif"].join(","),
    width:"423px",
    height: "60px",
    marginBottom: "-15px",
    background: "white",
    border: "0px transparent",
    margin: "auto",
    marginTop: "5%",
    '& label': {
      color: '#686868',
      fontFamily: ["Roboto", "sans-serif"].join(","),
    },
    "& .MuiFormLabel-root.Mui-error": {
      marginLeft: "18px",
      marginTop: "15px",
      fontSize: "14px",
    },
    "& .Mui-focused.MuiFormLabel-root.Mui-error": {
      color: 'red'
    },
    "& .MuiInputLabel-animated": {
      marginLeft: "18px",
      marginTop: "15px",
      fontSize: "14px",
      fontWeight: "400",
    },
    "& .MuiFormLabel-root.Mui-": {
      marginLeft: "18px",
    },
    "& .MuiFormHelperText-root": {
      marginLeft: "18px",
    },
    "& .Mui-focused.MuiFormHelperText-root": {
      color: 'red'
    },
    "& .MuiInputBase-input": {
      height: '45px',
      marginLeft: "18px",
      fontSize: "14px",
      lineHeight: "16px",
    },
    "& .MuiFormLabel-filled": {
      visibility: 'hidden',
      opacity: '0',
      transition: 'visibility .3s, opacity .3s linear'
    },
    "& .Mui-focused": {
      color: '#686868',
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: '#686868'
    },
    "& .MuiInput-underline.Mui-error:after": {
      borderBottomColor: 'red'
    }
    
  },

  divFooterForm: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    flexWrap: 'wrap',
    gap: '5%',
    marginTop: '10%',
    fontFamily: ["Roboto", "sans-serif"].join(","),
  },

  linkResendCode: {
    fontSize: '14px',
    lineHeight: '16px',
    fontWeight: '400',
    color: theme.palette.colors.red
  },

  buttonSubmit: {
    width: '260px',
    height: '55px',
    marginTop: '7%',
    fontSize: '14px',
    lineHeight: '16px',
    color: '#FFF',
    backgroundColor: theme.palette.colors.red,
    borderRadius: '3px',
    border: 'none',
    boxShadow: '0px 12px 35px rgba(52, 77, 178, 0.340636)',
    cursor: 'pointer'
  }

}));

export default ConfirmCodeStyles;
