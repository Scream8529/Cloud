import React from 'react'
import File from '../File/File'

export default function List(props) {

    const filesList = props.files.map(f => <File key={f._id} openDir={props.openDir} f={f} view={props.view} />)
    return (<>

        {(props.view === "tile") &&

            <div className="tileContainer">
                {filesList}

            </div>}
        {
            (props.view === "list") &&
            <div>
                <div className="fileList">
                    <div></div>
                    <div>Название</div>
                    <div>Дата</div>
                    <div>Размер</div>
                </div>
                <div>
                    {
                        filesList
                    }
                </div>
            </div>}
    </>)
}
