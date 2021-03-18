import React, {useEffect, useState} from "react"
import {
    Dialog,
    DialogTitle,
    TextField,
  } from "@material-ui/core";
  import ChangeNameStyles from "../../styles/dashboard/changeNameStyles";
  import Close from "../../assets/images/pngFiles/Close.png"


export default function ChangeName(props) {


  const [name, setName] = useState("nombreDelTablero")
  const [saveName, setSaveName] = useState(false)



  const classes = ChangeNameStyles();

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
          classes={{ root: classes.dialogChangeName }}
          open={props.open}
          onClose={props.onClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
          maxWidth={false}
          scroll="paper"
        >
          <section className={classes.contTitleChangeName}>
            <DialogTitle 
              style={{padding: "10px 0px"}} 
              id="alert-dialog-slide-title"
              classes={{root: classes.titleChangeName}}
            >
              {"Nombre del tablero"}
            </DialogTitle>
            <button className={classes.contCloseIcon} onClick={props.onClose}>
            <img src={Close} alt="close" width="10px" height="8px" />
            </button>
          </section>
          
          <section>
            <TextField 
              variant="outlined" 
              /* classes={{ root: classes.textFieldChangeName }} */
              className={classes.textFieldChangeName}
              autoFocus={true}
              value={name}
              onChange={onChangeName}
              
            />
          </section>

          <section className={classes.contButtonsChangeName}>
            <button className={classes.buttonChangeName} onClick={handleSaveName}>
              <p>Cambiar Nombre</p>
            </button>
            <button className={classes.buttonCancelChangeName} onClick={props.onClose}>
              <p>Cancelar</p>
            </button>
          </section>
        </Dialog>
    )
}