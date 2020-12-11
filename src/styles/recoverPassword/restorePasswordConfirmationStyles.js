import { makeStyles } from "@material-ui/core/styles";
const restorePasswordStyles = makeStyles((theme) => ({
  
  container2: {
    width: "676px",
    height: "457px",
    margin: "auto",
    borderRadius: "12px",
      [theme.breakpoints.down('sm')]: {
      width: '370px',
      height: '457px',
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
    height:"436px",
    background: "#ffffff"
  },

  contImageMessage: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "35px auto 5px",
    height: "218px",
  },

  sub1: {
    display: "flex",
    justifyContent: "center",
    fontFamily: ["Roboto", "sans-serif"].join(","),
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "24px",
    lineHeight: "28px",
    color: "#1B3355",
    textAlign: 'center',
    "& p": {
      marginTop: "0",
    }
  },

  sub2: {
    display: "flex",
    justifyContent: "center",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "-6px",
    width: "64%",
    textAlign: "center",

    fontFamily: ["Roboto", "sans-serif"].join(","),
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "16,41px",
    color: "#1B3355",
  },

  sub3: {
    display: "flex",
    justifyContent: "center",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "-10px",

    fontFamily: ["Roboto", "sans-serif"].join(","),
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "16,41px",
    color: "#F6134B",
    textDecoration: "underline",
    cursor: 'pointer',
  },


}));
export default restorePasswordStyles;
