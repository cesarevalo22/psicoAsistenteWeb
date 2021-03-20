import React, { useState, useEffect, useContext } from "react";

import {
  Menu,
  MenuItem,
  ListItemText,
  Typography,
  Slide,
  Button,Grid
} from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";

import DashBoardStyles from "../../../styles/stamAD/dashboard/dashBoardStyles";
import ChangeColor from "./changeColor";
import Column from "./column"
import { TranslationContext } from "../../../context/translation/TranslationContext";


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Dashboard() {
  const classes = DashBoardStyles();

  const [anchorEl, setAnchorEl] = useState(null);
  const [openChangeColor, setOpenChangeColor] = useState(false);

  const { translate, setLanguage, updateTranslate } = useContext(TranslationContext)

  

  const arrayprueba=[
                      {id: 1, active: true},
                      {id: 2, active: false},
                      {id: 3, active: false},
                      {id: 4, active: false},
                      {id: 5, active: false},
                      {id: 6, active: false},
                      {id: 7, active: false}
                    ]

  useEffect(() => {
    arrayprueba.map((current) => ( 
      console.log("aquí se consumen los servicios")
    ))
  }, []);

 

 

  const handleChangeColor = () => {
    setOpenChangeColor(!openChangeColor);
  };
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    console.log("event", event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <main className={classes.mainContDashBoard}>
       
        {openChangeColor && (
          <>
            <ChangeColor 
            open={openChangeColor} 
            onClose={handleChangeColor} 
            colorA={"#008394"}
            colorNameA="Verde"
            colorB={"#1B3355"}
            colorNameB="Azul Oscuro"
            colorC={"#384CF9"}
            colorNameC="Azul"
            colorD={"#F6134B"}
            colorNameD="Rojo"
             />
          </>
        )}
        
        <section className={classes.filterDivField}>
          <button
            onClick={handleClick}
            /* style={{background:"green"}} */ className={classes.buttonFilter}
          >
            <p>
              <span>Algo más</span>
            </p>{" "}
          </button>

          <Menu
            id="filterMenu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            disableScrollLock={true}
            getContentAnchorEl={null}
            onClose={handleClose}
            keepMounted
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            transformOrigin={{ vertical: "top", horizontal: "buttom" }}
          >
            
            <MenuItem
              key={"change-color"}
              value={"change-name"}
              className={classes.menuItemField}
              onClick={handleChangeColor}
            >
              <ListItemText primary={"Cambiar Color"} />
            </MenuItem>
           
          </Menu>

        </section>

        
        <section className={classes.contColumns}>   
           <Column/>
           <Column/>
        </section>


        <section className={classes.footer}>
            
          <div className={classes.contButtonsBoardsFooter}>
        
          
            {
              arrayprueba.map((current,index) => (
                index<5 ? 
                <div  className={classes.contButton} style={{borderBottom: current.active?"solid #0d7b40":""}}>
                <button className={current.active===true? classes.buttonBoardFooterSelected:classes.buttonBoardFooterNoSelected} variant="outlined">
                <p>{current.id}</p>
                </button> 
                </div>:""
              ))}

          </div>

          <div>
          <button className={classes.buttonAddBoard} variant="outlined">
              <p>+ Agregar tablero</p>
            </button>
          </div>

          <div>

          </div>

          <div className={classes.footerContPagination}>
            <Typography>Páginas: 1-10 </Typography>
            <Pagination
              count={10}
              variant="outlined"
              shape="rounded"
              page={1}
              selected={true}
              SelectProps={{
                inputProps: { "aria-label": "Paginas: " },
                native: true,
              }}
            />
          </div>
        </section>
      </main>
    </React.Fragment>
  );
}

export default Dashboard;
