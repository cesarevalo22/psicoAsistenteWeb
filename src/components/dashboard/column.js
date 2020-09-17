import React, {useState} from 'react'
import ColumnStyles from "../../styles/dashboard/columnStyle"
import {SortableContainer, SortableElement} from 'react-sortable-hoc'
import arrayMove from 'array-move'

const SortableItem = SortableElement(({value})=> {

    const classes = ColumnStyles()
    return (
        <div className={classes.contSortableItem} > 
                <h1>{value.title}</h1>
            </div>
    )
})

const SortableList = SortableContainer(({items})=> {

    const classes = ColumnStyles()

    return (
        <div className = { classes.contColumn}>
            {items.map((value, i) => <SortableItem key={i} value={value} index={i}/>)}
        </div>
    )
})




export default function Column (props){

    const [tasks, setTasks] = useState([
        {title: 'item 1', description: 'task one'},
        {title: 'item 2', description: 'task two'},
        {title: 'item 3', description: 'task three'},
        {title: 'item 4', description: 'task four'},
        ])

       const onSortEnd=({oldIndex, newIndex})=> {
        console.log(oldIndex, newIndex)
        let tasksCopy = [...tasks]
        tasksCopy = arrayMove(tasksCopy, oldIndex, newIndex);
        setTasks(tasksCopy)

       }

    return (
        <>
        <SortableList items={tasks} onSortEnd={onSortEnd}></SortableList>
        <SortableList items={tasks} onSortEnd={onSortEnd}></SortableList>
        </>
    )
}