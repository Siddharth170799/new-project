import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './App.css'



const SignUp=()=>{

const [hello,setHello]=useState("Key")
const [data,setData]=useState("")
const [data2,setData2]=useState("")
const [data3,setData3]=useState("")
const navigate=useNavigate()




const Click=()=>{

let object ={

    FullName:data,
    Email:data2,
    Password:data3,

}

let getval=localStorage.setItem("Key",JSON.stringify(object))
setHello(getval)
navigate("/signin")

}


return (

<>
<div className="hello" style={{margin:"300px"}}>
<div className="hello" style={{textAlign:"center",margin:"20px"}}><label>Full Name</label><input type="text" onChange={(e)=>setData(e.target.value)}/></div>
<div style={{textAlign:"center",margin:"15px"}}><label>Email</label><input type="text" onChange={(e)=>setData2(e.target.value)}/></div>
<div style={{textAlign:"center",margin:"15px"}}><label>Password</label><input type="text" onChange={(e)=>setData3(e.target.value)}/></div>
<div style={{textAlign:"center",margin:"15px"}}><button  onClick={Click}>Click To Submit</button></div>

</div>
</>
)




}
export default SignUp