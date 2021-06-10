import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import style from "./Profile.module.css"
import avatar from '../../assets/imgs/avatar.png'
import { uploadAvatar,deleteAvatar } from '../../actions/user'

export default function Profile() {
    
    const currentUser = useSelector(state => state.user.currentUser);
    const [img, setImg] = useState(null);
    const  dispatch = useDispatch()
    useEffect(()=>{
        
    },[currentUser])

    const validatorImg =(file)=>{
        let allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
        if (!allowedExtensions.exec(file.name)) {
            alert('Пожалуйста выбирете изображение');
            setImg(file)
            return false;
        } 
        else return true
    }
    const setAvatarToState=(e)=>{
        const file = [...e.target.files]
        if (file.length > 1){
            return alert('Select one file')
        }
            console.log(file[0])
            setImg(file[0])
    }
    const sendAvatar = (e) =>{
        if (img === null){
            return alert("Сначала выберете файлы")
        }
        dispatch(deleteAvatar())
        dispatch(uploadAvatar(img))
        
    }
    const deleteAvatarHandle = () =>{
        dispatch(deleteAvatar())
    }

    return (
        <div className={style.settingContainer}>
            <h2>Настройки</h2>
            <div className={style.avatarContainer}>
                <h3>Смена аватара</h3>
                <div>
                    <img className={style.avatar} src={currentUser.avatar ? ("http://localhost:5000/"+currentUser.avatar ): avatar} />

                </div>
                <div>
                    <button onClick={()=>{deleteAvatarHandle()}} className="waves-effect waves-light btn blue darken-2" >Удалить аватар</button>
                </div>
                <div>
                    <form action="#">
                        <div className="file-field input-field row">
                            <div className="waves-effect waves-light btn blue darken-2 ">
                                <span>Avatar</span>
                                <input type="file" multiple onChange={(e)=>{setAvatarToState(e)}}/>
                            </div>
                            <div className="file-path-wrapper">
                                <input  className="file-path validate " type="text" placeholder="Upload avatar" />
                            </div>
                            <div className="">
                            <button  onClick={()=>{sendAvatar()}} className="waves-effect waves-light btn blue darken-2 s6" >Применить</button></div>


                        </div>
                    </form>
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
