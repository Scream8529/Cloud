import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getFiles, createDir } from '../../actions/file'
import FileList from './fileList/FileList'

export default function Disk() {
    const dispatch = useDispatch()
    const currentDir = useSelector(state=>state.files.currentDir)

    useEffect(()=>{
        dispatch(getFiles(currentDir))
    }, [currentDir])
    function createDirHandler () {
        dispatch(createDir(currentDir, 'asdasdasd'))
    }

    return (
        <div className="disc">
        <div className="diskBtns">
            <button className="waves-effect waves-light btn blue darken-2"><i className="material-icons">backspace Назад</i></button>
            <button onClick={()=>{createDirHandler()}} className="waves-effect waves-light btn blue darken-2"><i className="material-icons">folder add Добавить папку</i></button>
        </div>
            <div>
                <FileList/>
            </div>
        </div>
    )
}
