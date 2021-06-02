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
export function uploadFile(file, dirId) {
    return async dispatch => {
        try {
            const formData = new FormData()
            formData.append('file', file)
            if (dirId) {
                formData.append('parent', dirId)
            }
            const response = await axios.post(`http://localhost:5000/api/files/upload`, formData, {
                headers: {Authorization: `Bearer ${localStorage.getItem('token')}`},
                onUploadProgress: progressEvent => {
                    const totalLength = progressEvent.lengthComputable ? progressEvent.total : progressEvent.target.getResponseHeader('content-length') || progressEvent.target.getResponseHeader('x-decompressed-content-length');
                    console.log('total', totalLength)
                    if (totalLength) {
                        let progress = Math.round((progressEvent.loaded * 100) / totalLength)
                        console.log(progress)
                    }
                }
            });
            dispatch(addFile(response.data))
        } catch (e) {
            alert(e.response)
        }
    }
}