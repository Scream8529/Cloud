import axios from 'axios'
import { setFiles } from '../redux/fileReducer'


export function getFiles(dirId){
    return async dispatch =>{
        try {
            const response = await axios.get(`http://127.0.0.1:5000/api/files${dirId ? '?parent='+dirId : ''}`,
            {headers:{Authorization: `Bearer ${localStorage.getItem('token')}`}})
            dispatch(setFiles(response.data))
        } catch (error) {
            alert(error)
        }
    }
}