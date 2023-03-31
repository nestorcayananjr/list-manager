import axios from "axios";
import React, {useState} from "react"


const Student = ({studentName, editStudents, studentDataBase, editButtonClicked, student_id}) => {

    const [name, setName] = useState(studentName)

    function handleInputChange(event){
        setName(event.target.value)
    }

    async function handleButtonClick(change){
        //clone the database
        const dataBaseClone = studentDataBase;

        //split the name into an array
        let nameArray = change.split(' ')
        console.log(nameArray)


        //make the edit using the key as the ocndition
        const studentInformation = await axios.get(`/students/studentId/${student_id}`).then(res => res.data)
        console.log(studentInformation, 'student info')
        studentInformation[0].first_name = nameArray[0];
        studentInformation[0].last_name = nameArray[1];
        console.log(studentInformation[0], 'studentInformation bweing passed to the patch req')
        
        await axios.patch('/students/', studentInformation[0]).then((res) => editStudents(res.data))


        //call the editStudents function passing in the modified database
    }

    async function deleteStudent(studentid){
        console.log('clicked')
        console.log(studentid)
        await axios.delete(`/students/studentId/${studentid}`)
    }

    if (editButtonClicked) {
        return (
        <span>
            <li> 
                <input 
                value={name}
                onChange={(event) => setName(event.target.value)} 
                type='text'/>
                <button onClick={() => handleButtonClick(name)}> Save Changes </button>
                <button onClick ={() => deleteStudent(student_id)}> Delete Student</button> 
            </li>
        </ span>
        )
    } return <li> {studentName} </li>
    
        
}

export default Student