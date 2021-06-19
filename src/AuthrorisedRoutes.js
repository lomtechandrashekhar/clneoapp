import {Route,Redirect} from "react-router-dom"
import Cart from "./Cart"
import Checkout from "./Checkout"
import Account from  "./Account"
function AuthrorisedRoutes(props) {
	if(props.isLoggedIn){
  return (<>
	<Route exact path="/cart" component={Cart}></Route>
	<Route path="/checkout" component={Checkout}></Route>
	<Route path="/account" component={Account}></Route>
	</>
	)}else{
		return(<Redirect to={props.redirect}/>)
	};
}

export default AuthrorisedRoutes;
