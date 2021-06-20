import {Link} from "react-router-dom"
import CapitalizeText from "./CapitalizeText"
import {connect} from "react-redux"

function CartCake(props){
	let decreaseQty=(e)=>{
		e.preventDefault();
	props.dispatch({
		type:"DECREASE_QTY",
		payload:{cakeid:props.cake.cakeid}
	})
	}

	let increaseQty=(e)=>{
		e.preventDefault();
	props.dispatch({
		type:"INCREASE_QTY",
		payload:{...props.cake}
	})
	}

	let removeItemFromCart=(e)=>{
		e.preventDefault();
	props.dispatch({
		type:"REMOVE_CAKE_FROM_CART",
		payload:{cakeid:props.cake.cakeid}
	})
	}


	return(
	<div className="row border-top border-bottom" id={props.index}>
                <div className="row main align-items-center">
                    <div className="col-2"><Link to={"/cakedetails/"+props.cake.cakeid}><img className="img-fluid" src={props.cake.image} alt="Card cap"/></Link></div>
                    <div className="col">
                        <div className="row"><CapitalizeText  capital="ucword">{props.cake.name}</CapitalizeText></div>
                    </div>
                    <div className="col text-center">
										<div>
										{props.iscart && <a href="/" onClick={decreaseQty} >-</a>}
										<span className="border">{props.cake.quantity}</span>
										{props.iscart && <a href="/" onClick={increaseQty} >+</a>}
										</div>
										 </div>
                    <div className="col text-right">&#8377; {props.cake.price}</div>
										{props.iscart && <div className="col text-right"><span className="close" onClick={removeItemFromCart} >&#10005;</span></div>}
								</div>
            </div>
)
}

export default connect()(CartCake)
