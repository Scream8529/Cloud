import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { uploadFile } from '../../../actions/file'
import { addDirStack, setCurrentDir } from '../../../redux/fileReducer'

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
    const dragDrop=(e)=>{
        e.preventDefault()
        let files = [...e.dataTransfer.files]
        files.forEach(file=>dispatch(uploadFile(file, curDir)))
        // dispatch(uploadFile(files))


        setDrag(false)
    }




    const filesses = files.map(f => <div onClick={f.type === 'dir' ? () => { openDir(f._id) } : null} className='file' key={f._id}>
        <div>{(f.type === 'dir')
            ? <i className="material-icons">folder_open</i>
            : <i className="material-icons">find_in_page</i>
        }</div>
        <div>{f.name}</div>
        <div>{f.date.slice(0, 10)}</div>
        <div>{f.size}</div>
    </div>)
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
                    <input onClick={(e) => e.preventDefault()} id="fileUpload" type="file" style={{ display: 'none' }} />
                    <label
                        className="dragLabel"
                        htmlFor='fileUpload'
                        onDragStart={e => { drugStartHandler(e) }}
                        onDragLeave={e => { drugLeaveHandler(e) }}
                        onDragOver={e => { drugStartHandler(e) }}
                        onDrop={e=>{dragDrop(e)}}

                    >
                        {

                            drag
                                ? <div className="dragFile">
                                    1
</div>
                                : filesses
                        }
                    </label>
                </form>
            </div>
        </div>
    )
}
