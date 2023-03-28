import React, { useEffect } from "react"
import ListComponent from "./ListComponent"
import { useState } from "react";
import axios from "axios";

const ListContainer = ({data, listType}) => {
    console.log('data from top of ListContiner', data)
//function
    //  function createComponents (obj){
    //     console.log(obj)
    //     let components = []
    //     for (const key in obj){
    //         console.log('key', obj[key])
    //         components.push(<ListComponent warriors={key} list={obj[key]} />)
    //         console.log('components -->', components)
    //     }
    //     return components
    
//implement fetch request and set state

    // useEffect(function effectFunction() {
    //     let cache = {}
    //     // console.log('top of useEffect line 23', cache)
    //     async function fetchLists() {
    //         const res = await axios.get('/lists')
    //         cache = await res.data.map(obj => {
    //             if (!cache[obj.grade_level]){
    //                 cache[obj.grade_level] = [obj.first_name]
    //             } else {
    //                 cache[obj.grade_level].push(obj.first_name)
    //             }

    //             if(!cache[obj.homeroom]){
    //                 cache[obj.homeroom] = [obj.first_name]
    //             } else {
    //                 cache[obj.homeroom].push(obj.first_name)
    //             }
    //             return cache
    //         })
            
    //     }  
    //     fetchLists()      
    //     setLists(cache)
    // }, [])
        
// callback functions to edit and delete lists

const editList = () => {
    axios
        .put('/lists', {
            id: 1,
            first_name: 'Derlyn'
        })
        .then((res) => {
            setLists(res.data)
        })
    
    console.log('list edited!')
}

const deleteList = () => {
    console.log('list deleted!')
}

const gradeLists = () => {
    const gradeLevels = [];
    for (const obj of data){
        console.log(obj)
        if(!gradeLevels.includes(obj.grade_level)){
            gradeLevels.push(obj.grade_level)
        }
    }
    return gradeLevels
}

useEffect(() => {
    console.log('inside useEffect',gradeLists())
}, [])

//tests
    //return and render
    // console.log('test')
    // console.log(cache)
    // console.log('bottom of listcontainer line 72', cache)

}
export default ListContainer
//     return(
        
//     <div className = 'listcontainer'>
//         <ul>{lists && createComponents(lists)}</ul>

//         {<button onClick = {() => editList()}>
//             Edit
//         </button>}

//         <button onClick = {() => deleteList()}>
//             Delete
//         </button>

//         </div>)
// }


