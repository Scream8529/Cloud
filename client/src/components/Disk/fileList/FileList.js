import React from 'react'
import { useSelector } from 'react-redux'

export default function FileList(props) {
    let files = useSelector(state => state.files.files)
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
                    
                    files.map(f => <div className='file' key={f._id}>
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
