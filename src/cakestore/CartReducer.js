function CartReducer(state={
	cart:[],
	cartUpdated:0
},action){
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

		case "EMPTYCART":
		state={...state}
		state.cartUpdated=state.cartUpdated+1
		state.cart=[];

		return state

		default: return state

	}

}

export default CartReducer
