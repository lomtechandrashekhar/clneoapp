import {all, call, takeEvery,put} from "redux-saga/effects"
import axios from 'axios'


function DecreaseQty(action){
	let apiUrl=process.env.REACT_APP_BASE_URL+"/removeonecakefromcart"
	return axios({url:apiUrl,method:"post", data:{cakeid:action.payload.cakeid}})
}

function *DecreaseQtyMiddleware(action,props){
	var result=	yield call(DecreaseQty,action)
			if(result.data.message==="Removed  item from cart"){
				yield put({type:"REMOVE_ONE_CAKE_FROM_CART"})
			}
			alert(result.data.message)
}

function *DecreaseQtySaga(){
	yield takeEvery("DECREASE_QTY",DecreaseQtyMiddleware)
}

function *RemoveItemFromCartMiddleware(action,props){
	let apiUrl=process.env.REACT_APP_BASE_URL+"/removecakefromcart"
	var response=	yield axios({url:apiUrl,method:"post", data:{cakeid:action.payload.cakeid}})
	if(response.data.data){
		yield put({type:"REMOVE_CAKE_FROM_CART",payload:{cartdata:response.data.data}})
	}

alert(response.data.message)
}

function *RemoveItemFromCartSaga(){
	yield takeEvery("REMOVE_CAKE_FROM_CART",RemoveItemFromCartMiddleware)
}


function *IncreaseQtyMiddleware(action,props){
	let apiUrl=process.env.REACT_APP_BASE_URL+"/addcaketocart"
	var response=	yield axios({url:apiUrl,method:"post", data:action.payload})
	if(response.data.data){
		yield put({type:"ADDTOCART",payload:{cartdata:response.data.data}})
	}

alert(response.data.message)
}

function *IncreaseQtySaga(){
	yield takeEvery("INCREASE_QTY",IncreaseQtyMiddleware)
}

function *PlaceOrderMiddleware(action,props){

	let apiUrl=process.env.REACT_APP_BASE_URL+"/addcakeorder"
	var response=	yield axios({url:apiUrl,method:"post", data:action.payload})
	console.log(response.data,response.data.order)
	if(response.data.order){
		yield put({type:"CLEAR_CHECKOUT"})
	}

alert(response.data.messageg)
}

function *PlaceOrderSaga(){
	yield takeEvery("PLACE_ORDER",PlaceOrderMiddleware)
}

function *AddCakeMiddleware(action,props){

	let apiUrl=process.env.REACT_APP_BASE_URL+"/addcake"
	var response=	yield axios({url:apiUrl,method:"post", data:action.payload})
	if(response.data.data){
		yield put({type:"CLEAR_CAKE"})
	}

alert(response.data.message)
}

function *AddCakeSaga(){
	yield takeEvery("ADD_CAKE",AddCakeMiddleware)
}

export default function *RootSagas(){
	yield all([RemoveItemFromCartSaga(),DecreaseQtySaga(),IncreaseQtySaga(),PlaceOrderSaga(),AddCakeSaga()])
}
