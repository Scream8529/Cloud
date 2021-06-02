const SET_FILES = 'SET_FILES'
const SET_CURRENT_DIR = 'SET_CURRENT_DIR'
const ADD_FILE = 'ADD_FILE'
const TOGGLE_IS_POPUP = 'TOGGLE_IS_POPUP'
const ADD_DIR_STACK = 'ADD_DIR_STACK'


const initialState = {
    files: [],
    currentDir: null,
    isPopup: false,
    dirStack: []
}


const fileReducer = (state = initialState, action) => {
    switch (action.type) {
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
        default: return state
    }
}
export const setFiles = (payload) => ({ type: SET_FILES, payload })
export const setCurrentDir = (payload) => ({ type: SET_CURRENT_DIR, payload })
export const addFile = (payload) => ({ type: ADD_FILE, payload })
export const toggleIsPopup = (payload) => ({ type: TOGGLE_IS_POPUP, payload })
export const addDirStack = (payload) => ({ type: ADD_DIR_STACK, payload })

export default fileReducer