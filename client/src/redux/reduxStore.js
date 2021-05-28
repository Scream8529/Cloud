import {combineReducers, createStore} from 'redux'
import fileReducer from './fileReducer'
import userReducer from './userReducer'

const reducers = combineReducers({
    file: fileReducer,
    user: userReducer
})

const store = createStore(reducers)

export default store