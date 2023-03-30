import React from "react"
import ListTitle from "./ListTitle.js"
import Student from "./Student.js"

//props: like arguments that are passed to app. cannot be changed inside a component. is updated outside the component
//state: the things that will be updated inside the component. changing the state rerenders that component for example: a count


//props: what does it need to be passed: the list of students to render
//state: what does it need to update: maybe nothign?
const Roster = ({title, roster}) => {
    

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

    if (roster){

    }

    return (
        <div className = 'listComponent'>
            <ListTitle title = {title}/>
            <ol>
                {roster.map((el, index) => <Student key={index} studentName = {el} />)}
            </ol>
            <button onClick= {() => editList()}>Edit</button>
            <button onClick={() => deleteList()}>Delete</button>
        </div>
    )
}

export default Roster