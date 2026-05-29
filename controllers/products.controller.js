const productModel = require("../models/products.model");

// API Logic Fucntions

// method: POST
// process: Creating a new Product
// route: PUBLIC
const createProduct = async (req, res) => {
    try{
        const newProduct = await productModel.create(req.body);

        res.status(201).json({message: "Product Created"});
    }catch(err){
        res.status(500).json({message: err.message});
    }
};

// method: GET
// process: Getting all Products
// route: PUBLIC
const getallProducts = async (req, res) => {
    try{
        const products = await productModel.find();

        res.status(200).json(products);
    }catch(err){
        res.status(500).json({message: err.message});
    }
}

// method: PUT
// process: update the existing product details
// route: PUBLIC
const updateProduct = async (req, res) => {
    try{
        const updatedProduct = await productModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if(!updatedProduct){
            return res.status(404).json({success: false, message: "Product Not Found"})
        }

        res.status(200).json({success: true, message: "Product Updated"});

    }catch(err){
        res.status(500).json({message: err.message});
    }
};

// method: DELETE
// process: Delete the respective product
// route: PUBLIC
const deleteProduct = async (req, res) => {
    try{
        const deletedProduct = await productModel.findByIdAndDelete(req.params.id);

         if(!deletedProduct){
            return res.status(404).json({success: false, message: "Product Not Found"})
        }

        res.status(200).json({success: true, message: "Product Deleted"});

    }catch(err){
        res.status(500).json({message: err.message});
    }
};

module.exports = { createProduct, getallProducts, updateProduct, deleteProduct };