import {Route,Redirect} from "react-router-dom"
import Cart from "./Cart"
import Checkout from "./Checkout"
function AuthrorisedRoutes(props) {
	if(props.isLoggedIn){
  return (<>
	<Route exact path="/cart" component={Cart}></Route>
	<Route path="/checkout"><Checkout/></Route>
	</>
	)}else{
		return(<Redirect to={props.redirect}/>)
	};
}

export default AuthrorisedRoutes;
