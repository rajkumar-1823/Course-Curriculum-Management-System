import React from 'react'
import './Login.css'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import { useState} from 'react'

const Signup = () => {
    const[username,setUsername]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')

    const handleSignup=()=>{
        axios.post('http://localhost:3001/user',{"username":username,"email":email,"password":password})
        .then(res=>console.log(res.data))
        .catch(err=>console.log(err))
    }

  return (
    <div className='body2'>
        <form onSubmit={handleSignup}>
        <div class="container">
            <div class="box">
                <div class="text">
                    <h2>Accout Signup</h2>
                </div>
                <div class="username field" >
                    <h4>username</h4>
                    <input type="text" id="user" value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
                </div>
                <div class="Email field">
                    <h4>Email</h4>
                    <input type="text" id="user" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                </div>
                <div class="password field">
                    <h4>password</h4>
                    <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                </div>
                <div className='account'>
                    <h3>Already have an Accout?</h3><NavLink to='/Login'>Login</NavLink>
                </div>
                <div class="btn">
                    <button type="submit">Signup</button>
                </div>
            </div>
        </div>
        </form>
    </div>
  )
}

export default Signup
