import React from 'react'



export default function Popup() {

    return (<>
        <div className="popup">
            <div className="popupContent">
                <div className="popupHeader">
                    <div className="popupTittle">Создать новую папку.</div>
                    <button className="popupClose">x</button>
                </div>
                <input type='text' placeholder="Введите название папки..." />
            </div>


        </div>

    </>
    )
}