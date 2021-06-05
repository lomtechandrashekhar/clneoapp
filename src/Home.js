import Carousel from './component/Carousel';
import Cakelist from './component/Cakelist'

function Home(props) {
  return (
  <div className="clneocontainer">
	<Carousel></Carousel>
	<Cakelist/>
	</div>
  );
}

export default Home;
