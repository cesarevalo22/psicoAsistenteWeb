import { Grid } from "@material-ui/core";
import React from "react";
import SvgLeftCircle from "../../assets/images/svgFiles/svgLogin/SvgLeftCircle";
import SvgLeftGroup from "../../assets/images/svgFiles/svgLogin/SvgLeftGroup";
import SvgRightGroup from "../../assets/images/svgFiles/svgLogin/SvgRightGroup";

const LoginLayout = ({children}) => (
  <React.Fragment>
    <Grid container spacing={0} className={``}>
      <Grid container className={``} item lg={2} md={3} sm={2} xs={2} direction="column">
      <div className="">
          <SvgLeftCircle />
        </div>
        <div className="">
          <SvgLeftGroup />
        </div>
      </Grid>
      <Grid container className={``} item lg={8} md={6} sm={8} xs={8} direction="column">
        <div className=""></div>
        <div className="">
          {children}
        </div>
        <div className=""></div>
      </Grid>
      <Grid container className={``} item lg={2} md={3} sm={2} xs={2} direction="column">
        <div className="">
          <SvgRightGroup />
        </div>
      </Grid>
    </Grid>
  </React.Fragment>
);
export default LoginLayout; 