import Navbar from './component/Navbar';
import LoginSignup from './component/LoginSignup';
import {BrowserRouter as Router , Route,Switch} from "react-router-dom"
import PageNotFound from "./component/PageNotFound"
import Home from "./Home"
import {useEffect} from "react"
import {connect} from "react-redux"
import CakeDetails from "./CakeDetails"
import Search from "./Search"
import Cart from "./Cart"
import Checkout from "./Checkout"
import axios from 'axios'

var details ={
	"userName":"CS",
	"projectName":"My cake shop",
}


function App(props) {
	useEffect(()=>{
	if(props.isLoggedIn){
		let apiUrl="https://apibyashu.herokuapp.com/api/cakecart"
		axios({url:apiUrl,method:"post",data:{},headers:{authtoken:props.token}}).then((response)=>{
			console.log(response)
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
	},[props.isLoggedIn])
  return (
  <div className="clneocontainer">
  <Router>
    <Navbar details={details} x="10" y="10"></Navbar>
	<Switch>
	<Route exact path="/" component={Home}/>
	<Route exact path="/signup" ><LoginSignup/></Route>
	<Route exact path="/cakedetails/:cakeid" component={CakeDetails}></Route>
	<Route exact path="/search" component={Search}></Route>
	<Route exact path="/cart" component={Cart}></Route>
	<Route path="/checkout"><Checkout/></Route>
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
	}
})(App);
