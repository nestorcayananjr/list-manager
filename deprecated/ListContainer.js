import React, { useEffect } from "react"
import ListComponent from "../src/Roster"
import { useState } from "react";
import axios from "axios";
import ListInfo from "./ListInfo"

//props: like arguments that are passed to app. cannot be changed inside a component. is updated outside the component
//state: the things that will be updated inside the component. changing the state rerenders that component for example: a count

//props: what does it need to be passed? What types of lists to render.
//state: what does it need to update inside the component? The students within a list
const ListContainer = ({containerType, usersFirstName, gradeLevel, isAdmin}) => {
    let listsToRender = [];
    const [roster, setRoster] = useState(null)

    useEffect( () => {
        async function fetchData(){
            if (isAdmin){
            await axios.get('/lists/gradeLevel/admin')
            .then((res) => setRoster(res.data))
            } else {
                await axios.get('/lists/gradeLevel/' + `${gradeLevel}`)
                .then((res) => setRoster(res.data))
            }
    }
    fetchData()
    }, [])




    return(
    <div className = 'listcontainer'>
        <h1>{containerType} Lists</h1>
        {roster && listsToRender}
    </div>)
}

export default ListContainer