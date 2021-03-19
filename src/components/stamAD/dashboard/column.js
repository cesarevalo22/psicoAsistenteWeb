import React, { useState } from "react";
import ColumnStyles from "../../../styles/stamAD/dashboard/columnStyle";
import ChangeColor from "./changeColor";
import DeleteBoard from "./deleteBoard";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import {
  Grid,
  List,
  ListItem,
  Menu,
  MenuItem,
  ListItemText,
} from "@material-ui/core";
import SvgFacebook from "../../../assets/images/svgFiles/facebook.svg";
import MenuColumnIcon from "../../../assets/images/svgFiles/menu-column.svg";
import AssetDePrueba from "../../../assets/images/pngFiles/coffee.png";

const myElements = [
  {
    columnId: "menu-1",
    items: [
      { id: "elemento-1", text: "Elemento 1" },
      { id: "elemento-2", text: "Elemento 2" },
      { id: "elemento-3", text: "Elemento 3" },
    ],
  },
  {
    columnId: "menu-2",
    items: [
      { id: "elemento-4", text: "Elemento 4" },
      { id: "elemento-5", text: "Elemento 5" },
      { id: "elemento-6", text: "Elemento 6" },
    ],
  },
];

const reorder = (list, startColumn, endColumn, startIndex, endIndex) => {
  // clonamos la lista
  const newList = Array.from(list);
  // encontramos la columna de inicio dentro de la lista
  const startColumnIndex = newList.findIndex(
    (item) => item.columnId === startColumn
  );
  // encontramos la columna final dentro de la lista
  const endColumnIndex = newList.findIndex(
    (item) => item.columnId === endColumn
  );
  // quitamos el elemento de la columna original
  const [removed] = newList[startColumnIndex].items.splice(startIndex, 1);
  // añadimos ese elemento dentro de la nueva posición
  newList[endColumnIndex].items.splice(endIndex, 0, removed);
  // y devolvemos
  return newList;
};

export default function Column(props) {
  const [elements, setElements] = useState(myElements);
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorElSubMenu, setAnchorElSubMenu] = useState(null);

  const [openChangeColor, setOpenChangeColor] = useState(false);
  const [openDeleteBoard, setOpenDeleteBoard] = useState(false);

  const [menuElements] = useState([
    "Enviar a",
    "Crear regla",
    "Eliminar regla",
    "Mostrar anuncio / post",
    "Cambiar color Columna",
    "Eliminar",
  ]);
  const [subMenuColumnsPrueba] = useState([
    "Tablero 1",
    "Tablero 2",
    "Tablero 3",
    "Nuevo Tablero",
  ]);

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;
    const new_elements = reorder(
      elements,
      source.droppableId,
      destination.droppableId,
      source.index,
      destination.index
    );
    setElements(new_elements);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChangeColor = () => {
    setOpenChangeColor(!openChangeColor);
  };

  const handleDeleteBoard = () => {
    setOpenDeleteBoard(!openDeleteBoard);
  };

  const handleClickSubMenu = (event) => {
    setAnchorElSubMenu(event.currentTarget)
  };
  const handleCloseSubMenu= () => {
    setAnchorElSubMenu(null);
  };

 
  const classes = ColumnStyles();

  return (
    <>
      {openChangeColor && (
        <>
          <ChangeColor
            open={openChangeColor}
            onClose={handleChangeColor}
            colorA={"#F99211"}
            colorNameA="Naranja"
            colorB={"#34A853"}
            colorNameB="Verde"
            colorC={"#000000"}
            colorNameC="Negro"
            colorD={"#1877F2"}
            colorNameD="Azul Claro"
          />
        </>
      )}
       {openDeleteBoard && (
          <>
            <DeleteBoard open={openDeleteBoard} onClose={handleDeleteBoard} />
          </>
        )}
      <DragDropContext onDragEnd={onDragEnd}>
        <Grid style={{ display: "flex" }}>
          {elements.map((col, i) => (
            <Droppable droppableId={col.columnId} key={col.columnId}>
              {(provided, snapshot) => (
                <div className={classes.contColumn} ref={provided.innerRef}>
                  <div className={classes.headerColumn}>
                    <img
                      className={classes.avatarHeader}
                      src={AssetDePrueba}
                      alt="Avatar de la columna"
                    />
                    <p>Título de la columna se acomoda al tamaño</p>

                    <section className={classes.menuColumnIcon}>
                      <img
                        src={MenuColumnIcon}
                        alt="Avatar de la columna"
                        onClick={handleClick}
                      />

                      <Menu
                        id="menuColum"
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        disableScrollLock={true}
                        getContentAnchorEl={null}
                        onClose={handleClose}
                        keepMounted
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "left",
                        }}
                        transformOrigin={{
                          vertical: "top",
                          horizontal: "buttom",
                        }}
                      >
                        {menuElements.map((element) => (
                          <MenuItem 
                            key={element}
                            value={element}
                            className={classes.menuItemField}
                            onClick={element===menuElements[4]? handleChangeColor : element===menuElements[5]? handleDeleteBoard : handleClickSubMenu}
                          >
                            <ListItemText style={{color:element==="Eliminar"? "#F6134B" : ""}} primary={element} />
                          </MenuItem>
                        ))}
                      </Menu>


                      <Menu
                        id="subMenuColum"
                        anchorEl={anchorElSubMenu}
                        open={Boolean(anchorElSubMenu)}
                        disableScrollLock={true}
                        getContentAnchorEl={null}
                        onClose={handleCloseSubMenu}
                        keepMounted
                        anchorOrigin={{
                          vertical: "buttom",
                          horizontal: "right",
                        }}
                        transformOrigin={{
                          vertical: "right",
                          horizontal: "buttom",
                        }}
                      >
                        {subMenuColumnsPrueba.map((element) => (
                          <MenuItem                          
                            key={element}
                            value={element}
                            className={classes.menuItemField}
                            >
                            <ListItemText primary={element} />
                          </MenuItem>
                        ))}
                      </Menu>
                    </section>
                  </div>

                  <div className={classes.contComponentsColum} >
                  <List>
                    {col.items.map((el, j) => (
                      <Draggable draggableId={el.id} index={j} key={el.id}>
                        {(provided, snapshot) => (
                          <div
                            className={classes.contSortableItem}
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <ListItem>{el.text}</ListItem>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </List>

                  </div>

                  <div className={classes.footerColumn}>
                    <img src={SvgFacebook} alt="ícono de Facebook" />
                  </div>
                </div>
              )}
            </Droppable>
          ))}
        </Grid>
      </DragDropContext>
    </>
  );
}
