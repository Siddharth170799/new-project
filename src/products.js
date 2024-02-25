import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Row} from "react-bootstrap";
import {Col} from "react-bootstrap";
import axios from "axios";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";




const Products=()=>{



    const [data,setData]=useState("")


    const fetch=async()=>{

     const url=await axios.get("https://fakestoreapi.com/products/")
     setData(url?.data)

}

useEffect(()=>{

    fetch()
},[])


return (
<>
<Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Fashion Street</Navbar.Brand>
          <Nav className="me-auto">
            
          </Nav>
        </Container>
      </Navbar>



{data ? <Row>{

    data.map((item)=>{


        return(

        <Col>
        
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item?.image} style={{height:"250px",width:"250px"}} />
      <Card.Body>
        <Card.Title>{item?.title}</Card.Title>
        <Card.Text>
          {item?.description.slice(0,50)}
        </Card.Text>
        <Link to={`/products/${item.id}`}>
        <Button variant="primary">Go somewhere🛒</Button></Link>
      </Card.Body>
    </Card>
        
        </Col>


        )
    })



}</Row>:<div>Loading</div>}
</>


)


}

export default Products