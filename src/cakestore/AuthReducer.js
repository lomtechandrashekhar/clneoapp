function AuthReducer(state={
	token:localStorage.cltoken,
	username:localStorage.username,
	isLoggedIn:localStorage.cltoken?true:false,
	email:localStorage.email
},action){
	switch(action?.type){
		case "LOGIN":
		state={...state}
		state.token=action.payload?.token
		state.username=action.payload?.username
		state.email=action.payload?.email
		state.isLoggedIn=true
		return state

		case "LOGOUT":
		state={...state}
		localStorage.clear()
		state.token=undefined
		state.username=undefined
		state.isLoggedIn=false
		return state

		default: return state

	}

}

export default AuthReducer
