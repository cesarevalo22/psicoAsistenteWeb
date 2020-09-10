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
    outline: "0px",

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
        marginRight: "20px",
      },
      "& img": {
        marginRight: "0px",
        marginLeft: "auto",
      },
    },
  },

  filterDivField: {
    position: "relative",
    margin: "auto",
    marginRight: "12px",
    outlined: "0px",
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

  
}));

export default DashBoardStyles;
