import Navbar from './component/Navbar';
import Carousel from './component/Carousel';
import LoginSignup from './component/LoginSignup';
import Cakelist from './component/Cakelist'
var details ={
	"userName":"CS",
	"projectName":"My cake shop",
}

function App() {
  return (
  <div className="clneocontainer">
    <Navbar details={details} x="10" y="10" phoneNum="123"></Navbar>
	<Carousel></Carousel>
	<LoginSignup/>
	<Cakelist/>
	</div>
  );
}

export default App;
