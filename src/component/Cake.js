import {Link} from "react-router-dom"
function Cake(props){
	return(
	<div className="card mt-4" id={props.index}>
  <Link to={"/cakedetails/"+props.cake.cakeid} style={{width: "100%"}}><img className="card-img-top" src={props.cake.image} alt="Card cap" style={{maxHeight:"190px"}}/></Link>
  <div className="card-body">
    <h6 className="card-title">Name : {props.cake.name}</h6>
    <p className="card-text">Price : {props.cake.price}</p>
		{props.cake.discount && <p className="card-text">Discount: {props.cake.discount}</p>}
  </div>
</div>
)
}

export default Cake