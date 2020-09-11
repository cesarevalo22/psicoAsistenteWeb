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
    cursor: "pointer",

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

  contButtonsBoardsFooter:{
      display: "flex",
      width: "auto",
      marginRight: "47px"
  },

  buttonBoardFooterSelected:{
    width: "125px",
    textAlign:"center",
    background: "#1B3355",
    wordBreak: "break-Word",
    borderRadius: "5px",
    border: "none",
    outline: "0px",
    cursor: "pointer",
    "& p":{
      margin: "0px 5px 0px 5px",
      fontFamily: ["Roboto", "sans-serif"].join(","),
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "13px",
      lineHeight: "15px",
      color: "#FFFFFF",
    },
    "&:hover":{
      background: "#4d6d9a",
    }
    
  },

  buttonBoardFooterNoSelected:{
    width: "125px",
    textAlign:"center",
    background: " #F6F6F6",
    wordBreak: "break-Word",
    borderRadius: "5px",
    border: "none",
    outline: "0px",
    cursor: "pointer",
    
    "& p":{
      margin: "0px 5px 0px 5px",
      fontFamily: ["Roboto", "sans-serif"].join(","),
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "13px",
      lineHeight: "15px",
      color: "#989898",
      
    },
    "&:hover":{
      background: "#ecece9",
  }
  },

  buttonAddBoard:{
    width: "110px",
    height: "100%",
    textAlign:"center",
    border: "1px solid #1B3355",
    borderRadius: "5px",
    outline: "0px",
    cursor: "pointer",
    "& p":{
      margin: "0px 5px 0px 5px",
      fontFamily: ["Roboto", "sans-serif"].join(","),
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "11px",
      lineHeight: "15px",
      color: "#1B3355",

    },
    "&:hover":{
      background: "#0000002e",
  }

      

  }

  
  
}));

export default DashBoardStyles;
