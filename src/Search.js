import QueryString from "query-string"
import {useEffect, useState } from "react"
import axios from 'axios'
import Cake from './component/Cake';

function Search(props){
	var query=QueryString.parse(props.location.search);
	var [cakes, setCakes]=useState([]);
	useEffect (()=>{
		let searchUrl
		if(query) {searchUrl=process.env.REACT_APP_BASE_URL+"/searchcakes?q="+query.q
		axios({url:searchUrl,method:"get"}).then((response)=>{
			if(response.data.data){
				setCakes(response.data.data)
			}
		},(error)=>{})
		}
	},[query.q]);
	
	return (
	<div className="container mt-4 cakelist ">
<div className="row">
    <div className="mb20 col-md-12">
		<h1>Search Results</h1>
		<h2 className="lead"><strong className="text-danger">{cakes.length}</strong> Cakes were found for the search <strong className="text-danger">{query&&query.q}</strong></h2>								
	</div>

    <section className="col-xs-12 col-sm-6 col-md-12">
	<div className="row">
	{cakes.map((value,index)=>{
		let cakeobj={name:value.name, image:value.image, price:value.price,cakeid:value.cakeid}
		return(
		<div key={index} className="col-3">
		<Cake cake={cakeobj} index={index}/>
		</div>
	)})}
	</div>

	</section>
	</div>
</div>
	)
	
}

export default Search