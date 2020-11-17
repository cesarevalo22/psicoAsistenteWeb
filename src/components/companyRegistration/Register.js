import React, {useState} from "react";

import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios"

import RegisterStyles from "../../styles/Register/registerStyles";
import { EmailField, PasswordField, SimpleTextField } from "../commons/CustomFields";
import Button from "@material-ui/core/Button";
import SgvCircle from "../../assets/images/svgFiles/SvgRegister/SvgCircle";
import SvgStrolling from "../../assets/images/svgFiles/SvgRegister/SvgStrolling";
import SvgIcon1 from "../../assets/images/svgFiles/SvgRegister/SvgIcon1";
import SgvLogo from "../../assets/images/svgFiles/SvgLogo";
import Sgv5 from "../../assets/images/svgFiles/SvgRegister/Svgregister";
import SvgWhatsAppBlack from "../../assets/images/svgFiles/svgNetworks/whatsAppBlack";
import SvgFacebookBlack from "../../assets/images/svgFiles/svgNetworks/facebookBlack";
import SvgInstagramBlack from "../../assets/images/svgFiles/svgNetworks/instagramBlack";
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

import Grid from "@material-ui/core/Grid";
import { useAlert, positions } from "react-alert";


import {Link, useHistory} from "react-router-dom"


const initialValues = {
  companyName:"",
  userName: "",
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  companyName: Yup.string().required("Requerido"),
  userName: Yup.string().required("Requerido"),
  email: Yup.string().email("Correo invalido").required("Requerido"),
  password: Yup.string().required("Requerido").min(8, "Minimo 8 caracteres").matches(
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!<>@#$%^&*)(+=:._-])[A-Za-z\d!<>@#$%^&*)(+=:._-]/,
    'No cumple las condiciones'
  ),
});


export default function CompanyRegistration() {
  
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);

  let history = useHistory();





  const classes = RegisterStyles();

  const updateFunction = () => {
    setShowPass(!showPass);
  };

  

  const onSubmit = async (values) => {
    setLoading(true);
    try {
      const companyRegistration = await axios.post(
        `${process.env.REACT_APP_GATEWAY_END_POINT}/adclient/registration`,
        {
           companyname : values.companyName,
           username : values.userName,
           useremail : values.email,
           admoduleid : [1,3],
        }
      );
      const result = companyRegistration.data.body;
      console.log("resultado",result)
      
      setLoading(false)
      const location = {
        pathname: "/homePage",
        }
        history.push(location)

      
    } catch (error) {
      alert.error(
        error.message,
        { position: positions.BOTTOM_CENTER, type: "error" }
      );
      
    }
  };


  
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <React.Fragment>
      <Grid container spacing={0}  className={classes.mainContainer}>
          <Grid item xs={4}>
          <div className={classes.circle1}>
              <SgvCircle 
                color={"#50D1B6"} 
                width={"135.9px"}
                height={"135.73px"}
              />
            </div>
            <div className={classes.svgStrolling}>
              <SvgStrolling 
              width={"168.96px"}
              height={"154.07px"}
              />
            </div>
            <div className={classes.svgIcon1} >
              <SvgIcon1 rotate="rotate(-90)"  />
            </div>
          </Grid>
          <Grid item xs={4} className={classes.container2}>
            <div className={classes.logo}>
              <SgvLogo />
            </div>
            <div className={classes.containerTitle}>
              <p className={classes.sub1}>Regístrate</p>
              <p className={classes.sub2}>¡ingresa tus datos para empezar!</p>
            </div>

            <form className={classes.form} onSubmit={formik.handleSubmit}>
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
              error={formik.errors.companyName}
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
                handleChange={formik.handleChange}
                updateFunction={updateFunction}
                autoComplete="new-password"
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                className={classes.submit}
                //disabled={loading || !formik.isValid}
              >
                {/* {loading && (
                  <CircularProgress size={24} className={classes.loading} />
                )}{" "} */}
                Regístrate
              </Button>
            </form>

            <div className={classes.contFoot}>
            <div className={classes.sgv5}>
            <Sgv5/>
            </div>
            <div className={classes.contNeworks}>
                <p><SvgWhatsAppBlack  width={"37px"} height={"37px"}/></p>
                <p><SvgFacebookBlack  width={"37px"} height={"37px"}/></p>
                <p><SvgInstagramBlack width={"37px"} height={"37px"}/></p>
            </div>
            </div>
            
          </Grid>
          <Grid item xs={4} className={classes.container3}>
          <div className={classes.circle2}>
              <SgvCircle 
                color={"#00808E"} 
                width={"124px"}
                height={"121px"}
              />
            </div>
            <div className={classes.contButtonHelp}>
            <Button
                variant="contained"
                size="large"
                className={classes.buttonHelp}
                startIcon={<HelpOutlineIcon/>}
              >
                Ayuda
              </Button>
            </div>
          </Grid>
      </Grid>
    </React.Fragment>
  );
}
