import {Link,Route,Redirect} from "react-router-dom"
import React from "react"
import Summary from "./component/Summary"
import Address from "./component/Address"
import Confirm from "./component/Confirm"
import {useState,useEffect} from "react"
import {connect} from "react-redux"

function Checkout(props) {
  console.log(props.history)
  if(props.cart.length<=0){
    props.history.push("/")
  }
  let [state,setState]=useState({"fname":{value:"","name":"First Name"},"lname":{value:"","name":"Last Name"},"phone":{value:"","name":"Phone"},"address":{value:"","name":"Address1"},"city":{value:"","name":"City"},"pincode":{value:"","name":"Pincode"}})
	useEffect(()=>{
		setState(props.address)
	},[])
  return (
<div className="mt-4 container">
<div className="row">
<div className="col-12">
<h2>Checkout</h2>
</div>
</div>
	<div className=" bd-example bd-example-tabs">
		<div className="row checkout-row">
				<div className="col-3 summary">
					<div className="nav flex-column pt-3 nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
						<Link to="/checkout/summary" className="text-decoration-none border p-2 ">Summary</Link>
						<Link to="/checkout/address" className="text-decoration-none border p-2">Address</Link>
						{props.isAddressFilled ?<Link to="/checkout/confirm" className="text-decoration-none border p-2 ">Confirm</Link>: <Link to="/checkout/address"  className="text-decoration-none border p-2 ">Confirm</Link>}
					</div>
				</div>
				<div className="col-9   bg-light">
					<div className="tab-content" id="v-pills-tabContent">
						<Route exact path="/checkout" ><Redirect to="/checkout/summary"/></Route>
						<Route exact path="/checkout/summary" component={Summary}/>
						<Route exact path="/checkout/address" ><Address address={state} setState={setState} ></Address></Route>
						<Route exact path="/checkout/confirm" component={Confirm}/>
					</div>
				</div>
		</div>
	</div>
</div>
  )
}

export default connect(function(state){
	return {address:state.CartReducer.address,isAddressFilled:state.CartReducer.isAddressFilled,cart:state.CartReducer.cart}
})(Checkout);
