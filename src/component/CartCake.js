import {Link} from "react-router-dom"
import CapitalizeText from "./CapitalizeText"
function CartCake(props){
	return(
	<div className="row border-top border-bottom" id={props.index}>
                <div className="row main align-items-center">
                    <div className="col-2"><Link to={"/cakedetails/"+props.cake.cakeid}><img className="img-fluid" src={props.cake.image} alt="Card cap"/></Link></div>
                    <div className="col">
                        <div className="row text-muted">Name: </div>
                        <div className="row"><CapitalizeText  capital="ucword">{props.cake.name}</CapitalizeText></div>
                    </div>
                    <div className="col"> <a href="/">-</a><a href="/" className="border">{props.cake.quantity}</a><a href="/">+</a> </div>
                    <div className="col">&#8377; {props.cake.price} <span className="close">&#10005;</span></div>
                </div>
            </div>
)
}

export default CartCake