import React, { useEffect, useState } from 'react'
import './Manage.css'
import axios from 'axios'


const Manage = () => {



    const[post,setPost] = useState([])

    const[popup,setPopup] = useState(false)
    
    const[id,setId] = useState('')
    const[name1,setName1] = useState('')
    const[title1,setTitle1] = useState('')
    const[des1,setDes1] = useState('')

    useEffect(()=>{
        axios.get('http://localhost:3001/admin')
        .then(res=>{setPost(res.data)})
    })
    const handleDelete=(id)=>{
        axios.delete(`http://localhost:3001/admin/${id}`)
        .then(res=>{console.log(res.data)
        setPost(post.filter(x=>x.id!==id));}
        
        )
    }

    const openPopup = (id) =>{
        const data = post.find(item=>item.id===id)
        setPopup(true)
        setName1(data.name)
        setTitle1(data.title)
        setDes1(data.des)
        setId(id)
    }

    const handleUpdate=(e)=>{
        e.preventDefault()
        axios.put(`http://localhost:3001/admin/${id}`,{"name":name1,"title":title1,"des":des1})
        .catch(err=>(console.log(err)))
    }

  return (
    <div>
        <div className="patient-record">
            <div className="record-txt">
                <h3>Course Records</h3>
            </div>
            <div className="tables">
                <table>
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {post.map(x=>(
                            <tr key={x.id}>
                            <td>{x.id}</td>
                            <td>
                                <img src={x.name} width={100} alt='images'></img>
                            </td>
                            <td>{x.title}</td>
                            <td>{x.des}</td>
                            <td>
                                <div className="btn">
                                    <button onClick={()=>openPopup(x.id)} type="submit" className="Update">Update</button>
                                    <button onClick={()=>handleDelete(x.id)} className="Delete" type="submit">Delete</button>
                                </div>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        {popup && <div className="form-content">
            <form onSubmit={handleUpdate}>
                <caption>Admin Panel</caption>
                <div className="admin-inputs">
                    <label>Course Image</label>
                    <input type="text" value={name1} onChange={(e)=>{setName1(e.target.value)}}/>
                </div>
                <div className="admin-inputs">
                    <label>Title</label>
                    <input type="text" value={title1} onChange={(e)=>{setTitle1(e.target.value)}}/>
                </div>
                <div className="admin-inputs">
                    <label>Description</label>
                    <input type="text" value={des1} onChange={(e)=>{setDes1(e.target.value)}}/>
                </div>
            
            <div className="submit-last-btn">
                <button type="submit">Submit</button>
            </div>
            </form>
        </div>}
    </div>
  )
}

export default Manage
