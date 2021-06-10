function CartReducer(state={
	cart:[]
},action){
	switch(action?.type){
		case "ADDTOCART":
		state={...state}
		console.log(action.payload)
		if(action.payload.cartdata){
		state.cart.push(action.payload.cartdata)
		}
		console.log(state.cart)
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
		state.cart=[];
		return state
		
		default: return state
		
	}
	
}

export default CartReducer