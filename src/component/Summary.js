import {Link} from "react-router-dom"
import {connect} from "react-redux"
import CartCake from "./CartCake"

function Summary(props){
	let carttotal=0
	if(!props.isLoggedIn){
		console.log(props)
		alert("Please login before viewing cart")
		props.history.push('/signup')
		return <></>
	}else{
		return(
			<div className="mt-4 mb-4 container cart-container"><div className="card">
			<div className="row">
			<div className="col-md-12 cart">
			<div className="title">
			<div className="row">
			<div className="col">
			<h2>Summary</h2>
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
				</div>
				</div>
			}
			{props.cart.length>0 && props.cart.map((value,index)=>{
				carttotal+=value.price;
				return(
					<CartCake  key={index} cake={value} index={index} iscart={false}/>
				)
			})}
			<div className="row" style={{"borderTop": "1px solid rgba(0,0,0,.1)", "padding": "2vh 0"}}>
			<div className="col">Shipping</div>
			<div className="col text-right">Free-Delivery- &#8377;0.00</div>
			</div>
			<div className="row" style={{"borderTop": "1px solid rgba(0,0,0,.1)", "padding": "2vh 0"}}>
			<div className="col">TOTAL PRICE</div>
			<div className="col text-right">&#8377; {carttotal}</div>
			</div>
			<div className="row" style={{"borderTop": "1px solid rgba(0,0,0,.1)", "padding": "2vh 0"}}>
			<div className="col text-right"><Link to="/checkout/address"> <button className="btn">Next</button></Link></div>
			</div>
			</div>
			</div>
			</div>
			</div>
		)
	}
}

export default connect(function(state){
	return {cart:state.CartReducer.cart,isLoggedIn:state.AuthReducer?.isLoggedIn,cartUpdated:state.CartReducer.cartUpdated}
})(Summary)
