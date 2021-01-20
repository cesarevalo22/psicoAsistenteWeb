import React from "react";
import mainLayoutStyles from "../../../styles/layout/mainLayoutStyles"
import ToolBar from "./ToolBar";

const MainLayout = ({ children }) => {
    const classes = mainLayoutStyles()
   
    return(
    <div className={classes.prueba}>
        <ToolBar />
        <section className= {classes.container}>
           {children}
        </section>
    </div>
    )
  };
  export default  MainLayout;
  

