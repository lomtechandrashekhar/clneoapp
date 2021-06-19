import {Link} from "react-router-dom"
import CapitalizeText from "./CapitalizeText"
import CartCake from "./CartCake"
import {connect} from "react-redux"

function OrderDetails(props){
	console.log(props.order)
	let status=props.order.pending?"Pending":(props.order.completed?"Completed":"")
	let showclassName=""
	if(props.index==0){
		showclassName="show"
	}
	var d = new Date(props.order.orderdate);
var dateString = d.toDateString();
	let carttotal=0
	return(
		<div className="card mb-1">
			<div className="card-header" id={"heading"+props.index}>
					<div className="bg-light text-dark row" data-toggle="collapse" data-target={"#collapse"+props.index} aria-expanded="true" aria-controls={"collapse"+props.index}>
						<div className="col-6">Order #{props.order.orderid}</div> <div className="col-6 text-right">Order Date: {dateString}</div>
					</div>
			</div>
			<div id={"collapse"+props.index} className={"collapse "+showclassName} aria-labelledby={"heading"+props.index} data-parent="#accordionExample">
				<div className="card-body">
				<div className="row">
				<div class="col">
				<div class="">
				<h6>Order Information</h6>
				<div>Payment mode: <CapitalizeText>{props.order.mode}</CapitalizeText></div>
				<div>Status: {status}</div>
				</div>
				<div class="mt-4">
				<h6>Shipping Address:</h6>
				<div>{props.order.name}</div>
				<div>Phone: {props.order.phone}</div>
				<div>{props.order.address}, {props.order.city}, {props.order.pincode}</div>
				</div>
				</div>
				<div class="col-9"><h6>Order Items:</h6>
				{
				 props.order.cakes.length>0 && props.order.cakes.map((value,index)=>{
					carttotal+=value.price;
					return(
						<CartCake  key={index} cake={value} index={index} iscart={false}/>
					)
				})}
				<div className="row" style={{"borderTop": "1px solid rgba(0,0,0,.1)", "padding": "2vh 0"}}>
				<div className="col">TOTAL PRICE</div>
				<div className="col text-right">&#8377; {carttotal}</div>
				</div>
				</div>
				</div>
				</div>
			</div>
		</div>



	)
// return(
// 	<div className="row border-top border-bottom" id={props.index}>
//                 <div className="row main align-items-center">
//                     <div className="col-2"><Link to={"/cakedetails/"+props.cake.cakeid}><img className="img-fluid" src={props.cake.image} alt="Card cap"/></Link></div>
//                     <div className="col">
//                         <div className="row"><CapitalizeText  capital="ucword">{props.cake.name}</CapitalizeText></div>
//                     </div>
//                     <div className="col text-center">
// 										<div>
// 										{props.iscart && <a href="/" onClick={decreaseQty} >-</a>}
// 										<span className="border">{props.cake.quantity}</span>
// 										{props.iscart && <a href="/" onClick={increaseQty} >+</a>}
// 										</div>
// 										 </div>
//                     <div className="col text-right">&#8377; {props.cake.price}</div>
// 										{props.iscart && <div className="col text-right"><span className="close">&#10005;</span></div>}
// 								</div>
//             </div>
// )
}

export default connect()(OrderDetails)
