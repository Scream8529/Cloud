import React from 'react'
import { useDispatch } from 'react-redux'
import { removeUploadFile } from '../../../../redux/uploaderReducer'
import style from '../Uploader.module.css'

export default function File(props) {
     const dispatch = useDispatch()

    return (
        <div className={style.file}>
            <div><h3>{props.file.name}</h3>
            <button 
            onClick={()=>{dispatch(removeUploadFile(props.file.id))}}
            className="waves-effect waves-light btn blue darken-2" 
            >X</button>
            </div>
            <div className={style.progressBar}>
                <p>{props.file.progress}%</p>
                <span style={{ width: props.file.progress + "%" }}></span>
            </div>
        </div>
    )
}
