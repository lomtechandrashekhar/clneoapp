import {Link} from "react-router-dom"
import {connect} from "react-redux"
import CartCake from "./component/CartCake"

function Cart(props) {
	console.log(props.cartUpdated)
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
        <div className="col-md-8 cart">
            <div className="title">
                <div className="row">
                    <div className="col">
                        <h4><b>Shopping Cart</b></h4>
                    </div>
                    <div className="col align-self-center text-right text-muted">{props.cart.length} items</div>
                </div>
            </div>
			{props.cart.length>0 && props.cart.map((value,index)=>{
				carttotal+=value.price;
		let cakeobj={name:value.name, image:value.image, price:value.price,cakeid:value.cakeid,quantity:value.quantity}
		return(
            <CartCake  key={index} cake={cakeobj} index={index}/>
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
    </div>
</div>
</div>
  );
	}
}

export default connect(function(state){
	return {cart:state.CartReducer.cart,isLoggedIn:state.AuthReducer?.isLoggedIn,cartUpdated:state.CartReducer.cartUpdated}
})(Cart);
