import { makeStyles } from "@material-ui/core/styles";

const ChangeColorStyles = makeStyles((theme) => ({

  dialogChangeColor: {
    "& .MuiDialog-paperWidthFalse": {
      width: "676px",
      minWidth: "547px",
      height: "436px",
      padding: "11px 23px 17px 16px ",
      boxshadow:
        "0px 14px 8px rgba(0, 0, 0, 0.077389), 0px 9px 16px rgba(0, 0, 0, 0.120584);",
      borderRadius: "8px",
    },
  },

    contTextInfoDeleteBoard: {
    marginTop: "0",
    marginBottom: "22px",
    width: "auto",
    height: "28px",
    marginLeft:"auto",
    marginRight:"auto",
    
  },
  contTextInfoDeleteBoard2: {
    marginTop: "31px",
    marginBottom: "0",
    width: "auto",
    height: "28px",
    marginLeft:"auto",
    marginRight:"auto",
  },

  textInfoDeleteBoard1: {
    fontFamily: ["Roboto", "sans-serif"].join(","),
    fontFtyle: "normal",
    fontWeight: "normal",
    fontSize: "24px",
    lineHeight: "28px",
    /* identical to box height, or 150% */
    textAlign: "center",
    color: "#616161",
    marginTop: "0",
  },

  textInfoDeleteBoard2: {
    fontFamily: ["Roboto", "sans-serif"].join(","),
    fontFtyle: "normal",
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "21px",
    /* identical to box height, or 150% */
    textAlign: "center",
    color: "#848484",
  },

  contButtonsDeleteBoard: {
    marginBottom: "64px",
    marginTop: "auto",
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto",
    width:"100%",
  },

  buttonDeleteBoard: {
    width: "243px",
    height: "38px",
    background: "#F6134B",
    borderRadius: "5px",
    marginTop: "30px",
    marginLeft: "50px",
    outlineWidth: "0",
    border: "none",
    cursor: "pointer",

    "& p": {
      fontFamily: ["Roboto", "sans-serif"].join(","),
      fontstyle: "normal",
      fontWeight: "normal",
      fontSize: "15px",
      lineHeight: "18px",
      color: "#FFFBFB",
      margin: "0px",
    },
  },

  buttonCancelDeleteBoard: {
    width: "243px",
    height: "38px",
    background: "#FFFFFF",
    border: "1px solid #F6134B",
    borderRadius: "5px",
    marginTop: "30px",
    outlineWidth: "0",
    cursor: "pointer",
    "& p": {
      fontFamily: ["Roboto", "sans-serif"].join(","),
      fontstyle: "normal",
      fontWeight: "normal",
      fontSize: "15px",
      lineHeight: "18px",
      color: "#F6134B",
      margin: "0px",
    },
  },
  

  contCloseIconDeleteBoard: {
    marginRight: "0px",
    marginTop: "9px",
    marginLeft: "0px",
    height: "36px",
    background: "#ffffff",
    border: "none",
  },

  contHeaderDeleteBoard:{
    display: "flex"
  },

  contImageDeleteBoard:{
    textAlign:"center",
    display: "block",
    width: "95%",
    "& img":{
      marginLeft: "5%",
    }
  },

  contMainDeleteBoard:{
    height: "100%",
    width: "100%",
  }

  
}));

export default ChangeColorStyles;
