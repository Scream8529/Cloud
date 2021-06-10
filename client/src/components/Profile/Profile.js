import React from 'react'

export default function Profile(props) {
    return (
        <div>
            <h2>Настройки</h2>
            <div>
                <h3>Смена аватара</h3>
                <div>
                    <img src={props.profile.avatar}/>
                    
                </div>
                <div>
                    <button>Удалить</button>
                </div>
                <div>
                    <input id="avatarUpload" type="file" />
                    <label htmlFor="avatarUpload" />
                </div>
            </div>
            <div>
            Настройки входа(смена логина или пароля)
            </div>
            
            <div>
            еще какие то настройки
            </div>
        </div>
    )
}
