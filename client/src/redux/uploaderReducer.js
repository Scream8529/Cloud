const TOGGLE_IS_VISIBLE = 'TOGGLE_IS_VISIBLE'
const ADD_UPLOAD_FILE = 'ADD_UPLOAD_FILE'
const REMOVE_UPLOAD_FILE = 'REMOVE_UPLOAD_FILE'
const CHANGE_UPLOAD_FILE = 'CHANGE_UPLOAD_FILE'



const initialState = {
    isVisible: false,
    files: []

}


const fileReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_IS_VISIBLE:
            return { ...state, isVisible: action.payload }
        case ADD_UPLOAD_FILE:
            return { ...state, files:[...state.files, {...action.payload, id: state.files.length}] }
        case REMOVE_UPLOAD_FILE:
            return { ...state, files:[...state.files.filter(file=>file.id !== action.payload)]}
        case CHANGE_UPLOAD_FILE:
            return { ...state }

        default: return state
    }
}
export const toggleIsVisible = (payload) => ({ type: TOGGLE_IS_VISIBLE, payload })
export const addUploadFile = (payload) => ({ type: ADD_UPLOAD_FILE, payload })
export const removeUploadFile = (payload) => ({ type: REMOVE_UPLOAD_FILE, payload })
export const changeUploadFile = (payload) => ({ type: CHANGE_UPLOAD_FILE, payload })


export default fileReducer