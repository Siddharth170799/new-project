import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from "axios";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";




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
// let handleCart = ()=>{

//        let existingProduct =  productsFromStore.find((product)=>{
//             return product.id===data.id
//         })

//       //   if(existingProduct){
//       //     return 
//       // }
//         productsFromStore.push(data)

//         localStorage.setItem("products",JSON.stringify(productsFromStore))
//         navigate("/cart")
        
// }




return (

  <>

<Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Fashion Street</Navbar.Brand>
          <Nav className="me-auto">
            <Link to={"/products"}>
            <Nav.Link href="#home" style={{textDecoration:"none",fontSize:"20px",color:"white",marginLeft:"50px"}}>Home</Nav.Link></Link>
            <img src="https://www.pngall.com/wp-content/uploads/5/Shopping-Cart-PNG-Image-HD.png" style={{height:"30px",width:"30px",margin:"15px"}}></img>
            
          </Nav>
        </Container>
      </Navbar>


    <div style={{textAlign:"center"}}>
    <Card style={{ width: '18rem' , textAlign:"center"}}>
    <Card.Img variant="top" src={data?.image} />
    <Card.Body>
      <Card.Title>{data?.title}</Card.Title>
      <Card.Text>
       {data?.description}
      </Card.Text>
      
      {/* <Button onClick={handleCart} variant="primary">Add to Cart</Button> */}
    </Card.Body>
  </Card>

  </div>
  </>

)


}
export default Part


