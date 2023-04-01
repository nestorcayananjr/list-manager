import React from "react";
import axios from "axios";
import { Form, Link, Route, Routes } from "react-router-dom"
import HomePage from "./Homepage";
import { useState, useEffect } from "react"


function Login (){

    const [firstName, setFirstName] = useState(null);
    const [verification, setVerification] = useState(false);
    let userName;
    let password; 
    
    async function handleClick() {
        console.log(userName, password)
        const data = await axios.post('/users', {
            username: userName,
            password: password
        })
        console.log(data.data)
    }
    return (
        <>
            <label for='first_name'>First Name: </label>
            <input id='first_name' type='text' defaultValue='First Name' onChange={(e) => setFirstName(e.target.value)}/>
            <label for='username'>Username:</label>
            <input id='username' type='text' defaultValue='Username' onChange={(e) => userName = e.target.value}/>
            <label for='password'>Password: </label> 
            <input id='password' type='password'  onChange={(e) => password = e.target.value}/> 
            <button onClick={() => handleClick()}> Login </button>
        </> 
    )
}

export default Login