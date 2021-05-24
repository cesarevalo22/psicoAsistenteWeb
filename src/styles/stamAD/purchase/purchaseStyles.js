import { makeStyles } from '@material-ui/core/styles';

const inDevelopmentStyles = makeStyles((theme) => ({
  
 grid: {
     margin:"auto",
     display: "Block",
     textAlign: "center"
 },
 image : {
     width:"250px",
     height:"250px",
     cursor: "pointer"
 },

 guia: {
    fontSize: "20px",
    color: "Black",
    fontWeight: "700"
 }
}));

export default inDevelopmentStyles;
