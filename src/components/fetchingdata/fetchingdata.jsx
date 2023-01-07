import { useEffect } from "react"

  

  let Fetch=()=>{


    useEffect(()=>{
        fetch("https://todoapp-backend-vuut.onrender.com/successfulLogin",{
          method:"get",
          
        })
        .then((res)=> {return res.json()})
        .then(data=>console.log(data))
    })
    return(
    <>
    
    </>
    
    )
  }

  export default Fetch