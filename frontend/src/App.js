import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";  
import Navbars from './components/Navbars';
import AddProduct from "./components/AddProduct"; 
import {BrowserRouter as Router, Route, Routes, Link, Form} from "react-router-dom"; 
import DeleteProduct from './components/DeleteProduct';
import UpdateProduct from './components/UpdateProduct';
import ViewAddedProducts from './components/ViewAddedProducts';
import Home from './components/Home';

function App() {

  return (

    <Router>
    
      <Navbars />
      
      <Routes>

          <Route path="/" element={<Home />}></Route>
          <Route path="/addproduct" element={<AddProduct />}></Route>
          <Route path="/navbar" element={<Navbars />}></Route>
          <Route path="/deleteproduct" element={<DeleteProduct />}></Route>
          <Route path="/updateproduct" element={<UpdateProduct />}></Route>
          <Route path="/viewproduct" element={<ViewAddedProducts />}></Route>
       


      </Routes> 

    </Router>
      
         
  );
}

export default App;
