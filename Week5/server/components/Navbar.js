import React from 'react'
import { link } from 'react-router-dom'
import { userContext } from '../context/UserProvider.js'

export default function Navbar (){
    return (
        <div className="navbar">
            <Link to="/profile">Profile</Link>
            <Link to="/public">Public</Link>
            <button onClick={ logout }>Logout</button>
        </div>
    )
}