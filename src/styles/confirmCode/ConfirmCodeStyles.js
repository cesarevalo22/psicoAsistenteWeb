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
    [theme.breakpoints.down('md')]: {
      maxWidth: '100%',
    },
    ['@media (max-height:810px)']: {// eslint-disable-line no-useless-computed-key
      height: '290px',
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
    lineHeight: '28px',
    [theme.breakpoints.down('md')]: {
      fontSize: '18px'
    },
  },

  sub: {
    margin: '0',
    color: '#1B3355',
    textAlign: 'center',
    fontSize: '24px',
    fontFamily: ["Roboto", "sans-serif"].join(","),
    fontWeight: '300',
    lineHeight: '28px',
    [theme.breakpoints.down('md')]: {
      fontSize: '18px'
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '14px'
    },
  },
  
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textbox: {
    fontFamily: ["Roboto", "sans-serif"].join(","),
    width:"423px",
    height: "60px",
    marginBottom: "-15px",
    border: "0px transparent",
    margin: "auto",
    marginTop: "5%",
    '& label': {
      color: '#686868',
      fontFamily: ["Roboto", "sans-serif"].join(","),
      zIndex: '1'
    },
    "& .MuiFormLabel-root.Mui-error": {
      color: '#686868',
      marginLeft: "18px",
      marginTop: "15px",
      fontSize: "14px",
    },
    "& .Mui-focused.MuiFormLabel-root.Mui-error": {
      color: '#686868',
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
    "& .MuiFormHelperText-root.Mui-error": {
      color: '#BA0606',
      fontWeight: '300',
      fontSize: '12px',
      lineHeight: '14px',
    },
    "& .Mui-focused.MuiFormHelperText-root": {
      color: '#BA0606',
      fontWeight: '300',
      fontSize: '12px',
      lineHeight: '14px',
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
    '& .MuiFormLabel-filled + .MuiInput-root': {
      border: '1px solid #3249EB',
      borderRadius: '7px',
      boxSizing: 'border-box'
    },
    '& .MuiFormLabel-filled + .MuiInput-underline:before': {
      borderBottom: 'none',
    },
    '& .MuiFormLabel-filled + .MuiInput-root.Mui-error': {
      border: 'none'
    },
    "& .Mui-focused": {
      color: '#686868',
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: '#686868'
    },
    "& .MuiInput-underline.Mui-error:after": {
      borderBottomColor: 'red'
    },
    "& .MuiInputBase-root.Mui-error": {
      backgroundColor: '#FDE4E4',
      borderRadius: '7px 7px 0px 0px',
    },

    [theme.breakpoints.down('md')]: {
      width: '320px',
    },
    [theme.breakpoints.down('xs')]: {
      width: '320px',
      height: 'auto',
      '& p ':{
        alignItems:"center",
      }
    },
    ['@media (max-height:810px)']: {// eslint-disable-line no-useless-computed-key
      marginTop: '1%'
    },
    
  },

  divFooterForm: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    marginTop: '10%',
    fontFamily: ["Roboto", "sans-serif"].join(","),
  },

  linkSendNewCode: {
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
  },

  buttonSubmitDisabled: {
    width: '260px',
    height: '55px',
    marginTop: '7%',
    fontSize: '14px',
    lineHeight: '16px',
    color: '#FFF',
    backgroundColor: '#FF8FAB',
    borderRadius: '3px',
    border: 'none',
    boxShadow: '0px 12px 35px rgba(52, 77, 178, 0.340636)',
  }

}));

export default ConfirmCodeStyles;
