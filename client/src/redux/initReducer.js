const INITIALIZED = 'INITIALIZED'

const initialState = {
    initialized: false
}

const initialized = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED:
            return { ...state, initialized:true }
        default: return state
    }
}
export const initializedAC = () => ({ type: INITIALIZED})

export default initialized