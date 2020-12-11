import React, { useEffect, useState } from "react";

import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Auth } from "aws-amplify";
import amplifyConfig from "../../config/amplifyConfig";

import { useHistory } from "react-router-dom";

import RestorePasswordStyles from "../../styles/recoverPassword/RestorePasswordStyles";
import validationStyles from "../../styles/Register/ValidateStyles";
import {
  PasswordField,
} from "../commons/CustomFields";
import { Paper, Container, Checkbox, Link } from "@material-ui/core";
import { ButtonForm } from "../commons/Buttons";

import Messages from "../commons/warningMessage/messages";
import WarningMessage from "../commons/warningMessage/warningMessage";

import Grid from "@material-ui/core/Grid";


const initialValues = {
  password: "",
};

const validationSchema = Yup.object({
  password: Yup.string()
    .required("Requerido")
    .min(8, "Minimo 8 caracteres")
    .matches(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!<>@#$%^&*)(+=:._-])[A-Za-z\d!<>@#$%^&*)(+=:._-]/,
      "No cumple las condiciones"
    ),
});

export default function CompanyRegistration() {
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [, setNewPass] = useState("");
  const [validUpperCase, setValidUpperCase] = useState(false);
  const [validLowerCase, setValidLowerCase] = useState(false);
  const [validSpecialChar, setValidSpecialChar] = useState(false);
  const [validNumber, setValidNumber] = useState(false);
  const [validLength, setValidLength] = useState(false);
  const [openWarningMessage1, setOpenWarningMessage1] = useState(false);
  const [openWarningMessage2, setOpenWarningMessage2] = useState(false);
  const [initial, setInitial] = useState(true) 

  let history = useHistory();
  const passwordFieldValue = document.getElementById("password")  != null ? document.getElementById('password').value : null;


  const classes = RestorePasswordStyles();
  const validationClases = validationStyles();

  const updateFunction = () => {
    setShowPass(!showPass);
  };

  const handleWarningMessage1 = () => {
    setOpenWarningMessage1(!openWarningMessage1);
  };
  const handleWarningMessage2 = () => {
    setOpenWarningMessage2(!openWarningMessage2);
  };

 
  
  const onSubmit = async (values) => {
    const  email = values.email;

    setLoading(true);
    try {
      //validate email received exist or not
      const consult = await axios.get(
          `${process.env.REACT_APP_GATEWAY_END_POINT}/aduser/validate?email=${email}`
        )
        
          console.log('result',consult.data.body)
          const result =  consult.data.body;
          console.log(result)

          if (!result.exist) {
            // *** if mail not exist ***
            handleWarningMessage1()
          } else {
            // *** if mail  exist ***

            if(!result.isactive  || !result.isverified)  handleWarningMessage1()
            
            if(result.isactive && result.isverified){

              try { 
                amplifyConfig.initAmplify("User");
                var data = await Auth.forgotPassword(email)
                console.log('data',data)
                const location = {
                  pathname: "/recoverPasswordConfirmation",
                 };
                 history.push(location);
              } catch (error) {
                handleWarningMessage2()
              }
            }

          }
      
      setLoading(false);
      
    } catch (error) {
      setLoading(false);
    }
  };

  const testNewPassword = (params) => {
    setNewPass(params.target.value);
    var regUpperCase = /[A-Z]/g;
    var regLowerCase = /[a-z]/g;
    var regNumbers = /[0-9]/g;
    var regSpecialChar = /[!<>@#$%^&*)(+=:._-]/g;
    var regLength = /^(?=.{8,40}$).*/g;
    setValidUpperCase(regUpperCase.test(params.target.value));
    setValidLowerCase(regLowerCase.test(params.target.value));
    setValidNumber(regNumbers.test(params.target.value));
    setValidSpecialChar(regSpecialChar.test(params.target.value));
    setValidLength(regLength.test(params.target.value));

    formik.handleChange(params);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  useEffect(()=>{

    if(!formik.isValid ||passwordFieldValue != null){
      setInitial(false)
    }

  },[formik.isValid,passwordFieldValue])
  

  return (
    <React.Fragment>
       {openWarningMessage1 && (
        <>
          <WarningMessage
            open={openWarningMessage1}
            onClose={handleWarningMessage1}
            message1={Messages.message7}
            message2={Messages.message8}
          />
        </>
      )}

      {openWarningMessage2 && (
        <>
          <WarningMessage
            open={openWarningMessage2}
            onClose={handleWarningMessage2}
            message1={Messages.message11}
            message2={Messages.message12}
          />
        </>
      )}

      <Grid container spacing={0} className={classes.mainContainer}>
        <Grid item xs={6} sm={6} md={6}>
          <Paper className={classes.container2}>
            <Grid item xs={12} className={classes.containerTitle}>
              <p className={classes.sub1}>Recuperar contraseña</p>
              <p className={classes.sub2}>¡Ingresa tu nueva contraseña!</p>
            </Grid>

            <Container component="main" maxWidth="sm" className={classes.form}>
              <form className={classes.form} onSubmit={formik.handleSubmit}>
                <div className={classes.containerFields}>

                  <PasswordField
                    className={classes.textbox}
                    name="password"
                    label="Contraseña"
                    error={formik.errors.password}
                    showPass={showPass}
                    handleChange={testNewPassword}
                    updateFunction={updateFunction}
                    autoComplete="new-password"
                  />
                </div>
                <div className={validationClases.divValidator}>
                  <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                    spacing={1}
                  >
                    <Grid item xs={4} sm={4} md={2}>
                      <p
                        className={
                          validUpperCase
                            ? validationClases.upperOk
                            : validationClases.upperBad
                        }
                      >
                        1 Mayúscula
                      </p>
                    </Grid>

                    <Grid item xs={8} sm={4} md={2}>
                      <p
                        className={
                          validLowerCase
                            ? validationClases.lowerOk
                            : validationClases.lowerBad
                        }
                      >
                        1 Minúscula
                      </p>
                    </Grid>

                    <Grid item xs={3} sm={4} md={2}>
                      <p
                        className={
                          validNumber
                            ? validationClases.numberOk
                            : validationClases.numberBad
                        }
                      >
                        1 Número
                      </p>
                    </Grid>

                    <Grid item xs={9} sm={6} md={3}>
                      <p
                        className={
                          validSpecialChar
                            ? validationClases.specialOk
                            : validationClases.specialBad
                        }
                      >
                        1 Caracter especial
                      </p>
                    </Grid>

                    <Grid item xs={7} sm={6} md={3}>
                      <p
                        className={
                          validLength
                            ? validationClases.LengthOk
                            : validationClases.LengthBad
                        }
                      >
                        8 Caracteres
                      </p>
                    </Grid>
                  </Grid>
                </div>

                <div className={classes.contButtonForm}>
                  <ButtonForm
                    type="submit"
                    className={ formik.isValid && !initial && passwordFieldValue !=null  ? classes.submit : classes.submitDisabled}
                    text="Recuperar contraseña"
                    disabled={loading || !formik.isValid}
                  />
                </div>
              </form>
            </Container>
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
