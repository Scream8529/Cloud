import React from 'react'
import { downloadFile, deleteFile } from '../../../../actions/file'
import { useDispatch } from 'react-redux'

export default function File(props) {
    const dispatch = useDispatch()
    function mathSize(size) {
        if ((size / 1024) > 1024) {
            let mathSizeing = String((size / 1024) / 1024)
            return mathSizeing.split('.')[0] + '.' + mathSizeing.split('.')[1].slice(0, 1) + "Mb"
        }
        if (size > 1024) {
            return Math.round(size / 1024) + "Kb"
        }
        if (size === 0) {
            return ""
        }
        return size + 'b'
    }
    function OpenDir(e) {
        e.preventDefault();
        e.stopPropagation();
        props.openDir(props.f._id)
    }
    function deleteFiles() {

        dispatch(deleteFile(props.f))

    }
    function downloadFiles() {
        dispatch(downloadFile(props.f))

    }
    if (props.view === "list") {
        return (

            <div
                onClick={props.f.type === 'dir' ? (e) => { OpenDir(e) }
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
                    ? <div className="fileActionBtn" onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}>
                        <button
                            onClick={(e) => { e.preventDefault(); deleteFiles() }}
                            className="waves-effect waves-light btn blue darken-2"><i className="material-icons">delete</i></button>
                    </div>
                    : <div className="fileActionBtn" onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}>
                        <button
                            onClick={(e) => { e.preventDefault(); downloadFiles() }}
                            className="waves-effect waves-light btn blue darken-2"><i className="material-icons">file_download</i></button>
                        <button
                            onClick={(e) => { e.preventDefault(); deleteFiles() }}
                            className="waves-effect waves-light btn blue darken-2"><i className="material-icons">delete</i></button>
                    </div>}

            </div>
        )
    }
    if (props.view === "tile") {
        return (
            <div className="fileTile"
                onClick={props.f.type === 'dir' ? (e) => { OpenDir(e) }
                    : (e) => { e.preventDefault(); e.stopPropagation(); }}>
                <div>{(props.f.type === 'dir')
                    ? <i className="material-icons medium">folder_open</i>
                    : <i className="material-icons medium">note</i>
                }</div>
                <div>{props.f.name}</div>
                {(props.f.type === 'dir')
                    ? <div className="fileActionBtn" onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}>
                        <button
                            onClick={(e) => { e.preventDefault(); deleteFiles() }}
                            className="waves-effect waves-light btn blue darken-2"><i className="material-icons">delete</i></button>
                    </div>
                    : <div className="fileActionBtn" onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}>
                        <button
                            onClick={(e) => { e.preventDefault(); downloadFiles() }}
                            className="waves-effect waves-light btn blue darken-2"><i className="material-icons">file_download</i></button>
                        <button
                            onClick={(e) => { e.preventDefault(); deleteFiles() }}
                            className="waves-effect waves-light btn blue darken-2"><i className="material-icons">delete</i></button>
                    </div>}
            </div>
        )
    }
}
