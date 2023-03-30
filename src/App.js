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
    const gradeLevel = 'admin';
    const admin = true;

    //get the information and set the state
    const [studentDataBase, setStudentDataBase] = useState(null)

    useEffect(() => {
        async function fetchData(){
            await axios.get('/students')
            .then((res) => setStudentDataBase(res.data))
            } 
        fetchData()
    }, []);


    //create a roster for each column in the database (but not first_name, last_name, id)
    //pass those rosters as props to a list component


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
    
    let allRosters = [sixthGradeRoster, seventhGradeRoster, eighthGradeRoster, eightBRoster, eightARoster, sevenBRoster, sevenARoster, sixARoster, sixBRoster, youngestAndOnlyRoster]
    let titleOfRosters = ['Sixth Grade', 'Seventh Grade', 'Eighth Grade', '8B Homeroom', '8A Homeroom', '7B Homeroom', '7A Homeroom', '6A Homeroom', '6B Homeroom', 'Youngest and Only']
    
    if (studentDataBase){

        //push the data into the correct lists
        for (const obj of studentDataBase){
            let pushToArrayTemplate = `${obj.first_name} ${obj.last_name}`
            
            if (obj.youngest_and_only){
                youngestAndOnlyRoster.push(pushToArrayTemplate)   
            }
            if (obj.sixth){
                sixthGradeRoster.push(pushToArrayTemplate)   
            }
            if (obj.seventh){
                seventhGradeRoster.push(pushToArrayTemplate)   
            } 
            if (obj.eighth){
                eighthGradeRoster.push(pushToArrayTemplate)
            }
            if (obj.sixth && obj.homeroom === 'A'){
                sixARoster.push(pushToArrayTemplate)   
            } 
            if (obj.seventh && obj.homeroom === 'A'){
                sevenARoster.push(pushToArrayTemplate)   
            } 
            if (obj.eighth && obj.homeroom === 'A'){
                eightARoster.push(pushToArrayTemplate)   
            }
            if (obj.sixth && obj.homeroom === 'B'){
                sixBRoster.push(pushToArrayTemplate)   
            } 
            if (obj.seventh && obj.homeroom === 'B'){
                sevenBRoster.push(pushToArrayTemplate)   
            } 
            if (obj.eighth && obj.homeroom === 'B'){
                eightBRoster.push(pushToArrayTemplate)   
            } 
        }
    }
    




const rosterComponents = allRosters.map((roster, index) => (<Roster key={index} title={titleOfRosters[index]} roster={roster} />))

//NEED TO ADD: EVERY LIST OCNTAINER NEEDS AN ADD NEW LIST BUTTON

    return (
        <div>
            <h1>
                Welcome {usersFirstName}. Here are your lists!
            </h1>
            <div>
                {rosterComponents}
            </div>
        </div>
    )
}

export default App