import {useState, useEffect} from "react"
import {Link,withRouter} from "react-router-dom"
import QueryString from "query-string"
import CapitalizeText from "./CapitalizeText"
import {connect} from "react-redux"

function Navbar(props){
/*let [loginlogut,setloginlogut]=useState("Login")*/
let logout=(e)=>{
	e.preventDefault()
	props.dispatch({
					type:"LOGOUT",
	})
}
var query=QueryString.parse(props.location.search)
let querystring=(query&&query.q)?query.q:""
let [searchString,setSearchString]=useState(querystring)
useEffect (()=>{
	},[]);
let getSearchString = (event) =>{
	setSearchString(event.target.value )


}
/* toggleloginlogout=(event)=>{

	var currentVal=event.target.innerHTML
	if(currentVal==="Login"){
		setloginlogut("Logout")
	}else{
		setloginlogut("Login")
	}
}*/
let search =(e)=>{
	e.preventDefault()

	var url="/search?q="+searchString
	searchString && props.history.push(url)
}
	return(
	<nav className="navbar navbar-expand-lg navbar-light bg-light">
	<div className="container">
	<div className="row w-100 d-flex">
	<div className="col-4 text-left">
  <Link className="navbar-brand" to="/">{props.details.projectName}</Link>
</div>
<div className="col-4 text-center">
    <form className="form-inline my-2 my-lg-0 justify-content-center">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" value={searchString} onChange={getSearchString}
	  />
      <button className="btn btn-outline-success my-2 my-sm-0" type="button" onClick={search}>Search</button>
    </form>
	</div>
	{/*<div ><span onClick={toggleloginlogout}>{loginlogut}</span></div>*/}

	<div className="col-4 d-flex align-items-center flex-row-reverse">
	{props.isLoggedIn &&
		<><div className="dropdown d-inline-block">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Hi {props.username && <CapitalizeText>{props.username}</CapitalizeText>},
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <Link to="/account" className="d-block p-2">My Account</Link>
	<Link to="/account/orders" className="d-block p-2">My Orders</Link>
	<a onClick={logout} href="/" className="d-block p-2">Logout</a>
  </div>
</div><Link to="/cart" className="mr-3"><i className="fa fa-shopping-cart"></i></Link>
{(props.email=="lomtechandrashekhar@gmail.com" || props.email=="ashu.lekhi0540@gmail.com")&& <Link to="/account/addcake" className="mr-3">Admin</Link>}
</>
		}
	{!props.isLoggedIn && <Link to="/signup">Login / Signup </Link>}
	</div>
	</div>
  </div>
</nav>
	);
}
let NavbarComponent= withRouter(Navbar)
export default connect(function(state){
	return {
		username:state.AuthReducer.username,
		isLoggedIn:state.AuthReducer.isLoggedIn,
		email:state.AuthReducer.email
	}
})(NavbarComponent);
