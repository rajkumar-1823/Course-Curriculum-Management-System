import React, { useEffect } from 'react'
import {useAuth} from './Auth'
import './User.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
// import C from './C.jpg'

const User = () => {
  const Auth = useAuth()
  const navigate = useNavigate()

  const[poste,setPoste] = useState([])

  const handlelogout = () => {
      Auth.logout()
      navigate('/')
  }

  useEffect(()=>{
    axios.get('http://localhost:3001/admin')
    .then(res=>{setPoste(res.data)})
})
    
  return (
    <div>
      <div className='user-info'>
        <h3>Welcome {Auth.user}</h3>
        <button onClick={handlelogout}>Logout</button>
      </div>
      <div className='container2'>
        <div className='products'>
          {poste.map(x=>(
            <div className='main-pr'>
              <img src={x.name} width={300}></img>
              <h4>{x.title}</h4>
              <h2>{x.des}</h2>
            </div>
          ))}
            
        </div>
      </div>
    </div>
  )
}

export default User
