import { makeStyles } from "@material-ui/core/styles";

const warningMessageStyles = makeStyles((theme) => ({

  /* change Color Dialog *
   *
   *
   *
   *
   */

  dialog: {
    "& .MuiDialog-paperWidthFalse": {
      width: "576px",
      height: "333px",
      padding: "11px 23px 17px 16px ",
      boxshadow:
        "0px 14px 8px rgba(0, 0, 0, 0.077389), 0px 9px 16px rgba(0, 0, 0, 0.120584);",
      borderRadius: "8px",
    },[theme.breakpoints.down('sm')]: {
        width: '500px',
        height: "300px",
        margin:"auto"
    }
  },

  contSecctionUp: {
      display: "flex",
      width: "100%",
      height: "38%"
  },

  contCloseIcon: {
    marginRight: "0px",
    marginTop: "-5px",
    marginLeft: "auto",
    height: "36px",
    background: "#ffffff",
    border: "none"
  },

  contClumsy: {
      width: "100%",
      height: "100%",
      margin:"calc(auto + 10px)",
      paddingLeft: "3%",
  },

  contSub1:{
      display:"flex",
      justifyContent:"center",
      height:"auto",
      marginTop:"3%",
      textAlign: 'center',
    "& p":{
    fontFamily: ["Roboto", "sans-serif"].join(","),
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "4vh",
    lineHeight: "28px",
    color: "#575757",
    margin: "0px",
    },
    [theme.breakpoints.down('sm')]: {
        "& p":{
            fontSize: "2vh",  
        }
    }

  },

  contSub2:{
    display:"flex",
    height:"25%",
    width: "100%",
    marginLeft:"auto",
    marginRight: "auto",
    wordBreak: "break-Word",
  "& p":{
  fontFamily: ["Roboto", "sans-serif"].join(","),
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: "2vh",
  lineHeight: "18px",
  color: "#575757",
  height:"auto",
  width:"100%",
  textAlign:"center",
  },
  [theme.breakpoints.down('sm')]: {
    width: "100%",
      "& p":{
          fontSize: "1.6vh",  
      }
  }

},

   contButtonsChangeColor: {
    marginBottom: "43px",
    marginTop: "auto",
    textAlign: "left",
    marginLeft: "0px",
    marginRight: "0px",
    width:"126%",
  },

  contButtonForm: {
    marginTop: "10px",
    height: "38px",
    width: "100%",
    display: "flex",
  },

  submit: {
    cursor: "pointer",  
    width: "36%",
    height: "100%",
    background: theme.palette.colors.greenhard,
    boxShadow: "0px 12px 35px rgba(52, 77, 178, 0.340636)",
    borderRadius: "3px",
    border: "1px",
    marginLeft: "auto",
    marginRight: "auto",
    color: "#ffffff"
  },
  
}));

export default warningMessageStyles;
