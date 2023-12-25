import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import Table from 'react-bootstrap/Table';
// import Button from 'react-bootstrap/Button';
import { Modal, Button } from 'react-bootstrap';


const UpdateProduct = ()=>{

    const [listofProducts, setlistofProducts] = useState([]);
    const [productId, setproductId] = useState(0); 
    const [productName, setproductName] = useState(""); 
    const [modelNumber, setmodelNumber] = useState(0); 
    const [manufacturer, setManufacturer] = useState(""); 
    const [packageQuantity, setpackageQuantity] = useState(0); 
    const [brandName, setbrandName] = useState(""); 
    const [payment, setpayment] = useState(0); 

    const [Id, setId] = useState(0); 

    const [RowData, setRowData] = useState([]); 

    const[ViewEdit,setViewEdit]=useState(false)
    const handleViewEdit=()=>
    {
        setViewEdit(true)
    }
    const handleViewEditClose=()=>
    {
        setViewEdit(false)
    }

    useEffect(()=>{

        Axios.get("http://localhost:3001/getall").then((response)=>{
    
          setlistofProducts(response.data); 
        })
      },[]); 

   


    const Update = ()=>{
        
    
      const url = `http://localhost:3001/updateproduct/${Id}`; 
      const att = { productId, productName, modelNumber, manufacturer, packageQuantity, brandName, payment };

      Axios.put(url, att).then((response) => {

              const result = response.data;
              const { status, message } = result;
              if (status !== 'SUCCESS') {
                  alert(message, status)
              }
              else {
                  alert(message)
                  window.location.reload()
              }
          })
          .catch(err => {
              console.log(err)
          })
    }

      return(
        
       <div> 

      <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Product Id</th>
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
            <Button size="sm" variant="primary" onClick={()=>{handleViewEdit(setRowData(newProduct),setId(newProduct._id))}}>Update</Button>

            </tbody>
            
        )

          })}
          
        </Table>

  <div class="modal" tabindex="-1" >
     
     <Modal show={ViewEdit}
     onHide={handleViewEditClose}
     backdrop="static"
     keyboard={false}>
      <div className="modal-header" >
        <h5 className="modal-title">Update Product</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleViewEditClose}> </button>
      </div>
     
      <div className="modal-body">

        <div className="form-group">
        <label>Product Id</label>
        <input type="number" className="form-control" placeholder="Product id" onChange={(event)=>{setproductId(event.target.value)}}    defaultValue={RowData.productId}/>
        </div>
            <div className="form-group mt-3">
            <label>Product Name</label>
            <input type="text" className="form-control" placeholder="Product name"  onChange={(event)=>{setproductName(event.target.value)}}  defaultValue={RowData.productName}/>
            </div>
            <div className="form-group mt-3">
            <label>Model Number</label>
            <input type="number" className="form-control"  placeholder="Modal number" onChange={(event)=>{setmodelNumber(event.target.value)}}    defaultValue={RowData.modelNumber}/>
        
          </div>
            
          <div className="form-group mt-3">
              <label>Manufacturer</label>
              <input type="text" className="form-control" placeholder="Manufacturer" onChange={(event)=>{setManufacturer(event.target.value)}}  defaultValue={RowData.manufacturer}/>
          </div>
                 
                 
          <div className="form-group mt-3">
              <label>Package Quantity</label>
              <input type="number" className="form-control"  placeholder="Package quantity" onChange={(event)=>{setpackageQuantity(event.target.value)}}   defaultValue={RowData.packageQuantity}/>
          </div>
          
          <div className="form-group mt-3">
              <label>Brand Name</label>
              <input type="text" className="form-control"  placeholder="Brand name" onChange={(event)=>{setbrandName(event.target.value)}}  defaultValue={RowData.brandName}/>
          </div>

          <div className="form-group mt-3">
              <label>Payment</label>
              <input type="number" className="form-control"  placeholder="Payment" onChange={(event)=>{setpayment(event.target.value)}}  defaultValue={RowData.payment}/>
          </div>

          <Button type="submit" className="btn btn-warning mt-4" onClick={Update}>Update Seller</Button>
      </div>
      
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleViewEditClose}>Close</button>
      </div>
      </Modal>

    </div>
        
      </div>
      )

}
export default UpdateProduct; 