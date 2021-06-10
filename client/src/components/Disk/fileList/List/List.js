import React from 'react'
import { useSelector } from 'react-redux'
import Loader from '../../../Loader/Loader'
import File from '../File/File'

export default function List(props) {
    const isLoading = useSelector(state => state.files.isLoading)

    const filesList = props.files.map(f => <File key={f._id} openDir={props.openDir} f={f} view={props.view} />)
    return (<>

        {(props.view === "tile") &&

            <div className="tileContainer">
            {isLoading ? <Loader />
                :(props.files.length > 0 )?filesList: <div>Файлов не найдено</div>}

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
                {isLoading ? <Loader />
                :(props.files.length > 0 )?filesList: <div>Файлов не найдено</div>}
                </div>
            </div>}
    </>)
}
