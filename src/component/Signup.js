import {Component} from "react"
import axios from 'axios'

class Signup extends Component{
	emailError
	nameError
	passwordError
	password2Error
	apiUrl
	constructor(props){
		super(props)
		this.apiUrl="https://apibyashu.herokuapp.com/api/register"
		this.emailError=this.nameError=this.passwordError=this.password2Error="";
		this.state={
			name:"",
			email:"",
			password:"",
			password2:"",
		}
	}
	
	changeName=(event)=>{
		this.setState({
			name:event.target.value
		})
	}
	changeEmail=(event)=>{
		this.setState({
			email:event.target.value
		})
	}
	
	changePassword=(event)=>{
		this.setState({
			password:event.target.value
		})
	}
	
	changePassword2=(event)=>{
		this.setState({
			password2:event.target.value
		})
	}
	
	validateForm=(event)=>{
		this.emailError=this.nameError=this.passwordError=this.password2Error="";
		event.preventDefault()
		var isValid=true;
		var inputEmail=this.state.email
		var inputName=this.state.name
		var inputPassword=this.state.password
		var inputPassword2=this.state.password2
		var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
		
		if(!inputEmail){
			isValid=false;
			this.emailError="Email is required Field"
		}else if(!pattern.test(inputEmail)){
			isValid=false;
			this.emailError="Invalid Email Syntax"
		}
		if(!inputName){
			isValid=false;
			this.nameError="Name is required Field"
		}
		if(!inputPassword){
			isValid=false;
			this.passwordError="Password is required Field"
		}
		if(!inputPassword2){
			isValid=false;
			this.password2Error="Confirm Password is required Field"
		}else if(inputPassword2!==inputPassword){
			isValid=false;
			this.password2Error="Confirm Password should be same as Password"
		}
		this.setState({
			emailError:this.emailError,
			nameError:this.nameError,
			passwordError:this.passwordError,
			password2Error:this.password2Error
		})
		if(isValid){
			axios({url:this.apiUrl,method:"post",data:{"name":this.state.name,"email":this.state.email,"password":this.state.password}}).then((response)=>{
			console.log(response)
			if(response.data.message){
				alert(response.data.message)
			}
		},(error)=>{})
		}
	}
	
	render(){
		return(
		<form className="container mt-3" onSubmit={this.validateForm}>
		<div className="form-group">
    <label htmlFor="exampleInputName">Name</label>
    <input type="text" className="form-control" id="exampleInputName" aria-describedby="nameHelp" placeholder="Enter Name" value={this.state.name} onChange={this.changeName}/>
  {this.nameError && <small id="nameError" className="form-text form-error alert alert-danger">{this.nameError}</small>}
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={this.state.email} onChange={this.changeEmail}/>
    {this.emailError && <small id="emailError" className="form-text form-error alert alert-danger">{this.emailError}</small>}
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"  value={this.state.password} onChange={this.changePassword}/>
   {this.passwordError && <small id="passwordError" className="form-text form-error alert alert-danger">{this.passwordError}</small>}
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Confirm Password</label>
    <input type="password" className="form-control" id="exampleInputPassword2" placeholder="Confirm Password"  value={this.state.password2} onChange={this.changePassword2}/>
  {this.password2Error && <small id="password2Error" className="form-text form-error alert alert-danger">{this.password2Error}</small>}
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
		)
	}
	
}


export default Signup
