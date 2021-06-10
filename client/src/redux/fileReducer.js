const SET_FILES = 'SET_FILES'
const SET_CURRENT_DIR = 'SET_CURRENT_DIR'
const ADD_FILE = 'ADD_FILE'
const TOGGLE_IS_POPUP = 'TOGGLE_IS_POPUP'
const ADD_DIR_STACK = 'ADD_DIR_STACK'
const DELETE_FILE = 'DELETE_FILE'
const CHANGE_SEARCH_TYPE= 'CHANGE_SEARCH_TYPE'
const CHANGE_IS_LOADING= 'CHANGE_IS_LOADING'


const initialState = {
    files: [],
    currentDir: null,
    isPopup: false,
    dirStack: [],
    searchType: 'type',
    isLoading: false
}


const fileReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_SEARCH_TYPE:
            return { ...state, searchType:action.payload}
        case SET_CURRENT_DIR:
            return { ...state, currentDir: action.payload }
        case SET_FILES:
            return { ...state, files: action.payload }
        case ADD_FILE:
            return { ...state, files: [...state.files, action.payload] }
        case TOGGLE_IS_POPUP:
            return { ...state, isPopup: action.payload }
        case ADD_DIR_STACK:
            return { ...state, dirStack: [...state.dirStack, action.payload] }
            case CHANGE_IS_LOADING:
                return {...state,isLoading:action.payload }
        case DELETE_FILE:
            return { ...state, files: [...state.files.filter(file => file._id !== action.payload)] }
        default: return state
    }
}
export const changeIsLoading = (payload) => ({ type: CHANGE_IS_LOADING, payload })
export const setFiles = (payload) => ({ type: SET_FILES, payload })
export const changeSearchType = (payload) => ({ type: CHANGE_SEARCH_TYPE, payload })
export const deleteFileAC = (payload) => ({ type: DELETE_FILE, payload })
export const setCurrentDir = (payload) => ({ type: SET_CURRENT_DIR, payload })
export const addFile = (payload) => ({ type: ADD_FILE, payload })
export const toggleIsPopup = (payload) => ({ type: TOGGLE_IS_POPUP, payload })
export const addDirStack = (payload) => ({ type: ADD_DIR_STACK, payload })

export default fileReducer