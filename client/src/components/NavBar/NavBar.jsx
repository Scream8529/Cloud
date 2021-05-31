import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
    return (
        <div>
            <nav>
                <div className="nav-wrapper blue darken-3">
                    <div className="navBarContainer">
                    <NavLink to="/" className="brand-logo"><i className="medium material-icons">cloud_circle</i></NavLink>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><NavLink to="/login">Login</NavLink></li>
                        <li><NavLink to="/registration">Registration</NavLink></li>
                    </ul>
                    </div>
                    
                </div>
            </nav>
        </div>
    )
}
