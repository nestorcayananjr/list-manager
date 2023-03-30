import React from "react"


//props: like arguments that are passed to app. cannot be changed inside a component. is updated outside the component
//state: the things that will be updated inside the component. changing the state rerenders that component for example: a count

//props: teacher, type of list
//state: what needs to update? nothing?
const ListTitle = ({title}) => {
    
    return (
        <div className = 'listInfo'>
            <h1>{title}</h1>
        </div>
    )
}

export default ListTitle