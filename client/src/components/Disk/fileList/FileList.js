import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { uploadFile } from '../../../actions/file'
import { addDirStack, setCurrentDir } from '../../../redux/fileReducer'
import File from './File/File'

export default function FileList(props) {
    const files = useSelector(state => state.files.files)
    const curDir = useSelector(state => state.files.currentDir)
    const dispatch = useDispatch()
    function openDir(dir) {
        dispatch(addDirStack(curDir))
        dispatch(setCurrentDir(dir))

    }


    // DragAndDrop
    const [drag, setDrag] = useState(false)
    const drugStartHandler = (e) => {
        e.preventDefault();
        setDrag(true)
    }
    const drugLeaveHandler = (e) => {
        e.preventDefault();
        setDrag(false)
    }
    const dragDrop = (e) => {
        e.preventDefault()
        let files = [...e.dataTransfer.files]
        files.forEach(file => dispatch(uploadFile(file, curDir)))

        setDrag(false)
    }



    
    const filesses = files.map(f => <File key={f._id} openDir={openDir} f={f} />)
    return (
        <div>
            <div className="fileList">
                <div></div>
                <div>Название</div>
                <div>Дата</div>
                <div>Размер</div>
            </div>
            <div>

                <form>
                    <label
                        className="dragLabel"
                        onDragStart={e => { drugStartHandler(e) }}
                        onDragLeave={e => { drugLeaveHandler(e) }}
                        onDragOver={e => { drugStartHandler(e) }}
                        onDrop={e => { dragDrop(e) }}

                    >
                        {

                            drag
                                ? <div className="dragFile">
                                        <span>Отпустите файлы для загрузки</span>
                                </div>
                                : filesses
                        }
                    </label>
                </form>
            </div>
        </div>
    )
}
