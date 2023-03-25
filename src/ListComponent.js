import React from "react"

//need to pass props: gradelevel and teacher render dynamically
const ListComponent = () => {

    //declaring a storage for the student names
    let studentNames = [];

    //function to grabbing names to attempt to render
    const getData = async () => {
        const data = await fetch('/lists')
        const students = await data.json();
        for (let obj of students){
            studentNames.push(<li>{`${obj.first_name}` + ' ' + `${obj.last_name}`}</li>)
        }
        return;
    }

    //call the function
    getData()

    //render (not working)
    return (
        <div className = 'listComponent'>
            <h2>Grade Level</h2>
            <h2>Teacher</h2>
            <ul>{ studentNames }</ul>
            {console.log(studentNames)}
        </div>
    )
}

export default ListComponent