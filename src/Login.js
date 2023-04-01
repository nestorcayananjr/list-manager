import React from "react";
import axios from "axios";
import { Form, Link, Route, Routes, Navigate, useNavigate, redirect } from "react-router-dom"
import HomePage from "./Homepage";
import { useState, useEffect } from "react"


function Login (){

    const [firstName, setFirstName] = useState(null);
    const [verification, setVerification] = useState(null);
    let userName;
    let password; 
    
    async function handleClick() {
        const data = await axios.post('/users', {
            username: userName,
            password: password
        })
        setVerification(data.data.verification)
    }

    if(verification) return <Navigate to='/home' />

    return (
        <>
            <label for='first_name'>First Name: </label>
            <input id='first_name' type='text' defaultValue='First Name' onChange={(e) => setFirstName(e.target.value)}/>
            <label for='username'>Username:</label>
            <input id='username' type='text' defaultValue='Username' onChange={(e) => userName = e.target.value}/>
            <label for='password'>Password: </label> 
            <input id='password' type='password'  onChange={(e) => password = e.target.value}/> 
            <button onClick={() => handleClick()}> Login </button>
            <Link to='/register'>Register</Link>
        </> 
    )
}

export default Login