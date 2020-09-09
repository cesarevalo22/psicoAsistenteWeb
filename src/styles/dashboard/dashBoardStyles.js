import { makeStyles } from "@material-ui/core/styles";

const DashBoardStyles = makeStyles((theme) => ({
  buttonFilter: {
    display: "flex",
    position: "initial",
    width: "219px",
    height: "42px",
    left: "129px",
    top: "116px",
    border: "1px solid #1B3355",
    borderRadius: "3px",
    backgroundColor: "#ECECEC",

    "& p": {
      width: "auto",
      height: "24px",
      left: "171px",
      top: "125px",
      margin: "auto",
      "& span": {
        color: "#1B3355",
        fontFamily: "roboto",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "22px",
        lineHeight: "24px",
      },
    },
  },

  filterDivField: {
    position: "relative",
    margin: "auto",
    marginRight: "12px",
  },

  /* footer */

  footerContDashBoard: {
    display: "flex",
    position: "absolute",
    bottom: "-129px;",
    width: "1200px",
    height: "40px",
  },

  footerContButtonBoards: {
    display: "flex",
    width: "auto",
  },

  buttonFooterBoard: {
    display: "flex",
    width: "50px",
    height: "30px",
    left: "129px",
    top: "158px",
    backgroundColor: "#ECECEC",
    borderRadius: "5px",
    "& p": {
      width: "91px",
      height: "24px",
      left: "171px",
      top: "125px",
      "& span": {
        color: "#1B3355",
      },
    },
  },

  footerContAddBoard: {},

  buttonFooterAddBoard: {
    display: "flex",
    width: "219px",
    height: "30px",
    left: "129px",
    top: "158px",
    backgroundColor: "#ECECEC",
    borderRadius: "5px",
    "& p": {
      width: "91px",
      height: "24px",
      left: "171px",
      top: "125px",
      "& span": {
        color: "#1B3355",
      },
    },
  },
  footerContPagination: {
    marginRight: "0px",
    marginLeft: "auto",
    display: "flex",
  },

  /* change Name Dialog */
  /*
   */

  dialogChangeName: {
    "& .MuiDialog-paperWidthFalse":{
      width: "416px",
      height: "139px",
      padding: "11px 23px 17px 16px ",
      boxshadow: "0px 14px 8px rgba(0, 0, 0, 0.077389), 0px 9px 16px rgba(0, 0, 0, 0.120584);",
      borderRadius: "8px",
    }
    }, 

     textFieldChangeName: {
      "& .MuiOutlinedInput-input":{
        width: "348px",
        height: "27px",
        padding: "0px",
        paddingLeft: "11px",
      },
      },

      titleChangeName: {
        
          "& .MuiTypography-root":{
            fontFamily: ['Roboto', "sans-serif"].join(","),
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "15px",
            lineHeight: "18px",
            color: "#1B3355"
        }
      },

      contButtonsChangeName: {

      },
      
      buttonChangeName: {
        width: "135px",
        height: "26px",
        background: "#F6134B",
        borderRadius: "5px",
        marginTop: "30px",
        outlineWidth: "0",
        border: "none",
        cursor: "pointer",

        "& p":{
          fontFamily: ['Roboto', "sans-serif"].join(","),
          fontstyle: "normal",
          fontWeight: "normal",
          fontSize: "15px",
          lineHeight: "18px",
          color: "#FFFBFB",
          margin: "0px",
        }

      },
      
      buttonCancelChangeName: {
        width: "135px",
        height: "26px",
        background: "#FFFFFF",
        border:"1px solid #F6134B",
        borderRadius: "5px",
        marginTop: "30px",
        marginLeft: "107px",
        outlineWidth: "0",
        cursor: "pointer",
        "& p":{
          fontFamily: ['Roboto', "sans-serif"].join(","),
          fontstyle: "normal",
          fontWeight: "normal",
          fontSize: "15px",
          lineHeight: "18px",
          color: "#F6134B",
          margin: "0px",
        }
      },

      contTitleChangeName : {
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

export default DashBoardStyles;
