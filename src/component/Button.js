import React from 'react'
import './Button.css'

import { Link,Outlet } from 'react-router-dom'

const Button = () => {
  return (
    <div>
        <div className="btn-cont">
            <div className="buts bt1">
                <Link to="Add">Add Course</Link>
            </div>
            <div className="buts bt2">
                <Link to="Manage">Manage Course</Link>
            </div>
        </div>
        <Outlet/>
    </div>
  )
}

export default Button
