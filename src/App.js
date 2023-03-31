//App component, will most likely be the top-most component
import React from "react";
import ListTitle from "./ListTitle.js"
import Roster from './Roster.js'
import axios from "axios";
import { useState, useEffect } from "react"

//props: like arguments that are passed to app. cannot be changed inside a component. is updated outside the component
//state: the things that will be updated inside the component. changing the state rerenders that component for example: a count


//props: needs to be passed the grade level the teacher teaches and the user's name
//state: what does it need to update inside the component? Possibly nothing?
const App = () => {
    //test properties...will receive these as props
    const usersFirstName = 'Sam'
    const admin = true;

    //set state
    const [studentDataBase, setStudentDataBase] = useState(null);
    const [createStudentClicked, setCreateStudentClicked] = useState(false);
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [gradeLevel, setGradeLevel] = useState()
    const [youngestAndOnly, setYoungestAndOnly] = useState(null)
    const [homeRoom, setHomeRoom] = useState(null)
    const [deleteButtonClicked, setDeleteButtonClicked] = useState(false);

    //fetch the data upon rendering
    useEffect(() => {
        async function fetchData(){
            await axios.get('/students')
            .then((res) => setStudentDataBase(res.data))
            } 
        fetchData()
    }, [studentDataBase]);


    //declare the default rosters
    let seventhGradeRoster = [];
    let eighthGradeRoster = [];
    let eightBRoster = [];
    let eightARoster = [];
    let sevenBRoster = [];
    let sevenARoster = [];
    let sixARoster = [];
    let sixBRoster = [];
    let youngestAndOnlyRoster = [];
    let sixthGradeRoster = [];
    
    //declare an array with all of the rosters along with corresponding titles
    let allRosters = [sixthGradeRoster, seventhGradeRoster, eighthGradeRoster, eightBRoster, eightARoster, sevenBRoster, sevenARoster, sixARoster, sixBRoster, youngestAndOnlyRoster]
    let titleOfRosters = ['Sixth Grade', 'Seventh Grade', 'Eighth Grade', '8B Homeroom', '8A Homeroom', '7B Homeroom', '7A Homeroom', '6A Homeroom', '6B Homeroom', 'Youngest and Only']
    

    //push the data into the correct lists
    if (studentDataBase){
        
        for (const obj of studentDataBase){
            let objToPush = {}
            objToPush[obj.student_id] = `${obj.first_name} ${obj.last_name}`

            
            if (obj.youngest_and_only){
                youngestAndOnlyRoster.push(objToPush)   
            }
            if (obj.sixth){
                sixthGradeRoster.push(objToPush)   
            }
            if (obj.seventh){
                seventhGradeRoster.push(objToPush)   
            } 
            if (obj.eighth){
                eighthGradeRoster.push(objToPush)
            }
            if (obj.sixth && obj.homeroom === 'A'){
                sixARoster.push(objToPush)   
            } 
            if (obj.seventh && obj.homeroom === 'A'){
                sevenARoster.push(objToPush)   
            } 
            if (obj.eighth && obj.homeroom === 'A'){
                eightARoster.push(objToPush)   
            }
            if (obj.sixth && obj.homeroom === 'B'){
                sixBRoster.push(objToPush)   
            } 
            if (obj.seventh && obj.homeroom === 'B'){
                sevenBRoster.push(objToPush)   
            } 
            if (obj.eighth && obj.homeroom === 'B'){
                eightBRoster.push(objToPush)   
            } 
        }
    }
    
    //function to change the studentDataBase when changes are made
    const editStudents = (newState) => {
        setStudentDataBase(newState)
    }



    const rosterComponents = allRosters.map((roster, index) => (
        <Roster key={index} 
        title={titleOfRosters[index]} 
        roster={roster} 
        studentDataBase={studentDataBase} 
        editStudents= {editStudents}
        allRosters={allRosters}
        titleOfRosters={titleOfRosters} />)
        )

    //create student functionality
    const createNewStudent = async () => {
        if (!createStudentClicked){
            setCreateStudentClicked(true)
        } else {
            const newStudentObject = {
                first_name: firstName,
                last_name: lastName,
                homeroom: homeRoom,
                grade_level: gradeLevel
            }

            // if (gradeLevel === 6){
            //     newStudentObject.gradeLevel = 'sixth';
            // } else if (gradeLevel === 7){
            //     newStudentObject.seventh = true;
            // } else newStudentObject.eighth = true;

            if (youngestAndOnly === 'on'){
                newStudentObject.youngest_and_only = true;
            } else newStudentObject.youngest_only = false;

            await axios.post('/students', newStudentObject)
            setCreateStudentClicked(false)
        }
    }

    //conditional if create new student button is clicked
    if (!createStudentClicked){
        return (
            <div>
                <h1>
                    Welcome {usersFirstName}. Here are your lists!
                </h1>
                <button onClick={() => createNewStudent()}>Create New Student</button>
                <div>
                    {rosterComponents}
                </div>
            </div>
        )
    } else {
        return (
            <div>
                <div>
                    <label for="first_name">First Name</label>
                    <input id="first_name" type='text' onChange={(e) => setFirstName(e.target.value)}/>

                    <label for="last_name">Last Name</label>    
                    <input id="last_name" type='text' onChange={(e) => setLastName(e.target.value)}/>
                </div>

                <div>
                    <label for="6">6th Grade</label>                   
                    <input type="checkbox" id="6" onChange={(e) => setGradeLevel('sixth')}/>

                    <label for="7">7th Grade</label>                               
                    <input type="checkbox" id="7" onChange={(e) => setGradeLevel('seventh')}/>

                    <label for="8">8th Grade</label>
                    <input type="checkbox" id="8" onChange={(e) => setGradeLevel('eighth')}/>
                </div>

                <div>
                    <label for="homeroomA">A</label>
                    <input type="checkbox" id="homeroomA" onChange={(e) => setHomeRoom('A')}/>

                    <label for="homeroomB">B</label>
                    <input type="checkbox" id="homeroomB" onChange={(e) => setHomeRoom('B')}/>
                </div>
                <div>
                <label for="youngest_and_only">Youngest/Only?</label>
                    <input type="checkbox" id="youngest_and_only" onChange={(e) => setYoungestAndOnly(e.target.value)}/>
                </div>
            <button onClick={() => setCreateStudentClicked(false)}> Go Back </button>
            <button onClick={() => createNewStudent()}>Create Student</button> 
            </div>
        )
        }
}

export default App