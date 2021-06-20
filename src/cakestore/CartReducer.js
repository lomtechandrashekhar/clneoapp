function CartReducer(state={
	cart:[],
	cartUpdated:0,
	address:localStorage.address&& JSON.parse(localStorage.address),
	isAddressFilled:localStorage.isAddressFilled,
},action){
	let defaultAddr={"fname":{value:"","name":"First Name"},"lname":{value:"","name":"Last Name"},"phone":{value:"","name":"Phone"},"address":{value:"","name":"Address1"},"city":{value:"","name":"City"},"pincode":{value:"","name":"Pincode"}}
	if(!localStorage.address){
		state={...state}
		state.address=defaultAddr
		state.isAddressFilled=false
	}
	switch(action?.type){
		case "ADDTOCART":
		state={...state}
		state.cartUpdated=state.cartUpdated+1
		return state

		case "REMOVEFROMCART":
		state={...state}
		return state

		case "UPDATE_CART":
		state={...state}
		state.cart=action.payload.cart
		return state

		case "REMOVE_ONE_CAKE_FROM_CART":
		state={...state}
		state.cartUpdated=state.cartUpdated+1

		return state

		case "REMOVE_CAKE_FROM_CART":
		state={...state}
		state.cartUpdated=state.cartUpdated+1

		return state


		case "EMPTYCART":
		state={...state}
		state.cartUpdated=state.cartUpdated+1
		state.cart=[];

		return state

		case "CLEAR_CHECKOUT":
			state={...state}
			state.cart={}
			state.cartUpdated=state.cartUpdated+1
		state.address=defaultAddr
		state.isAddressFilled=false
		localStorage.removeItem("address")
		localStorage.removeItem("isAddressFilled")
		return state

		case "SAVE_ADDR":
		state={...state}
		state.address=action.payload
		state.isAddressFilled=true
		localStorage.address=JSON.stringify(action.payload)
		localStorage.isAddressFilled=true

		return state

		default: return state

	}

}

export default CartReducer
