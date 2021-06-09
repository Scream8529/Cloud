import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getFiles, uploadFile } from '../../actions/file'
import FileList from './fileList/FileList'
import Popup from './Popup'
import { setCurrentDir, toggleIsPopup,changeSearchType } from '../../redux/fileReducer'
import Uploader from './Uploader/Uploader'

export default function Disk() {
    const dispatch = useDispatch()
    const currentDir = useSelector(state => state.files.currentDir)
    const searchType = useSelector(state => state.files.searchType)
    const patch = useSelector(state => state.files.dirStack)
    const [view, setView] = useState('tile')


    useEffect(() => {
        dispatch(getFiles(currentDir, searchType))
    }, [currentDir, searchType])
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
    function changeType (e){
        dispatch(changeSearchType(e.target.value))
    }
    return (
        <div className="disc">

            <div className="diskBtns">
                <div>
                    <button onClick={() => { toggleBackDir() }} className="waves-effect waves-light btn blue darken-2"><i className="material-icons">keyboard_backspace</i></button>
                    <button onClick={() => { toggleNewDir(true) }} className="waves-effect waves-light btn blue darken-2"><i className="material-icons">folder add</i></button>
                    <input id="uploadFile" name="uploadFile" type="file" className="fileInput" onChange={(e) => { uploadFileToDisc(e) }} />
                    <label htmlFor="uploadFile" className="waves-effect waves-light btn blue darken-2">
                        <i className="material-icons">file_upload</i>
                    </label>
                </div>
                <div className="rightSideBtn">
                    <div>
                    {(view === 'tile') && <button onClick={() => { setView('list') }} className="waves-effect waves-light btn blue darken-2"><i className="material-icons" style={{fontSize:"30px"}}>view_headline</i></button>}
                    {(view === 'list') && <button onClick={() => { setView('tile') }} className="waves-effect waves-light btn blue darken-2"><i className="material-icons" style={{fontSize:"30px"}}>view_module</i></button>}
                    </div>    
                        <label htmlFor="searchSelector" className="searchSelector" >
                        <select value={searchType} id="searchSelector" onChange={(e)=>{changeType(e)}}>
                            <option value={"type"}>По типу</option>
                            <option value={"date"}>По дате</option>
                            <option value={"name"}>По Имени</option>
                        </select></label>
                   
                </div>
            </div>
            <div>
                <FileList view={view} />
            </div>
            <Popup />
            <Uploader />
        </div>
    )
}
