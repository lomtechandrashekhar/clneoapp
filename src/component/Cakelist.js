//import data from './data';
import Cake from './Cake';
import axios from 'axios'
import {useState, useEffect} from "react"

function Cakelist(props){
	var [cakes, setCakes]=useState([])
	let apiUrl="https://apibyashu.herokuapp.com/api/allcakes"
	useEffect(() => {
		axios({url:apiUrl,method:"get"}).then((response)=>{
			setCakes(response.data.data)
		},(error)=>{})
  },[apiUrl]);
	
	
	return (
	
	<div className="container cakelist mt-4">
	<h2>Cake List</h2>
	<div className="row">
	{cakes.map((value,index)=>{
		let cakeobj={name:value.name, image:value.image, price:value.price,cakeid:value.cakeid}
		return(
		<div key={index} className="col-3">
		<Cake cake={cakeobj} index={index}/>
		</div>
	)})}
	</div>
	</div>
	)
}

export default Cakelist