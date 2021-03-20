import React, {useEffect, useState} from "react"
import {
    Dialog,
    DialogTitle,
    Switch,
    Typography 

  } from "@material-ui/core";
  import warningMessageStyles from "../../../styles/commons/warningMessageStyles";
  import Clumsy from "../../../assets/images/svgFiles/SvgClumsy.js"
  import Close from "../../../assets/images/pngFiles/Close.png"
  import {ButtonForm} from "../../commons/Buttons"

  import { Grid } from "@material-ui/core";



export default function warningMessage(props) {

  const classes = warningMessageStyles();

    return(
      
        <Dialog
          classes={{ root: classes.dialog }}
          open={props.open}
          onClose={props.onClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
          maxWidth={false}
          scroll="paper"
        >
            <section className={classes.contSecctionUp}>
              <div className={classes.contClumsy} >
                <Clumsy
                width="auto"
                height="auto"/>
             </div>
             <button className={classes.contCloseIcon} onClick={props.onClose}>
               <img src={Close} alt="close" width="30px" height="30px" />
             </button>
               
            </section>       
            
            <section className={classes.contSub1}>
               <p>{props.message1}</p>
             </section>

             <section className={classes.contSub2}>
               <p>{props.message2}</p>
             </section>

             <div className={classes.contButtonForm}>
             <ButtonForm
                type="submit"
                className={classes.submit}
                text={props.message3}
                onClick={props.onClose}
              >
                {/* {loading && (
                  <CircularProgress size={24} className={classes.loading} />
                )}{" "} */}
                Regístrate
              </ButtonForm>
              </div>
              
                  
        
        </Dialog>
    )
}