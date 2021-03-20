import React, { useState, useContext } from "react";
import ColumnStyles from "../../../styles/stamAD/dashboard/columnStyle";
import ChangeColor from "./changeColor";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import {
  Grid,
  List,
  ListItem,
} from "@material-ui/core";
import SvgFacebook from "../../../assets/images/svgFiles/facebook.svg";
import MenuColumnIcon from "../../../assets/images/svgFiles/menu-column.svg";
import Logo from "../../../assets/images/svgFiles/svgLogin/SicoAsistenteLogo"
import { TranslationContext } from "../../../context/translation/TranslationContext";


const myElements = [
  {
    columnId: "menu-1",
    items: [
      { id: "elemento-1", text: "1" },
      { id: "elemento-2", text: "2" },
      { id: "elemento-3", text: "3" },
    ],
  },
  {
    columnId: "menu-2",
    items: [
      { id: "elemento-4", text: "4" },
      { id: "elemento-5", text: "5" },
      { id: "elemento-6", text: "6" },
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
  const { translate } = useContext(TranslationContext)


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


 
  const classes = ColumnStyles();

  return (
    <>
     
      <DragDropContext onDragEnd={onDragEnd}>
        <Grid style={{ display: "flex" }}>
          {elements.map((col, i) => (
            <Droppable droppableId={col.columnId} key={col.columnId}>
              {(provided, snapshot) => (
                <div className={classes.contColumn} ref={provided.innerRef}>
                  <div className={classes.headerColumn}>
                    <Logo/>
                    <p>{translate('column', 'Title')}</p>

                    <section className={classes.menuColumnIcon}>
                      <img
                        src={MenuColumnIcon}
                        alt="Avatar de la columna"
                      />

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
