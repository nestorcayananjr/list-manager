import React from "react"

//need to pass props: gradelevel and teacher render dynamically
const ListComponent = ({lists}) => {
    console.log(lists, 'data passed down')
    let bulletedStudentList = [];

    for (let obj of lists){
        bulletedStudentList.push(<li>{obj.first_name}</li>)
    }

    console.log(bulletedStudentList)

    //render (not working)
    return (
        <div className = 'listComponent'>
            <h2>Grade Level</h2>
            <h2>Teacher</h2>
            <ol>{bulletedStudentList}</ol>
        </div>
    )
}

export default ListComponent