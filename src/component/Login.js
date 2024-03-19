import React, { useState } from 'react'
import './Login.css'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useAuth } from './Auth'
import { useEffect } from 'react'

const Login = () => {
    const navigate = useNavigate()
    const[username,setUsername]=useState('')
    const[password,setPassword] = useState('')
    const[isLoggedIn,setIsLoggedIn]=useState(false)
    const[userlist,SetUserlist]=useState([])

    useEffect(()=>{
      axios.get('http://localhost:3001/user')
      .then(res=>SetUserlist(res.data))
      .catch(err=>console.log(err))
    },[])
    const auth = useAuth()

    const handleLogin=()=>{
        const userExist = userlist.some(u=>u.username===username && u.password===password) 
        if(userExist){
          auth.login(username)
          setIsLoggedIn(true)
          navigate('/')
        }else{
          alert("invalid user or password")
        }
        
    }

  return (
    <div className='body2'>
        <form onSubmit={handleLogin}>
      <div class="container">
        <div class="box">
            <div class="text">
                <h2>Accout Login</h2>
            </div>
            <div class="username field">
                <h4>username</h4>
                <input type="text" id="user" value={username} onChange={(e)=>setUsername(e.target.value)}/>
            </div>
            <div class="password field">
                <h4>password</h4>
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <div className='account'>
                <h3>Don't have an Accout?</h3><NavLink to='/Signup'>Signup</NavLink>
            </div>
            <div class="btn">
                <button type="submit">Login</button>
            </div>
        </div>
    </div>
    </form>
    </div>
  )
}

export default Login
