import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { logout } from '../../redux/userReducer'
import { searchFile } from '../../actions/file'
import { getFiles } from '../../actions/file'
import avatar from '../../assets/imgs/avatar.png'

export default function NavBar(props) {
    const isAuth = useSelector(state => state.user.isAuth)
    const currentDir = useSelector(state => state.files.currentDir)
    const currentUser = useSelector(state => state.user.currentUser)
    const searchType = useSelector(state => state.files.searchType)
    const [search, setSearch] = useState('')
    const dispatch = useDispatch()
    const [searchTimeout, setSearchTimeout] = useState(false)

    const searchInputHandler = (e) => {
        setSearch(e.target.value)
        if (searchTimeout) {
            clearTimeout(searchTimeout)
        }
        if (e.target.value === '') {
            console.log(currentDir, searchType)
            dispatch(getFiles(currentDir, searchType))
        } else {
            setSearchTimeout(setTimeout((value) => {
                dispatch(searchFile(value))
            }, 500, e.target.value))
            
        }
    }
    const clearSearchBox = () => {
        setSearch("")
        dispatch(getFiles(currentDir, searchType))
    }
    return (
        <div>

            <nav>
                <div className="nav-wrapper blue darken-3">
                    <div className="navBarContainer">
                        <NavLink to="/" className="brand-logo"><i className="material-icons" style={{ fontSize: "40px" }}>cloud_circle</i></NavLink>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            {isAuth && <li className="searchBox" ><input
                                type='text'
                                onChange={(e) => { searchInputHandler(e) }}
                                value={search}
                                placeholder="Введите имя файла..."
                                className="searchInput"
                            />{search && <div className="searchIcon"><i onClick={() => { clearSearchBox() }} className="material-icons">cancel</i> </div>}
                            </li>}

                            {!isAuth && <li><NavLink to="/login">Login</NavLink></li>}
                            {!isAuth && <li><NavLink to="/registration">Registration</NavLink></li>}
                            {isAuth && <li><NavLink to="/profile" className="navbarAvatarContainer"><img className="navbarAvatar" src={currentUser.avatar ?"http://localhost:5000/"+ currentUser.avatar  :avatar} /></NavLink></li>}
                            {isAuth && <li style={{marginLeft:'20px'}}><div style={{ cursor: 'pointer' }} onClick={() => { dispatch(logout()) }}>Logout</div></li>}
                            
                            
                        </ul>
                    </div>

                </div>
            </nav>
        </div>
    )
}
