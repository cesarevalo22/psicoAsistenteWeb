import React from "react"
import {
    Dialog,
    DialogTitle,
    TextField,
  } from "@material-ui/core";
  import DashBoardStyles from "../../styles/dashboard/dashBoardStyles";


export default function ChangeName(props) {

  const classes = DashBoardStyles();

    return(
        <Dialog
          classes={{ root: classes.dialogChangeName }}
          open={props.openChangeName}
          onClose={props.handleChangeName}
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
            <button className={classes.contCloseIcon} onClick={props.handleChangeName}>
            <img src={Close} alt="close" width="10px" height="8px" />
            </button>
          </section>
          
          <section>
            <TextField 
              variant="outlined" 
              /* classes={{ root: classes.textFieldChangeName }} */
              className={classes.textFieldChangeName}
              autoFocus={true}
              value={props.name}
              onChange={props.onChangeName}
              
            />
          </section>

          <section className={classes.contButtonsChangeName}>
            <button className={classes.buttonChangeName} onClick={handleSaveChangeName}>
              <p>Cambiar Nombre</p>
            </button>
            <button className={classes.buttonCancelChangeName} onClick={handleChangeName}>
              <p>Cancelar</p>
            </button>
          </section>
        </Dialog>
    )
}