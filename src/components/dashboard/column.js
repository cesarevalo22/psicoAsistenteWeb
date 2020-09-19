import React, { useState } from "react";
import ColumnStyles from "../../styles/dashboard/columnStyle";
import { SortableContainer, SortableElement } from "react-sortable-hoc";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import arrayMove from "array-move";
import { Grid, List, ListItem } from "@material-ui/core";
import SvgFacebook from "../../assets/images/svgFiles/facebook.svg";
import MenuColumnIcon from "../../assets/images/svgFiles/menu-column.svg";
import AssetDePrueba from "../../assets/images/pngFiles/coffee.png";

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
                    <img className={classes.avatarHeader} src={AssetDePrueba} alt="Avatar de la columna" />
                    <p>Título de la columna se acomoda al tamaño</p>
                    <img className={classes.menuColumnIcon} src={MenuColumnIcon} alt="Avatar de la columna" />
                    
                  </div>
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
