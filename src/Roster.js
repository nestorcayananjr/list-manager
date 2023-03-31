import React, {useState} from "react"
import ListTitle from "./ListTitle.js"
import Student from "./Student.js"

//props: like arguments that are passed to app. cannot be changed inside a component. is updated outside the component
//state: the things that will be updated inside the component. changing the state rerenders that component for example: a count


//props: what does it need to be passed: the list of students to render
//state: what does it need to update: maybe nothign?
const Roster = ({title, roster, studentDataBase, editStudents, allRosters, titleOfRosters}) => {
    
    const [editButton, setEditButton] = useState(false)

/* EDITING THE ROSTER
[]grab the roster state
[]clone the state
[]when you click the button, it opens an input field
[]unsure of how to grab the information from the fields, but need to make it an array of first and last name
[]set the state to be that
[]send a query back to the database to update the database
*/

    const editList = (bool) => {
        console.log('clicked')
        if (!bool){
            return setEditButton(true)
        } else return setEditButton(false)
    }
    
    const deleteList = () => {
        console.log('list deleted!')
    }

 //creating studentComponent array to render a Student component for each name
    let studentComponents = [];

    for (let i = 0; i < roster.length; i++){
        for (const key in roster[i]){

            studentComponents.push(
            <Student key={key} 
            studentName={roster[i][key]} 
            editStudents={editStudents}
            studentDataBase={studentDataBase}
            editButtonClicked={editButton}
            student_id={key}
            />
            )
        }
    }

//function to dynamically render edit button
    const editButtonComponent = () => {
        if (!editButton){
            return <button onClick= {() => editList(false)}>Edit This Roster</button>
        } else return <button onClick= {() => editList(true)}> Done Editing </button>
    }


    return (
        <div className = 'listComponent'>
            <ListTitle title = {title}/>
            <ol>
                {studentComponents}
            </ol>
            {editButtonComponent()}
        </div>
    )
}

export default Roster