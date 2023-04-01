import React from "react";
import HomePage from './Homepage.js'
import Login from "./Login.js";
import { redirect, Navigate, Link} from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes.jsx";
import axios from "axios";

const Registration = () => {
    let firstName
    let userName
    let password

    const handleClick = async () => {
        await axios.put('/users', {
            name: firstName,
            username: userName,
            password: password
        })
    }

    return (
        <>
            <h1> Register Here</h1>
            <label for='first_name'>First Name: </label>
            <input id='first_name' type='text' defaultValue='First Name' onChange={(e) => firstName = e.target.value}/>
            <label for='username'>Username:</label>
            <input id='username' type='text' defaultValue='Username' onChange={(e) => userName = e.target.value}/>
            <label for='password'>Password: </label> 
            <input id='password' type='password'  onChange={(e) => password = e.target.value}/> 
            <button onClick={() => handleClick()}> Register </button>
            <Link to='/'>Go back to login page</Link> 
        </>
    )

}

export default Registration