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

  footer: {
    display:"flex",
    width: "90%",
    bottom: "0",
    height: "45px",
    position: "fixed",
  },

  footerContPagination: {
    marginRight: "0px",
    marginLeft: "auto",
    display: "flex",
  },

  pruebaButto:{
    width: "70px",
  }

  
}));

export default DashBoardStyles;
