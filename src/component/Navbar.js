import {useState, useEffect} from "react"
import {Link,withRouter} from "react-router-dom"
import QueryString from "query-string"

function Navbar(props){	
/*let [loginlogut,setloginlogut]=useState("Login")*/
var query=QueryString.parse(props.location.search)
let [searchString,setSearchString]=useState(query.q)
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
	console.log(url)
	searchString && props.history.push(url)
	 searchString && props.history.go(url)
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
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" value={searchString} onChange={getSearchString}
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

export default withRouter(Navbar);