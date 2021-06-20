import {useState,useEffect} from "react"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import axios from 'axios'

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
    "ingredients":{value:[""],"name":"Ingredients"},
  })
  useEffect(()=>{
    setCake(props.cake)
  },[props.cakeAdded])
  let [validated,setValidated]=useState()
  let addIngredientsBlock=(e)=>{
    let currentState={...cake}
    let ingredientsArr=currentState["ingredients"].value
    currentState["ingredients"].value[ingredientsArr.length]=""
    setCake(currentState)
  }
  let removeIngredientsBlock=(e,i)=>{
    let currentState={...cake}
    if(currentState["ingredients"].value.length>1){
      currentState["ingredients"].value.splice(i, 1);
      setCake(currentState)
    }
  }

  let handleIngredientChange=(e,i)=>{
    let value=e.target.value
    let currentState={...cake}
    currentState["ingredients"].value[i]=value
    setCake(currentState)
  }
  let handleInputChange=(e)=>{
    let name=e.target.name
    let value=e.target.value
    let currentState={...cake}
    currentState[name].value=value
    setCake(currentState)
  }
  let handleImageUpload=(e)=>{
    var formData= new FormData()
    formData.append("file",e.target.files[0])
    let apiUrl=process.env.REACT_APP_BASE_URL+"/upload"
    axios({url:apiUrl,method:"post",data:formData,headers:{authtoken:props.token,"Content-Type": "multipart/form-data"}}).then((response)=>{
      if(response.imageUrl){
        let currentState={...cake}
        currentState["cakeImage"].value=response.imageUrl
        setCake(currentState)
      }else{
        let currentState={...cake}
        currentState["cakeImage"].value="https://res.cloudinary.com/ashudev/image/upload/v1623754582/p10onyxsxuw0riv8a54g.jpg"
        setCake(currentState)

      }
    },(error)=>{})
  }
  let saveCake=(event)=>{
    let currentError={...error}
    event.preventDefault()
    var isValid=true;
    var weightPatt = /^\d{3}$/;
    for (var key in cake) {
      if (!cake.hasOwnProperty(key)) continue;

      if(!cake[key].value && cake[key].required){
        isValid=false
        currentError[key]=cake[key].name+" is required"
      }else if(key=="weight" && !weightPatt.test(cake["weight"].value)){
        currentError["weight"]="Weight is not valid"
      }else{
        currentError[key]=""
      }
      setError(currentError)
    }
    setValidated("was-validated")

    if(isValid){
      props.dispatch({
				type:"ADD_CAKE",
				payload:{name:cake.cakeName.value,description:cake.description.value,price:cake.price.value,
          weight:cake.weight.value,image:cake.cakeImage.value,type:cake.type.value,eggless:cake.eggless.value,
          flavour:cake.flavour.value,ingredients:cake.ingredients.value}
			})
    }
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
                  <div className="col-md-12">
                    <label htmlFor="city">Description</label>
                    <div className="input-group">
                      <textarea className="form-control" id="description" name="description" onChange={handleInputChange}  placeholder="Cake Description" value={cake.description.value}/>
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
                      <select  className="form-control" id="type" name="type" onChange={handleInputChange} value={cake.type.value}>
                        <option value="">Select Type</option>
                        <option value="birthday">Birthday</option>
                        <option value="anniversary">Anniversary</option>
                        <option value="farewell">Farewell</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="row keep-margin mb-3">
                  <div className="col-md-6">
                    <label htmlFor="flavour">Flavour</label>
                    <div className="input-group">
                      <input type="text" className="form-control" id="flavour"  name="flavour" onChange={handleInputChange} value={cake.flavour.value} placeholder="Flavour" />
                      {error?.flavour &&<div className="invalid-feedback">{error.flavour}</div>}
                    </div>
                  </div>
                  <div className="col-md-6">

                    <label htmlFor="eggless">Eggless</label>
                    <div className="input-group">
                      <input type="checkbox" className="" id="eggless"  name="eggless" onChange={handleInputChange} value="yes" checked={cake.eggless.value} />
                    </div>

                  </div>
                </div>

                <div className="row keep-margin mb-3">
                  <div className="col-md-12">
                    <label htmlFor="ingredients">Ingredients</label>
                    <div className="input-group row keep-margin">
                      {cake.ingredients.value.map((v,i)=>{
                        return(
                          <div className="ingredients-wrap col-3 mt-2" key={i}>
                            <input type="text" className="form-control d-inline-block" id={"ingredients"+i} style={{width:"80%"}} data-index={i} name="ingredients[]" onChange={(e)=>{handleIngredientChange(e,i)}} value={cake.ingredients.value[i]} placeholder="Ingredients" />
                            <i className="fa fa-plus ml-2" onClick={addIngredientsBlock}></i>
                            <i className="fa fa-minus ml-2" onClick={(e)=>{removeIngredientsBlock(e,i)}}></i>
                          </div>)
                        })}
                      </div>
                    </div>
                  </div>

                  <div className="row keep-margin mb-3">
                    <div className="col-md-12">
                      <label htmlFor="city">Cake Image</label>
                      <div className="input-group">
                        <input type="file" className="form-control" id="cakeImage"  name="cakeImage" onChange={handleImageUpload}  required/>
                        {error?.cakeImage &&<div className="invalid-feedback">{error.cakeImage}</div>}
                      </div>
                      {cake?.cakeImage.value &&<div className="row m-4" style={{"minHeight": "200px"}}><img src="https://res.cloudinary.com/ashudev/image/upload/v1623754582/p10onyxsxuw0riv8a54g.jpg" style={{
                        "width": "auto"}}/></div>}
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
    export default connect(function(state){
      return {
        token:state.AuthReducer.token,
        cake:state.AccountReducer.cake,
        cakeAdded:state.AccountReducer.cakeAdded
      }
    })(AddCake)
