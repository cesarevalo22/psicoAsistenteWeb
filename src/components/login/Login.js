import { CircularProgress, Container} from '@material-ui/core'
import { useFormik } from 'formik';
import * as Yup from "yup";
import React, { useContext, useEffect, useState } from 'react'
import { useCookies } from 'react-cookie';
import { Link, useHistory } from 'react-router-dom';
import { TranslationContext } from '../../context/translation/TranslationContext';
import LoginStyles from '../../styles/login/LoginStyles';
import { EmailField, PasswordField } from '../commons/CustomFields';
import axios from 'axios';
import WarningMessage from "../commons/warningMessage/warningMessage";
import cookieName from '../../helpers/cookiesDeclaration';
import { signInCognito, signOutCognito, userIsLogged } from '../../helpers/AmplifyHelpers';

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
  const [cookies, setCookie, removeCookie] = useCookies([cookieName]);
  const [email, setEmail] = useState('')
  const [passField, setPassField] = useState('')
  const [showPass, setShowPass] = useState(false);

  const { translate, updateTranslate, setUserLogged } = useContext(TranslationContext)
  let history = useHistory();

  const classes = LoginStyles();

  useEffect(() => {
    setLoading(true)
    userIsLogged()
    .then(response => {
      if(response) {
        if(response.isValid) {
          const location = {
            pathname: "/home",
          };
          history.push(location);
          setUserLogged(true);
        }
      }
      setLoading(false)
    })
    .catch(error => {
      console.error(error);
      setLoading(false);
      setUserLogged(false);
    })
  }, [])

  const clearStoreData = (exclude) => {
    removeCookie(cookieName);
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if(exclude.indexOf(key) === -1) {
        localStorage.removeItem(key);
      }
    }
  }

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

    try {
      const responseSignIn = await signInCognito(email, password);
      const aduseridCognito = responseSignIn.attributes['custom:aduserid'];
      const adroleidCognito = responseSignIn.attributes['custom:adroleid'];
      const adclientidCognito = responseSignIn.attributes['custom:adclientid'];
      const emailCognito = responseSignIn.attributes['email'];
      const token = responseSignIn.signInUserSession.idToken.jwtToken;
      //Call initial user info
      try {
        const responseLoginInfo = 
          await axios.get(`${process.env.REACT_APP_GATEWAY_END_POINT}/aduser/login?aduserid=${aduseridCognito}`,
          {
            headers: { Authorization: token },
          });
        const dataLoginInfo = responseLoginInfo.data.body;
        if(dataLoginInfo) {
          //Validate initial user info with Cognito user info
          if(dataLoginInfo.email === emailCognito.toUpperCase() && dataLoginInfo.adclientid === parseInt(adclientidCognito)
            && dataLoginInfo.adroleid === parseInt(adroleidCognito) && dataLoginInfo.adclientstatus === true
            && dataLoginInfo.adrolestatus === true) {

              //Call role user info
              const responseRoleInfo = 
                await axios.get(`${process.env.REACT_APP_GATEWAY_END_POINT}/adrole/detail?adroleid=${adroleidCognito}`,
                {
                  headers: { Authorization: token },
                });
              const dataRoleInfo = responseRoleInfo.data.body;
              if(dataRoleInfo) {
                setCookie(cookieName, JSON.stringify(dataRoleInfo), { path: '/' });
              } else {
                throw new Error();
              }

              //Call role user info
              const responseWindowInfo = 
                await axios.get(`${process.env.REACT_APP_GATEWAY_END_POINT}/adwindow/details/private?adroleid=${adroleidCognito}`,
                {
                  headers: { Authorization: token },
                });
              const dataWindowInfo = responseWindowInfo.data.body;
              if(dataWindowInfo) {
                updateTranslate(dataWindowInfo);
                localStorage.setItem('lng-datap', JSON.stringify(dataWindowInfo))
                const location = {
                  pathname: "/home",
                };
                history.push(location); 
              } else {
                throw new Error();
              }
            }//Else: In case any value doesn't match
            else {
              throw new Error();
            }
        } else {
          throw new Error();
        }
      } catch (error) {
        console.error(error);
        signOutCognito();
        clearStoreData(["lng", "lng-data", "lng-expiry"]);
        divSelectorLanguage.style.display = 'inline-flex';
        setLoading(false);
        setOpenWarningMessage2(true);
      }
    } catch (error) {
      console.error(error);
      divSelectorLanguage.style.display = 'inline-flex';
      setLoading(false);
      setOpenWarningMessage1(true);
    }
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
