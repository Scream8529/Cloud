import React from 'react'
import { useDispatch } from 'react-redux'
import { downloadFile } from '../../../../actions/file'

export default function File(props) {
    const dispatch = useDispatch()
    const fileDownload = (f) => {
        dispatch(downloadFile(f))
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
            <div>{props.f.size}</div>
            {(props.f.type !== 'dir') &&
                <div className="fileActionBtn" onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}>
                    <button
                        onClick={(e) => { e.preventDefault();fileDownload(props.f) }}
                        className="waves-effect waves-light btn blue darken-2"><i className="material-icons">file_download</i></button>
                    <button
                        onClick={(e) => { e.preventDefault() }}
                        className="waves-effect waves-light btn blue darken-2"><i className="material-icons">delete</i></button>
                </div>}

        </div>
    )
}
