import {makeStyles} from "@material-ui/core/styles"

const ColumnStyles = makeStyles((theme) => ({

    contColumn:{
        
        width: "293px",
        height: "747px",
        marginTop: "0px",
        marginLeft: "60px",
        scrollBehavior: "smooth",
        background: "FFFFFF",
        border:" 1px solid #E8EBF2",
        boxSizing: "border-box",
        boxShadow: "-10px 9px 21px rgba(128, 152, 213, 0.074983)",
        borderRadius: "8px",
        display: "grid",
        gridTemplateRows: "67px auto 45px",
    },

    contComponentsColum:{
        "&::-webkit-scrollbar":{
            display: "none"
        },

        overflow: "auto",
    },

    contSortableItem:{
        width: "277px",
        height: "135px",
        background: "#F6F6F6",
        borderRadius: "5px",
        margin: "7px",
    },

    headerColumn: {
        display: "grid",
        gridTemplateColumns: "66px 168px 34px",
        margintTop: "0px",
        height: "67px",
        width: "100%",
        borderBottom: "1px solid #CED3E6",
        
        "& p": {
            width: "100%",
            fontFamily: ["Roboto", "sans-serif"].join(","),
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "14px",
            lineHeight: "16px",
            color: "#1B3355",
            marginTop: "auto",
            marginBottom: "auto",
            marginLeft: "0px",
            wordBreak: "break-Word",
            justifyContent: "center",
            textAlign: "left",
        }
    },

    avatarHeader:{
        marginTop: "auto",
        marginBottom: "auto",
        marginLeft: "20px",
        borderRadius: "50px",
        width: "42px",
        height: "41px",
    },
    menuColumnIcon: {
        margin: "auto",
    },

    menuItemField:{
        paddingTop: "0px",
        paddingBottom: "0px",
    },

    footerColumn: {
        margintTop: "0px",
        marginBottom: "0px",
        height: "43px",
        width: "100%",
        borderTop: "1px solid #CED3E6",
        display: "flex",
        "& img": {
            marginLeft: "22px",
            marginTop: "auto",
            marginBottom: "auto",
            width: "6px",
            height: "12px",
            borderRadius: "38px",
            border: "solid 1px #1B3355",
            padding: "4px 7px 4px 7px",
        }
    }

}))

export default ColumnStyles;