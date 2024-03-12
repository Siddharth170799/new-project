import React, { useState } from "react";
import { useNavigate } from "react-router-dom";



const SignIn=()=>{

const [data,setData]=useState("")
const [data2,setData2]=useState("")
const navigate=useNavigate()


const Click2=()=>{

const getval=localStorage.getItem("Key")
const getval2=JSON.parse(getval)
console.log(getval2)


if(getval2.Email == data && getval2.Password == data2){


    console.log("successful")
    navigate("/products")

}else{
    console.log("unsuccessful")
}

}
return (

    <>
<div className="hello" style={{margin:"300px"}}>
    <div style={{textAlign:"center",margin:"15px"}}><label>Email</label><input type="text" onChange={(e)=>setData(e.target.value)}/></div>
    <div style={{textAlign:"center",margin:"15px"}}><label>Password</label><input type="text" onChange={(e)=>setData2(e.target.value)}/></div>
    <div style={{textAlign:"center",margin:"15px"}}><button onClick={Click2}>Click To Submit</button></div>
    </div>
    </>


)

}

export default SignIn