import {makeStyles} from "@material-ui/core/styles"

const ColumnStyles = makeStyles((theme) => ({

    contColumn:{
        width: "280px",
        height: "747px",
        border: "solid 1px",
        marginTop: "0px",
        marginLeft: "60px",
    },

    contSortableItem:{
        width: "241px",
        height: "135px",
        background: "#F6F6F6",
        borderRadius: "5px",
    }

}))

export default ColumnStyles;