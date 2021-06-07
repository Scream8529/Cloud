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