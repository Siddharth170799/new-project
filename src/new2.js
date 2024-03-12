import React, { useEffect, useState } from "react";



const Card2=()=>{

const [data,setData]=useState("")


const item=()=>{
const getval=localStorage.getItem("Hi")
// const getval2=JSON.parse(getval)
if(getval){

    setData(getval)
}





}
useEffect(()=>{
item()
},[data])

return (


    <>
{/* <div className="Hello"> */}
    
<div className="birthdayCard2">
    <div className="cardFront">
      <h3 className="happy">HAPPY BIRTHDAY {data}</h3>
      <div className="balloons">
        <div className="balloonOne" />
        <div className="balloonTwo" />
        <div className="balloonThree" />
        <div className="balloonFour" />
      </div>
    </div>
    <div className="cardInside">
      <h3 className="back">HAPPY BIRTHDAY {data}</h3>
      <p>Dear Friend,</p>
      <p>
        Happy birthday!! I hope your day is filled with lots of love and
        laughter! May all of your birthday wishes
      </p>
      <p className="name">{data}</p>
    </div>
{/* <div>{data}</div> */}
</div>
{/* </div> */}

    
    </>
)

}

export default Card2