const mongoose = require("mongoose");


const productSchema = new mongoose.Schema({ 

    productId: {

        type: Number, 
        required: true
    }, 

    productName: {

        type: String, 
        required: true
    },

    modelNumber: {

        type: Number,
        required: true
    },

    manufacturer: {

        type: String, 
        required: true
    },

    packageQuantity: {
        type: Number, 
        required: true
    }, 
    
    brandName: {
        type: String, 
        required: true
    }, 
    payment: {
        type: Number, 
        required: true
    }






},{timestamps: true});

const productModel = mongoose.model("addproducts", productSchema);

module.exports = productModel;