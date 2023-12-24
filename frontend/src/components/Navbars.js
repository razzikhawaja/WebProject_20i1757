import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link, useNavigate} from "react-router-dom"; 
import "../index.css"; 


const Navbars = ()=>{
  
  let navigate = useNavigate(); 
  
    return(

    <div data-testid="nav" className='Navbars'>

    <Navbar bg="dark" variant="dark">
          
          <Navbar.Brand className='n-brand' onClick={()=>{navigate("/")}}>Seller Portal</Navbar.Brand>

          <Nav className="me-auto">
            <Nav.Link className='add' onClick={()=>{navigate("/addproduct")}}>Add Product</Nav.Link>
            <Nav.Link className='update' onClick={()=>navigate("/updateproduct")}>Update Product</Nav.Link>
            <Nav.Link className='delete' onClick={()=>navigate("/deleteproduct")}>Delete Product</Nav.Link>
            <Nav.Link className='view' onClick={()=>navigate("/viewproduct")}>View Product</Nav.Link>
          </Nav>
  
      </Navbar>

    </div>
    );

}

export default Navbars; 




 
 