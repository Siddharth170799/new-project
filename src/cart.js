// import React, { useEffect, useState } from "react";


// const Cart=()=>{

// const [items,setItems]=useState([])



// useEffect(()=>{
//   const storedItems = localStorage.getItem('products');
    
//     if (storedItems) {

//       const parsedItems = JSON.parse(storedItems);
//       setItems(parsedItems);}

// },[])


// return (
//   <div>
//     <h1>Items from Local Storage</h1>
//     <ul>
//       {items.map((item) => (
//         <li>{item.title}</li>
//       ))}
//     </ul>
//   </div>
// );


// }

// export default Cart

import React,s { useEffect, useState } from "react";


const Cart=()=>{

const [items,setItems]=useState([])


useEffect(()=>{

const getitems=localStorage.getItem("products")

if(getitems){

const getitems2=JSON.parse(getitems)
setItems(getitems2)

}

})


return(

<>
<div>{items.map((item)=>{
  return (item.title)
})}</div>

</>

)


}

export default Cart