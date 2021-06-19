import {createStore,combineReducers,applyMiddleware} from "redux"
import AuthReducer from "./AuthReducer"
import CartReducer from "./CartReducer"
import AccountReducer from "./AccountReducer"
import thunk from "redux-thunk"
import CreateSaga from "redux-saga"
import RootSagas from "./sagas"

let middle=store=>next=>action=>{
	console.log("Action "+action.type+" is called at "+ new Date())
	if(action.type==="LOGOUT"){
		store.dispatch({
					type:"EMPTYCART",
				})
	}
	next(action)
}

let SagaMiddleware=CreateSaga()

let reducers=combineReducers({AuthReducer,CartReducer,AccountReducer})
let store = createStore(reducers,applyMiddleware(middle,thunk,SagaMiddleware))
SagaMiddleware.run(RootSagas)

export default store
