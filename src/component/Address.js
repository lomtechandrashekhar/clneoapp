import {useState,useEffect} from "react"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"

function Address(props){
	let [error,setError]=useState()
	let [validated,setValidated]=useState()
	let saveAddress=(event)=>{
		let currentError={...error}
		event.preventDefault()
		var isValid=true;
		var phonePatt = /^\d{10}$/;
		for (var key in props.address) {
			if (!props.address.hasOwnProperty(key)) continue;

			if(!props.address[key].value){
				isValid=false
				currentError[key]=props.address[key].name+" is required"
			}else if(key=="phone" && !phonePatt.test(props.address["phone"].value)){
				currentError["phone"]="Phone No. is not valid"
			}else{
				currentError[key]=""
			}
			setError(currentError)
		}
		setValidated("was-validated")
		if(isValid){
			props.dispatch({
				type:"SAVE_ADDR",
				payload:props.address
			})
			props.history.push('/checkout/confirm')
		}
	}
	let handleInputChange=(e)=>{
		let name=e.target.name
		let value=e.target.value
		let currentState={...props.address}
		currentState[name].value=value
		props.setState(currentState)
	}
	return(
		<div className="mt-4 mb-4 container cart-container">
		<div className="card">
		<div className="row">
		<div className="col-md-12 cart">
		<div className="title">
		<div className="row">
		<div className="col">
		<h2>Address</h2>
		</div>
		</div>
		</div>
		<div className="col-md-12 order-md-1">
		<form className={"needs-validation "+ validated} noValidate>
		<div className="row keep-margin mb-3">
		<div className="col-md-6">
		<label htmlFor="firstName">First name</label>
		<div className="input-group">
		<input type="text" className="form-control" id="firstName" name="fname"  onChange={handleInputChange} placeholder="" value={props.address.fname.value} required/>
		{error?.fname &&<div className="invalid-feedback">{error.fname}</div>}
		</div>
		</div>
		<div className="col-md-6">
		<label htmlFor="lastName">Last name</label>
		<div className="input-group">
		<input type="text" className="form-control" id="lastName" name="lname" onChange={handleInputChange}  placeholder="" value={props.address.lname.value} required/>
		{error?.lname &&<div className="invalid-feedback">{error.lname}</div>}
		</div>
		</div>
		</div>

		<div className="mb-3">
		<label htmlFor="phone">Phone</label>
		<div className="input-group">
		<div className="input-group-prepend">
		<span className="input-group-text">+91</span>
		</div>
		<input type="text" className="form-control" id="phone" name="phone" pattern="^\d{10}$" onChange={handleInputChange} value={props.address.phone.value} placeholder="Phone" required/>
		{error?.phone &&<div className="invalid-feedback">{error.phone}</div>}
		</div>
		</div>

		<div className="mb-3">
		<label htmlFor="address">Address</label>
		<div className="input-group">
		<input type="text" className="form-control" id="address" name="address" onChange={handleInputChange} value={props.address.address.value} placeholder="1234 Main St" required/>
		{error?.address &&<div className="invalid-feedback">{error.address}</div>}
		</div>
		</div>

		<div className="mb-3">
		<label htmlFor="city">City</label>
		<div className="input-group">
		<input type="text" className="form-control" id="city"  name="city" onChange={handleInputChange} value={props.address.city.value} placeholder="City" required/>
		{error?.city &&<div className="invalid-feedback">{error.city}</div>}
		</div>
		</div>

		<div className="mb-3">
		<label htmlFor="pincode">Pincode</label>
		<div className="input-group">
		<input type="text" className="form-control" id="pincode"  name="pincode" onChange={handleInputChange} value={props.address.pincode.value} placeholder="pincode" required/>
		{error?.pincode &&<div className="invalid-feedback">{error.pincode}</div>}
		</div>
		</div>

		<hr className="mb-4"/>
		<button className="btn btn-primary btn-lg btn-block" type="button" onClick={saveAddress}>Proceed</button>
		</form>
		</div>
		</div>
		</div>
		</div>
		</div>
	)

}
Address=withRouter(Address)
export default connect()(Address)
