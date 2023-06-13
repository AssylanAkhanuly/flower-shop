const ProductModel = require('../models/Products');

const router = require('express').Router();

router.post("/createProduct", async(req, res) => {
    const product = req.body;
    if(!product) return res.status(400).json("Bad request");

    const newProduct = new ProductModel(product);

    try {
        const result = await newProduct.save();

        if(result) res.status(200).json(product);
        else res.status(200).json("Unable to create new product");

    } catch(e) {
        res.status(400).json(e)
    }
})

router.get("/getProducts", async(req, res) => {
    const category = req.query.category;
    try{
        const result = await ProductModel.find({
            category,
        })
        if(result) res.status(200).json(result);
        else res.status(404).json("Not found")
    } catch(e) {
        res.status(400).json(e);
    }
})

router.delete("/deleteProduct", async(req, res) => {
    
    const product = req.body;
    if(!product) return res.status(400).json("Bad request");

    try {
        const result = await ProductModel.findByIdAndDelete(product._id);
        if(result) res.status(200).json(result)
        else res.status(400).json("Unable to delete the product")
    } catch(e) {
        res.status(400).json(e)
    }
})

module.exports = router;