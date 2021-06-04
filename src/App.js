import Navbar from './component/Navbar';
import LoginSignup from './component/LoginSignup';
import {BrowserRouter as Router , Route,Switch} from "react-router-dom"
import PageNotFound from "./component/PageNotFound"
import Home from "./Home"
import CakeDetails from "./CakeDetails"
import Search from "./Search"

var details ={
	"userName":"CS",
	"projectName":"My cake shop",
}

function App() {
  return (
  <div className="clneocontainer">
  <Router>
    <Navbar details={details} x="10" y="10" phoneNum="123"></Navbar>
	<Switch>
	<Route exact path="/" component={Home}/>
	<Route exact path="/signup" component={LoginSignup}></Route>
	<Route exact path="/cakedetails/:cakeid" component={CakeDetails}></Route>
	<Route exact path="/search" component={Search}></Route>
	<Route exact path="/*" component={PageNotFound}></Route>
	</Switch>
	</Router>
	</div>
  );
}

export default App;
