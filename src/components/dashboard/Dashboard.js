import React, { useState } from "react";

import { Menu, MenuItem, ListItemText, Typography  } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";

import DashBoardStyles from "../../styles/dashboard/dashBoardStyles";
import SvgDownArrow from "../../assets/images/svgFiles/SvgDownArrow";
function Dashboard() {
  const classes = DashBoardStyles();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    console.log("event", event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <main>
        <section className={classes.filterDivField}>
          <button onClick={handleClick} className={classes.buttonFilter}>
            <p>
              <span>Tablero 1</span>
              <img src={<SvgDownArrow />} alt="logo" />
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
          <div className={classes.footerContButtonBoards}>
            {/* array con .lengh del método */}

            <button
              /* onClick={handleClick} */ className={classes.buttonFooterBoard}
            >
              <p>
                <span>BoardName</span>
              </p>
            </button>
            <button
              /* onClick={handleClick} */ className={classes.buttonFooterBoard}
            >
              <p>
                <span>BoardName2</span>
              </p>
            </button>
            <button
              /* onClick={handleClick} */ className={classes.buttonFooterBoard}
            >
              <p>
                <span>BoardName3</span>
              </p>
            </button>
          </div>

          <div className={classes.footerContAddBoard}>
            <button
              /* onClick={handleClick} */ className={
                classes.buttonFooterAddBoard
              }
            >
              <p>
                <span>+ Agregar tablero</span>
              </p>
            </button>
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
