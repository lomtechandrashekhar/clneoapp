import {Component} from "react"
class Signup extends Component{
	emailError
	constructor(props){
		super(props)
		this.emailError="";
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
			email:event.target.value
		})
	}
	
	validateEmail=(event)=>{
		this.emailError="";
		event.preventDefault()
		var inputEmail=this.state.email
		var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
		
		if(!inputEmail){
			this.emailError="Email is required Field"
		}else if(!pattern.test(inputEmail)){
			this.emailError="Invalid Email Syntax"
		}
		this.setState({
			emailError:this.emailError
		})
	}
	
	render(){
		return(
		<form className="container mt-3" onSubmit={this.validateEmail}>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={this.state.email} onChange={this.changeEmail}/>
    {this.emailError && <small id="emailError" className="form-text form-error">{this.emailError}</small>}
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"  value={this.state.password} onChange={this.changePassword}/>
  </div>
  <div className="form-group form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
		)
	}
	
}


export default Signup
