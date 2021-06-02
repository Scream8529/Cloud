import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getFiles } from '../../actions/file'
import FileList from './fileList/FileList'
import Popup from './Popup'
import { setCurrentDir, toggleIsPopup } from '../../redux/fileReducer'

export default function Disk() {
    const dispatch = useDispatch()
    const currentDir = useSelector(state => state.files.currentDir)
    const patch = useSelector(state => state.files.dirStack)

    useEffect(() => {
        dispatch(getFiles(currentDir))
    }, [currentDir])
    function toggleNewDir(isPopup) {
        dispatch(toggleIsPopup(isPopup))
    }
    function toggleBackDir() {
        const curDir = patch.pop()
            dispatch(setCurrentDir(curDir))
    }

    return (
        <div className="disc">
            
            <div className="diskBtns">
                <button onClick={() => { toggleBackDir() }} className="waves-effect waves-light btn blue darken-2"><i className="material-icons">backspace Назад</i></button>
                <button onClick={() => { toggleNewDir(true) }} className="waves-effect waves-light btn blue darken-2"><i className="material-icons">folder add Добавить папку</i></button>
            </div>
            <div>
                <FileList />
            </div>
            <Popup />
        </div>
    )
}
