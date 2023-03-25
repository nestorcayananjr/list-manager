import React from "react"
import ListComponent from "./ListComponent"

//callback functions to edit and delete lists

//implement fetch request
const editList = () => {
    console.log('list edited!')
}

//implement fetch request
const deleteList = () => {
    console.log('list deleted!')
}

const ListContainer = () => {
    return(
    <div className = 'listcontainer'>
        <ListComponent />
        <button onClick = {() => editList()}>
            Edit
        </button>

        <button onClick = {() => deleteList()}>
            Delete
        </button>
    </div>
    )
}

export default ListContainer