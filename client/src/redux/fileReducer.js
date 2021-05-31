const SET_FILES = 'SET_FILES'
const SET_CURRENT_DIR = 'SET_CURRENT_DIR'

const initialState = {
    files: [],
    currentDir: null
}


const fileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_DIR:
            return { ...state, currentDir: action.payload }
        case SET_FILES:
            return { ...state, files: action.payload  }

        default: return state
    }
}
export const setFiles = (payload) =>({type:SET_FILES, payload})
export const setCurrentDir = (payload) =>({type:SET_CURRENT_DIR, payload})

export default fileReducer