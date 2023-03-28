//App component, will most likely be the top-most component
import React from "react";
import ListContainer from "./ListContainer.js"
import axios from "axios";
import { useState, useEffect } from "react"


const App = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        let ignore = false;

        async function fetchData(){
            const result = await axios.get('/lists');
            if (!ignore){
                console.log(setData(result.data), result, 'inside async');
                }
        }

        fetchData()

        return () => {
            ignore = true;
        }
    }, [])

    
console.log(data)
    return (
        <div>
            <h1>
                Welcome 'user'. Here are your lists
            </h1>
            <ListContainer listType='grade_level' grade='test' data={data}/>
            <ListContainer listType='homeroom' grade='test' data= {data} />

        </div>
    )
}

export default App