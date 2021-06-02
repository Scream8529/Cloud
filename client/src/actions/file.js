import axios from 'axios'
import { setFiles, addFile } from '../redux/fileReducer'


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
export function createDir(dirId, name){
    return async dispatch =>{
        try {
            const response = await axios.post(`http://127.0.0.1:5000/api/files`,
            {
                name,
                parent: dirId,
                type:'dir'
            },
            {headers:{Authorization: `Bearer ${localStorage.getItem('token')}`}})
            dispatch(addFile(response.data))
        } catch (error) {
            alert(error)
        }
    }
}