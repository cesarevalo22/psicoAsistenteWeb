import { Container } from '@material-ui/core'
import React, { useState } from 'react'
import ConfirmCodeStyles from '../../styles/confirmCode/ConfirmCodeStyles'
import * as Yup from "yup";
import { useFormik } from "formik";
import { EmailField, SimpleTextField } from '../commons/CustomFields';
import { Link } from 'react-router-dom';

const initialValues = {
  companyName: "",
  userName: "",
  email: "",
  password: "",
};

const initialStatus = false

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Correo invalido")
    .required("Requerido"),
});

export default function ConfirmCode() {
  const [validationCode, setValidationCode] = useState('');

  const classes = ConfirmCodeStyles();

  const onSubmit = async() => {
    
  }

  const formik = useFormik({
    initialValues,
    validationSchema,
    initialStatus,
    onSubmit,
  });

  
  
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
                className={classes.linkResendCode}
                onClick={() => console.log('test')}
              >
                Reenviar código
              </Link>

              <button
                className={classes.buttonSubmit}
                onClick={onSubmit}
              >
                Activar Cuenta
              </button>
            </div>
        </form>
      </div>
    </Container>
  )
}
