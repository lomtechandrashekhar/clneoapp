import {Link} from "react-router-dom"
import {connect} from "react-redux"
import CartCake from "./component/CartCake"

function Cart(props) {
	let carttotal=0
  return (
  
  <div className="mt-4 container cart-container"><div class="card">
    <div class="row">
        <div class="col-md-8 cart">
            <div class="title">
                <div class="row">
                    <div class="col">
                        <h4><b>Shopping Cart</b></h4>
                    </div>
                    <div class="col align-self-center text-right text-muted">{props.cart.length} items</div>
                </div>
            </div>
			{props.cart.length>0 && props.cart.map((value,index)=>{
				carttotal+=value.price;
		let cakeobj={name:value.name, image:value.image, price:value.price,cakeid:value.cakeid}
		return(
            <CartCake  cake={cakeobj} index={index}/>
			)
			})}
            <div class="back-to-shop"> <Link to="/"> <i class="fa fa-arrow-left"></i><span class="text-muted">Back to shop</span></Link></div>
        </div>
        <div class="col-md-4 summary">
            <div>
                <h5><b>Summary</b></h5>
            </div>
            <hr/>
            <div class="row">
                <div class="col" style={{"padding-left":0}}>ITEMS {props.cart.length}</div>
                <div class="col text-right">&#8377; {carttotal}</div>
            </div>
            <form>
                <p>SHIPPING</p> <select>
                    <option class="text-muted">Free-Delivery- &#8377;0.00</option>
                </select>
            </form>
            <div class="row" style={{"border-top": "1px solid rgba(0,0,0,.1)", "padding": "2vh 0"}}>
                <div class="col">TOTAL PRICE</div>
                <div class="col text-right">&#8377; {carttotal}</div>
            </div> <Link to="/checkout"> <button class="btn">CHECKOUT</button></Link>
        </div>
    </div>
</div>
</div>
  );
}

export default connect(function(state){
	return {cart:state.CartReducer.cart}
})(Cart);
