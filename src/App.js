//App component, will most likely be the top-most component
import React from "react";
import HomePage from './Homepage.js'
import Login from "./Login.js";
import { Route, Routes } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes.jsx";
import Registration from "./Registration.js"


//props: like arguments that are passed to app. cannot be changed inside a component. is updated outside the component
//state: the things that will be updated inside the component. changing the state rerenders that component for example: a count


//props: needs to be passed the grade level the teacher teaches and the user's name
//state: what does it need to update inside the component? Possibly nothing?
const App = () => {
    return(
        <Routes>
            <Route path='/' element={<Login />} />
            
            <Route path='/home' element={<HomePage />} />
            <Route path='/register' element={<Registration />} />
        </Routes>
    )
}

export default App