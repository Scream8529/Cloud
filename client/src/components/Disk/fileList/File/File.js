import React from 'react'

export default function File(props) {
    return (
        <div onClick={props.f.type === 'dir' ? () => { props.openDir(props.f._id) } : null} className='file' >
            <div>{(props.f.type === 'dir')
                ? <i className="material-icons">folder_open</i>
                : <i className="material-icons">note</i>
            }</div>
            <div>{props.f.name}</div>
            <div>{props.f.date.slice(0, 10)}</div>
            <div>{props.f.size}</div>
        </div>
    )
}
