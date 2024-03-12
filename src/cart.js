import React, { useEffect, useState } from "react";


const Cart=()=>{

const [items,setItems]=useState([])


useEffect(()=>{

const getitems=localStorage.getItem("products")
const getitems2=JSON.parse(getitems)
if(getitems2){

// const getitems2=JSON.parse(getitems)
setItems(getitems2)

}

},[])


return(

<>
<div>
   <h1>Items from Local Storage</h1>
     <div className="hello">
     {items.map((item) => (
        <li >{item.title}</li>
      ))}
    </div>
  </div>

</>

)


}

export default Cart
