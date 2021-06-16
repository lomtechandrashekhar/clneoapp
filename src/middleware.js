import axios from "axios"

function loginmiddleware(data){
	let apiUrl=process.env.REACT_APP_BASE_URL+"/login"
	return (function(dispatch){
	axios({url:apiUrl,method:"post",data:{"email":data.email,"password":data.password}}).then((response)=>{
			if(response.data.email){
				dispatch({
					type:"LOGIN",
					payload:{
						token:response.data.token,
						username:response.data.name
					}
				})
				localStorage.setItem("cltoken", response.data.token);
				localStorage.setItem("username", response.data.name);
				//console.log(this.props.parentprop)
				//this.props.parentprop.parentfun()
				//this.props.history.push("/")
			}
			if(response.data.message){
				alert(response.data.message)
			}
		},(error)=>{})
	})
}

export default loginmiddleware