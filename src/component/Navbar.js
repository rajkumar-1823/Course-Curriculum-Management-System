import React from 'react'
import logo from './book-poster.png'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import { useAuth } from './Auth'

const Navbar = () => {
  const auth = useAuth()
  return (
    <div>
      <div class="header">
        <div class="logo">
            <img src={logo} alt="Hospital Log" width={150}/>
            <div class="head-txt">
                <h3>CourseForge</h3>
            </div>
        </div>
        <div class="nav-bar">
            
            <ul>
                <NavLink to='/'>Home</NavLink>
                {auth.user==='admin' && <NavLink to='/Admin'>Admin</NavLink>}
                {auth.user && <NavLink to='/User'>User</NavLink>}
                {!auth.user && <NavLink to='/Login'>Login</NavLink>}
                {!auth.user &&<NavLink to='/Signup'>Signup</NavLink>}
            </ul>
        </div>
    </div>
    </div>
  )
}

export default Navbar
