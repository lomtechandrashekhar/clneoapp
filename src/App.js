import Navbar from './component/Navbar';
import LoginSignup from './component/LoginSignup';
import {BrowserRouter as Router , Route,Switch} from "react-router-dom"
import {useEffect,useState} from "react"
import PageNotFound from "./component/PageNotFound"
import Home from "./Home"
import CakeDetails from "./CakeDetails"
import Search from "./Search"
import Cart from "./Cart"
import Checkout from "./Checkout"
import Logout from "./component/Logout"
import axios from 'axios'

var details ={
	"userName":"CS",
	"projectName":"My cake shop",
}


function App() {
	var [user,setUser]=useState([])
	var [token,setToken]=useState(localStorage.getItem("cltoken"))
	function callme(){
		setToken(localStorage.getItem("cltoken"));
	}
	
	useEffect(()=>{
		
		var base_api_url=process.env.REACT_APP_BASE_URL
		if(token){
			axios({url:base_api_url+"getuserdetails",method:"get",headers:{authtoken:token}}).then((response)=>{
			if(response.data.data){
				setUser(response.data.data)
			}
		},(error)=>{})
		}else{
			setUser([])
		}
	},[token])
  return (
  <div className="clneocontainer">
  <Router>
    <Navbar details={details} x="10" y="10" user={user}></Navbar>
	<Switch>
	<Route exact path="/" component={Home}/>
	<Route exact path="/signup" ><LoginSignup parentfun={callme}/></Route>
	<Route exact path="/cakedetails/:cakeid" component={CakeDetails}></Route>
	<Route exact path="/search" component={Search}></Route>
	<Route exact path="/cart"><Cart/></Route>
	<Route path="/checkout"><Checkout/></Route>
	<Route exact path="/logout"><Logout parentfun={callme}/></Route>
	<Route exact path="/*" component={PageNotFound}></Route>
	</Switch>
	</Router>
	</div>
  );
}

export default App;
