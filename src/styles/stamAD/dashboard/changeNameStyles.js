import { makeStyles } from "@material-ui/core/styles";

const ChangeNameStyles = makeStyles((theme) => ({

  /* change Name Dialog
   *
   *
   *
   *
   */

  dialogChangeName: {
    "& .MuiDialog-paperWidthFalse": {
      width: "416px",
      height: "139px",
      padding: "11px 23px 17px 16px ",
      boxshadow:
        "0px 14px 8px rgba(0, 0, 0, 0.077389), 0px 9px 16px rgba(0, 0, 0, 0.120584);",
      borderRadius: "8px",
    },
  },

  textFieldChangeName: {
    "& .MuiOutlinedInput-input": {
      width: "348px",
      height: "27px",
      padding: "0px",
      paddingLeft: "11px",
    },
  },

  titleChangeName: {
    "& .MuiTypography-root": {
      fontFamily: ["Roboto", "sans-serif"].join(","),
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "15px",
      lineHeight: "18px",
      color: "#1B3355",
    },
  },

  contButtonsChangeName: {},

  buttonChangeName: {
    width: "135px",
    height: "26px",
    background: theme.palette.colors.greenhard,
    borderRadius: "5px",
    marginTop: "30px",
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

  buttonCancelChangeName: {
    width: "135px",
    height: "26px",
    background: "#FFFFFF",
    border: "1px solid",
    borderColor: theme.palette.colors.bluehard,
    borderRadius: "5px",
    marginTop: "30px",
    marginLeft: "107px",
    outlineWidth: "0",
    cursor: "pointer",
    "& p": {
      fontFamily: ["Roboto", "sans-serif"].join(","),
      fontstyle: "normal",
      fontWeight: "normal",
      fontSize: "15px",
      lineHeight: "18px",
      color: theme.palette.colors.bluehard,
      margin: "0px",
    },
  },

  contTitleChangeName: {
    display: "flex",
  },

  contCloseIcon: {
    marginRight: "0px",
    marginTop: "-5px",
    marginLeft: "auto",
    height: "6px",
    background: "#ffffff",
    border: "none",
  },

  
}));

export default ChangeNameStyles;
