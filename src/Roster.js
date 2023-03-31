import React, {useState} from "react"
import ListTitle from "./ListTitle.js"
import Student from "./Student.js"

//props: like arguments that are passed to app. cannot be changed inside a component. is updated outside the component
//state: the things that will be updated inside the component. changing the state rerenders that component for example: a count


//props: what does it need to be passed: the list of students to render
//state: what does it need to update: maybe nothign?
const Roster = ({title, roster, studentDataBase, editStudents, allRosters, titleOfRosters}) => {
    
    const [editButton, setEditButton] = useState(false)
    const [hideButton, setHideButton] = useState(false)


//edit the list
    const editList = (bool) => {
        console.log('clicked')
        if (!bool){
            return setEditButton(true)
        } else return setEditButton(false)
    }
    
    const hideList = (bool) => {
        if (!bool){
            return setHideButton(true)
        } else return setHideButton(false)
    };

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

if (!hideButton){
        return (
            <div className = 'listComponent'>
                <button onClick={() => hideList(hideButton)}>Hide {title} list</button>
                <ListTitle title = {title}/>
                <ol>
                    {studentComponents}
                </ol>
                {editButtonComponent()}
            </div>
        )
    } else{
        return(
            <button onClick={() => hideList(hideButton)}>Show {title} List</button> 
        )
    }
}
export default Roster