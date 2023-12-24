import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../index.css"; 
import { useState, useEffect } from 'react';
import Col from 'react-bootstrap/esm/Col';
import Row from "react-bootstrap/esm/Row"; 
import Container from 'react-bootstrap/esm/Container';
import Axios from "axios"; 
import DeleteProduct from './DeleteProduct';

const AddProduct = ()=>{


  const [listofProducts, setlistofProducts] = useState([]);
  const [productId, setproductId] = useState(0); 
  const [productName, setproductName] = useState(""); 
  const [modelNumber, setmodelNumber] = useState(0); 
  const [manufacturer, setManufacturer] = useState(""); 
  const [packageQuantity, setpackageQuantity] = useState(0); 
  const [brandName, setbrandName] = useState(""); 
  const [payment, setpayment] = useState(0); 



  const addProduct = async ()=>{

    Axios.post("http://localhost:3001/addproduct", {

      productId, 
      productName,
      modelNumber,
      manufacturer,
      packageQuantity, 
      brandName, 
      payment 

    }).then((response)=>{

      alert("product added successfully!") 
      setlistofProducts([...listofProducts, {
        productId, 
        productName, 
        modelNumber,
        manufacturer,
        packageQuantity, 
        brandName, 
        payment

        
      }]);
      ;
       
      
      
    }); 
  }
  

    return(
        
    <div className='Forms'>
    

    <Form>

      <Container>

      <Row>
      <Col>
      <Form.Group className="mb-4" controlId="formBasicId">
      <Form.Label>Product Id</Form.Label>
        <Form.Control type="number" placeholder="Enter product id" onChange={(event)=>{setproductId(event.target.value)} }/>
        <Form.Text className="text-muted">
          Example: 013245666643, 001344456878.
        </Form.Text>
      </Form.Group>
      </Col>
      <Col>
      <Form.Group className="mb-4" controlId="formBasicName">
      <Form.Label>Product Name</Form.Label>
        <Form.Control type="text" placeholder="Product name" onChange={(event)=>{setproductName(event.target.value)} }/>
        <Form.Text className="text-muted">
          Example: Olympus Camedia C-50 Digital Camera.
        </Form.Text>
      </Form.Group>
      </Col>
      </Row>

      <Row>
      <Col>
      <Form.Group className="mb-4" controlId="formBasicNumber" onChange={(event)=>{setmodelNumber(event.target.value)}}>
      <Form.Label>Model Number</Form.Label>
        <Form.Control type="number" placeholder="Model number" />   
        <Form.Text className="text-muted">
          Example: C-50.
        </Form.Text>
      </Form.Group>
      </Col>

      <Col>
      <Form.Group className="mb-4" controlId="formBasicManufacturer" onChange={(event)=>{setManufacturer(event.target.value)}}>
      <Form.Label>Manufacturer</Form.Label>
        <Form.Control type="text" placeholder="Manufacturer" />
        <Form.Text className="text-muted">
          Example: Microsoft, Sony. 
        </Form.Text>
      </Form.Group>
      </Col>
      </Row>

      <Row>
      <Col>
      <Form.Group className="mb-4" controlId="formBasicQuantity">
      <Form.Label>Package Quantity</Form.Label>
        <Form.Control type="number" placeholder="Package quantity" onChange={(event)=>{setpackageQuantity(event.target.value)}} />
        <Form.Text className="text-muted">
          Example: 6.
        </Form.Text>
      </Form.Group>
      </Col>
      <Col>
      <Form.Group className="mb-4" controlId="formBasicBrandName">
      <Form.Label>Brand Name</Form.Label>
        <Form.Control type="text" placeholder="Brand name" onChange={(event)=>{setbrandName(event.target.value)}} />
        <Form.Text className="text-muted">
          Example: Sony Brook Hams.
        </Form.Text>
      </Form.Group>
      </Col>
      </Row>
      <Row>
      <Col>
      <Form.Group>
      <Form.Label>Price</Form.Label>
        <Form.Control type="number" placeholder="Price" onChange={(event)=>{setpayment(event.target.value)}} />
        <Form.Text className="text-muted">
          Example: 60.
        </Form.Text>
      </Form.Group>
      </Col>
      <Col></Col>
      </Row>

      <Button variant="outline-primary" size="lg" type='submit' onClick={addProduct}>Add Product</Button>

      </Container>

    </Form>


   
      
      </div> 
  ); 
}

export default AddProduct; 