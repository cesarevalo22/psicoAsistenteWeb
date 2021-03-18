import React from "react";
import HomePageStyles from "../../styles/home/HomePageStyles"
import ToolBar from "./ToolBar";

const MainLayout = ({ children }) => {
    const classes = HomePageStyles()
   
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
  

