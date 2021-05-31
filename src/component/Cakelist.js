import data from './data';
import Cake from './Cake';

function Cakelist(props){
	var cakes=data.map((value,index)=>{
		var cakeobj={name:value.name, image:value.image, price:value.price}
		return(
		<div key={index} className="col-4">
		<Cake cake={cakeobj} index={index}/>
		</div>
	)})
	return cakes
}

export default Cakelist