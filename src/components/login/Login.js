import { CircularProgress, Container} from '@material-ui/core'
import { useFormik } from 'formik';
import * as Yup from "yup";
import React, { useContext, useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { TranslationContext } from '../../context/translation/TranslationContext';
import LoginStyles from '../../styles/login/LoginStyles';
import { EmailField, PasswordField } from '../commons/CustomFields';
import WarningMessage from "../commons/warningMessage/warningMessage";

const initialValues = {
  email: '',
  password: '',
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Formato Inválido")
    .required("Requerido"),
  password: Yup.string()
    .required("Requerido")
    .min(8, "Minimo 8 caracteres")
  });

export default function Login(props) {

  const [loading, setLoading] = useState(false);
  const [openWarningMessage1, setOpenWarningMessage1] = useState(false);
  const [openWarningMessage2, setOpenWarningMessage2] = useState(false);
  const [email, setEmail] = useState('')
  const [passField, setPassField] = useState('')
  const [showPass, setShowPass] = useState(false);

  const { translate, updateTranslate, setUserLogged } = useContext(TranslationContext)
  let history = useHistory();

  const classes = LoginStyles();


  const handleWarningMessage1 = () => {
    setOpenWarningMessage1(!openWarningMessage1);
  };

  const handleWarningMessage2 = () => {
    setOpenWarningMessage2(!openWarningMessage2);
  };

  const onSubmit = async (values) => {
    setLoading(true);

    //Gets the div element from the language selector
    const divSelectorLanguage = document.getElementById('selectorLanguage');
    divSelectorLanguage.style.display = 'none';
    const { email, password } = values;
    setLoading(false)
    const location = {
      pathname: "/home",
    };
    history.push(location);
    setUserLogged(true);
  }

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const updateFunction = () => {
    setShowPass(!showPass);
  };

  const handleEmail = (params) => {
    setEmail(params.target.value);
    formik.handleChange(params);
  };

  const handlePassword = (params) => {
    setPassField(params.target.value);
    formik.handleChange(params);
  };

  return (
    <React.Fragment>
      {openWarningMessage1 && (
        <>
          <WarningMessage
            open={openWarningMessage1}
            onClose={handleWarningMessage1}
            message1={translate('loginError1', 'Text1')}
            message2={translate('loginError1', 'Text2')}
          />
        </>
      )}
      {openWarningMessage2 && (
        <>
          <WarningMessage
            open={openWarningMessage2}
            onClose={handleWarningMessage2}
            message1={translate('loginError2', 'Text3')}
            message2={translate('loginError2', 'Text4')}
          />
        </>
      )}
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
            <form className={classes.form} onSubmit={formik.handleSubmit}>
                <EmailField
                  className={classes.textbox}
                  name="email"
                  label={translate('login', 'FieldEmail')}
                  error={formik.errors.email}
                  handleChange={handleEmail}
                />

                <PasswordField
                  className={classes.textbox}
                  name="password"
                  label={translate('login', 'FieldPassword')}
                  error={formik.errors.password}
                  showPass={showPass}
                  handleChange={handlePassword}
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
                    className={loading || !formik.isValid || email == '' || passField == '' ? classes.buttonSubmitDisabled : classes.buttonSubmit}
                    disabled={loading || !formik.isValid || email == '' || passField == '' }
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
