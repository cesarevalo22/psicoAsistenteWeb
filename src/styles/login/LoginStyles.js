import { makeStyles } from '@material-ui/core/styles';

const LoginStyles = makeStyles((theme) => ({
  mainContainer: {
    maxWidth: '100%',
    height: '468px',
    backgroundColor: '#FFF',
    padding: '0',
    boxShadow: "0px 6px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "12px",
    ['@media (max-height:810px)']: {// eslint-disable-line no-useless-computed-key
      height: '55vh',
    },
    ['@media (max-height:675px)']: {// eslint-disable-line no-useless-computed-key
      height: '58vh',
    },
  },

  containerForm: {
    width: '600px',
    height: 'calc(100% - 81px)',
    [theme.breakpoints.down('md')]: {
      maxWidth: '100%',
    },
  },

  divTitle: {
    width: '80%',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    margin: '26px auto 20px',
    color: '#575757',
    textAlign: 'center',
    fontSize: '24px',
    fontFamily: ["Roboto", "sans-serif"].join(","),
    fontWeight: '600',
    lineHeight: '28px',
    [theme.breakpoints.down('md')]: {
      fontSize: '18px'
    },
    [`@media (max-height:810px)`]: {// eslint-disable-line no-useless-computed-key
      fontSize: '20px',
      margin: '15px auto 10px',
      [theme.breakpoints.down('md')]: {// eslint-disable-line no-useless-computed-key
        fontSize: '18px',
      },
    },
    [`@media (max-height:675px)`]: {// eslint-disable-line no-useless-computed-key
      margin: '15px auto 0px',
      [theme.breakpoints.down('md')]: {// eslint-disable-line no-useless-computed-key
        fontSize: '18px',
      },
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
    ['@media (max-height:810px)']: {// eslint-disable-line no-useless-computed-key
      fontSize: '18px',
      marginBottom: '10px',
      [theme.breakpoints.down('sm')]: {// eslint-disable-line no-useless-computed-key
        fontSize: '14px',
      },
    },
  },
  
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
    alignItems: 'center',
  },

  textbox: {
    fontFamily: ["Roboto", "sans-serif"].join(","),
    width:"423px",
    height: "60px",
    border: "0px transparent",
    margin: "auto",
    marginTop: "3%",
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
      width: '350px',
    },
    [theme.breakpoints.down('xs')]: {
      width: '290px',
      height: 'auto',
      '& p ':{
        alignItems:"center",
      }
    },
    ['@media (max-height:810px)']: {// eslint-disable-line no-useless-computed-key
      marginTop: '10px',
      "& .MuiInputBase-input": {
        height: '35px',
      },
      [theme.breakpoints.down('md')]: {
        width: '350px',
      },
      [theme.breakpoints.down('xs')]: {
        width: '290px',
        height: 'auto',
        '& p ':{
          alignItems:"center",
        }
      },
    },
    ['@media (max-height:675px)']: {// eslint-disable-line no-useless-computed-key
      marginTop: '5px',
    }
    
    
  },

  divFooterForm: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    marginTop: '10%',
    fontFamily: ["Roboto", "sans-serif"].join(","),
    ['@media (max-height:810px)']: {// eslint-disable-line no-useless-computed-key
      marginTop: '8%',
      [theme.breakpoints.down('lg')]: {
        // marginTop: '8%'
      },
      [theme.breakpoints.down('xs')]: {
        // marginTop: '10%'
      },
    },
  },

  LinkStyle: {
    fontSize: '14px',
    lineHeight: '16px',
    fontWeight: '400',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    color: '#4A90E2',
    textDecoration: 'underline',
    marginBottom: '20px',
    '&:focus': {
      outline: '0'
    }
  },

  buttonSubmit: {
    width: '260px',
    height: '55px',
    fontSize: '14px',
    lineHeight: '16px',
    color: '#FFF',
    backgroundColor: theme.palette.colors.red,
    borderRadius: '3px',
    border: 'none',
    boxShadow: '0px 12px 35px rgba(52, 77, 178, 0.340636)',
    cursor: 'pointer',
    ['@media (max-height:810px)']: {// eslint-disable-line no-useless-computed-key
      [theme.breakpoints.down('xs')]: {
        width: '200px',
        height: '45px'
      },
    },
  },

  buttonSubmitDisabled: {
    width: '260px',
    height: '55px',
    fontSize: '14px',
    lineHeight: '16px',
    color: '#FFF',
    backgroundColor: '#FF8FAB',
    borderRadius: '3px',
    border: 'none',
    boxShadow: '0px 12px 35px rgba(52, 77, 178, 0.340636)',
  },

  fabProgress: {
    height: "350px",
    '& .MuiCircularProgress-root': {
      position: 'relative',
      top: '25%',
      color: theme.palette.colors.darkCyan,
    }
  }

}));

export default LoginStyles;
