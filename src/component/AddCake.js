import {useState,useEffect} from "react"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"

function AddCake(props){
  let [error,setError]=useState()
  let [cake,setCake]=useState({
    "cakeImage":{value:"","name":"Cake image","required":"required"},
  "cakeName":{value:"","name":"Cake Name","required":"required"},
  "price":{value:"","name":"Price","required":"required"},
  "description":{value:"","name":"Cake Description"},
  "weight":{value:"","name":"Weight","required":"required"},
  "type":{value:"","name":"Cake Type"},
  "flavour":{value:"","name":"Flavour"},
  "eggless":{value:"","name":"Eggless"},
  "ingredients":{value:"","name":"Ingredients"},
})
  	let [validated,setValidated]=useState()
    let handleInputChange=(e)=>{
  		let name=e.target.name
  		let value=e.target.value
  		let currentState={...cake}
  		currentState[name].value=value
  		setCake(currentState)
  	}
    let saveCake=(event)=>{

    }
  return (
    <div className="mt-4 mb-4 container cart-container">
		<div className="card">
		<div className="row">
		<div className="col-md-12 cart">
		<div className="title">
		<div className="row">
		<div className="col">
		<h2>Add A Cake</h2>
		</div>
		</div>
		</div>
		<div className="col-md-12 order-md-1">
		<form className={"needs-validation "+ validated} noValidate>
		<div className="row keep-margin mb-3">
		<div className="col-md-6">
		<label htmlFor="firstName">Cake Name</label>
		<div className="input-group">
		<input type="text" className="form-control" id="cakeName" name="cakeName"  onChange={handleInputChange} placeholder="" value={cake.cakeName.value} required/>
		{error?.cakeName &&<div className="invalid-feedback">{error.cakeName}</div>}
		</div>
		</div>
		<div className="col-md-6">
		<label htmlFor="lastName">Price</label>
		<div className="input-group">
		<input type="text" className="form-control" id="price" name="price" onChange={handleInputChange}  placeholder="" value={cake.price.value} required/>
		{error?.price &&<div className="invalid-feedback">{error.price}</div>}
		</div>
		</div>
		</div>

    <div className="row keep-margin mb-3">
		<div className="col-md-6">
		<label htmlFor="phone">Weight</label>
		<div className="input-group">
		<div className="input-group-prepend">
		<span className="input-group-text">KG</span>
		</div>
		<input type="text" className="form-control" id="weight" name="weight" pattern="^\d{0,3}$" onChange={handleInputChange} value={cake.weight.value} placeholder="Weight" required/>
		{error?.weight &&<div className="invalid-feedback">{error.weight}</div>}
		</div>
		</div>

		<div className="col-md-6">
		<label htmlFor="address">Cake Type</label>
		<div className="input-group">
		<input type="text" className="form-control" id="type" name="type" onChange={handleInputChange} value={cake.type.value} />
		</div>
		</div>
  </div>

		<div className="mb-3">
		<label htmlFor="city">Flavour</label>
		<div className="input-group">
		<input type="text" className="form-control" id="flavour"  name="flavour" onChange={handleInputChange} value={cake.flavour.value} placeholder="Flavour" />
		{error?.city &&<div className="invalid-feedback">{error.city}</div>}
		</div>
		</div>



		<hr className="mb-4"/>
		<button className="btn btn-primary btn-lg btn-block" type="button" onClick={saveCake}>Proceed</button>
		</form>
		</div>
		</div>
		</div>
		</div>
		</div>
  )
}
export default connect()(AddCake)
