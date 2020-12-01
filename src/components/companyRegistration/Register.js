import React, { useState } from "react";

import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Auth } from "aws-amplify";
import amplifyConfig from "../../config/amplifyConfig";

import { useHistory } from "react-router-dom";


import RegisterStyles from "../../styles/Register/registerStyles";
import validationStyles from "../../styles/Register/ValidateStyles";
import {
  EmailField,
  PasswordField,
  SimpleTextField,
} from "../commons/CustomFields";
import { Fab, Paper, Container, Checkbox, Link  } from "@material-ui/core";
import {ButtonForm} from "../commons/Buttons"

import SgvCircle from "../../assets/images/svgFiles/SvgRegister/SvgCircle";
import SvgStrolling from "../../assets/images/svgFiles/SvgRegister/SvgStrolling";
import SvgIcon1 from "../../assets/images/svgFiles/SvgRegister/SvgIcon1";
import SgvLogo from "../../assets/images/svgFiles/SvgRegister/Svglogo";
import SvgWhatsAppBlack from "../../assets/images/svgFiles/svgNetworks/whatsAppBlack";
import SvgFacebookBlack from "../../assets/images/svgFiles/svgNetworks/facebookBlack";
import SvgInstagramBlack from "../../assets/images/svgFiles/svgNetworks/instagramBlack";
import SvgHelp from "../../assets/images/svgFiles/svgHelp";
import Messages from "../commons/warningMessage/messages"


import WarningMessage from "../commons/warningMessage/warningMessage"

import Grid from "@material-ui/core/Grid";
import {positions } from "react-alert";

let exist;

