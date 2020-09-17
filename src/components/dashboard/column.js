import React, {useState} from 'react'
import ColumnStyles from "../../styles/dashboard/columnStyle"
import {SortableContainer, SortableElement} from 'react-sortable-hoc'

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import arrayMove from 'array-move'
import { Grid,List,ListItem } from '@material-ui/core'

const myElements = [
    {
      columnId: 'menu-1',
      items: [
            {id: 'elemento-1', text: 'Elemento 1',},
            {id: 'elemento-2', text: 'Elemento 2',},
            {id: 'elemento-3', text: 'Elemento 3',},
             ],
    },
    {
      columnId: 'menu-2',
      items: [
        { id: 'elemento-4',text: 'Elemento 4',},
        { id: 'elemento-5',text: 'Elemento 5',},
        { id: 'elemento-6',text: 'Elemento 6',},
      ],
    },
  ]

  const reorder = (list, startColumn, endColumn, startIndex, endIndex) => {
    // clonamos la lista
    const newList = Array.from(list)
    // encontramos la columna de inicio dentro de la lista
    const startColumnIndex = newList.findIndex(item => item.columnId === startColumn)
    // encontramos la columna final dentro de la lista
    const endColumnIndex = newList.findIndex(item => item.columnId === endColumn)
    // quitamos el elemento de la columna original
    const [removed] = newList[startColumnIndex].items.splice(startIndex, 1)
    // añadimos ese elemento dentro de la nueva posición
    newList[endColumnIndex].items.splice(endIndex, 0, removed)
    // y devolvemos
    return newList
  }
  

export default function Column (props){

    const [elements, setElements] = useState(myElements)
    
    const onDragEnd = result => {
        const { destination, source, draggableId } = result
        if (!destination) return
        if (destination.droppableId === source.droppableId && destination.index === source.index) return
        const new_elements = reorder(elements, source.droppableId, destination.droppableId, source.index, destination.index)
        setElements(new_elements)
      }
    
     

    return (
      <>
        <DragDropContext onDragEnd={onDragEnd}>
          <Grid>
            {elements.map((col, i) => (
              <Droppable droppableId={col.columnId} key={col.columnId}>
                {(provided, snapshot) => (
                  <List ref={provided.innerRef}>
                    {col.items.map((el, j) => (
                      <Draggable draggableId={el.id} index={j} key={el.id}>
                        {(provided, snapshot) =>(
                            <ListItem ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                {el.text}
                            </ListItem>) }
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </List>
                )}
              </Droppable>
            ))}
          </Grid>
        </DragDropContext>
      </>
    );
}