import React from "react";
import mainLayoutStyles from "../../../styles/layout/mainLayoutStyles"
import ToolBar from "./ToolBar";

const MainLayout = ({ children }) => {
    const classes = mainLayoutStyles()
   
    return(
    <section>
        <ToolBar />
        <section className= {classes.container}>
           {children}
        </section>
    </section>
    )
  };
  export default  MainLayout;
  

