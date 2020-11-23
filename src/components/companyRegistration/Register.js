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
import { Button, Fab, Paper } from "@material-ui/core";
import {ButtonForm} from "../commons/Buttons"

import SgvCircle from "../../assets/images/svgFiles/SvgRegister/SvgCircle";
import SvgStrolling from "../../assets/images/svgFiles/SvgRegister/SvgStrolling";
import SvgIcon1 from "../../assets/images/svgFiles/SvgRegister/SvgIcon1";
import SgvLogo from "../../assets/images/svgFiles/SvgRegister/Svglogo";
import Sgv5 from "../../assets/images/svgFiles/SvgRegister/Svgregister";
import SvgWhatsAppBlack from "../../assets/images/svgFiles/svgNetworks/whatsAppBlack";
import SvgFacebookBlack from "../../assets/images/svgFiles/svgNetworks/facebookBlack";
import SvgInstagramBlack from "../../assets/images/svgFiles/svgNetworks/instagramBlack";
import SvgHelp from "../../assets/images/svgFiles/svgHelp";

import Grid from "@material-ui/core/Grid";
import { useAlert, positions } from "react-alert";

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

  let history = useHistory();

  const classes = RegisterStyles();
  const validationClases = validationStyles();

  const updateFunction = () => {
    setShowPass(!showPass);
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

  const onSubmit = async (values) => {
    setLoading(true);
    const { companyName, userName, email, password } = values;

    try {
      //console.log(companyName,userName,email,password)
      const companyRegistration = await axios.post(
        `${process.env.REACT_APP_GATEWAY_END_POINT}/adclient/registration`,
        {
          companyname: companyName,
          username: userName,
          useremail: email,
          admoduleid: [1, 3],
        }
      );

      const result = companyRegistration.data.body;
      //console.log("resultado",result)

      //Create cognito user
      const userCognito = await createNewUser(
        email,
        password,
        userName,
        result.adclientgroupid,
        result.adclientid,
        result.adroleid,
        result.aduserid
      );
      await setLoading(false);
      const location = {
        pathname: "/homePage",
      };
      history.push(location);
    } catch (error) {
      alert.error(error.message, {
        position: positions.BOTTOM_CENTER,
        type: "error",
      });
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
      <Grid container spacing={0} className={classes.mainContainer}>
        <Grid item xs={3}>
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
        <Grid item xs={6}>
          <div className={classes.logo}>
            <SgvLogo />
          </div>

          <Paper className ={classes.container2}>
            <Grid item xs={12} className={classes.containerTitle}> 
                <p className={classes.sub1}>Regístrate</p>
                <p className={classes.sub2}>¡Ingresa tus datos para empezar!</p>
            </Grid>

            <Grid item xs={12} className={classes.form}>
            <form  onSubmit={formik.handleSubmit}>
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
                  <Grid item xs={4} sm={2}>
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

                  <Grid item xs={8} sm={2}>
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

                  <Grid item xs={3} sm={2}>
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

                  <Grid item xs={9} sm={3}>
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

                  <Grid item xs={7} sm={3}>
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
                className={classes.submit}
                text="Regístrate"
                //disabled={loading || !formik.isValid}
              >
                {/* {loading && (
                  <CircularProgress size={24} className={classes.loading} />
                )}{" "} */}
                Regístrate
              </ButtonForm>
              </div>
              
            </form>
            </Grid>
          </Paper>

          <div className={classes.contFoot}>
            <div className={classes.sgv5}>
              <Sgv5 />
            </div>
            <div className={classes.contNeworks}>
              <p>
                <SvgWhatsAppBlack width={"37px"} height={"37px"} />
              </p>
              <p>
                <SvgFacebookBlack width={"37px"} height={"37px"} />
              </p>
              <p>
                <SvgInstagramBlack width={"37px"} height={"37px"} />
              </p>
            </div>
          </div>
        </Grid>
        <Grid item xs={3} className={classes.container3}>
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
