import { CircularProgress, Container} from '@material-ui/core'
import { useFormik } from 'formik';
import * as Yup from "yup";
import React, { useContext, useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import Cookies from 'universal-cookie';
import LoginStyles from '../../styles/login/LoginStyles';
import { EmailField, PasswordField } from '../commons/CustomFields';
import WarningMessage from "../commons/warningMessage/warningMessage";
import {usersDB} from "../../data/db";

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
  const [email, setEmail] = useState('')
  const [passField, setPassField] = useState('')
  const [showPass, setShowPass] = useState(false);

  let history = useHistory();

  const classes = LoginStyles();


  const handleWarningMessage1 = () => {
    setOpenWarningMessage1(!openWarningMessage1);
  };


  const onSubmit = async (values) => {
    setLoading(true);
    //Gets the div element from the language selector
   
    const { email, password } = values;
    let nameUser;
    let roleUser;
    let avatar;
    let validLog = false
    usersDB.users.map((element)=>{
        if (element.user === email && element.password === password ){
          setLoading(false);
          nameUser = element.name;
          roleUser = element.role;
          avatar = element.avatar;
          validLog= true
        }
      })
      
    if (validLog) {
      const divSelectorLanguage = document.getElementById('selectorLanguage');
      divSelectorLanguage.style.display = 'none';
      const cookies = new Cookies();
      cookies.set('userName', nameUser ,{path: '/'})
      cookies.set('userRole', roleUser ,{path: '/'})
      cookies.set('avatar', avatar ,{path: '/'})


      setLoading(false);
      const location = {
        pathname: "/home",
      };
      history.push(location);
    }else{
      setLoading(false)
      handleWarningMessage1()
    }
    
      
//      
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
            message1="Contraseña Inválida"
            message2="Tu Contraseña no es válida"
            message3="aceptar"

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
            <h2 className={classes.title}>Bienvenid@</h2>
            <p className={classes.sub}>Ingresa tus credenciales para continuar</p>
          </div>
          <div className={`${classes.containerForm}`}>
            <form className={classes.form} onSubmit={formik.handleSubmit}>
                <EmailField
                  className={classes.textbox}
                  name="email"
                  label="Correo electrónico"
                  error={formik.errors.email}
                  handleChange={handleEmail}
                />

                <PasswordField
                  className={classes.textbox}
                  name="password"
                  label="Contraseña"
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
                    Recuperar Contraseña
                  </Link>

                  <button
                    type="submit"
                    className={loading || !formik.isValid || email == '' || passField == '' ? classes.buttonSubmitDisabled : classes.buttonSubmit}
                    disabled={loading || !formik.isValid || email == '' || passField == '' }
                  >
                    Inicia sesión
                  </button> 
                </div>
            </form>
          </div>
        </Container>
      )}
    </React.Fragment>
  )
}
