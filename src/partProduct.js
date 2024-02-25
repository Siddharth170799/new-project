import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from "axios";



const Part=()=>{


const [data,setData]=useState("")
const navigate=useNavigate()

const param=useParams()
console.log(param)


const get=async()=>{

const get= await axios.get(`https://fakestoreapi.com/products/${param.id}`)
setData(get?.data)


}
useEffect(()=>{

    get()
},[])

let productsFromStore = JSON.parse(localStorage.getItem('products'))||[] 
let handleCart = ()=>{

       let existingProduct =  productsFromStore.find((product)=>{
            return product.id===data.id
        })

        if(existingProduct){
            return 
        }
        productsFromStore.push(data)

        localStorage.setItem("products",JSON.stringify(productsFromStore))
        navigate("/cart")
        
}




return (
    <div style={{textAlign:"center"}}>
    <Card style={{ width: '18rem' , textAlign:"center"}}>
    <Card.Img variant="top" src={data?.image} />
    <Card.Body>
      <Card.Title>{data?.title}</Card.Title>
      <Card.Text>
       {data?.description}
      </Card.Text>
      <Button onClick={handleCart} variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>

  </div>


)


}
export default Part


