import React, { useEffect, useState, useContext } from "react";
import { TranslationContext } from '../../context/translation/TranslationContext';


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
import { Paper, Container, Checkbox, Link } from "@material-ui/core";
import { ButtonForm } from "../commons/Buttons";

import Messages from "../commons/warningMessage/messages";

import WarningMessage from "../commons/warningMessage/warningMessage";

import Grid from "@material-ui/core/Grid";


const initialValues = {
  companyName: "",
  userName: "",
  email: "",
  password: "",
};

const initialStatus = false

const validationSchema = Yup.object({
  companyName: Yup.string().required(" "),
  userName: Yup.string().required(" "),
  email: Yup.string()
    .email(" ")
    .required(" "),
  password: Yup.string()
    .required(" ")
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
  const [checked, setChecked] = useState(false);
  const [openWarningMessage1, setOpenWarningMessage1] = useState(false);
  const [openWarningMessage2, setOpenWarningMessage2] = useState(false);
  const [openWarningMessage3, setOpenWarningMessage3] = useState(false);
  const [openWarningMessage4, setOpenWarningMessage4] = useState(false);
  const [initial, setInitial] = useState(true) 

  let history = useHistory();
  const {langCode, translate } = useContext(TranslationContext)  

  const updateFunction = () => {
    setShowPass(!showPass);
  };

  const handleChangeChecked = (event) => {
    setChecked(event.target.checked);
  };
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
  async function reSendMail(email) {
    var result = "OK";
    try {
      amplifyConfig.initAmplify("User");

      const username = email;
      var data = await Auth.resendSignUp(username).then((data) => {
      });

    } catch (error) {
      console.error(error);
      throw new Error(error.message);
    }
    return result;
  }

  // create cognito new user
  async function createNewUser(email, password, name, adUserID, adClientGroupID, adRoleID, adClientID, langCode) 
  {
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
          "custom:aduserid": adUserID.toString(),
          "custom:adclientgroupid": adClientGroupID.toString(),
          "custom:adroleid": adRoleID.toString(),
          "custom:adclientid": adClientID.toString(),
          "custom:language": langCode,
        },
        validationData: [], //optional
      });

    } catch (error) {
      console.error(error);
      throw new Error(error.message);
    }
    return result;
  }

  // validate exist cognito user
  const validCognitoUser = (email) => {
    return new Promise((resolve, reject) => {
      try {
        var AWS = require("aws-sdk");
        var creds = new AWS.Credentials(
          `${process.env.REACT_APP_AWS_ACCESS_KEY_ID}`,
          `${process.env.REACT_APP_AWS_SECRET_ACCESS_KEY}`,
          null
        );

        const cognito = new AWS.CognitoIdentityServiceProvider({
          apiVersion: "2016-04-18",
          region: `${process.env.REACT_APP_REGION_AWS}`,
          credentials: creds,
        });

        var params = {
          Username: email,
          UserPoolId: `${process.env.REACT_APP_USER_POOL_COGNITO}`,
        };

        cognito.adminGetUser(params, function(err, data) {
          if (err) {
            resolve(false); // an error occurred - UserFound
          } else resolve(true); // successful response  UserNotFound
        });
      } catch (error) {
        reject(error); 
      }
    });
  };

  // deleteCognito User
  const deleteCognitoUser = (email) => {
    return new Promise((resolve, reject) => {
      try {
        var AWS = require("aws-sdk");
        var creds = new AWS.Credentials(
          `${process.env.REACT_APP_AWS_ACCESS_KEY_ID}`,
          `${process.env.REACT_APP_AWS_SECRET_ACCESS_KEY}`,
          null
        );

        const cognito = new AWS.CognitoIdentityServiceProvider({
          apiVersion: "2016-04-18",
          region: `${process.env.REACT_APP_REGION_AWS}`,
          credentials: creds,
        });

        var params = {
          Username: email,
          UserPoolId: `${process.env.REACT_APP_USER_POOL_COGNITO}`,
        };

        cognito.adminDeleteUser(params, function(err, data) {
          if (err) {
            resolve(true); // an error occurred - deleted
          } else resolve(false); // successful response - not deleted
        });
      } catch (error) {}
    });
  };

  const onSubmit = async (values) => {
    const { companyName, userName, email, password } = values;
    setLoading(true);
    try {
      //validate email received exist or not
      axios
        .get(
          `${process.env.REACT_APP_GATEWAY_END_POINT}/aduser/validate?email=${email}`
        )
        .then((response) => {
          const result = response.data.body;
          if (!result.exist) {
            // *** if mail not exist ***
            axios
              .post(
                `${process.env.REACT_APP_GATEWAY_END_POINT}/adclient/registration`,
                {
                  companyname: companyName,
                  username: userName,
                  useremail: email,
                  admoduleid: [1, 3],
                }
              )
              .then((response) => {
                const result = response.data.body;

                //validate user in cognito
                validCognitoUser(email).then((dato) => {
                  if (dato) {
                    deleteCognitoUser(email).then((response) => {
                      if (response) { 
                        const userCognito = createNewUser(
                          email,
                          password,
                          userName,
                          result.aduserid,
                          result.adclientgroupid,
                          result.adroleid,
                          result.adclientid,
                          langCode
                        );
                         const location = {
                         pathname: "/mailnotification",
                        };
                        history.push(location); 
                      } else {
                        console.error("the User could not be deleted");
                      }
                    });
                  } else {
                    //Create cognito user
                    const userCognito = createNewUser(
                          email,
                          password,
                          userName,
                          result.aduserid,
                          result.adclientgroupid,
                          result.adroleid,
                          result.adclientid,
                          langCode
                    );
                     const location = {
                      pathname: "/mailnotification",
                     };
                     history.push(location);  
                  }
                });
              });
          } else {
            // *** if mail  exist ***

            if (result.isactive && result.isverified) {
              setOpenWarningMessage1(true);
            }
            if (result.isactive && !result.isverified) {
              
              reSendMail(email); //resend validation code mail;

              axios
                .get(
                  `${process.env.REACT_APP_GATEWAY_END_POINT}/aduser/count?email=${email}`
                )
                .then((response) => {
                  const result = response.data.body;
                  result > 1
                    ? setOpenWarningMessage2(true)
                    : result == 1
                    ? setOpenWarningMessage3(true)
                    : console.log("notvalid");
                });
            }
            if (!result.isactive && result.isverified) {
              setOpenWarningMessage4(true);
            }

            if (!result.isactive && !result.isverified) { // this condition restart the initial flow
              axios
                .post(
                  `${process.env.REACT_APP_GATEWAY_END_POINT}/adclient/registration`,
                  {
                    companyname: companyName,
                    username: userName,
                    useremail: email,
                    admoduleid: [1, 3],
                  }
                )
                .then((response) => {
                  const result = response.data.body;

                  //validate user in cognito
                  validCognitoUser(email).then((dato) => {
                    if (dato) {
                      deleteCognitoUser(email).then((response) => {
                        if (response) {
                          const userCognito = createNewUser(
                            email,
                            password,
                            userName,
                            result.aduserid,
                            result.adclientgroupid,
                            result.adroleid,
                            result.adclientid,
                            langCode
                          );
                        } else {
                          console.error("the User could not be deleted");
                        }
                      });
                    } else {
                      //Create cognito user
                      const userCognito = createNewUser(
                            email,
                            password,
                            userName,
                            result.aduserid,
                            result.adclientgroupid,
                            result.adroleid,
                            result.adclientid,
                            langCode
                      );
                      const location = {
                        pathname: "/mailnotification",
                       };
                       history.push(location); 
                    }
                  });
                });
            }
          }
        });
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
    initialStatus,
    onSubmit,
  });

  useEffect(()=>{

    if(!formik.isValid){
      setInitial(false)
    }

  },[[],formik.isValid])
  

  const classes = RegisterStyles();
  const validationClases = validationStyles();
  
  return (
    <React.Fragment>
      {openWarningMessage1 && (
        <>
          <WarningMessage
            open={openWarningMessage1}
            onClose={handleWarningMessage1}
            message1={translate('registerError1', 'Text1')}
            message2={translate('registerError1', 'Text2')}
          />
        </>
      )}

      {openWarningMessage2 && (
        <>
          <WarningMessage
            open={openWarningMessage2}
            onClose={handleWarningMessage2}
            message1={translate('registerError2', 'Text1')}
            message2={translate('registerError2', 'Text2')}
          />
        </>
      )}

      {openWarningMessage3 && (
        <>
          <WarningMessage
            open={openWarningMessage3}
            onClose={handleWarningMessage3}
            message1={translate('registerError3', 'Text1')}
            message2={translate('registerError3', 'Text2')}
          />
        </>
      )}

      {openWarningMessage4 && (
        <>
          <WarningMessage
            open={openWarningMessage4}
            onClose={handleWarningMessage4}
            message1={translate('registerError4', 'Text1')}
            message2={translate('registerError4', 'Text2')}
          />
        </>
      )}


          <Paper className={classes.container2}>
            <Grid item xs={12} className={classes.containerTitle}>
              <p className={classes.sub1}>{translate('register', 'Title')}</p>
              <p className={classes.sub2}>{translate('register', 'SubTitle')}</p>
            </Grid>

              <form className={classes.form} onSubmit={formik.handleSubmit}>
                <div className={classes.containerFields}>
                  <SimpleTextField
                    className={classes.textbox}
                    name="companyName"
                    label={translate('register', 'FieldCompanyName')}
                    error={formik.errors.companyName}
                    handleChange={formik.handleChange}
                  />
                  <SimpleTextField
                    className={classes.textbox}
                    name="userName"
                    label={translate('register', 'FieldName')}
                    error={formik.errors.userName}
                    handleChange={formik.handleChange}
                  />

                  <EmailField
                    className={classes.textbox}
                    name="email"
                    label={translate('register', 'FieldEmail')}
                    error={formik.errors.email}
                    handleChange={formik.handleChange}
                  />

                  <PasswordField
                    className={classes.textbox}
                    name="password"
                    label={translate('register', 'FieldPassword')}
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
                      {translate('register', 'LabelPassword1')}
                      </p>
                    </Grid>

                    <Grid item xs={4} sm={4} md={2}>
                      <p
                        className={
                          validLowerCase
                            ? validationClases.lowerOk
                            : validationClases.lowerBad
                        }
                      >
                      {translate('register', 'LabelPassword2')}
                      </p>
                    </Grid>

                    <Grid item xs={4} sm={4} md={2}>
                      <p
                        className={
                          validNumber
                            ? validationClases.numberOk
                            : validationClases.numberBad
                        }
                      >
                      {translate('register', 'LabelPassword3')}
                      </p>
                    </Grid>

                    <Grid item xs={6} sm={6} md={3}>
                      <p
                        className={
                          validSpecialChar
                            ? validationClases.specialOk
                            : validationClases.specialBad
                        }
                      >
                      {translate('register', 'LabelPassword4')}
                      </p>
                    </Grid>

                    <Grid item xs={6} sm={6} md={3}>
                      <p
                        className={
                          validLength
                            ? validationClases.LengthOk
                            : validationClases.LengthBad
                        }
                      >
                      {translate('register', 'LabelPassword5')}
                      </p>
                    </Grid>
                  </Grid>
                </div>

                <div className={classes.contPoliticas}>
                  <Checkbox checked={checked} onChange={handleChangeChecked} />
                  <p>
                  {translate('register', 'LabelTerms1')}{" "} {/* acepto los */}
                    <Link
                      className={classes.políticasTitle}
                      onClick={() =>
                        window.open(`${process.env.REACT_APP_TERMINOS}`)
                      }
                    >
                      {translate('register', 'LabelTerms2')}  {/* términos del servicio y políticas de privacidad */}
                    </Link>{" "}
                  </p>
                </div>

                <div className={classes.contButtonForm}>
                  <ButtonForm
                    type="submit"
                    className={
                      checked && formik.isValid && !initial ? classes.submit : classes.submitDisabled
                    }
                    text="Regístrate"
                    disabled={loading || !formik.isValid || !checked}
                    
                  >
                    {/* {loading && (
                  <CircularProgress size={24} className={classes.loading} />
                )}{" "} */}
                      {translate('register', 'Button')}  
                  </ButtonForm>
                </div>
              </form>
          </Paper>
    </React.Fragment>
  );
}
