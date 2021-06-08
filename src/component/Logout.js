import {Redirect} from "react-router-dom"
import {useEffect} from "react"
import {connect} from "react-redux"
function Logout(props){
	useEffect(()=>{
		localStorage.removeItem("cltoken");
	props.parentfun()
	})
	props.dispatch({
		"type":"LOGOUT"
	})
	
	return (<Redirect to="/"/>)
}

export default connect()(Logout)