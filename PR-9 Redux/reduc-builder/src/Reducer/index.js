import { combineReducers } from "redux";
import CrudReducer from "./CrudReducer";

const rootReducer = combineReducers({
   
    crud: CrudReducer
})
export default rootReducer