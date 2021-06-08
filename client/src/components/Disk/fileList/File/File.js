import React from 'react'
import { useDispatch } from 'react-redux'
import { downloadFile, deleteFile } from '../../../../actions/file'

export default function File(props) {
    const dispatch = useDispatch()
    const fileDownload = (f) => {
        dispatch(downloadFile(f))
    }
    const deleteFileHandler =(file) =>{
        dispatch(deleteFile(file))
    }
    function mathSize (size){
        if ( (size/1024) > 1024){
            let mathSizeing = String((size / 1024)/1024)
            return mathSizeing.split('.')[0] + '.' + mathSizeing.split('.')[1].slice(0,1) + "Mb"
        }
        if (size > 1024){
            return Math.round(size / 1024) + "Kb"
        }
        if (size === 0){
            return ""
        }
        return size + 'b'
    }
    return (
        <div
            onClick={props.f.type === 'dir' ? (e) => { e.preventDefault(); e.stopPropagation(); props.openDir(props.f._id) }
                : (e) => { e.preventDefault(); e.stopPropagation(); }}
            className='file' >
            <div>{(props.f.type === 'dir')
                ? <i className="material-icons">folder_open</i>
                : <i className="material-icons">note</i>
            }</div>
            <div>{props.f.name}</div>
            <div>{props.f.date.slice(0, 10)}</div>
            <div>{mathSize(props.f.size)}</div>
            {(props.f.type === 'dir') 
            ?<div className="fileActionBtn" onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}>
                    <button
                        onClick={(e) => {e.preventDefault(); deleteFileHandler(props.f)}}
                        className="waves-effect waves-light btn blue darken-2"><i className="material-icons">delete</i></button>
                </div>

            :    <div className="fileActionBtn" onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}>
                    <button
                        onClick={(e) => { e.preventDefault();fileDownload(props.f) }}
                        className="waves-effect waves-light btn blue darken-2"><i className="material-icons">file_download</i></button>
                    <button
                        onClick={(e) => {e.preventDefault(); deleteFileHandler(props.f)}}
                        className="waves-effect waves-light btn blue darken-2"><i className="material-icons">delete</i></button>
                </div>}

        </div>
    )
}
