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
						username:response.data.name,
						email:response.data.email,
					}
				})
				localStorage.setItem("cltoken", response.data.token);
				localStorage.setItem("username", response.data.name);
				localStorage.setItem("email", response.data.email);
				let cakecarturl=process.env.REACT_APP_BASE_URL+"/cakecart"
				axios({url:cakecarturl,method:"post",data:{}}).then((response)=>{
					if(response.data.data){
						dispatch({
							type:"UPDATE_CART",
							payload:{
								cart:response.data.data,
							}
						})
					}
				},(error)=>{})
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
