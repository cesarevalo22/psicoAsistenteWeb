import React, {useEffect, useState} from "react"
import {
    Dialog,
    DialogTitle,
    Switch,
    Typography 

  } from "@material-ui/core";
  import DashBoardStyles from "../../styles/dashboard/dashBoardStyles";
  import Close from "../../assets/images/pngFiles/Close.png"
  import ButtonChangeColor from "./buttonChangeColor"

export default function ChangeColor(props) {


  const [name, setName] = useState("nombreDelTablero")
  const [saveName, setSaveName] = useState(false)



  const classes = DashBoardStyles();

  /* useEffect(()=>{

    
  },[saveName]) */

  const onChangeName = (event)=> {
    console.log("values",event.target.value)
      setName(event.target.value)
  }

  const handleSaveName = () => {
    setSaveName(true)
  }

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
          <section className={classes.contTitleChangeColor}>
            <DialogTitle 
              className={classes.contChangeColorDialogTitle}
             // style={{justifyItems: "center",}} 
              id="alert-dialog-slide-title"
              classes={{root: classes.titleChangeColor}}
            >
              {"Cambiar tablero de color"}
            </DialogTitle>
            <button className={classes.contCloseIcon} onClick={props.onClose}>
            <img src={Close} alt="close" width="10px" height="8px" />
            </button>
          </section>

          <section>
           <p className={classes.textInfoChangeColor} >Puede cambiar de color las columnas y personalizar a su gusto los tableros</p>
          </section>
          
          <section className= {classes.contButtonChangeColor}>
            <ButtonChangeColor 
              color="#008394" 
              nameColor="Verde"/>
            <ButtonChangeColor 
              color="#1B3355" 
              nameColor="Azul Oscuro"/>
            <ButtonChangeColor 
              color="#384CF9" 
              nameColor="Azul"/>
            <ButtonChangeColor 
              color="#F6134B" 
              nameColor="Rojo"/>
          </section>
          <section className={classes.contSwitchChangeColor}>
            <Typography> Volver color original</Typography>
          <Switch 
            size="medium"
            color="secondary"
          />
          </section>

          <section className={classes.contButtonsChangeColor}>
           
            <button className={classes.buttonCancelChangeColor} onClick={props.onClose}>
              <p>Cancelar</p>
            </button>
            <button className={classes.buttonChangeColor} onClick={handleSaveName}>
              <p>Cambiar Color</p>
            </button>
          </section>
        </Dialog>
    )
}