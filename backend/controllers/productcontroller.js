const productModel  = require("../models/addproducts");
const mongoose = require("mongoose");


const updateProduct = async(req,res)=>{

    try {
        const _id = req.params.id;
        const result = await productModel.findByIdAndUpdate(_id,req.body,{new: true});
        console.log(result)
        if (!result) {
            res.json({
                status: "FAILED",
                message: "Not updated",
                data: result
            })
        }
        else {
            res.json({
                status: "SUCCESS",
                message: "Updated Successfully!",
                data: result
            })
        }
    }
    catch (e) {
        res.send(e)
    }
    
}



const deleteById = async (req,res)=>{


    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){

        return res.status(404).json({err: "no such product exists."}); 
    }

    // const deleteProduct = await productModel.findOneAndDelete({_id: id});
    const deleteProduct = await productModel.findByIdAndRemove(id); 

    if(!deleteProduct){

        return res.status(200).json({err: "Id is not right."}); 

    }

    res.status(200).json(deleteProduct);

}


const addProduct = async (req, res)=>{

    try{
     
        const product = req.body; 
        const newProduct = new productModel(product);
        await newProduct.save();
        res.status(200).json(product); 

    }catch(err){
        
        console.log(err); 

    }
    
}


const getALLProducts = async (req,res)=>{

    const getALL = await productModel.find({}); 
    res.status(200).json(getALL); 
}

const getProductById = async (req,res)=>{

    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){

        return res.status(404).json({err: "no such product exists."}); 
    }

    const getProduct = await productModel.findById(id);
    if(!getProduct){

        return res.status(404).json({err: "no such product exists."}); 
    }
    
    res.status(200).json(getProduct); 

}








module.exports = {

    addProduct, 
    getProductById, 
    getALLProducts, 
    deleteById,
    updateProduct
}