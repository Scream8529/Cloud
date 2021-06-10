import axios from 'axios'
import {setUser} from '../redux/userReducer'

export const registration = async (email, password) => {
    try {
        await axios.post('http://localhost:5000/api/auth/registration', { email, password })
            .then(response => { 
                alert(response.data.message)
            })
    } catch (error) {
        alert(error.response.data.message)
    }
}
export const login = (email, password) => {
    return async (dispatch) =>{
        try {
            const response = await axios.post('http://localhost:5000/api/auth/login', { email, password })
                dispatch(setUser(response.data.user))
                localStorage.setItem('token', response.data.token)
        } catch (error) {
            alert(error.response.data.message)
        }
    }            
}
export const auth = () => {
    return async (dispatch) =>{
        try {
            const token = localStorage.getItem('token')
            if (!token || token === 'undefined'){
            return localStorage.removeItem('token')
            }
            const response = await axios.get('http://localhost:5000/api/auth/auth', 
            {headers:
                {Authorization: `Bearer ${localStorage.getItem('token')}`}
            })
            
                if (response.data.user){
                dispatch(setUser(response.data.user))
                localStorage.setItem('token', response.data.token)}
        } catch (error) {
            alert(error)
            localStorage.removeItem('token')
        }
    }            
}
export function uploadAvatar (file){
    return async dispatch =>{
        try {
            const formData = new FormData()
            formData.append('file', file)
            const response = await axios.post(`http://127.0.0.1:5000/api/files/avatar`, formData, 
            {headers:{Authorization: `Bearer ${localStorage.getItem('token')}`}})
            console.log(response)
            dispatch(setUser(response.data))


        } catch (error) {
            alert(error)
        }
    }
}
export function deleteAvatar (){
    return async dispatch =>{
        try {
            const response = await axios.delete(`http://127.0.0.1:5000/api/files/avatar`,
            {headers:{Authorization: `Bearer ${localStorage.getItem('token')}`}})

            dispatch(setUser(response.data))
        } catch (error) {
            alert(error)
        }
    }
}