import {Link} from "react-router-dom"
import {connect} from "react-redux"
import CartCake from "./component/CartCake"

function Cart(props) {
	let carttotal=0
	if(!props.isLoggedIn){
		console.log(props)
		alert("Please login before viewing cart")
		props.history.push('/signup')
		return <></>
	}else{
		return (

			<div className="mt-4 container cart-container"><div className="card">
			<div className="row">
			{props.cart.length==0 &&
				<div class="col-md-12 cart">
				<div class="title">
				<div class="row">
				<div class="col">
				<h4><b>Shopping Cart</b></h4>
				</div>
				<div class="col align-self-center text-right text-muted">0 items</div>
				</div>
				</div>
				<div class="row">
				<div class="col">
				<p>Cart is empty click here to go to shop</p>
				</div>
				</div>
				<div class="back-to-shop">
				<a href="/"> <i class="fa fa-arrow-left"></i><span class="text-muted">Back to shop</span></a>
				</div>
				</div>
			}
{props.cart.length>0 && <>
			<div className="col-md-8 cart">
			<div className="title">
			<div className="row">
			<div className="col">
			<h4><b>Shopping Cart</b></h4>
			</div>
			<div className="col align-self-center text-right text-muted">{props.cart.length} items</div>
			</div>
			</div>
			{props.cart.length>0 &&
				<div class="row border-top border-bottom">
				<div class="row main align-items-center">
				<div class="col-2">Image</div>
				<div class="col">Name: </div>
				<div class="col text-center">Qty:</div>
				<div class="col text-right">Price</div>
				<div class="col text-right">Action</div>
				</div>
				</div>
			}
			{props.cart.length>0 &&
				props.cart.map((value,index)=>{
					carttotal+=value.price;
					return(
						<CartCake  key={index} cake={value} index={index} iscart={true}/>
					)
				})}
				<div className="back-to-shop"> <Link to="/"> <i className="fa fa-arrow-left"></i><span className="text-muted">Back to shop</span></Link></div>
				</div>
				<div className="col-md-4 summary">
				<div>
				<h5><b>Summary</b></h5>
				</div>
				<hr/>
				<div className="row">
				<div className="col" style={{"paddingLeft":0}}>ITEMS {props.cart.length}</div>
				<div className="col text-right">&#8377; {carttotal}</div>
				</div>
				<form>
				<p>SHIPPING</p> <select>
				<option className="text-muted">Free-Delivery- &#8377;0.00</option>
				</select>
				</form>
				<div className="row" style={{"borderTop": "1px solid rgba(0,0,0,.1)", "padding": "2vh 0"}}>
				<div className="col">TOTAL PRICE</div>
				<div className="col text-right">&#8377; {carttotal}</div>
				</div> <Link to="/checkout"> <button className="btn">CHECKOUT</button></Link>
				</div>
				</>
			}
				</div>
				</div>
				</div>
			);
		}
	}

	export default connect(function(state){
		return {cart:state.CartReducer.cart,isLoggedIn:state.AuthReducer?.isLoggedIn,cartUpdated:state.CartReducer.cartUpdated}
	})(Cart);
