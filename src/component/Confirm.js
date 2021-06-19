import {connect} from "react-redux"
function Confirm(props){
	if(!props.isAddressFilled){
		props.history.push("/checkout/address")
	}
	let carttotal=0
	for(let key in props.cart){
		console.log(props.cart[key].price);
		carttotal+=props.cart[key].price;
	}
	let fullname= props.address.fname.value
	let city= props.address.city.value
	let pincode= props.address.pincode.value
	let phone= props.address.phone.value
	let address= props.address.address.value
	let placeOrder=()=>{
		props.dispatch({
			type:"PLACE_ORDER",
			payload:{
			 name: fullname,
			 city: city,
			 pincode: pincode,
			 address: address,
			 phone: phone,
			 price: carttotal,
			 cakes: props.cart
		 }
		})
	}
	return(
		<div className="mt-4 mb-4 container cart-container">
			<div className="card">
				<div className="row">
					<div className="col-md-12 cart">
						<div className="title">
						<div className="row">
							<div className="col">
								<h2>Order Confirmation</h2>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col">
							<h6>Shipping Address:</h6>
							<div>Name: {fullname}</div>
							<div>Phone: {phone}</div>
							<div>{address+", "+ city+", "+ pincode}</div>
						</div>
						<hr/>
						<div className="col">
						<h6>Amount to pay: </h6>&#8377; {carttotal}
							<h6>Delivery: </h6>Cash On delivery
						</div>

						<hr/>
						<br/>
						<button className="btn btn-primary btn-lg btn-block" onClick={placeOrder}>Place Order</button></div>
					</div>
				</div>
			</div>
		</div>
	)

}

export default connect((state)=>{
	return {cart:state.CartReducer.cart,address:state.CartReducer.address,isAddressFilled:state.CartReducer.isAddressFilled}
})(Confirm)
