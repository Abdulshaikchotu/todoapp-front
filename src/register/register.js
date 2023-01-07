import "./regi.css"
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"
let url="https://todoapp-backend-vuut.onrender.com/register/post"
let Register=()=>{ 

   
    const form_data = useRef();
    let navigate = useNavigate();
   async function reg_user(e){
        e.preventDefault()
        
        const data={
            username:form_data.current.username.value,
            password:form_data.current.password.value,
            confirmpassword:form_data.current.confirmpassword.value
        }
        console.log(form_data.current.username.value);
        const response = await axios.post(url,data)
        console.log(response.status);
             if(response.status===200){
                navigate("/login")
             }
    }
    return(<>
          <div id="register">
            <form className="form-data" ref={form_data}>
                <div id="inputs">
                   <h1>Register</h1>
                  <input type="text" placeholder="username" id="username"/>
                  <input type="text" placeholder="password" id="password"/>
                  <input type="text" placeholder="confirmpassword" id="confirmpassword"/>
                  <button style={{marginLeft:"50px"}} onClick={reg_user}>Register</button>
                </div>
            </form>
          </div>
    </>
    )
}
export default Register
