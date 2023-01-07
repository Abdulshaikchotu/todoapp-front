import axios from "axios"
import { useRef } from "react"
import { useNavigate } from "react-router-dom"


let url="https://todoapp-backend-vuut.onrender.com/login"
let Login=()=>{
    let logindata=useRef()
    let navigate=useNavigate()
    async function loginfun(e){
        e.preventDefault()
        const data={
            username:logindata.current.username.value,
            password:logindata.current.password.value

        }
        const response=await axios.post(url,data)
        console.log(response);
        if(response.data.status==="login successful"){
            window.localStorage.setItem("token", response.data.token);
      console.log(window.localStorage.getItem("token"));
            navigate("/todolist")
        }
    }
    return(<>
    <div id="login">
     <form ref={logindata}>
        <input type="text" placeholder="username" id="username"/>
        <input type="text" placeholder="password" id="password"/>
        <button onClick={loginfun}>Login</button>
     </form>
    </div>

    </>)
}

export default Login