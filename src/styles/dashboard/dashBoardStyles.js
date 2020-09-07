import { makeStyles } from '@material-ui/core/styles';


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

            "& p":{
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
                }
            }
      },

      filterDivField: {
        position: 'relative',
        margin: 'auto',
        marginRight: '12px',
      },

      /* footer */

      buttonFooter: {
        display: "flex",
        width: "219px",
        height: "30px",
        left: "129px",
        top: "158px",
        backgroundColor: "#ECECEC",
        borderRadius: "5px",
        "& p":{
            width: "91px",
            height: "24px",
            left: "171px",
            top: "125px",
            "& span": {
                color: "#1B3355",
            }
        }
  },

      footerContDashBoard: {
        display: "flex",
        position: "absolute",
        bottom: "0;",
        width: "100%",
        height: "40px",
      },

      footerContBoards: {

      },

      footerAddBoard: {

      },

      footerContPagination:{

      }

}));

export default DashBoardStyles;
