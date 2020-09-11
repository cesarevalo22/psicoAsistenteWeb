import { makeStyles } from "@material-ui/core/styles";
import { findByLabelText } from "@testing-library/react";

const DashBoardStyles = makeStyles((theme) => ({

  mainContDashBoard: {
    height: "1024px",
    width: "100%",
    display: "flex",
  },

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
    position: "absolute",
    margin: "auto",
    marginRight: "12px",
    outlined: "0px",
  },

  /* footer */

  footer: {
    display:"flex",
    width: "100%",
    height: "45px",
    marginTop: "auto",
    marginBottom: "0px",
    position: "inherit",
  },

  footerContPagination: {
    marginRight: "0px",
    marginLeft: "auto",
    display: "flex",
  },

  pruebaButton:{
    width: "70px",
  }

  
}));

export default DashBoardStyles;
