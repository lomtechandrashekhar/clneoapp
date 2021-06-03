import {useState} from "react"
import {Link} from "react-router-dom"

function Navbar(props){	
let [loginlogut,setloginlogut]=useState("Login")
var searchString
let getSearchString = (event) =>{
	searchString=event.target.value 
}
let toggleloginlogout=(event)=>{
	
	var currentVal=event.target.innerHTML
	if(currentVal==="Login"){
		setloginlogut("Logout")
	}else{
		setloginlogut("Login")
	}
}
let search =()=>{
	 searchString && console.log(searchString)
}
	return(
	<nav className="navbar navbar-expand-lg navbar-light bg-light">
	<div className="container">
  <Link className="navbar-brand" to="/">{props.details.projectName}</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <a className="nav-link" href="/">{props.details.userName}</a>
      </li>      
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={getSearchString}
	  />
      <button className="btn btn-outline-success my-2 my-sm-0" type="button" onClick={search}>Search</button>
    </form>
	{/*<div ><span onClick={toggleloginlogout}>{loginlogut}</span></div>*/}
	<div><Link to="/signup">Login / Signup </Link></div>
  </div>
  </div>
</nav>
	);
}

export default Navbar;