import React, { useEffect, useState } from "react";


const Cart=()=>{

const [items,setItems]=useState("")



useEffect(()=>{
  const storedItems = localStorage.getItem('products');
    
    if (storedItems) {

      const parsedItems = JSON.parse(storedItems);
      setItems(parsedItems);}

},[])


return (
  <div>
    <h1>Items from Local Storage</h1>
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);


}

export default Cart