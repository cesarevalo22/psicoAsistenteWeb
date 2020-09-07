import React, {useState} from "react";

import {Menu, MenuItem, ListItemText } from "@material-ui/core";
import Pagination from '@material-ui/lab/Pagination';


import DashBoardStyles from "../../styles/dashboard/dashBoardStyles"
import SvgDownArrow from "../../assets/images/svgFiles/SvgDownArrow"
function Dashboard() {



  const classes= DashBoardStyles()

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    console.log("event",event.currentTarget)
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <main>
      <section className={classes.filterDivField}>
        <button onClick={handleClick}  className={classes.buttonFilter}>
          <p>
            <span>Tablero 1</span>
            <img
              src={<SvgDownArrow/>}
              alt="logo"
            />
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
          transformOrigin={{ vertical: "top", horizontal: "left" }}
        >
          
            <MenuItem
              key={"change-name"}
              value={"change-name"}
              className={classes.menuItemField}
            >
            <ListItemText primary={"Cambiar nombre"} />
            </MenuItem>
            <MenuItem
              key={"change-color"}
              value={"change-name"}
              className={classes.menuItemField}
            >
            <ListItemText primary={"Cambiar Color"} />
            </MenuItem>
            <MenuItem
              key={"delete-board"}
              value={"delete-board"}
              className={classes.menuItemField}
            >
            <ListItemText primary={"Eliminar"} />
            </MenuItem>
          
        </Menu> 
      </section>

      <section className={classes.footerContDashBoard}> 

        <div className={classes.footerContBoards}> 
          {/* array con .lengh del método */}
          <button /* onClick={handleClick} */  className={classes.buttonFooter}>
          <p>
            <span>BoardName</span>
          </p>
        </button>
        </div>

        <div className={classes.footerAddBoard}>
        <button /* onClick={handleClick} */  className={classes.buttonFooter}>
          <p>
            <span>+ Agregar tablero</span>
          </p>
        </button>
        </div>

        <div className={classes.footerContPagination}>
        <Pagination count={10} variant="outlined" shape="rounded" />
        </div>
        
      </section>
      </main>
    </React.Fragment>
  );
}

export default Dashboard;
