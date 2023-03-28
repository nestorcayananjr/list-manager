import React from "react"

//need to pass props: gradelevel and teacher render dynamically
const ListComponent = ({data}) => {
    console.log(data, 'list component')
    return (
        <div className = 'listComponent'>
            <h2>Grade</h2>
            <h2>Teacher</h2>
            <ol>{lists}</ol>
        </div>
    )
}

export default ListComponent