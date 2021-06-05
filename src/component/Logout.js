import {Redirect} from "react-router-dom"
import {useEffect} from "react"
function Logout(props){
	useEffect(()=>{
		localStorage.removeItem("cltoken");
	props.parentfun()
	})
	
	return (<Redirect to="/"/>)
}

export default Logout