const initialValues = {
  companyName: "",
  userName: "",
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  companyName: Yup.string().required("Requerido"),
  userName: Yup.string().required("Requerido"),
  email: Yup.string()
    .email("Correo invalido")
    .required("Requerido"),
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
  const [newPass, setNewPass] = useState("");
  const [validUpperCase, setValidUpperCase] = useState(false);
  const [validLowerCase, setValidLowerCase] = useState(false);
  const [validSpecialChar, setValidSpecialChar] = useState(false);
  const [validNumber, setValidNumber] = useState(false);
  const [validLength, setValidLength] = useState(false);
  const [checked, setChecked] = useState(false);
  const [openWarningMessage1, setOpenWarningMessage1] = useState(false);
  const [openWarningMessage2, setOpenWarningMessage2] = useState(false);
  const [openWarningMessage3, setOpenWarningMessage3] = useState(false);
  const [openWarningMessage4, setOpenWarningMessage4] = useState(false);


  const [messageError, setMessageError] = useState("");

  let history = useHistory();

  const classes = RegisterStyles();
  const validationClases = validationStyles();

  const updateFunction = () => {
    setShowPass(!showPass);
  };

  const handleChangeChecked = (event) => {
    setChecked(event.target.checked)
  }
  const handleWarningMessage1 = () => {
    setOpenWarningMessage1(!openWarningMessage1)
  };
  const handleWarningMessage2 = () => {
    setOpenWarningMessage2(!openWarningMessage2)
  };
  const handleWarningMessage3 = () => {
    setOpenWarningMessage3(!openWarningMessage3)
  };
  const handleWarningMessage4 = () => {
    setOpenWarningMessage4(!openWarningMessage4)
  };

  async function createNewUser(
    email,
    password,
    name,
    adUserID,
    adClientGroupID,
    adRoleID,
    adClientID
  ) {
    var result = "OK";
    try {
      amplifyConfig.initAmplify("User");

      const username = email;
      var data = await Auth.signUp({
        username,
        password,
        attributes: {
          email: email,
          name: name,
          "custom:aduserid": toString(adUserID),
          "custom:adclientgroupid": toString(adClientGroupID),
          "custom:adroleid": toString(adRoleID),
          "custom:adclientid": toString(adClientID),
        },
        validationData: [], //optional
      });

      //console.log(data);
    } catch (error) {
      console.error(error);
      throw new Error(error.message);
    }
    return result;
  }

 /*  const validPool = () => {
  var AWS = require('aws-sdk');
  var creds = new AWS.Credentials(`${process.env.REACT_APP_AWS_ACCESS_KEY_ID}`, `${process.env.REACT_APP_AWS_SECRET_ACCESS_KEY}`, null );

  const cognito = new AWS.CognitoIdentityServiceProvider({
    apiVersion: '2016-04-18',
    region: `${process.env.REGION_AWS}`,
    IdentityPoolId: `${process.env.USER_POOL_COGNITO}`
  });

  var params = {
    AccessToken: token
};

  } */

  const onSubmit = async (values) => {

    const { companyName, userName, email, password } = values;
    setLoading(true);
    try {
    const { companyName, userName, email, password } = values;
          axios
          .get(
            `${process.env.REACT_APP_GATEWAY_END_POINT}/aduser/validate?email=${email}`,
          ).then((response)=> {

              const result = response.data.body;
              if(!result.exist){
                 axios.post(
                  `${process.env.REACT_APP_GATEWAY_END_POINT}/adclient/registration`,
                  {
                    companyname: companyName,
                    username: userName,
                    useremail: email,
                    admoduleid: [1, 3],
                  }
                    
                ).then((response) => {
                   const result = response.data.body
                   console.log("resultado",result)

                   //Create cognito user
                  const userCognito = createNewUser(
                  email,
                  password,
                  userName,
                  result.adclientgroupid,
                  result.adclientid,
                  result.adroleid,
                  result.aduserid
                  )
                  }).then(()=>{
                  }) ;
                }else{
                  if(result.isactive && result.isverified){
                      setOpenWarningMessage1(true)
                  }
                  if(result.isactive && !result.isverified){
                    //reenviar correo de verificación cógnito;

                    axios
                      .get(
                        `${process.env.REACT_APP_GATEWAY_END_POINT}/aduser/count?email=${email}`,
                          ).then(((response)=>{
                            const result = response.data.body;
                              result > 1 ? setOpenWarningMessage2(true): result == 1 ? setOpenWarningMessage3(true) : console.log('c') ;
                              
                              
                          }))
                          
                  }
                  if(!result.isactive && result.isverified){
                    setOpenWarningMessage4(true);
                  }
                }})   
                 setLoading(false);
                /* const location = {
                  pathname: "/homePage",
                };
                history.push(location); */
                
    }catch(error) {
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

  return (
    <React.Fragment>
      {openWarningMessage1 && (
          <>
            <WarningMessage 
            open={openWarningMessage1} 
            onClose={handleWarningMessage1} 
            message1={Messages.message1}
            message2={Messages.message2}
             />
          </>
        )}

        {openWarningMessage2 && (
          <>
            <WarningMessage 
            open={openWarningMessage2} 
            onClose={handleWarningMessage2}
            message1={Messages.message3}
            message2={Messages.message4}
             />
          </>
        )}

        {openWarningMessage3 && (
          <>
            <WarningMessage 
            open={openWarningMessage3} 
            onClose={handleWarningMessage3} 
            message1={Messages.message3}
            message2={Messages.message5}
             />
          </>
        )}

        {openWarningMessage4 && (
          <>
            <WarningMessage 
            open={openWarningMessage4} 
            onClose={handleWarningMessage4} 
            message1={Messages.message1}
            message2={Messages.message6}
             />
          </>
        )}
        
      <Grid container spacing={0} className={classes.mainContainer}>
        <Grid item xs={3} sm={3} md={3}>
          <div className={classes.circle1}>
            <SgvCircle
              color={"#50D1B6"}
              width={"135.9px"}
              height={"135.73px"}
            />
          </div>
          <div className={classes.svgStrolling}>
            <SvgStrolling width={"168.96px"} height={"154.07px"} />
          </div>
          <div className={classes.svgIcon1}>
            <SvgIcon1 rotate="rotate(-90)" />
          </div>
        </Grid>
        <Grid item xs={6} sm={6} md={6}>
        <Link style={{cursor:"pointer"}} href="/homePage">
          <div className={classes.logo}>
  |          <SgvLogo />
          </div>
        </Link>
          
          <Paper className ={classes.container2}>
            <Grid item xs={12} className={classes.containerTitle}> 
                <p className={classes.sub1}>Regístrate</p>
                <p className={classes.sub2}>¡Ingresa tus datos para empezar!</p>
            </Grid>

            <Container component="main" maxWidth="sm" className={classes.form}>
            <form  className={classes.form} onSubmit={formik.handleSubmit}>
              <div className={classes.containerFields}>
              <SimpleTextField
                className={classes.textbox}
                name="companyName"
                label="Nombre de la Empresa"
                error={formik.errors.companyName}
                handleChange={formik.handleChange}
              />
              <SimpleTextField
                className={classes.textbox}
                name="userName"
                label="Nombre completo"
                error={formik.errors.userName}
                handleChange={formik.handleChange}
              />

              <EmailField
                className={classes.textbox}
                name="email"
                label="Correo Electrónico"
                error={formik.errors.email}
                handleChange={formik.handleChange}
              />

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
              
              <div className={classes.contPoliticas}>
              <Checkbox
                checked={checked}
                onChange={handleChangeChecked}
              />
              <p>Acepto los {' '} 
                <Link className={classes.políticasTitle}  onClick={() => window.open(`${process.env.REACT_APP_TERMINOS}`)}> 
                {'terminos del servicio'}
                </Link>{' '}
                y {' '} 
                <Link className={classes.políticasTitle} onClick={() => window.open(`${process.env.REACT_APP_POLITICA_PRIVACIDAD}`)}> 
                {'política de privacidad'}
                </Link>{' '}
              </p>
              </div>

              <div className={classes.contButtonForm}>
              <ButtonForm
                type="submit"
                className={checked ? classes.submit : classes.submitDisabled}
                text="Regístrate"
                disabled={loading || !formik.isValid || !checked}
              >
                {/* {loading && (
                  <CircularProgress size={24} className={classes.loading} />
                )}{" "} */}
                Regístrate
              </ButtonForm>
              </div>
              
            </form>
            </Container>
          </Paper>

          <div className={classes.contFoot}>
            <div className={classes.contNeworks}>
              
              <p>
                <Link  onClick={() => window.open(`${process.env.REACT_APP_WHATSAPP}`)} >
                  <SvgWhatsAppBlack width={"37px"} height={"37px"}> </SvgWhatsAppBlack>
                </Link>
              </p>
              <p>
              <Link  onClick={() => window.open(`${process.env.REACT_APP_FACEBOOK}`)}>
                <SvgFacebookBlack width={"37px"} height={"37px"} />
              </Link>
              </p>

              <p>
              <Link  onClick={() => window.open(`${process.env.REACT_APP_INSTAGRAM}`)}>
                <SvgInstagramBlack width={"37px"} height={"37px"} />
              </Link>
              </p>
            </div>
          </div>
        </Grid>
        <Grid item xs={3} sm={3} md={3}>
          <div className={classes.circle2}>
            <SgvCircle color={"#00808E"} width={"124px"} height={"121px"} />
          </div>
          
          <div className={classes.contButtonHelp}>
          <Fab
              style={{
                width: "86px",
                height: "86px",
                background: "#F99211",
              }}
            >
              <SvgHelp />
          </Fab>
          </div>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
