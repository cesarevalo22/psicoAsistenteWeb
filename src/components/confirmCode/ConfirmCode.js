import { Container } from '@material-ui/core'
import React, { useState } from 'react'
import ConfirmCodeStyles from '../../styles/confirmCode/ConfirmCodeStyles'
import * as Yup from "yup";
import axios from 'axios';
import { useFormik } from "formik";
import { EmailField, SimpleTextField } from '../commons/CustomFields';
import { Link } from 'react-router-dom';

const initialValues = {
  email: "",
  validationCode: '',
};

const initialStatus = false

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Correo invalido")
    .required("Campo obligatorio"),
  validationCode: Yup.string().required('Campo obligatorio'),
});

export default function ConfirmCode() {
  const [email, setEmail] = useState(null);
  const [validationCode, setValidationCode] = useState('');
  const [loading, setLoading] = useState(false);

  const classes = ConfirmCodeStyles();

  const onSubmit = async() => {
    
  }

  const formik = useFormik({
    initialValues,
    validationSchema,
    initialStatus,
    onSubmit,
  });

  const sendNewCode = async () => {
    try {
      const consult = await axios.get(
        `${process.env.REACT_APP_GATEWAY_END_POINT}/aduser/validate/${email}`,
      );
      if(consult.data.body === false) {
        throw new Error();
      } else {

      }
    } catch (error) {
      console.error(error);
    }
  }
  
  return (
    <Container component="main" maxWidth={'lg'} className={`${classes.mainContainer}`}>
      <div className={`${classes.divTitle}`}>
        <h2 className={classes.title}>Activa tu cuenta</h2>
        <p className={classes.sub}>¡Estás a solo un paso de potenciar tu negocio!</p>
      </div>
      <div className={`${classes.containerForm}`}>
        <form className={classes.form} onSubmit={formik.handleSubmit}>
            <EmailField
              className={classes.textbox}
              name="email"
              label="Correo Electrónico"
              error={formik.errors.email}
              handleChange={formik.handleChange}
              disabled
            />

            <SimpleTextField
              className={classes.textbox}
              name="validationCode"
              label="Código de verificación"
              error={formik.errors.validationCode}
              defaultValue={validationCode}
              handleChange={formik.handleChange}
              disabled
            />

            <div className={classes.divFooterForm}>
              <Link
                className={classes.linkSendNewCode}
                onClick={sendNewCode}
              >
                Reenviar código
              </Link>

              <button
                className={loading || !formik.dirty || !formik.isValid ? classes.buttonSubmitDisabled : classes.buttonSubmit}
                onClick={onSubmit}
                disabled={loading || !formik.dirty || !formik.isValid}
              >
                Activar Cuenta
              </button>
            </div>
        </form>
      </div>
    </Container>
  )
}
