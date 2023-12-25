const express = require("express"); 
const app = express(); 
const mongoose = require("mongoose");
const cors = require("cors");



const {  

    addProduct,
    getProductById, 
    getALLProducts, 
    deleteById, 
    updateProduct

} = require("./controllers/productcontroller"); 


app.use(express.json()); 
app.use(cors()); 

mongoose.connect("mongodb+srv://razzi:0984@cluster0.vuen418.mongodb.net/Project?retryWrites=true&w=majority").then(() => {
    console.log("Database connected successfully")
}); 

app.listen(3001, ()=>{

    console.log("server runs perfectly!!"); 
});


app.get("/getall", getALLProducts); 

app.delete("/deleteproduct/:id", deleteById);

app.put("/updateproduct/:id", updateProduct);

app.get("/getproduct/:id", getProductById); 

app.post("/addproduct", addProduct);
    