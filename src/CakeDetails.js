import {Link,useParams} from "react-router-dom"
import {useEffect, useState } from "react"
import axios from 'axios'
import CapitalizeText from "./component/CapitalizeText"
import Cake from './component/Cake';

function CakeDetails(props){
	let param =useParams();
	var [cake, setCake]=useState([]);
	var [morecakes, setMoreCakes]=useState([]);
	var [ratingWidth, setRatingWidth]=useState(0);
	var [quantity, setQty]=useState(1);
	let starWidth=(value)=>{
		
		let ratingString=(Math.max(0, (Math.min(5, parseFloat(value)))) * 16)+"px";
		setRatingWidth(ratingString)
	}
	let quantityChange=(e)=>{
		setQty(e.target.value);
	}
	let getMoreCakes=(ingredients)=>{
		let type=""
	ingredients.map((value,index)=>{
			type+=value.trim()+"|"
			return value
		})
		let searchUrl=apiUrl2+"?q="+type.replace(new RegExp("[|]+$"), "")
		axios({url:searchUrl,method:"get"}).then((response)=>{
			if(response.data.data){
				setMoreCakes(response.data.data)
			}
		},(error)=>{})
	}
	let apiUrl="https://apibyashu.herokuapp.com/api/cake/"+param.cakeid
	let apiUrl2="https://apibyashu.herokuapp.com/api/searchcakes"
	useEffect (()=>{
		axios({url:apiUrl,method:"get"}).then((response)=>{
			if(response.data.message==="Success"){
				
				setCake(response.data.data)
				starWidth(response.data.data.ratings)
				getMoreCakes(response.data.data.ingredients)
			}
		},(error)=>{})
	},[param.cakeid]);
	
	return(
    <div className="border p-3 main-section">	
	<div className="container">
        <div className="row hedding m-0 pl-3 pt-0 pb-3">
		<nav>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                <li className="breadcrumb-item"><Link to="#">Cakes</Link></li>
								{cake.name && <li className="breadcrumb-item active"><CapitalizeText capital="ucword">{cake.name}</CapitalizeText></li>}
                            </ol>
                        </nav>
        </div>
		{!cake.name && <div className="m-0 pl-3 pt-0 pb-3">Loading .....</div>}
	{cake.name && 
	<div>
        <div className="row m-0">
            <div className="col-lg-4 left-side-product-box pb-3">
                <img src={cake.image} className="border p-3" alt={cake.name}/>
            </div>
            <div className="col-lg-8">
                <div className="right-side-pro-detail border p-3 m-0">
                    <div className="row">
                        <div className="col-lg-12">						
                            <h2 className="m-0 p-0"><CapitalizeText>{cake.name}</CapitalizeText></h2>
							<span>By {cake.owner.name}</span>
                        </div>
						<div className="content mt-2 mb-2 col-lg-12">
        <div className="ratings"><strong>Ratings: </strong> <span className="product-rating">{cake.ratings}</span><span>/5</span>
            <span className="stars"><span style={{width:ratingWidth}}></span></span>
			 <span>({cake.reviews} reviews)</span>
        </div>
    </div>
						<div className="col-lg-12"></div>
                        <div className="col-lg-12">
                            <p className="m-0  pb-2 price-pro">&#8377;{cake.price}</p>
                            <hr className="p-0 m-0"/>
                        </div>
                        <div className="col-lg-12 pt-2">
                            <h5>Cake Detail</h5>
                            <span><CapitalizeText capital="ucword">{cake.description}</CapitalizeText></span>
                            <hr className="m-0 pt-2 mt-2"/>
                        </div>
						<div className="col-lg-12">
	<nav>
  <div className="nav nav-tabs" id="nav-tab" role="tablist">
    <a className="nav-item nav-link active" id="nav-more-details-tab" data-toggle="tab" href="#nav-more-details" role="tab" aria-controls="nav-more-details" aria-selected="true">More Details</a>
    <a className="nav-item nav-link" id="nav-ingredients-tab" data-toggle="tab" href="#nav-ingredients" role="tab" aria-controls="nav-ingredients" aria-selected="false">Ingredients</a>
  </div>
</nav>
<div className="tab-content" id="nav-tabContent">
  <div className="tab-pane fade show active p-4 bg-white" id="nav-more-details" role="tabpanel" aria-labelledby="nav-more-details-tab">
  <p className="tag-section"><strong>Weight : </strong> {cake.weight} Kg</p>
  <p className="tag-section"><strong>Flavour : </strong> {cake.flavour}</p>
  <p className="tag-section"><strong>Occasion : </strong> <CapitalizeText>{cake.type}</CapitalizeText></p>
  </div>
  <div className="tab-pane p-4 fade bg-white" id="nav-ingredients" role="tabpanel" aria-labelledby="nav-ingredients-tab">
  <ol className="pl-3">
  {cake.ingredients.map((value,index)=>{
	return(
	<li key={index}><CapitalizeText>{value}</CapitalizeText></li>
	)   
  })}
  </ol>
  </div>
</div>
</div>
</div>
                        <div className="col-lg-12">
                            <h6>Quantity :</h6>
                            <input type="number" name="quntity" className="form-control text-center w-100" value={quantity} onChange={quantityChange}/>
                        </div>
                        <div className="col-lg-12 mt-3">
                            <div className="row">
                                <div className="col-lg-12 pb-2">
                                    <a href="/cart" className="btn btn-danger w-100">Add To Cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
		}
		{!morecakes && <div className="m-0 pl-3 pt-0 pb-3">Loading .....</div>}
		{morecakes.length>0 &&
		<>
        <div className="row">
            <div className="col-lg-12 text-center pt-3">
                <h4>Similar Cakes</h4>
            </div>
        </div>
        <div className="row mt-3 p-0 text-center pro-box-section">
          {morecakes.map((value,index)=>{
			  if(value.cakeid===cake.cakeid){
				  return true
			  }
		let cakeobj={name:value.name, image:value.image, price:value.price,cakeid:value.cakeid}
		return(
		<div key={index} className="col-3">
		<Cake cake={cakeobj} index={index}/>
		</div>
	)})}
		</div>
		</>
		}
    </div>
</div>
	)
}

export default CakeDetails