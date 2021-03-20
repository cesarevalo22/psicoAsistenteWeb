import React, {useContext,useEffect, useState} from "react"
import {
    Dialog,
    DialogTitle,
    Switch,
    Typography 

  } from "@material-ui/core";
  import ChangeColorStyles from "../../../styles/stamAD/dashboard/changeColorStyles";
  import Close from "../../../assets/images/pngFiles/Close.png"
  import ButtonChangeColor from "./buttonChangeColor"
  import WarningMessage from "../../commons/warningMessage/warningMessage";
  import { TranslationContext } from '../../../context/translation/TranslationContext';






export default function ChangeColor(props) {

  const [openMessage, setOpenMessage] = useState(false);

  const { translate } = useContext(TranslationContext)


  const handleMessage = () => {
    setOpenMessage(!openMessage);
  };

  const classes = ChangeColorStyles();

  /* useEffect(()=>{
    
  },[saveName]) */

    return(
      <>
      {openMessage && (
        <>
          <WarningMessage
            open={openMessage}
            onClose={handleMessage}
            message1={translate('inDevelopment', 'Text1')}
            message2={translate('inDevelopment', 'Text2')}
            message3={translate('inDevelopment', 'Text3')}
          />
        </>
      )}
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
            <button className={classes.contCloseIconChangeColor} onClick={props.onClose}>
            <img src={Close} alt="close" width="30px" height="30px" />
            </button>
          </section>

          <main className={classes.contInterChangeColor}>
          <section className={classes.contTextInfoChangeColor}>
           <p className={classes.textInfoChangeColor} >Puede cambiar de color las columnas y personalizar a su gusto los tableros</p>
          </section>
          
          <section className= {classes.contButtonSelectChangeColor}>
            <ButtonChangeColor 
              color={props.colorA} 
              nameColor={props.colorNameA}/>
            <ButtonChangeColor 
              color={props.colorB} 
              nameColor={props.colorNameB}/>
            <ButtonChangeColor 
              color={props.colorC} 
              nameColor={props.colorNameC}/>
            <ButtonChangeColor 
              color={props.colorD} 
              nameColor={props.colorNameD}/>
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
            <button className={classes.buttonChangeColor}  onClick={handleMessage} >
              <p>Cambiar Color</p>
            </button>
          </section>
          </main>
        </Dialog>
        </>
    )
}