import Navbar from './component/Navbar';
import LoginSignup from './component/LoginSignup';
import {BrowserRouter as Router , Route,Switch} from "react-router-dom"
import PageNotFound from "./component/PageNotFound"
import Home from "./Home"
import {useEffect} from "react"
import {connect} from "react-redux"
import CakeDetails from "./CakeDetails"
import Search from "./Search"

import axios from 'axios'
import AuthrorisedRoutes from "./AuthrorisedRoutes"

var details ={
	"userName":"CS",
	"projectName":"My cake shop",
}
axios.interceptors.request.use((request)=>{
	if(request.url.includes("cart") || request.url.includes("checkout")){
		request.headers["authtoken"]=localStorage.cltoken
	}
	return request
},(error)=>{
}
)


function App(props) {

	useEffect(()=>{
		if(props.isLoggedIn){
			let apiUrl=process.env.REACT_APP_BASE_URL+"/cakecart"
			axios({url:apiUrl,method:"post",data:{},headers:{authtoken:props.token}}).then((response)=>{
				if(response.data.data){
					props.dispatch({
						type:"UPDATE_CART",
						payload:{
							cart:response.data.data,
						}
					})
				}
			},(error)=>{})
		}
	},[props.cartUpdated])
	return (
		<div className="clneocontainer">
			<Router>
				<Navbar details={details} x="10" y="10"></Navbar>
				<Switch>
					<Route exact path="/" component={Home}/>
					<Route exact path="/signup" ><LoginSignup/></Route>
					<Route exact path="/cakedetails/:cakeid" component={CakeDetails}></Route>
					<Route exact path="/search" component={Search}></Route>
					<AuthrorisedRoutes isLoggedIn={props.isLoggedIn} redirect="/signup"/>
					<Route exact path="/*" component={PageNotFound}></Route>
				</Switch>
			</Router>
		</div>
	);
}

export default connect(function(state){
	return {
		token:state.AuthReducer.token,
		isLoggedIn:state.AuthReducer.isLoggedIn,
		cart:state.CartReducer.cart,
		cartUpdated:state.CartReducer.cartUpdated
	}
})(App);
