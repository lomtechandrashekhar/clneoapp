function Navbar(props){	
var searchString
let getSearchString = (event) =>{
	searchString=event.target.value 
}
let search =()=>{
	 searchString && console.log(searchString)
}
	return(
	<nav className="navbar navbar-expand-lg navbar-light bg-light">
	<div className="container">
  <a className="navbar-brand" href="#">{props.details.projectName}</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <a className="nav-link" href="#">{props.details.userName}</a>
      </li>      
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={getSearchString}
	  />
      <button className="btn btn-outline-success my-2 my-sm-0" type="button" onClick={search}>Search</button>
    </form>
  </div>
  </div>
</nav>
	);
}

export default Navbar;