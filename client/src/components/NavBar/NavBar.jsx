import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { logout } from '../../redux/userReducer'

export default function NavBar() {
  const isAuth = useSelector(state => state.user.isAuth)
    const dispatch = useDispatch()
    return (
        <div>
            <nav>
                <div className="nav-wrapper blue darken-3">
                    <div className="navBarContainer">
                    <NavLink to="/" className="brand-logo"><i className="medium material-icons">cloud_circle</i></NavLink>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                       {!isAuth && <li><NavLink to="/login">Login</NavLink></li>}
                       {!isAuth && <li><NavLink to="/registration">Registration</NavLink></li>}
                       {isAuth && <li><div style={{cursor:'pointer'}} onClick={()=>{dispatch(logout())}}>Logout</div></li>}
                    </ul>
                    </div>
                    
                </div>
            </nav>
        </div>
    )
}
