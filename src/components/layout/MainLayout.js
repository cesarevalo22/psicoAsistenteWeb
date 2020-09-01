import React from "react";
import HomePageStyles from "../../styles/home/HomePageStyles"
import ToolBar from "./ToolBar";

const MainLayout = ({ children }) => {
    const classes = HomePageStyles()
   
    return(
    <React.Fragment>
        <ToolBar />
        <section className= {classes.container}>
           {children}
        </section>
    </React.Fragment>
    )
  };
  export default  MainLayout;
  

