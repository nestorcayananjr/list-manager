import React, { useEffect } from "react"
import ListComponent from "./ListComponent"
import { useState } from "react";


// //declaring a storage for the student names
// let studentNames = [];

// //function to grabbing names to attempt to render
// const getData = async () => {
//     const data = await fetch('/lists')
//     const students = await data.json();
//     for (let obj of students){
//         studentNames.push(<li>{obj.first_name + ' ' + obj.last_name}</li>)
//     }
//     return;
// }

// //call the function
// getData()




// callback functions to edit and delete lists

//implement fetch request
const editList = () => {
    console.log('list edited!')
}

//implement fetch request
const deleteList = () => {
    console.log('list deleted!')
}

const ListContainer = () => {

    const [lists, setLists] = useState(null)

    useEffect(() => {
        fetch('/lists')
            .then(res => {
                // console.log('fetching data via useEffect')
                return res.json()
            })
            .then((data) => {
                setLists(data)
            })
    }, [])

    return(
    <div className = 'listcontainer'>
        {lists && <ListComponent lists={lists}/>}
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