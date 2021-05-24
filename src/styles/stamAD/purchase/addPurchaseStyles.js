import { makeStyles } from '@material-ui/core/styles';

const inDevelopmentStyles = makeStyles((theme) => ({
  
    dialog: {
        "& .MuiDialog-paperWidthFalse": {
          width: "600px",
          height: "330px",
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

      contCloseIconChangeColor: {
        marginRight: "0px",
        marginTop: "-5px",
        marginLeft: "36px",
        height: "36px",
        background: "#ffffff",
        border: "none",
      },

      contForm: {
        display: "block",
        textAlign: "center",
        marginTop: "15px",
        "& span": {
          marginBotton: "7px",
        }
      },
      contField: {
        marginTop:"10px"
      },

      Button: {
        
          backgroundColor: "#44c7ad",
      
        
        marginTop:"4px"
      }

}));

export default inDevelopmentStyles;
