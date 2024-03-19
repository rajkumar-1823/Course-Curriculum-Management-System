import React, { useState } from 'react'
import './Add.css'
import axios from 'axios'
import Auth, { useAuth } from './Auth'

const Add = () => {


    const[name,setName]=useState('')
    const[title,setTitle]=useState('')
    const[des,setDes]=useState('')

    const handleSubmit = () =>{
        axios.post('http://localhost:3001/admin',{"name":name,"title":title,"des":des})
    
        .then(res=>(console.log(res.data)))
        .catch(err=>(console.log(err)))
    }

  return (
    <div className='body12'>
        <div className="form-content">
            <form onSubmit={handleSubmit}>
                <caption>Admin Panel</caption>
                <div className="admin-inputs">
                    <label>Course Image</label>
                    <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/>
                </div>
                <div className="admin-inputs">
                    <label>Title</label>
                    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
                </div>
                <div className="admin-inputs">
                    <label>Description</label>
                    <input type="text" value={des} onChange={(e)=>{setDes(e.target.value)}}/>
                </div>
            
            <div className="submit-last-btn">
                <button type="submit">Submit</button>
            </div>
            </form>
        </div>
    </div>
  )
}

export default Add
