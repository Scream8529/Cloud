import React from 'react'
import style from '../Uploader.module.css'

export default function File(props) {
    return (
        <div className={style.file}>
            <div><h3>{props.file.name}</h3>
            <button className="waves-effect waves-light btn blue darken-2" 
            >X</button>
            </div>
            <div className={style.progressBar}>
                <p>{props.file.progress}%</p>
                <span style={{ width: props.file.progress + "%" }}></span>
            </div>
        </div>
    )
}
