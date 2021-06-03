import {Component} from "react"
import axios from 'axios'
class Login extends Component{
	emailError
	passwordError
	apiUrl
	constructor(props){
		super(props)
		this.emailError=this.passwordError="";
		this.apiUrl="https://apibyashu.herokuapp.com/api/login"
		this.state={
			email:"",
			password:"",
		}
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
	
	validateEmail=(event)=>{
		this.emailError=this.passwordError="";
		event.preventDefault()
		var isValid=true;
		var inputEmail=this.state.email
		var inputPassword=this.state.password
		var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
		
		if(!inputEmail){
			isValid=false;
			this.emailError="Email is required Field"
		}else if(!pattern.test(inputEmail)){
			isValid=false;
			this.emailError="Invalid Email Syntax"
		}
		if(!inputPassword){
			isValid=false;
			this.passwordError="Password is required Field"
		}
		this.setState({
			emailError:this.emailError,
			passwordError:this.passwordError,
		})
		if(isValid){
			axios({url:this.apiUrl,method:"post",data:{"name":this.state.name,"email":this.state.email,"password":this.state.password}}).then((response)=>{
			if(response.data.email){
				this.props.parentprop.history.push("/")
			}
			if(response.data.message){
				alert(response.data.message)
			}
		},(error)=>{})
		}
	}
	
	render(){
		return(
		<form className="container mt-3" onSubmit={this.validateEmail}>
  <div className="form-group">
    <label htmlFor="exampleInputLoginEmail1">Email address</label>
    <input type="text" className="form-control" id="exampleInputLoginEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={this.state.email} onChange={this.changeEmail}/>
    {this.emailError && <small id="emailError" className="form-text form-error alert alert-danger">{this.emailError}</small>}
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputLoginPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputLoginPassword1" placeholder="Password"  value={this.state.password} onChange={this.changePassword}/>
  {this.passwordError && <small id="passwordError" className="form-text form-error alert alert-danger">{this.passwordError}</small>}
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
		)
	}
	
}


export default Login
