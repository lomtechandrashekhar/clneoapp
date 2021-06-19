function AccountReducer(state={
	orderUpdated:0,
	orders:[]
},action){
	switch(action?.type){
		case "UPDATE_ORDER":
		state={...state}
		state.orders=action.payload.cakeorders
		return state


		default: return state

	}

}

export default AccountReducer
