import {useState,useEffect} from "react"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import OrderDetails from "./OrderDetails"

function Orders(props){
	return (
		<div className="mt-4 mb-4 container cart-container"><div className="card">
		<div className="row">
		<div className="col-md-12 cart">
		<div className="title">
		<div className="row">
		<div className="col">
		<h2>Orders</h2>
		</div>
		<div className="col align-self-center text-right text-muted">{props.orders.length} orders</div>
		</div>
		</div>

			{props.orders.length>0 &&<div class="accordion" id="accordionExample">
		{props.orders.map((value,index)=>{
			return(
			<OrderDetails  key={index} order={value} index={index}/>
			)
		})}
	</div>}

		</div>
		</div>
		</div>
		</div>)
}
export default connect(function(state){
	return {orders:state.AccountReducer.orders}
})(Orders)
