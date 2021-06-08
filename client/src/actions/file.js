import axios from 'axios'
import { setFiles, addFile, deleteFileAC } from '../redux/fileReducer'
import { addUploadFile, changeUploadFile, toggleIsVisible } from '../redux/uploaderReducer'


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
            const uploadFile= {name: file.name, progress:0, id:Date.now()}
            dispatch(toggleIsVisible(true))
            dispatch(addUploadFile(uploadFile))
            const response = await axios.post(`http://localhost:5000/api/files/upload`, formData, {
                headers: {Authorization: `Bearer ${localStorage.getItem('token')}`},
                onUploadProgress: progressEvent => {
                    const totalLength = progressEvent.lengthComputable ? progressEvent.total : progressEvent.target.getResponseHeader('content-length') || progressEvent.target.getResponseHeader('x-decompressed-content-length');
                    console.log('total', totalLength)
                    if (totalLength) {
                        uploadFile.progress = Math.round((progressEvent.loaded * 100) / totalLength)
                        
                        dispatch(changeUploadFile(uploadFile))
                    }
                }
            });
            dispatch(addFile(response.data))
        } catch (e) {
            alert(e.response)
        }
    }
    
}
export function downloadFile(file) {
    return async dispatch => {
        try {
            const response = await fetch(`http://localhost:5000/api/files/download?id=${file._id}`, {
                headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}})
                
                if (response.status === 200){
                    const blob = await response.blob()
                    const downloadUrl = window.URL.createObjectURL(blob)
                    const link = document.createElement('a')
                    link.href= downloadUrl
                    link.download = file.name
                    document.body.appendChild(link)
                    link.click()
                    link.remove()
                } else {
                    alert('Ошибка загрузки файла')
                }

        } catch (e) {
            alert(e)
        }
    }
}
export function deleteFile(file) {
    return async dispatch => {
        try {
            
            const response = await axios.delete(`http://localhost:5000/api/files?id=${file._id}`, {
                headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}});
            dispatch(deleteFileAC(file._id))
            alert(response.data.message)
        } catch (e) {
            alert(e.response)
        }
    }
}
export function searchFile(searchName){
    return async dispatch =>{
        try {
            const response = await axios.get(`http://127.0.0.1:5000/api/files/search?search=${searchName}`,
            {headers:{Authorization: `Bearer ${localStorage.getItem('token')}`}})
            dispatch(setFiles(response.data))
        } catch (error) {
            alert(error)
        }
    }
}