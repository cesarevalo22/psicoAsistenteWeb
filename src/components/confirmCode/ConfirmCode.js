import { CircularProgress, Container } from '@material-ui/core'
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import ConfirmCodeStyles from '../../styles/confirmCode/ConfirmCodeStyles'
import * as Yup from "yup";
import axios from 'axios';
import { useFormik } from "formik";
import { EmailField, SimpleTextField } from '../commons/CustomFields';
import { Link, useHistory } from 'react-router-dom';

import { CONFIRM_CODE_MESSAGES } from "../commons/warningMessage/messages";
import WarningMessage from "../commons/warningMessage/warningMessage";
import { Auth } from 'aws-amplify';
import amplifyConfig from '../../config/amplifyConfig';
import queryString from 'query-string';

const initialValues = {
  email: '',
  code: '',
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Correo invalido")
    .required("Campo obligatorio"),
  code: Yup.string().required('Campo obligatorio'),
});

export default function ConfirmCode(props) {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(true);
  const [openWarningMessage1, setOpenWarningMessage1] = useState(false);
  const [openWarningMessage2, setOpenWarningMessage2] = useState(false);
  const [openWarningMessage3, setOpenWarningMessage3] = useState(false);
  const [openWarningMessage4, setOpenWarningMessage4] = useState(false);

  let history = useHistory();

  useEffect(() => {
    try {
      setLoading(true);
      const { email, code } = queryString.parse(atob(props.location.search.split('?')[1]));
      if(email && code) {
        setEmail(email);
        setCode(code);
        setLoading(false);
      } else {
        setLoading(false);
        const location = {
          pathname: "/notFound",
        };
        history.push(location); 
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
      const location = {
        pathname: "/notFound",
      };
      history.push(location); 
    }
  }, [])

  const handleWarningMessage1 = () => {
    setOpenWarningMessage1(!openWarningMessage1);
  };
  const handleWarningMessage2 = () => {
    setOpenWarningMessage2(!openWarningMessage2);
  };
  const handleWarningMessage3 = () => {
    setOpenWarningMessage3(!openWarningMessage3);
  };
  const handleWarningMessage4 = () => {
    setOpenWarningMessage4(!openWarningMessage4);
  };

  // resend validation email
  async function resendCodeCognito(email) {
    var result = "OK";
    try {
      amplifyConfig.initAmplify("User");

      const username = email;
      var data = await Auth.resendSignUp(username);

    } catch (error) {
      console.error(error);
      throw new Error(error.message);
    }
    return result;
  }

  // resend validation email
  async function confirmCode(email, validationCode) {
    try {
      amplifyConfig.initAmplify("User");

      const data = await Auth.confirmSignUp(email, validationCode, { forceAliasCreation: true, });
      return data;
    } catch (error) {
      console.error(error);
      throw new Error(error.message);
    }
  }

  const classes = ConfirmCodeStyles();

  const onSubmit = async (values) => {
    const { email, code } = values;
    setLoading(true);
    try {
      //validate email received exist or not
      axios.get(
        `${process.env.REACT_APP_GATEWAY_END_POINT}/aduser/validate`,
        {
          params: {
            email: email
          }
        },
      ).then((response) => {
        const result = response.data.body;
        if(result.exist && result.isactive && !result.isverified) {
          try {
            confirmCode(email, code)
            .then(response => {
              if(response === 'SUCCESS') {
                console.log(email);
                axios.put(
                  `${process.env.REACT_APP_GATEWAY_END_POINT}/aduser/verified?email=${email}`,
                  {
                    isverified: true
                  }
                ).then(response => {
                  setLoading(false);
                  const location = {
                    pathname: "/",
                  };
                  history.push(location); 
                })
                .catch(error => {
                  console.error(error);
                  setLoading(false);
                  setOpenWarningMessage3(true);
                })
              }
            })
            .catch((error) => {
              console.error(error);
              setLoading(false);
              setOpenWarningMessage3(true);
            })
          } catch (error) {
            console.error(error);
            setLoading(false);
            setOpenWarningMessage3(true);
          }
          
        } else if(!result.exist || !result.isactive || result.isverified) {
          setLoading(false);
          setOpenWarningMessage4(true);
        }

      })
      .catch(error => {
        console.error(error);
        setLoading(false);
        setOpenWarningMessage4(true);
      })
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }

  initialValues.email = email || '';
  initialValues.code = code || '';

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const sendNewCode = async () => {
    setLoading(true);
    try {
      const consult = await axios.get(
        `${process.env.REACT_APP_GATEWAY_END_POINT}/aduser/validate`,
        {
          params: {
            email: email
          }
        },
      );
      if(consult.data.body === false) {
        throw new Error();
      } else {
        if(consult.data.body.exist && consult.data.body.isactive && !consult.data.body.isverified) {
          try {

            resendCodeCognito(email)
            .then((response) => {
              setLoading(false);
              const location = {
                pathname: "/mailnotification",
              };
              history.push(location); 
            })
            .catch((error) => {
              console.error(error);
              setLoading(false);
              setOpenWarningMessage1(true);  
            })
          } catch (error) {
            console.error(error);
            setLoading(false);
            setOpenWarningMessage1(true);
          }
        } else if(!consult.data.body.exist || !consult.data.body.isactive || consult.data.body.isverified) {
          setLoading(false);
          setOpenWarningMessage2(true);
        }
      }
    } catch (error) {
      setLoading(false);
      setOpenWarningMessage2(true);
      console.error(error);
    }
  }

  return (
    <React.Fragment>
      {openWarningMessage1 && (
        <>
          <WarningMessage
            open={openWarningMessage1}
            onClose={handleWarningMessage1}
            message1={CONFIRM_CODE_MESSAGES.title1}
            message2={CONFIRM_CODE_MESSAGES.message1}
          />
        </>
      )}

      {openWarningMessage2 && (
        <>
          <WarningMessage
            open={openWarningMessage2}
            onClose={handleWarningMessage2}
            message1={CONFIRM_CODE_MESSAGES.title1}
            message2={CONFIRM_CODE_MESSAGES.message2}
          />
        </>
      )}

      {openWarningMessage3 && (
        <>
          <WarningMessage
            open={openWarningMessage3}
            onClose={handleWarningMessage3}
            message1={CONFIRM_CODE_MESSAGES.title2}
            message2={CONFIRM_CODE_MESSAGES.message3}
          />
        </>
      )}

      {openWarningMessage4 && (
        <>
          <WarningMessage
            open={openWarningMessage4}
            onClose={handleWarningMessage4}
            message1={CONFIRM_CODE_MESSAGES.title3}
            message2={CONFIRM_CODE_MESSAGES.message2}
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
                  defaultValue={email}
                  disabled
                />

                <SimpleTextField
                  className={classes.textbox}
                  name="code"
                  label="Código de verificación"
                  error={formik.errors.code}
                  defaultValue={code}
                  handleChange={formik.handleChange}
                  disabled
                />

                <div className={classes.divFooterForm}>
                  <button
                    type="button"
                    className={classes.buttonSendNewCode}
                    onClick={sendNewCode}
                  >
                    Reenviar código
                  </button>

                  <button
                    type="submit"
                    className={loading || !formik.isValid ? classes.buttonSubmitDisabled : classes.buttonSubmit}
                    disabled={loading || !formik.isValid}
                  >
                    Activar Cuenta
                  </button>
                </div>
            </form>
          </div>
        </Container>
      )}
    </React.Fragment>
  )
}
