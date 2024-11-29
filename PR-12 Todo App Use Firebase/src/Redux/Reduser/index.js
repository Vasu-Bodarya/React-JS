import { combineReducers } from 'redux'
import todoReducer from './TodoRedusers'


const rootReduser = combineReducers({
    todo : todoReducer

})
export default rootReduser;