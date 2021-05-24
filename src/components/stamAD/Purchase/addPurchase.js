import React, {useState} from "react"
import {
    Dialog,
    DialogTitle,
    Switch,
    Typography,
    Button 

  } from "@material-ui/core";
  import addPurchaseStyles from "../../../styles/stamAD/purchase/addPurchaseStyles";
  import Close from "../../../assets/images/pngFiles/Close.png"
  import {SimpleTextField} from "../../commons/CustomFields"
  import * as Yup from "yup";
  import { useFormik } from 'formik';
  import axios from "axios"

import SaveIcon from '@material-ui/icons/Save';


const initialValues = {
  amount: '',
  price: '',
};

const validationSchema = Yup.object({
  amount: Yup.number()
    .required("Requerido"),
    
  price: Yup.number()
    .required("Requerido")
    
  });
 

export default function AddPurchase(props) { //-----------------------------------------------------------

  const [loading, setLoading] = useState(false);
  const [amount, setAmount] = useState('')
  const [price, setPrice] = useState('')

  const classes = addPurchaseStyles();

  const onSubmit = async (values) => {
    setLoading(true);
    console.log("hola")
    const {amount, price} = values
    
    const response = await axios.put(
      `${process.env.REACT_APP_GATEWAY_END_POINT}/material`,
      {
        name: props.material,
        price: parseInt(price),
        amount: parseInt(amount),
      }
    )
    const result = response.data.body[0];
    if(result.status)
      props.handleNewSave();
      props.onClose();
    
    setLoading(false);  
  }
  
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const handleAmount = (params) => {
    setAmount(params.target.value);
    formik.handleChange(params);
  };

  const handlePrice = (params) => {
    setPrice(params.target.value);
    formik.handleChange(params);
  };

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
            
          
          <section className={classes.contTitleChangeColor}>
            <DialogTitle 
              className={classes.contChangeColorDialogTitle}
             // style={{justifyItems: "center",}} 
              id="alert-dialog-slide-title"
              classes={{root: classes.titleChangeColor}}
            >
              {"Registrar compra de material"}
            </DialogTitle>
            <button className={classes.contCloseIconChangeColor} onClick={props.onClose}>
            <img src={Close} alt="close" width="30px" height="30px" />
            </button>
          </section>

          <span> > {props.material} </span>

          <form className = {classes.contForm} onSubmit={formik.handleSubmit} >
            <div className = {classes.contField}>
              <span>Cantidad-kg</span> <br />
              <SimpleTextField 
                variant="outlined" 
                name="amount"
                label="Cantidad"
                error={formik.errors.amount}
                handleChange={handleAmount}
                />
            </div>
            <div className ={classes.contField}>
              <span>Precio-$</span> <br /> 
              <SimpleTextField 
              variant="outlined"
              name="price"
              label="Precio"
              error={formik.errors.price}
              handleChange={handlePrice}
              />
            </div>
            
            <div>
            <Button
              variant="contained"
              color="primary"
              size="large"
              className={classes.button}
              startIcon={<SaveIcon />}
              style={{backgroundColor: "#44c7ad", marginTop: "7px"}}
              type="submit"
            >
              Save
             </Button >
            </div>
          </form>

        </Dialog>
    )
}