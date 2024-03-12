import React, { useEffect, useState,} from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const Card=()=>{

    const [data,setData]=useState(null)
    const navigate=useNavigate()
    console.log(data)
   
    
const Click=()=>{

        // let object={
        //     Name:data
        // }

         
const sdata=localStorage.setItem("Hi",data)
navigate("/next")


    }
return(

<>

<div className="birthdayCard">
    <div className="cardFront">
      <h3 className="happy">HAPPY BIRTHDAY {data}</h3>
      <div className="balloons">
        <div className="balloonOne" />
        <div className="balloonTwo" />
        <div className="balloonThree" />
        <div className="balloonFour" />
      </div>
    </div>
    {/* <div className="cardInside">
      <h3 className="back">HAPPY BIRTHDAY {data}</h3>
      <p>Dear Friend,</p>
      <p>
        Happy birthday!! I hope your day is filled with lots of love and
        laughter! May all of your birthday wishes come true.
      </p>
      <p className="name">Pawan</p>
    </div> */}
  </div>
  <div>
    <br></br>
<div style={{textAlign:"center"}}>
 <input value={data} type="text" onChange={(e)=>setData(e.target.value)}/></div>
   <div style={{textAlign:"center"}}> <Button onClick={Click} variant="primary">Greeting Card!!</Button></div>
    </div>
        
</>
)
}

export default Card











