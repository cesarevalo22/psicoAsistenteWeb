import React, {useEffect, useState} from "react"
import {
    Dialog,
    DialogTitle,
    Switch,
    Typography 

  } from "@material-ui/core";
  import DeleteBoardStyles from "../../../styles/stamAD/dashboard/deleteBoardStyles";
  import Close from "../../../assets/images/pngFiles/Close.png"
  import Coffee from "../../../assets/images/svgFiles/coffee.svg"

  //import Coffee from "../../assets/images/svgFiles/"



export default function ChangeColor(props) {

  const classes = DeleteBoardStyles();

  /* useEffect(()=>{

    
  },[saveName]) */


 /*  const handleSaveName = () => {
    setSaveName(true)
  } */

    return(
        <Dialog
          classes={{ root: classes.dialogChangeColor }}
          open={props.open}
          onClose={props.onClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
          maxWidth={false}
          scroll="paper"
        >
          <main className={ classes.contMainDeleteBoard}>
          <section className={classes.contHeaderDeleteBoard}>
           <p className={classes.contImageDeleteBoard}>
           <img src={Coffee} alt="logo" width="168px" height="134px"/>
           </p>

           <button className={classes.contCloseIconDeleteBoard} onClick={props.onClose}>
             <img src={Close} alt="close" width="30px" height="30px" />
             </button>
           </section>
 
           <section className={classes.contTextInfoDeleteBoard}>
            <p className={classes.textInfoDeleteBoard1} >¿Texto de Pregunta?</p>
           </section>
          
           <section className={classes.contTextInfoDeleteBoard2}>
            <p className={classes.textInfoDeleteBoard2} >Puede cambiar de color las columnas y personalizar a su gusto los tableros</p>
           </section>
           </main>
 
           <section className={classes.contButtonsDeleteBoard}>
             <button className={classes.buttonCancelDeleteBoard} onClick={props.onClose}>
               <p>Cancelar</p>
             </button>
             <button className={classes.buttonDeleteBoard} /* onClick={handleSaveName} */>
               <p>Confirmar</p>
             </button>
           </section>

        </Dialog>
    )
}