import { CircularProgress, Container, Grid } from '@material-ui/core'
import { useFormik } from 'formik';
import * as Yup from "yup";
import React, { useContext, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { TranslationContext } from '../../context/translation/TranslationContext';
import LoginStyles from '../../styles/login/LoginStyles';
import { EmailField, PasswordField } from '../commons/CustomFields';

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Correo invalido")
    .required(" "),
  password: Yup.string()
    .required("Requerido")
    .min(8, "Minimo 8 caracteres")
    .matches(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!<>@#$%^&*)(+=:._-])[A-Za-z\d!<>@#$%^&*)(+=:._-]/,
      "No cumple las condiciones"
    ),
});

export default function Login(props) {

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('')
  const [showPass, setShowPass] = useState(false);
  const [, setNewPass] = useState("");

  const { translate } = useContext(TranslationContext)
  let history = useHistory();

  const classes = LoginStyles();

  const onSubmit = async () => {
    
  }

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const updateFunction = () => {
    setShowPass(!showPass);
  };

  return (
    <React.Fragment>
      {loading && (
        <div className={classes.fabProgress}>
          <CircularProgress size={68}/>
        </div>
      )}
      {!loading && ( 
        <Container component="main" maxWidth={'lg'} className={`${classes.mainContainer}`}>
          <div className={`${classes.divTitle}`}>
            <h2 className={classes.title}>{translate('login', 'Title')}</h2>
            <p className={classes.sub}>{translate('login', 'SubTitle')}</p>
          </div>
          <div className={`${classes.containerForm}`}>
            <form className={classes.form} onSubmit={formik.onSubmit}>
                <EmailField
                  className={classes.textbox}
                  name="email"
                  label={translate('login', 'FieldEmail')}
                  error={formik.errors.email}
                  handleChange={formik.handleChange}
                  defaultValue={email}
                />

                <PasswordField
                  className={classes.textbox}
                  name="password"
                  label={translate('login', 'FieldPassword')}
                  error={formik.errors.password}
                  showPass={showPass}
                  handleChange={formik.handleChange}
                  updateFunction={updateFunction}
                  autoComplete="new-password"
                />

                <div className={classes.divFooterForm}>
                  <Link
                    className={classes.LinkStyle}
                    to={'/recoverPassword'}
                  >
                    {translate('login', 'LabelRestorePassword')}
                  </Link>

                  <button
                    type="submit"
                    className={loading || !formik.isValid ? classes.buttonSubmitDisabled : classes.buttonSubmit}
                    disabled={loading || !formik.isValid}
                  >
                    {translate('login', 'ButtonLogin')}
                  </button> 
                </div>
            </form>
          </div>
        </Container>
      )}
    </React.Fragment>
  )
}
