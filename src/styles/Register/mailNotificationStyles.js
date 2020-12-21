import { makeStyles } from "@material-ui/core/styles";
const MailNotificationStyles = makeStyles((theme) => ({
  
  container2: {
    width: "536px",
    height: "369px",
    margin: "auto",
    borderRadius: "12px",
      [theme.breakpoints.down('sm')]: {
      width: '370px',
      height: 'autopx',
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

  contMessage : {
    width:"auto",
    height:"auto",
    background: "#ffffff"
  },

  contImageMessage: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "35px auto 5px",
    marginLeft: "73px",
    [theme.breakpoints.down('xs')]: {
      marginLeft: "41px",
    },
    
  },

  sub1: {
    display: "flex",
    justifyContent: "center",
    fontFamily: ["Roboto", "sans-serif"].join(","),
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "20px",
    lineHeight: "28px",
    color: "#1B3355",
    "& p":{
      marginTop: "0px",
    }
  },

  sub2: {
    display: "flex",
    justifyContent: "center",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "-25px",

    fontFamily: ["Roboto", "sans-serif"].join(","),
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "13px",
    lineHeight: "16,41px",
    color: "#1B3355",
  },
}));
export default MailNotificationStyles;
