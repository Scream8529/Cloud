import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import File from './File/File'
import style from './Uploader.module.css'
import {toggleIsVisible} from '../../../redux/uploaderReducer'

export default function Uploader() {
    const files = useSelector(state=>state.uploader.files)
    const isVisible = useSelector(state=>state.uploader.isVisible)
    const dispatch = useDispatch()
    const toggleIsVisibleFalse = ()=>{
        dispatch(toggleIsVisible(false))
    }

    
    return (
        isVisible  &&
        <div className={style.uploader}>
            <h2>Загрузки:</h2>
            <button onClick={(e)=>{ toggleIsVisibleFalse()}} 
            className="waves-effect waves-light btn blue darken-2" style={{borderRadius:"50%"}}>X</button>
            {
                files.map(file=><File key={file.id} file={file} />)
            }
        </div>
    )
}
