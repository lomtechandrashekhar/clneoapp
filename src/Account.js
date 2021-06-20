import {Link,Route,Redirect} from "react-router-dom"
import React from "react"
import Summary from "./component/AccountSummary"
import Orders from "./component/Orders"
import {useState,useEffect} from "react"
import {connect} from "react-redux"
import AddCake from "./component/AddCake"

function Account(props) {
  return (
<div className="mt-4 container">
<div className="row">
<div className="col-12">
<h2>My Account</h2>
</div>
</div>
	<div className=" bd-example bd-example-tabs">
		<div className="row checkout-row mt-4">
      <nav className="nav">
        <Link to="/account/summary" className="text-decoration-none border p-2 ">My Account</Link>
        <Link to="/account/orders" className="text-decoration-none border p-2">Orders</Link>
</nav>


      </div>
      <div className="row checkout-row">
				<div className="col-12   bg-light">
					<div className="tab-content" id="v-pills-tabContent">
						<Route exact path="/account" ><Redirect to="/account/summary"/></Route>
						<Route exact path="/account/summary" component={Summary}/>
						<Route exact path="/account/orders" component={Orders}></Route>
            {(props.email=="lomtechandrashekhar@gmail.com" || props.email=="ashu.lekhi0540@gmail.com") && <Route exact path="/account/addcake" component={AddCake}></Route>}
					</div>
				</div>
		</div>
	</div>
</div>
  )
}

export default connect(function(state){
	return {address:state.CartReducer.address,isAddressFilled:state.CartReducer.isAddressFilled,cart:state.CartReducer.cart,email:state.AuthReducer.email}
})(Account);
