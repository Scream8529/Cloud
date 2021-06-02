import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addDirStack, setCurrentDir } from '../../../redux/fileReducer'

export default function FileList(props) {
    const files = useSelector(state => state.files.files)
    const curDir = useSelector(state=> state.files.currentDir)
    const dispatch = useDispatch()
    function openDir (dir){
        dispatch(addDirStack(curDir))
        dispatch(setCurrentDir(dir))
        
    }
    return (
        <div>
            <div className="fileList">
                <div></div>
                <div>Название</div>
                <div>Дата</div>
                <div>Размер</div>
            </div>
            <div>
                {
                    
                    files.map(f => <div onClick={f.type === 'dir' ? ()=>{openDir(f._id)} : null} className='file' key={f._id}>
                        <div>{(f.type==='dir') 
                        ?<i className="material-icons">folder_open</i>
                        :<i className="material-icons">find_in_page</i>
                        }</div>
                        <div>{f.name}</div>
                        <div>{f.date.slice(0,10)}</div>
                        <div>{f.size}</div>
                    </div>)
                }
            </div>
        </div>
    )
}
