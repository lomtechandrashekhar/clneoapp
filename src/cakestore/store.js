import {createStore,combineReducers} from "redux"
import AuthReducer from "./AuthReducer"
import CartReducer from "./CartReducer"

let reducers=combineReducers({AuthReducer,CartReducer})
let store = createStore(reducers)

export default store