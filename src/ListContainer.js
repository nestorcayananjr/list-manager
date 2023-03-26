import React, { useEffect } from "react"
import ListComponent from "./ListComponent"
import { useState } from "react";
import axios from "axios";

const ListContainer = () => {
    const [lists, setLists] = useState(null)

//implement fetch request and set state

//an object of arrays
//{8: [8th grade names], 7: [7th grade names], 6: [6th grade names]}
    useEffect(() => {
        const totalLists = {}
        axios.get('/lists').then((res) => {
            const data = res.data;
            console.log(data)
            for (const obj of data){
                if (!totalLists[obj.grade_level]){
                    totalLists[obj.grade_level] = [`${obj.first_name} ${obj.last_name}`]
                } else {
                    totalLists[obj.grade_level].push(`${obj.first_name} ${obj.last_name}`)
                }
            }
            setLists(prevState => prevState = totalLists)
        })
    }, [])
    
// // callback functions to edit and delete lists
// const editList = () => {
//     axios
//         .put('/lists', {
//             id: 1,
//             first_name: 'Derlyn'
//         })
//         .then((res) => {
//             setLists(res.data)
//         })
    
//     console.log('list edited!')
// }

// const deleteList = () => {
//     console.log('list deleted!')
// }

//return and render
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