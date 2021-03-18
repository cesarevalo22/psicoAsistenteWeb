import { makeStyles } from "@material-ui/core/styles";

const ChangeColorStyles = makeStyles((theme) => ({

  /* change Color Dialog *
   *
   *
   *
   *
   */

  dialogChangeColor: {
    "& .MuiDialog-paperWidthFalse": {
      width: "728px",
      minWidth: "713px",
      height: "433px",
      padding: "11px 23px 17px 16px ",
      boxshadow:
        "0px 14px 8px rgba(0, 0, 0, 0.077389), 0px 9px 16px rgba(0, 0, 0, 0.120584);",
      borderRadius: "8px",
    },
  },

  contTitleChangeColor: {
    display: "flex",
    marginTop: "12px",
    padding: "0px",
  },

  titleChangeColor: {
    "& .MuiTypography-root": {
      fontFamily: ["Roboto", "sans-serif"].join(","),
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "30px",
      lineHeight: "50px",
      color: "#1B3355",
    },
  },

 

  contChangeColorDialogTitle: {
    width:"90%",
    textAlign: "center",
    padding: "0px",
    
  },

  contButtonsChangeColor: {
    marginBottom: "43px",
    marginTop: "auto",
    textAlign: "left",
    marginLeft: "0px",
    marginRight: "0px",
    width:"126%",
  },

  buttonChangeColor: {
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

  buttonCancelChangeColor: {
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
  contButtonSelectChangeColor: {
    display: "block",
    padding: "0px",
    width: "106%",
  },

  contSwitchChangeColor:{
    display: "flex",
    marginTop: "39px",
  },

  contInterChangeColor: {
    width: "474px",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",

  },

  contCloseIconChangeColor: {
    marginRight: "0px",
    marginTop: "-5px",
    marginLeft: "36px",
    height: "36px",
    background: "#ffffff",
    border: "none",
  },

  contTextInfoChangeColor: {
    marginTop: "41px",
    marginBottom: "22px",
  },
  textInfoChangeColor: {
    fontFamily: ["Roboto", "sans-serif"].join(","),
    fontFtyle: "normal",
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "21px",
    /* identical to box height, or 150% */
    textAlign: "center",
    color: "#848484",
  },
  
}));

export default ChangeColorStyles;
