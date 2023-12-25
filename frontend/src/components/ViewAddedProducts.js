import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import Axios from 'axios';

const ViewAddedProducts = ()=>{

    const [listofProducts, setlistofProducts] = useState([]);

    useEffect(()=>{

        Axios.get("http://localhost:3001/getall").then((response)=>{
    
          setlistofProducts(response.data); 
        })
      },[]); 

    return (

        <div className='AddedProduct'>
            
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th data-test-id = "productid">Product Id</th>
              <th>Product Name</th>
              <th>Model Number</th>
              <th>Manufacturer</th>
              <th>Package Quantity</th>
              <th>Brand Name</th>
              <th>Payment</th>
            </tr>
          </thead>

          {listofProducts.map((newProduct)=>{
            return(
            <tbody>
            <tr>
              <td>{newProduct.productId}</td>
              <td>{newProduct.productName}</td>
              <td>{newProduct.modelNumber}</td>
              <td>{newProduct.manufacturer}</td>
              <td>{newProduct.packageQuantity}</td>
              <td>{newProduct.brandName}</td>
              <td>{newProduct.payment}</td>
            </tr>
            </tbody>
        )
          })}
          
        </Table>
        </div>
      );
}
export default ViewAddedProducts; 