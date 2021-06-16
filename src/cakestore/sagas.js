import {all, call, takeEvery} from "redux-saga/effects"

function AddCake(action){
}

function Login(action){
}

function *AddCakeMiddleware(action,props){
	yield call(AddCake,action)
}

function *AddCakeSaga(){
	yield takeEvery("ADD_CAKE",AddCakeMiddleware)
}

function *LoginMiddleware(action,props){
	yield call(Login,action)
}

function *LoginSaga(){
	yield takeEvery("LOGIN",LoginMiddleware)
}

export default function *RootSagas(){
	yield all([AddCakeSaga(),LoginSaga() ])
}
