const Product = require("../models/product");

exports.getAll = async (req,res) => {
    try{
        const products = await Product.getAll();
        res.status(200).json(products);
    }
    catch(err){
        res.status(500).json({error: err.Message});
    }
}

exports.getById =  async (req,res) => {
    try{
        const product = await Product.getById(req.params.id);
        if(!product){
            return res.status(404).json({error: "Product not found"});
        }
        res.status(200).json(product);
    }
    catch(err){
        res.status(500).json({error: err.message});
    }
}
exports.getCategoryNameByCategoryId = async (req,res) => {
    try{
        categoryid = req.params.id;
        const categoryName = await Product.getCategoryNameByCategoryId(categoryid);
        if(!categoryName){
            return res.status(404).json({error: "Category not found"});
        }
        res.status(200).json(categoryName);
    }
    catch(err){
        res.status(500).json({error: err.message});
    }
}

exports.getByCategoryId = async (req,res) => {
    try{
        const products = await Product.getByCategoryId(req.params.categoryid);
        res.status(200).json(products);
    }
    catch(err){
        res.status(500).json({error: err.message});
    }
}

exports.create = async (req,res) => {
    try{
        const product = await Product.create(req.body);
        res.status(201).json(product);
    }
    catch(err){
        res.status(400).json({error: err.message});
    }
}

exports.delete = async (req, res) => {
    const id = req.params.id;
    console.log(id);
    try{
        const deletedProduct = await Product.delete(id);
        if(deletedProduct){
            res.status(200).json(deletedProduct);
        }
        else{
            res.status(404).json({error: "Product not found"});
        }
    }
    catch(err){
        console.error("Error deleting product" + err);
        res.status(500).json({error: "Failed to delete product"});
    }
}
exports.update = async (req, res) => {
    try{
        const updatedProduct = await Product.update(req.body);
        if(updatedProduct){
            res.status(200).json(updatedProduct);
        }
        else{
            res.status(404).json({error: "Product not found"});
        }
    }
    catch(err){
        console.error("Error updating product" + err);
        res.status(500).json({error: "Failed to update product"});
    }
}