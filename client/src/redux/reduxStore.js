import {applyMiddleware, combineReducers, createStore} from 'redux'
import fileReducer from './fileReducer'
import userReducer from './userReducer'
import uploaderReducer from './uploaderReducer'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';

const reducers = combineReducers({
    files: fileReducer,
    user: userReducer,
    uploader: uploaderReducer
})

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))

export default store