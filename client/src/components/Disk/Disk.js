import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getFiles, uploadFile } from '../../actions/file'
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
    function uploadFileToDisc(e) {
        e.stopPropagation()
        e.preventDefault()
        let files = [...e.target.files]
        files.forEach(file => dispatch(uploadFile(file, currentDir)))

    }
    return (
        <div className="disc">

            <div className="diskBtns">
                <button onClick={() => { toggleBackDir() }} className="waves-effect waves-light btn blue darken-2"><i className="material-icons">keyboard_backspace</i></button>
                <button onClick={() => { toggleNewDir(true) }} className="waves-effect waves-light btn blue darken-2"><i className="material-icons">folder add</i></button>
                <input id="uploadFile" name="uploadFile" type="file" className="fileInput" onChange={(e) => { uploadFileToDisc(e) }} />
                <label htmlFor="uploadFile" className="waves-effect waves-light btn blue darken-2">
                        <i className="material-icons">file_upload</i>
                </label>
            </div>
            <div>
                <FileList />
            </div>
            <Popup />
        </div>
    )
}
