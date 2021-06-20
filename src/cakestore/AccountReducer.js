function AccountReducer(state={
	orderUpdated:0,
	cakeAdded:0,
	orders:[],
	cake:{
    "cakeImage":{value:"","name":"Cake image","required":"required"},
    "cakeName":{value:"","name":"Cake Name","required":"required"},
    "price":{value:"","name":"Price","required":"required"},
    "description":{value:"","name":"Cake Description"},
    "weight":{value:"","name":"Weight","required":"required"},
    "type":{value:"","name":"Cake Type"},
    "flavour":{value:"","name":"Flavour"},
    "eggless":{value:"","name":"Eggless"},
    "ingredients":{value:[""],"name":"Ingredients"},
  }
},action){
	switch(action?.type){
		case "UPDATE_ORDER":
		state={...state}
		state.orders=action.payload.cakeorders
		return state

		case "CLEAR_CAKE":
		state={...state}
		state.cakeAdded=state.cakeAdded+1
		return state

		default: return state

	}

}

export default AccountReducer
