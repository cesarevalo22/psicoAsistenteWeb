import React, { useState } from "react";

import {
  Menu,
  MenuItem,
  ListItemText,
  Typography,
  Slide,
  Button,
} from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";

import DashBoardStyles from "../../styles/dashboard/dashBoardStyles";
import ChangeName from "./changeName";
import ChangeColor from "./changeColor";
import DeleteBoard from "./deleteBoard";
import DownArrow from "../../assets/images/pngFiles/Fill.png";
import ToolBar from "../../components/layout/ToolBar";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Dashboard() {
  const classes = DashBoardStyles();

  const [anchorEl, setAnchorEl] = useState(null);
  const [openChangeName, setOpenChangeName] = useState(false);
  const [openChangeColor, setOpenChangeColor] = useState(false);
  const [openDeleteBoard, setOpenDeleteBoard] = useState(false);

  const handleChangeName = () => {
    setOpenChangeName(!openChangeName);
  };

  const handleChangeColor = () => {
    setOpenChangeColor(!openChangeColor);
  };
  const handleDeleteBoard = () => {
    setOpenDeleteBoard(!openDeleteBoard);
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
        {openChangeName && (
          <ChangeName open={openChangeName} onClose={handleChangeName} />
        )}
        {openChangeColor && (
          <>
            <ChangeColor open={openChangeColor} onClose={handleChangeColor} />
          </>
        )}
        {openDeleteBoard && (
          <>
            <DeleteBoard open={openDeleteBoard} onClose={handleDeleteBoard} />
          </>
        )}
        <section className={classes.filterDivField}>
          <button
            onClick={handleClick}
            /* style={{background:"green"}} */ className={classes.buttonFilter}
          >
            <p>
              <span>Tablero 1222222</span>
              <img src={DownArrow} alt="logo" />
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
              onClick={handleChangeName}
            >
              <ListItemText primary={"Cambiar nombre"} />
            </MenuItem>
            <MenuItem
              key={"change-color"}
              value={"change-name"}
              className={classes.menuItemField}
              onClick={handleChangeColor}
            >
              <ListItemText primary={"Cambiar Color"} />
            </MenuItem>
            <MenuItem
              key={"delete-board"}
              value={"delete-board"}
              className={classes.menuItemField}
              onClick={handleDeleteBoard}
            >
              <ListItemText primary={"Eliminar"} />
            </MenuItem>
          </Menu>
        </section>

        <section className={classes.footer}>
          <div className={classes.contButtonsBoardsFooter}>
            <button className={classes.buttonBoardFooterSelected} variant="outlined">
              <p>Tablero de prueba veinte</p>
            </button>
            <button className={classes.buttonBoardFooterNoSelected} variant="outlined">
              <p>Tablero de prueba no</p>
            </button>
            <button className={classes.buttonBoardFooterNoSelected} variant="outlined">
              <p>Tablero de prueba nos</p>
            </button>
            <button className={classes.buttonBoardFooterNoSelected} variant="outlined">
              <p>Tablero de prueba nos</p>
            </button>
            <button className={classes.buttonBoardFooterNoSelected} variant="outlined">
              <p>Tablero de prueba nos</p>
            </button>
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
