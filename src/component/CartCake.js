import {Link} from "react-router-dom"
function CartCake(props){
	return(
	<div class="row border-top border-bottom" id={props.index}>
                <div class="row main align-items-center">
                    <div class="col-2"><Link to={"/cakedetails/"+props.cake.cakeid}><img class="img-fluid" src={props.cake.image} alt="Card cap"/></Link></div>
                    <div class="col">
                        <div class="row text-muted">Name: </div>
                        <div class="row">{props.cake.name}</div>
                    </div>
                    <div class="col"> <a href="#">-</a><a href="#" class="border">1</a><a href="#">+</a> </div>
                    <div class="col">&#8377; {props.cake.price} <span class="close">&#10005;</span></div>
                </div>
            </div>
)
}

export default CartCake