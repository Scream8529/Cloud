import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createDir } from '../../actions/file'
import {toggleIsPopup} from '../../redux/fileReducer'



export default function Popup(props) {
    const [newDirName, setNewDirName] = useState('')
    const dispatch = useDispatch()
    function createDirHandler () {
        dispatch(createDir(props.currentDir, newDirName))
        
    }
    function closePopup(isPopup){
        dispatch(toggleIsPopup(isPopup))
    }
    const isPopup = useSelector(state=>state.files.isPopup)
    return (<>
        <div onClick={()=>{closePopup(false)}} className="popup" style={ { display: isPopup ?"block":"none" }}>
            <div onClick={(e)=>{e.stopPropagation()}} className="popupContent">
                <div className="popupHeader">
                    <div className="popupTittle">Создать новую папку.</div>
                </div>
                <div className="input-field ">
                    <input value={newDirName} onChange={(e) => { setNewDirName(e.target.value) }} id="neDirName" type="email" />
                    <label htmlFor="neDirName">Введите имя папки...</label>
                </div>
                <button onClick={()=>{createDirHandler()}} className="waves-effect waves-light btn blue darken-3">Create new direcory</button>

            </div>


        </div>

    </>
    )
}