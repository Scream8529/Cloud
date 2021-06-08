import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { logout } from '../../redux/userReducer'
import { searchFile } from '../../actions/file'
import { getFiles } from '../../actions/file'

export default function NavBar() {
    const isAuth = useSelector(state => state.user.isAuth)
    const currentDir = useSelector(state => state.files.currentDir)
    const [search, setSearch] = useState('')
    const dispatch = useDispatch()
    const [searchTimeout, setSearchTimeout] = useState(false)

    const searchInputHandler = (e) => {
        setSearch(e.target.value)
        if (searchTimeout) {
            clearTimeout(searchTimeout)
        }
        if (e.target.value !== '') {
            setSearchTimeout(setTimeout((value) => {
                dispatch(searchFile(value))
            }, 500, e.target.value))
        } else {
            dispatch(getFiles(currentDir))
        }
    }
    const clearSearchBox = () =>{
        setSearch("")
        dispatch(getFiles(currentDir))
    }
    return (
        <div>
            <nav>
                <div className="nav-wrapper blue darken-3">
                    <div className="navBarContainer">
                        <NavLink to="/" className="brand-logo"><i className="medium material-icons">cloud_circle</i></NavLink>
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
                            {isAuth && <li><div style={{ cursor: 'pointer' }} onClick={() => { dispatch(logout()) }}>Logout</div></li>}
                        </ul>
                    </div>

                </div>
            </nav>
        </div>
    )
}
