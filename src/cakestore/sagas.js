import {all, call, takeEvery,put} from "redux-saga/effects"
import axios from 'axios'

function AddCake(action){
}



function *AddCakeMiddleware(action,props){
yield call(AddCake,action)
}

function *AddCakeSaga(){
	yield takeEvery("ADD_CAKE",AddCakeMiddleware)
}

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

export default function *RootSagas(){
	yield all([AddCakeSaga(),DecreaseQtySaga(),IncreaseQtySaga(),PlaceOrderSaga()])
}
